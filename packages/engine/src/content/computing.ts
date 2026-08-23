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
  msc: [
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
  bscba: [
    [
      'What is the purpose of a semiconductor mask in lithography?',
      ['To define the pattern transferred to the wafer', 'To amplify the UV light source', 'To measure the temperature during processing', 'To hold the wafer in place'],
      0,
      'The patterned mask (reticle) projects onto the wafer to create the circuit pattern through projection or contact exposure.',
    ],
    [
      'What is an integrated circuit (IC)?',
      ['A single semiconductor chip containing multiple transistors and components', 'A light source used in lithography', 'A device that measures electrical resistance', 'A material used to insulate wiring'],
      0,
      'An IC combines transistors, diodes, resistors and capacitors on a single substrate, forming the basis of modern electronics.',
    ],
    [
      'What is doping in semiconductor manufacturing?',
      ['Adding impurities to pure silicon to create n-type or p-type conductivity', 'Heating the wafer to the melting point', 'Using a laser to carve patterns into silicon', 'Coating the wafer with insulating material'],
      0,
      'Donors (n-type) and acceptors (p-type) enable the electrical properties that make junctions and transistors work.',
    ],
    [
      'What is a transistor\'s primary function?',
      ['To amplify signals or switch current using a small control signal', 'To store electrical charge temporarily', 'To dissipate heat generated by other components', 'To measure voltage across a circuit'],
      0,
      'A transistor acts as a gate: a small voltage or current at the input controls larger currents at the output.',
    ],
    [
      'What is the difference between silicon and germanium as semiconductors?',
      ['Silicon has a larger band gap, is more abundant, and is more thermally stable; germanium has lower carrier mobility', 'Silicon is never used in modern electronics because it is too fragile', 'Germanium conducts better at all temperatures', 'Silicon cannot be doped with phosphorus'],
      0,
      'Silicon\'s larger bandgap (1.1 eV vs 0.67 eV) and abundance made it the industry standard despite germanium\'s early use.',
    ],
    [
      'What is the relationship between transistor size and processing node?',
      ['A smaller node (e.g., 5 nm) generally means smaller transistors and higher density', 'Node names refer only to manufacturing cost, not physical size', 'Smaller node numbers indicate slower transistors', 'Node names are unrelated to actual transistor dimensions'],
      0,
      'Process nodes define the minimum feature size and interconnect density, enabling higher transistor counts per unit area.',
    ],
    [
      'What does "leakage current" refer to in semiconductor devices?',
      ['Unwanted current flow through a transistor in the off state', 'Power consumed during normal operation', 'Electromagnetic radiation emitted by the device', 'Loss of material due to oxidation'],
      0,
      'Leakage current is static power dissipation; it increases exponentially with temperature and limits battery life in mobile devices.',
    ],
    [
      'What is a photomask?',
      ['A template with a pattern of transparent and opaque areas used to transfer a circuit design onto a wafer', 'A protective covering for the photoresist during baking', 'A tool for measuring the wavelength of light', 'A chemical compound used to develop photoresist'],
      0,
      'The photomask is exposed to light; the transmitted pattern reaches the photoresist-coated wafer below.',
    ],
    [
      'What is the purpose of photoresist in semiconductor processing?',
      ['A light-sensitive material that becomes soluble or insoluble when exposed, forming the basis for pattern transfer', 'A protective layer against heat during manufacturing', 'A substance that increases electrical conductivity', 'A chemical that removes oxide layers'],
      0,
      'Photoresist is spin-coated onto the wafer; UV exposure defines regions for subsequent etching or doping.',
    ],
    [
      'What is meant by "yield" in semiconductor manufacturing?',
      ['The percentage of working devices produced per wafer', 'The total number of transistors on a die', 'The speed at which wafers are processed', 'The thickness of the silicon substrate'],
      0,
      'Yield is critical to cost per die; defects reduce yield, making low-defect processing paramount.',
    ],
    [
      'What is thermal oxidation in semiconductor manufacturing?',
      ['The process of growing a silicon oxide layer by heating silicon in oxygen or steam', 'A method to cool the wafer after processing', 'A chemical reaction to remove impurities', 'A technique to increase dopant concentration'],
      0,
      'Thermal oxide (SiO2) serves as an insulator and can be used as a gate dielectric in older transistor generations.',
    ],
    [
      'What is the purpose of a diffusion step in semiconductor processing?',
      ['To move dopant atoms into the silicon substrate by heating, allowing them to spread thermally', 'To remove excess photoresist after exposure', 'To measure the thickness of deposited layers', 'To cool the wafer between processing steps'],
      0,
      'Diffusion moves dopants from the surface into the bulk, creating doped regions that form the transistor structure.',
    ],
    [
      'What is etching in semiconductor manufacturing?',
      ['The process of selectively removing material (oxide, polysilicon, or metal) using chemical or physical means', 'A method to deposit new material onto the wafer', 'A technique to measure electrical properties', 'A heating process to cure coatings'],
      0,
      'Wet etching uses liquid chemicals; dry etching uses ion or plasma bombardment. Both are selective based on the photoresist mask.',
    ],
    [
      'What is a p-n junction?',
      ['The boundary between p-type and n-type semiconductor material, forming the basis of diodes and transistors', 'A connection point in a circuit board', 'A measurement tool used in testing', 'A chemical bonding method'],
      0,
      'At the junction, diffusion of majority carriers and electrostatic forces create a depletion region that controls current flow.',
    ],
    [
      'What does "CMOS" stand for?',
      ['Complementary Metal-Oxide-Semiconductor, combining n-type and p-type transistors on the same chip', 'Common-Modular Operating System', 'Crystalline Metal-Oxide Surface', 'Coordinated Multi-Object Structure'],
      0,
      'CMOS pairs nMOS and pMOS transistors; because only one conducts at a time, static power dissipation is minimal.',
    ],
  ],
};

export const SOFTWARE: CategoryContent = {
  msc: [
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
  bscba: [
    [
      'What is a function in programming?',
      ['A named block of code that performs a specific task and can be reused', 'A statement that declares a variable', 'A type of loop that repeats code', 'A data structure for storing lists'],
      0,
      'Functions encapsulate logic, reduce code duplication, and take parameters and return values.',
    ],
    [
      'What is a variable?',
      ['A named container for storing a value that can change during program execution', 'A statement that controls program flow', 'A mathematical constant', 'A function that prints output'],
      0,
      'Variables have types (int, string, etc.) and scope; their values can be modified as the program runs.',
    ],
    [
      'What is the purpose of a loop?',
      ['To repeat a block of code a specified number of times or while a condition is true', 'To define a new function', 'To create a comment in code', 'To end the execution of a program'],
      0,
      'Common loops include for, while, and foreach; they reduce code duplication by executing statements conditionally.',
    ],
    [
      'What is the time complexity O(n)?',
      ['Linear time: the runtime grows proportionally with input size', 'Constant time: the runtime does not depend on input size', 'Logarithmic time: the runtime grows as log n', 'Exponential time: the runtime grows as 2^n'],
      0,
      'An algorithm with O(n) complexity takes roughly n steps for n items; doubling n doubles the runtime.',
    ],
    [
      'What is recursion?',
      ['When a function calls itself, either directly or indirectly, to solve a smaller instance of the same problem', 'A loop statement that repeats code', 'A method for storing data in a tree structure', 'A technique for speeding up programs'],
      0,
      'Recursion requires a base case (when to stop) and a recursive case (how to make progress toward the base case).',
    ],
    [
      'What is data abstraction?',
      ['Hiding implementation details behind an interface, allowing users to interact without knowing how it works', 'Storing all data in memory without organizing it', 'Removing all comments from source code', 'Creating duplicate copies of data'],
      0,
      'Classes, modules, and abstract data types all use abstraction to manage complexity by exposing only what is necessary.',
    ],
    [
      'What is a data structure?',
      ['An organized way of storing and retrieving data efficiently, such as arrays, linked lists, stacks, or trees', 'A variable declaration', 'A type of loop', 'A memory allocation technique'],
      0,
      'The choice of data structure affects algorithm performance; different structures optimize for different operations.',
    ],
    [
      'What is the purpose of a sorting algorithm?',
      ['To arrange elements in a specific order, usually ascending or descending, to enable efficient searching', 'To remove duplicate elements from a list', 'To split a list into smaller sublists', 'To count the number of elements'],
      0,
      'Common sorts include quicksort, mergesort, and heapsort; choice depends on data and performance requirements.',
    ],
    [
      'What is a string in programming?',
      ['A sequence of characters representing text', 'A type of integer variable', 'A loop that repeats code', 'A function that performs arithmetic'],
      0,
      'Strings are immutable in many languages (Java, Python); operations on them create new strings rather than modifying the original.',
    ],
    [
      'What is the difference between a list and a tuple?',
      ['A list is mutable (changeable) and a tuple is immutable (unchangeable) in most languages', 'Both are identical and can be used interchangeably', 'A list stores numbers and a tuple stores text', 'Tuples are always faster than lists'],
      0,
      'Immutability of tuples allows them to be used as dictionary keys and makes concurrent access safer.',
    ],
    [
      'What is an array?',
      ['A collection of elements stored at consecutive memory locations, all of the same type', 'A statement that repeats code', 'A function that returns a value', 'A type of sorting algorithm'],
      0,
      'Arrays enable random access (O(1) lookup by index) but have fixed size in many languages.',
    ],
    [
      'What is a linked list?',
      ['A data structure where each element points to the next, allowing dynamic size without pre-allocation', 'A way to sort data in ascending order', 'A technique for compressing data', 'A method for storing multidimensional arrays'],
      0,
      'Linked lists have O(n) access time but allow efficient insertion and deletion if you have the node pointer.',
    ],
    [
      'What is a hash table?',
      ['A data structure that uses a hash function to map keys to values, enabling fast lookup', 'A method for sorting arrays', 'A tree-like structure for hierarchical data', 'A technique for memory management'],
      0,
      'Hash tables achieve O(1) average-case lookup; collisions must be handled by chaining or probing.',
    ],
    [
      'What is an object in object-oriented programming?',
      ['An instance of a class containing data (attributes) and behavior (methods)', 'A variable that stores a number', 'A function that performs a calculation', 'A type of loop'],
      0,
      'Objects bundle state and behavior; inheritance and polymorphism allow code reuse and flexible designs.',
    ],
    [
      'What is inheritance in object-oriented programming?',
      ['A mechanism where a class (subclass) inherits attributes and methods from another class (superclass), reducing code duplication', 'A way to store data in memory', 'A technique for speeding up programs', 'A method for organizing variables'],
      0,
      'Inheritance enables is-a relationships; a subclass can override inherited methods for specialized behavior.',
    ],
  ],
};
