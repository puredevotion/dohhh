import type { CategoryContent } from './row.js';

/** Physics & Astronomy, Chemistry & Materials, Biology & Medicine. */

export const PHYSICS: CategoryContent = {
  graduate: [

    [
      'The equipartition theorem assigns how much energy per quadratic degree of freedom?',
      ['kT/2', 'kT', '3kT/2', '2kT'],
      0,
      'Hence 3kT/2 for a monatomic ideal gas, which has three translational degrees. It fails once a mode\'s quantum spacing exceeds kT, which is what froze out vibrational modes and puzzled the nineteenth century.',
    ],
    [
      'At v = 0.6c, the Lorentz factor is what?',
      ['1.25', '1.15', '1.67', '2.00'],
      0,
      '1/sqrt(1 - 0.36) = 1.25. The 3-4-5 triangle makes this the standard exam value.',
    ],
    [
      'For a gravitationally bound system in equilibrium, the virial theorem states what?',
      [
        'Twice the average kinetic energy plus the average potential energy is zero',
        'Average kinetic and potential energies are equal in magnitude and sign',
        'Total energy equals the negative of the average kinetic energy, for any potential',
        'The average potential energy is twice the total energy of the system',
      ],
      0,
      '2<T> + <U> = 0 for an inverse-square force. It is how Zwicky inferred missing mass in the Coma cluster in 1933.',
    ],
    [
      'The Jeans length sets what?',
      [
        'The minimum scale on which a cloud collapses under gravity against its pressure support',
        'The radius at which a star\'s radiation pressure balances its gravity',
        'The distance over which a shock front dissipates into the interstellar medium',
        'The scale at which magnetic pressure exceeds thermal pressure in a plasma',
      ],
      0,
      'Below it, sound waves cross the region faster than it can collapse and pressure wins. It is the starting point for every fragmentation argument in star formation.',
    ],
    [
      'Wien\'s displacement law relates what?',
      [
        'The peak wavelength of a blackbody spectrum, inversely, to its temperature',
        'The total radiated power of a blackbody to the fourth power of its temperature',
        'The spectral radiance at long wavelengths to temperature, linearly',
        'The photon number density of a blackbody to its temperature cubed',
      ],
      0,
      'lambda_max * T is about 2.898e-3 m*K. The fourth-power relation is Stefan-Boltzmann; the long-wavelength limit is Rayleigh-Jeans.',
    ],
  ],
  phd: [
    [
      'What is the Chandrasekhar limit approximately equal to?',
      ['0.6 solar masses', '1.4 solar masses', '3.0 solar masses', '8.0 solar masses'],
      1,
      'Above about 1.4 solar masses electron degeneracy pressure cannot support a white dwarf, and it collapses or detonates.',
    ],
    [
      'In quantum mechanics, what does the Pauli exclusion principle forbid?',
      [
        'Two identical fermions occupying the same quantum state',
        'Simultaneous measurement of position and momentum',
        'Any transition that violates parity',
        'Superposition of macroscopic states',
      ],
      0,
      'It follows from the antisymmetry of the fermionic wavefunction, and it is why matter takes up space.',
    ],
    [
      'What does the Tsiolkovsky rocket equation relate?',
      [
        'Delta-v to exhaust velocity and mass ratio',
        'Thrust to chamber pressure',
        'Orbital period to semi-major axis',
        'Escape velocity to planetary radius',
      ],
      0,
      'Delta-v equals exhaust velocity times the natural log of the initial over final mass, which is why staging exists.',
    ],
    [
      'A type Ia supernova is thought to arise from what?',
      [
        'Core collapse of a massive star at the end of its silicon burning phase',
        'Thermonuclear detonation of an accreting white dwarf',
        'A neutron star merger',
        'A pair-instability collapse',
      ],
      1,
      'Their consistent peak luminosity is what makes them standard candles for cosmic distance.',
    ],
    [
      'What is the physical meaning of the Reynolds number?',
      [
        'The ratio of inertial to viscous forces in a flow',
        'The ratio of thermal to momentum diffusivity',
        'The ratio of flow speed to the speed of sound',
        'The ratio of buoyancy to viscous forces',
      ],
      0,
      'The thermal-to-momentum ratio is the Prandtl number; speed over sound speed is the Mach number; buoyancy over viscosity is Grashof.',
    ],
  ],
  professor: [
    [
      'What does the Gibbons-Hawking temperature describe?',
      [
        'The temperature associated with a de Sitter horizon',
        'The temperature of the cosmic neutrino background',
        'The critical temperature of the electroweak transition',
        'The peak temperature of a supernova shock',
      ],
      0,
      'A cosmological horizon radiates, just as a black hole does, at a temperature set by its surface gravity.',
    ],
    [
      'In the Standard Model, what does the Cabibbo-Kobayashi-Maskawa matrix parameterise?',
      [
        'Mixing between quark flavour and mass eigenstates',
        'Neutrino oscillation probabilities',
        'The couplings of the Higgs to gauge bosons',
        'Colour charge exchange in gluon vertices',
      ],
      0,
      'Neutrino mixing is described by the PMNS matrix instead; the CKM matrix single irreducible phase is the Standard Model source of CP violation.',
    ],
    [
      'What is the Aharonov-Bohm effect?',
      [
        'A charged particle acquires a measurable phase from a vector potential in a field-free region',
        'A magnetic moment precesses in an inhomogeneous field',
        'An electron beam splits in a gradient magnetic field',
        'A superconductor expels magnetic flux from its interior below a critical applied field strength',
      ],
      0,
      'It shows that the potentials, not just the fields, carry physical content - the flux quantum appears in the interference pattern.',
    ],
    [
      'The Kelvin-Helmholtz timescale for the Sun is of what order?',
      ['Ten thousand years', 'Ten million years', 'Ten billion years', 'One hundred years'],
      1,
      'About 3 x 10^7 years. Kelvin used this to argue the Sun was young, which was a real problem until nuclear fusion was understood.',
    ],
    [
      'What does the Kibble-Zurek mechanism predict?',
      [
        'The density of topological defects formed when a system is quenched through a phase transition',
        'The rate of vacuum decay by bubble nucleation out of a metastable false minimum of the potential',
        'The spectrum of primordial gravitational waves',
        'The onset of turbulence in a superfluid',
      ],
      0,
      'Defect density scales with quench rate, and it has been tested in liquid crystals and cold atoms as well as invoked cosmologically.',
    ],
  ],
};

export const CHEMISTRY: CategoryContent = {
  graduate: [

    [
      'A Lewis acid is defined as what?',
      [
        'An electron-pair acceptor',
        'A proton donor in aqueous solution',
        'A species that increases the hydroxide activity of a solution',
        'Any substance that raises the conductivity of water',
      ],
      0,
      'The Bronsted definition is the proton one; Lewis generalises it, which is what lets BF3 count as an acid without a hydrogen in sight.',
    ],
    [
      'The Nernst equation relates what?',
      [
        'Electrode potential to the ratio of activities of the oxidised and reduced species',
        'Cell potential to the total charge passed through the circuit',
        'Reaction rate to the applied overpotential at an electrode',
        'Ionic conductivity to the concentration of a strong electrolyte at infinite dilution',
      ],
      0,
      'The rate-to-overpotential relation is Butler-Volmer; the conductivity relation is Kohlrausch.',
    ],
    [
      'A Jablonski diagram depicts what?',
      [
        'Electronic states and the radiative and non-radiative transitions between them',
        'The correlation of molecular orbitals across a reaction coordinate',
        'The distribution of vibrational energy levels within one electronic state',
        'The relative energies of reactants, transition state and products',
      ],
      0,
      'Fluorescence, phosphorescence, internal conversion and intersystem crossing all live on it. The reaction-coordinate picture is a potential energy surface.',
    ],
    [
      'In NMR, what does a scalar coupling constant J measure?',
      [
        'Through-bond spin-spin coupling, which is independent of the applied field strength',
        'The chemical shift difference between two coupled nuclei, expressed in parts per million',
        'The rate of relaxation of transverse magnetisation',
        'Through-space dipolar coupling between nearby nuclei',
      ],
      0,
      'Field independence is how you tell coupling from shift: run the sample at a different field and the multiplet spacing in Hz does not move.',
    ],
    [
      'The Henderson-Hasselbalch equation gives what?',
      [
        'The pH of a buffer, from the pKa and the ratio of conjugate base to acid',
        'The pH at the equivalence point of a strong acid-strong base titration',
        'The solubility of a sparingly soluble salt from its solubility product',
        'The fraction of a weak acid dissociated at infinite dilution',
      ],
      0,
      'It is an approximation, and it fails where it is most often applied carelessly - very dilute solutions and pH far from the pKa.',
    ],
  ],
  phd: [
    [
      'What does Hammond postulate state?',
      [
        'The transition state resembles the species nearer to it in energy',
        'Reaction rate is proportional to reactant concentration',
        'Substitution proceeds with inversion at the stereocentre',
        'Aromatic systems resist addition reactions',
      ],
      0,
      'For an exothermic step the transition state looks like the reactant; for an endothermic step, like the product.',
    ],
    [
      'An SN2 reaction at a stereocentre produces what outcome?',
      ['Racemisation', 'Inversion of configuration', 'Retention of configuration', 'Elimination'],
      1,
      'Backside attack inverts the centre - the Walden inversion. SN1 goes through a planar carbocation and racemises.',
    ],
    [
      'What is the coordination geometry of a d8 metal centre in a typical 16-electron complex such as Vaska complex?',
      ['Tetrahedral', 'Square planar', 'Octahedral', 'Trigonal bipyramidal'],
      1,
      'Square planar, which is what leaves the axial site open for oxidative addition.',
    ],
    [
      'In X-ray crystallography, what does the phase problem refer to?',
      [
        'Diffraction measures intensities but not the phases needed to reconstruct density',
        'Crystals change phase under beam heating',
        'Twinned crystals give superimposed lattices',
        'Anomalous scattering systematically shifts the observed positions of the diffraction peaks',
      ],
      0,
      'Solved in practice by heavy-atom methods, anomalous dispersion, molecular replacement or direct methods.',
    ],
    [
      'Which polymerisation mechanism gives a living polymer with a narrow molecular weight distribution?',
      ['Free radical', 'Anionic', 'Step-growth condensation', 'Cationic ring-opening with chain transfer'],
      1,
      'Anionic polymerisation with no termination step keeps every chain growing at once, so the dispersity stays close to one.',
    ],
  ],
  professor: [
    [
      'What does the Woodward-Hoffmann rule predict for a thermal 4n electron pericyclic reaction?',
      [
        'Conrotatory ring closure',
        'Disrotatory ring closure',
        'No reaction under thermal conditions',
        'Retention of orbital symmetry only under photochemical conditions',
      ],
      0,
      'Thermal 4n systems go conrotatory; 4n+2 go disrotatory, and photochemical excitation reverses both.',
    ],
    [
      'The Marcus inverted region describes what?',
      [
        'Electron transfer rate decreasing as driving force increases beyond an optimum',
        'Reversal of redox potential at high ionic strength',
        'Inversion of the ligand field splitting order in tetrahedral rather than octahedral complexes',
        'Anti-Arrhenius behaviour in enzyme catalysis',
      ],
      0,
      'Once the driving force exceeds the reorganisation energy, further exergonicity slows the transfer. It took decades to observe.',
    ],
    [
      'What is a Jahn-Teller distortion?',
      [
        'A geometric distortion that lifts the degeneracy of an electronic ground state',
        'A splitting of vibrational levels by anharmonicity',
        'A shift in bond length caused by isotopic substitution',
        'A cooperative tilting of corner-sharing octahedra throughout a perovskite lattice',
      ],
      0,
      'A non-linear molecule with a degenerate electronic ground state cannot be stable in that geometry - classically seen in high-spin d4 and d9 complexes.',
    ],
    [
      'In solid state chemistry, what does the Goldschmidt tolerance factor predict?',
      [
        'Whether an ABX3 composition will adopt a stable perovskite structure',
        'The solubility limit of a dopant in a host lattice',
        'The critical radius for coherent precipitation',
        'The onset temperature of a diffusionless martensitic phase transformation',
      ],
      0,
      'It compares ionic radii; values far from unity push the structure into distorted or non-perovskite alternatives.',
    ],
    [
      'What does the Eyring equation add relative to the Arrhenius equation?',
      [
        'A transition state formulation giving enthalpy and entropy of activation',
        'A correction for diffusion-limited encounters',
        'An explicit treatment of quantum mechanical tunnelling through the reaction barrier',
        'A dependence on ionic strength',
      ],
      0,
      'Rate is expressed through the free energy of activation, so the entropic term becomes visible rather than buried in a pre-exponential factor.',
    ],
  ],
};

export const BIOLOGY: CategoryContent = {
  graduate: [

    [
      'In enzyme kinetics, what does the Michaelis constant Km represent?',
      [
        'The substrate concentration at which the reaction runs at half its maximal velocity',
        'The maximum rate achievable at saturating substrate concentration, once every site is occupied',
        'The turnover number of the enzyme per active site per second',
        'The dissociation constant of the enzyme-product complex',
      ],
      0,
      'Km approximates binding affinity only when the catalytic step is slow relative to dissociation; kcat/Km is the specificity constant.',
    ],
    [
      'What does the spliceosome do?',
      [
        'Removes introns from pre-mRNA and joins the flanking exons',
        'Adds the 7-methylguanosine cap to the 5-prime end of a transcript',
        'Adds the poly-A tail during transcription termination',
        'Proofreads newly synthesised mRNA against the template strand',
      ],
      0,
      'A ribonucleoprotein assembly of five snRNPs. Group II self-splicing introns do the same chemistry without it, which is the basis for arguing common ancestry.',
    ],
    [
      'A Western blot detects what?',
      [
        'Specific proteins, using antibodies after electrophoresis and transfer to a membrane',
        'Specific DNA sequences, using a labelled complementary probe',
        'Specific RNA transcripts, using a labelled complementary probe',
        'Protein-protein interactions in living cells, by fluorescence complementation',
      ],
      0,
      'Southern is DNA, Northern is RNA - the joke being that only Southern is a surname.',
    ],
    [
      'In pharmacology, what does an ED50 measure?',
      [
        'The dose producing the specified effect in half of the population tested',
        'The dose at which half of the receptor population is occupied',
        'The plasma concentration at which clearance falls to half its maximum',
        'The dose that is lethal to half of the population tested',
      ],
      0,
      'The receptor-occupancy figure is EC50 or Kd; the lethal figure is LD50, and their ratio is the therapeutic index.',
    ],
    [
      'What does epistasis describe?',
      [
        'An interaction in which one locus modifies the phenotypic effect of another',
        'The presence of two different alleles at the same locus in a diploid',
        'A single locus affecting several apparently unrelated traits',
        'The tendency of linked loci to be inherited together',
      ],
      0,
      'One locus affecting several traits is pleiotropy; co-inheritance of nearby loci is linkage. Epistasis is why single-locus association studies explain so much less variance than expected.',
    ],
  ],
  phd: [
    [
      'What does the Hardy-Weinberg principle describe?',
      [
        'Allele and genotype frequencies in a non-evolving population',
        'The rate of fixation of neutral mutations',
        'The relationship between population size and genetic drift',
        'The equilibrium between mutation and selection',
      ],
      0,
      'Its value is as a null model: the ways real populations violate its assumptions are the mechanisms of evolution.',
    ],
    [
      'In the CRISPR-Cas9 system, what is the role of the PAM sequence?',
      [
        'It is a short motif adjacent to the target that Cas9 must recognise to cut',
        'It is the guide RNA scaffold',
        'It marks the position at which a homology-directed repair template must anneal',
        'It silences the target promoter',
      ],
      0,
      'For SpCas9 the protospacer adjacent motif is 5-NGG-3, and it constrains where in a genome you can target at all.',
    ],
    [
      'What is the chemiosmotic hypothesis, and who proposed it?',
      [
        'ATP synthesis is driven by a proton gradient - Peter Mitchell',
        'ATP is synthesised by substrate-level phosphorylation - Hans Krebs',
        'Electron transport directly phosphorylates ADP - Otto Warburg',
        'Membrane potential drives sodium export - Jens Skou',
      ],
      0,
      'Proposed in 1961 and widely disbelieved for years; Mitchell received the Nobel in 1978.',
    ],
    [
      'Which cell type presents antigen on MHC class II to activate helper T cells?',
      ['Erythrocytes', 'Dendritic cells', 'Neutrophils', 'Platelets'],
      1,
      'Dendritic cells, along with macrophages and B cells. Class I is on nearly all nucleated cells and presents to cytotoxic T cells.',
    ],
    [
      'What is the founder effect?',
      [
        'Reduced genetic variation in a population established by a small number of individuals',
        'Selection favouring the first allele to appear in a population',
        'The tendency of phenotypically dominant alleles to increase in frequency over generations',
        'Loss of heterozygosity following a population expansion',
      ],
      0,
      'A special case of a genetic bottleneck, and why certain rare alleles are common in geographically isolated populations.',
    ],
  ],
  professor: [
    [
      'What does Muller ratchet describe?',
      [
        'The irreversible accumulation of deleterious mutations in a non-recombining population',
        'The stepwise fixation of beneficial mutations in a population under strong directional selection',
        'The cyclical replacement of alleles under host-parasite coevolution',
        'The loss of gene function following whole-genome duplication',
      ],
      0,
      'Without recombination there is no way back to a less-mutated genotype - which is one argument for why sex persists.',
    ],
    [
      'The Warburg effect in tumour biology refers to what?',
      [
        'A shift toward aerobic glycolysis with lactate production despite available oxygen',
        'Increased oxidative phosphorylation in hypoxic tissue',
        'Suppression of apoptosis by mitochondrial membrane stabilisation',
        'Preferential use of fatty acid oxidation over glucose by rapidly proliferating cells',
      ],
      0,
      'Described in the 1920s; the current reading is that it supports biosynthesis rather than merely generating ATP inefficiently.',
    ],
    [
      'What is kin selection inclusive fitness criterion, as formalised by Hamilton?',
      [
        'rB > C, where r is relatedness, B benefit to the recipient, C cost to the actor',
        'B/C > N, where N is population size',
        'rC > B, where r is the coefficient of inbreeding',
        'B - C > 0, evaluated at the level of the group rather than that of the individual actor',
      ],
      0,
      'Hamilton rule, 1964. It is why a sterile worker can be evolutionarily sensible.',
    ],
    [
      'In immunology, what is the mechanism of central tolerance?',
      [
        'Deletion or editing of self-reactive lymphocytes during development in thymus and bone marrow',
        'Suppression of activated T cells by regulatory cytokines in tissue',
        'Physical exclusion of lymphocytes from immunoprivileged sites',
        'Antibody-mediated clearance of self-reactive lymphocyte clones circulating in the peripheral tissues',
      ],
      0,
      'Peripheral tolerance covers the second and fourth; central tolerance happens before the cell ever leaves its primary organ.',
    ],
    [
      'What does the term "prion" denote, and what is the core of the mechanism?',
      [
        'A misfolded protein that templates the misfolding of its normal counterpart',
        'A subviral RNA replicating without a protein coat',
        'A defective virus requiring a helper for replication',
        'A self-splicing intron that is capable of horizontal transfer between unrelated genomes',
      ],
      0,
      'Prusiner protein-only hypothesis. The RNA agent without a coat is a viroid.',
    ],
  ],
};
