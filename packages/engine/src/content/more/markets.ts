import type { CategoryContent } from '../row.js';

/** Finance & Structured Products, second chunk. Correct option first; rotated at build. */

export const MORE_FINANCE: CategoryContent = {
  graduate: [
    [
      'What does a bond\'s convexity measure?',
      [
        'The curvature of the price-yield relationship',
        'The sensitivity of price to a one-basis-point yield change',
        'The dispersion of cash flows around the duration point',
        'The change in yield for a given change in credit spread',
      ],
      0,
      'Positive convexity means duration overstates losses when yields rise and understates gains when they fall - which is why it is worth paying for.',
    ],
    [
      'In a securitisation, what does a "waterfall" specify?',
      [
        'The order in which collateral cash flows are applied to fees, interest and principal by seniority',
        'The schedule on which the collateral pool amortises, scheduled and unscheduled principal taken together',
        'The sequence in which defaulted loans are foreclosed',
        'The order in which rating agencies must be notified of losses',
      ],
      0,
      'Everything about a structured note is in the waterfall: two deals with identical collateral can behave completely differently.',
    ],
    [
      'What is a repo, economically?',
      [
        'A collateralised loan structured as a sale and agreed repurchase',
        'An outright sale of a security with an option to buy it back',
        'A swap of one security for another of equivalent credit quality',
        'A short-term unsecured interbank deposit',
      ],
      0,
      'The legal form as a sale is what gives the lender its bankruptcy protection, and the haircut is the credit protection.',
    ],
    [
      'What does put-call parity relate?',
      [
        'European call and put prices at the same strike and expiry',
        'American call and put prices to their early-exercise premia',
        'Implied volatilities of calls and puts at the same delta',
        'Forward and futures prices under deterministic rates',
      ],
      0,
      'It is model-free, which is why a violation is an arbitrage rather than an argument about the model.',
    ],
    [
      'What is the difference between a forward and a futures contract?',
      [
        'Futures are exchange-traded, margined and marked daily; forwards are bilateral and settled at maturity',
        'Forwards are cash-settled and futures are physically delivered',
        'Futures have no counterparty risk and forwards have no market risk',
        'Forwards may be netted and futures may not, so exposure accumulates gross on an exchange but nets bilaterally',
      ],
      0,
      'Daily margining is what makes their prices differ from forwards when rates are stochastic - the convexity adjustment.',
    ],
    [
      'What does a credit default swap buyer purchase?',
      [
        'Protection against a defined credit event on a reference entity, in exchange for a periodic premium',
        'An option to buy the reference entity\'s bonds at par',
        'A guarantee of the reference bond\'s market value, payable by the protection seller on demand at any time',
        'A total return exposure to the reference entity\'s debt',
      ],
      0,
      'Total return exposure to the debt is a total return swap instead. Whether a given restructuring is a credit event is settled by a determinations committee, not by first principles.',
    ],
    [
      'What is the CAPM\'s central prediction?',
      [
        'Expected excess return is proportional to beta with the market',
        'Expected return rises with total return volatility',
        'All investors hold the same portfolio of risky assets in the same proportions',
        'The market portfolio is mean-variance efficient by construction',
      ],
      0,
      'That every investor holds the market portfolio is an implication of the model, not the testable prediction - which is Roll\'s critique in miniature.',
    ],
    [
      'What does "duration matching" achieve for a pension liability?',
      [
        'First-order immunisation against a parallel shift in the yield curve',
        'Complete elimination of interest-rate risk',
        'Protection against inflation as well as nominal rates',
        'Protection against non-parallel shifts in the curve',
      ],
      0,
      'Parallel shifts only, and to first order. Key-rate durations exist because the curve does not oblige by moving in parallel.',
    ],
    [
      'What is a "haircut" in secured funding?',
      [
        'The excess of collateral value over the loan amount, protecting the lender against price moves',
        'The fee charged by the lender for arranging the facility',
        'The discount at which distressed collateral is liquidated',
        'The write-down applied to a defaulted loan\'s book value, once recovery expectations have been revised',
      ],
      0,
      'Procyclical haircuts are one of the standard mechanisms by which a funding market amplifies a price decline.',
    ],
    [
      'What does an interest rate cap pay?',
      [
        'The excess of a reference rate over a strike, on each reset',
        'A fixed amount if the reference rate exceeds the strike at maturity',
        'The difference between fixed and floating legs of a swap',
        'A rebate of interest paid above the strike over the life of a loan',
      ],
      0,
      'It is a strip of caplets, which is why it is priced as a portfolio of options rather than as a single one.',
    ],
  ],
  phd: [
    [
      'What does the Heath-Jarrow-Morton framework model directly?',
      [
        'The evolution of the whole forward rate curve',
        'The short rate as a mean-reverting diffusion',
        'Bond prices as functions of a small number of latent factors',
        'The joint distribution of swap rates across maturities',
      ],
      0,
      'The drift condition is the content: once you choose the volatility structure, no-arbitrage fixes the rest.',
    ],
    [
      'What is the "volatility smile" in equity index options usually attributed to?',
      [
        'Fat tails and a negative return-volatility correlation, priced as demand for downside protection',
        'Transaction costs increasing with moneyness, since deep out-of-the-money contracts trade far less frequently',
        'Model risk premia charged uniformly across strikes',
        'Dividend uncertainty for long-dated contracts',
      ],
      0,
      'The skew steepened permanently after 1987, which is a striking case of a market re-pricing a tail it had previously ignored.',
    ],
    [
      'What does the Fundamental Theorem of Asset Pricing state?',
      [
        'Absence of arbitrage is equivalent to the existence of an equivalent martingale measure',
        'Every derivative can be replicated by a self-financing strategy',
        'Market completeness implies a unique equilibrium price for any claim',
        'All investors agree on prices when preferences are homothetic',
      ],
      0,
      'Uniqueness of the measure is the second theorem and corresponds to completeness - conflating the two is the standard error.',
    ],
    [
      'What is the practical difficulty with delta hedging in the presence of gamma?',
      [
        'Discrete rehedging leaves a residual whose expected cost scales with gamma and realised variance',
        'Delta cannot be computed when volatility is stochastic',
        'Gamma changes sign at the money, making the hedge unstable',
        'Transaction costs are unrelated to hedge frequency, so rehedging can be made arbitrarily fine at no cost',
      ],
      0,
      'It is why an options book\'s profit is essentially a bet on realised versus implied variance, whatever the trader thinks they are doing.',
    ],
    [
      'What does the Merton structural model treat equity as?',
      [
        'A call option on the firm\'s assets struck at the face value of its debt',
        'A perpetual claim on residual cash flows after debt service',
        'A put option written to the firm\'s creditors',
        'A convertible claim whose value depends on asset volatility only',
      ],
      0,
      'It gives an economically interpretable default probability, and it systematically underpredicts short-horizon spreads - the credit spread puzzle.',
    ],
    [
      'What is "basis risk" in a hedging programme?',
      [
        'Residual exposure because the hedge instrument and the exposure are imperfectly correlated',
        'The risk that the hedge counterparty defaults',
        'The risk that margin calls exceed available liquidity',
        'The risk of a change in the relationship between spot and futures at expiry only',
      ],
      0,
      'The metals and energy hedging literature is full of it: hedging jet fuel with crude works right up until the crack spread moves.',
    ],
    [
      'What did the 2008 experience reveal about the "originate to distribute" model?',
      [
        'Weakened incentives for screening when the originator retains no exposure to loan performance',
        'That securitisation cannot diversify idiosyncratic credit risk',
        'That rating agencies had no access to loan-level data, so their models were fitted to pool averages',
        'That mortgage default is uncorrelated with house prices',
      ],
      0,
      'Keys et al. found the discontinuity at securitisation thresholds. Skin-in-the-game retention rules are the direct regulatory response.',
    ],
    [
      'What does a "collateral transformation" trade do?',
      [
        'Exchanges lower-quality assets for eligible collateral, transferring liquidity risk rather than removing it',
        'Converts collateral into cash without a repurchase obligation, so the exposure leaves the balance sheet entirely',
        'Substitutes cash margin for securities margin at a clearing house',
        'Reduces the total collateral required by netting across counterparties',
      ],
      0,
      'Central clearing mandates raised demand for eligible collateral, and this is one of the ways that demand got met without creating any.',
    ],
    [
      'What is the "limits to arbitrage" argument?',
      [
        'Arbitrageurs face capital constraints and horizon risk',
        'Arbitrage is impossible in the presence of transaction costs',
        'Mispricings persist because investors are uniformly irrational',
        'Arbitrage requires perfect information about fundamental value',
      ],
      0,
      'Shleifer and Vishny. Noise trader risk means being right eventually is not enough if the fund is redeemed first.',
    ],
    [
      'What does the term "wrong-way risk" describe in counterparty exposure?',
      [
        'Exposure rising precisely as the counterparty\'s credit quality deteriorates',
        'Exposure to a counterparty in a currency other than the trade currency',
        'Netting agreements that fail to hold in the counterparty\'s jurisdiction',
        'Collateral whose value falls when markets are stressed',
      ],
      0,
      'A sovereign CDS bought from a bank in the same country is the textbook case, and it is why CVA models need correlated simulation.',
    ],
  ],
  professor: [
    [
      'What does the Heston model add over Black-Scholes, and what does it cost?',
      [
        'Stochastic variance with a semi-analytic price',
        'Jumps in the underlying, at the cost of losing closed-form solutions',
        'A local volatility surface fitted exactly, at the cost of unstable forward smiles',
        'Stochastic interest rates, at the cost of requiring numerical integration',
      ],
      0,
      'Incompleteness is the conceptual cost: volatility risk is not hedgeable with the underlying alone, so a market price of volatility risk enters.',
    ],
    [
      'What is the significance of the Dupire local volatility formula?',
      [
        'It recovers a unique local volatility surface from a continuum of option prices, fitting the smile exactly',
        'It proves that stochastic volatility models cannot fit observed prices at any maturity or strike whatsoever',
        'It gives the implied volatility as a function of moneyness in closed form',
        'It establishes that local and stochastic volatility give identical forward smiles',
      ],
      0,
      'The forward smile dynamics it implies are known to be wrong, which is why practitioners run local-stochastic hybrids rather than either alone.',
    ],
    [
      'What does the Gatheral SVI parameterisation solve in practice?',
      [
        'A parsimonious, arbitrage-free-checkable fit to the implied variance smile across strikes',
        'The joint calibration of volatility and interest-rate models',
        'The pricing of American options under stochastic volatility, in closed form and without simulation',
        'The interpolation of the discount curve between liquid tenors',
      ],
      0,
      'The static arbitrage conditions on its parameters are the reason it displaced ad hoc spline fits on trading desks.',
    ],
    [
      'What does the "roughness" literature on volatility claim?',
      [
        'Realised volatility has a Hurst exponent well below one half',
        'Volatility is a pure jump process with no diffusive component',
        'Volatility is long-memory with a Hurst exponent above one half',
        'Volatility is deterministic conditional on the option surface',
      ],
      0,
      'Gatheral, Jaisson and Rosenbaum. Whether the estimate is contaminated by microstructure noise is precisely the live objection.',
    ],
    [
      'What is the practical significance of "multi-curve" discounting after 2008?',
      [
        'Discounting moved to collateral-rate curves while forecasting stays on tenor-specific curves, breaking the single-curve identity',
        'Discount curves are now constructed from government bonds rather than swaps',
        'Forward rates are no longer implied from spot rates at all, and must instead be quoted directly for each tenor by the interdealer market',
        'A single OIS curve is used for both discounting and forecasting',
      ],
      0,
      'Basis spreads between tenors became too large to ignore, which turned a textbook identity into an inconsistency requiring separate curves.',
    ],
    [
      'What does the Amihud-Mendelson and subsequent liquidity literature establish about expected returns?',
      [
        'Illiquidity is priced, both as a level characteristic and as exposure to systematic liquidity risk',
        'Liquidity affects trading costs but not equilibrium expected returns',
        'Only idiosyncratic liquidity matters, and it is diversifiable, so no premium survives in a large portfolio',
        'Liquidity premia disappear once size and value are controlled',
      ],
      0,
      'Pastor-Stambaugh and Acharya-Pedersen separated the characteristic from the risk exposure, and both survive as priced.',
    ],
    [
      'What is the central identification problem in estimating the effect of quantitative easing on yields?',
      [
        'Announcements are anticipated and correlated with the conditions prompting them, so event windows and counterfactuals are contested',
        'Yields are unobservable at the relevant maturities',
        'Central bank purchases are not publicly disclosed at the security level, so the size and timing of the intervention cannot be reconstructed',
        'The effect is theoretically zero under complete markets',
      ],
      0,
      'Portfolio-balance and signalling channels are hard to separate, which is why estimates of the same programme differ by an order of magnitude.',
    ],
    [
      'What does the literature on "flash crashes" and market microstructure identify as the key fragility?',
      [
        'Liquidity provision is voluntary and withdraws under stress',
        'High-frequency traders systematically front-run institutional order flow',
        'Exchange matching engines cannot handle peak message rates',
        'Circuit breakers are the direct cause of the price gaps they follow',
      ],
      0,
      'No obligation to quote is the structural point. The 2010 and 2015 episodes differ in mechanism and share that feature.',
    ],
    [
      'What is the "convenience yield" of Treasury securities argued to imply?',
      [
        'A price premium for safety and liquidity that shows up as a violation of covered interest parity and as negative swap spreads',
        'That Treasuries are mispriced relative to corporate bonds of equivalent maturity',
        'That the term premium is negative at all maturities, so long bonds are systematically expensive relative to rolling short positions',
        'That the risk-free rate is unobservable in principle',
      ],
      0,
      'Krishnamurthy and Vissing-Jorgensen. Once safe assets earn a non-pecuniary return, several apparent arbitrages stop being arbitrages.',
    ],
    [
      'What does the post-2008 evidence say about the value of ratings in structured finance?',
      [
        'Ratings were systematically over-optimistic for structured products',
        'Ratings for structured products performed comparably to corporate ratings',
        'The failure was confined to a small number of manipulated deals',
        'Ratings were accurate but users misinterpreted the scale',
      ],
      0,
      'Correlation assumptions in the copula models are the technical failure; the incentive structure is why nobody inside the process fixed them.',
    ],
  ],
};
