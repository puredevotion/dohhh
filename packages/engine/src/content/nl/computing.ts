import type { CategoryContent } from '../row.js';

/**
 * Halfgeleiders & Lithografie, Software Engineering & Algoritmen.
 *
 * Bewust apart van "Technologie & Computing", dat algemeen blijft:
 * netwerken, protocollen, datastructuren. Dit zijn de twee vakdecks -
 * de fab en de compiler - en de niveaus zijn de echte, professionele.
 *
 * Een opmerking over het professor-niveau hier: deze twee vakgebieden
 * bewegen snel, en een vraag over de huidige stand van de techniek
 * verouderd sneller dan een over Byzantijnse consensus. De vragen
 * hieronder zijn gericht op feiten met een zekere houdbaarheid -
 * waarom EUV reflectieve optiek nodig heeft, verandert niet - in
 * plaats van op het procesnode van dit kwartaal, wat binnen een jaar
 * al onjuist zou zijn.
 */

export const SILICON: CategoryContent = {
  msc: [
    [
      'Bij welke golflengte werkt EUV-lithografie?',
      ['13,5 nm', '193 nm', '248 nm', '1,06 um'],
      0,
      "193 nm is ArF-immersie, het werkpaard dat EUV aanvult in plaats van vervangt; 248 nm is KrF.",
    ],
    [
      'Wat verandert een FinFET ten opzichte van een planaire transistor?',
      [
        'De gate omsluit het kanaal aan drie zijden, wat de elektrostatische controle verbetert',
        'Het kanaal wordt vervangen door een verbindingshalfgeleider met hogere mobiliteit',
        'Bron en drain worden verticaal gestapeld om het kanaal te verkorten',
        'De gate-oxide wordt verdund om de aanstuurstroom te vergroten',
      ],
      0,
      'Betere controle over short-channel-effecten en de subthreshold-helling is precies het doel; nanosheet GAA breidt dit uit naar vier zijden.',
    ],
    [
      'Wat is een warp (NVIDIA) of wavefront (AMD) in een GPU?',
      [
        'Een groep threads die samen en in lockstep worden uitgevoerd',
        'Een blok threads dat een toewijzing van on-chip scratchpad-geheugen deelt',
        'De eenheid werk die naar een enkele streaming multiprocessor wordt gestuurd',
        'Een wachtrij van onafhankelijke kernels die wachten op een vrije uitvoeringseenheid',
      ],
      0,
      '32 threads op NVIDIA-hardware, historisch 64 bij AMD. Daardoor kosten afwijkende branches binnen de groep je beide paden.',
    ],
    [
      'Waarom werden high-k dielectrica met metalen gates geïntroduceerd?',
      [
        'Om de gate-capaciteit hoog te houden terwijl de tunnellekstroom die dun siliciumdioxide veroorzaakte, wordt beperkt',
        'Om de doorslagspanning van de gate-stack onder overdrive te verhogen en zo de betrouwbaarheid op lange termijn te verbeteren',
        'Om de weerstand van de gate-elektrode zelf te verlagen',
        'Om de gate op een kleinere pitch te kunnen patroneren',
      ],
      0,
      'SiO2 was slechts een paar atoomlagen dik geworden, en lekstroom werd de dominante term in het stroomverbruik.',
    ],
    [
      'Wat is een reticle?',
      [
        'Het gepatroneerde masker waarvan het beeld op de wafer wordt geprojecteerd',
        'Het uitlijnraster dat voor de eerste laag in de wafer wordt geëtst',
        'Het metrologiedoel dat wordt gebruikt om overlay-fouten te meten',
        'Het frame dat de wafer plat houdt tijdens de belichting',
      ],
      0,
      'De veldgrootte beperkt hoe groot een die in een enkele belichting kan worden gedrukt, en daarom liggen zeer grote acceleratordies dicht bij de reticle-limiet.',
    ],
  ],
  phd: [
    [
      'Naar welke numerieke apertuur brengt High-NA EUV het, en tegen welke prijs?',
      [
        '0,55, tegen de prijs van anamorfotische optiek en een half zo groot belichtingsveld',
        '0,45, tegen de prijs van een kortere scherptediepte en geen andere ontwerpaanpassing',
        '0,75, tegen de prijs van immersie in water',
        '0,33, tegen de prijs van een verdubbelde belichtingsdosis',
      ],
      0,
      '0,33 is standaard-EUV. Het halve veld betekent dat grote dies moeten worden gestitcht, wat net zo goed een ontwerp- en yieldprobleem is als een lithografieprobleem.',
    ],
    [
      'Wat veroorzaakt stochastische printfouten bij EUV?',
      [
        'Fotonruis bij lage dosis, wat willekeurige bruggen en onderbrekingen in het patroon geeft',
        'Vervuiling van het masker door koolstofafzetting die zich opstapelt over veel opeenvolgende belichtingen',
        'Lijnrandruwheid puur door de deeltjesgrootte van de resistpolymeer',
        'Thermische drift van de wafertafel tijdens de scan',
      ],
      0,
      'Een EUV-foton draagt ongeveer 92 eV, dus een gegeven dosis wordt afgeleverd door veel minder fotonen dan bij 193 nm - de afweging tussen dosis, doorvoer en defectiviteit is de centrale economische spanning van het apparaat.',
    ],
    [
      'Wat maakt de bandbreedte van een HBM-stack mogelijk?',
      [
        'Een zeer brede interface - 1024 bit per stack - via TSV\'s naar een nabijgelegen interposer',
        'Een aanzienlijk hogere signaleersnelheid per pin dan GDDR bij een gelijke interfacebreedte behaalt',
        'On-die caching van vaak benaderde rijen binnen de stack',
        'Optische interconnectie tussen de stack en de logic-die',
      ],
      0,
      'Breedte bij bescheiden klokfrequenties, in plaats van snelheid bij een smalle breedte, houdt de energie per bit laag genoeg om de verpakkingskosten waard te zijn.',
    ],
    [
      'Wat verandert een nanosheet-transistor (gate-all-around) ten opzichte van een FinFET?',
      [
        'De effectieve kanaalbreedte wordt continu instelbaar via de sheetbreedte, in plaats van gekwantiseerd door het aantal fins',
        'De gate wordt onder het kanaal geplaatst om ruimte boven het kanaal vrij te maken voor bedrading',
        'Het kanaal wordt verticaal georiënteerd, waardoor de gate-lengte volledig loskomt van de footprint van het apparaat',
        'Bron- en draincontacten verhuizen naar de achterkant van de wafer',
      ],
      0,
      'Ontwerpers krijgen de analoge vrijheid terug die door fin-kwantisatie verloren ging. De achterkant-optie is een aparte ontwikkeling - achterkant-stroomvoorziening.',
    ],
    [
      'Wat beperkt op een GPU doorgaans de behaalde occupancy?',
      [
        'Registers per thread en shared memory per blok, tegen het budget per SM',
        'De beschikbare PCIe-linkbreedte voor het apparaat',
        'Het aantal onafhankelijke kernels dat de driver bereid is resident te houden op het apparaat',
        'De grootte van de L2-cache ten opzichte van de werkset',
      ],
      0,
      'Een hoge occupancy is niet het doel op zich: een kernel met genoeg instructieniveau-parallellisme kan de machine bij lage occupancy al verzadigen.',
    ],
  ],
  professor: [
    [
      'Waarom moet EUV-optiek reflectief zijn en in vacuum werken?',
      [
        'Elk materiaal absorbeert sterk bij 13,5 nm, waardoor het systeem Mo/Si-multilaag-Bragg-spiegels gebruikt in plaats van lenzen en niet door lucht kan werken',
        'Verschillen in brekingsindex bij 13,5 nm zijn te klein om de bundel nuttig te buigen, dus worden in plaats daarvan spiegels met scherende inval gebruikt',
        'De plasmabron zendt een te breed spectrum uit voor refractieve correctie',
        'Vacuum is alleen nodig om het masker te beschermen tegen koolwaterstofvervuiling',
      ],
      0,
      'Elke spiegel reflecteert ongeveer 70%, dus een keten van tien laat maar een paar procent van het bronvermogen over - daarom was bronvermogen, niet optiek, decennialang de bottleneck.',
    ],
    [
      'Welk probleem moet achterkant-stroomvoorziening (backside power delivery) oplossen?',
      [
        'Bedradingscongestie en IR-drop, door voedingsrails onder de apparaatlaag te leggen en de bovenste metaallagen vrij te maken voor signalen',
        'Warmteafvoer, door het thermische raakvlak dichter bij het kanaal te brengen en het siliciumsubstraat erboven te verdunnen',
        'Stitching bij de reticle-limiet, door een die over twee wafers te verdelen',
        'Elektromigratie uitsluitend in de bovenste metaallagen',
      ],
      0,
      "Intels PowerVia is het geproduceerde voorbeeld. Het levert bedradingsruimte en een schonere voeding op, tegen de prijs van een veel moeilijker wafer-bond- en verdunningsproces.",
    ],
    [
      'Wat levert chipletdisaggregatie in, vergeleken met een monolithische die?',
      [
        'Energie per bit en latentie over de die-naar-die-interface, in ruil voor yield en herbruikbaarheid',
        'Piekklokfrequentie, omdat paden tussen dies niet gepipelined kunnen worden',
        'Cachecoherentie, die niet over afzonderlijke dies kan worden gehandhaafd',
        'Testdekking in de productie, omdat afzonderlijke dies niet volledig getest kunnen worden voor assemblage',
      ],
      0,
      'Yield schaalt slecht met oppervlakte, dus het opsplitsen van een groot ontwerp is vaak simpelweg goedkoper - en UCIe bestaat om de interface een commodity te maken in plaats van een geheim per leverancier.',
    ],
    [
      'Waarom verschuift het gebruik van rekenunits met verlaagde precisie (tensor cores en equivalenten) de plek waar de prestaties van een accelerator worden beperkt?',
      [
        'Ze verhogen de rekendoorvoer veel sneller dan de geheugenbandbreedte, waardoor meer kernels bandbreedtegebonden worden op de roofline',
        'Ze maken on-chip caches overbodig voor dichte lineaire algebra',
        'Ze vereisen dat workloads worden herschreven als sparse in plaats van dense operaties voordat er enige beloofde versnelling optreedt',
        'Ze maken numerieke fouten de bindende beperking op de haalbare doorvoer',
      ],
      0,
      'Daarom draait zo veel acceleratorontwikkeling nu om het minder verplaatsen van data - fusion, tiling, herberekening - in plaats van sneller rekenen.',
    ],
    [
      'Waar verwijst "dark silicon" naar?',
      [
        'Het deel van een die dat onbestroomd moet blijven omdat vermogen, niet oppervlakte, nu de bindende beperking is',
        'Circuits die door binning zijn uitgeschakeld om de yield op een gegeven wafer te verbeteren',
        'Oppervlakte die wordt ingenomen door redundantie- en herstelstructuren in grote geheugenarrays',
        'Logica die ongebruikt blijft omdat het ontwerp niet met volledige dichtheid kon worden gerouteerd binnen de beschikbare metaallagen',
      ],
      0,
      'Esmaeilzadeh et al., 2011. Het is de structurele reden voor de omschakeling naar gespecialiseerde accelerators: als je niet alles tegelijk kunt bestromen, laat dan het deel dat je wel bestroomt bij de taak passen.',
    ],
  ],
  bscba: [
    [
      'Wat is het doel van een halfgeleidermasker in lithografie?',
      ['Het patroon definiëren dat op de wafer wordt overgedragen', 'Het UV-licht versterken', 'De temperatuur tijdens verwerking meten', 'De wafer op zijn plaats houden'],
      0,
      'Het gepatroneerde masker (reticle) wordt op de wafer geprojecteerd om het circuitpatroon via projectie- of contactbelichting te creëren.',
    ],
    [
      'Wat is een geïntegreerde schakeling (IC)?',
      ['Een enkele halfgeleiderschip met meerdere transistors en componenten', 'Een lichtbron die in lithografie wordt gebruikt', 'Een apparaat dat elektrische weerstand meet', 'Een materiaal dat voor isolatie van bedrading wordt gebruikt'],
      0,
      'Een IC combineert transistors, dioden, weerstanden en condensatoren op één substraat en vormt de basis van moderne elektronica.',
    ],
    [
      'Wat is doping bij halfgeleiderproductie?',
      ['Het toevoegen van onzuiverheden aan zuiver silicium om n-type of p-type geleiding te creëren', 'De wafer verhitten tot het smeltpunt', 'Een laser gebruiken om patronen in silicium te snijden', 'De wafer bedekken met isolatiemateriaal'],
      0,
      'Donoren (n-type) en acceptoren (p-type) maken de elektrische eigenschappen mogelijk die juncties en transistors werkend maken.',
    ],
    [
      'Wat is de primaire functie van een transistor?',
      ['Signalen versterken of stroom schakelen met een klein stuursingaal', 'Elektrische lading tijdelijk opslaan', 'Warmte afvoeren die door andere componenten wordt gegenereerd', 'Spanning over een circuit meten'],
      0,
      'Een transistor werkt als poort: een kleine spanning of stroom aan de ingang regelt grotere stromen aan de uitgang.',
    ],
    [
      'Wat is het verschil tussen silicium en germanium als halfgeleiders?',
      ['Silicium heeft een grotere bandgap, komt veel vaker voor en is thermisch stabieler; germanium heeft een lagere ladingsdragerbeweeglijkheid', 'Silicium wordt nooit in moderne elektronica gebruikt omdat het te fragiel is', 'Germanium geleidt beter bij alle temperaturen', 'Silicium kan niet met fosfor worden gedoteerd'],
      0,
      'Siliciums grotere bandgap (1,1 eV tegenover 0,67 eV) en overvloed maakten het tot industriestandaard, ondanks het vroege gebruik van germanium.',
    ],
    [
      'Wat is de relatie tussen transistorgrootte en verwerkingsknooppunt?',
      ['Een kleinere node (bijv. 5 nm) betekent over het algemeen kleinere transistors en hogere dichtheid', 'Knooppuntnamen verwijzen alleen naar vervaardigingskosten, niet naar fysieke grootte', 'Kleinere knoopnummers geven langzamere transistors aan', 'Knooppuntnamen hebben geen verband met werkelijke transistorafmetingen'],
      0,
      'Verwerkingsknooppunten bepalen de minimale kenmerkgrootte en interconnectdichtheid, wat hogere transistoraantallen per oppervlakte-eenheid mogelijk maakt.',
    ],
    [
      'Waar verwijst "lekstroom" naar in halfgeleiderinrichtingen?',
      ['Ongewenste stroom door een transistor in de uitgeschakelde toestand', 'Vermogen dat tijdens normale werking wordt verbruikt', 'Elektromagnetische straling die door het apparaat wordt uitgezonden', 'Verlies van materiaal door oxidatie'],
      0,
      'Lekstroom is statische vermogensverspreiding; deze stijgt exponentieel met temperatuur en beperkt de batterijduur in mobiele apparaten.',
    ],
    [
      'Wat is een fotomasker?',
      ['Een sjabloon met een patroon van transparante en ondoorzichtige gebieden om een circuitontwerp op een wafer over te dragen', 'Een beschermingsdekking voor de fotoresist tijdens bakken', 'Een hulpmiddel voor het meten van de golflengte van licht', 'Een chemische verbinding die wordt gebruikt om fotoresist te ontwikkelen'],
      0,
      'Het fotomasker wordt aan licht blootgesteld; het doorgelaten patroon bereikt de met fotoresist gecoate wafer eronder.',
    ],
    [
      'Wat is het doel van fotoresist in halfgeleiderverwerking?',
      ['Een lichtgevoelig materiaal dat bij blootstelling oplosbaar of onoplosbaar wordt, wat de basis vormt voor patroonoverdracht', 'Een beschermende laag tegen hitte tijdens vervaardiging', 'Een stof die elektrische geleiding verhoogt', 'Een chemische stof die oxidatielagen verwijdert'],
      0,
      'Fotoresist wordt op de wafer aangebracht; UV-blootstelling bepaalt gebieden voor daaropvolgende etsing of dopering.',
    ],
    [
      'Wat wordt bedoeld met "opbrengst" in halfgeleiderproductie?',
      ['Het percentage werkende apparaten dat per wafer wordt geproduceerd', 'Het totale aantal transistors op een die', 'De snelheid waarmee wafers worden verwerkt', 'De dikte van het siliciumsubstraat'],
      0,
      'Opbrengst is van cruciaal belang voor kosten per die; defecten verminderen opbrengst, waardoor verwerking met lage defecten van het grootste belang is.',
    ],
    [
      'Wat is thermische oxidatie in halfgeleiderproductie?',
      ['Het proces van het groeien van een siliciumoxidelaag door silicium in zuurstof of stoom te verhitten', 'Een methode om de wafer na verwerking af te koelen', 'Een chemische reactie om onzuiverheden te verwijderen', 'Een techniek om dopantconcentratie te verhogen'],
      0,
      'Thermisch oxide (SiO2) werkt als isolator en kan als gate-diëlektricum in oudere transistorgeneraties worden gebruikt.',
    ],
    [
      'Wat is het doel van een diffusiestap in halfgeleiderverwerking?',
      ['Dopantatomen in het siliciumsubstraat laten diffunderen door middel van verhitting', 'Overtollige fotoresist na blootstelling verwijderen', 'De dikte van gedeponeerde lagen meten', 'De wafer tussen verwerkingsstappen afkoelen'],
      0,
      'Diffusie verplaatst dopanten van het oppervlak naar de massa en creëert gedoteerde regio\'s die de transistorstructuur vormen.',
    ],
    [
      'Wat is etsen in halfgeleiderproductie?',
      ['Het proces waarbij materiaal (oxide, polysilicium of metaal) selectief wordt verwijderd met chemische of fysieke middelen', 'Een methode om nieuw materiaal op de wafer aan te brengen', 'Een techniek om elektrische eigenschappen te meten', 'Een verhittingsproces om coatings uit te harden'],
      0,
      'Nat etsen gebruikt vloeibare chemicaliën; droog etsen gebruikt ion- of plasmabombardement. Beide zijn selectief op basis van het fotomasker.',
    ],
    [
      'Wat is een p-n-junctie?',
      ['De grens tussen p-type en n-type halfgeleidermateriaal vormt de basis van dioden en transistors', 'Een verbindingspunt in een printplaat', 'Een meetinstrument dat bij tests wordt gebruikt', 'Een chemische bindingsmethode'],
      0,
      'Bij de junctie creëren diffusie van meerderheidsladingsdragers en elektrostatische krachten een depletiegebied dat de stroom controleert.',
    ],
    [
      'Waar staat "CMOS" voor?',
      ['Complementaire metaaloxidehalfgeleider, combineert n-type en p-type transistors op dezelfde chip', 'Common-Modular Operating System', 'Crystalline Metal-Oxide Surface', 'Coordinated Multi-Object Structure'],
      0,
      'CMOS paart nMOS- en pMOS-transistors; omdat slechts één tegelijk geleidt, is statische vermogensverspreiding minimaal.',
    ],
  ],
};

export const SOFTWARE: CategoryContent = {
  msc: [
    [
      'Wat betekent referentiële transparantie?',
      [
        'Een expressie mag worden vervangen door zijn waarde zonder de betekenis van het programma te veranderen',
        'Een functie mag vanuit elke module worden aangeroepen zonder dat een expliciete import-declaratie nodig is',
        'Elke referentie is gegarandeerd niet-null op het moment van gebruik',
        'Namen mogen in een binnenliggende scope worden geschaduwd zonder ambiguiteit',
      ],
      0,
      'Het is de eigenschap die equationeel redeneren, common-subexpression-eliminatie en luie evaluatie toestaat - en precies de eigenschap die bijwerkingen vernietigt.',
    ],
    [
      "Wat begrenst de wet van Amdahl?",
      [
        'De versnelling door parallellisatie, gegeven het deel van het werk dat serieel moet blijven',
        'De doorvoer van een pijplijn, gegeven de latentie van de traagste fase en de diepte van de pijplijn',
        'Het cache-missratio, gegeven de grootte van de werkset ten opzichte van de capaciteit',
        'Het maximale nuttige aantal threads bij een vaste geheugenbandbreedte',
      ],
      0,
      "De wet van Gustafson is het complementaire kader: houd de tijd vast en laat het probleem groeien, dan telt het seriële deel minder.",
    ],
    [
      'Wat is een monad, minimaal gezegd?',
      [
        'Een typeconstructor met unit- en bind-operaties die aan links-identiteit, rechts-identiteit en associativiteit voldoen',
        'Elk type dat het mappen van een functie over zijn inhoud ondersteunt',
        'Een container die tot een enkele waarde kan worden gevouwen',
        'Een typeklasse die sequentiële compositie van pure functies biedt, samen met een identiteitselement en een associativiteitswet',
      ],
      0,
      'Een functie over een container mappen is een functor. De wetten zijn de essentie - een bind zonder die wetten geeft je niets van het redeneervermogen waarvoor je de abstractie wilde.',
    ],
    [
      'Wat is de geamortiseerde kosten van het toevoegen aan een dynamische array die bij groei verdubbelt?',
      ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      0,
      'Een enkele toevoeging kan O(n) zijn, maar door het verdubbelen wordt de totale kosten van n toevoegingen lineair. Het onderscheid tussen geamortiseerd en worst-case is precies waar een realtimesysteem om geeft.',
    ],
    [
      'Wat legt een happens-before-relatie vast in een geheugenmodel?',
      [
        'Een partiële ordening die garandeert dat de schrijfacties van een thread zichtbaar zijn voor een andere thread',
        'Een totale ordening op alle geheugenoperaties over alle threads',
        'Dat twee operaties niet door de compiler mogen worden geherordend',
        'Dat een operatie voltooid is voordat een volgende instructie wordt uitgegeven',
      ],
      0,
      'Partieel, niet totaal: ongeordende toegangen zijn precies de datarace. Sequentiele consistentie voor datarace-vrije programma\'s is wat de modellen van C++ en Java werkelijk beloven.',
    ],
  ],
  phd: [
    [
      'Wat onderscheidt applicatieve functors van monaden in expressiviteit?',
      [
        'Applicatief combineert onafhankelijke effecten; een monade laat een later effect afhangen van een eerder resultaat',
        'Applicatief vereist commutatieve effecten, een monade niet',
        'Een monade kan falen uitdrukken, een applicatief kan dat niet',
        'Applicatief ondersteunt het mappen over meerdere argumenten tegelijk, wat een monadische bind niet kan uitdrukken',
      ],
      0,
      'Het praktische gevolg is analyseerbaarheid: omdat applicatieve structuur statisch is, kan die worden geïnspecteerd, gebundeld en geparallelliseerd - iets wat monadische bind verhindert.',
    ],
    [
      'Wat vereist linearizeerbaarheid dat sequentiële consistentie niet vereist?',
      [
        'Dat elke operatie op een bepaald moment in reële tijd, tussen zijn aanroep en zijn antwoord, in werking lijkt te treden',
        'Dat alle threads schrijfacties in dezelfde totale volgorde waarnemen',
        'Dat operaties op verschillende objecten ook onderling geordend zijn in een enkele globale gebeurtenisreeks',
        'Dat geen operatie oneindig mag blokkeren',
      ],
      0,
      'Een realtimebeperking, en ze is composeerbaar: een systeem van linearizeerbare objecten is linearizeerbaar, wat voor sequentiële consistentie nadrukkelijk niet geldt.',
    ],
    [
      'Hoe verschillen state-based en operation-based CRDT\'s in hun vereisten?',
      [
        'State-based voegt volledige toestanden samen over een join-semilattice; operation-based heeft causale aflevering nodig',
        'State-based vereist exact-eenmalige aflevering; operation-based verdraagt duplicaten',
        'State-based heeft vectorklokken nodig; operation-based heeft die niet nodig',
        'Operation-based vereist een totale ordening op alle operaties, terwijl state-based slechts een partiële ordening vereist',
      ],
      0,
      'De afweging is bandbreedte tegenover afleveringsgaranties, en daarom volgt de keuze meestal het transport in plaats van het datatype.',
    ],
    [
      'Wat meten work en span in de analyse van parallelle algoritmen?',
      [
        'Het totale aantal uitgevoerde operaties, en de lengte van het kritieke pad',
        'Het totale geheugenverkeer, en de diepte van de aangeraakte cachehierarchie',
        'Het benodigde aantal processoren, en de daarmee behaalde tijd',
        'Het seriële deel, en het resterende parallelle deel',
      ],
      0,
      "Brent's theorema begrenst de tijd door work/p + span, en daarom telt het verkleinen van span zelfs wanneer het work al optimaal is.",
    ],
    [
      'Wat is het expressieprobleem?',
      [
        'Nieuwe datagevallen en nieuwe operaties toevoegen zonder bestaande code te bewerken of typeveiligheid te verliezen',
        'Bepalen of twee expressies in een taal observationeel equivalent zijn',
        'Principale types afleiden voor expressies met polymorfe recursie',
        'Expressiebomen compileren naar code zonder ooit de tussenliggende datastructuur te materialiseren',
      ],
      0,
      'Wadlers naam ervoor. Functionele decompositie maakt nieuwe operaties makkelijk en nieuwe gevallen invasief; objectgeoriënteerde decompositie doet het omgekeerde.',
    ],
  ],
  professor: [
    [
      'Wat levert parametriciteit op?',
      [
        '"Gratis stellingen": beperkingen op het gedrag van een polymorfe functie, afleidbaar uit alleen haar type',
        'Een garantie dat type-inferentie voor alle correct getypeerde programma\'s termineert',
        'Het vermogen om types tijdens het compileren te wissen zonder de semantiek te veranderen',
        'De zekerheid dat het instantiëren van een typevariabele nooit non-terminatie in een programma kan introduceren',
      ],
      0,
      'Reynolds\' abstractiestelling, gepopulariseerd door Wadler. Het is waarom een totale functie van het type `forall a. [a] -> [a]` alleen elementen kan permuteren en weglaten.',
    ],
    [
      'Wat bieden algebraïsche effecten en handlers boven monad-transformer-stacks?',
      [
        'Composeerbare effecten zonder vaste volgorde of de lift-boilerplate die een stack oplegt',
        'Een garantie dat alle effecten precies eenmaal worden uitgevoerd',
        'Statische tracking van effecten, wat monad-transformers niet kunnen uitdrukken',
        'Betere runtimeprestaties, door het vastleggen van continuaties volledig te elimineren',
      ],
      0,
      'Effecten commuteren waar de semantiek dat toelaat, in plaats van je op typeniveau tot een volgorde te binden - de prijs is dat handler-semantiek voor interagerende effecten subtieler is dan het lijkt.',
    ],
    [
      'Wat is de centrale claim van "A Unified Theory of Garbage Collection" (Bacon, Cheng en Rajan)?',
      [
        'Tracing en reference counting zijn duaal, en echte collectors zijn hybrides die daartussen liggen',
        'Generationele collectie overtreft beide benaderingen strikt voor praktisch alle realistische workloads',
        'Reference counting kan in geen enkele formulering cycli opruimen',
        'Concurrente collectie vereist in alle gevallen een read barrier',
      ],
      0,
      'Tracing berekent levende objecten, counting berekent dode; zodra je ze als hetzelfde algoritme op complementaire verzamelingen ziet, wordt het ontwerpvlak navigeerbaar in plaats van tribaal.',
    ],
    [
      'Wat garandeert een wait-free algoritme bovenop lock-freedom?',
      [
        'Elke thread voltooit zijn operatie binnen een begrensd aantal van zijn eigen stappen',
        'Dat geen thread mag worden onderbroken terwijl die gedeelde toestand vasthoudt',
        'Dat het algoritme geen atomaire read-modify-write-primitieven gebruikt',
        'Dat vooruitgang gegarandeerd is zolang minstens een thread wordt gescheduled',
      ],
      0,
      'Lock-freedom is systeembrede vooruitgang en laat individuele uithongering toe. Herlihy\'s universele constructie toont dat wait-freedom haalbaar is vanuit consensusprimitieven - tegen een prijs die het meestal uitsluit.',
    ],
    [
      'Wat voegt de Curry-Howard-Lambek-correspondentie toe aan Curry-Howard?',
      [
        'Het categorische been: cartesisch gesloten categorieën, naast bewijzen en programma\'s',
        'Een behandeling van klassieke logica in plaats van alleen het intuïtionistische fragment ervan',
        'Een verklaring van recursieve types als vaste punten van functors',
        'De uitbreiding van het isomorfisme naar lineaire logica',
      ],
      0,
      'Types als objecten, termen als morfismen, en de hele driehoek is waarom categorietheorie steeds opduikt in taalontwerp in plaats van een gimmick te zijn.',
    ],
  ],
  bscba: [
    [
      'Wat is een functie in programmering?',
      ['Een benoemd codeblok dat een specifieke taak uitvoert en kan worden hergebruikt', 'Een verklaring die een variabele declareert', 'Een type lus dat code herhaalt', 'Een gegevensstructuur voor het opslaan van lijsten'],
      0,
      'Functies kapselen logica in, verminderen codeduplicatie en nemen parameters aan en geven waarden terug.',
    ],
    [
      'Wat is een variabele?',
      ['Een benoemde container voor het opslaan van een waarde die tijdens programma-uitvoering kan veranderen', 'Een verklaring die programmaflow controleert', 'Een wiskundige constante', 'Een functie die uitvoer afdrukt'],
      0,
      'Variabelen hebben typen (int, string, enz.) en bereik; hun waarden kunnen worden gewijzigd terwijl het programma wordt uitgevoerd.',
    ],
    [
      'Wat is het doel van een lus?',
      ['Een codeblok een opgegeven aantal keren of terwijl een voorwaarde waar is, herhalen', 'Een nieuwe functie definiëren', 'Een opmerking in code creëren', 'De uitvoering van een programma beëindigen'],
      0,
      'Veelgebruikte lussen zijn for, while en foreach; ze verminderen codeduplicatie door verklaringen voorwaardelijk uit te voeren.',
    ],
    [
      'Wat is de tijdscomplexiteit O(n)?',
      ['Lineaire tijd: de runtime groeit proportioneel met invoergrootte', 'Constante tijd: de runtime hangt niet af van invoergrootte', 'Logaritmische tijd: de runtime groeit als log n', 'Exponentiële tijd: de runtime groeit als 2^n'],
      0,
      'Een algoritme met O(n)-complexiteit duurt ongeveer n stappen voor n items; verdubbeling van n verdubbelt de runtime.',
    ],
    [
      'Wat is recursie?',
      ['Wanneer een functie zichzelf aanroept, rechtstreeks of indirect, om een kleinere instantie van hetzelfde probleem op te lossen', 'Een lusopdracht die code herhaalt', 'Een methode voor het opslaan van gegevens in een boomstructuur', 'Een techniek voor het versnellen van programma\'s'],
      0,
      'Recursie vereist een basisgeval (wanneer stoppen) en een recursief geval (hoe voortuitgang naar het basisgeval maken).',
    ],
    [
      'Wat is gegevensabstractie?',
      ['Implementatiedetails achter een interface verbergen, zodat gebruikers zonder inzicht kunnen interageren', 'Alle gegevens in geheugen opslaan zonder deze in te delen', 'Alle opmerkingen uit broncode verwijderen', 'Duplicaatkopieen van gegevens maken'],
      0,
      'Klassen, modules en abstracte gegevenstypen gebruiken allemaal abstractie om complexiteit te beheren door alleen het nodige bloot te stellen.',
    ],
    [
      'Wat is een gegevensstructuur?',
      ['Een georganiseerde manier om gegevens efficiënt op te slaan en op te halen, zoals arrays, gelinkte lijsten, stapels of bomen', 'Een variabeleverklaring', 'Een type lus', 'Een geheugentoewijzingstechniek'],
      0,
      'De keuze van gegevensstructuur beïnvloedt algoritmeperformance; verschillende structuren optimaliseren voor verschillende bewerkingen.',
    ],
    [
      'Wat is het doel van een sorteeralgoritme?',
      ['Elementen in een specifieke volgorde rangschikken, meestal oplopend of aflopend, om efficiënt zoeken in te schakelen', 'Dubbele elementen uit een lijst verwijderen', 'Een lijst in kleinere sublisten splitsen', 'Het aantal elementen tellen'],
      0,
      'Veel voorkomende sorteeringen zijn quicksort, mergesort en heapsort; keuze hangt af van gegevens en prestatievereisten.',
    ],
    [
      'Wat is een string in programmering?',
      ['Een reeks tekens die tekst vertegenwoordigt', 'Een type integervariabele', 'Een lus die code herhaalt', 'Een functie die rekenkundige bewerkingen uitvoert'],
      0,
      'Strings zijn onveranderbaar in veel talen (Java, Python); bewerkingen ervan creëren nieuwe strings in plaats van het origineel te wijzigen.',
    ],
    [
      'Wat is het verschil tussen een lijst en een tuple?',
      ['Een lijst is veranderbaar en een tuple is onveranderbaar in de meeste talen', 'Beide zijn identiek en kunnen onderling worden gebruikt', 'Een lijst bevat getallen en een tuple bevat tekst', 'Tuples zijn altijd sneller dan lijsten'],
      0,
      'Onveranderlijkheid van tuples stelt ze in staat als woordenboeksleutels te dienen en maakt gelijktijdige toegang veiliger.',
    ],
    [
      'Wat is een array?',
      ['Een verzameling elementen die op opeenvolgende geheugenlocaties worden opgeslagen, allemaal van hetzelfde type', 'Een verklaring die code herhaalt', 'Een functie die een waarde retourneert', 'Een type sorteeralgoritme'],
      0,
      'Arrays maken willekeurige toegang mogelijk (O(1) lookup per index) maar hebben vaste grootte in veel talen.',
    ],
    [
      'Wat is een gelinkte lijst?',
      ['Een gegevensstructuur waarbij elk element naar het volgende verwijst, wat dynamische grootte mogelijk maakt zonder voorafgaande toewijzing', 'Een manier om gegevens in oplopende volgorde te sorteren', 'Een techniek voor gegevenscompressie', 'Een methode voor het opslaan van multidimensionale arrays'],
      0,
      'Gelinkte lijsten hebben O(n)-toegangstijd maar laten efficiënte invoeging en verwijdering toe als de knoopwijzer al bekend is.',
    ],
    [
      'Wat is een hashtabel?',
      ['Een gegevensstructuur die een hashfunctie gebruikt om sleutels toe te wijzen aan waarden, wat snelle lookup inschakelt', 'Een methode voor het sorteren van arrays', 'Een boomachtige structuur voor hiërarchische gegevens', 'Een techniek voor geheugenbeheer'],
      0,
      'Hashtabellen bereiken O(1) gemiddelde-case lookup; botsingen moeten worden afgehandeld door chaining of probing.',
    ],
    [
      'Wat is een object in objectgeoriënteerd programmeren?',
      ['Een instantie van een klasse die gegevens (attributen) en gedrag (methoden) bevat', 'Een variabele die een getal opslaat', 'Een functie die een berekening uitvoert', 'Een type lus'],
      0,
      'Objecten bundelen staat en gedrag; overerving en polymorfisme laten codehergebruik en flexibele ontwerpen toe.',
    ],
    [
      'Wat is overerving in objectgeoriënteerd programmeren?',
      ['Een mechanisme waarbij een klasse (subklasse) attributen en methoden erft van een andere klasse (superklasse), codeduplicatie verminderend', 'Een manier om gegevens in geheugen op te slaan', 'Een techniek voor het versnellen van programma\'s', 'Een methode voor het organiseren van variabelen'],
      0,
      'Overerving maakt is-a-relaties mogelijk; een subklasse kan geërfde methoden negeren voor gespecialiseerd gedrag.',
    ],
  ],
};
