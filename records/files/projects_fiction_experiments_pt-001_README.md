# PT-001 — Experimental feasibility results

Project: Project Fiction, Hermes Labs. Version: 0.1. Record date: 2026-10-23.

Status: **completed local measurement rehearsal**; cognitive-system experiment not run. Classification: constructed examples, deterministic strategy outputs and bounded exhaustive verification. No human/model observations.

**Answer:** In these worlds, outcome scores cannot distinguish a benefit of changing problem formulation from a benefit of better objective optimization or search. The apparatus measures feasibility and explicitly chosen value reliably within its finite contract; it does not identify problem transformation as the cause of benefit. This is a measurement limitation, not evidence that human or AI reframing has no value.

## Reproduce or inspect

- [Protocol and reconciliation](PROTOCOL.md), specified before the first run.
- [Exact supplied request](USER-REQUEST.txt) and [four worlds](worlds.json).
- [Sequential evaluator](evaluator.py), [separately implemented algebraic reference](reference.py), [constructed strategies](strategies.py), [runner](run.py), [tests](tests/test_packet.py).
- [Run 001 results/frontiers/adversaries](runs/run-001/results.json), [all strategy traces](runs/run-001/strategy-traces.json), [compact strategy table](runs/run-001/strategies.csv), [runtime/input hashes](runs/run-001/run-record.json), [test output](runs/run-001/test-output.txt).
- Full allocation/outcome records: [W1](runs/run-001/W1-outcomes.json), [W2](runs/run-001/W2-outcomes.json), [W3](runs/run-001/W3-outcomes.json), [W4](runs/run-001/W4-outcomes.json).

Run from this directory with Python 3.10+ and no dependencies:

```text
python -B run.py --output runs/reproduction
python -B -m unittest discover -s tests -v
```

The runner refuses an existing output directory. The actual run used bundled Python 3.12.14; its full path/platform/command are recorded. No random sampling or seed, model identity, participant dataset or inference prompt applies. Condition instructions and deterministic procedures are in the protocol and runtime record. Spend, external model calls and participants: zero.

## Verified worlds, competing objectives and difficulty

All worlds distribute six credits across A/B/C, initially unserved, with capacity four each and at most six deliveries. Delivery costs are [1,1,1] in W1/W3 and [1,2,1] in W2/W4. Proxy score is 3A+2B+C. Each world's value tables are fully specified in the input. These tables define synthetic preferences, not measured welfare. Complete feasible plans are accepted; no privileged clever answer is required.

| World | Distinct feasible allocations | Legal action sequences | Best value among proxy optima | Maximum total value | Robust proxy conflict | Pareto allocations |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| W1: unequal unmet benefit | 72 | 1,051 | 12 | 20 | 8 | 6 |
| W2: threshold benefits/costly delivery | 44 | 272 | 10 | 12 | 2 | 4 |
| W3: aligned marginal benefit | 72 | 1,051 | 16 | 16 | 0 | 4 |
| W4: aligned benefit/costly delivery | 44 | 272 | 14 | 14 | 0 | 4 |

The two hypothesized conflict and two no-conflict labels hold **only for the primary total-value criterion**. W2's two proxy-optimal allocations have values 5 and 10: comparing against the worse proxy tie would exaggerate the gap to 7. The robust gap is 2. W4 has two primary optima; all others have one. Optimal-allocation density is respectively 1/72, 1/44, 1/72 and 2/44.

The independent reference enumerated all 232 world-specific feasible allocation vectors. Replay examined all 1,093 sequences of length 0–6 per world: **4,372 sequences**, 2,646 legal and 1,726 illegal. All legal final states, costs and outcome measures agreed with the algebraic reference; multinomial counts matched each allocation's sequence multiplicity. Sequence ordering creates repeated outcomes, not independent scientific observations. The Pareto frontier uses proxy, total benefit, minimum recipient benefit and coverage; complete frontiers and all objective optima/ties are in the results.

W1/W3 and W2/W4 match feasible geometry within pairs, but not utility curvature, objective conflict, optimal-set density or bounded-search performance. Across pairs, legal counts differ almost fourfold despite equal horizon and three action types. These worlds are not established as cognitively difficulty-matched. Counts are exact for the specified worlds, not a general proof of evaluator correctness or of real stakeholder value.

## Actual strategy results

P = proxy optimization (diagnostic only); V = value-aware solving; R = value-aware balance-first reformulation strategy; S = value-aware high-utilization-first expanded search. All four receive identical task facts and value tables. Instructions and candidate ordering differ. S_R_ORDER is an additional search-only ablation with R's exact candidate order.

**Canonical recipient order, eight evaluated candidates per condition:**

| World | P total value | V total value | R total value | S total value | R − V | R − S |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| W1 | 12 | 12 | 18 | 20 | +6 | −2 |
| W2 | 8 | 8 | 9 | 10 | +1 | −1 |
| W3 | 4 | 4 | 12 | 12 | +8 | 0 |
| W4 | 4 | 4 | 12 | 14 | +8 | −2 |

This is one prespecified ordering slice, not a favorable-run selection. All six enumeration permutations and ceilings 4/8/16/full were run: **480 constructed strategy records** including the ablation (384 in the four main conditions). At budget 8, R−V ranges across permutations are [5,11], [1,5], [3,8], [0,8] for W1–W4; R−S ranges are [−4,2], [−1,−1], [−3,0], [−2,−2]. R's apparent gain over weak lexicographic V occurs in both no-conflict worlds. These are ordering effects in the specified policies, not evidence of innovation.

At full coverage, V, R and S all attain 20/12/16/14. Equality at exhaustive coverage is expected mathematically and does not refute a possible bounded cognitive benefit. More decisively for this implementation, **S_R_ORDER reproduces R's candidates and final allocation in every world, permutation and budget**. The intervention has no independently identifiable formulation component beyond its programmed search policy.

Additional search can reproduce or exceed apparent gains. For example, W3 at budget 4 gives R=12 and S=10; S at budget 8 reaches 12, and at 16 reaches 15 versus R=13. Those larger-budget comparisons are explicitly resource-unequal. Matched-budget S can also outperform R, as the table shows. P's stakeholder score need not rise with search: in W1 canonical order it is 20 at budget 16 but falls to 12 at full proxy optimization. Optimizing the proxy more successfully can reduce value.

Candidate-evaluation counts are matched, **not total compute**. All policies screen the full 125-vector Cartesian domain and sort all legal candidates before scoring their budgeted subset. Their sorting rules differ. Those setup counts and measured runtimes are retained; no compute-equivalence or efficiency claim follows.

## Counterexamples and value sensitivity

Twenty-two explicit adversarial submissions were executed, plus the direct-value/search contrasts above:

- Superficial reformulation text on an unchanged plan gets identical validity/value. Novelty is deliberately unscored; this prevents wording-based credit but does not validate a novelty metric.
- Claiming an easier proximal goal with the same plan produces no stakeholder benefit or scoring change.
- Capacity, budget, horizon and unknown-action violations are rejected without outcome credit.
- Direct value optimization reaches every primary ceiling. The search-only R-order ablation is identical at every matched budget, exposing a failed mechanism-identification criterion.

Alternative criteria change outcomes materially. Fairness optimizes minimum recipient benefit, then total; coverage optimizes number served, then total; units optimizes delivered units, then total. These are explicit normative alternatives, not post hoc replacements for the primary criterion.

| World | Primary optimal allocation(s) | Fairness optimal allocation(s) | Primary no-conflict status survives fairness? |
| --- | --- | --- | --- |
| W1 | [0,2,4] | [3,2,1] | Already conflict; remains conflict |
| W2 | [0,2,2] | [1,1,3], [2,1,2] | Already conflict; remains conflict |
| W3 | [4,2,0] | [1,2,3] | No: becomes conflict |
| W4 | [4,0,2], [4,1,0] | [2,1,2] | No: becomes conflict |

Coverage also makes W3/W4 conflict worlds. Conversely, the units-first criterion removes W2's conflict. Thus “reframing opportunity” is not an objective-free property of the environment. Independent enumeration verifies consequences of value assumptions; it cannot legitimize those assumptions. These criteria concern a toy scenario and need stakeholder justification before real use.

## What passed, what failed, and what remains untested

**Passed within scope:** bounded legality/outcome verification, complete feasible-space and frontier characterization, explicit robust conflict checking, narrative-invariant scoring, adversarial rejection and reproducible constructed-strategy comparisons. Eight test methods passed, including all recipient renamings, resource-tightening monotonicity and mutations exposing omitted reference outcomes, corrupted value scores and wrong delivery costs. The two implementations share an author, task tables and mathematical specification; independence is implementation-level, not independent research-team validation.

**Failed attribution:** No reframing-specific functional benefit is identified. R is a search-order policy over the same legal plans and declared objective. A no-reframing search policy can be extensionally identical. An R−proxy difference therefore confounds objective and search, and even R−V does not establish formulation value. No event labels, novelty measure, human judgment validity or process mechanism were tested. Fixed task facts coexist with different procedural information.

**Interpretation:** The experimental distinction is provisionally usable for asking questions, but its causal measurement is insufficient here. Do not define problem transformation solely as better scored outcomes, changes in declared goals, or reformulation language. Preserve the possibility of a genuine cognitive formulation intervention, while requiring independent evidence and stronger controls.

## Smallest next cognitive-system test — NEW PROPOSAL, not executed

Use one pinned available cognitive system and fresh matched sessions for V/R/S on the four worlds: twelve cells, one trial per cell, strictly a manipulation-feasibility check. This is the minimum three-control-by-four-world coverage, not a powered sample or confirmatory recommendation. Retain P as the existing software diagnostic. No provider/model, token ceiling, numeric effect threshold or spend is selected; external model calls or recruitment need authorization.

- **Hypothesis:** An explicit formulation prompt can alter independently coded formulation choices and improve valid stakeholder value beyond value-aware and search-focused prompts at a common resource budget.
- **Operationalization:** Same task facts/value criteria and legal output space; identical response format, iteration opportunities and resource ceilings; matched instruction length as far as practical. R asks for formulation review, S for candidate expansion, V for direct value solving. Primary contrasts are R−V and R−S on valid outcomes; invalid responses remain failures. Independently code formulation statements separately from the outcome scorer, with rater evidence access and uncertain cases fixed before running. Such statements remain fallible reports, not direct mechanism observations.
- **Rivals/controls:** Prompt hints, wording, verbosity, candidate coverage, effort, ceiling effects and evaluator expectations. Counterbalance world-to-condition order, use isolated sessions, retain actual resource use and candidate-search traces separately from labels; do not derive formulation labels from the benefit score. Test whether the tasks permit informative below-ceiling performance before expanding the sample.
- **Success/failure:** First assess protocol adherence, usable independent formulation coding and non-ceiling variation. If a putative gain disappears against S or depends only on better objective disclosure, attribution remains unsupported. Numerical continuation rules and uncertainty treatment must be justified and frozen before any larger claim; twelve cells cannot demonstrate a reliable cognitive effect.
- **Next decision:** If the manipulation cannot be distinguished from search instructions, revise or abandon that operationalization rather than scale data collection. If manipulation and scoring are interpretable, design independent protected tasks and a powered comparison. Neither outcome alone establishes a human mechanism or validates Project Fiction.

The canonical Fiction research question, CWR implementation and all human/classifier/runtime/reward gates remain intact. The missing original Cycle 3 report and CV-001 materials remain provenance gaps; this new packet does not purport to recover them.
