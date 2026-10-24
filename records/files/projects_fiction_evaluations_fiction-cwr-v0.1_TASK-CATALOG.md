# Fiction-CWR v0.1 — Eight candidate tasks
Project: Project Fiction, Hermes Labs | Version:0.1.0 | Date:2026-10-11  
Status: NEW PROPOSAL; public showcases | Frontier model runs:0

## Scope and exact contracts
Eight finite synthetic worlds below test composition under constraints, relevant to workflow construction, resource coordination, protocols and compatible-system assembly. They are concrete showcase instances, not implemented private generator families. Only token workshop has an offline reference checker/oracle and validity tests; seven other full graders remain specified. Actual fixed-witness sanity checks are in [VERIFICATION](VERIFICATION.md). Passing these tasks would not establish general creativity or a human innovation event.

[Machine-readable specifications and all witnesses](fixtures/showcase-index.json) accompany this catalog. They are evaluator/public-calibration materials, not model-facing F/C prompts. For each W=(S,A,T,s0,G,C,B), S includes listed finite data, progress count and resource counters; A/T are exactly listed operations/effects; no real-world effects are imported. A primitive costs one unless explicitly stated. Apply transitions atomically and enforce all prefix constraints. Goal satisfaction never excuses a hard failure.

Synthesis output has exactly the top-level keys and nested fields illustrated per family. Reject unknown/duplicate fields and identifiers, incorrect arity/types, booleans-as-integers and out-of-range values. Accept all valid solutions rather than exact witness strings. Optional prose is recorded separately, unscored.

Common diagnostic contracts:
- P: one-step applicability/effects/invalid uses for every relevant primitive. {"legal":true,"next_state":<exact family state>} or {"legal":false,"next_state":null}.
- R: select opaque handbook artifact ID: {"artifact_id":"H0"}. Handbook has an applicable valid artifact, a changed-goal artifact and an illegal distractor; balance opaque IDs/order. Exact witness exposure remains confined to independent R sessions.
- E: {"first_illegal_step":null|positive integer,"final_state":<exact state>|null,"goal":true|false|null}. Legal candidates report exact terminal state and goal; illegal candidates have null final_state/goal. First-error index is one-based listed order, except schedule uses chronological starts, ties lexicographic, completions before starts.
- F/C: identical family synthesis grammar; F contains a separate analogous compound example and C a coverage-matched non-target compound example. Both contain independent primitive demonstrations.

F/C recipes below are **not frozen matched stimuli**. Audit world size, optimum, constraints, evidence count/frequencies/length, output burden and solver difficulty; use fresh independent target replicas. Different source goals/arguments are necessary; simple renamed target witnesses are leakage. Motif normalization should remove arbitrary names and commute independent steps while retaining operator/type dependencies. Certify necessary withholding across all accepted bounded solutions or use the weaker witness-only label. Never reject an alternative to manufacture a motif requirement.

## TW-001 — Token workshop
**Implemented reference family.** Relevance: consumable production with asymmetric intermediates and reusable catalyst.
**S/s0:** integer multiset ore2, flux1, catalyst1, blank0, coated0, widget0. Counts/counters bounded by constraints/budget.
**A/T:** smelt: ore1→blank1; coat: blank1+flux1→coated1; rivet: blank1+coated1→widget1. Every action requires catalyst≥1, retains it and costs1. No arguments/undo/other recipes.
**G:** exact ore0 flux0 catalyst1 blank0 coated0 widget1.
**C/B:** nonnegative counts; total inventory≤6; catalyst≥1 and widget≤1 throughout; actions≤4/cost≤4.
**Schema/witness:** {"actions":["smelt","smelt","coat","rivet"]}. Alternate smelt,coat,smelt,rivet.
**Grader:** exact schema/vocabulary, consumable subtraction/catalyst retention, prefix cap/min/max/budgets, complete final inventory.
**P/E:** all recipes with absent consumable/catalyst probes; smelt,coat,rivet first fails at3 (blank missing).
**Motif:** two derived branches, transform one, join both, catalyst reuse. F uses a different workshop goal with joined product plus residual treated intermediate; C uses serial/disjoint compositions without derived-branch join. Fungible tokens/initial intermediates can make causal provenance ambiguous: prefer no initial target intermediates or explicitly separate token-ID family.
**Generator proposal:** seeded recipes/counts/branch depths/distractors, exact finite semantics and solver certificates; structural variation beyond renaming.

## TP-001 — Finite typed pipeline
**Specified; second priority.** Relevance: type-correct linear workflow with branch retention.
**S/s0:** live environment input:Raw(0,1), bits∈{0,1}; allocated-ID set. IDs input,v0…v5; outputs fresh, never input; consumed IDs unavailable forever.
**A/T (cost1 each; consume all distinct live arguments):**
| Operation | Input type/value | Ordered output |
| --- | --- | --- |
| decode | Raw(a,b) | LeftBit(a),RightBit(b) |
| invert | LeftBit(a) | LeftBit(1−a) |
| tag | LeftBit(a) | TaggedLeft(a) |
| pack | TaggedLeft(a),RightBit(b) | Packet(a,b) |
| seal | Packet(a,b) | Seal(a,b) |

**G:** sole live value Seal(1,1).
**C/B:** correct types, no copies/use-after-consumption/reused IDs, live values≤2, steps/cost≤5.
**Schema/witness:** {"steps":[{"op":"decode","args":["input"],"out":["v0","v1"]},{"op":"invert","args":["v0"],"out":["v2"]},{"op":"tag","args":["v2"],"out":["v3"]},{"op":"pack","args":["v3","v1"],"out":["v4"]},{"op":"seal","args":["v4"],"out":["v5"]}]}. Fresh-ID permutations accepted.
**Grader:** check exact arities, types and IDs; simulate finite values/linear consumption; inspect sole terminal value.
**P/E:** wrong-type, consumed-ID and output-arity probes for all operations. decode,tag,pack,seal is legal but yields Seal(0,1), failing G.
**Motif:** split, transform/tag left while retaining right, rejoin/finalize. F uses Raw(1,0) with separately supplied transformation and Seal(0,0) goal; C starts from independent branches to avoid split/rejoin exposure. Extra supplied-access cues make this a matching risk, not ready control.
**Generator proposal:** finite type/value alphabets, unary tables, bounded branches/joins; independently enumerate optimum programs.

## BC-001 — Boolean circuit
**Specified.** Relevance: satisfy a complete specification across all inputs.
**S/s0:** primary pins a,b,c represented by eight-bit truth vectors; up to 4 gates.
**A/T:** append AND/OR/XOR, exactly 2 inputs from pins or earlier gates. IDs g0…g3 in order; fan-out/repeated inputs allowed; no constants/NOT/future references.
**G:** majority truth vector [0,0,0,1,0,1,1,1] for abc=000,001,…,111.
**C/B:** acyclic backward references; gates/cost≤4.
**Schema/witness:** {"gates":[{"id":"g0","op":"AND","inputs":["a","b"]},{"id":"g1","op":"XOR","inputs":["a","b"]},{"id":"g2","op":"AND","inputs":["g1","c"]},{"id":"g3","op":"OR","inputs":["g0","g2"]}],"output":"g3"}. Last OR→XOR is an alternate because its two branches cannot both be1.
**Grader:** strict gate grammar and exhaustive8-row evaluation; accept any equivalent circuit, not graph exact matching.
**P/E:** every primitive truth row/illegal references; g0→g1 is illegal at1; witness with output g2 is legal but wrong.
**Motif:** parallel branches, third-signal extension, reconvergence. F different4-pin source (u AND v) OR (w AND (u XOR q)); C equal operation counts in chain/disjoint structure. Match truth-table burden and enumerate all target circuits before structural claims.
**Generator proposal:** bounded DAG-generated truth tables, function deduplication, certified minimal costs; distinguish function and motif exposure.

## KL-001 — Consumable-key logistics
**Specified.** Relevance: change resource availability while carrying a goal object.
**S/s0:** carrierD, empty cargo; parcelD,k1D,k2H; nodes D,H,V. Objects at one node, held or consumed.
**A/T:** pickup(object) at carrier node if cargo space; drop held object at carrier node; move(D-H) fromD with heldk1, consuming it; move(H-V) fromH with heldk2, consuming it. Directed edges only; held cargo moves with carrier. Pickup/drop cost0; move cost1.
**G:** carrierV, parcelV, empty cargo, both keys consumed.
**C/B:** capacity2; unique object locations; actions≤6,traversals≤2,cost≤2.
**Schema/witness:** {"actions":[{"op":"pickup","arg":"parcel"},{"op":"pickup","arg":"k1"},{"op":"move","arg":"D-H"},{"op":"pickup","arg":"k2"},{"op":"move","arg":"H-V"},{"op":"drop","arg":"parcel"}]}. First pickups commute.
**Grader:** replay location/cargo/irreversible key use; operation-specific arg domains; budgets/full goal.
**P/E:** wrong-node/full-cargo/consumed-key probes; omit pickupk2 and second traversal fails at4.
**Motif:** preserve goal cargo while consuming and replacing key at intermediate node. F separate route/object/goal placements; C matched handling/traversal without intermediate replacement. Route/key information must remain equally complete.
**Generator proposal:** finite keyed directed graphs/capacities; certify satisfiable delivery, replacement depth and dead ends.

## RS-001 — Resource/precedence scheduling
**Specified; third priority.** Relevance: globally feasible coordination of competing subplans.
**S/s0:** integer clock0…5; jobs unstarted/running/complete; no jobs started.
| Job | Duration | Crew | Machine | Predecessors |
| --- | --- | --- | --- | --- |
| A | 2 | 1 | 1 | none |
| B | 2 | 1 | 0 | none |
| C | 1 | 1 | 1 | A,B |
| D | 1 | 1 | 0 | A |
| E | 1 | 2 | 0 | C,D |

**A/T:** start once at integer time after predecessors finish and resources available; no pauses. Occupancy [start,start+duration); automatic completion before starts at same time. Capacity crew2/machine1.
**G/C/B:** all jobs exactly once and complete by5; nonnegative starts, precedences/capacities; makespan≤5.
**Schema/witness:** {"starts":{"A":0,"B":0,"C":2,"D":2,"E":3}}. Alternate A0,B0,C2,D3,E4. Makespans4/5. Optimal4: A/B require2 units, C/D subsequent1, then E1; witness attains bound.
**Grader:** exact job map, integer starts; ends/precedences; interval sweep capacities; makespan, independent of JSON key order.
**P/E:** every job start/end/resource probe, unmet precedent and resource clashes; C1 in witness is illegal chronological event3.
**Motif:** initial parallel branches, crossed dependencies, final2-crew synchronization. F different durations/resources; C noncrossed graph with same coverage. Match optimum, feasible count/search, slack and resource burden.
**Generator proposal:** seeded small DAGs/caps, exhaustive integer schedules and optimum certificates; separate width/contention/slack.

## PS-001 — Safety protocol
**Specified.** Relevance: release an enabling resource before later progress.
**S/s0:** lock∈{free,held}, draft/durable/ack/done bits; initial free,0,0,0,0.
| Operation | Preconditions | Effect; other fields unchanged |
| --- | --- | --- |
| acquire | free,draft0,durable0 | held |
| stage | held,draft0,durable0 | draft1 |
| release | held | free |
| flush | free,draft1,durable0 | draft0,durable1 |
| acknowledge | free,durable1,ack0 | ack1 |
| commit | free,durable1,ack1,done0 | done1 |

**G:** done1,free,draft0.
**C/B:** ack≤durable,done≤ack,draft+durable≤1 after every step; actions/cost≤6.
**Schema/witness:** {"actions":["acquire","stage","release","flush","acknowledge","commit"]}.
**Grader:** exact transition predicates/effects; prefix invariants, complete goal/budget. Synthetic rules do not inherit actual database semantics.
**P/E:** all rules, flush while held and unacknowledged commit; acquire,stage,flush fails at3.
**Motif:** acquire/use/release then progress requiring absence of resource. F independent protocol/terminal condition; C equal operation classes without release-before-progress. Match precondition literal counts and wording burden.
**Generator proposal:** small product automata with positive/negative resource predicates, independently certified safety/reachability; liveness/deadlock extensions separate.

## PA-001 — Typed-port assembly
**Specified.** Relevance: compatible interfaces, branch supply and isolation.
**S/s0:** empty edge set over:
| Component | Inputs | Outputs |
| --- | --- | --- |
| S | none | S.p:power |
| J | J.p:power | J.p1:power,J.p2:power |
| L | L.p:power | L.s:signal |
| U | U.p:power | U.s:signal |
| M | M.s1:signal,M.s2:signal | M.s:signal |
| K | K.s:signal | none |
| Z | Z.p:power | Z.s:signal |

**A/T:** connect declared output→input of equal type; each individual port≤1 edge; no duplicates/self-component edges/cycles; Z isolated; no removal. J is declared splitter; arbitrary fan-out unavailable.
**G:** all J/L/U/M/K inputs connected; K has directed paths fromL andU, with both supplied fromS.
**C/B:** types/directions/port occupancy/acyclicity/Z degree0 throughout; connections/cost≤6.
**Schema/witness:** {"connections":[{"from":"S.p","to":"J.p"},{"from":"J.p1","to":"L.p"},{"from":"J.p2","to":"U.p"},{"from":"L.s","to":"M.s1"},{"from":"U.s","to":"M.s2"},{"from":"M.s","to":"K.s"}]}. J-output and M-input swaps/reordering accepted.
**Grader:** endpoint/type/degree checks, component graph cycle/isolation and final input/reachability predicates; matching type alone cannot pass unsupplied branch.
**P/E:** wrong type/direction/occupied port/Z/self-edge; reuse J.p1 at3 fails.
**Motif:** declared split, heterogeneous modules, reconvergence with isolated spare. F different source/sink module graph; C same endpoint/type exposure without split/rejoin. Match port types/counts/valid-edge space.
**Generator proposal:** bounded typed inventories/edges and graph goals; enumerate admissible assemblies, separate renaming from structural changes.

## FT-001 — Colored finite tiling
**Specified.** Relevance: global coverage from local adjacency decisions.
**S/s0:** empty3×2 board x0…2,y0…1 downward; unplacedA,B,C. A/C offsets(0,0),(1,0); B(0,0),(0,1). Fixed orientations; no rotate/reflect operation.
| Piece | Exterior face colors |
| --- | --- |
| A | both topq,bottomr; left firstq,right secondr |
| C | both topr,bottomq; left firstq,right secondb |
| B | topq,bottomq; upper-leftr,lower-leftb; both rightq |

Internal faces within a piece have no color constraint; boundary faces mustq; adjacent different-piece exterior faces equal.
**A/T:** place unused piece at integer origin if inbounds/empty and all existing neighbor/boundary colors match; empty neighbors impose no interim constraint; no removal.
**G/C/B:** complete six-cell coverage, all pieces used once; no overlap/color mismatch; placements/cost≤3.
**Schema/witness:** {"placements":[{"piece":"A","x":0,"y":0},{"piece":"B","x":2,"y":0},{"piece":"C","x":0,"y":1}]}. All orders of those placements accepted; no uniqueness claim.
**Grader:** expand offsets, check board/piece/occupancy; compare boundary/neighbor colors; require final full cover, never coordinate exact match.
**P/E:** each shape/faces, out-of-bounds/duplicate/overlap/color mismatch; A0,0 then C0,0 fails at2.
**Motif:** triangle adjacency of two horizontal branches meeting vertical piece. F independently specified reflected board/colors/origins; C chain adjacency with equal cells/pieces. Reflection is in the source definition, not a permitted target operation. Match legal placements/color frequencies.
**Generator proposal:** bounded libraries/boards/coloring generated from certificates and independently enumerated; unsatisfiable extension requires separate infeasibility certificates.

## Readiness and private variants
Proposed implementation order: token, pipeline, scheduling; select other families by checker readiness rather than observed failures. For each implement strict interpreter/separate solver; verify witnesses/alternates and targeted invalid mutants; exhaustively check small worlds; apply consistent renaming/rule-order tests; freeze exact P/R/E/F/C packs and all solution-space motif audits; protect seeded variants/tiers/selection rules before model outputs. Preserve rejected candidates/disagreements.

Repeated trials remain eight base instances, not a large sample. Pair contrasts, cluster by latent base, macro-average families and prospectively simulate independent confirmation. Public showcase exposure limits later novelty claims. Private targets reduce exact artifact leakage but cannot establish absence from pretraining.
