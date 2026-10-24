# Fiction-CWR v0.1
Project: Project Fiction, Hermes Labs  
Version: 0.1.1 | Created: 2026-10-11 | Updated: 2026-10-12 | Status: proposed evaluation; offline reference implementation  
Epistemic labels: CURRENT HYPOTHESIS; NEW PROPOSAL; UNRESOLVED

Fiction-CWR measures goal-directed closed-world recombination: produce an executable solution from supplied primitives, exact semantics, constraints and budgets when an analogous composition motif has or has not been demonstrated. It tests existing AI capability related to FH-01/FH-07; it does not establish an innovation event, human-relative deficit, absence from pretraining, or reward suitability.

**Recorded model runs: zero.** [EXP-0002](../../experiments/fiction-cwr-exp-0002.md) is a proposal. Eight concrete showcase specifications are a directional starting set, not eight implemented generator families or independent confirmation. The token workshop is implemented, with a bounded whole-solution audit and one imported public F/C candidate. The other seven full checkers and private structural generators remain proposed. The candidate retains measured source mismatches and is not frozen for model execution. [Verification](VERIFICATION.md) records actual offline checks after execution.

## Eight deliverables
| Deliverable | Versioned artifact |
| --- | --- |
| Falsifiable hypothesis and capability | [Design](DESIGN.md), [canonical hypotheses](../../hypotheses.md) |
| Retrieval, execution, familiar and withheld synthesis contrasts | [Design](DESIGN.md), [task catalog](TASK-CATALOG.md), [prompt specification](PROMPTS.md) |
| Objective exact-validity scoring | [Grader](GRADER.md), [reference checker](harness.py), [independent oracle](oracle.py) |
| Eight concrete candidate tasks | [Task catalog](TASK-CATALOG.md), [token fixture](fixtures/token-workshop-001.json), [private witness](fixtures/private/token-workshop-001.witness.json) |
| Frontier model reproducibility, statistical and budget plan | [Model plan](MODEL-PLAN.md), [proposed configuration](config/run-plan.json), [run record template](config/run-record-template.json) |
| Failures, alternatives and analysis | [Analysis](ANALYSIS.md), [prior art](PRIOR-ART.md) |
| Hackathon submission and implementation steps | [Submission draft](SUBMISSION.md), [roadmap](ROADMAP.md) |
| Hermes integration and durable records | [Integration](INTEGRATION.md), [experiment record](../../experiments/fiction-cwr-exp-0002.md) |

## Run the offline reference
Requires Python 3.10+ and the standard library only. No installation or network is needed. Run from this directory:

```text
python -B -m unittest discover -s tests -v
python -B verify_showcases.py
python -B harness.py inspect fixtures/token-workshop-001.json
python -B harness.py solve fixtures/token-workshop-001.json
python -B harness.py grade fixtures/token-workshop-001.json fixtures/private/token-workshop-001.witness.json
```

The witness and oracle are evaluator-only. Model-facing prompts receive only the declared world and selected demonstration materials. Inspect the CLI usage if a command is changed during implementation. Expected witness grade: PASS; the independent solver finds a valid four-action solution. Optional explanations are absent from the strict scored object and remain unscored if recorded separately.

## What must happen before empirical use
Build and validate matched F/C stimuli with structural holdouts and independent fixtures; implement the remaining selected checkers; freeze task hashes, inference scope, numerical criteria, settings and analysis; verify official provider models/prices at execution time; obtain the user's budget authorization. [Roadmap](ROADMAP.md) supplies the concrete acceptance conditions. No provider adapter, API calls, classifier training, RL or external upload is implemented in this phase.

All source claims are scoped in [prior art](PRIOR-ART.md); current [official hackathon guidance](SUBMISSION.md) was checked on 2026-10-11. The schedule conflict is retained. Pre-event Hermes research and this 2026-10-11 addition must be disclosed separately from work performed during the event.

**Event timing update — 2026-10-13:** The user confirms the October 30 kickoff and the need to build during the event. [Live Build Plan](LIVE-BUILD-PLAN.md) records preparation and event work; [submission guidance](SUBMISSION.md) was rechecked on October 13. Current code remains pre-event work, with no event-period additions or model runs. Earlier-work disclosure is required; exact kickoff hours and the closing deadline still differ between official pages.

## Token composition audit v0.1.1
[Matching and scientific scope](MATCHING-AUDIT-v0.1.1.md) · [auditor](audit_token_pair.py) · [tests](tests/test_token_pair.py) · [pair manifest](config/token-pair-manifest-v0.1.1.json) · [F model material](TOKEN-PAIR-F-v0.1.1.txt) · [C model material](TOKEN-PAIR-C-v0.1.1.txt).

The next offline gate now certifies all 121 TW-001 sequences and both valid solutions, and reuses one EXP-0003 public development pair without importing its workflow intervention. Each target's 87,381-sequence grammar is covered by independently checked invalid-prefix pruning: 77 full-state comparisons and two accepted eight-action solutions. Source F/C worlds have 2/13 valid plans, so source matching is incomplete. The dependency is supplied in rules/primitive evidence and withheld only from C's multistep trace.

Run only the new checks from this directory:
```text
python -B -m unittest discover -s tests -p test_token_pair.py -v
python -B audit_token_pair.py
```
The auditor prints evaluator-only plans/certificates. Send evaluated models only the exact F or C text listed in the manifest, never the full package or auditor output. No provider adapter or model calls exist. [Actual results](verification/token-pair-audit-v0.1.1.json) and [12-test transcript](verification/token-pair-tests-v0.1.1.json) retain scope/provenance. [Prior record capsule](verification/prior-records-v0.1.0.json) preserves exact pre-integration bytes; older snapshots and verification records remain intact.
