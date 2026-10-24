# Project Fiction — Methodology Audit

Status: exploratory

Updated: 2026-10-12

**Scope:** Audit of the supplied handover and repository framing against [baseline v0.1](literature/cognitive-science-baseline-review-v0.1.md). The older protocol, data, feature definitions, and results were not supplied, so this is not an audit of executed work.

| Issue | Current material / risk | Required response | State |
| --- | --- | --- | --- |
| Ontology | A binary construction-versus-retrieval framing would misclassify a component as an opposite. | Adopt the handover's reuse-versus-transformation contrast; retain effortful retrieval comparisons. | Correction adopted; measurement unresolved. |
| Event validity | A stage model does not prove an observable discrete event. | Test dimensions, windows, and event feasibility before training a detector. | Unresolved. |
| Information control | Identical prompts do not equal identical prior knowledge or unchanged internal state. | Define external access; record preparation/exposure, permissible derivation, and knowledge limits. | Unresolved. |
| Ground truth | Telemetry-selected labels may recapitulate the same features in a classifier. | Separate recruitment/selection, process evidence, product ratings, and feature extraction; record selection bias. | Independence required; rubric unresolved. |
| Human judgments | Agreement, self-reported origin, and Aha are not sufficient validity evidence. | Check rater evidence access, reliability, rubric validity, and uncertain cases; do not force binary certainty. | Unresolved. |
| Novelty/actionability | Original wording, semantic distance, or plausible use may stand in for innovation. | Separate product criteria and process claims; include recalled-original and superficial-novelty cases. | Unresolved. |
| Confounds | Load, difficulty, hesitation, uncertainty, retrieval, identity, domain, prompt, and length can predict labels. | Controlled contrasts, nuisance-only baselines, feature ablations, and independent outcomes. | Required; exact controls proposed. |
| Domain/modality | Handover reports older designs conflated domain generalization with modality translation. | Domain A/Modality 1 to Domain B/Modality 1 first; translation later under separate design. | Separation adopted; modality/domain pair unset. |
| Leakage and tuning | Repeated participants, sessions, items, and test-domain threshold fitting inflate performance. | Group-disjoint splits; fit selection/preprocessing on training data; lock the transfer test and threshold. | Design requirement; not implemented. |
| Statistical unit | Many clips do not equal many independent participants; a trait predictor is not an event detector. | Define prediction and inference units; uncertainty respects clustering and sampling. | Unresolved. |
| Evidence strength | A small pre-test is directional and cannot confirm the thesis. | Decision-oriented continuation/failure rules; later powered, frozen confirmation. | Adopted distinction; numeric rules unset. |
| Runtime utility | Detector performance does not demonstrate beneficial assistance. | Separate intervention outcome study against matched prompts/baselines. | Fallback hypothesis. |
| Reward utility | Accuracy does not establish a safe or useful reward. | Independent tests for noise, gaming, exploitation, proxy optimization, and distribution shift. | Unresolved; no production RL justification. |

**NEW PROPOSAL:** Prioritize construct/label feasibility, then a cheap within-domain signal check, then a locked same-modality transfer check if earlier gates survive. See [decision-gates.md](decision-gates.md). This documentary audit supplies no empirical evidence of gate passage or protocol readiness.

## Contradictions and limits retained

The initialization scaffold's "no recorded hypotheses" was accurate for the material then available, and is superseded by the handover's current provisional hypotheses. The historical rejection of narrative fine-tuning is imported as reported, without an invented date or experimental result. The process model is compatible with related memory research but its event conclusion is not established. Current conceptual corrections do not retroactively establish valid past labels, protocols, or findings.

## 2026-10-11 — Fiction-CWR audit extension
**NEW PROPOSAL:** Existing-model objective synthesis can be studied alongside human feasibility work without adopting an innovation-event label. [Fiction-CWR](evaluations/fiction-cwr-v0.1/DESIGN.md) handles finite semantics and constraints directly.

| Risk | Required response | Current state |
| --- | --- | --- |
| “Novel” implies unseen pretraining | Restrict novelty to supplied evidence; retain prior knowledge | Scope specified; empirical transfer unresolved |
| One withheld witness stands for all valid plans | Enumerate or certify necessary structure; accept alternatives | Certification unimplemented |
| F reveals target answer | Separate source/target, copy/rename/truncation audits | Matched stimuli unimplemented |
| F/C difficulty/evidence mismatch | Exposure, optimum, token burden and fixed-solver manifests | Contract specified; residual mismatches unresolved |
| Grader circularity/defect | Independent transition oracle, alternates, mutants and exhaustive worlds | Token QA implemented; actual checks linked in VERIFICATION |
| Small showcases imply confirmation | Directional pilot; private generators and prospective independent sample | Eight specs; powered design unresolved |
| Mastery selection hides failures | All-model and qualified reporting; independent P and threshold sensitivity | Analysis specified; no outcomes |
| Capability branch displaces human work | Preserve EXP-0001 and all separate human/runtime/reward gates | Complementary scope documented |

No empirical contradiction is resolved by engineering implementation.

## 2026-10-11 — Workflow attribution audit extension
**NEW PROPOSAL:** [EXP-0003](experiments/fiction-cwr-workflow-exp-0003.md) prepares a separately versioned diagnostic. The earlier unimplemented main-arm private matching gates remain unresolved; new public candidate audits do not retroactively complete them.

| Risk | Required response | State |
| --- | --- | --- |
| One answer versus equipped agent | Same model, stages, full same-trial history, evidence and permissions; cumulative caps and actual usage | Offline contract/checks prepared; provider freeze pending |
| Equal caps imply equal compute | Count repeated input/history, outputs and exposed reasoning; record hidden/unavailable usage and cost | Actual equivalence unverified until runs/provider review |
| Smaller gap means success | Report C gain, F change and both gaps; no benefit from F-only deterioration | Prospective numeric rules unresolved |
| Familiar source can be replayed | Exact/renamed/subsequence/repetition audit; storage constraint and all-solution causal motif certificates | Candidate engineering audits only; human review of analogy/mismatch pending |
| Four variants imply independent confirmation | Finite-panel per-base results; template dependence, no population interval | Directional scope only |
| Workflow stages prove human mechanism | Behavioral model–workflow attribution only | Construct/labels/runtime/reward/transfer remain separate |

## 2026-10-12 — Token audit correction
**Observed engineering result:** [Twelve new tests and raw audit](evaluations/fiction-cwr-v0.1/VERIFICATION.md) strengthen the old goal-only rejection comparison. A falsely rejected legal non-goal prefix now blocks certification through state/cost/count and precise failure agreement. Current saved candidate solutions pass the stronger audit; no current incorrect model grade is alleged.

**Current interpretation / UNRESOLVED:** The dependency is available in rules/common one-step evidence, while C's compound trace does not realize it. Target worlds match; source F/C solution counts 2/13 and prefix counts 10/52 expose remaining evidence differences. [Matching audit](evaluations/fiction-cwr-v0.1/MATCHING-AUDIT-v0.1.1.md) limits claims to a public supported-template development comparison.
