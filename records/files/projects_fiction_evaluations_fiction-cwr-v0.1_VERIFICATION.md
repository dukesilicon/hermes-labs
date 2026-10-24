# Fiction-CWR v0.1 — Verification
Version: 0.1.1 | Created: 2026-10-11 | Updated: 2026-10-12 | Status: offline prototype checked; no model runs

## Historical v0.1.0 checks — 2026-10-11
Runtime: Python 3.12.14 on Windows; standard library only. Commands ran from a recovered staging copy of the package. [Raw staging results](verification/staging-results.json) retain output and exit codes.

| Check | Observed result |
| --- | --- |
| `python -B -m unittest discover -s tests -v` | 10 test methods passed; includes 150 inventory/action-limit/cost-budget variants of one fixed token recipe system and all 5,370 bounded action sequences. |
| `python -B verify_showcases.py` | Eight fixed showcase checks passed, including both token witnesses and both schedules. This is fixed-witness sanity checking, not validation of seven additional full graders. |
| `python -B harness.py inspect fixtures/token-workshop-001.json` | Strict fixture validation succeeded. |
| `python -B harness.py solve fixtures/token-workshop-001.json` | Independent transition/search implementation found a four-action solution of cost 4; six nodes expanded. |
| `python -B harness.py grade fixtures/token-workshop-001.json fixtures/private/token-workshop-001.witness.json` | PASS; exact final inventory, four actions, cost 4. |

The tests cover strict parsing, duplicate keys, non-JSON constants, response/world schemas, resource legality, budgets and intermediate invariants, acceptance of alternative valid solutions, renaming/order invariance, search limits and zero-cost actions. Two regression tests check reported token costs under changed costs and refusal of unsupported showcase semantics.

## Local installation and records
The same five commands were executed from the installed local Hermes package using Python 3.12.14. All completed with exit code 0: 10 test methods passed, all eight showcase witness checks passed, fixture inspection succeeded, the solver found a valid four-action/cost-4 solution, and the retained witness graded PASS. [Raw installed results](verification/local-results.json) record the exact commands, working directory and observed outputs.

All 17 prior canonical record bytes matched the existing SHA-256 snapshot manifest before and after the save. The archived root README remains intact; the snapshot overview uses `SNAPSHOT.md` to avoid a name collision. All 246 planned local file links resolved against the prepared integration; final installed file/link/hash verification is recorded in [the file manifest](verification/file-manifest.json).

The recovery retained all 40 drafts, saved their package/record integration through scoped filesystem grants and normal file tools, corrected the showcase cost report and unsupported-semantics handling, and added two regression tests. No unrestricted terminal-input retries were used during recovery.

## Evidential limits
This is an offline engineering result. Frontier-model calls: **0**; paid calls: **0**. No model deficit or human/process/reward result is inferred. The oracle shares fixture validation with the grader, so its transition/search independence is narrower than a separately formalized independent specification. Exhaustive checking here concerns bounded variants of one recipe system, not arbitrary generated worlds.

At the v0.1.0 freeze, the whole-solution-space necessary-motif certificate and matched F/C demonstration/solver audit were unimplemented. The v0.1.1 extension below supersedes that status for its supported public token scope. Private generators, seven full family graders, powered confirmation and provider/budget freeze remain pending. The scheduling showcase replays valid schedules; it does not independently prove the recorded optimum.

## 2026-10-12 — Token audit extension v0.1.1
[Raw audit result](verification/token-pair-audit-v0.1.1.json) and [new test transcript](verification/token-pair-tests-v0.1.1.json) record Python 3.12.14, exact commands and exit code 0. Only the new audit/tests were executed; historical completed suites were not rerun.

- Twelve new test methods pass, including false pruning, incorrect non-goal state/cost, partial failure state, metadata/role corruption, preloaded targets, incomplete enumeration, renaming and a copying-solvable relaxed-buffer mutant.
- TW-001: all 121 grammatical sequences within four actions replayed; exactly two valid plans, optimum length/cost 4; both remain accepted.
- Imported public F/C targets: each grammar has 87,381 sequences. A disjoint illegal-prefix cover certifies all of it using 77 full-state comparisons (27 legal prefixes, 50 rejected next steps), retaining both valid eight-action/cost-8 solutions. This is not 87,381 direct grader calls.
- Every valid target plan requires the reviewed type-level make/coat/join dependency. No individual fungible-token ancestry or internal innovation event is certified.
- Each source demo is legal with a verified six-state trace. Source F/C have 2/13 valid plans, 10/52 legal prefixes and 23/69 rejected extensions; this is an observed matching limitation.
- Each copying audit replays 912 declared subsequence/repeated-block/bijective-rename candidates without an accepted adaptation. Arbitrary reordering/mixed fragments remain allowed.
- Primitive evidence matches under the explicit role maps: 14 examples each, 4 legal/10 invalid. Evidence is 6,485 serialized UTF-8 bytes per condition; complete standalone inputs are 7,447 bytes each. Provider tokens are unmeasured.

The earlier oracle/checker comparison checked only PASS/goal on legal prefixes and NOT-PASS on rejected extensions. NOT-PASS also describes legal non-goal prefixes. The new audit requires precise failure classification and committed-state/cost/count agreement before pruning. Existing candidate certificates remain consistent under this stronger check; the assurance gap is recorded without rewriting historical test reports.

Prior state is byte-recoverable from [the 17-record history capsule](verification/prior-records-v0.1.0.json); compressed JSON contains original bytes and SHA-256 values. Creation of a new archive folder was denied, so this normal-file-tool artifact resides in the writable package verification directory. [Current integrity record](verification/token-pair-file-manifest-v0.1.1.json) checks it, existing snapshots and input rendering.

Original checker/oracle/fixture and all EXP-0003 source/evidence files are retained. Model/human/paid runs remain zero. The current prototype covers one supported contract and an imported public related base. Source matching, order/counterbalance, provider/P/R/E/compute/criteria/spend freeze, private generators and confirmation remain unresolved.
