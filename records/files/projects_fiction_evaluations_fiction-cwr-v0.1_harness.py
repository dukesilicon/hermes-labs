"""Offline Fiction-CWR v0.1 token checker. No provider calls or code execution."""
import argparse
import json
import re
import sys
from pathlib import Path

VERSION = "fiction-cwr-token-v0.1"
MAX_JSON_BYTES = 1_048_576


class InputError(ValueError):
    pass


def _pairs(pairs):
    obj = {}
    for key, value in pairs:
        if key in obj:
            raise InputError(f"duplicate JSON key: {key}")
        obj[key] = value
    return obj


def parse_json(text):
    def invalid_constant(value):
        raise InputError(f"non-finite JSON number: {value}")
    try:
        if type(text) is not str or len(text.encode("utf-8")) > MAX_JSON_BYTES:
            raise InputError("JSON text exceeds input limit or is not text")
        return json.loads(text, object_pairs_hook=_pairs,
                          parse_constant=invalid_constant)
    except (ValueError, RecursionError, UnicodeError) as exc:
        raise InputError(str(exc)) from exc


def exact(obj, required, optional=()):
    if type(obj) is not dict:
        raise InputError("expected object")
    keys = set(obj)
    if not set(required) <= keys or not keys <= set(required) | set(optional):
        raise InputError(f"unexpected or missing keys: {list(obj)}")


def integer(value, lower=0, upper=1000):
    if type(value) is not int or not lower <= value <= upper:
        raise InputError(f"expected integer in [{lower}, {upper}]")


def identifier(value):
    return type(value) is str and re.fullmatch(r"[A-Za-z][A-Za-z0-9_-]{0,63}", value)


def counts(obj, entities, complete=False, positive=False):
    if type(obj) is not dict or not set(obj) <= set(entities):
        raise InputError("count map contains unknown entities or is not an object")
    if complete and set(obj) != set(entities):
        raise InputError("complete inventory required")
    for value in obj.values():
        integer(value, int(positive))


def invariant(world, inventory):
    c = world["constraints"]
    return (all(v >= 0 for v in inventory.values())
            and sum(inventory.values()) <= c["inventory_cap"]
            and all(inventory[k] >= v for k, v in c["minimum"].items())
            and all(inventory[k] <= v for k, v in c["maximum"].items()))


def validate_world(world):
    exact(world, ("schema_version", "id", "entities", "initial", "actions",
                  "goal", "constraints", "budget"))
    if world["schema_version"] != VERSION or not identifier(world["id"]):
        raise InputError("unsupported world version or invalid id")
    entities = world["entities"]
    if (type(entities) is not list or not 1 <= len(entities) <= 32
            or not all(identifier(e) for e in entities)
            or len(set(entities)) != len(entities)):
        raise InputError("entities must be distinct identifiers")
    counts(world["initial"], entities, complete=True)
    counts(world["goal"], entities, complete=True)
    ops = world["actions"]
    if (type(ops) is not dict or not 1 <= len(ops) <= 32
            or not all(identifier(a) for a in ops)):
        raise InputError("actions must be named primitive objects")
    for op in ops.values():
        exact(op, ("consume", "require", "produce", "cost"))
        for key in ("consume", "require", "produce"):
            counts(op[key], entities, positive=True)
        if set(op["require"]) & (set(op["consume"]) | set(op["produce"])):
            raise InputError("retained catalysts cannot be consumed or produced")
        if not op["consume"] and not op["produce"]:
            raise InputError("primitive must have an inventory effect")
        integer(op["cost"], 0, 10000)
    c = world["constraints"]
    exact(c, ("inventory_cap", "minimum", "maximum"))
    integer(c["inventory_cap"])
    counts(c["minimum"], entities)
    counts(c["maximum"], entities)
    b = world["budget"]
    exact(b, ("max_actions", "max_cost"))
    integer(b["max_actions"], 0, 64)
    integer(b["max_cost"], 0, 100000)
    if not invariant(world, world["initial"]):
        raise InputError("initial state violates an invariant")
    if not invariant(world, world["goal"]):
        raise InputError("goal violates a static invariant")


def load_world(path):
    world = parse_json(Path(path).read_text(encoding="utf-8"))
    validate_world(world)
    return world


def grade(world, output):
    """Grade raw model JSON without repair; traces are evaluator-only."""
    validate_world(world)
    inventory = dict(world["initial"])
    cost = executed = 0
    def result(passed, failure=None, step=None, detail=None):
        return {"pass": passed, "failure": failure, "step": step,
                "detail": detail, "actions_executed": executed,
                "cost": cost, "final_inventory": dict(inventory)}
    try:
        answer = parse_json(output)
        exact(answer, ("actions",))
        if type(answer["actions"]) is not list:
            raise InputError("actions must be an array")
        if not all(identifier(a) for a in answer["actions"]):
            raise InputError("actions must contain primitive identifiers")
    except InputError as exc:
        return result(False, "schema", detail=str(exc))
    for step, name in enumerate(answer["actions"], 1):
        if name not in world["actions"]:
            return result(False, "entity", step, "unknown primitive")
        op = world["actions"][name]
        if (step > world["budget"]["max_actions"]
                or cost + op["cost"] > world["budget"]["max_cost"]):
            return result(False, "budget", step, "hard budget exceeded")
        if any(inventory[k] < v for k, v in op["require"].items()):
            return result(False, "transition", step, "missing retained catalyst")
        if any(inventory[k] < v for k, v in op["consume"].items()):
            return result(False, "transition", step, "missing consumable")
        successor = dict(inventory)
        for key, value in op["consume"].items():
            successor[key] -= value
        for key, value in op["produce"].items():
            successor[key] += value
        if not invariant(world, successor):
            return result(False, "constraint", step, "successor violates invariant")
        inventory = successor
        cost += op["cost"]
        executed += 1
    if inventory != world["goal"]:
        return result(False, "goal", detail="exact final inventory not achieved")
    return result(True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)
    for command in ("inspect", "grade", "solve"):
        item = sub.add_parser(command)
        item.add_argument("world", type=Path)
        if command == "grade":
            item.add_argument("answer", type=Path)
        if command == "solve":
            item.add_argument("--max-nodes", type=int, default=100000)
    sub.add_parser("self-test")
    args = parser.parse_args()
    if args.command == "self-test":
        import unittest
        suite = unittest.defaultTestLoader.discover(
            str(Path(__file__).resolve().parent / "tests"))
        return 0 if unittest.TextTestRunner(verbosity=2).run(suite).wasSuccessful() else 1
    try:
        world = load_world(args.world)
        if args.command == "inspect":
            value = {k: world[k] for k in ("id", "schema_version", "entities", "goal", "budget")}
            value["primitive_names"] = list(world["actions"])
        elif args.command == "grade":
            value = grade(world, args.answer.read_text(encoding="utf-8"))
        else:
            from oracle import solve
            value = solve(world, args.max_nodes)
        print(json.dumps(value, indent=2, sort_keys=True))
        return 0 if args.command != "grade" or value["pass"] else 1
    except (InputError, OSError, UnicodeError) as exc:
        print(json.dumps({"harness_error": str(exc)}), file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
