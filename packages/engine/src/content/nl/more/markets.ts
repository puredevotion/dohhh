import type { CategoryContent } from '../../row.js';

/** Financiën & gestructureerde producten, tweede reeks. Juiste antwoord staat eerst; wordt bij het bouwen gerandomiseerd. */

export const MORE_FINANCE: CategoryContent = {
  msc: [
    [
      'Wat meet de convexiteit van een obligatie?',
      [
        'De kromming van de relatie tussen prijs en rendement',
        'De gevoeligheid van de prijs voor een verandering van één basispunt in het rendement',
        'De spreiding van kasstromen rond het durationpunt',
        'De verandering in rendement bij een gegeven verandering in de creditspread',
      ],
      0,
      'Positieve convexiteit betekent dat duration verliezen overschat bij stijgende rentes en winsten onderschat bij dalende rentes - daarom is het de moeite waard om ervoor te betalen.',
    ],
    [
      'Wat specificeert een "waterfall" bij securitisatie?',
      [
        'De volgorde waarin kasstromen uit onderpand worden toegepast op kosten, rente en hoofdsom, naar rangorde',
        'Het schema waarop de onderpandpool afbouwt, geplande en ongeplande aflossing samen genomen',
        'De volgorde waarin achterstallige leningen worden geëxecuteerd',
        'De volgorde waarin ratingbureaus over verliezen moeten worden geïnformeerd',
      ],
      0,
      'Alles aan een gestructureerde obligatie zit in de waterfall: twee deals met identiek onderpand kunnen zich totaal anders gedragen.',
    ],
    [
      'Wat is een repo, economisch gezien?',
      [
        'Een gedekte lening gestructureerd als een verkoop met afgesproken terugkoop',
        'Een onvoorwaardelijke verkoop van een effect met een optie tot terugkoop',
        'Een swap van het ene effect tegen een ander van gelijkwaardige kredietkwaliteit',
        'Een kortlopende ongedekte interbancaire deposito',
      ],
      0,
      'De juridische vorm als verkoop geeft de uitlener zijn bescherming bij faillissement, en de haircut is de kredietbescherming.',
    ],
    [
      'Wat relateert put-callpariteit aan elkaar?',
      [
        'Europese call- en putprijzen bij dezelfde uitoefenprijs en looptijd',
        'Amerikaanse call- en putprijzen aan hun premie voor vroege uitoefening',
        'Impliciete volatiliteiten van calls en puts bij dezelfde delta',
        'Termijn- en futuresprijzen onder deterministische rentes',
      ],
      0,
      'Het is modelvrij, en daarom is een schending een arbitrage in plaats van een discussie over het model.',
    ],
    [
      'Wat is het verschil tussen een termijncontract en een futurescontract?',
      [
        'Futures worden op de beurs verhandeld, met margin en dagelijks tegen de marktwaarde gewaardeerd; termijncontracten zijn bilateraal en worden bij afloop afgewikkeld',
        'Termijncontracten worden in contanten afgewikkeld en futures worden fysiek geleverd',
        'Futures hebben geen tegenpartijrisico en termijncontracten geen marktrisico',
        'Termijncontracten mogen worden genetteerd en futures niet, waardoor blootstelling op een beurs bruto opbouwt maar bilateraal netteert',
      ],
      0,
      'Dagelijkse margin is wat hun prijzen doet afwijken van termijncontracten bij stochastische rentes - de convexiteitscorrectie.',
    ],
    [
      'Wat koopt de koper van een credit default swap?',
      [
        'Bescherming tegen een gedefinieerde kredietgebeurtenis bij een referentie-entiteit, in ruil voor een periodieke premie',
        'Een optie om de obligaties van de referentie-entiteit tegen pari te kopen',
        'Een garantie op de marktwaarde van de referentieobligatie, op elk moment opeisbaar bij de verkoper van bescherming',
        'Een totaalrendementblootstelling aan de schuld van de referentie-entiteit',
      ],
      0,
      'Totaalrendementblootstelling aan de schuld is juist een totalreturnswap. Of een gegeven herstructurering een kredietgebeurtenis is, wordt beslist door een determinations committee, niet vanuit eerste principes.',
    ],
    [
      'Wat is de centrale voorspelling van het CAPM?',
      [
        'Het verwachte extra rendement is proportioneel aan beta met de markt',
        'Het verwachte rendement stijgt met de totale rendementsvolatiliteit',
        'Alle beleggers houden dezelfde portefeuille van risicovolle activa in dezelfde verhoudingen aan',
        'De marktportefeuille is per constructie mean-variance-efficiënt',
      ],
      0,
      'Dat elke belegger de marktportefeuille aanhoudt is een implicatie van het model, niet de toetsbare voorspelling - Rolls kritiek in miniatuur.',
    ],
    [
      'Wat bereikt "durationmatching" voor een pensioenverplichting?',
      [
        'Eersteorde-immunisatie tegen een parallelle verschuiving van de rentecurve',
        'Volledige eliminatie van renterisico',
        'Bescherming tegen inflatie naast nominale rentes',
        'Bescherming tegen niet-parallelle verschuivingen van de curve',
      ],
      0,
      'Alleen parallelle verschuivingen, en slechts eersteorde. Key-rate durations bestaan omdat de curve niet zo netjes is om parallel te bewegen.',
    ],
    [
      'Wat is een "haircut" bij gedekte financiering?',
      [
        'Het overschot van de onderpandwaarde boven het leningbedrag, ter bescherming van de uitlener tegen prijsbewegingen',
        'De vergoeding die de uitlener rekent voor het regelen van de faciliteit',
        'De korting waartegen noodlijdend onderpand wordt geliquideerd',
        'De afboeking op de boekwaarde van een achterstallige lening, na herziening van de verwachte terugvordering',
      ],
      0,
      'Procyclische haircuts zijn een van de standaardmechanismen waarmee een financieringsmarkt een prijsdaling versterkt.',
    ],
    [
      'Wat betaalt een interest rate cap uit?',
      [
        'Het overschot van een referentierente boven een strike, bij elke reset',
        'Een vast bedrag als de referentierente bij afloop boven de strike ligt',
        'Het verschil tussen het vaste en variabele deel van een swap',
        'Een teruggave van rente boven de strike over de looptijd van een lening',
      ],
      0,
      'Het is een reeks caplets, en daarom wordt het geprijsd als een portefeuille van opties in plaats van als één optie.',
    ],
  ],
  phd: [
    [
      'Wat modelleert het Heath-Jarrow-Morton-raamwerk direct?',
      [
        'De ontwikkeling van de gehele forwardrentecurve',
        'De korte rente als een terugkerende diffusie',
        'Obligatieprijzen als functies van een klein aantal latente factoren',
        'De gezamenlijke verdeling van swaprentes over looptijden',
      ],
      0,
      'De driftvoorwaarde is de essentie: zodra de volatiliteitsstructuur is gekozen, legt no-arbitrage de rest vast.',
    ],
    [
      'Waaraan wordt de "volatility smile" bij aandelenindexopties meestal toegeschreven?',
      [
        'Vette staarten en een negatieve correlatie tussen rendement en volatiliteit, geprijsd als vraag naar neerwaartse bescherming',
        'Transactiekosten die stijgen met moneyness, omdat diep uit-de-geld contracten veel minder vaak worden verhandeld',
        'Modelrisicopremies die uniform over alle strikes worden gerekend',
        'Onzekerheid over dividenden bij langlopende contracten',
      ],
      0,
      'De skew werd na 1987 permanent steiler, een treffend geval van een markt die een staartrisico herprijst dat ze voorheen negeerde.',
    ],
    [
      'Wat stelt de fundamentele stelling van prijsvorming van activa?',
      [
        'Afwezigheid van arbitrage is equivalent aan het bestaan van een equivalente martingaalmaat',
        'Elk derivaat kan worden gerepliceerd met een zelffinancierende strategie',
        'Marktvolledigheid impliceert een unieke evenwichtsprijs voor elke claim',
        'Alle beleggers zijn het eens over prijzen als de preferenties homothetisch zijn',
      ],
      0,
      'Uniciteit van de maat is de tweede stelling en correspondeert met volledigheid - de twee verwarren is de standaardfout.',
    ],
    [
      'Wat is het praktische probleem met deltahedging in aanwezigheid van gamma?',
      [
        'Discrete herhedging laat een restpost achter waarvan de verwachte kosten schalen met gamma en gerealiseerde variantie',
        'Delta kan niet worden berekend als de volatiliteit stochastisch is',
        'Gamma verandert van teken op-de-geld, waardoor de hedge instabiel wordt',
        'Transactiekosten hangen niet af van hedgefrequentie, dus herhedging kan gratis willekeurig fijn worden gemaakt',
      ],
      0,
      'Het is waarom de winst van een optieboek in essentie een weddenschap is op gerealiseerde versus impliciete variantie, wat de trader er ook van denkt.',
    ],
    [
      'Waarvoor behandelt het structurele Merton-model eigen vermogen?',
      [
        'Een calloptie op de activa van het bedrijf, uitgeoefend op de nominale waarde van de schuld',
        'Een perpetuele claim op resterende kasstromen na aflossing van schuld',
        'Een putoptie geschreven aan de schuldeisers van het bedrijf',
        'Een converteerbare claim waarvan de waarde alleen afhangt van de activavolatiliteit',
      ],
      0,
      'Het levert een economisch interpreteerbare kans op wanbetaling, en het onderschat structureel de spreads op korte termijn - de creditspreadpuzzel.',
    ],
    [
      'Wat is "basisrisico" in een hedgeprogramma?',
      [
        'Restblootstelling omdat het hedge-instrument en de blootstelling imperfect gecorreleerd zijn',
        'Het risico dat de hedge-tegenpartij in default gaat',
        'Het risico dat margin calls de beschikbare liquiditeit overschrijden',
        'Het risico van een verandering in de relatie tussen spot en futures, alleen bij afloop',
      ],
      0,
      'De literatuur over hedging van metalen en energie staat er vol van: jetbrandstof hedgen met ruwe olie werkt prima, totdat de crackspread beweegt.',
    ],
    [
      'Wat onthulde de ervaring van 2008 over het "originate to distribute"-model?',
      [
        'Verzwakte prikkels om te screenen wanneer de initiator geen blootstelling aan leningprestaties overhoudt',
        'Dat securitisatie idiosyncratisch kredietrisico niet kan diversifiëren',
        'Dat ratingbureaus geen toegang hadden tot leningsniveaudata, waardoor hun modellen op poolgemiddelden waren gefit',
        'Dat wanbetaling op hypotheken niet gecorreleerd is met huizenprijzen',
      ],
      0,
      'Keys et al. vonden de discontinuïteit bij de drempels voor securitisatie. Skin-in-the-game-retentieregels zijn het directe regelgevende antwoord.',
    ],
    [
      'Wat doet een "collateral transformation"-transactie?',
      [
        'Wisselt activa van lagere kwaliteit om voor geschikt onderpand, en verplaatst zo liquiditeitsrisico in plaats van het te verwijderen',
        'Zet onderpand om in contanten zonder terugkoopverplichting, zodat de blootstelling volledig van de balans verdwijnt',
        'Vervangt margin in contanten door margin in effecten bij een clearinginstelling',
        'Vermindert het totale vereiste onderpand door netting tussen tegenpartijen',
      ],
      0,
      'Verplichte centrale clearing verhoogde de vraag naar geschikt onderpand, en dit is een van de manieren waarop aan die vraag werd voldaan zonder iets te creëren.',
    ],
    [
      'Wat is het "limits to arbitrage"-argument?',
      [
        'Arbitrageurs hebben te maken met kapitaalbeperkingen en horizonrisico',
        'Arbitrage is onmogelijk in aanwezigheid van transactiekosten',
        'Verkeerde prijzen blijven bestaan omdat beleggers uniform irrationeel zijn',
        'Arbitrage vereist perfecte informatie over de fundamentele waarde',
      ],
      0,
      'Shleifer en Vishny. Noise trader risk betekent dat uiteindelijk gelijk hebben niet genoeg is als het fonds eerder wordt uitgekocht.',
    ],
    [
      'Wat beschrijft de term "wrong-way risk" bij tegenpartijblootstelling?',
      [
        'Blootstelling die precies toeneemt naarmate de kredietkwaliteit van de tegenpartij verslechtert',
        'Blootstelling aan een tegenpartij in een andere valuta dan de handelsvaluta',
        'Nettingovereenkomsten die niet standhouden in het rechtsgebied van de tegenpartij',
        'Onderpand waarvan de waarde daalt wanneer markten onder stress staan',
      ],
      0,
      'Een soevereine CDS gekocht van een bank in hetzelfde land is het schoolboekvoorbeeld, en daarom hebben CVA-modellen gecorreleerde simulatie nodig.',
    ],
  ],
  professor: [
    [
      'Wat voegt het Hestonmodel toe aan Black-Scholes, en wat kost dat?',
      [
        'Stochastische variantie met een semi-analytische prijs',
        'Sprongen in de onderliggende waarde, ten koste van het verliezen van gesloten-vormoplossingen',
        'Een lokale volatiliteitscurve die exact wordt gefit, ten koste van instabiele forward smiles',
        'Stochastische rentes, ten koste van de noodzaak van numerieke integratie',
      ],
      0,
      'Onvolledigheid is de conceptuele kostenpost: volatiliteitsrisico is niet af te dekken met alleen de onderliggende waarde, dus komt er een marktprijs voor volatiliteitsrisico bij.',
    ],
    [
      'Wat is de betekenis van de Dupire-formule voor lokale volatiliteit?',
      [
        'Ze herleidt een unieke lokale-volatiliteitscurve uit een continuüm van optieprijzen, en fit de smile exact',
        'Ze bewijst dat stochastische-volatiliteitsmodellen bij geen enkele looptijd of strike waargenomen prijzen kunnen fitten',
        'Ze geeft de impliciete volatiliteit als functie van moneyness in gesloten vorm',
        'Ze stelt vast dat lokale en stochastische volatiliteit identieke forward smiles geven',
      ],
      0,
      'De forward-smiledynamiek die ze impliceert is bekend als onjuist, en daarom draaien praktijkmensen lokaal-stochastische hybriden in plaats van één van de twee alleen.',
    ],
    [
      'Wat lost de SVI-parametrisatie van Gatheral in de praktijk op?',
      [
        'Een parsimonieuze, op arbitrage controleerbare fit van de impliciete-variantiesmile over alle strikes',
        'De gezamenlijke calibratie van volatiliteits- en rentemodellen',
        'De prijsvorming van Amerikaanse opties onder stochastische volatiliteit, in gesloten vorm en zonder simulatie',
        'De interpolatie van de discontocurve tussen liquide looptijden',
      ],
      0,
      'De statische arbitragevoorwaarden op de parameters zijn de reden dat ze ad-hoc splinefits op de handelsvloer heeft verdrongen.',
    ],
    [
      'Wat beweert de "roughness"-literatuur over volatiliteit?',
      [
        'Gerealiseerde volatiliteit heeft een Hurst-exponent ruim onder een half',
        'Volatiliteit is een puur sprongproces zonder diffusiecomponent',
        'Volatiliteit heeft lang geheugen met een Hurst-exponent boven een half',
        'Volatiliteit is deterministisch, gegeven de optiecurve',
      ],
      0,
      'Gatheral, Jaisson en Rosenbaum. Of de schatting vervuild is door microstructuurruis is precies het levende bezwaar.',
    ],
    [
      'Wat is de praktische betekenis van "multi-curve"-discontering na 2008?',
      [
        'Discontering verhuisde naar onderpandrentecurves terwijl prognoses op tenor-specifieke curves blijven, waardoor de eencurve-identiteit breekt',
        'Discontocurves worden nu opgebouwd uit staatsobligaties in plaats van swaps',
        'Forwardrentes worden niet langer afgeleid uit spotrentes, maar moeten voor elke looptijd rechtstreeks door de interdealermarkt worden genoteerd',
        'Eén OIS-curve wordt gebruikt voor zowel discontering als prognoses',
      ],
      0,
      'Basisspreads tussen tenors werden te groot om te negeren, waardoor een schoolboekidentiteit een inconsistentie werd die afzonderlijke curves vereist.',
    ],
    [
      'Wat stelt de Amihud-Mendelson- en latere liquiditeitsliteratuur vast over verwachte rendementen?',
      [
        'Illiquiditeit wordt geprijsd, zowel als niveaukenmerk als als blootstelling aan systematisch liquiditeitsrisico',
        'Liquiditeit beïnvloedt handelskosten maar niet het verwachte evenwichtsrendement',
        'Alleen idiosyncratische liquiditeit doet ertoe, en die is diversifieerbaar, dus overleeft geen premie in een grote portefeuille',
        'Liquiditeitspremies verdwijnen zodra voor omvang en waarde wordt gecontroleerd',
      ],
      0,
      'Pastor-Stambaugh en Acharya-Pedersen scheidden het kenmerk van de risicoblootstelling, en beide blijken geprijsd.',
    ],
    [
      'Wat is het centrale identificatieprobleem bij het schatten van het effect van kwantitatieve verruiming op rentes?',
      [
        'Aankondigingen worden geanticipeerd en zijn gecorreleerd met de omstandigheden die ze uitlokken, waardoor eventvensters en contrafeitelijke scenario\'s omstreden zijn',
        'Rentes zijn onwaarneembaar bij de relevante looptijden',
        'Centralebankaankopen worden niet op effectniveau openbaar gemaakt, waardoor omvang en timing van de interventie niet te reconstrueren zijn',
        'Het effect is theoretisch nul onder volledige markten',
      ],
      0,
      'Het portefeuillebalans- en het signaleringskanaal zijn moeilijk te scheiden, en daarom verschillen schattingen van hetzelfde programma met een factor tien.',
    ],
    [
      'Wat identificeert de literatuur over "flash crashes" en marktmicrostructuur als de kernfragiliteit?',
      [
        'Liquiditeitsverschaffing is vrijwillig en trekt zich terug onder stress',
        'High-frequency traders lopen systematisch vooruit op institutionele orderstromen',
        'Matchingsystemen van beurzen kunnen piekberichtsnelheden niet verwerken',
        'Circuit breakers zijn de directe oorzaak van de prijsgaten die erop volgen',
      ],
      0,
      'Geen verplichting om te quoteren is het structurele punt. De episodes van 2010 en 2015 verschillen in mechanisme en delen dat kenmerk.',
    ],
    [
      'Wat wordt beweerd dat het "convenience yield" van Amerikaanse staatsobligaties impliceert?',
      [
        'Een prijspremie voor veiligheid en liquiditeit die zich uit als een schending van covered interest parity en als negatieve swapspreads',
        'Dat staatsobligaties verkeerd geprijsd zijn ten opzichte van bedrijfsobligaties van gelijke looptijd',
        'Dat de termijnpremie op alle looptijden negatief is, zodat langlopende obligaties structureel duur zijn ten opzichte van doorrollende korte posities',
        'Dat de risicovrije rente in principe onwaarneembaar is',
      ],
      0,
      'Krishnamurthy en Vissing-Jorgensen. Zodra veilige activa een niet-monetair rendement opleveren, houden verscheidene schijnbare arbitrages op arbitrage te zijn.',
    ],
    [
      'Wat zegt het bewijs van na 2008 over de waarde van ratings in gestructureerde financiering?',
      [
        'Ratings waren structureel te optimistisch voor gestructureerde producten',
        'Ratings voor gestructureerde producten presteerden vergelijkbaar met bedrijfsratings',
        'Het falen bleef beperkt tot een klein aantal gemanipuleerde deals',
        'De ratings waren correct, maar gebruikers interpreteerden de schaal verkeerd',
      ],
      0,
      'Correlatieveronderstellingen in de copulamodellen zijn het technische falen; de prikkelstructuur is waarom niemand binnen het proces ze repareerde.',
    ],
  ],
};
