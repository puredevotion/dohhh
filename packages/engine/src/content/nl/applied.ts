import type { CategoryContent } from '../row.js';

/** Wiskunde & Logica, Technologie & Computing, Sport & Spelen. */

export const MATHS: CategoryContent = {
  bscba: [
    [
      'Wat stelt de tussenwaardestelling over continue functies?',
      [
        'Een continue functie op een gesloten interval bereikt elke waarde tussen haar minimum en maximum',
        'Elke continue functie op een gesloten interval is uniform continu',
        'Een continue functie moet differentieerbaar zijn op enig punt in het interval',
        'Als f continu is op [a, b], dan is f monotoon op een subinterval',
      ],
      0,
      'Voor elke y tussen f(a) en f(b) bestaat een c in [a, b] zodat f(c) = y.',
    ],
    [
      'Wat is de relatie tussen het rekenkundig gemiddelde en het meetkundig gemiddelde voor twee reële getallen a en b?',
      [
        'Het rekenkundig gemiddelde is altijd groter dan of gelijk aan het meetkundig gemiddelde',
        'Het meetkundig gemiddelde is altijd groter dan het rekenkundig gemiddelde',
        'Ze zijn gelijk alleen wanneer a = b',
        'Het rekenkundig gemiddelde is altijd strikt kleiner dan het meetkundig gemiddelde',
      ],
      0,
      'De AM-GM-ongelijkheid geldt voor niet-negatieve getallen. Gelijkheid treedt alleen op wanneer a = b.',
    ],
    [
      'Wat is de limiet van (1 + 1/n)^n als n naar oneindig gaat?',
      [
        'Het getal e van Euler, ongeveer 2,71828',
        'π, ongeveer 3,14159',
        '1',
        'Oneindig',
      ],
      0,
      'Dit is de fundamentele definitie van e, het grondtal van de natuurlijke logaritme.',
    ],
    [
      'Wat stelt de cosinusregel u in staat te berekenen in een driehoek?',
      [
        'De lengte van elke zijde gegeven de andere twee zijden en de ingesloten hoek',
        'Of de driehoek scherp, recht of stomp is uit de drie zijdenlengten',
        'De oppervlakte van de driehoek direct',
        'De straal van de omgeschreven cirkel',
      ],
      0,
      'Het veralgemeent de stelling van Pythagoras: c² = a² + b² − 2ab cos(C).',
    ],
    [
      'Wat is een lokaal extremum van een functie?',
      [
        'Een punt waar de functiewaarde groter of kleiner is dan nabijgelegen punten',
        'De enige grootste of kleinste waarde op het hele domein',
        'Elk punt waar de afgeleide nul is',
        'Een punt dat op de grens van het domein van de functie ligt',
      ],
      0,
      'Een lokaal maximum of minimum, niet noodzakelijk globaal. De afgeleide nul is nodig voor binnenlandse lokale extrema (Fermats stelling) maar niet voldoende.',
    ],
    [
      'Wat veronderstelt de stelling van Rolle over een functie f op [a, b]?',
      [
        'f is continu op [a, b], differentieerbaar op (a, b), en f(a) = f(b)',
        'f is monotoon en f(a) < f(b)',
        'f is overal differentieerbaar en strikt stijgend',
        'f is overal positief en heeft geen nulpunten',
      ],
      0,
      'Onder deze voorwaarden geldt voor een c in (a, b) dat f\'(c) = 0.',
    ],
    [
      'Hoe is elke term van een meetkundige rij met de vorige term gerelateerd?',
      [
        'Door vermenigvuldiging met een constante verhouding',
        'Door optelling van een constant verschil',
        'Door een kwadratische functie van de termindex',
        'Door de vorige twee termen in een Fibonacci-achtige regel',
      ],
      0,
      'Een meetkundige rij: a, ar, ar², ar³, ... met verhouding r.',
    ],
    [
      'Wat stelt de machtregelregel van differentiatie?',
      [
        'd/dx(x^n) = n·x^(n−1) voor elk reëel getal n',
        'd/dx(x^n) = x^(n−1) voor positieve gehele getallen n',
        'd/dx(x^n) = n·x^n voor alle n',
        'd/dx(x^n) = n voor alle n',
      ],
      0,
      'Een van de meest fundamentele afgeleiden in calculus; breidt zich uit tot alle reële exponenten via limieten.',
    ],
    [
      'Wanneer is een functie convex?',
      [
        'Wanneer het lijnstuk dat twee willekeurige punten op de grafiek verbindt, boven of op de grafiek zelf ligt',
        'Wanneer de functie altijd stijgend is',
        'Wanneer de tweede afgeleide positief is',
        'Wanneer de functie geen lokale maxima heeft',
      ],
      0,
      'Equivalent: f(λx + (1−λ)y) ≤ λf(x) + (1−λ)f(y) voor λ ∈ [0, 1].',
    ],
    [
      'Wat garandeert de hoofdstelling van de algebra?',
      [
        'Een polynoom van graad n heeft precies n complexe wortels met multipliciteit',
        'Een polynoom van graad n heeft minstens n reële wortels',
        'De wortels van een polynoom kunnen altijd gevonden worden door een gesloten formule',
        'Een polynoom van graad n heeft hooguit n kritieke punten',
      ],
      0,
      'Dit is waarom polynoomvergelijkingen van graad ≥ 5 niet altijd opgelost kunnen worden met radicalen.',
    ],
    [
      'Wat betekent a ≡ b (mod m) in modulaire rekenkunde?',
      [
        'm deelt (a − b), dus a en b laten dezelfde rest bij deling door m',
        'a en b zijn gelijk',
        'a is kleiner dan b modulo m',
        'a maal b is gelijk aan m',
      ],
      0,
      'Fundamenteel voor getaltheorie en cryptografie; maakt rekenen modulo elk geheel getal m mogelijk.',
    ],
    [
      'Wat is de som van de binnenhoeken van een convexe n-hoek?',
      [
        '(n − 2) × 180 graden',
        'n × 180 graden',
        '360 graden voor elk n',
        '(n + 2) × 90 graden',
      ],
      0,
      'Een driehoek (n=3) heeft 180°, een vierhoek (n=4) heeft 360°, enzovoort.',
    ],
    [
      'Wanneer is een functie surjectief (onto)?',
      [
        'Wanneer elk element in het codomein het beeld is van minstens één element in het domein',
        'Wanneer elk element in het domein afbeeldt op een ander element in het codomein',
        'Wanneer de functie een inverse heeft',
        'Wanneer het bereik van de functie een echte deelverzameling van het codomein is',
      ],
      0,
      'Surjectiviteit en injectiviteit zijn verschillende eigenschappen; een bijectie is allebei.',
    ],
    [
      'Wat is een kritiek punt van een differentieerbare functie?',
      [
        'Een punt waar de afgeleide nul of ongedefinieerd is',
        'Een lokaal maximum of minimum',
        'Een punt waar de functie continu is',
        'Het eindpunt van het domein',
      ],
      0,
      'Niet alle kritieke punten zijn lokale extrema; buigpunten met horizontale raaklijnen zijn ook kritieke punten.',
    ],
    [
      'Wat is de afgeleide van sin(x) naar x?',
      [
        'cos(x)',
        'sin(x)',
        '−sin(x)',
        '1 / cos(x)',
      ],
      0,
      'Een fundamentele trigonometrische afgeleide; cos(x) en sin(x) rollen elkaar om bij differentiatie.',
    ],
  ],
  msc: [

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
  bscba: [
    [
      'Wat is het primaire doel van DNS op het internet?',
      [
        'Mensleesbare domeinnamen vertalen naar IP-adressen',
        'Gegevens versleutelen die tussen servers worden verzonden',
        'Pakketten over het mondiale internet routeren',
        'Geheugenallocatie op een server beheren',
      ],
      0,
      'DNS (Domain Name System) is een gedistribueerde database; www.example.com → 93.184.216.34 is het klassieke voorbeeld.',
    ],
    [
      'Wat geeft een 404-statuscode in HTTP aan?',
      [
        'De aangevraagde bron is op de server niet gevonden',
        'De server is tijdelijk niet beschikbaar',
        'Het verzoek is verboden door permissies',
        'De server heeft de bron permanent verplaatst',
      ],
      0,
      'Clientfout (4xx-bereik); 301 of 302 zou aangeven dat de bron is verplaatst.',
    ],
    [
      'Wat is een relationele database?',
      [
        'Een database die gegevens in tabellen organiseert met rijen en kolommen, gerelateerd door sleutels',
        'Een database die alleen tekstbestanden opslaat',
        'Een database ontworpen uitsluitend voor sociale netwerken',
        'Een database waar elke record aan precies één ander record is gekoppeld',
      ],
      0,
      'SQL-databases zoals PostgreSQL en MySQL zijn relationeel; het sleutelconcept is tabelstructuur en vreemde-sleutelrelaties.',
    ],
    [
      'Wat is de tijdscomplexiteit van binair zoeken op een gesorteerde array?',
      [
        'O(log n)',
        'O(n)',
        'O(n log n)',
        'O(1)',
      ],
      0,
      'Binair zoeken halveert herhaaldelijk de zoekruimte; je kunt dit alleen doen omdat de invoer gesorteerd is.',
    ],
    [
      'Wat beschrijft het OSI-model?',
      [
        'Een zeven-laags raamwerk voor netwerkcommunicatie en protocollen',
        'De structuur van een relationele database',
        'Hoe webservers HTTP-verzoeken verwerken',
        'De lagen van de JavaScript-runtimeomgeving',
      ],
      0,
      'Open Systems Interconnection-model; lagen zijn Fysiek, Data Link, Netwerk, Transport, Sessie, Presentatie, Toepassing.',
    ],
    [
      'Wat is een hashfunctie in cryptografie?',
      [
        'Een functie die invoergegevens afbeeldt op een byte-string van vaste grootte, ideaal eenrichtings- en botsingsbestendig',
        'Een methode om gegevens met een geheime sleutel te versleutelen',
        'Een algoritme om gegevens efficiënt te sorteren',
        'Een techniek om grote bestanden te comprimeren',
      ],
      0,
      'SHA-256, MD5 (nu verbroken) zijn voorbeelden. De hash berekenen is snel; omkering is rekenkundig onhaalbaar.',
    ],
    [
      'Waarvoor staat API?',
      [
        'Application Programming Interface',
        'Asynchronous Protocol Integration',
        'Automated Processing Integration',
        'Application Protocol Initialization',
      ],
      0,
      'Een API bepaalt hoe softwarecomponenten communiceren; REST-API\'s via HTTP zijn alomtegenwoordig.',
    ],
    [
      'Wat betekent LIFO in een stapelgegevensstructuur?',
      [
        'Last-In-First-Out: het meest recent toegevoegde element wordt eerst verwijderd',
        'Linear-Item-First-Operations',
        'Load-Integrated-File-Output',
        'Low-Intensity-Fast-Operations',
      ],
      0,
      'Stapelvoorbeeld: de back-knop van een browser onthoudt pagina\'s in LIFO-volgorde.',
    ],
    [
      'Wat is caching?',
      [
        'Veelgebruikte gegevens opslaan in snelle geheugen om herhaalde trage zoekopdrachten te vermijden',
        'Oude gegevens permanent verwijderen om ruimte vrij te maken',
        'Gevoelige informatie versleutelen',
        'Gegevens verdelen over meerdere servers',
      ],
      0,
      'CPU-caches, Redis, browsercaches en CDN\'s volgen dit principe: verwissel opslag voor latentie.',
    ],
    [
      'Waarvoor staat ACID in databasetransacties?',
      [
        'Atomicity, Consistency, Isolation, Durability',
        'Asynchronous Computation In Databases',
        'Automatic Concurrency Isolation Design',
        'Application Concurrency In Deployment',
      ],
      0,
      'ACID-garanties zorgen voor gegevensintegriteit zelfs als het systeem tijdens een transactie uitvalt.',
    ],
    [
      'Wat is het verschil tussen HTTP en HTTPS?',
      [
        'HTTPS versleutelt de verbinding met TLS, terwijl HTTP gegevens in platte tekst verzendt',
        'HTTPS is sneller dan HTTP',
        'HTTP wordt alleen voor mobiele apps gebruikt',
        'HTTPS kan geen grote bestanden verwerken',
      ],
      0,
      'TLS (Transport Layer Security) beschermt HTTP-verkeer tegen afluisteren; HTTPS is nu standaard.',
    ],
    [
      'Wat is inkapseling in objectgeoriënteerd programmeren?',
      [
        'Gegevens en methoden bundelen terwijl interne details voor buiten verborgen worden',
        'Code van één klasse naar een ander kopiëren',
        'Meerdere programma\'s op één machine uitvoeren',
        'Objecten naar JSON-indeling converteren',
      ],
      0,
      'Inkapseling gebruikt toegangsaanpassers (public, private) om te bepalen wat buitencode kan zien.',
    ],
    [
      'Wat is het doel van versiebeheersystemen zoals Git?',
      [
        'Wijzigingen in code bijhouden, samenwerking ermögelijken en een versiegeschiedenis onderhouden',
        'Code in executables compileren',
        'Broncode voor beveiliging versleutelen',
        'Code automatisch testen voor implementatie',
      ],
      0,
      'Versiebeheer stelt teams in staat op dezelfde codebase te werken, fouten ongedaan te maken en projectgeschiedenis te begrijpen.',
    ],
    [
      'Wat is load balancing in gedistribueerde systemen?',
      [
        'Inkomende aanvragen verdelen over meerdere servers om één server niet te overbelasten',
        'Databasequery\'s gelijkmatig over de tijd verdelen',
        'Ervoor zorgen dat alle gegevens op elke server gerepliceerd zijn',
        'Bestanden voor verzending comprimeren',
      ],
      0,
      'Load balancers verbeteren beschikbaarheid en prestaties door werk te spreiden; round-robin is een eenvoudige strategie.',
    ],
    [
      'Waarvoor staat SQL?',
      [
        'Structured Query Language',
        'System Query Link',
        'Sequential Quality Language',
        'Synchronous Query Layer',
      ],
      0,
      'SQL wordt gebruikt om relationele databases op te vragen; SELECT, INSERT, UPDATE, DELETE zijn fundamentele bewerkingen.',
    ],
  ],
  msc: [

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
  bscba: [
    [
      'Hoeveel spelers per team zijn er tijdens normaal spel in voetbal?',
      [
        '11',
        '9',
        '10',
        '12',
      ],
      0,
      'Een standaardteam in voetbal heeft elf spelers: één keeper, verdedigers, middenvelders en aanvallers.',
    ],
    [
      'Wat is de volgorde van punten binnen een enkele game in tennis?',
      [
        '0, 15, 30, 40, game',
        '0, 10, 20, 30, 40, game',
        '0, 1, 2, 3, 4, game',
        'Ze gaan direct naar 1, 2, 3, 4',
      ],
      0,
      'Het scoresysteem (15, 30, 40) is historisch; bij deuce (40-40) moet een speler met 2 punten winnen.',
    ],
    [
      'Wat is de buitenspelregel in voetbal?',
      [
        'Een speler staat buitenspel als hij dichter bij de doellijn van de tegenstander is dan bal en twee verdedigers',
        'Een speler mag niet achterwaarts naar een teamgenoot passen',
        'Een speler mag niet de bal ontvangen terwijl hij sneller loopt dan de gemiddelde snelheid van het team',
        'Een speler pleegt automatisch een overtreding na drie passes op rij',
      ],
      0,
      'Buitenspel voorkomt doel-hangen; de regel bestaat om het spel vlottend en eerlijk te houden.',
    ],
    [
      'Hoeveel worpen vormen een over in cricket?',
      [
        '6',
        '8',
        '10',
        '4',
      ],
      0,
      'Een over bestaat uit zes wettelijke worpen door één werper; een cricket-inning bestaat uit meerdere overs.',
    ],
    [
      'Wat is het primaire doel in rugby union?',
      [
        'Meer punten scoren dan het tegenstander door de ovale bal over de doellijn te dragen of ertussen te trappen',
        'De bal zo lang mogelijk in de lucht houden',
        'Zoveel passes voltooien als het tegenstander',
        'Voorkomen dat het tegenstander de bal aanraakt',
      ],
      0,
      'Een try (5 punten) wordt gescoord door de bal in het in-goal-gebied tegen de grond te drukken; conversies en strafschoppen geven ook punten.',
    ],
    [
      'Hoeveel punten is een basket waard als deze wordt gemaakt vanaf buiten de drielijnenboog in basketbal?',
      [
        '3 punten',
        '2 punten',
        '4 punten',
        '1 punt',
      ],
      0,
      'De drielijnenboog is verder weg van de basket dan een normale schot; baskets binnenin zijn 2 punten waard.',
    ],
    [
      'Wat is een opslag in tennis?',
      [
        'De slag die elk punt begint, gespeeld vanaf achter de basislijm in het servicevak van de tegenstander',
        'De bal direct naar de tegenstander terugkaatsen',
        'Elke slag gespeeld vanaf de zijlijn',
        'De lijn die de grens van het veld aangeeft',
      ],
      0,
      'Een opslag moet in het servicevak landen; twee mislukte opslagen (fouten) resulteren in een dubbele fout en verlies van het punt.',
    ],
    [
      'Wat is een homerun in honkbal?',
      [
        'Wanneer een slagman de bal over het buitenveldhek in fair territory slaat, of de bal ver genoeg slaat om alle bases te ronden',
        'Wanneer een honkenloper naar hun startpositie terugkeert',
        'Een run gescoord op het thuisstadion van de slagman',
        'Elke klap die een loper twee bases vooruit stelt',
      ],
      0,
      'Een homerun laat de slagman en alle loper op bases scoren; het is de krachtigste individuele zet in honkbal.',
    ],
    [
      'Wat is icing in ijshockey?',
      [
        'Het ijsstuk van achter de middellijn schieten zodat het voorbij de doellijn van de tegenstander reist zonder aanraking',
        'De piste koelen om het ijsoppervlak harder te maken',
        'Een tegenstander tegen de wanden checken',
        'Een overtreding waarbij een speler de puck te lang vasthoudt',
      ],
      0,
      'Icing resulteert in een face-off in de zone van de overtredende team; het voorkomt lange-afstandsstalling.',
    ],
    [
      'Wat is vrij zwemmen in het zwemmen?',
      [
        'Een slag waarbij de zwemmer elke techniek gebruikt (typisch voorkruipcrawl) om de finish het snelst te bereiken',
        'Een zwemstijl waarbij geen beweging vereist is',
        'Een race waarbij zwemmers afwisselen tussen verschillende slagen',
        'Een competitie die plaatsvindt in een rivier in plaats van een zwembad',
      ],
      0,
      'Voorkruipcrawl is bijna altijd de snelste slag, dus zwemmers kiezen dit voor vrij-zwemmevenementen.',
    ],
    [
      'Wat is een break in snooker?',
      [
        'De openingslag waarbij de speler probeert de gestelde ballen te verspreiden',
        'Een pauze tijdens de wedstrijd om bij te komen',
        'Een fout waarbij de speelstok-bal twee keer wordt geraakt',
        'Het moment waarop een speler zijn beurt verliest',
      ],
      0,
      'De speler die breakt probeert objectballen in te zakken en een sterke openingspositie op te stellen.',
    ],
    [
      'Wat is een birdie in golf?',
      [
        'Een score van één slag onder par voor een hole',
        'Een score van één slag boven par voor een hole',
        'Een score gelijk aan par voor een hole',
        'De laatste hole in een ronde van 18 holes',
      ],
      0,
      'Een eagle is twee slagen onder par; een bogey is één slag boven par.',
    ],
    [
      'Wat moet er in tafeltennis gebeuren om een opslag geldig te zijn?',
      [
        'De bal moet eerst aan de zijde van de opslager stuiteren, dan over het net gaan en aan de zijde van de tegenstander landen',
        'De bal moet direct over het net gaan zonder te stuiteren',
        'De opslager moet de bal onder de taillehoogte slaan',
        'De bal moet van minstens 30 cm boven de tafel worden geworpen',
      ],
      0,
      'Een opslag die het net niet passeert of buiten de zijde van de tegenstander landen, resulteert in een punt voor de tegenstander.',
    ],
    [
      'Wat is de rol van een wicketkeeper in cricket?',
      [
        'Achter de wickets staan en de bal vangen of de wicket breken om batsmans uit te krijgen',
        'De grens patrouilleren en ballen die voor zes worden geslagen vangen',
        'Roepen wanneer een batsman uit is',
        'Ervoor zorgen dat het veld vlak en goed onderhouden is',
      ],
      0,
      'De wicketkeeper is de enige veldspeler die beschermende handschoenen en schenen mag dragen voorbij de uitrusting van de batsman.',
    ],
    [
      'Wat is een volant in badminton?',
      [
        'Het kleine projectiel met kurken basis en veerenkroon dat spelers over het net slaan',
        'Een strafkaart gegeven aan een speler die de regels breekt',
        'De manier van serveren in dubbelspartijen',
        'De lijn die de out-of-bounds aangeven op het veld',
      ],
      0,
      'Een volant beweegt anders dan een bal: het vertraagt snel in vlucht, waardoor badminton tactisch verschillend is.',
    ],
  ],
  msc: [

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
