import type { CategoryContent } from './row.js';

/**
 * Finance & Structured Products, Economics & Financial History.
 *
 * Calibration (see `DIFFICULTY_TIERS` for the normative version):
 *  - graduate: MSc/MA in the field. A structurer, an analyst, a macro desk.
 *  - phd: a specialist - PhD candidate, or ten years on the desk.
 *  - professor: twenty years and current with the literature.
 *
 * Finance is the category where the tiers separate most cleanly, because the
 * vocabulary is genuinely stratified: everyone in the building knows what vega
 * is, the base-correlation framework is a quant-desk conversation, and the
 * cross-currency basis literature is a handful of papers.
 */

export const FINANCE: CategoryContent = {
  graduate: [
    [
      'In a cash CDO capital structure, what does the equity tranche do?',
      [
        'Absorbs the first losses on the collateral pool',
        'Absorbs losses only after the mezzanine tranches are exhausted',
        'Receives principal before any rated note',
        'Bears prepayment risk but no credit risk',
      ],
      0,
      'It sits at the 0% attachment point, which is why it earns the residual spread and is priced off expected loss rather than a rating.',
    ],
    [
      'A payer swap position does what?',
      [
        'Pays fixed and receives floating',
        'Pays floating and receives fixed',
        'Pays both legs in different currencies',
        'Pays a fixed premium for the right to enter a swap later',
      ],
      0,
      'Payer and receiver always refer to the fixed leg. Paying a premium for the right to enter later describes a payer swaption instead.',
    ],
    [
      'Macaulay duration measures what?',
      [
        'The cash-flow-weighted average time to receipt, in years',
        'The percentage price change for a one-basis-point yield move',
        'The second derivative of price with respect to yield',
        'The time until a bond may first be called by the issuer',
      ],
      0,
      'Modified duration is that figure divided by (1 + y/n) and is the price-sensitivity measure; the second derivative is convexity.',
    ],
    [
      'In a securitisation, what does overcollateralisation provide?',
      [
        'Credit enhancement, because the collateral pool exceeds the notes issued against it',
        'Liquidity support drawn from a cash reserve account held on deposit with the trustee bank',
        'Protection against interest-rate rather than credit risk',
        'A guarantee from the originating bank covering the senior notes',
      ],
      0,
      'It is internal credit enhancement, alongside excess spread and subordination; an external guarantee would be a wrap.',
    ],
    [
      'What does the vega of an option measure?',
      [
        'Sensitivity of value to a change in implied volatility',
        'Sensitivity of delta to a change in the underlying',
        'Sensitivity of value to the passage of time',
        'Sensitivity of value to the risk-free rate',
      ],
      0,
      'Gamma is delta-to-spot, theta is time decay, rho is the rate sensitivity.',
    ],
  ],
  phd: [
    [
      'In a bond futures contract, what makes a deliverable bond "cheapest to deliver"?',
      [
        'It maximises the short position\'s return once the conversion factor is applied',
        'It carries the longest modified duration of any bond currently in the deliverable basket',
        'It is the most recently issued bond in the basket',
        'It has the lowest outstanding notional in the basket',
      ],
      0,
      'The conversion factor only approximately equalises the basket, so a residual optionality is left with the short - which is why the contract is priced off the CTD and its implied repo rate.',
    ],
    [
      'The "correlation smile" observed in synthetic CDO markets refers to what?',
      [
        'Implied correlation varying across tranches when quoted through a one-factor Gaussian copula',
        'Correlation between default rates and recovery rates within one pool',
        'Correlation rising as the collateral pool becomes more concentrated',
        'The tendency of realised default correlations to rise sharply during periods of market stress',
      ],
      0,
      'Fitting each tranche separately gives different implied correlations, which is the market telling you the model is wrong; base correlation was the repair.',
    ],
    [
      'Negative convexity in a mortgage-backed security arises because of what?',
      [
        'Borrowers hold a prepayment option, so duration shortens as rates fall and extends as they rise',
        'Servicers may advance missed payments to the trust at their own discretion',
        'The pass-through structure delays principal receipts relative to the underlying collateral pool itself',
        'Credit losses correlate with the level of interest rates',
      ],
      0,
      'The investor is short an option, so upside from falling rates is truncated - this is the whole reason MBS hedging is a dynamic business.',
    ],
    [
      'Replacing LIBOR with SOFR removed which component from the benchmark?',
      [
        'An unsecured bank credit and term-premium component',
        'The convexity adjustment applied to forward-starting contracts',
        'The overnight component of the curve',
        'The basis between onshore and offshore funding markets',
      ],
      0,
      'SOFR is a secured overnight rate, which is why credit-sensitive fallbacks and term-SOFR construction became such contested topics.',
    ],
    [
      'What does the funding valuation adjustment (FVA) on a derivatives book capture?',
      [
        'The cost of funding the uncollateralised portion of a position over its life',
        'The expected loss from counterparty default net of collateral',
        'The regulatory capital held against counterparty credit risk',
        'The bid-offer cost of unwinding a large position in a stressed or illiquid market',
      ],
      0,
      'CVA is the default-loss term and KVA the capital term; whether FVA is even economically legitimate was a genuine argument in the literature.',
    ],
  ],
  professor: [
    [
      'In the base-correlation framework, base correlation is defined with respect to what?',
      [
        'Equity tranches running from zero to each detachment point',
        'Each individual mezzanine tranche taken in isolation',
        'The average pairwise asset correlation implied by single-name spreads',
        'The senior-most tranche, with junior tranches interpolated from it',
      ],
      0,
      'Quoting a strictly increasing curve on [0, x] tranches restores arbitrage-free interpolation, which per-tranche compound correlation could not deliver.',
    ],
    [
      'The Vasicek large-portfolio limit gives what?',
      [
        'The asymptotic loss distribution of a homogeneous pool under a single systematic factor',
        'The term structure of default intensities implied by a doubly stochastic Cox process model',
        'A closed-form bound on the price of an nth-to-default basket',
        'The distribution of recovery rates conditional on the default rate',
      ],
      0,
      'It is the analytical backbone of the Basel IRB risk-weight formulae, and its assumptions - one factor, infinite granularity - are precisely where the 2007 losses came from.',
    ],
    [
      'What does the Longstaff-Schwartz algorithm solve, and how?',
      [
        'Bermudan and American option pricing, by regressing continuation values in a Monte Carlo simulation',
        'Term-structure calibration, by fitting forward rates to a spline basis',
        'Credit-portfolio loss distributions, by saddlepoint approximation of the moment generating function',
        'Optimal hedging under transaction costs, by dynamic programming on a lattice',
      ],
      0,
      'Least-squares Monte Carlo replaced the intractable backward induction on high-dimensional lattices, and the estimator is biased low, which matters when you use it to mark a book.',
    ],
    [
      'A persistently negative EUR/USD cross-currency basis is evidence of what?',
      [
        'A violation of covered interest parity, reflecting a premium on dollar funding',
        'An expectation of euro depreciation under uncovered interest parity',
        'A mispricing of the forward points relative to the interest-rate differential that arbitrage will close',
        'A divergence between onshore and offshore euro deposit rates',
      ],
      0,
      'Post-crisis balance-sheet costs and regulatory constraints made the textbook arbitrage uneconomic, so the deviation persists rather than closing - one of the cleaner cases of a no-arbitrage condition failing for institutional reasons.',
    ],
    [
      'What is the defining feature of the SABR model?',
      [
        'A stochastic-volatility specification with a closed-form implied-volatility asymptotic that fits the smile',
        'A local-volatility surface fitted exactly to observed option prices',
        'A jump-diffusion process calibrated to the observed term structure of variance swap rates across maturities',
        'A two-factor short-rate model with mean reversion in both factors',
      ],
      0,
      'Hagan\'s expansion is what made it usable on a swaption desk in real time; its known pathology is negative densities at low strikes, which the shifted and free-boundary variants patch.',
    ],
  ],
};

export const ECONOMICS: CategoryContent = {
  graduate: [
    [
      'The Lucas critique says what about policy evaluation?',
      [
        'Estimated relationships shift when policy changes, because agents\' decision rules depend on the policy regime',
        'Rational expectations render systematic monetary policy entirely ineffective at every horizon, however short it may be',
        'Econometric models cannot be identified without exclusion restrictions',
        'Aggregate demand management is undermined by crowding out of private investment',
      ],
      0,
      'Published 1976. It is the argument that pushed macro toward explicitly microfounded models with deep parameters.',
    ],
    [
      'In the Solow model, what determines long-run growth in output per worker?',
      [
        'The rate of technological progress',
        'The saving rate',
        'The rate of population growth',
        'The depreciation rate of capital',
      ],
      0,
      'The saving rate sets the level of the balanced-growth path, not its slope - which is exactly the gap endogenous growth theory set out to fill.',
    ],
    [
      'The Mundell-Fleming trilemma says a country may choose at most two of which three?',
      [
        'A fixed exchange rate, free capital mobility, and independent monetary policy',
        'Full employment, price stability, and external balance',
        'Fiscal sustainability, financial stability, and low and stable consumer price inflation',
        'A currency union, a banking union, and a fiscal union',
      ],
      0,
      'It is the framework the euro area\'s design arguments were conducted in, and the reason capital controls came back into respectable discussion.',
    ],
    [
      'What is a Pigouvian tax set equal to?',
      [
        'The marginal external cost at the efficient level of the activity',
        'The average social cost of the activity across all producers',
        'The consumer surplus lost to the externality',
        'The total damage caused by the activity, divided among producers',
      ],
      0,
      'Getting the level right is the whole difficulty; Coase\'s objection was that bargaining over property rights may reach the same allocation without it.',
    ],
    [
      'The envelope theorem tells you what?',
      [
        'The derivative of the value function equals the partial derivative of the objective, evaluated at the optimum',
        'That indifference curves cannot cross at any interior point',
        'That the Slutsky matrix is symmetric and negative semi-definite',
        'That a constrained optimum must always lie somewhere on the boundary of the feasible set and never strictly inside it',
      ],
      0,
      'It is why the indirect effects through the choice variables can be ignored, which is what makes comparative statics tractable at all.',
    ],
  ],
  phd: [
    [
      'The Diamond-Dybvig model explains bank runs as what?',
      [
        'A coordination failure with multiple equilibria, created by sequential-service demand deposits funding illiquid assets',
        'A rational response to genuine insolvency, once it has been revealed to depositors by a public signal about asset quality',
        'A consequence of maturity mismatch under complete markets',
        'The result of deposit insurance distorting depositor incentives',
      ],
      0,
      'The run equilibrium exists even when the bank is solvent, which is the argument for deposit insurance and for a lender of last resort.',
    ],
    [
      'What does the Diamond-Mortensen-Pissarides framework model?',
      [
        'Labour markets as a search-and-matching process with a matching function and Nash-bargained wages',
        'Wage rigidity arising from implicit long-term contracts between firms and their incumbent workforce',
        'Unemployment as the outcome of efficiency wages paid to deter shirking',
        'Job creation driven by firm entry under monopolistic competition',
      ],
      0,
      'It gave macro a tractable theory of unemployment as an equilibrium flow phenomenon rather than a disequilibrium residual. Nobel, 2010.',
    ],
    [
      'What is the principal modern criticism of using the Hodrick-Prescott filter on macro time series?',
      [
        'It generates spurious dynamics and suffers severe end-of-sample bias',
        'It cannot be applied to series containing a unit root',
        'It requires the cycle to be strictly periodic',
        'It systematically understates the amplitude of recessions relative to expansions',
      ],
      0,
      'Hamilton\'s "Why You Should Never Use the HP Filter" (2018) is the standard reference; the end-point problem is why real-time output gaps are revised so heavily.',
    ],
    [
      'At the zero lower bound in a standard New Keynesian model, what happens?',
      [
        'The policy rate cannot fall to the level the model calls for, and fiscal multipliers rise',
        'Inflation expectations become perfectly anchored by the announced target',
        'The Phillips curve becomes vertical and monetary policy regains traction',
        'Ricardian equivalence fails, which makes tax cuts the only remaining effective policy instrument',
      ],
      0,
      'The same models imply a "forward guidance puzzle": announced future rate paths have implausibly large effects, which is one reason the literature moved toward heterogeneous-agent variants.',
    ],
    [
      'What did Reinhart and Rogoff document across eight centuries of data?',
      [
        'Recurring empirical regularities in sovereign default, banking and inflation crises',
        'A stable inverse relationship between inflation and unemployment across regimes',
        'That financial liberalisation reliably raises long-run growth rates',
        'That currency unions systematically reduce the frequency of sovereign default',
      ],
      0,
      'The book\'s influence outran its evidence in one respect: the associated 90%-debt-threshold result was later found to rest on a coding error and contested weighting.',
    ],
  ],
  professor: [
    [
      'What does the Hansen-Jagannathan bound constrain?',
      [
        'The minimum volatility of any stochastic discount factor consistent with observed asset returns',
        'The maximum Sharpe ratio attainable by any mean-variance efficient portfolio of the traded assets',
        'The set of no-arbitrage prices for a redundant security',
        'The variance of consumption growth implied by a representative agent',
      ],
      0,
      'It turns the equity premium puzzle into a sharp statement: the SDF has to be far more volatile than plausible consumption-based models can deliver.',
    ],
    [
      'Epstein-Zin recursive preferences separate which two things that time-additive expected utility conflates?',
      [
        'Risk aversion and the elasticity of intertemporal substitution',
        'Time preference and the intertemporal elasticity of labour supply',
        'Ambiguity aversion and risk aversion over known distributions',
        'The discount rate and the survival probability of the agent',
      ],
      0,
      'That separation is what makes long-run risk models able to generate a substantial equity premium without an implausible aversion to consumption fluctuations.',
    ],
    [
      'What does the Aiyagari model add to the neoclassical growth framework?',
      [
        'Uninsurable idiosyncratic income risk with borrowing constraints, generating precautionary saving',
        'Overlapping generations, each with a finite planning horizon, replacing the infinitely-lived agent',
        'Search frictions in the market for capital goods',
        'Nominal rigidities that make monetary policy non-neutral',
      ],
      0,
      'Incomplete markets push the equilibrium rate below the rate of time preference and produce a non-degenerate wealth distribution - the ancestor of the modern heterogeneous-agent literature.',
    ],
    [
      'The financial accelerator of Bernanke, Gertler and Gilchrist works through what mechanism?',
      [
        'An external finance premium that falls in borrower net worth, so shocks to balance sheets amplify and propagate',
        'A binding collateral constraint that fixes permissible leverage independently of prevailing asset prices entirely',
        'Bank runs triggered by a public signal about asset quality',
        'A wedge between deposit and lending rates set by imperfect competition',
      ],
      0,
      'Because net worth is procyclical, the premium is countercyclical, and an initially small shock persists - the agency-cost microfoundation being the Townsend costly-state-verification problem.',
    ],
    [
      'What is the central claim of the HANK literature about monetary transmission?',
      [
        'Indirect general-equilibrium effects on labour income dominate the direct intertemporal-substitution channel',
        'Monetary policy operates almost entirely through the exchange-rate channel',
        'Rate changes affect aggregate output only through their effect on residential investment and construction activity',
        'Household heterogeneity leaves aggregate transmission essentially unchanged',
      ],
      0,
      'With realistic shares of hand-to-mouth households the representative-agent channel is small, which shifts attention to who receives the income and holds the debt.',
    ],
  ],
};
