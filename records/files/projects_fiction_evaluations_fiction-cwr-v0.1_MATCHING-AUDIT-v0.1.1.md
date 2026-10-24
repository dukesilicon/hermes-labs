# Fiction-CWR — Token pair audit v0.1.1
Project: Project Fiction, Hermes Labs | Date: 2026-10-12  
Status: offline prototype checked; public development candidate; empirical freeze incomplete  
Epistemic labels: NEW PROPOSAL; observed engineering results; UNRESOLVED  
Experiment: EXP-0002 | Model/human/paid runs: 0

## What was built and reused
The next offline gate reuses the saved `development-one_transform` pair from [EXP-0003's package](../fiction-cwr-workflow-v0.1/README.md), without importing its staged workflow or allocation. [F source material](../fiction-cwr-workflow-v0.1/artifacts/model/development-one_transform-F.json), [C source material](../fiction-cwr-workflow-v0.1/artifacts/model/development-one_transform-C.json) and [existing certificates](../fiction-cwr-workflow-v0.1/artifacts/evaluator/certificates.json) remain unchanged.

New [auditor](audit_token_pair.py), [explicit evaluator roles](config/token-pair-roles.json), [12 regression tests](tests/test_token_pair.py), [standalone F](TOKEN-PAIR-F-v0.1.1.txt)/[C](TOKEN-PAIR-C-v0.1.1.txt) model inputs and [pair manifest](config/token-pair-manifest-v0.1.1.json) make one concrete EXP-0002 prototype inspectable. Semantic import hashes must match before certification. This is one reused public base, not an independent new task or private confirmation dataset.

## Necessary structure across the full bounded space
For original TW-001 the auditor directly replays every sequence over three primitives within four actions: 121 sequences, exactly two valid solutions, optimum length/cost 4. Both orders remain accepted by the frozen checker.

For imported targets, the four-primitive grammar within eight actions contains 87,381 sequences. A complete disjoint cover prunes only prefixes whose exact failure/step, committed inventory, cost and executed count agree between independently written shadow replay and the frozen checker. Illegal prefixes cannot become valid by appending actions. Each target needs 77 comparisons: 27 legal prefixes and 50 rejected next steps, retaining both valid eight-action/cost-8 plans. This covers the full grammar without 87,381 direct grader calls.

The reviewed contract fixes make raw→base, coat base+reagent→converted, join base+converted→product, optional irreversible finish product→terminal, with retained catalyst. Targets start with zero intermediates, have unique producers/no recycling and an exact leftover-free product goal. Every joined operand must therefore be produced through the declared type dependencies. All accepted plans meet the necessary counts; every valid alternative remains accepted.

This certifies a **type-level production dependency**, not individual ancestry of fungible tokens, a unique answer, an internal innovation event or creativity. Unsupported effects, preloaded target intermediates, incomplete searches or misbound roles block the proof. A preloaded-world regression retains its valid three-action solution's PASS while refusing the unsupported necessity claim.

## Target and evidence matching
| Property | F | C |
| --- | --- | --- |
| Entities / primitives | 8 / 4 | 8 / 4 |
| Initial / goal inventory total | 7 / 3 | 7 / 3 |
| Inventory cap | 7 | 7 |
| Minimum catalyst | 1 | 1 |
| Maximum base / product / terminal | 1 / 2 / 1 | 1 / 2 / 1 |
| Action / cost limits | 8 / 8 | 8 / 8 |
| Optimum / valid bounded solutions | 8 / 2 | 8 / 2 |
| Legal prefixes / rejected extensions | 27 / 50 | 27 / 50 |
| Full-state comparisons | 77 | 77 |
| Primitive examples: legal / invalid | 4 / 10 | 4 / 10 |
| Compound demos / actions / states | 1 / 5 / 6 | 1 / 5 / 6 |
| Default sorted JSON evidence bytes | 6,485 | 6,485 |
| Complete standalone input bytes | 7,447 | 7,447 |
| One accepted output's JSON bytes | 117 | 117 |

Canonical semantics and accepted solution sets match through reviewed role maps; target IDs and source/target IDs differ. Primitive examples are independently checked for local prerequisite/effect truth and match under renaming. The [common prompt](TOKEN-PAIR-PROMPT-v0.1.1.txt) explicitly states their local scope; hard target constraints remain binding during synthesis. Complete messages/provider tokens, prospective counterbalance and empirical settings remain unfrozen. Equal bytes and solver metrics do not prove equal cognitive burden.

## Measured source mismatch
F's trace is make,make,coat,join,finish. C's trace is join,coat,make,make,finish. Both use make×2 and coat/join/finish×1, with five actions and six states. Source entities/primitives, initial/final stock totals (7/5), inventory cap (7), constraints and budgets match. Their base cap is 2, tighter target cap 1.

F has raw2,reagent1,catalyst1 and inert reserve3; base/converted start zero. C replaces reserve with base2/converted1; its first join consumes supplied operands, then later actions restore stock. Source roles/usefulness, goals, order and trajectories differ.

| Source bounded property | F | C |
| --- | --- | --- |
| Valid plans / optimum | 2 / 5 | 13 / 5 |
| Legal prefixes | 10 | 52 |
| Rejected next steps | 23 | 69 |
| Strict comparisons | 33 | 121 |
| Covered grammar sequences | 1,365 | 1,365 |

These differences are recorded rather than silently equated. The demo is supplied, not synthesized by the model; source search statistics are engineering diagnostics, not observed comprehension difficulty. A future F−C loss could reflect helpfulness/load/stock-role differences as well as compound familiarity.

## What is withheld
The complete rules and shared one-step examples disclose raw→base, base→converted and base+converted→product. That dependency information remains available to both conditions for valid deduction.

F's multistep trace **realizes** the necessary producer→transform/join dependency. C's demonstrated join consumes initially supplied operands before later producers/transforms, so its trace lacks that realized dependency. Do not claim C lacks all motif information, erase prior knowledge or prohibit deduction. Common negative examples also expose prerequisites and do not themselves establish model mastery.

## Copying boundary
Per condition the new audit replays 912 transformations: every nonempty ordered source subsequence, repetitions of one unchanged block fitting the action budget, and injections extending to global action bijections. None passes. This class includes exact copying, prefixes and contiguous truncation.

It excludes arbitrary reordering/mixing and general analogy. Removing finish, rearranging as make–coat–make–join and repeating the block yields a valid target plan from either source multiset. This is permitted recombination, not a reason to fail the answer. A relaxed-buffer mutant makes an audited copying transformation pass and is detected by a regression test. “No tested copying adaptation passed” must not become “no simple adaptation exists.”

## Verification improvement and actual results
The prior workflow audit tested only PASS versus goal on legal prefixes and NOT-PASS on rejected extensions. A legal non-goal prefix is also NOT-PASS, so an incorrectly pruned branch could evade that check. The new comparison includes precise failure/step and complete committed state/cost/count; a false-pruning mutant now rejects certification. Current saved solutions pass the stronger audit; no current wrong solution list or model grade is alleged.

[Raw audit](verification/token-pair-audit-v0.1.1.json) and [test transcript](verification/token-pair-tests-v0.1.1.json) record Python 3.12.14, exact commands and exit 0. Twelve new tests passed; no historical suites were rerun. The shadow shares validation/specification/failure precedence with the frozen grader, so independence remains narrower than a separately formalized specification.

## Current conclusion and next decision
This prototype establishes bounded solution coverage, necessary type dependencies, identical target semantics, matched local exposure and a declared limited copying exclusion. It is a **public development comparison with unresolved source matching**, not a ready confirmatory or fully isolated recombination test.

Resolve or explicitly narrow source-evidence matching, negative-example usefulness/order and counterbalance before freezing a protected main-arm panel. P/R/E, provider tokenizer/model/settings, resources, criteria, transport logging and authorized spend remain separate gates. Private structural generators and prospectively powered confirmation remain later work. No model deficit, human/process/runtime/reward result follows from these offline checks.

[Seventeen exact prior record bytes](verification/prior-records-v0.1.0.json) remain recoverable; existing snapshots and EXP-0003 apparatus are unchanged. [DEC-0005](../../../../decisions/decision-log.md#dec-0005--reuse-token-evidence-and-strengthen-bounded-certification) records the narrower measurement choice.
