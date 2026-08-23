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
  msc: [
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
  bscba: [
    [
      'A plain vanilla interest-rate swap between two parties serves what primary purpose?',
      [
        'Allows each party to exchange fixed and floating interest payments on a notional amount',
        'Eliminates interest-rate risk entirely by locking in today\'s rate for all future periods',
        'Transfers credit risk from one counterparty to the other without affecting cash flows',
        'Enables the sale of a bond position without recognising a loss on the balance sheet',
      ],
      0,
      'Each party swaps one cash flow stream for another on the same notional; neither party\'s underlying debt obligation changes.',
    ],
    [
      'How do bond prices typically respond to an increase in market interest rates?',
      [
        'Bond prices fall',
        'Bond prices remain unchanged because the coupon is fixed',
        'Bond prices rise to compensate investors',
        'Bond prices are unaffected by interest-rate changes',
      ],
      0,
      'Present value of future cash flows declines as the discount rate rises; this is the fundamental inverse relationship between price and yield.',
    ],
    [
      'In a securitised asset pool, what is the primary role of the equity tranche?',
      [
        'It absorbs initial losses before other investors experience any loss',
        'It guarantees the safety of the senior notes to investors',
        'It receives cash flows only after all other tranches are fully paid',
        'It holds all the underlying assets in a trust account for investors',
      ],
      0,
      'Being subordinated, the equity tranche faces losses first; in exchange, it receives residual interest payments (excess spread).',
    ],
    [
      'What is the defining difference between a call option and a put option?',
      [
        'A call gives the right to buy at a set price; a put gives the right to sell at a set price',
        'A call can only be exercised once, while a put can be exercised multiple times during its life',
        'Calls have intrinsic value while puts consist only of time value',
        'Calls are used only by buyers of stock, and puts only by investors who sell short',
      ],
      0,
      'The distinction is purely directional: calls profit from price increases, puts from price decreases.',
    ],
    [
      'Why do banks originate mortgages and then sell them as mortgage-backed securities rather than hold them until maturity?',
      [
        'To transfer credit risk to capital markets and free up capital for new lending',
        'Because mortgages cannot generate positive returns if held on the balance sheet',
        'To reduce their exposure to interest-rate volatility and prepayment risk',
        'Because bank regulators prohibit banks from holding mortgages directly',
      ],
      0,
      'Securitization transfers credit risk to investors and releases regulatory capital; the originator earns fees on origination and servicing.',
    ],
    [
      'What does a credit spread represent in bond markets?',
      [
        'The difference in yield between a corporate bond and a government bond of similar maturity',
        'The fee charged by credit rating agencies to assess bond credit quality',
        'The percentage of principal that must be held as collateral by the issuer',
        'The maximum percentage gain an investor can earn if a bond is called early',
      ],
      0,
      'The spread reflects the market\'s perception of the issuer\'s default risk; wider spreads indicate higher perceived risk.',
    ],
    [
      'A forward contract and a futures contract both allow you to lock in a price today for delivery later. What is a key difference?',
      [
        'Futures are standardised and traded on exchanges; forwards are customised and traded over-the-counter',
        'Forwards require no initial payment while futures require an upfront premium',
        'Futures are used only for commodities while forwards apply only to financial assets',
        'Forward contracts can be broken by either party, but futures contracts cannot',
      ],
      0,
      'Exchange-traded futures have standardised contracts, daily marking to market, and clearing-house guarantees; forwards are bespoke.',
    ],
    [
      'In the context of international finance, covered interest parity refers to what?',
      [
        'The relationship that ensures two currencies with different interest rates will have equal returns when currency risk is hedged',
        'A central bank\'s promise to support a currency\'s peg by intervening in foreign exchange markets',
        'A requirement that international bonds must be backed by collateral in the borrower\'s home currency',
        'A regulation requiring banks to hedge all their foreign exchange exposures',
      ],
      0,
      'If the interest-rate differential is not offset by the forward premium, arbitrage should eliminate the discrepancy.',
    ],
    [
      'What does the yield curve represent?',
      [
        'The relationship between bond maturity and yield for bonds of the same credit quality',
        'The cumulative return an investor has earned on their bond portfolio to date',
        'The daily fluctuations in the prices of actively traded government bonds',
        'The percentage of a bond\'s value that is paid as a coupon each year',
      ],
      0,
      'A typical yield curve slopes upward because investors demand higher returns for longer maturities; an inverted curve often signals recession expectations.',
    ],
    [
      'How does a dividend payment typically affect the value of a stock?',
      [
        'The stock price typically falls by approximately the dividend amount on the ex-dividend date',
        'Dividends increase stock price permanently by the amount of cash distributed',
        'Stock price is completely unaffected by dividend announcements',
        'Dividends reduce the company\'s total value but increase the stock price due to tax benefits',
      ],
      0,
      'The stock is worth less after dividends because cash has left the company; the shareholder has cash but the stock is worth less.',
    ],
    [
      'What is the main benefit of portfolio diversification?',
      [
        'It reduces portfolio risk by combining assets that do not move in perfect lockstep with each other',
        'It guarantees that all investors will earn the same return as the market index',
        'It eliminates the need for investors to monitor their holdings',
        'It ensures that at least one investment in the portfolio will always outperform the market',
      ],
      0,
      'Combining assets with imperfect correlation reduces the portfolio\'s overall volatility without sacrificing expected return.',
    ],
    [
      'In fixed-income markets, what does a basis point represent?',
      [
        'One hundredth of a percent (0.01%)',
        'One percent',
        'The smallest unit that government bond yields can change',
        'The fee charged by a bond dealer on a transaction',
      ],
      0,
      'Basis points are the standard unit for quoting spreads and small changes in yields; 100 bps equals one percentage point.',
    ],
    [
      'What is a floating-rate note (FRN)?',
      [
        'A bond whose coupon interest rate adjusts periodically based on a reference rate such as LIBOR or SOFR',
        'A bond issued by a company whose revenues fluctuate with market conditions',
        'A government bond whose value adjusts for inflation by changing the face amount',
        'A short-term security that matures unpredictably based on market conditions',
      ],
      0,
      'As reference rates change, coupon payments on FRNs adjust; this protects investors from rising rates but reduces upside if rates fall.',
    ],
    [
      'In derivatives trading, what does collateral serve to do?',
      [
        'Reduce the risk that a counterparty will default by securing the transaction with an asset pledge',
        'Increase the leverage available to traders in derivatives markets',
        'Determine the notional amount that can be traded in a single derivatives contract',
        'Replace the need for credit ratings by guaranteeing all derivative transactions',
      ],
      0,
      'Collateral is posted to protect the non-defaulting party; in a default, the collateral can be liquidated to recover losses.',
    ],
    [
      'What is arbitrage in financial markets?',
      [
        'Simultaneously buying and selling the same or equivalent assets in different markets to profit from price discrepancies',
        'Predicting future price movements using historical price patterns and technical analysis',
        'Buying undervalued stocks and holding them until they rise back to fair value',
        'Using leverage to amplify returns on a portfolio of risky assets',
      ],
      0,
      'Arbitrage locks in profit with minimal risk by exploiting mispricings; when exploited widely, arbitrage helps prices converge to fair value.',
    ],
  ],
};
