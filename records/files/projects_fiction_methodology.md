# Project Fiction — Methodology

Status: unresolved

Updated: 2026-10-12

**Current constraints:** The [handover](../../docs/handovers/2026-10-06-migration-handover.txt) establishes research direction and design distinctions. It does not supply a full approved protocol. The [audit](methodology-audit.md) and [pilot redesign](experiments/pilot-pre-test-redesign.md) are NEW PROPOSAL elaborations constrained by [baseline v0.1](literature/cognitive-science-baseline-review-v0.1.md).

## Human phenomenon before instrument

Define innovative transformation under documented external information availability. Separate origin, transformation, novelty, and actionability. Do not assume a discrete innovation event or freeze a person's internal knowledge state. Retrieval is a component and comparison process, not innovation's simple opposite.

The Invention Classifier asks whether observable signals accompany the phenomenon. It does not define the labels or prove invention through predictive performance. Difficulty, load, uncertainty, hesitation, novel expression, participant identity, domain, prompt structure, length, and controlled retrieval effort require explicit alternative explanations and controls.

## Labeling and evaluation

Telemetry can select sessions, prioritize examples, or support exploration, with selection bias documented. It must not silently create the labels later predicted from that telemetry. Predefine rater access to evidence and keep raters independent of detector features wherever possible. Human judgments also need reliability and validity checks; consensus is not infallible ground truth. Document overlap where linguistic output is both rating evidence and a feature source.

Keep prediction units, temporal windows, participant/session grouping, and data versions explicit. Prevent train/test leakage and fit preprocessing/feature selection only on training data. Include nuisance/output-only baselines and relevant negative comparisons before giving predictions a process interpretation.

## Separate generalization questions

Phase One logic: train on Domain A, Modality 1 -> test on Domain B, Modality 1. Protect B from model, feature, and threshold tuning. Explain what makes the domains different and separate participant familiarity from domain effects. Later modality translation requires a separate hypothesis and protocol.

The early pre-test is directional: determine whether enough label validity and signal exist to warrant resources. A later confirmatory study requires an adequately justified sample, frozen criteria, and analysis appropriate to clustering. No sample size, numeric threshold, domain pair, modality, or classifier architecture is selected here.

## Branch discipline and recording

Runtime value requires independent intervention outcomes, even for a narrow fallback detector. Reward suitability separately requires noise, exploitation, proxy-optimization, distribution-shift, reward-hacking, and feature-gaming tests. No production RL follows from accuracy alone; human-to-model transfer is unresolved.

Every proposed experiment must state its hypothesis, operational definition, alternative explanation, control, success criterion, failure criterion, and next decision. Prefer cheap falsification. Use the [decision gates](decision-gates.md) and record actual registered work and reproducibility details in the [experiment registry](../../experiments/registry.md). No human or frontier-model experiments have been run. Offline evaluation engineering checks are recorded separately.

## AI capability branch — Fiction-CWR
[EXP-0002](experiments/fiction-cwr-exp-0002.md) applies a narrower objective behavioral operationalization in finite supplied worlds W=(S,A,T,s0,G,C,B). [Design](evaluations/fiction-cwr-v0.1/DESIGN.md) defines P/R/E/F/C and primary F−C; [grader](evaluations/fiction-cwr-v0.1/GRADER.md) makes schema, permitted vocabulary, legal execution, all invariants, complete goal and budget jointly decisive.

Validate all accepted solutions, not one oracle string. Certify necessary structural withholding over the bounded solution space or narrow to witness-only novelty. Independently match exposure/grammar/world/optimum/search difficulty, protect private variants, use fresh sessions and retain residual mismatch. Report unconditional and primitive-qualified outcomes, macro-average families and cluster by latent base; repeated calls are not independent tasks. Freeze candidate numeric criteria, provider settings, budget and analysis before confirmation; [model plan](evaluations/fiction-cwr-v0.1/MODEL-PLAN.md) records unresolved details.

This is complementary to human construct/label feasibility, not evidence those prerequisites passed. No telemetry-derived ground truth, LLM judging, arbitrary model-code execution, paid calls or training follows from this architecture.

## Workflow attribution diagnostic
**NEW PROPOSAL:** [EXP-0003](experiments/fiction-cwr-workflow-exp-0003.md) varies SD self-directed solving/revision versus SW fixed structured stages in a one-model token panel. Give both identical evidence, no tools/feedback, three iteration opportunities and full same-trial history; freeze matching per-stage and cumulative resource ceilings and record actual usage. Retain unavailable internal compute as a limitation. Keep the existing main arm intact.

The [protocol](evaluations/fiction-cwr-workflow-v0.1/PROTOCOL.md) requires bounded all-solution dependency certificates, copy/exposure/difficulty audits, independent P and task-level contrasts. Related bases/renamings/repetitions do not imply independent samples. A smaller gap from worse F alone is not success. Distinguish higher validity at comparable resources from equal validity at lower cost, and preparation from execution. Model/criteria/resources/spend remain unresolved; human/runtime/reward/transfer branches stay separate.

## 2026-10-12 — Stronger token certification and evidence scope
The [public token audit](evaluations/fiction-cwr-v0.1/MATCHING-AUDIT-v0.1.1.md) imports one candidate without a workflow change. To prune a sequence prefix, independently verify the exact illegal step and committed state/cost/executed count; NOT-PASS alone is insufficient because legal non-goal prefixes also fail the terminal predicate. Certification must fail on a false-pruning mutant or incomplete search.

Novelty here concerns dependencies realized by the demonstrated multistep trace. Complete rules and one-step examples remain available for deduction in both F/C. Preserve all valid solutions and downgrade unsupported motif claims instead of changing grade acceptance. Target graphs/optima/exposure match, but source search, useful stock and trajectory mismatches remain gates. Public related evidence is not private independent confirmation.

## 2026-10-23 — Outcome and mechanism separation

The [construct-validity direction](construct-validity-direction.md) records the source user's accepted distinction: assess the outcome independently of the mechanism that produced it. Search, deduction, analogy and recombination can contribute to a qualifying outcome; a unique innovation primitive is not required. Distinguish external information, initial goal, internal problem representation, and legal operations/environmental constraints. Investigate fixed-goal functional novelty alongside valuable problem transformation, without conflating reframing with new facts, easier goals or changed rules. Independently justify usefulness and control search freedom/difficulty. Situated Functional Innovation remains a provisional fixed-goal candidate, with its full rubric unrecovered; no complete operational definition or protocol is adopted.

## 2026-10-23 — PT-001 measured attribution limit

The user's Cycle 3 review provisionally accepts fixed-goal versus problem-transformation as an experimental distinction, preserving the canonical question. [PT-001](experiments/pt-001/README.md) corrects the comparison to proxy-reference, direct value-aware solving, explicit formulation intervention and search-focused solving with shared task facts/value criteria. Procedural instructions still change approach information. Its completed software rehearsal finds that programmed formulation gains can be reproduced by search order and direct optimization; better outcomes or changed goal language cannot alone identify reframing. Separate independent value justification, objective specification, search coverage and formulation evidence. Candidate-evaluation matching is not total-compute matching. Finite feasibility/value checks do not validate novelty or human process labels.
