# Fiction-CWR v0.1 — Evaluation design
Project: Project Fiction, Hermes Labs  
Version:0.1.1 | Created:2026-10-11 | Updated:2026-10-12 | Status: proposed; offline engineering verification separate  
Epistemic labels: CURRENT HYPOTHESIS; NEW PROPOSAL; UNRESOLVED  
Registered experiment: [EXP-0002](../../experiments/fiction-cwr-exp-0002.md), proposed; zero model runs

## Research question and falsifiable scope
**CURRENT HYPOTHESIS:** Frontier language models may show a measurable deficit in constructing novel, valid solutions by recombining known primitives under closed informational conditions, even when they understand the primitives individually.

**Working capability definition — NEW PROPOSAL:** Goal-directed closed-world recombination is production of an executable composition of supplied primitives achieving a supplied goal under exact semantics, hard constraints and a resource budget, when the necessary production dependency is not realized in the supplied multistep composition demonstration despite adequate primitive exposure. Complete rules and one-step examples still support valid deduction of that dependency.

Related to [FH-01/FH-07](../../hypotheses.md), this is a narrow behavioral operationalization. It does not define innovation in general, observe an internal innovation event, establish a human-relative deficit or demonstrate human-to-model signal transfer. It complements [EXP-0001](../../experiments/pilot-pre-test-redesign.md); human labels, controls, runtime and reward branches remain separate.

**Substantive scoped hypothesis — NEW PROPOSAL:** For each pinned evaluated model meeting a preregistered primitive-mastery criterion, C exact-validity is at least 20 percentage points below F across the frozen family-balanced distribution and compute budget.

Candidate deficit δ=0.20 and mastery threshold τ=0.90 are proposed decision values, not empirical estimates or adopted Fiction-wide gates. Twenty points is a proposed practically substantial loss rather than any detectable loss; ninety percent requires high prerequisite performance without asserting perfect understanding. Their appropriateness is unresolved. Freeze or replace them with documented justification before confirmation; never select them after observing the contrast. Report continuous effects and threshold sensitivity.

Scope includes exact model snapshot, task distribution, representation, prompts, external access and budget. One model's loss does not imply all frontier models fail; all sampled models failing would not establish architectural impossibility.

## Finite world and information boundary
Supply W=(S,A,T,s0,G,C,B): finite bounded states; permitted primitives, entities, arguments and types; exact deterministic applicability/transitions; initial state; decidable goal; hard invariants/constraints with scope; and resource/execution budgets. Solutions may be action sequences, typed programs, circuits, schedules, assemblies or tilings. Inventory caps, program lengths and schedule horizons make finiteness real; a finite rule list alone does not bound states.

Main prompts contain the complete world, primitive demonstrations, selected examples, goal and grammar. No browser, external retrieval, arbitrary code execution, validator feedback or oracle trace is available. Internal retrieval and valid deductions remain allowed. Closed world limits supplied evidence and permitted entities/operations/effects; it does not erase prior knowledge or freeze internal representations.

**Novelty reference set:** supplied demonstrations/handbook, not inaccessible pretraining, personal lifetime knowledge or all prior solutions. Nonce names reduce familiar cues; they do not certify absence from training.

## Conditions
| Code | Task | Purpose / scored response |
| --- | --- | --- |
| P | Primitive applicability, effects and invalid-use probes | Independent prerequisite accuracy: legal verdict/exact outcome |
| R | Finite supplied-handbook retrieval | Relevant existing artifact ID; no external search |
| E | Execute/reason about a given candidate | First illegal step or exact terminal state and goal verdict |
| F | Fresh-target synthesis after an analogous motif demonstration | Executable valid candidate |
| C | Matched fresh-target synthesis with required motif withheld | Same artifact grammar as F |

Retrieval is substrate. R calibrates artifact selection; it is not innovation's ontological opposite. F−C is primary. R−C and E−C do not isolate recombination from generic difficulty.

P covers every relevant primitive: legal applicability, exact effects, unavailable inputs/catalysts, invalid types/arguments and applicable hard constraints. Independent sessions/fixtures prevent probe feedback entering synthesis. R includes an applicable artifact and plausible distractors; exact witness exposure is confined to an independent R session. E balances legal goal, legal non-goal and independently certified illegal candidates and first-error positions.

The main directional pilot uses withheld-context E_C. A synthesis-by-novelty interaction requires additional E_F; [model plan](MODEL-PLAN.md) separates its 72 calls. E inherently exposes a candidate composition and therefore is diagnostic rather than information-identical to synthesis.

## Paired familiar/withheld construction
Start with a latent base world, then independently instantiate F/C target replicas with fresh labels, order and IDs. Match abstract transition graphs, optimum length, constraints and budget. Use fresh sessions and never carry an F answer into C.

F demonstrates the relevant motif on a different source instance with a changed start/goal and independent witness. A copied, renamed or trivially truncated demonstration must not solve the target. C replaces that compound demonstration with a different certified composition of comparable length and primitive coverage; primitive examples stay common. Excluding the motif while matching all other evidence may be difficult: disclose residual differences.

Before freezing each pair, record world/state size, primitive set, optimum length, budget slack, constraint count, demonstration count, primitive frequencies/valid-invalid exposure, canonical motif signatures, grammar, per-provider prompt/output token counts, fixed-oracle branching/search metrics and every residual mismatch. Equal solver search or padded token lengths do not prove equal cognitive difficulty.

### Required manifest (contract; public candidate audited, execution freeze incomplete)
```json
{
  "pair_id":"PRIVATE_BASE_ID",
  "family":"token_workshop",
  "latent_structure_hash":null,
  "f_target_id":"INDEPENDENT_F_FIXTURE",
  "c_target_id":"INDEPENDENT_C_FIXTURE",
  "target_motif":"FAMILY_CANONICAL_SIGNATURE",
  "f_source_demo_id":"DIFFERENT_SOURCE_INSTANCE",
  "c_replacement_demo_id":"MATCHED_OTHER_MOTIF",
  "target_witness_hidden":true,
  "exact_or_renamed_demo_solves_target":false,
  "all_bounded_solutions_require_holdout":"UNVERIFIED",
  "optimal_lengths":{"F":null,"C":null},
  "primitive_exposure_matched":"UNVERIFIED",
  "solver_search_metrics":null,
  "prompt_token_counts":null,
  "residual_mismatches":[],
  "eligibility":"NOT_FROZEN"
}
```

## Withholding concerns the whole solution space
A withheld motif in one oracle witness does not show solving requires it; another valid solution may use familiar structure. Enumerate all bounded valid solutions in small worlds, or independently certify necessary structure. Motif equivalence must ignore arbitrary label renaming and independent-action order where applicable.

If only one witness is audited, label the fixture “witness-only demonstration-relative novelty” and exclude it from confirmatory necessary-composition claims. Reject copying-solvable structural fixtures before observing model outcomes. The grader continues to accept all valid solutions; a valid familiar alternative triggers fixture reassessment, never a false failure to protect the novelty hypothesis.

## Outcome and seven design statements
Primary PASS = schema ∧ permitted entities/primitives/arguments ∧ legal execution ∧ all hard invariants/constraints ∧ complete goal ∧ budget. Accept every valid solution; no exact witness matching, LLM judge or model-code execution. Optional prose is unscored. Partial credit is diagnostic only. [Grader](GRADER.md) separates provider/harness errors from returned malformed/semantic failures.

- **Hypothesis:** substantial F-to-C loss persists in primitive-qualified pinned models.
- **Operational definition:** exact-valid goal compositions in certified finite worlds under demonstration-relative structural withholding.
- **Alternative explanation:** primitive misunderstanding, generic difficulty, state load, output burden, evidence imbalance, prompt/budget effects or grader defects.
- **Control:** P/R/E; paired evidence/difficulty audits; independent checkers/oracles; copy/random/greedy baselines; renaming/representation/budget diagnostics.
- **Success criterion:** independent confirmation's prespecified lower interval bound reaches the chosen deficit for a qualified model and all attribution gates survive.
- **Failure criterion:** upper bound below the chosen deficit rejects that size; failed design/prerequisite gates block attribution. Intervals spanning the boundary are inconclusive.
- **Next decision:** retain/narrow/reject the scoped claim, repair measurement or design independent confirmation. No automatic detector training, runtime deployment or RL follows.

Eight showcases are directional. Private seeded variants, certified structural holdouts, difficulty tiers and prospective sample design are required for a reusable confirmatory benchmark.

## Release gates
Finite semantics and independent satisfiability; strict checker QA; complete F/C exposure and novelty manifests; baseline competence and family difficulty; frozen model/settings/budget/analysis/criteria; complete hashed raw-output records; independent private confirmation material protected from tuning. Offline checks do not pass human G0–G4 or establish model capability results.

## 2026-10-12 — Scoped token integration
[Matching audit v0.1.1](MATCHING-AUDIT-v0.1.1.md) and [pair manifest](config/token-pair-manifest-v0.1.1.json) reuse the saved EXP-0003 one_transform candidate. Necessary type-level production structure is certified across all accepted bounded target solutions under an explicit reviewed irreversible recipe contract. TW-001 also receives its own complete 121-sequence audit. This supersedes the earlier blanket “unimplemented” status for these bounded engineering portions; private main-arm generation and empirical freeze remain pending.

Strict differential replay compares first failure/step, committed inventory, accumulated cost and executed count. The prior goal-only comparison could miss a falsely pruned legal non-goal prefix; new mutants require certification to fail in that case. Current saved candidate solutions pass stricter checks; no erroneous current model grade or omitted current solution is claimed.

Novelty concerns a realized multistep trace, not absence of dependency information from rules or primitive examples. F/C target semantics, optimum and evidence frequencies match, but source roles/usefulness/order/trajectories and source solution counts differ (2/13). Reordered/mixed demo fragments remain permitted; the copying exclusion is limited to its declared transformations. This is public development, not protected independent confirmation or a completed CWR-1 empirical gate.
