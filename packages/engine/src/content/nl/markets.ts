import type { CategoryContent } from '../row.js';

/**
 * Finance & Structured Products.
 *
 * Calibratie (zie `DIFFICULTY_TIERS` voor de normatieve versie):
 *  - graduate: MSc/MA in het vakgebied. Een structureerder, een analist, een macro-desk.
 *  - phd: een specialist - PhD-kandidaat, of tien jaar op de desk.
 *  - professor: twintig jaar ervaring en op de hoogte van de actuele literatuur.
 *
 * Finance is de categorie waarin de niveaus zich het scherpst scheiden, omdat
 * het vocabulaire werkelijk gelaagd is: iedereen in het gebouw weet wat vega
 * is, het base-correlation-raamwerk is een gesprek voor de quant-desk, en de
 * literatuur over cross-currency basis telt maar een handvol papers.
 *
 * Economics & Financial History is uitgefaseerd en opgesplitst in
 * Macroeconomics en Microeconomics - zie markets2.ts.
 */

export const FINANCE: CategoryContent = {
  graduate: [
    [
      'Wat doet de equity-tranche in de kapitaalstructuur van een cash CDO?',
      [
        'Neemt de eerste verliezen op de onderpandpool voor haar rekening',
        'Neemt verliezen pas voor haar rekening zodra de mezzanine-tranches zijn uitgeput',
        'Ontvangt hoofdsom vóór welke gerate note dan ook',
        'Draagt prepaymentrisico maar geen kredietrisico',
      ],
      0,
      'Ze bevindt zich op het 0%-attachmentpunt, en dat is waarom ze de resterende spread verdient en geprijsd wordt op basis van verwacht verlies in plaats van een rating.',
    ],
    [
      'Wat doet een payer-swappositie?',
      [
        'Betaalt vast en ontvangt variabel',
        'Betaalt variabel en ontvangt vast',
        'Betaalt beide poten in verschillende valuta',
        'Betaalt een vaste premie voor het recht om later een swap aan te gaan',
      ],
      0,
      'Payer en receiver verwijzen altijd naar de vaste poot. Een premie betalen voor het recht om later in te stappen beschrijft juist een payer-swaption.',
    ],
    [
      'Wat meet de Macaulay-duration?',
      [
        'De naar cashflow gewogen gemiddelde tijd tot ontvangst, in jaren',
        'De procentuele prijsverandering bij een renteverandering van één basispunt',
        'De tweede afgeleide van de prijs naar de rente',
        'De tijd tot een obligatie voor het eerst door de uitgevende instelling kan worden afgeroepen',
      ],
      0,
      'Modified duration is dat cijfer gedeeld door (1 + y/n) en is de maatstaf voor prijsgevoeligheid; de tweede afgeleide is convexiteit.',
    ],
    [
      'Wat levert overcollateralisatie op in een securitisatie?',
      [
        'Kredietverbetering, omdat de onderpandpool groter is dan de uitgegeven notes',
        'Liquiditeitssteun onttrokken aan een kasreserverekening die bij de trustbank in bewaring wordt gehouden',
        'Bescherming tegen renterisico in plaats van kredietrisico',
        'Een garantie van de originerende bank op de senior notes',
      ],
      0,
      'Het is interne kredietverbetering, naast excess spread en subordinatie; een externe garantie zou een wrap zijn.',
    ],
    [
      'Wat meet de vega van een optie?',
      [
        'De gevoeligheid van de waarde voor een verandering in de impliciete volatiliteit',
        'De gevoeligheid van de delta voor een verandering in de onderliggende waarde',
        'De gevoeligheid van de waarde voor het verstrijken van tijd',
        'De gevoeligheid van de waarde voor de risicovrije rente',
      ],
      0,
      'Gamma is delta-naar-spot, theta is tijdsverval, rho is de rentegevoeligheid.',
    ],
  ],
  phd: [
    [
      'Bij een obligatiefuturescontract, wat maakt een leverbare obligatie "cheapest to deliver"?',
      [
        "Ze maximaliseert het rendement van de shortpositie zodra de conversiefactor is toegepast",
        'Ze heeft de langste modified duration van alle obligaties in de leverbare basket, wat haar het meest rentegevoelig maakt bij een parallelle verschuiving van de curve',
        'Ze is de meest recent uitgegeven obligatie in de basket, doorgaans de meest liquide on-the-run-lijn met de smalste bid-offerspread',
        'Ze heeft de laagste uitstaande hoofdsom in de basket',
      ],
      0,
      'De conversiefactor egaliseert de basket maar bij benadering, waardoor er een resterende optionaliteit bij de shortpositie blijft liggen - en dat is waarom het contract wordt geprijsd op basis van de CTD en haar impliciete repo-rente.',
    ],
    [
      'Waarop slaat de "correlatieglimlach" die in de markt voor synthetische CDO\'s wordt waargenomen?',
      [
        'Impliciete correlatie die per tranche verschilt wanneer deze via een eenfactor-Gaussische copula wordt gequoteerd',
        'Correlatie tussen wanbetalingspercentages en recovery-rates binnen één pool, zoals expliciet gemodelleerd in structurele kredietmodellen met stochastische recovery',
        'Correlatie die toeneemt naarmate de onderpandpool geconcentreerder wordt, vooral zichtbaar in sectorspecifieke portefeuilles zoals subprime-RMBS',
        'De neiging van gerealiseerde wanbetalingscorrelaties om sterk te stijgen tijdens periodes van marktstress',
      ],
      0,
      'Elke tranche apart fitten levert verschillende impliciete correlaties op, en dat is de markt die je vertelt dat het model niet klopt; base correlation was de reparatie daarvan.',
    ],
    [
      'Waardoor ontstaat negatieve convexiteit bij een mortgage-backed security?',
      [
        'Kredietnemers hebben een prepaymentoptie, waardoor de duration korter wordt als de rente daalt en langer als de rente stijgt',
        'Servicers mogen naar eigen inzicht gemiste betalingen aan de trust voorschieten, conform de servicingovereenkomst en tot het bedrag van de vooruit ontvangen servicingfee',
        'De pass-throughstructuur vertraagt de ontvangst van hoofdsom ten opzichte van de onderliggende onderpandpool zelf, wat een extra laag van timingrisico toevoegt voor de investeerder',
        'Kredietverliezen correleren met het renteniveau',
      ],
      0,
      'De investeerder heeft een short optiepositie, waardoor de opwaartse kant van een rentedaling wordt afgekapt - dit is precies de reden waarom MBS-hedging een dynamische bezigheid is.',
    ],
    [
      'Welke component verdween uit de benchmark toen LIBOR werd vervangen door SOFR?',
      [
        'Een component van ongedekt bankkrediet en termijnpremie',
        'De convexiteitscorrectie die wordt toegepast op forward-startende contracten',
        'De overnight-component van de curve',
        'De basis tussen onshore- en offshore-fundingmarkten',
      ],
      0,
      'SOFR is een gedekte overnight-rente, en dat is waarom kredietgevoelige fallbacks en de constructie van term-SOFR zo omstreden werden.',
    ],
    [
      'Wat vangt de funding valuation adjustment (FVA) op een derivatenboek?',
      [
        'De kosten van het financieren van het ongedekte deel van een positie over de looptijd ervan',
        'Het verwachte verlies door wanbetaling van de tegenpartij, na aftrek van onderpand',
        'Het regulatoire kapitaal dat wordt aangehouden tegen kredietrisico van de tegenpartij',
        'De bid-offerkosten van het afwikkelen van een grote positie in een gestreste of illiquide markt',
      ],
      0,
      'CVA is de term voor het wanbetalingsverlies en KVA de kapitaalterm; of FVA economisch überhaupt legitiem is, was een echte discussie in de literatuur.',
    ],
  ],
  professor: [
    [
      'Waarnaar verwijst base correlation binnen het base-correlationraamwerk?',
      [
        'Equity-tranches lopend van nul tot elk detachmentpunt',
        'Elke afzonderlijke mezzanine-tranche op zichzelf beschouwd',
        'De gemiddelde paarsgewijze assetcorrelatie geïmpliceerd door single-name spreads',
        'De meest senior tranche, waarbij juniortranches daaruit worden geïnterpoleerd',
      ],
      0,
      'Het quoteren van een strikt stijgende curve op [0, x]-tranches herstelt arbitragevrije interpolatie, iets wat per-tranche compound correlation niet kon leveren.',
    ],
    [
      'Wat levert de Vasicek large-portfolio-limiet op?',
      [
        'De asymptotische verliesverdeling van een homogene pool onder één systematische factor',
        'De termijnstructuur van wanbetalingsintensiteiten geïmpliceerd door een doubly stochastic Cox-procesmodel',
        'Een gesloten-vorm-grens voor de prijs van een nth-to-default basket',
        'De verdeling van recovery-rates conditioneel op het wanbetalingspercentage',
      ],
      0,
      'Het is de analytische ruggengraat van de Basel IRB-risicowegingsformules, en de aannames erachter - één factor, oneindige granulariteit - zijn precies waar de verliezen van 2007 vandaan kwamen.',
    ],
    [
      'Wat lost het Longstaff-Schwartz-algoritme op, en hoe?',
      [
        'Prijsvorming van Bermuda- en Amerikaanse opties, door continuatiewaarden te regresseren binnen een Monte Carlo-simulatie',
        'Calibratie van de termijnstructuur, door forward rates te fitten op een splinebasis',
        'Verliesverdelingen van kredietportefeuilles, via saddlepoint-benadering van de momentgenererende functie',
        'Optimale hedging onder transactiekosten, via dynamisch programmeren op een lattice',
      ],
      0,
      'Least-squares Monte Carlo verving de onhandelbare backward induction op hoogdimensionale lattices, en de schatter is licht vertekend naar onder, wat ertoe doet als je hem gebruikt om een boek te marken.',
    ],
    [
      'Waarvan is een aanhoudend negatieve EUR/USD cross-currency basis het bewijs?',
      [
        'Een schending van covered interest parity, wat een premie op dollarfunding weerspiegelt',
        'Een verwachting van eurodepreciatie onder uncovered interest parity',
        'Een misprijzing van de forward points ten opzichte van het renteverschil, die door arbitrage wordt weggewerkt',
        'Een divergentie tussen onshore- en offshore-deposito rentes in euro',
      ],
      0,
      'Kosten op de balans na de crisis en regulatoire beperkingen maakten de klassieke arbitrage oneconomisch, waardoor de afwijking blijft bestaan in plaats van te sluiten - een van de duidelijkere gevallen waarin een no-arbitragevoorwaarde faalt om institutionele redenen.',
    ],
    [
      'Wat is het kenmerkende aspect van het SABR-model?',
      [
        'Een stochastische-volatiliteitsspecificatie met een gesloten-vorm-asymptoot voor de impliciete volatiliteit die op de smile past',
        'Een lokale-volatiliteitscurve die exact op de geobserveerde optieprijzen is gefit',
        'Een jump-diffusieproces gecalibreerd op de geobserveerde termijnstructuur van variance-swaprates over verschillende looptijden',
        'Een tweefactor short-rate-model met mean reversion in beide factoren',
      ],
      0,
      "Hagans expansie is wat het bruikbaar maakte op een swaptiondesk in real time; het bekende probleem is negatieve dichtheden bij lage strikes, wat de shifted- en free-boundary-varianten verhelpen.",
    ],
  ],
};
