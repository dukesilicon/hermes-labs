# Project Fiction — Current Hypothesis Map

Status: active

Updated: 2026-10-12

**Epistemic status:** CURRENT HYPOTHESIS throughout, except the explicitly rejected mechanism. Active means this is the current map, not that its claims are established.

**Provenance:** [Migration handover](../../docs/handovers/2026-10-06-migration-handover.txt). The identifiers and testable decomposition below are **NEW PROPOSAL** organization of that material. **SUPPORTED BY EXISTING FICTION MATERIAL** means the handover documents the position; it does not mean empirical support or access to the older conversations. The [baseline review](literature/cognitive-science-baseline-review-v0.1.md) supplies external evidence and separate Hermes interpretations.

| ID | Claim and scope | Evidence status | What would challenge it? | Next decision |
| --- | --- | --- | --- | --- |
| FH-01 | Innovation under a controlled external information boundary can be operationalized as meaningful transformation of available representations into a novel, actionable representation. | Current working target; related memory/restructuring traditions exist. Fiction's boundary and criteria remain unresolved. | Criteria cannot distinguish useful transformation from paraphrase, random variation, or ordinary reproduction without circularity. | Refine/split the construct before signal collection. |
| FH-02 | Independent assessments can identify relevant transformations with adequate reliability and validity; event/window labels may be feasible. | No Fiction validation recorded. Source monitoring and false-insight literature constrain the claim. | Raters agree only on wording or condition cues, cannot identify transformation beyond outputs, or labels fail validity checks. | Revise evidence/rubric; use dimensions or coarser windows if justified. |
| FH-03 | Observable features contain information about assessed innovative transformation beyond plausible nuisance variables in a specified task setting. | Proposed Invention Classifier hypothesis, not an observed signal. | Nuisance-only models match performance, controlled contrasts remove it, or participant/session leakage explains it. | Revise the instrument or signal claim; do not infer absence of human innovation. |
| FH-04 | A signal learned in Domain A transfers to Domain B while modality stays constant, after independent participant and nuisance controls. | No Fiction transfer evidence. Generalization is a separate hypothesis from within-domain signal. | A locked detector fails held-out-domain criteria or succeeds only through shared prompts, identity, length, or difficulty. | Narrow the domain claim or redesign; do not substitute a modality change. |
| FH-05 | A narrower detector may improve runtime behavior when innovation is needed, even if broad domain generalization fails. | Fallback hypothesis; no demonstrated utility. | Detector-guided assistance does not improve independent task outcomes beyond matched interventions or causes harmful false triggers. | Revise or abandon runtime use independently. |
| FH-06 | A validated signal might support beneficial reward optimization under separate tests for noise, exploitation, proxy optimization, shift, hacking, and feature gaming. | Unresolved reward suitability; classifier accuracy offers no sufficient proof. | Reward rises while independently assessed capability does not, or gaming/shift destroys usefulness. | Reject/narrow reward use; no production RL on accuracy alone. |
| FH-07 | The human target can ultimately be reproduced or encouraged in AI models under justified capability evaluations. | Long-term research aim; existing AI task behavior must be assessed, not presumed absent. | Apparent gains reflect style, benchmarks, memorization, semantic distance, or a proxy without target improvement. | Revise the reproduction claim or intervention; retain existing-system baselines. |

The [provisional process model](theory/provisional-process-model.md) organizes possible components; it does not establish a serial universal mechanism. FH-03 does not entail FH-04; neither entails FH-05 or FH-06. Human-to-model signal transfer is also unresolved and cannot be inferred from human domain generalization.

## Rejected mechanism

**FM-R01 — REJECTED / SUPERSEDED:** Simply fine-tuning on invented narratives would teach invention.

The handover reports this earlier mechanism as rejected because such training may produce style transfer rather than capability transfer. The original formulation, rejection date, and any tests are unavailable here. Record this as a reported historical rejection and its reasoning, not as experimentally proven impossibility. Fiction's formal name does not make narrative generation its defining task.

## Updating the map

Record exact claim changes, assumptions, predictions, counterevidence, actual status, and linked designs/results. Preserve rejected positions. Update the [chronological hypothesis change log](hypothesis-change-log.md), canonical documents, and [research log](../../logs/research-log.md); major changes also require a decision entry.

## FH-08 — Scoped existing-model closed-world recombination
**CURRENT HYPOTHESIS:** Frontier language models may show a measurable deficit in constructing novel valid solutions by recombining individually understood primitives under closed informational conditions.

**NEW PROPOSAL operational claim:** For each pinned evaluated model satisfying a preregistered primitive-mastery rule, C exact-validity is at least 20 percentage points below F on the frozen family-balanced task distribution and budget. Candidate mastery90% and effect20 points are provisional design values requiring rationale/freeze before confirmation. Unconditional and qualified performance must both be reported.

**Evidence status:** No model runs or empirical support recorded. [Fiction-CWR v0.1](evaluations/fiction-cwr-v0.1/DESIGN.md) provides design/specification and offline engineering evidence only. Novelty means supplied-demonstration-relative composition; prior knowledge and valid rule deductions remain permitted.

**Challenge/falsification:** Upper interval bound below the chosen deficit rejects the scoped substantive size; an interval crossing it is inconclusive. Primitive failure prevents recombination attribution. Strong C, null/reversed effects and valid familiar alternatives are retained. Failed evidence matching, necessary-motif certification or grader validity invalidates the intended attribution.

**Next decision:** Validate fixtures/checkers and freeze matched stimuli/settings/criteria; run the directional [EXP-0002](experiments/fiction-cwr-exp-0002.md) only after budget authorization. Independent confirmation and representation/budget diagnostics precede stronger claims. This branch complements FH-01/FH-07 and EXP-0001; it does not validate innovation events, signals, runtime/reward utility or human-to-model transfer.

**UNRESOLVED alternative:** Workflow organization may explain part of any apparent loss. Specify the model–workflow combination and actual resources rather than attributing a single arrangement's performance to the model in general. FH-09 tests one such alternative separately; it neither assumes a deficit nor supersedes FH-08.

## FH-09 — Workflow organization and capability attribution
**CURRENT HYPOTHESIS / NEW PROPOSAL:** For a pinned model on certified token tasks, a fixed extraction → construction/manual simulation → critique/revision workflow may improve withheld exact validity and shrink an apparent familiar-minus-withheld gap relative to self-directed solving/revision with comparable evidence, permissions, iterations, usable history and cumulative resources.

**Evidence status:** No observed gap or workflow gain. [EXP-0003](experiments/fiction-cwr-workflow-exp-0003.md) is proposed; its [offline candidate audits](evaluations/fiction-cwr-workflow-v0.1/VERIFICATION.md) are engineering evidence. [Article motivation and Hermes interpretation](evaluations/fiction-cwr-workflow-v0.1/SOURCE.md) support asking an attribution question, not the hypothesis empirically. SUPPORTED BY EXISTING FICTION MATERIAL: CWR already recognizes prompt, budget, state load and representation alternatives.

**Challenge/failure:** Null/reversed withheld gain, no baseline gap, primitive failure, floor/ceiling, copying or resource/evidence imbalance block the intended interpretation. Gap shrink only from worse familiar performance is not support. Equal validity at lower cost is efficiency rather than improved capability. Unavailable hidden compute makes actual equivalence unverified. Numeric continuation criteria remain unresolved until prospectively justified/frozen.

**Next decision:** Review candidate artifacts, resolve protected stimuli and matching/resource/model/criteria/spend gates, then request bounded empirical execution authorization. A small panel is directional only. A persistent loss does not prove architectural impossibility; success does not establish a human-like mechanism. Human construct/labels, runtime utility, reward suitability and human-to-model transfer remain independent.

## 2026-10-12 — FH-08 operational clarification
**Working definition / NEW PROPOSAL:** In the token candidate, C withholds a *realized multistep production dependency* from its composition trace. It does not withhold the dependency from complete rules or shared one-step evidence. Valid internal retrieval/deductions remain allowed. [Matching audit](evaluations/fiction-cwr-v0.1/MATCHING-AUDIT-v0.1.1.md) certifies necessity under a reviewed bounded type-DAG contract but records unequal source search/usefulness. This refines measurement scope, not empirical FH-08 support. δ/τ, model claims, FH-09 and human/runtime/reward/transfer hypotheses are unchanged.

## 2026-10-23 — Interpretation of FH-01 and FH-07

[Source reconciliation](construct-validity-direction.md) preserves FH-01–FH-09 without declaring support or rejection. Outcome measurement is separate from mechanism attribution; search or analogy explaining an outcome does not by itself invalidate the target. Problem representation/objective/opportunity transformation remains within the scope to investigate alongside fixed-goal solutions. No distinct mechanism is assumed, and no full new operational definition is adopted. Situated Functional Innovation is provisional and limited to candidate fixed-goal measurement; its complete source rubric remains unrecovered.

## 2026-10-23 — PT-001 diagnostic interpretation

**SUPPORTED BY EXISTING FICTION MATERIAL / provisional experimental distinction:** The supplied Cycle 3 review accepts investigating fixed-goal solutions and valuable problem transformation separately, without asserting different cognitive mechanisms. **Observed software result:** [PT-001](experiments/pt-001/README.md) cannot identify a reframing-specific benefit from outcome scores: direct value reaches all optima and search-only identical ordering reproduces R at every tested budget. **REJECTED for this operationalization:** interpreting R-versus-proxy or R-versus-weak-search gain alone as formulation-specific innovation. This is not a rejection of FH-01, FH-07 or the possibility of cognitive reframing benefit. The relevant mechanism/measurement claim remains UNRESOLVED.
