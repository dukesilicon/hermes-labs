# Fiction-CWR v0.1 — Objective grader
Version: 0.1.0 | Status: reference token checker implemented; other family checkers specified  
Epistemic label: NEW PROPOSAL

## Decisive outcome
For synthesis, PASS is the conjunction of:
1. Strict response-schema validity.
2. Only supplied entities, primitives and permitted arguments.
3. Legal transitions under exact supplied semantics, including all preconditions and types.
4. Every hard invariant at the initial state and each relevant transition.
5. The complete goal predicate at termination.
6. All action, time, cost, size and other hard budgets.

All valid solutions pass, including alternate sequences and graph structures. The oracle supplies a satisfiability witness and, where certified, an optimum for matching; it is not an answer string to exact-match. No partial score can convert a failed hard condition into PASS. Diagnostic prefix length, achieved goal clauses or cost are secondary and explicitly unscored for the primary outcome. Optional prose is saved separately and unscored.

## Separation of responsibilities
Trusted fixture validation precedes response scoring. A malformed or unsupported fixture is a **harness error**; do not score a model failure. Provider exceptions, timeouts, missing response transport and exhausted external quotas are **provider errors**. A returned malformed object is **schema failure**. A successfully parsed illegal plan is **semantic failure**. Record refusal and truncation explicitly; if a response was returned, its invalidity remains a failed attempt in the prespecified operational outcome, with separate category and sensitivity analysis. Do not silently repair syntax, add actions or ask for retries as part of the main condition.

The implemented token interpreter consumes a declarative inventory fixture and a list of exact action identifiers. It does not execute model code or use an LLM judge. Duplicate JSON keys and non-JSON numeric constants are rejected. Unknown fields, unknown actions, negative/nonintegral inventory and boolean-as-integer values are rejected according to the documented schemas. Retained catalysts appear in require, never consume/produce. Apply inputs and outputs atomically; goal checks occur after the final action and invariants also hold at intermediate steps. Budget and invariant diagnostics may overlap: the reported first code is a deterministic checker order, not an internal causal explanation.

## Family algorithms
| Family | Checker |
| --- | --- |
| Token workshop | Exact integer inventory updates; catalyst requirements; conservation where specified; bounds, caps, final goal and summed costs |
| Typed pipeline | Parse declared DAG; permitted operations and references; topological evaluation of finite typed values; linear-use rules; exact output |
| Boolean circuit | Gate schema and wiring/acyclicity; exhaustive truth table; gate/depth budget |
| Key logistics | Replay location, key possession/consumption and door effects; inventory and protected cargo invariants |
| Scheduling | Every declared job exactly once; integer starts; precedences and half-open interval resource occupancy; horizon/makespan |
| Protocol | Replay exact state transition product; safety at every prefix; terminal goal and message budget |
| Typed-port assembly | Type/polarity/degree constraints; declared wire graph; reachability and isolation; component budget |
| Tiling | Full bounded board occupancy; orientations and tile inventory; pairwise edge adjacency; no overlap/gap; placement budget |

Complete specifications and witnesses are in [TASK-CATALOG.md](TASK-CATALOG.md). Seven checkers are not implemented here.

## Validity verification contract
For every checker: known satisfiable witnesses, alternate valid answers, targeted invalid mutants, exact small-world enumeration where feasible, comparison with separately implemented oracle/checker logic, label renaming, entity/rule-order permutation, and budget tightening/relaxation properties. Include mutants that achieve the goal while violating another hard condition, so the goal alone cannot pass.

For token workshop, [tests](tests/test_harness.py) exercise strict parsing, semantic rejection, alternate ordering, independent oracle agreement, exhaustive short action sequences in small bounded worlds, and metamorphic renaming/order. [VERIFICATION.md](VERIFICATION.md) records executed test counts and limitations. Agreement between two implementations is stronger than reusing one checker as the oracle, but does not prove absence of shared specification mistakes. Freeze grader version/hash and reviewed test artifacts before model runs.

Oracle answers, checker intermediate traces, and private holdout materials remain outside the main model-facing prompt. Validator feedback, retries or tools define separate system arms. Unsatisfiable tasks are deferred until independently certified; failed bounded search alone is not an unsatisfiability proof.
