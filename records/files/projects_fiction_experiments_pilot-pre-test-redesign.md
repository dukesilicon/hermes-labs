# Project Fiction — Pilot / Pre-Test Redesign

Status: proposed

Epistemic label: NEW PROPOSAL

Updated: 2026-10-06

**Identifier:** EXP-0001, design outline v0.1; [registered as proposed](../../../experiments/registry.md#registered-proposals-and-runs). No runs are recorded. Registration does not establish protocol readiness or gate passage.

**Purpose:** Determine whether independent labels and enough controlled signal exist to justify further resources. This is directional, not confirmatory. It is not a reconstruction of an unavailable older protocol, an executed experiment, or a complete collection-ready protocol.

## Seven required design statements

1. **Hypothesis:** FH-02/FH-03 may hold in a defined setting; FH-04 is a later transfer question conditional on earlier feasibility.
2. **Operational definition:** Under documented external information availability, assess transformation, origin, novelty, and actionability separately. The event/window unit and rubric remain to be chosen; trial success is not automatically an event.
3. **Alternative explanation:** Difficulty, uncertainty, hesitation, controlled retrieval effort, load, novel wording, semantic distance, identity, domain, prompt structure, and response length might explain predictions.
4. **Control:** Proposed recalled-original, demanding non-innovative retrieval, difficult non-innovative reasoning, and superficial-novelty comparisons; nuisance/output-only predictors; grouped splits and feature ablations.
5. **Success criterion:** Before collection, define the minimum useful label quality, validity evidence, and incremental predictive value with uncertainty that would warrant continuation. A favorable point estimate alone is insufficient. No number is selected here.
6. **Failure criterion:** Circular labels, failed construct checks, cue/identity leakage, or nuisance-equivalent prediction require redesign or branch rejection. Distinguish failure from an imprecise small-sample outcome.
7. **Next decision:** Follow G0-G3; design powered confirmation only if directional evidence warrants it. Runtime and reward utility remain independent questions.

## Proposed sequence

**A. Construct and label feasibility.** Select a task family and explicitly document available materials, preparation, prior exposure, tools, retrieval permissions, and feedback. Assess whether the information-boundary claim is supportable. Develop a rubric with separate origin/transformation/product dimensions and an uncertain category rather than assuming binary ground truth.

**B. Independent evidence access.** Predefine what raters can see. Keep acoustic/prosodic telemetry away from raters when it is the proposed detector input. If linguistic/semantic output is the detector input, output-based rating is not feature-independent: disclose the overlap and seek separate process evidence. Retrospective participant reports can contribute but cannot alone establish origin. Document reliability, validity tests, selection rules, disagreements, and label uncertainty. Telemetry may prioritize cases; it must not silently define positives or the test sample.

**C. Local signal check.** Hold modality, recording conditions, and instructions consistent where justified. Use matched controls that separate innovation from effort, novelty, and length. Do not regress away a theoretically integral process blindly; document the role of each nuisance and use contrasts/stratification as appropriate. Compare simple nuisance-only and semantic-distance/output-only models with any candidate instrument.

**D. Transfer check.** Choose Domain A and a substantively different Domain B using the same selected modality. Train/tune only on A; test a frozen model and threshold on B. Use disjoint participants or an explicit crossed design that separates person familiarity from domain effects. Keep sessions/items grouped, fit transformations only on training folds, and avoid inspecting B during model selection. Failure tests domain transfer, not modality translation.

**E. Interpretation.** Report label uncertainty, calibration, performance by control condition, incremental value over baselines, and uncertainty at the participant/session level. No architecture, metric, exact sample size, numeric gate, or domain pair is selected. Determine those in a dated protocol before data collection; a pilot's effective sample is not its number of clips.

The pre-test must remain small enough to answer a continuation decision and strong enough to expose confounds. Its results cannot validate the whole Fiction thesis, demonstrate AI capability transfer, or justify production RL.

**Linked records:** [Methodology audit](../methodology-audit.md), [decision gates](../decision-gates.md), [next experiments](next-experiments.md), [hypothesis map](../hypotheses.md), [baseline review](../literature/cognitive-science-baseline-review-v0.1.md).
