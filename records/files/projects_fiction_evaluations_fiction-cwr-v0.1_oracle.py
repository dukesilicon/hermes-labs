"""Independent finite search/replay transitions; shared schema validation only.

Never calls the grader or its invariant function. A node-limit stop is
inconclusive; exhaustion concerns the declared finite action/cost budgets.
"""
from collections import deque
from harness import InputError, validate_world


def _advance(world, state, cost, primitive):
    positions = {e: i for i, e in enumerate(world["entities"])}
    if primitive not in world["actions"]:
        return None
    op = world["actions"][primitive]
    if cost + op["cost"] > world["budget"]["max_cost"]:
        return None
    for requirement in ("consume", "require"):
        for entity, quantity in op[requirement].items():
            if state[positions[entity]] < quantity:
                return None
    successor = list(state)
    for entity, quantity in op["consume"].items():
        successor[positions[entity]] -= quantity
    for entity, quantity in op["produce"].items():
        successor[positions[entity]] += quantity
    c = world["constraints"]
    if min(successor) < 0 or sum(successor) > c["inventory_cap"]:
        return None
    for entity, quantity in c["minimum"].items():
        if successor[positions[entity]] < quantity:
            return None
    for entity, quantity in c["maximum"].items():
        if successor[positions[entity]] > quantity:
            return None
    return tuple(successor), cost + op["cost"]


def accepts(world, plan):
    validate_world(world)
    if len(plan) > world["budget"]["max_actions"]:
        return False
    state = tuple(world["initial"][e] for e in world["entities"])
    cost = 0
    for primitive in plan:
        next_step = _advance(world, state, cost, primitive)
        if next_step is None:
            return False
        state, cost = next_step
    return state == tuple(world["goal"][e] for e in world["entities"])


def solve(world, max_nodes=100000):
    validate_world(world)
    if type(max_nodes) is not int or max_nodes < 1:
        raise InputError("max_nodes must be a positive integer")
    initial = tuple(world["initial"][e] for e in world["entities"])
    goal = tuple(world["goal"][e] for e in world["entities"])
    queue = deque([(initial, 0, ())])
    seen = {(initial, 0)}
    expanded = 0
    while queue:
        if expanded >= max_nodes:
            return {"status": "search_limit", "expanded": expanded, "actions": None}
        state, cost, plan = queue.popleft()
        expanded += 1
        if state == goal:
            return {"status": "solved", "expanded": expanded,
                    "actions": list(plan), "cost": cost}
        if len(plan) >= world["budget"]["max_actions"]:
            continue
        for primitive in world["actions"]:
            next_step = _advance(world, state, cost, primitive)
            if next_step is not None and next_step not in seen:
                seen.add(next_step)
                successor, next_cost = next_step
                queue.append((successor, next_cost, plan + (primitive,)))
    return {"status": "exhausted", "expanded": expanded, "actions": None}
