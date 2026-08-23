import type { CategoryContent } from '../row.js';

/** Wiskunde & Logica, Technologie & Computing, Sport & Spelen. */

export const MATHS: CategoryContent = {
  graduate: [

    [
      'Wat garandeert de spectraalstelling voor een reële symmetrische matrix?',
      [
        'Een orthonormale basis van eigenvectoren, met uitsluitend reële eigenwaarden',
        'Dat de matrix inverteerbaar is, met een positieve determinant',
        'Dat alle eigenwaarden verschillend en strikt positief zijn',
        'Dat de matrix uitsluitend over de complexe getallen similar is met een diagonaalmatrix',
      ],
      0,
      'Reële symmetrische matrices zijn orthogonaal diagonaliseerbaar. Diagonaliseerbaarheid over de complexe getallen alleen is veel zwakker en geldt voor elke matrix met verschillende eigenwaarden.',
    ],
    [
      'Wat betekent sequentiële compactheid in een metrische ruimte?',
      [
        'Elke rij heeft een deelrij die naar een punt van de verzameling convergeert',
        'Elke open overdekking heeft een aftelbare deeloverdekking',
        'De verzameling is gesloten en heeft een eindige diameter',
        'Elke Cauchyrij in de verzameling convergeert naar een limiet binnen de verzameling',
      ],
      0,
      'In metrische ruimten valt dit samen met compactheid. Gesloten en begrensd is alleen equivalent in eindig-dimensionale genormeerde ruimten, en convergentie van Cauchyrijen is volledigheid.',
    ],
    [
      'Wat is de orde van de symmetrische groep S4?',
      ['24', '12', '16', '64'],
      0,
      '4! = 24. De ondergroepstructuur - A4, de Klein-vier-groep als normaaldeler - is wat de vierdegraadsvergelijking oplosbaar maakt en de vijfdegraadsvergelijking niet.',
    ],
    [
      'Wat concludeert het eerste lemma van Borel-Cantelli?',
      [
        'Als de kansen sommeren tot een eindige waarde, dan treden bijna zeker maar eindig veel van de gebeurtenissen op',
        'Als de kansen sommeren tot oneindig, dan treden bijna zeker oneindig veel van de gebeurtenissen op',
        'Dat de gebeurtenissen onafhankelijk moeten zijn om een doorsnede met positieve maat te hebben',
        'Dat de limsup van de gebeurtenissen een kans heeft gelijk aan de som van hun kansen',
      ],
      0,
      'De divergente-som-uitspraak is het omgekeerde lemma, en dat vereist bovendien onafhankelijkheid - de asymmetrie tussen de twee is precies het punt van het paar.',
    ],
    [
      'Wat stelt de rang-nulliteitsstelling?',
      [
        'De dimensie van het domein is gelijk aan de rang plus de dimensie van de kern',
        'De rang van een matrix is gelijk aan de rang van haar getransponeerde',
        'De dimensie van het beeld is gelijk aan het aantal niet-nul eigenwaarden',
        'Een vierkante matrix is inverteerbaar dan en slechts dan als haar determinant niet nul is',
      ],
      0,
      'Gelijkheid van rij- en kolomrang is waar maar een andere stelling; het tellen van niet-nul eigenwaarden klopt in het algemeen niet, zoals elke nilpotente matrix laat zien.',
    ],
  ],
  phd: [
    [
      'Wat stelt Gödels eerste onvolledigheidsstelling vast?',
      [
        'Elke consistente, effectief axiomatiseerbare theorie die sterk genoeg is voor de rekenkunde heeft waar uitspraken die zij niet kan bewijzen',
        'Geen consistente theorie die sterk genoeg is voor de rekenkunde kan haar eigen consistentie vanuit zichzelf bewijzen, tenzij de theorie inconsistent is',
        'De rekenkunde is onbeslisbaar in de zin van het halting problem, omdat de verzameling ware uitspraken niet algoritmisch te herkennen is',
        'Elk voldoende expressief formeel systeem leidt, als men het ver genoeg doorvoert, uiteindelijk een tegenspraak af uit zijn eigen axioma\'s',
      ],
      0,
      'Onbewijsbaarheid van de eigen consistentie van een theorie is de tweede onvolledigheidsstelling - een gevolg, geen herformulering van de eerste.',
    ],
    [
      'Wat is de fundamentaalgroep van de cirkel?',
      [
        'Triviaal, zoals bij elke enkelvoudig samenhangende ruimte',
        'De gehele getallen onder optelling',
        'De gehele getallen modulo 2, passend bij de dubbele overdekking door de cirkel zelf',
        'De rationale getallen, dicht in de reële rechte waarop de exponentiële afbeelding werkt',
      ],
      1,
      'Pi_1(S^1) is isomorf met Z, geïndexeerd door het omwentelingsgetal.',
    ],
    [
      'Waarop betreft de centrale limietstelling de limietverdeling?',
      [
        'Genormaliseerde sommen van onafhankelijke, identiek verdeelde stochastische variabelen met eindige variantie',
        'Maxima van onafhankelijke steekproeven uit een vaste continue verdeling, passend genormaliseerd naar een van de drie extreme-waardefamilies',
        'De empirische verdelingsfunctie, uniform benaderd door haar theoretische tegenhanger naarmate de steekproefomvang toeneemt',
        'Verhoudingen van onafhankelijke normale variabelen, die zelf een Cauchy-verdeling met zware staarten volgen',
      ],
      0,
      'Maxima leveren extreme-waardeverdelingen op; de empirische verdelingsfunctie is Glivenko-Cantelli; de verhouding van normale variabelen is Cauchy-verdeeld.',
    ],
    [
      'Wat betekent het dat een matrix positief definiet is?',
      [
        'x transpose A x > 0 voor elke niet-nul reële vector x',
        'Alle elementen van A zijn positief',
        'A heeft een positieve determinant',
        'A is inverteerbaar en heeft zowel een strikt positieve spoor als een positieve determinant',
      ],
      0,
      'Equivalent: alle eigenwaarden van een symmetrische A zijn strikt positief. Een positieve determinant alleen is niet voldoende.',
    ],
    [
      'Waarop is Eulers formule V - E + F = 2 in de grafentheorie van toepassing?',
      ['Samenhangende planaire grafen', 'Alle enkelvoudige grafen', 'Alleen bipartiete grafen', 'Reguliere grafen van even graad'],
      0,
      'Samenhangende planaire grafen getekend zonder kruisingen. Op een oppervlak van geslacht g wordt de rechterkant 2 - 2g.',
    ],
  ],
  professor: [
    [
      'Wat stelt de Banach-Tarski-paradox?',
      [
        'Een massieve bol kan in eindig veel stukken worden verdeeld en opnieuw worden samengesteld tot twee bollen van dezelfde grootte',
        'Een begrensde verzameling kan een oneindige omtrek en een eindige oppervlakte hebben',
        'Er bestaan begrensde deelverzamelingen van het vlak waarvan de Lebesgue-maat afhangt van welke axiomatisering van de reële getallen wordt gehanteerd',
        'Elke continue functie op een compacte verzameling bereikt haar grenzen niet-uniek',
      ],
      0,
      'Het hangt essentieel af van het keuzeaxioma, en de stukken zijn noodzakelijkerwijs niet-meetbaar.',
    ],
    [
      'Waar gaat de Riemann-hypothese over de ligging van welke objecten?',
      [
        'De niet-triviale nulpunten van de zetafunctie, waarvan wordt vermoed dat ze op de lijn Re(s) = 1/2 liggen',
        'De polen van de analytisch voortgezette zetafunctie binnen de kritieke strook 0 < Re(s) < 1, waar de functievergelijking symmetrie oplegt',
        'De priemgaten in het interval [x, 2x], waarvan de dichtheid samenhangt met de verdeling van de nulpunten',
        'De singulariteiten van de Dirichlet-etafunctie, die via de functionele vergelijking aan de zetafunctie is gekoppeld',
      ],
      0,
      'De triviale nulpunten liggen op de negatieve even gehele getallen; zeta heeft één pool, bij s = 1.',
    ],
    [
      'Wat is een natuurlijke transformatie in de categorietheorie?',
      [
        'Een familie van morfismen tussen de beelden van twee functoren, die commuteert met de werking van de functoren op morfismen',
        'Een isomorfisme tussen twee categorieën',
        'Een functor die limieten behoudt',
        'Een afbeelding die aan elk object van een categorie een morfisme in een andere categorie toekent, met behoud van compositie en identiteiten',
      ],
      0,
      'De commuterende-vierkant-voorwaarde is de hele inhoud; Eilenberg en Mac Lane bedachten categorieën grotendeels om dit te kunnen zeggen.',
    ],
    [
      'Wat impliceert de stelling van Löwenheim-Skolem over eerste-orde theorieën?',
      [
        'Een eerste-orde theorie met een oneindig model heeft modellen van elke grotere kardinaliteit',
        'Elke consistente theorie heeft een eindig model',
        'Eerste-orde logica kan transitiviteit niet uitdrukken',
        'Twee modellen van een complete eerste-orde theorie zijn tot elementaire equivalentie isomorf',
      ],
      0,
      'Vandaar de Skolem-paradox: er bestaan aftelbare modellen van de verzamelingenleer, en dat is waarom eerste-orde logica de kardinaliteit niet kan vastpinnen.',
    ],
    [
      'Wat is de betekenis van het Poincaré-vermoeden, bewezen door Grigori Perelman?',
      [
        'Elke enkelvoudig samenhangende, gesloten 3-variëteit is homeomorf met de 3-sfeer',
        'Elk gesloten oppervlak wordt geklasseerd door zijn geslacht',
        'Elke 4-variëteit heeft een gladde structuur',
        'Elke compacte variëteit heeft een Riemannse metriek van constante sectionele kromming',
      ],
      0,
      'Bewezen via Hamiltons Ricci-flow met chirurgie, in drie preprints gepubliceerd in 2002-03.',
    ],
  ],
};

export const TECHNOLOGY: CategoryContent = {
  graduate: [

    [
      'Wat voorkomt TLS-sessieherstel?',
      [
        'Een volledige handshake, en daarmee de asymmetrische cryptografie en extra round trips bij herverbinding',
        'Certificaatvalidatie tegen de trust store',
        'Heronderhandeling van de cipher suite en de compressiemethode tussen client en server bij elke verbinding',
        'De noodzaak voor de server om per-verbinding status bij te houden',
      ],
      0,
      'Session ID\'s houden serverstatus bij; session tickets verplaatsen die naar de client. TLS 1.3 integreert herstel in een pre-shared-key-modus met 0-RTT-data, wat replay-weerstand inruilt voor latentie.',
    ],
    [
      'Waarvoor is een B-boom geoptimaliseerd?',
      [
        'Blokgeoriënteerde opslag, door de boom ondiep te houden met een hoge fan-out per knoop',
        'Cachelocaliteit binnen één CPU-cacheregel',
        'Worst-case invoegtijd in een puur in-memory workload',
        'Lock-vrije gelijktijdige toegang zonder coördinatie tussen lezers en schrijvers',
      ],
      0,
      'De knoopgrootte volgt de paginagrootte, zodat een lookup een handvol paginalezingen kost. Daarom is bijna elke relationele index er een.',
    ],
    [
      'Wat biedt DNSSEC, en wat niet?',
      [
        'Oorsprongsauthenticatie en integriteit voor DNS-records, maar geen vertrouwelijkheid',
        'Vertrouwelijkheid voor queries, maar geen garantie over de authenticiteit van records',
        'Zowel authenticatie als vertrouwelijkheid, via gesigneerde en versleutelde zones',
        'Bescherming tegen cache-poisoning alleen voor recursieve resolvers, niet voor authoritative servers',
      ],
      0,
      'De queries en antwoorden blijven in plaintext, wat precies is waarvoor DNS-over-TLS en DNS-over-HTTPS zijn bedacht - orthogonale problemen die vaak worden verward.',
    ],
    [
      'Wat ruilt een Bloomfilter in voor ruimte?',
      [
        'Fout-positieven, zonder ooit een fout-negatief te produceren',
        'Fout-negatieven, zonder ooit een fout-positief te produceren',
        'Invoegkosten, die toenemen met het aantal opgeslagen elementen',
        'Het vermogen om de elementen die het bevat op te sommen',
      ],
      0,
      'Het kan zijn inhoud ook niet opsommen, maar dat is een eigenschap eerder dan de ruil: de instelbare parameter is de fout-positiefratio tegenover bits per element.',
    ],
    [
      'Wat verbiedt serialiseerbare isolatie dat repeatable read toestaat?',
      [
        'Fantoomlezingen - rijen die verschijnen in een herhaalde bereikquery',
        'Vuile lezingen van niet-gecommitteerde data van een andere transactie',
        'Niet-herhaalbare lezingen van een enkele rij binnen één transactie',
        'Verloren updates wanneer twee transacties dezelfde rij schrijven',
      ],
      0,
      'Vuile lezingen zijn uitgesloten vanaf read-committed en niet-herhaalbare lezingen vanaf repeatable read. Het onderscheid tussen snapshot-isolatie en echte serialiseerbaarheid is waar write skew zich verschuilt.',
    ],
  ],
  phd: [
    [
      'Wat is de gemiddelde tijdscomplexiteit van een goed geïmplementeerde quicksort?',
      ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
      1,
      'O(n log n) gemiddeld, O(n^2) in het worstcasescenario, en daarom randomiseren implementaties of gebruiken ze median-of-three-pivots.',
    ],
    [
      'Welk probleem beschrijft de CAP-stelling?',
      [
        'Een gedistribueerde opslag kan niet gelijktijdig consistentie, beschikbaarheid en partitietolerantie garanderen',
        'Consensus is onmogelijk met meer dan één falende node',
        'Caches kunnen niet zowel coherent als lock-vrij zijn',
        'Concurrency, atomiciteit en persistentie kunnen niet allemaal worden afgedwongen binnen één gedistribueerde transactiegrens',
      ],
      0,
      'Omdat partities gebeuren of je ze kiest of niet, is de keuze in de praktijk tijdens een partitie tussen consistentie en beschikbaarheid.',
    ],
    [
      'Wat is het doel van het slow-start-algoritme in TCP?',
      [
        'De beschikbare bandbreedte peilen door het congestievenster exponentieel te vergroten',
        'Bevestigingen vertragen om header-overhead te verminderen',
        'Segmenten die buiten volgorde binnenkomen herordenen voordat ze worden afgeleverd',
        'De maximale segmentgrootte en de windowscalefactor onderhandelen tijdens het opzetten van de verbinding',
      ],
      0,
      'Het venster verdubbelt elke round trip totdat er verlies optreedt of de slow-start-drempel wordt bereikt, waarna congestievermijding lineair overneemt.',
    ],
    [
      'Wat kun je efficiënt doen met een Merkle-boom?',
      [
        'Bewijzen dat een enkel item tot een grote verzameling behoort, met een logaritmisch groot bewijs',
        'Een dataset sorteren die veel groter is dan het beschikbare geheugen, met slechts begrensde extra ruimte',
        'Een stream versleutelen zonder gedeelde sleutel',
        'Cycli in een gerichte graaf detecteren',
      ],
      0,
      'De basis van Git-objectintegriteit, certificate-transparency-logs en de meeste blockchainontwerpen.',
    ],
    [
      'Wat onderscheidt symmetrische van asymmetrische cryptografie?',
      [
        'Symmetrisch gebruikt één gedeelde sleutel; asymmetrisch gebruikt een wiskundig gekoppeld sleutelpaar',
        'Symmetrisch is altijd stroomgebaseerd; asymmetrisch is altijd blokgebaseerd',
        'Symmetrisch biedt authenticatie; asymmetrisch biedt alleen vertrouwelijkheid',
        'Symmetrisch is quantumbestendig; asymmetrisch is dat per definitie niet',
      ],
      0,
      'In de praktijk worden ze gecombineerd: asymmetrische cryptografie brengt een symmetrische sessiesleutel tot stand, omdat symmetrische ciphers veel sneller zijn.',
    ],
  ],
  professor: [
    [
      'Wat stelt het FLP-onmogelijkheidsresultaat?',
      [
        'Geen deterministisch consensusprotocol kan terminatie garanderen in een asynchroon systeem met zelfs maar één crashfout',
        'Geen protocol kan meer dan een derde van zijn deelnemende nodes tolereren die zich willekeurig Byzantijns gedragen, zelfs niet onder synchronie',
        'Total order broadcast is onmogelijk zonder gesynchroniseerde klokken',
        'Linearizeerbaarheid kan niet worden bereikt zonder één enkele leider',
      ],
      0,
      'Fischer, Lynch en Paterson, 1985. De een-derde-grens is een apart Byzantijns resultaat; beide zijn de reden dat echte systemen randomisatie of partiële synchronie gebruiken.',
    ],
    [
      'Wat betekent het dat een probleem NP-compleet is?',
      [
        'Het zit in NP en elk probleem in NP is er in polynomiale tijd tot te herleiden',
        'Het kan door geen enkel algoritme in polynomiale tijd worden opgelost',
        'Het is alleen door een niet-deterministische machine in polynomiale tijd oplosbaar, en niet verifieerbaar',
        'Het vereist exponentiële ruimte',
      ],
      0,
      'Hardheid gaat over reductie, niet over bewezen ontrekbaarheid - en dat is precies wat P versus NP open laat.',
    ],
    [
      'Wat garandeert in het Raft-consensusalgoritme dat het logboek van een nieuw gekozen leider geen gecommitteerde items mist?',
      [
        'Een kandidaat kan een stem alleen winnen van servers wier logboek niet actueler is dan het eigen logboek',
        'De leider speelt bij verkiezing het volledige logboek van de vorige termijn opnieuw af',
        'Items worden alleen gecommitteerd nadat ze op een meerderheid van schijven zijn geschreven',
        'Een leider moet de node met het laagste identificatienummer binnen de meerderheidspartitie zijn op het moment van verkiezing',
      ],
      0,
      'De verkiezingsbeperking laat de leider-volledigheidseigenschap gelden, en dat is wat Raft in staat stelt een apart logboek-hersteltraject te vermijden.',
    ],
    [
      'Wat is de essentiële eigenschap van een CRDT?',
      [
        'Gelijktijdige updates convergeren naar dezelfde staat, ongeacht de volgorde, zonder coördinatie',
        'Elke update krijgt een wereldwijd unieke timestamp toegekend door een aangewezen coördinerende replica',
        'Conflicterende schrijfacties worden opgelost door de oudere waarde te verwerpen',
        'Replica\'s wisselen bij elke schrijfactie hun volledige staat uit met elke andere peer',
      ],
      0,
      'Convergentie komt van operaties die commutatief, associatief en idempotent zijn - een join over een lattice.',
    ],
    [
      'Wat zegt de stelling van Rice over programma-eigenschappen?',
      [
        'Elke niet-triviale semantische eigenschap van programma\'s is onbeslisbaar',
        'Geen programma kan bepalen of een ander programma op alle invoer stopt',
        'Typeafleiding is onbeslisbaar voor afhankelijk getypeerde talen',
        'Elke totale functie is berekenbaar door een Turingmachine',
      ],
      0,
      'Ze generaliseert het halting problem: niet alleen stoppen, maar in feite elke interessante vraag over gedrag.',
    ],
  ],
};

export const SPORT: CategoryContent = {
  graduate: [

    [
      'Wat schat een expected-goals-model (xG) in?',
      [
        'De kans dat een bepaald schot een doelpunt wordt, op basis van historische schoten met vergelijkbare kenmerken',
        'Het aantal doelpunten dat een team over een seizoen zou moeten scoren, gegeven de totale spelerswaarde',
        'Het aandeel balbezit dat wordt omgezet in schoten op doel',
        'Het verschil tussen de doelpunten van een spits en het competitiegemiddelde',
      ],
      0,
      'Locatie, lichaamsdeel en type assist doen het meeste werk. De gangbare waarschuwing is dat xG een verdeling is, dus het cijfer van één wedstrijd draagt bijna geen signaal.',
    ],
    [
      'Wat meet het economyrate van een bowler in cricket?',
      [
        'Toegestane runs per gebowlde over',
        'Toegestane runs per genomen wicket',
        'Gebowlde ballen per genomen wicket',
        'Het aandeel worpen waaruit geen run wordt gescoord',
      ],
      0,
      'Runs per wicket is het gemiddelde en ballen per wicket het strike rate - de drie samen zijn de reden dat een bowler duur kan zijn en toch de moeite waard om te selecteren.',
    ],
    [
      'Wat is zugzwang in het schaken?',
      [
        'Een stelling waarin elke legale zet de positie van de speler verslechtert',
        'Een gedwongen reeks waarin elke zet de enig legale beschikbare zet is',
        'Een stelling waarin dezelfde stelling zich driemaal herhaalt, waardoor de partij eindigt',
        'Een offer om een lijn richting de vijandelijke koning te openen',
      ],
      0,
      'Centraal in koning-en-pion-eindspelen, en de reden waarom null-move pruning door schaakengines in die stellingen uitgeschakeld moet worden.',
    ],
    [
      'Wat markeert de lactaatdrempel?',
      [
        'De intensiteit waarboven bloedlactaat sneller opbouwt dan het wordt afgevoerd',
        'Het punt waarop de glycogeenvoorraden in de spieren volledig uitgeput zijn',
        'De maximale zuurstofopnamesnelheid die de sporter kan volhouden',
        'De hartslag waarbij het slagvolume stopt met toenemen bij extra belasting',
      ],
      0,
      'Het voorspelt duurprestaties beter dan VO2 max, en in tegenstelling tot VO2 max verschuift het aanzienlijk met training.',
    ],
    [
      'Wat schat de Coopertest, en hoe?',
      [
        'Aerobe capaciteit, uit de afstand afgelegd in een looptest van twaalf minuten',
        'Anaerobe kracht, uit herhaalde sprints met vaste herstelperiodes',
        'Loopeconomie, uit het zuurstofverbruik bij een vaste submaximale snelheid',
        'Herstelvermogen, uit de daling van de hartslag in de minuut na inspanning',
      ],
      0,
      'Ontworpen voor de Amerikaanse luchtmacht in 1968. Het is een veldproxy: goedkoop, reproduceerbaar, en sterk afhankelijk van pacingvaardigheid en motivatie.',
    ],
  ],
  phd: [
    [
      'Wat heeft een bowler in cricket nodig voor een maiden over?',
      ['Geen runs toegestaan in die over', 'Een wicket in de eerste over van een spell', 'Zes dot balls zonder wides', 'Een wicket met de eerste bal'],
      0,
      'Een over waaruit geen runs worden gescoord van de bat of als bowler-extra\'s. Een wicket-maiden voegt daar een dismissal aan toe.',
    ],
    [
      'Welk atletiekonderdeel veranderde de Fosbury-flop?',
      ['Polsstokhoogspringen', 'Hoogspringen', 'Verspringen', 'Hink-stap-springen'],
      1,
      'Dick Fosbury won het hoogspringen op de Olympische Spelen van 1968 door achterwaarts over de lat te gaan, en binnen een decennium deed niemand nog iets anders.',
    ],
    [
      'Wat is de standaard komi die aan Wit wordt gegeven onder Japanse regels op een bord van 19x19 in Go?',
      ['0,5 punten', '4,5 punten', '6,5 punten', '10,5 punten'],
      2,
      'Compensatie voor het voordeel van Zwart om als eerste te zetten; de waarde is door de decennia heen opgelopen en verschilt per regelset.',
    ],
    [
      'Waarvoor wordt de Duckworth-Lewis-Stern-methode gebruikt?',
      [
        'Doelstellingen herberekenen in limited-overscricket dat door weer wordt onderbroken',
        'Tennistoernooien inzaaien op basis van rankingpunten',
        'Handicaps berekenen in golf',
        'Voetbalteams rangschikken voor toernooikwalificatie en loting',
      ],
      0,
      'Het modelleert runs als functie van resterende overs en wickets, en daarom is het herziene doelwit zelden een eenvoudig proportioneel getal.',
    ],
    [
      'Wat betekent het bolletjestruitje in de Tour de France?',
      ['Beste jonge renner', 'Beste klimmer', 'Leider in het puntenklassement', 'Meest strijdlustige renner'],
      1,
      'Koning van de bergen. Het groene truitje is het puntenklassement, wit is voor de beste jonge renner.',
    ],
  ],
  professor: [
    [
      'Met welke verwachte score voor de sterkere speler komt een ratingverschil van 400 punten overeen in het Elo-ratingsysteem?',
      ['Ongeveer 0,76', 'Ongeveer 0,85', 'Ongeveer 0,91', 'Ongeveer 0,99'],
      2,
      'De logistische curve geeft ongeveer 10:1-odds bij 400 punten, dus ongeveer 0,909.',
    ],
    [
      'Welke wisselbeker wordt tussen Australië en Engeland betwist en vindt zijn oorsprong in een nepoverlijdensbericht uit 1882?',
      ['The Ashes', 'De Bledisloe Cup', 'De Calcutta Cup', 'De Wisden Trophy'],
      0,
      'The Sporting Times publiceerde een overlijdensbericht voor het Engelse cricket, waarin stond dat het lichaam gecremeerd zou worden en de as naar Australië gebracht.',
    ],
    [
      'Wat betekent het promoveren van een stuk in shogi?',
      [
        'Het omdraaien ervan bij aankomst in de drie rijen dichtst bij de tegenstander, om nieuwe bewegingsmogelijkheden te krijgen',
        'Het inwisselen ervan voor een veroverd stuk van hogere waarde',
        'Het terugbrengen van een eerder veroverd stuk op het bord met een uitgebreider bewegingsbereik',
        'Het voor één zet onaantastbaar verklaren',
      ],
      0,
      'Een veroverd stuk terugbrengen op het bord is een drop, en dat is het andere kenmerk dat shogi zo verschilt van schaken.',
    ],
    [
      'Welke vijf disciplines vormden gedurende het grootste deel van de twintigste eeuw de moderne vijfkamp?',
      [
        'Schermen, zwemmen, paardensport (jumping), schieten en lopen',
        'Schermen, roeien, wielrennen, schieten en lopen',
        'Zwemmen, gymnastiek, schieten, veldlopen en worstelen',
        'Paardensport, boogschieten, zwemmen, lopen en schermen',
      ],
      0,
      'Ontworpen als model voor een cavalerieofficier achter vijandelijke lijnen. Het onderdeel paardensport wordt na de Spelen van 2024 vervangen.',
    ],
    [
      'In welke stad zit het Court of Arbitration for Sport, dat de meeste internationale sportgeschillen behandelt?',
      ['Genève', 'Lausanne', 'Den Haag', 'Zürich'],
      1,
      'Lausanne, naast het Internationaal Olympisch Comité, met gedecentraliseerde kantoren in New York en Sydney.',
    ],
  ],
};
