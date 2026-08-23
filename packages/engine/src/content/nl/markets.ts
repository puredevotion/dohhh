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
  msc: [
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
  bscba: [
    [
      'Een gewone renteswap tussen twee partijen dient wat primair doel?',
      [
        'Stelt elke partij in staat vaste en variabele rentebetalingen op een nominale bedrag uit te wisselen',
        'Elimineert het renterisico volledig door het rentetarief voor alle toekomstige periodes vast te leggen',
        'Draagt kredietrisico van de ene tegenpartij naar de andere over zonder kasstromen te beïnvloeden',
        'Stelt de verkoop van een obligatiepositie mogelijk zonder een verlies in de balans op te nemen',
      ],
      0,
      'Elke partij wisselt de ene kasstroomstroom in voor een ander bedrag op dezelfde nominale waarde; geen van beide partijen verandert de onderliggende schuldverplichting.',
    ],
    [
      'Hoe reageren obligatieprijzen typisch op een stijging van de rentetarieven op de markt?',
      [
        'Obligatieprijzen dalen',
        'Obligatieprijzen blijven onveranderd omdat de coupon vast staat',
        'Obligatieprijzen stijgen om beleggers schadeloos te stellen',
        'Obligatieprijzen worden niet beïnvloed door rentewijzigingen',
      ],
      0,
      'De contante waarde van toekomstige kasstromen daalt naarmate de discontovoet stijgt; dit is de fundamentele omgekeerde relatie tussen prijs en rendement.',
    ],
    [
      'In een gesecuritiseerde activapot, wat is de primaire rol van de equity-tranche?',
      [
        'Het absorbeert initiële verliezen vóór dat andere beleggers enig verlies ondergaan',
        'Het garandeert de veiligheid van de senior notes aan beleggers',
        'Het ontvangt kasstromen pas nadat alle andere tranches volledig zijn betaald',
        'Het houdt alle onderliggende activa in een trustaccount voor beleggers',
      ],
      0,
      'Omdat het achtergesteld is, ondergaat de equity-tranche eerst verliezen; als tegenpartij ontvangt het resterende rentebetaling (excess spread).',
    ],
    [
      'Wat is het wezenlijke verschil tussen een callopie en een putoptie?',
      [
        'Een call geeft het recht om op een vastgestelde prijs te kopen; een put geeft het recht om op een vastgestelde prijs te verkopen',
        'Een call kan slechts eenmaal worden uitgeoefend, terwijl een put meerdere keren gedurende de looptijd ervan kan worden uitgeoefend',
        'Calls hebben intrinsieke waarde terwijl puts alleen uit tijdswaarde bestaan',
        'Calls worden alleen gebruikt door aankoopers van aandelen, puts alleen door beleggers die short gaan',
      ],
      0,
      'Het onderscheid is zuiver richtinggevend: calls profiteren van prijsstijgingen, puts van prijsdalingen.',
    ],
    [
      'Waarom geven banken hypotheken uit en verkopen ze deze vervolgens als mortgage-backed securities in plaats van ze tot volwassenheid aan te houden?',
      [
        'Om kredietrisico naar de kapitaalmarkten over te dragen en kapitaal vrij te maken voor nieuwe leningen',
        'Omdat hypotheken geen positief rendement kunnen genereren als ze op de balans worden aangehouden',
        'Om hun blootstelling aan renterisico en prepaymentrisico te verminderen',
        'Omdat banktoezichthouders banken verbieden hypotheken rechtstreeks aan te houden',
      ],
      0,
      'Securitisatie draagt kredietrisico over aan beleggers en geeft regelgevingskapitaal vrij; de originator verdient vergoedingen op origination en servicing.',
    ],
    [
      'Wat vertegenwoordigt een creditspread in obligatiemarkten?',
      [
        'Het verschil in rendement tussen een bedrijfsobligatie en een staatsobligatie met dezelfde looptijd',
        'Het bedrag dat creditratingbureaus in rekening brengen om de kredietkwaliteit van obligaties te beoordelen',
        'Het percentage van de hoofdsom dat de uitgever als onderpand moet aanhouden',
        'De maximale procentuele winst die een belegger kan behalen als een obligatie voortijdig wordt afgeroepen',
      ],
      0,
      'De spread weerspiegelt de marktperceptie van het wanbetalingsrisico van de uitgever; bredere spreads wijzen op hoger waargenomen risico.',
    ],
    [
      'Een forwardcontract en een futurescontract stellen je beide in staat vandaag een prijs vast te leggen voor latere levering. Wat is een belangrijk verschil?',
      [
        'Futures zijn gestandaardiseerd en verhandeld op beurzen; forwards zijn aangepast en verhandeld over-the-counter',
        'Forwards vereisen geen initiële betaling, terwijl futures een vooruitbetaalde premie vereisen',
        'Futures worden alleen voor grondstoffen gebruikt, forwards alleen voor financiële activa',
        'Forwardcontracten kunnen door beide partijen worden verbroken, maar futurescontracten niet',
      ],
      0,
      'Ter beurze verhandelde futures hebben gestandaardiseerde contracten, dagelijkse marktherziening en clearinghousegarantie; forwards zijn op maat gemaakt.',
    ],
    [
      'In de context van internationale financiën: waarop slaat de gedekte rentepariteit?',
      [
        'De relatie die ervoor zorgt dat twee valuta\'s met verschillende rentetarieven gelijke rendementen hebben wanneer het valutarisico wordt afgedekt',
        'Een belofte van een centrale bank om een valutapeg te ondersteunen door op de wisselkoersmarkt in te grijpen',
        'Een vereiste dat internationale obligaties door onderpand in de thuisvaluta van de lener moeten worden gedekt',
        'Een regel dat banken al hun wisselkoersposities moeten afdekken',
      ],
      0,
      'Indien het renteverschil niet wordt gecompenseerd door de forward-premie, zou arbitrage de discrepantie moeten elimineren.',
    ],
    [
      'Wat vertegenwoordigt de rentecurve?',
      [
        'De relatie tussen obligatielooptijd en rendement voor obligaties met dezelfde kredietkwaliteit',
        'Het cumulatieve rendement dat een belegger tot nu toe op zijn obligatieportefeuille heeft behaald',
        'De dagelijkse schommelingen in de prijzen van actief verhandelde staatsobligaties',
        'Het percentage van de waarde van een obligatie dat elk jaar als coupon wordt uitbetaald',
      ],
      0,
      'Een typische rentecurve loopt opwaarts omdat beleggers hogere rendementen eisen voor langere looptijden; een omgekeerde curve wijst vaak op recessieverwachtingen.',
    ],
    [
      'Hoe beïnvloedt een dividenduitbetaling typisch de waarde van een aandeel?',
      [
        'De aandeelkoers daalt op de ex-dividenddatum doorgaans met ongeveer het dividendbedrag',
        'Dividenden verhogen de aandeelkoers permanent met het bedrag van de verdeelde contanten',
        'De aandeelkoers wordt helemaal niet beïnvloed door dividendaankondigingen',
        'Dividenden verminderen de totale waarde van het bedrijf maar verhogen de aandeelkoers vanwege belastingvoordelen',
      ],
      0,
      'Het aandeel is minder waard na dividenden omdat contanten het bedrijf hebben verlaten; de aandeelhouder heeft contanten maar het aandeel is minder waard.',
    ],
    [
      'Wat is het belangrijkste voordeel van portefeuille-diversificatie?',
      [
        'Het vermindert portefeuillerisico door activa te combineren die niet in perfecte synchronisatie met elkaar bewegen',
        'Het garandeert dat alle beleggers hetzelfde rendement als de marktindex behalen',
        'Het elimineert de noodzaak voor beleggers om hun bezittingen in de gaten te houden',
        'Het zorgt ervoor dat minstens één belegging in de portefeuille altijd beter dan de markt presteert',
      ],
      0,
      'Het combineren van activa met onvolmaakte correlatie vermindert de totale volatiliteit van de portefeuille zonder het verwachte rendement op te offeren.',
    ],
    [
      'Wat vertegenwoordigt een basispunt in de rentemarkten?',
      [
        'Een honderdste van een procent (0,01%)',
        'Één procent',
        'De kleinste eenheid waarmee staatsobligatierendementen kunnen veranderen',
        'De vergoeding die een obligatiehandelaar in rekening brengt voor een transactie',
      ],
      0,
      'Basispunten zijn de standaardeenheid voor het noteren van spreads en kleine veranderingen in rendementen; 100 bp is gelijk aan één procentpunt.',
    ],
    [
      'Wat is een floating-rate note (FRN)?',
      [
        'Een obligatie waarvan de couponrente periodiek wordt aangepast op basis van een referentievoet zoals LIBOR of SOFR',
        'Een obligatie uitgegeven door een bedrijf waarvan de inkomsten fluctueren met de marktomstandigheden',
        'Een staatsobligatie waarvan de waarde wordt aangepast voor inflatie door het gezicht bedrag te wijzigen',
        'Een kortetermijnzekerheid die onvoorspelbaar vervalt op basis van marktomstandigheden',
      ],
      0,
      'Naarmate referentietarifieven veranderen, passen couponbetalingen op FRN\'s zich aan; dit beschermt beleggers tegen stijgende rentetarieven maar vermindert opwaartse potentieel als rentes dalen.',
    ],
    [
      'Wat doet onderpand in derivatenhandel?',
      [
        'Vermindert het risico dat een tegenpartij in gebreke blijft door de transactie met een activapandrecht te beveiligen',
        'Verhoogt de hefboomwerking die beschikbaar is voor handelaren in derivatenmarkten',
        'Bepaalt het nominale bedrag dat in een enkel derivatencontract kan worden verhandeld',
        'Vervangt de noodzaak voor kredietratings door alle derivaattransacties te garanderen',
      ],
      0,
      'Onderpand wordt geplaatst om de niet-in-gebreke-blijvende partij te beschermen; in geval van wanbetaling kan het onderpand worden geliquideerd om verliezen terug te winnen.',
    ],
    [
      'Wat is arbitrage in financiële markten?',
      [
        'Gelijktijdig dezelfde of gelijkwaardige activa in verschillende markten kopen en verkopen om van prijsverschillen winst te maken',
        'Toekomstige prijsbewegingen voorspellen met behulp van historische prijspatronen en technische analyse',
        'Onderwaardeeerde aandelen kopen en ze vasthouden tot ze terugkeren naar eerlijke waarde',
        'Hefboomwerking gebruiken om rendementen op een portefeuille met risicovolle activa te vergroten',
      ],
      0,
      'Arbitrage vergrendelt winst met minimaal risico door mispricing uit te buiten; wanneer veel uitgebuit, helpt arbitrage prijzen naar eerlijke waarde te convergeren.',
    ],
  ],
};
