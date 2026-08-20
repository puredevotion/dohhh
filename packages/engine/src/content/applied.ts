import type { CategoryContent } from './row.js';

/** Mathematics & Logic, Technology & Computing, Sport & Games. */

export const MATHS: CategoryContent = {
  graduate: [

    [
      'For a real symmetric matrix, the spectral theorem guarantees what?',
      [
        'An orthonormal basis of eigenvectors, with all eigenvalues real',
        'That the matrix is invertible, with a positive determinant',
        'That all eigenvalues are distinct and strictly positive',
        'That the matrix is similar to a diagonal matrix over the complex numbers only',
      ],
      0,
      'Real symmetric matrices are orthogonally diagonalisable. Diagonalisability over the complexes alone is much weaker and holds for any matrix with distinct eigenvalues.',
    ],
    [
      'In a metric space, sequential compactness means what?',
      [
        'Every sequence has a subsequence converging to a point of the set',
        'Every open cover admits a countable subcover',
        'The set is closed and its diameter is finite',
        'Every Cauchy sequence in the set converges to a limit within the set',
      ],
      0,
      'In metric spaces it coincides with compactness. Closed and bounded is equivalent only in finite-dimensional normed spaces, and convergence of Cauchy sequences is completeness.',
    ],
    [
      'What is the order of the symmetric group S4?',
      ['24', '12', '16', '64'],
      0,
      '4! = 24. Its subgroup structure - A4, the Klein four-group as a normal subgroup - is what makes the quartic solvable and the quintic not.',
    ],
    [
      'The first Borel-Cantelli lemma concludes what?',
      [
        'If the probabilities sum to a finite value, then almost surely only finitely many of the events occur',
        'If the probabilities sum to infinity, then almost surely infinitely many of the events occur',
        'That the events must be independent for their intersection to have positive measure',
        'That the limit superior of the events has probability equal to the sum of their probabilities',
      ],
      0,
      'The divergent-sum statement is the converse lemma, and it additionally requires independence - the asymmetry between the two is the whole point of the pair.',
    ],
    [
      'The rank-nullity theorem states what?',
      [
        'The dimension of the domain equals the rank plus the dimension of the kernel',
        'The rank of a matrix equals the rank of its transpose',
        'The dimension of the image equals the number of non-zero eigenvalues',
        'A square matrix is invertible if and only if its determinant is non-zero',
      ],
      0,
      'Equality of row and column rank is true but a different theorem; counting non-zero eigenvalues is false in general, as any nilpotent matrix shows.',
    ],
  ],
  phd: [
    [
      'What does Godel first incompleteness theorem establish?',
      [
        'Any consistent, effectively axiomatised theory strong enough for arithmetic has true statements it cannot prove',
        'No consistent theory strong enough for arithmetic can prove its own consistency from within itself',
        'Arithmetic is undecidable in the sense of the halting problem',
        'Every sufficiently expressive formal system eventually derives a contradiction from its own axioms if pursued far enough',
      ],
      0,
      'Unprovability of a theory\'s own consistency is the second incompleteness theorem - a corollary, not a restatement of the first.',
    ],
    [
      'What is the fundamental group of the circle?',
      ['Trivial', 'The integers under addition', 'The integers modulo 2', 'The rationals'],
      1,
      'Pi_1(S^1) is isomorphic to Z, indexed by winding number.',
    ],
    [
      'The central limit theorem concerns the limiting distribution of what?',
      [
        'Normalised sums of independent, identically distributed random variables with finite variance',
        'Maxima of independent samples drawn from a fixed continuous distribution, suitably normalised',
        'The empirical distribution function',
        'Ratios of independent normal variables',
      ],
      0,
      'Maxima give extreme value distributions; the empirical distribution function is Glivenko-Cantelli; the ratio of normals is Cauchy.',
    ],
    [
      'What does it mean for a matrix to be positive definite?',
      [
        'x transpose A x > 0 for every non-zero real vector x',
        'All entries of A are positive',
        'A has positive determinant',
        'A is invertible and has a strictly positive trace as well as a positive determinant',
      ],
      0,
      'Equivalently, all eigenvalues of a symmetric A are strictly positive. A positive determinant is not sufficient.',
    ],
    [
      'In graph theory, what does Euler formula V - E + F = 2 apply to?',
      ['Connected planar graphs', 'All simple graphs', 'Bipartite graphs only', 'Regular graphs of even degree'],
      0,
      'Connected planar graphs drawn without crossings. On a surface of genus g the right-hand side becomes 2 - 2g.',
    ],
  ],
  professor: [
    [
      'What does the Banach-Tarski paradox assert?',
      [
        'A solid ball can be decomposed into finitely many pieces and reassembled into two balls of the same size',
        'A bounded set can have infinite perimeter and finite area',
        'There exist bounded subsets of the plane whose Lebesgue measure depends on which axiomatisation of the reals is adopted',
        'Every continuous function on a compact set attains its bounds non-uniquely',
      ],
      0,
      'It depends essentially on the axiom of choice, and the pieces are necessarily non-measurable.',
    ],
    [
      'The Riemann hypothesis concerns the location of which objects?',
      [
        'The non-trivial zeros of the zeta function, conjectured to lie on the line Re(s) = 1/2',
        'The poles of the analytically continued zeta function lying within the critical strip 0 < Re(s) < 1',
        'The prime gaps in the interval [x, 2x]',
        'The singularities of the Dirichlet eta function',
      ],
      0,
      'The trivial zeros sit at the negative even integers; zeta has a single pole, at s = 1.',
    ],
    [
      'In category theory, what is a natural transformation?',
      [
        'A family of morphisms between the images of two functors, commuting with the functors action on morphisms',
        'An isomorphism between two categories',
        'A functor that preserves limits',
        'A map assigning to every object of one category a morphism in another, subject to respecting composition and identities',
      ],
      0,
      'The commuting-square condition is the whole content; Eilenberg and Mac Lane invented categories largely to be able to say this.',
    ],
    [
      'What does the Lowenheim-Skolem theorem imply about first-order theories?',
      [
        'A first-order theory with an infinite model has models of every larger cardinality',
        'Every consistent theory has a finite model',
        'First-order logic cannot express transitivity',
        'Any two models of a complete first-order theory are isomorphic up to elementary equivalence',
      ],
      0,
      'Hence Skolem paradox: countable models of set theory exist, which is why first-order logic cannot pin down cardinality.',
    ],
    [
      'What is the significance of the Poincare conjecture, proved by Grigori Perelman?',
      [
        'Every simply connected, closed 3-manifold is homeomorphic to the 3-sphere',
        'Every closed surface is classified by its genus',
        'Every 4-manifold admits a smooth structure',
        'Every compact manifold admits a Riemannian metric of constant sectional curvature',
      ],
      0,
      'Proved via Hamilton Ricci flow with surgery, in three preprints posted in 2002-03.',
    ],
  ],
};

export const TECHNOLOGY: CategoryContent = {
  graduate: [

    [
      'What does TLS session resumption avoid?',
      [
        'A full handshake, and with it the asymmetric cryptography and extra round trips on reconnection',
        'Certificate validation against the trust store',
        'Renegotiation of the cipher suite and the compression method between the client and the server on every connection',
        'The need for the server to hold any per-connection state',
      ],
      0,
      'Session IDs keep server state; session tickets push it to the client. TLS 1.3 folds resumption into a pre-shared key mode with 0-RTT data, which trades replay resistance for latency.',
    ],
    [
      'A B-tree is designed to optimise for what?',
      [
        'Block-oriented storage, keeping the tree shallow through high fan-out per node',
        'Cache locality within a single CPU cache line',
        'Worst-case insertion time in a purely in-memory workload',
        'Lock-free concurrent access without coordination between readers and writers',
      ],
      0,
      'Node size follows the page size, so a lookup costs a handful of page reads. It is why nearly every relational index is one.',
    ],
    [
      'DNSSEC provides what, and not what?',
      [
        'Origin authentication and integrity for DNS records, but not confidentiality',
        'Confidentiality for queries, but no guarantee about record authenticity',
        'Both authentication and confidentiality, via signed and encrypted zones',
        'Protection against cache poisoning only for recursive resolvers, not authoritative servers',
      ],
      0,
      'The queries and answers stay in cleartext, which is what DNS-over-TLS and DNS-over-HTTPS address - orthogonal problems, frequently conflated.',
    ],
    [
      'A Bloom filter trades space against what?',
      [
        'False positives, while never producing a false negative',
        'False negatives, while never producing a false positive',
        'Insertion cost, which grows with the number of elements stored',
        'The ability to enumerate the elements it contains',
      ],
      0,
      'It cannot enumerate its contents either, but that is a property rather than the trade: the tunable parameter is the false-positive rate against bits per element.',
    ],
    [
      'What does serialisable isolation forbid that repeatable read permits?',
      [
        'Phantom reads - rows appearing in a repeated range query',
        'Dirty reads of uncommitted data from another transaction',
        'Non-repeatable reads of a single row within one transaction',
        'Lost updates when two transactions write the same row',
      ],
      0,
      'Dirty reads are excluded from read-committed upward, and non-repeatable reads at repeatable read. The distinction between snapshot isolation and true serialisability is where write skew hides.',
    ],
  ],
  phd: [
    [
      'What is the average time complexity of a well-implemented quicksort?',
      ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
      1,
      'O(n log n) on average, O(n^2) in the worst case, which is why implementations randomise or use median-of-three pivots.',
    ],
    [
      'What problem does the CAP theorem describe?',
      [
        'A distributed store cannot simultaneously guarantee consistency, availability and partition tolerance',
        'Consensus is impossible with more than one faulty node',
        'Caches cannot be both coherent and lock-free',
        'Concurrency, atomicity and persistence cannot all be enforced within a single distributed transaction boundary',
      ],
      0,
      'Because partitions happen whether you choose them or not, in practice the choice is between consistency and availability during one.',
    ],
    [
      'In TCP, what is the purpose of the slow-start algorithm?',
      [
        'Probing available bandwidth by exponentially increasing the congestion window',
        'Delaying acknowledgements to reduce header overhead',
        'Reordering out-of-sequence segments before delivery',
        'Negotiating the maximum segment size and the window scale factor during connection setup',
      ],
      0,
      'The window doubles each round trip until loss or the slow-start threshold, then congestion avoidance takes over linearly.',
    ],
    [
      'What does a Merkle tree let you do efficiently?',
      [
        'Prove that a single item belongs to a large set with a logarithmic-size proof',
        'Sort a dataset far larger than available memory while using only bounded extra space',
        'Encrypt a stream without a shared key',
        'Detect cycles in a directed graph',
      ],
      0,
      'The basis of Git object integrity, certificate transparency logs and most blockchain designs.',
    ],
    [
      'What distinguishes symmetric from asymmetric cryptography?',
      [
        'Symmetric uses one shared key; asymmetric uses a mathematically linked key pair',
        'Symmetric is always stream-based; asymmetric is always block-based',
        'Symmetric provides authentication; asymmetric provides only confidentiality',
        'Symmetric is quantum resistant; asymmetric is not, by definition',
      ],
      0,
      'In practice they are combined: asymmetric crypto establishes a symmetric session key, because symmetric ciphers are far faster.',
    ],
  ],
  professor: [
    [
      'What does the FLP impossibility result state?',
      [
        'No deterministic consensus protocol can guarantee termination in an asynchronous system with even one crash failure',
        'No protocol can tolerate more than a third of its participating nodes behaving in an arbitrarily Byzantine manner, even under synchrony',
        'Total order broadcast is impossible without synchronised clocks',
        'Linearisability cannot be achieved without a single leader',
      ],
      0,
      'Fischer, Lynch and Paterson, 1985. The one-third bound is a separate Byzantine result; both are why real systems use randomisation or partial synchrony.',
    ],
    [
      'What does it mean for a problem to be NP-complete?',
      [
        'It is in NP and every problem in NP reduces to it in polynomial time',
        'It cannot be solved in polynomial time by any algorithm',
        'It is solvable in polynomial time only by a non-deterministic machine, and not verifiable',
        'It requires exponential space',
      ],
      0,
      'Hardness is about reduction, not about proven intractability - which is exactly what P versus NP leaves open.',
    ],
    [
      'In the Raft consensus algorithm, what guarantees that a newly elected leader log is not missing committed entries?',
      [
        'A candidate can only win a vote from servers whose log is not more up to date than its own',
        'The leader replays the entire log from the previous term on election',
        'Entries are committed only after being written to a majority of disks',
        'A leader must be the node holding the lowest identifier within the majority partition at election time',
      ],
      0,
      'The election restriction makes the leader-completeness property hold, which is what lets Raft avoid a separate log-repair phase.',
    ],
    [
      'What is the essential property of a CRDT?',
      [
        'Concurrent updates converge to the same state regardless of order, without coordination',
        'Every update is assigned a globally unique timestamp by a designated coordinating replica',
        'Conflicting writes are resolved by discarding the older value',
        'Replicas exchange their complete state with every other peer on each write operation',
      ],
      0,
      'Convergence comes from operations that are commutative, associative and idempotent - a join over a lattice.',
    ],
    [
      'What does Rice theorem say about program properties?',
      [
        'Any non-trivial semantic property of programs is undecidable',
        'No program can determine whether another program halts on all inputs',
        'Type inference is undecidable for dependently typed languages',
        'Every total function is computable by some Turing machine',
      ],
      0,
      'It generalises the halting problem: not just halting, but essentially every interesting question about behaviour.',
    ],
  ],
};

export const SPORT: CategoryContent = {
  graduate: [

    [
      'An expected-goals (xG) model estimates what?',
      [
        'The probability that a given shot becomes a goal, from historical shots with similar features',
        'The number of goals a team should be expected to score over a season, given its total squad value',
        'The share of possession that converts into shots on target',
        'The difference between a striker\'s goals and the league average',
      ],
      0,
      'Location, body part and assist type do most of the work. The standard warning is that xG is a distribution, so a single match\'s figure carries almost no signal.',
    ],
    [
      'A bowler\'s economy rate in cricket measures what?',
      [
        'Runs conceded per over bowled',
        'Runs conceded per wicket taken',
        'Balls bowled per wicket taken',
        'The proportion of deliveries from which no run is scored',
      ],
      0,
      'Runs per wicket is the average and balls per wicket the strike rate - the three together are why a bowler can be expensive and still be worth picking.',
    ],
    [
      'In chess, what is zugzwang?',
      [
        'A position in which every legal move worsens the player\'s standing',
        'A forced sequence in which every move is the only legal one available',
        'A position where the same sequence repeats three times, ending the game',
        'A sacrifice offered to open a file toward the opposing king',
      ],
      0,
      'Central to king-and-pawn endings, and the reason null-move pruning has to be disabled in those positions by chess engines.',
    ],
    [
      'What does the lactate threshold mark?',
      [
        'The intensity above which blood lactate accumulates faster than it is cleared',
        'The point at which muscle glycogen stores are fully depleted',
        'The maximum rate of oxygen uptake the athlete can sustain',
        'The heart rate at which stroke volume stops increasing with any additional load',
      ],
      0,
      'It predicts endurance performance better than VO2 max does, and unlike VO2 max it moves substantially with training.',
    ],
    [
      'The Cooper test estimates what, and how?',
      [
        'Aerobic capacity, from the distance covered in a twelve-minute run',
        'Anaerobic power, from repeated sprints with fixed recovery',
        'Running economy, from oxygen cost at a fixed submaximal speed',
        'Recovery capacity, from heart-rate decline in the minute after exercise',
      ],
      0,
      'Devised for the US Air Force in 1968. It is a field proxy: cheap, reproducible, and heavily dependent on pacing skill and motivation.',
    ],
  ],
  phd: [
    [
      'In cricket, what does a bowler need for a maiden over?',
      ['No runs conceded in that over', 'A wicket in the first over of a spell', 'Six dot balls including no wides', 'A wicket with the first ball'],
      0,
      'An over from which no runs are scored off the bat or as bowler extras. A wicket-maiden adds a dismissal.',
    ],
    [
      'The Fosbury flop changed which athletics event?',
      ['Pole vault', 'High jump', 'Long jump', 'Triple jump'],
      1,
      'Dick Fosbury won the 1968 Olympic high jump going over backwards, and within a decade nobody did anything else.',
    ],
    [
      'In Go, what is the standard komi given to White under Japanese rules with a 19x19 board?',
      ['0.5 points', '4.5 points', '6.5 points', '10.5 points'],
      2,
      'Compensation for Black first-move advantage; the value has drifted upward over the decades and varies by ruleset.',
    ],
    [
      'What is the Duckworth-Lewis-Stern method used for?',
      [
        'Resetting targets in limited-overs cricket interrupted by weather',
        'Seeding tennis draws by ranking points',
        'Calculating handicaps in golf',
        'Ranking football teams for tournament qualification and draw seeding',
      ],
      0,
      'It models runs as a function of overs and wickets remaining, which is why the revised target is rarely a simple pro rata figure.',
    ],
    [
      'In the Tour de France, what does the polka dot jersey signify?',
      ['Best young rider', 'Best climber', 'Points leader', 'Most combative rider'],
      1,
      'King of the Mountains. The green jersey is points, white is best young rider.',
    ],
  ],
  professor: [
    [
      'In the Elo rating system, a 400-point rating difference corresponds to what expected score for the stronger player?',
      ['About 0.76', 'About 0.85', 'About 0.91', 'About 0.99'],
      2,
      'The logistic curve gives roughly 10:1 odds at 400 points, so about 0.909.',
    ],
    [
      'Which competition trophy is contested between Australia and England and originated from a mock obituary in 1882?',
      ['The Ashes', 'The Bledisloe Cup', 'The Calcutta Cup', 'The Wisden Trophy'],
      0,
      'The Sporting Times ran an obituary for English cricket, saying the body would be cremated and the ashes taken to Australia.',
    ],
    [
      'In shogi, what does it mean to promote a piece?',
      [
        'Turning it over on reaching the opponent three closest ranks to gain new movement',
        'Exchanging it for a captured piece of higher value',
        'Returning a previously captured piece to the board with an extended movement range',
        'Declaring it immune from capture for one move',
      ],
      0,
      'Returning a captured piece to the board is a drop, which is the other feature that makes shogi so different from chess.',
    ],
    [
      'In the modern pentathlon, which five disciplines were contested for most of the twentieth century?',
      [
        'Fencing, swimming, equestrian show jumping, shooting and running',
        'Fencing, rowing, cycling, shooting and running',
        'Swimming, gymnastics, shooting, cross-country running and wrestling',
        'Equestrian, archery, swimming, running and fencing',
      ],
      0,
      'Devised to model a cavalry officer behind enemy lines. The equestrian phase is being replaced after the 2024 Games.',
    ],
    [
      'The Court of Arbitration for Sport, which hears most international sporting disputes, sits in which city?',
      ['Geneva', 'Lausanne', 'The Hague', 'Zurich'],
      1,
      'Lausanne, alongside the International Olympic Committee, with decentralised offices in New York and Sydney.',
    ],
  ],
};
