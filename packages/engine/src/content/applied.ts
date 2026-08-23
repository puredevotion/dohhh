import type { CategoryContent } from './row.js';

/** Mathematics & Logic, Technology & Computing, Sport & Games. */

export const MATHS: CategoryContent = {
  bscba: [
    [
      'What does the intermediate value theorem state about continuous functions?',
      [
        'A continuous function on a closed interval attains every value between its minimum and maximum',
        'Every continuous function on a closed interval is uniformly continuous',
        'A continuous function must be differentiable at some point in the interval',
        'If f is continuous on [a, b], then f is monotonic on some subinterval',
      ],
      0,
      'It guarantees that for any y between f(a) and f(b), some c in [a, b] satisfies f(c) = y.',
    ],
    [
      'For two real numbers a and b, what is the relationship between the arithmetic mean and the geometric mean?',
      [
        'The arithmetic mean is always greater than or equal to the geometric mean',
        'The geometric mean is always greater than the arithmetic mean',
        'They are equal only when a = b',
        'The arithmetic mean is always strictly less than the geometric mean',
      ],
      0,
      'The AM-GM inequality holds for non-negative numbers. Equality occurs only when a = b.',
    ],
    [
      'What is the limit of (1 + 1/n)^n as n approaches infinity?',
      [
        'Euler\'s number e, approximately 2.71828',
        'π, approximately 3.14159',
        '1',
        'Infinity',
      ],
      0,
      'This is the fundamental definition of e, the base of the natural logarithm.',
    ],
    [
      'In a triangle, what does the law of cosines allow you to compute?',
      [
        'The length of any side given the other two sides and the included angle',
        'Whether the triangle is acute, right or obtuse from the three side lengths alone',
        'The area of the triangle directly',
        'The radius of the circumscribed circle',
      ],
      0,
      'It generalises the Pythagorean theorem: c² = a² + b² − 2ab cos(C).',
    ],
    [
      'What is a local extremum of a function?',
      [
        'A point where the function value is greater or less than nearby points',
        'The single greatest or least value on the entire domain',
        'Any point where the derivative is zero',
        'A point that lies on the boundary of the function\'s domain',
      ],
      0,
      'A local maximum or minimum, not necessarily global. The derivative being zero is necessary for interior local extrema (Fermat\'s theorem) but not sufficient.',
    ],
    [
      'What does Rolle\'s theorem assume about a function f on [a, b]?',
      [
        'f is continuous on [a, b], differentiable on (a, b), and f(a) = f(b)',
        'f is monotonic and f(a) < f(b)',
        'f is differentiable everywhere and strictly increasing',
        'f is positive throughout and has no zeros',
      ],
      0,
      'Under these conditions, some c in (a, b) has f\'(c) = 0.',
    ],
    [
      'In a geometric sequence, how is each term related to the previous one?',
      [
        'By multiplication by a constant ratio',
        'By addition of a constant difference',
        'By a quadratic function of the term index',
        'By the previous two terms in a Fibonacci-like rule',
      ],
      0,
      'A geometric sequence: a, ar, ar², ar³, ... with ratio r.',
    ],
    [
      'What does the power rule of differentiation state?',
      [
        'd/dx(x^n) = n·x^(n−1) for any real number n',
        'd/dx(x^n) = x^(n−1) for positive integers n',
        'd/dx(x^n) = n·x^n for all n',
        'd/dx(x^n) = n for all n',
      ],
      0,
      'One of the most fundamental derivatives in calculus; extends to any real exponent via limits.',
    ],
    [
      'A function is convex if what property holds?',
      [
        'The line segment connecting any two points on the graph lies above or on the graph itself',
        'The function is always increasing',
        'The second derivative is positive',
        'The function has no local maxima',
      ],
      0,
      'Equivalently, f(λx + (1−λ)y) ≤ λf(x) + (1−λ)f(y) for λ ∈ [0, 1].',
    ],
    [
      'What does the fundamental theorem of algebra guarantee?',
      [
        'A polynomial of degree n has exactly n complex roots counting multiplicity',
        'A polynomial of degree n has at least n real roots',
        'The roots of a polynomial can always be found by a closed formula',
        'A polynomial of degree n has at most n critical points',
      ],
      0,
      'This is why polynomial equations of degree ≥ 5 cannot always be solved by radicals.',
    ],
    [
      'In modular arithmetic, what does a ≡ b (mod m) mean?',
      [
        'm divides (a − b), so a and b leave the same remainder when divided by m',
        'a and b are equal',
        'a is less than b modulo m',
        'a times b equals m',
      ],
      0,
      'Fundamental to number theory and cryptography; allows arithmetic modulo any integer m.',
    ],
    [
      'What is the sum of the interior angles of a convex n-gon?',
      [
        '(n − 2) × 180 degrees',
        'n × 180 degrees',
        '360 degrees for any n',
        '(n + 2) × 90 degrees',
      ],
      0,
      'A triangle (n=3) has 180°, a quadrilateral (n=4) has 360°, etc.',
    ],
    [
      'A function is surjective (onto) if what condition holds?',
      [
        'Every element in the codomain is the image of at least one element in the domain',
        'Every element in the domain maps to a distinct element in the codomain',
        'The function has an inverse',
        'The function\'s range is a proper subset of its codomain',
      ],
      0,
      'Surjectivity and injectivity are distinct properties; a bijection is both.',
    ],
    [
      'What is a critical point of a differentiable function?',
      [
        'A point where the derivative is zero or undefined',
        'A local maximum or minimum',
        'A point where the function is continuous',
        'The endpoint of the domain',
      ],
      0,
      'Not all critical points are local extrema; inflection points with horizontal tangents are also critical points.',
    ],
    [
      'The derivative of sin(x) with respect to x is what?',
      [
        'cos(x)',
        'sin(x)',
        '−sin(x)',
        '1 / cos(x)',
      ],
      0,
      'A fundamental trigonometric derivative; cos(x) and sin(x) swap roles under differentiation.',
    ],
  ],
  msc: [

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
  bscba: [
    [
      'What is the primary purpose of DNS in the internet?',
      [
        'To translate human-readable domain names into IP addresses',
        'To encrypt data transmitted between servers',
        'To route packets across the global internet',
        'To manage memory allocation on a server',
      ],
      0,
      'DNS (Domain Name System) is a distributed database; www.example.com → 93.184.216.34 is the classic example.',
    ],
    [
      'In HTTP, what does a 404 status code indicate?',
      [
        'The requested resource was not found on the server',
        'The server is temporarily unavailable',
        'The request is forbidden due to permissions',
        'The server has moved the resource permanently',
      ],
      0,
      'Client error (4xx range); a 301 or 302 would indicate the resource has moved.',
    ],
    [
      'What is a relational database?',
      [
        'A database that organises data into tables with rows and columns, related by keys',
        'A database that stores only text files',
        'A database designed exclusively for social networks',
        'A database where every record links to exactly one other record',
      ],
      0,
      'SQL databases like PostgreSQL and MySQL are relational; the key concept is the table structure and foreign key relationships.',
    ],
    [
      'What is the time complexity of binary search on a sorted array?',
      [
        'O(log n)',
        'O(n)',
        'O(n log n)',
        'O(1)',
      ],
      0,
      'Binary search repeatedly halves the search space; you can only afford this because the input is sorted.',
    ],
    [
      'What does the OSI model describe?',
      [
        'A seven-layer framework for network communication and protocols',
        'The structure of a relational database',
        'How web servers handle HTTP requests',
        'The layers of the JavaScript runtime environment',
      ],
      0,
      'Open Systems Interconnection model; layers are Physical, Data Link, Network, Transport, Session, Presentation, Application.',
    ],
    [
      'What is a hash function in cryptography?',
      [
        'A function that maps input data to a fixed-size byte string, ideally one-way and collision-resistant',
        'A method to encrypt data using a secret key',
        'An algorithm to sort data efficiently',
        'A technique to compress large files',
      ],
      0,
      'SHA-256, MD5 (now broken) are examples. Computing the hash is fast; reversing it is computationally infeasible.',
    ],
    [
      'What does API stand for?',
      [
        'Application Programming Interface',
        'Asynchronous Protocol Integration',
        'Automated Processing Integration',
        'Application Protocol Initialization',
      ],
      0,
      'An API defines how software components communicate; REST APIs over HTTP are ubiquitous.',
    ],
    [
      'In a stack data structure, what does LIFO mean?',
      [
        'Last-In-First-Out: the most recently added element is removed first',
        'Linear-Item-First-Operations',
        'Load-Integrated-File-Output',
        'Low-Intensity-Fast-Operations',
      ],
      0,
      'Stack example: a browser\'s back button remembers pages in LIFO order.',
    ],
    [
      'What is caching?',
      [
        'Storing frequently accessed data in fast memory to avoid repeated slow lookups',
        'Permanently deleting old data to free space',
        'Encrypting sensitive information',
        'Splitting data across multiple servers',
      ],
      0,
      'CPU caches, Redis, browser caches, and CDNs all follow this principle: trade storage for latency.',
    ],
    [
      'What does ACID stand for in database transactions?',
      [
        'Atomicity, Consistency, Isolation, Durability',
        'Asynchronous Computation In Databases',
        'Automatic Concurrency Isolation Design',
        'Application Concurrency In Deployment',
      ],
      0,
      'ACID guarantees ensure data integrity even if the system fails during a transaction.',
    ],
    [
      'What is the difference between HTTP and HTTPS?',
      [
        'HTTPS encrypts the connection using TLS, while HTTP sends data in plaintext',
        'HTTPS is faster than HTTP',
        'HTTP is used only for mobile apps',
        'HTTPS cannot handle large files',
      ],
      0,
      'TLS (Transport Layer Security) protects HTTP traffic from eavesdropping; HTTPS is now standard.',
    ],
    [
      'In object-oriented programming, what is encapsulation?',
      [
        'Bundling data and methods together while hiding internal details from the outside',
        'Copying code from one class to another',
        'Running multiple programs on one machine',
        'Converting objects to JSON format',
      ],
      0,
      'Encapsulation uses access modifiers (public, private) to control what outside code can see.',
    ],
    [
      'What is the purpose of version control systems like Git?',
      [
        'To track changes to code, allow collaboration, and maintain a history of versions',
        'To compile code into executables',
        'To encrypt source code for security',
        'To automatically test code before deployment',
      ],
      0,
      'Version control enables teams to work on the same codebase, revert mistakes, and understand project history.',
    ],
    [
      'What is load balancing in distributed systems?',
      [
        'Distributing incoming requests across multiple servers to avoid overloading any one',
        'Evenly spacing database queries over time',
        'Ensuring all data is replicated on every server',
        'Compressing files before transmission',
      ],
      0,
      'Load balancers improve availability and performance by spreading work; round-robin is a simple strategy.',
    ],
    [
      'What does SQL stand for?',
      [
        'Structured Query Language',
        'System Query Link',
        'Sequential Quality Language',
        'Synchronous Query Layer',
      ],
      0,
      'SQL is used to query relational databases; SELECT, INSERT, UPDATE, DELETE are the fundamental operations.',
    ],
  ],
  msc: [

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
  bscba: [
    [
      'In football (soccer), how many players per side are on the field during normal play?',
      [
        '11',
        '9',
        '10',
        '12',
      ],
      0,
      'A standard team in football has eleven players: one goalkeeper, defenders, midfielders, and forwards.',
    ],
    [
      'In tennis, what is the sequence of points within a single game?',
      [
        '0, 15, 30, 40, game',
        '0, 10, 20, 30, 40, game',
        '0, 1, 2, 3, 4, game',
        'They go straight to 1, 2, 3, 4',
      ],
      0,
      'The scoring system (15, 30, 40) is historical; at deuce (40-40), a player must win by 2 points.',
    ],
    [
      'What is the offside rule in football (soccer)?',
      [
        'A player is in an offside position if closer to the opponent\'s goal line than both the ball and two defenders',
        'A player cannot pass backwards to a teammate',
        'A player cannot receive the ball while running faster than their team\'s average speed',
        'A player automatically commits a foul after three passes in a row',
      ],
      0,
      'Offside prevents goal-hanging; the rule exists to keep the game flowing and prevent unfair advantage.',
    ],
    [
      'In cricket, how many deliveries make up an over?',
      [
        '6',
        '8',
        '10',
        '4',
      ],
      0,
      'An over is a set of 6 legal deliveries bowled by one bowler; a cricket innings consists of multiple overs.',
    ],
    [
      'What is the primary objective in rugby union?',
      [
        'To score more points than the opposing team by carrying an oval ball across the goal line or kicking it between the goal posts',
        'To keep the ball in the air for as long as possible',
        'To complete as many passes as the opposing team',
        'To prevent the opposing team from touching the ball',
      ],
      0,
      'A try (5 points) is scored by grounding the ball in the in-goal area; conversions and penalties are also worth points.',
    ],
    [
      'In basketball, how many points is a basket worth if scored from beyond the arc?',
      [
        '3 points',
        '2 points',
        '4 points',
        '1 point',
      ],
      0,
      'The three-point line is further from the basket than a normal shot; baskets inside are 2 points.',
    ],
    [
      'What is a serve in tennis?',
      [
        'The stroke that begins each point, served from behind the baseline into the opponent\'s service box',
        'Returning the ball directly to the opponent',
        'Any shot played from the sideline',
        'The line that marks the edge of the court',
      ],
      0,
      'A serve must land in the service box; two failed serves (faults) result in a double fault and loss of the point.',
    ],
    [
      'In baseball, what is a home run?',
      [
        'When a batter hits the ball over the outfield fence in fair territory, or hits the ball far enough to circle all the bases',
        'When a base runner returns to their starting position',
        'A run scored in the batter\'s home stadium',
        'Any hit that allows a runner to advance two bases',
      ],
      0,
      'A home run scores the batter and any runners on base; it\'s the most powerful individual play in baseball.',
    ],
    [
      'In hockey, what is icing?',
      [
        'Shooting the puck from behind the midline so it travels beyond the opponent\'s goal line without being touched',
        'Cooling the rink to make the ice surface harder',
        'Checking an opponent against the boards',
        'A violation where a player holds the puck for too long',
      ],
      0,
      'Icing results in a face-off in the offending team\'s zone; it prevents long-distance stalling tactics.',
    ],
    [
      'In swimming, what is freestyle?',
      [
        'A stroke where the swimmer uses any technique (typically front crawl) to reach the finish line fastest',
        'A swimming style where no movement is required',
        'A race where swimmers alternate between different strokes',
        'A competition that takes place in a river instead of a pool',
      ],
      0,
      'Front crawl is nearly always the fastest stroke, so swimmers choose it for freestyle events.',
    ],
    [
      'What is a break in snooker?',
      [
        'The opening stroke, where the player attempts to scatter the racked balls',
        'A pause during the match to recover',
        'A foul committed by hitting the cue ball twice',
        'The point at which a player loses their turn',
      ],
      0,
      'The player breaking attempts to pot object balls and establish a strong opening position.',
    ],
    [
      'In golf, what is a birdie?',
      [
        'A score of one stroke under par for a hole',
        'A score of one stroke over par for a hole',
        'A score equal to par for a hole',
        'The final hole in a round of 18 holes',
      ],
      0,
      'An eagle is two strokes under par; a bogey is one stroke over par.',
    ],
    [
      'In table tennis, what must happen for a serve to be valid?',
      [
        'The ball must bounce on the server\'s side of the net first, then clear the net and land on the opponent\'s side',
        'The ball must go directly over the net without bouncing',
        'The server must hit the ball below waist height',
        'The ball must be thrown from at least 30 cm above the table',
      ],
      0,
      'A serve that fails to clear the net or lands outside the opponent\'s side is a point for the opponent.',
    ],
    [
      'What is the role of a wicket-keeper in cricket?',
      [
        'To stand behind the stumps and catch the ball or break the wicket to dismiss batsmen',
        'To patrol the boundary and catch balls hit for six',
        'To call out when a batsman is out',
        'To ensure the pitch is level and well-maintained',
      ],
      0,
      'The wicket-keeper is the only fielder allowed to wear protective gloves and pads beyond the batsman\'s gear.',
    ],
    [
      'In badminton, what is a shuttlecock?',
      [
        'The small projectile with a cork base and feathered crown that players hit across the net',
        'A penalty card shown to a player who breaks the rules',
        'The method of serving in doubles matches',
        'The line that marks out-of-bounds in the court',
      ],
      0,
      'A shuttlecock travels differently than a ball: it decelerates rapidly in flight, making badminton tactically distinct.',
    ],
  ],
  msc: [

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
