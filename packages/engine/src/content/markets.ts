import type { CategoryContent } from './row.js';

/**
 * Finance & Structured Products.
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
 *
 * Economics & Financial History has been retired and split into
 * Macroeconomics and Microeconomics - see markets2.ts.
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
