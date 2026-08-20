import type { CategoryContent } from './row.js';

/**
 * Semiconductors & Lithography, Software Engineering & Algorithms.
 *
 * Deliberately separate from "Technology & Computing", which stays general:
 * networking, protocols, data structures. These two are practitioner decks -
 * the fab and the compiler - and the tiers are the real professional ones.
 *
 * A note on the professor tier here: these two fields move, and a question
 * about the current state of the art dates faster than one about Byzantine
 * consensus. The questions below are pitched at facts with some durability -
 * why EUV needs reflective optics will not change - rather than at this
 * quarter's process node, which would be wrong within a year.
 */

export const SILICON: CategoryContent = {
  graduate: [
    [
      'EUV lithography exposes at what wavelength?',
      ['13.5 nm', '193 nm', '248 nm', '1.06 um'],
      0,
      '193 nm is ArF immersion, the workhorse it supplements rather than replaces; 248 nm is KrF.',
    ],
    [
      'What does a FinFET change relative to a planar transistor?',
      [
        'The gate wraps the channel on three sides, improving electrostatic control',
        'The channel is replaced by a compound semiconductor with higher mobility',
        'The source and drain are stacked vertically to shorten the channel',
        'The gate oxide is thinned to increase drive current',
      ],
      0,
      'Better control of short-channel effects and subthreshold slope is the whole point; nanosheet GAA takes it to four sides.',
    ],
    [
      'In a GPU, what is a warp (NVIDIA) or wavefront (AMD)?',
      [
        'A group of threads issued and executed together in lockstep',
        'A block of threads sharing an allocation of on-chip scratchpad memory',
        'The unit of work dispatched to a single streaming multiprocessor',
        'A queue of independent kernels awaiting a free execution unit',
      ],
      0,
      '32 threads on NVIDIA hardware, 64 historically on AMD. It is why divergent branches within the group cost you both paths.',
    ],
    [
      'Why were high-k dielectrics with metal gates introduced?',
      [
        'To keep gate capacitance up while limiting the tunnelling leakage that thin silicon dioxide suffered',
        'To raise the breakdown voltage of the gate stack under overdrive and so improve long-term reliability',
        'To reduce the resistance of the gate electrode itself',
        'To allow the gate to be patterned at a smaller pitch',
      ],
      0,
      'SiO2 had reached the point where it was only a few atomic layers thick, and leakage current was becoming the dominant power term.',
    ],
    [
      'What is a reticle?',
      [
        'The patterned mask whose image is projected onto the wafer',
        'The alignment grid etched into the wafer before the first layer',
        'The metrology target used to measure overlay error',
        'The frame that holds the wafer flat during exposure',
      ],
      0,
      'Field size limits how large a die can be printed in one exposure, which is why very large accelerator dies sit close to the reticle limit.',
    ],
  ],
  phd: [
    [
      'High-NA EUV raises the numerical aperture to what, and at what cost?',
      [
        '0.55, at the cost of anamorphic optics and a half-size exposure field',
        '0.45, at the cost of a shorter depth of focus and no other design change',
        '0.75, at the cost of requiring immersion in water',
        '0.33, at the cost of doubled exposure dose',
      ],
      0,
      '0.33 is standard EUV. The half field means large dies need stitching, which is a design and yield problem as much as a lithography one.',
    ],
    [
      'What causes stochastic printing failures in EUV?',
      [
        'Photon shot noise at low dose, producing random bridges and breaks in the pattern',
        'Mask contamination by carbon deposition accumulating over many successive exposures',
        'Line-edge roughness from resist polymer size alone',
        'Thermal drift of the wafer stage during the scan',
      ],
      0,
      'An EUV photon carries roughly 92 eV, so a given dose is delivered by far fewer photons than at 193 nm - the trade between dose, throughput and defectivity is the central economic tension of the tool.',
    ],
    [
      'What enables the bandwidth of an HBM stack?',
      [
        'A very wide interface - 1024 bits per stack - carried through TSVs to a nearby interposer',
        'A substantially higher per-pin signalling rate than GDDR achieves at an equivalent interface width',
        'On-die caching of frequently accessed rows within the stack',
        'Optical interconnect between the stack and the logic die',
      ],
      0,
      'Width at modest clocks, rather than speed at narrow width, is what keeps the energy per bit low enough to be worth the packaging cost.',
    ],
    [
      'What does a nanosheet (gate-all-around) transistor change relative to a FinFET?',
      [
        'Effective channel width becomes continuously tunable by sheet width, instead of quantised by fin count',
        'The gate is moved beneath the channel to free routing above it',
        'The channel is rotated into the vertical, which decouples gate length from the device footprint entirely',
        'Source and drain contacts move to the wafer backside',
      ],
      0,
      'Designers get back the analogue freedom that fin quantisation removed. The backside option is a separate development - backside power delivery.',
    ],
    [
      'On a GPU, what typically limits achieved occupancy?',
      [
        'Registers per thread and shared memory per block, against the per-SM budget',
        'The PCIe link width available to the device',
        'The number of independent kernels the driver is willing to keep resident on the device',
        'The size of the L2 cache relative to the working set',
      ],
      0,
      'And high occupancy is not the goal in itself: a kernel with enough instruction-level parallelism can saturate the machine at low occupancy.',
    ],
  ],
  professor: [
    [
      'Why must EUV optics be reflective and operate in vacuum?',
      [
        'Every material absorbs strongly at 13.5 nm, so the system uses Mo/Si multilayer Bragg mirrors and cannot use lenses or air',
        'Refractive index differences at 13.5 nm are too small to bend the beam usefully, so grazing-incidence mirrors are used instead',
        'The plasma source emits too broad a spectrum for refractive correction',
        'Vacuum is required only to protect the mask from hydrocarbon contamination',
      ],
      0,
      'Each mirror returns roughly 70%, so a train of ten leaves a few percent of the source power - which is why source power, not optics, was the decade-long bottleneck.',
    ],
    [
      'What problem is backside power delivery intended to solve?',
      [
        'Routing congestion and IR drop, by moving power rails below the device layer and freeing the upper metal for signals',
        'Heat extraction, by moving the thermal interface nearer the channel and thinning the silicon substrate that sits above it',
        'Reticle-limit stitching, by splitting a die across two wafers',
        'Electromigration in the topmost metal layers only',
      ],
      0,
      'Intel\'s PowerVia is the productised example. It buys signal routing resource and cleaner supply at the cost of a much harder wafer-bonding and thinning flow.',
    ],
    [
      'What does chiplet disaggregation trade away relative to a monolithic die?',
      [
        'Energy per bit and latency across the die-to-die interface, in exchange for yield and reuse',
        'Peak clock frequency, because cross-die paths cannot be pipelined',
        'Cache coherence, which cannot be maintained across separate dies',
        'Manufacturing test coverage, because individual dies cannot be fully tested before assembly',
      ],
      0,
      'Yield scales badly with area, so splitting a large design is often simply cheaper - and UCIe exists to make the interface a commodity rather than a per-vendor secret.',
    ],
    [
      'Why do reduced-precision matrix units (tensor cores and equivalents) shift where accelerator performance is limited?',
      [
        'They raise arithmetic throughput far faster than memory bandwidth, so more kernels become bandwidth-bound on the roofline',
        'They eliminate the need for on-chip caches in dense linear algebra',
        'They require workloads to be recast as sparse rather than dense operations before any of the promised speedup appears at all',
        'They make numerical error the binding constraint on achievable throughput',
      ],
      0,
      'This is why so much accelerator engineering is now about moving data less - fusion, tiling, recomputation - rather than doing arithmetic faster.',
    ],
    [
      'What does "dark silicon" refer to?',
      [
        'The fraction of a die that must stay unpowered because power, not area, is now the binding constraint',
        'Circuitry disabled by binning to improve yield on a given wafer',
        'Area consumed by redundancy and repair structures in large memory arrays',
        'Logic left unused because the design could not be routed at full density within the available metal layers',
      ],
      0,
      'Esmaeilzadeh et al., 2011. It is the structural reason for the turn to specialised accelerators: if you cannot power all of it at once, make the part you do power fit the job.',
    ],
  ],
};

export const SOFTWARE: CategoryContent = {
  graduate: [
    [
      'What does referential transparency mean?',
      [
        'An expression may be replaced by its value without changing the meaning of the program',
        'A function may be called from any module without an explicit import declaration being needed',
        'Every reference is guaranteed non-null at the point of use',
        'Names may be shadowed in an inner scope without ambiguity',
      ],
      0,
      'It is the property that licenses equational reasoning, common-subexpression elimination and lazy evaluation - and the one that side effects destroy.',
    ],
    [
      'What does Amdahl\'s law bound?',
      [
        'Speedup from parallelisation, given the fraction of the work that must remain serial',
        'Throughput of a pipeline, given the latency of its slowest stage and the depth of the pipeline',
        'Cache miss rate, given the working-set size relative to capacity',
        'The maximum useful thread count for a fixed memory bandwidth',
      ],
      0,
      'Gustafson\'s law is the complementary framing: hold time fixed and grow the problem, and the serial fraction matters less.',
    ],
    [
      'A monad, minimally, is what?',
      [
        'A type constructor with unit and bind operations satisfying left identity, right identity and associativity',
        'Any type that supports mapping a function over its contents',
        'A container that can be folded to a single value',
        'A type class providing sequential composition of pure functions, together with an identity element and an associativity law',
      ],
      0,
      'Mapping a function over a container is a functor. The laws are the substance - a bind without them gives you none of the reasoning you wanted the abstraction for.',
    ],
    [
      'What is the amortised cost of appending to a dynamic array that doubles on growth?',
      ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      0,
      'Any single append can be O(n), but the doubling makes the total cost of n appends linear. The distinction between amortised and worst-case is exactly what a real-time system cares about.',
    ],
    [
      'In a memory model, what does a happens-before relation establish?',
      [
        'A partial order guaranteeing that one thread\'s writes are visible to another',
        'A total order on all memory operations across all threads',
        'That two operations cannot be reordered by the compiler',
        'That an operation completes before any subsequent instruction issues',
      ],
      0,
      'Partial, not total: unordered accesses are precisely the data races. Sequential consistency for data-race-free programs is what the C++ and Java models actually promise.',
    ],
  ],
  phd: [
    [
      'What distinguishes applicative functors from monads in expressive power?',
      [
        'Applicative composes independent effects; a monad lets a later effect depend on an earlier result',
        'Applicative requires commutative effects, a monad does not',
        'A monad can express failure, an applicative cannot',
        'Applicative supports mapping over several arguments simultaneously, which a monadic bind cannot express',
      ],
      0,
      'The practical consequence is analysability: because applicative structure is static, it can be inspected, batched and parallelised - which monadic bind forbids.',
    ],
    [
      'What does linearisability require that sequential consistency does not?',
      [
        'That each operation appears to take effect at some instant between its invocation and its response, in real time',
        'That all threads observe writes in the same total order',
        'That operations on distinct objects are also ordered relative to one another in a single global sequence of events',
        'That no operation may block indefinitely',
      ],
      0,
      'Real-time constraint, and it composes: a system of linearisable objects is linearisable, which is emphatically not true of sequential consistency.',
    ],
    [
      'How do state-based and operation-based CRDTs differ in their requirements?',
      [
        'State-based merges whole states over a join-semilattice; operation-based needs causal delivery',
        'State-based requires exactly-once delivery; operation-based tolerates duplicates',
        'State-based needs vector clocks; operation-based needs none',
        'Operation-based requires a total order on all operations, while state-based requires only a partial one',
      ],
      0,
      'The trade is bandwidth against delivery guarantees, which is why the choice usually follows the transport rather than the data type.',
    ],
    [
      'In parallel algorithm analysis, what do work and span measure?',
      [
        'Total operations performed, and the length of the critical path',
        'Total memory traffic, and the depth of the cache hierarchy touched',
        'Processor count required, and the time achieved with it',
        'Serial fraction, and its parallel remainder',
      ],
      0,
      'Brent\'s theorem bounds time by work/p + span, which is why reducing span matters even when work is already optimal.',
    ],
    [
      'What is the expression problem?',
      [
        'Adding new data cases and new operations without editing existing code or losing type safety',
        'Deciding whether two expressions in a language are observationally equivalent',
        'Inferring principal types for expressions containing polymorphic recursion',
        'Compiling expression trees into code without ever materialising the intermediate data structures',
      ],
      0,
      'Wadler\'s name for it. Functional decomposition makes new operations easy and new cases invasive; object-oriented decomposition does the reverse.',
    ],
  ],
  professor: [
    [
      'What does parametricity give you?',
      [
        '"Free theorems": constraints on a polymorphic function\'s behaviour derivable from its type alone',
        'A guarantee that type inference terminates for all well-typed programs',
        'The ability to erase types at compile time without changing semantics',
        'Assurance that instantiating a type variable can never introduce non-termination into a program',
      ],
      0,
      'Reynolds\'s abstraction theorem, popularised by Wadler. It is why a total function of type `forall a. [a] -> [a]` can only permute and drop elements.',
    ],
    [
      'What do algebraic effects and handlers offer over monad transformer stacks?',
      [
        'Composable effects without a fixed ordering or the lifting boilerplate a stack imposes',
        'A guarantee that all effects are performed exactly once',
        'Static tracking of effects, which monad transformers cannot express',
        'Better runtime performance, by eliminating the need to capture continuations altogether',
      ],
      0,
      'Effects commute where the semantics permits, instead of committing you to an order at the type level - the cost is that handler semantics for interacting effects is subtler than it looks.',
    ],
    [
      'What is the central claim of "A Unified Theory of Garbage Collection" (Bacon, Cheng and Rajan)?',
      [
        'Tracing and reference counting are duals, and real collectors are hybrids sitting between them',
        'Generational collection strictly dominates both approaches for essentially all realistic workloads',
        'Reference counting cannot reclaim cycles in any formulation',
        'Concurrent collection requires a read barrier in all cases',
      ],
      0,
      'Tracing computes live objects, counting computes dead ones; once you see them as the same algorithm run on complementary sets, the design space becomes navigable rather than tribal.',
    ],
    [
      'What does a wait-free algorithm guarantee beyond lock-freedom?',
      [
        'Every thread completes its operation in a bounded number of its own steps',
        'That no thread may be preempted while holding shared state',
        'That the algorithm uses no atomic read-modify-write primitives',
        'That progress is guaranteed provided at least one thread is scheduled',
      ],
      0,
      'Lock-freedom is system-wide progress and permits individual starvation. Herlihy\'s universal construction shows wait-freedom is achievable from consensus primitives - at a cost that usually rules it out.',
    ],
    [
      'What does the Curry-Howard-Lambek correspondence add to Curry-Howard?',
      [
        'The categorical leg: cartesian closed categories, alongside proofs and programs',
        'A treatment of classical logic rather than only the intuitionistic fragment of it',
        'An account of recursive types as fixed points of functors',
        'The extension of the isomorphism to linear logic',
      ],
      0,
      'Types as objects, terms as morphisms, and the whole triangle is why category theory keeps turning up in language design rather than being an affectation.',
    ],
  ],
};
