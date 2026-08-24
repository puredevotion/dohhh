import type { CategoryContent } from '../row.js';

/** Natuurkunde & astronomie, chemie & materialen, biologie & geneeskunde. */

export const PHYSICS: CategoryContent = {
  msc: [

    [
      'Volgens de equipartitiestelling hoort er hoeveel energie bij elke kwadratische vrijheidsgraad?',
      ['kT/2', 'kT', '3kT/2', '2kT'],
      0,
      'Vandaar 3kT/2 voor een monoatomair ideaal gas, dat drie translationele vrijheidsgraden heeft. De stelling faalt zodra de kwantumafstand van een mode groter wordt dan kT, wat de negentiende eeuw in verwarring bracht toen vibratiemodes "uitvroren".',
    ],
    [
      'Bij v = 0,6c, wat is de lorentzfactor?',
      ['1,25', '1,15', '1,67', '2,00'],
      0,
      '1/wortel(1 - 0,36) = 1,25. De 3-4-5-driehoek maakt dit de standaardwaarde op examens.',
    ],
    [
      'Voor een door zwaartekracht gebonden systeem in evenwicht, wat stelt de viriaalstelling?',
      [
        'Twee keer de gemiddelde kinetische energie plus de gemiddelde potentiële energie is nul',
        'Gemiddelde kinetische en potentiële energie zijn gelijk in grootte en teken',
        'De totale energie is gelijk aan de negatieve gemiddelde kinetische energie, voor elke potentiaal',
        'De gemiddelde potentiële energie is twee keer de totale energie van het systeem',
      ],
      0,
      '2<T> + <U> = 0 voor een omgekeerd-kwadratische kracht. Zo leidde Zwicky in 1933 de ontbrekende massa in de Coma-cluster af.',
    ],
    [
      'De Jeans-lengte legt wat vast?',
      [
        'De minimale schaal waarop een gaswolk instort onder zijn eigen zwaartekracht, tegen de druk in',
        'De straal waarop de stralingsdruk van een ster zijn zwaartekracht in evenwicht houdt',
        'De afstand waarover een schokgolf oplost in het interstellair medium',
        'De schaal waarop magnetische druk de thermische druk overtreft in een plasma',
      ],
      0,
      'Onder deze lengte doorkruisen geluidsgolven het gebied sneller dan het kan instorten, en wint de druk. Het is het uitgangspunt voor elk fragmentatie-argument in stervorming.',
    ],
    [
      'Wiens verplaatsingswet relateert wat aan elkaar?',
      [
        'De piekgolflengte van een zwarte-lichaamsspectrum, omgekeerd, aan zijn temperatuur',
        'Het totale uitgestraalde vermogen van een zwart lichaam aan de vierde macht van zijn temperatuur',
        'De spectrale stralingssterkte bij lange golflengtes aan temperatuur, lineair',
        'De fotonendichtheid van een zwart lichaam aan zijn temperatuur tot de derde macht',
      ],
      0,
      'lambdaₘₐₓ * T is ongeveer 2,898e-3 m*K. De vierdemachtsrelatie is Stefan-Boltzmann; de limiet bij lange golflengte is Rayleigh-Jeans.',
    ],
  ],
  phd: [
    [
      'Waaraan is de Chandrasekhar-limiet ongeveer gelijk?',
      [
        '0,6 zonsmassa\'s, typisch voor een koolstof-zuurstof witte dwerg',
        '1,4 zonsmassa\'s',
        '3,0 zonsmassa\'s, boven de Tolman-Oppenheimer-Volkoff-grens',
        '8,0 zonsmassa\'s, vergelijkbaar met de ondergrens voor kernineenstorting bij zware sterren',
      ],
      1,
      'Boven ongeveer 1,4 zonsmassa\'s kan de elektronendegeneratiedruk een witte dwerg niet meer ondersteunen, en stort deze in of ontploft hij.',
    ],
    [
      'Wat verbiedt het Pauli-uitsluitingsprincipe in de kwantummechanica?',
      [
        'Dat twee identieke fermionen dezelfde kwantumtoestand innemen',
        'Gelijktijdige nauwkeurige meting van positie en impuls, zoals beperkt door Heisenbergs onzekerheidsrelatie',
        'Elke overgang die pariteit schendt, zoals ook optreedt bij het verval via de zwakke kernkracht',
        'Superpositie van macroscopische toestanden, zoals beschreven in Schrödingers gedachte-experiment',
      ],
      0,
      'Het volgt uit de antisymmetrie van de fermionische golffunctie, en het is de reden dat materie ruimte inneemt.',
    ],
    [
      'Wat relateert de Tsiolkovsky-raketvergelijking aan elkaar?',
      [
        'Delta-v aan uitstootsnelheid en massaverhouding',
        'Stuwkracht aan kamerdruk',
        'Omlooptijd aan de halve lange as',
        'Ontsnappingssnelheid aan de straal van de planeet',
      ],
      0,
      'Delta-v is gelijk aan de uitstootsnelheid maal de natuurlijke logaritme van de begin- over de eindmassa, en dat is waarom trapraketten bestaan.',
    ],
    [
      'Waaruit ontstaat naar men aanneemt een type Ia-supernova?',
      [
        'Kernineenstorting van een zware ster aan het einde van zijn siliciumverbrandingsfase',
        'Thermonucleaire detonatie van een accreterende witte dwerg',
        'Een fusie van neutronensterren',
        'Een paarinstabiliteitsineenstorting',
      ],
      1,
      'Hun consistente piekluminositeit maakt ze tot standaardkaarsen voor kosmische afstandsmeting.',
    ],
    [
      'Wat is de fysische betekenis van het Reynoldsgetal?',
      [
        'De verhouding tussen inertiale en viskeuze krachten in een stroming',
        'De verhouding tussen thermische en impulsdiffusiviteit, gedefinieerd als het Prandtl-getal',
        'De verhouding tussen stroomsnelheid en geluidssnelheid, gedefinieerd als het Mach-getal',
        'De verhouding tussen opwaartse kracht en viskeuze kracht, gedefinieerd als het Grashof-getal',
      ],
      0,
      'De verhouding thermisch-tot-impuls is het Prandtl-getal; snelheid gedeeld door geluidssnelheid is het Mach-getal; opwaartse kracht gedeeld door viscositeit is Grashof.',
    ],
  ],
  professor: [
    [
      'Wat beschrijft de Gibbons-Hawking-temperatuur?',
      [
        'De temperatuur die verbonden is aan een de Sitter-horizon',
        'De temperatuur van de kosmische neutrino-achtergrond',
        'De kritische temperatuur van de elektroweak-overgang',
        'De piektemperatuur van een supernovaschok',
      ],
      0,
      'Een kosmologische horizon straalt, net als een zwart gat, bij een temperatuur die door zijn oppervlaktegravitatie wordt bepaald.',
    ],
    [
      'Wat parametriseert de Cabibbo-Kobayashi-Maskawa-matrix in het standaardmodel?',
      [
        'Mengeling tussen quarksmaak- en massa-eigentoestanden',
        'Neutrino-oscillatiekansen',
        'De koppelingen van het Higgsdeeltje aan gaugebosonen',
        'Kleurladinguitwisseling in gluonvertices',
      ],
      0,
      'Neutrinomenging wordt in plaats daarvan beschreven door de PMNS-matrix; de enkele onherleidbare fase van de CKM-matrix is de bron van CP-schending in het standaardmodel.',
    ],
    [
      'Wat is het Aharonov-Bohm-effect?',
      [
        'Een geladen deeltje krijgt een meetbare fase door een vectorpotentiaal in een veldvrij gebied',
        'Een magnetisch moment precesseert in een inhomogeen veld',
        'Een elektronenbundel splitst in een gradiëntmagneetveld',
        'Een supraleider stoot magnetische flux uit zijn binnenste onder een kritische aangelegde veldsterkte',
      ],
      0,
      'Het toont dat de potentialen, niet alleen de velden, fysische inhoud dragen - het fluxquantum verschijnt in het interferentiepatroon.',
    ],
    [
      'De Kelvin-Helmholtz-tijdschaal van de zon is van welke orde?',
      ['Tienduizend jaar', 'Tien miljoen jaar', 'Tien miljard jaar', 'Honderd jaar'],
      1,
      'Ongeveer 3 x 10^7 jaar. Kelvin gebruikte dit om te beargumenteren dat de zon jong was, wat een reëel probleem bleef totdat kernfusie werd begrepen.',
    ],
    [
      'Wat voorspelt het Kibble-Zurek-mechanisme?',
      [
        'De dichtheid van topologische defecten die ontstaan wanneer een systeem door een faseovergang wordt gequencht',
        'De snelheid van vacuümverval door bubbelnucleatie uit een metastabiel vals minimum van de potentiaal',
        'Het spectrum van primordiale zwaartekrachtsgolven',
        'Het begin van turbulentie in een superfluïdum',
      ],
      0,
      'De defectdichtheid schaalt met de quenchsnelheid, en dit is getest in vloeibare kristallen en koude atomen, en ook kosmologisch aangeroepen.',
    ],
  ],
};

export const CHEMISTRY: CategoryContent = {
  msc: [

    [
      'Hoe wordt een Lewiszuur gedefinieerd?',
      [
        'Een acceptor van een elektronenpaar',
        'Een protondonor in waterige oplossing',
        'Een stof die de hydroxide-activiteit van een oplossing verhoogt',
        'Elke stof die de geleidbaarheid van water verhoogt',
      ],
      0,
      'De Bronsted-definitie is die van het proton; Lewis generaliseert deze, en dat maakt het mogelijk dat BF3 als zuur telt zonder ook maar één waterstofatoom.',
    ],
    [
      'Wat relateert de Nernst-vergelijking aan elkaar?',
      [
        'Elektrodepotentiaal aan de verhouding van activiteiten van de geoxideerde en gereduceerde soort',
        'Celpotentiaal aan de totale lading die door het circuit is gegaan',
        'Reactiesnelheid aan de aangelegde overpotentiaal bij een elektrode',
        'Ionische geleidbaarheid aan de concentratie van een sterke elektrolyt bij oneindige verdunning',
      ],
      0,
      'De relatie tussen snelheid en overpotentiaal is Butler-Volmer; de geleidbaarheidsrelatie is Kohlrausch.',
    ],
    [
      'Wat beeldt een Jablonski-diagram af?',
      [
        'Elektronische toestanden en de stralende en niet-stralende overgangen daartussen',
        'De correlatie van moleculaire orbitalen langs een reactiecoördinaat',
        'De verdeling van vibratie-energieniveaus binnen één elektronische toestand',
        'De relatieve energieën van reactanten, overgangstoestand en producten',
      ],
      0,
      'Fluorescentie, fosforescentie, interne conversie en intersysteemovergang staan er allemaal in. Het reactiecoördinaatbeeld is een potentiële-energieoppervlak.',
    ],
    [
      'Wat meet een scalaire koppelingsconstante J in NMR?',
      [
        'Koppeling via bindingen tussen spins, onafhankelijk van de aangelegde veldsterkte',
        'Het verschil in chemische verschuiving tussen twee gekoppelde kernen, uitgedrukt in delen per miljoen',
        'De relaxatiesnelheid van transversale magnetisatie',
        'Dipolaire koppeling door de ruimte tussen naburige kernen',
      ],
      0,
      'Veldonafhankelijkheid is hoe je koppeling van verschuiving onderscheidt: meet het monster bij een ander veld en de multipletafstand in Hz verandert niet.',
    ],
    [
      'Wat geeft de Henderson-Hasselbalch-vergelijking?',
      [
        'De pH van een buffer, uit de pKa en de verhouding van conjugaatbase tot zuur',
        'De pH bij het equivalentiepunt van een titratie van een sterk zuur met een sterke base',
        'De oplosbaarheid van een matig oplosbaar zout uit zijn oplosbaarheidsproduct',
        'De fractie van een zwak zuur die is gedissocieerd bij oneindige verdunning',
      ],
      0,
      'Het is een benadering, en die faalt precies waar hij het vaakst achteloos wordt toegepast - zeer verdunde oplossingen en pH ver van de pKa.',
    ],
  ],
  phd: [
    [
      'Wat stelt het Hammond-postulaat?',
      [
        'De overgangstoestand lijkt op de soort die er in energie het dichtst bij ligt',
        'De reactiesnelheid is proportioneel aan de reactantconcentratie',
        'Substitutie verloopt met inversie bij het stereocentrum',
        'Aromatische systemen verzetten zich tegen additiereacties',
      ],
      0,
      'Bij een exotherme stap lijkt de overgangstoestand op het reactant; bij een endotherme stap op het product.',
    ],
    [
      'Welk resultaat levert een SN2-reactie op een stereocentrum op?',
      ['Racemisatie', 'Inversie van configuratie', 'Behoud van configuratie', 'Eliminatie'],
      1,
      'Aanval van achteren keert het centrum om - de Walden-inversie. SN1 verloopt via een vlak carbokation en racemiseert.',
    ],
    [
      'Wat is de coördinatiegeometrie van een d8-metaalcentrum in een typisch 16-elektronencomplex zoals het Vaska-complex?',
      ['Tetraëdrisch', 'Vierkant-planair', 'Octaëdrisch', 'Trigonaal-bipiramidaal'],
      1,
      'Vierkant-planair, wat de axiale positie openhoudt voor oxidatieve additie.',
    ],
    [
      'Waar verwijst het faseprobleem naar in röntgenkristallografie?',
      [
        'Diffractie meet intensiteiten maar niet de fasen die nodig zijn om de dichtheid te reconstrueren',
        'Kristallen veranderen van fase onder verhitting door de bundel',
        'Getweelingde kristallen geven overlappende roosters',
        'Anomale verstrooiing verschuift systematisch de gemeten posities van de diffractiepieken',
      ],
      0,
      'In de praktijk opgelost met zwaar-atoommethoden, anomale dispersie, moleculaire vervanging of directe methoden.',
    ],
    [
      'Welk polymerisatiemechanisme geeft een levend polymeer met een smalle moleculairgewichtsverdeling?',
      ['Vrije-radicaalpolymerisatie', 'Anionisch', 'Stapsgewijze condensatie', 'Kationische ringopening met kettingoverdracht'],
      1,
      'Anionische polymerisatie zonder terminatiestap laat elke keten tegelijk groeien, waardoor de dispersiteit dicht bij één blijft.',
    ],
  ],
  professor: [
    [
      'Wat voorspelt de Woodward-Hoffmann-regel voor een thermische pericyclische reactie met 4n elektronen?',
      [
        'Conrotatoire ringsluiting',
        'Disrotatoire ringsluiting',
        'Geen reactie onder thermische omstandigheden',
        'Behoud van orbitaalsymmetrie alleen onder fotochemische omstandigheden',
      ],
      0,
      'Thermische 4n-systemen verlopen conrotatoir; 4n+2-systemen disrotatoir, en fotochemische excitatie draait beide om.',
    ],
    [
      'Wat beschrijft het Marcus-omgekeerde-gebied?',
      [
        'De elektronenoverdrachtssnelheid neemt af als de drijvende kracht een optimum overschrijdt',
        'Omkering van de redoxpotentiaal bij hoge ionsterkte',
        'Omkering van de volgorde van liganduitsplitsing in tetraëdrische in plaats van octaëdrische complexen',
        'Anti-Arrhenius-gedrag bij enzymkatalyse',
      ],
      0,
      'Zodra de drijvende kracht de reorganisatie-energie overschrijdt, vertraagt verdere exergoniciteit de overdracht. Het duurde decennia om dit waar te nemen.',
    ],
    [
      'Wat is een Jahn-Teller-vervorming?',
      [
        'Een geometrische vervorming die de degeneratie van een elektronische grondtoestand opheft',
        'Een splitsing van vibratieniveaus door anharmoniciteit',
        'Een verschuiving in bindingslengte door isotopensubstitutie',
        'Een coöperatieve kanteling van hoekdelende octaëders door een perovskietrooster',
      ],
      0,
      'Een niet-lineair molecuul met een gedegenereerde elektronische grondtoestand kan in die geometrie niet stabiel zijn - klassiek gezien bij high-spin d4- en d9-complexen.',
    ],
    [
      'Wat voorspelt de Goldschmidt-tolerantiefactor in de vastestofchemie?',
      [
        'Of een ABX3-samenstelling een stabiele perovskietstructuur zal aannemen',
        'De oplosbaarheidsgrens van een dopant in een gastrooster',
        'De kritische straal voor coherente precipitatie',
        'De begintemperatuur van een diffusieloze martensitische faseovergang',
      ],
      0,
      'Hij vergelijkt ionstralen; waarden ver van één duwen de structuur naar vervormde of niet-perovskietalternatieven.',
    ],
    [
      'Wat voegt de Eyring-vergelijking toe ten opzichte van de Arrhenius-vergelijking?',
      [
        'Een overgangstoestandsformulering die enthalpie en entropie van activering geeft',
        'Een correctie voor diffusiegelimiteerde ontmoetingen',
        'Een expliciete behandeling van kwantummechanisch tunnelen door de reactiebarrière',
        'Een afhankelijkheid van ionsterkte',
      ],
      0,
      'De snelheid wordt uitgedrukt via de vrije activeringsenergie, zodat de entropische term zichtbaar wordt in plaats van verscholen in een pre-exponentiële factor.',
    ],
  ],
};

export const BIOLOGY: CategoryContent = {
  bscba: [
    [
      'Wat is de primaire functie van een enzym in een biochemische reactie?',
      [
        'De activeringsenergie verlagen en de reactiesnelheid vergroten',
        'Het evenwichtspunt van de reactie verschuiven',
        'Energie in de vorm van ATP leveren',
        'Als reactant fungeren die door de reactie wordt verbruikt',
      ],
      0,
      'Enzymen katalyseren reacties door Ea te verlagen, waardoor meer substraatmoleculen de barrière kunnen overwinnen. Ze veranderen het evenwicht niet.',
    ],
    [
      'Glycolyse, citroenzuurcyclus en elektronentransportketen zijn stadia van welk proces?',
      [
        'Aërobe cellulaire ademhaling',
        'Anaërobe fermentatie',
        'Fotosynthese',
        'Transcriptie en translatie',
      ],
      0,
      'Deze drie stadia oxideren glucose gezamenlijk en oogsten energie als ATP. Anaërobe ademhaling omzeilt de elektronentransportketen.',
    ],
    [
      'Welke structurele eigenschap onderscheidt DNA van RNA vooral?',
      [
        'DNA bevat deoxyribose en thymine; RNA bevat ribose en uracil',
        'DNA is enkelvoudig; RNA is dubbelstrengig',
        'DNA bevindt zich alleen in de kern; RNA bevindt zich alleen in het cytoplasma',
        'DNA wordt in de cel sneller gesynthetiseerd dan RNA',
      ],
      0,
      'De suiker (deoxyribose versus ribose) en de pyrimidinebasis (thymine versus uracil) onderscheiden deze nucleïnezuren chemisch.',
    ],
    [
      'Hoe heet het proces waarbij de volgorde van een mRNA wordt gebruikt om de volgorde van aminozuren in een eiwit te bepalen?',
      [
        'Translatie',
        'Transcriptie',
        'Replicatie',
        'Mutatie',
      ],
      0,
      'Translatie aan het ribosoom decodeert mRNA tot polypeptide met behulp van tRNA-adapters. Transcriptie is DNA naar mRNA; replicatie is DNA naar DNA.',
    ],
    [
      'Wat is de primaire uitkomst van mitose in een lichaamscel?',
      [
        'Productie van twee genetisch identieke diploïde dochtercellen',
        'Productie van vier genetisch verschillende haploïde cellen',
        'Uitwisseling van genetisch materiaal tussen homologe chromosomen',
        'Scheiding van zusterchromatiden bij het centromeer',
      ],
      0,
      'Mitose produceert twee identieke kopieën van de oudercel en bewaart het diploïde getal. Meiose produceert vier verschillende haploïde cellen.',
    ],
    [
      'Welk organellum is verantwoordelijk voor het grootste deel van de ATP-productie in een eukaryote cel onder aerobe omstandigheden?',
      [
        'Mitochondrion',
        'Chloroplast',
        'Ribosoom',
        'Golgi-apparaat',
      ],
      0,
      'Het mitochondriale binnenste membraan herbergt de elektronentransportketen en ATP-synthase, en produceert daarmee veel meer ATP dan glycolyse.',
    ],
    [
      'Wat is in fotosynthese de primaire bron van het zuurstofgas dat aan de atmosfeer wordt vrijgegeven?',
      [
        'Het splitsen van watermoleculen tijdens de lichtafhankelijke reacties',
        'De afbraak van glucose in de Calvincyclus',
        'De reductie van koolstofdioxide om suikers te vormen',
        'De oxidatie van chlorofylpigmenten',
      ],
      0,
      'Fotolyse van water bij fotosysteem II geeft O₂ vrij, doneert elektronen en levert protonen. De Calvincyclus produceert geen O₂.',
    ],
    [
      'Waardoor wordt de driedimensionale vorm van een eiwit vooral bepaald?',
      [
        'De volgorde en eigenschappen van zijn aminozuren',
        'Het aantal waterstofbruggen gevormd met water',
        'De pH en ionische sterkte van de cel',
        'De concentratie van ribosomen tijdens translatie',
      ],
      0,
      'Aminozuurvolgorde bepaalt vouwing via hydrofobe effect, disulfidebindingen, waterstofbruggen en elektrostatische interacties.',
    ],
    [
      'In een monohybride kruising van twee heterozygote ouders voor een dominante eigenschap, wat is de verwachte fenotypische verhouding?',
      [
        '3 dominant : 1 recessief',
        '1 dominant : 1 recessief',
        '2 dominant : 1 recessief',
        '1 dominant : 2 recessief',
      ],
      0,
      'Alleelsegregatie levert fenotypisch 25% homozygoot dominant, 50% heterozygoot en 25% homozygoot recessief op.',
    ],
    [
      'Wat is de primaire functie van de fosfolipidendubbellaag in een celmembraan?',
      [
        'Een selectieve barrière bieden die de in- en uitgang van stoffen beheerst',
        'Energie produceren voor actieve transportprocessen',
        'Nieuwe eiwitten voor de cel synthetiseren',
        'Genetische informatie voor de cel opslaan',
      ],
      0,
      'Amfipathische fosfolipiden vormen een hydrofobe kern met hydrofiele koppen in waterhoudende omgevingen, wat selectieve permeabiliteit mogelijk maakt.',
    ],
    [
      'Een receptoreiwit op een celoppervlak bindt een signaalmolecuul. Wat is het meest directe gevolg?',
      [
        'Een verandering in de conformatie van de receptor die een intracellulaire respons uitlokt',
        'Onmiddellijke afbraak van het signaalmolecuul tot afvalstoffen',
        'Synthese van nieuwe receptoreiwitten ter vervanging van de geactiveerde',
        'Transcriptie van alle genen in de celkern',
      ],
      0,
      'Ligandenbinding veroorzaakt conformatieverandering in de receptor, waardoor het kan interageren met signaaleiwitten of ionen verder stroomafwaarts.',
    ],
    [
      'Structuren in verschillende soorten delen een gemeenschappelijke voorouder en hebben een vergelijkbare botstructuur, maar verschillende functies. Hoe heten zulke structuren?',
      [
        'Homologe structuren',
        'Analoge structuren',
        'Vestigiale structuren',
        'Adaptieve structuren',
      ],
      0,
      'Homologe structuren duiden op gemeenschappelijke afkomst wanneer natuurlijke selectie een gedeelde voorouderlijke sjabloon voor verschillende doeleinden wijzigt.',
    ],
    [
      'Als individuen met een bepaalde eigenschap meer overleven en reproduceren dan anderen, wat gebeurt er over generaties?',
      [
        'De frequentie van die eigenschap in de populatie neemt toe',
        'Het mutatiepercentage voor die eigenschap versnelt',
        'De eigenschap wordt recessief in de populatie',
        'De eigenschap wordt alleen aan vrouwelijk nageslacht doorgegeven',
      ],
      0,
      'Ongelijk reproductief succes van individuen met gunstige eigenschappen veroorzaakt een verandering in de allelfrequentie - de essentie van natuurlijke selectie.',
    ],
    [
      'Wat doet DNA-polymerase tijdens DNA-replicatie?',
      [
        'Synthetiseert een nieuw DNA-streng door nucleotiden in de 5-prime naar 3-prime richting toe te voegen',
        'Ontwindt de dubbelhelix door waterstofbruggen tussen baseparen te breken',
        'Verwijdert korte RNA-primers synthetiseerd door primase',
        'Leest na en corrigeert niet-overeenkomende baseparen na voltooide replicatie',
      ],
      0,
      'DNA-polymerase katalyseert fosfodiesterbindingsvorming tussen binnenkomende deoxynucleotiden en het groeiende 3-OH-strengeinde.',
    ],
    [
      'Als een organisme heterozygoot is voor een gen waarbij één allel dominant is, wat zal het fenotype tonen?',
      [
        'Het fenotype geassocieerd met het dominante allel',
        'Het fenotype geassocieerd met het recessieve allel',
        'Een mengsel van beide fenotypes',
        'Welk fenotype ook het meest voorkomend is in de populatie',
      ],
      0,
      'Dominantie verwijst naar fenotypische expressie in een heterozygoot, niet naar de frequentie van het allel of prevalentie in de populatie.',
    ],
  ],
  msc: [

    [
      'Wat vertegenwoordigt de Michaelis-constante Km in de enzymkinetiek?',
      [
        'De substraatconcentratie waarbij de reactie op de helft van zijn maximale snelheid verloopt',
        'De maximale snelheid die haalbaar is bij verzadigende substraatconcentratie, wanneer elke plek bezet is',
        'Het omzettingsgetal van het enzym per actieve plek per seconde',
        'De dissociatieconstante van het enzym-productcomplex',
      ],
      0,
      'Km benadert bindingsaffiniteit alleen wanneer de katalytische stap traag verloopt ten opzichte van dissociatie; kcat/Km is de specificiteitsconstante.',
    ],
    [
      'Wat doet het spliceosoom?',
      [
        'Verwijdert introns uit pre-mRNA en verbindt de omringende exons',
        'Voegt de 7-methylguanosinekap toe aan het 5-prime-einde van een transcript',
        'Voegt de poly-A-staart toe tijdens transcriptieterminatie',
        'Controleert nieuw gesynthetiseerd mRNA tegen de matrijsstreng',
      ],
      0,
      'Een ribonucleoproteïnecomplex van vijf snRNP\'s. Groep-II-zelfsplitsende introns doen dezelfde chemie zonder spliceosoom nodig te hebben, wat de basis vormt voor het argument van gemeenschappelijke afstamming.',
    ],
    [
      'Wat detecteert een western blot?',
      [
        'Specifieke eiwitten, met antilichamen na elektroforese en overdracht naar een membraan',
        'Specifieke DNA-sequenties, met een gelabelde complementaire probe na overdracht vanaf een gel (Southern blot)',
        'Specifieke RNA-transcripten, met een gelabelde complementaire probe na overdracht vanaf een gel (Northern blot)',
        'Eiwit-eiwitinteracties in levende cellen, via bimoleculaire fluorescentiecomplementatie (BiFC)',
      ],
      0,
      'Southern is DNA, Northern is RNA - de grap is dat alleen Southern een achternaam is.',
    ],
    [
      'Wat meet een ED50 in de farmacologie?',
      [
        'De dosis die het gespecificeerde effect veroorzaakt bij de helft van de onderzochte populatie',
        'De dosis waarbij de helft van de receptorpopulatie bezet is, doorgaans aangeduid als EC50 of Kd',
        'De plasmaconcentratie waarbij de lichaamsklaring tot de helft van zijn maximale waarde daalt',
        'De dosis die dodelijk is voor de helft van de onderzochte populatie, aangeduid als de LD50',
      ],
      0,
      'Het receptorbezettingsgetal is EC50 of Kd; het dodelijke getal is LD50, en hun verhouding is de therapeutische index.',
    ],
    [
      'Wat beschrijft epistasie?',
      [
        'Een interactie waarbij één locus het fenotypische effect van een andere aanpast',
        'De aanwezigheid van twee verschillende allelen op hetzelfde locus in een diploïd organisme',
        'Één locus dat verschillende, ogenschijnlijk onverwante eigenschappen beïnvloedt',
        'De tendens van gekoppelde loci om samen overgeërfd te worden',
      ],
      0,
      'Eén locus dat verschillende eigenschappen beïnvloedt is pleiotropie; het samen overerven van nabijgelegen loci is koppeling. Epistasie is waarom associatiestudies met één locus zoveel minder variantie verklaren dan verwacht.',
    ],
  ],
  phd: [
    [
      'Wat beschrijft het Hardy-Weinberg-principe?',
      [
        'Allel- en genotypefrequenties in een niet-evoluerende populatie',
        'De snelheid van fixatie van neutrale mutaties',
        'De relatie tussen populatiegrootte en genetische drift',
        'Het evenwicht tussen mutatie en selectie',
      ],
      0,
      'De waarde ervan ligt in het zijn van een nulmodel: de manieren waarop echte populaties de aannames schenden, zijn de mechanismen van evolutie.',
    ],
    [
      'Wat is de rol van de PAM-sequentie in het CRISPR-Cas9-systeem?',
      [
        'Het is een kort motief naast het doelwit dat Cas9 moet herkennen om te knippen',
        'Het is het scaffold van de gids-RNA',
        'Het markeert de positie waar een homologiegestuurde herstelmatrijs moet aanhechten',
        'Het schakelt de promotor van het doelwit uit',
      ],
      0,
      'Voor SpCas9 is het protospacer-nabijgelegen motief 5-NGG-3, en het beperkt waar in een genoom je überhaupt kunt richten.',
    ],
    [
      'Wat is de chemiosmotische hypothese, en wie stelde hem voor?',
      [
        'ATP-synthese wordt aangedreven door een protongradiënt - Peter Mitchell',
        'ATP wordt gesynthetiseerd door substraatniveau-fosforylering - Hans Krebs',
        'Elektronentransport fosforyleert ADP direct - Otto Warburg',
        'Membraanpotentiaal drijft natriumexport aan - Jens Skou',
      ],
      0,
      'Voorgesteld in 1961 en jarenlang niet algemeen aanvaard; Mitchell ontving de Nobelprijs in 1978.',
    ],
    [
      'Welk celtype presenteert antigeen op MHC klasse II om helper-T-cellen te activeren?',
      ['Erytrocyten', 'Dendritische cellen', 'Neutrofielen', 'Bloedplaatjes'],
      1,
      'Dendritische cellen, samen met macrofagen en B-cellen. Klasse I zit op bijna alle kernhoudende cellen en presenteert aan cytotoxische T-cellen.',
    ],
    [
      'Wat is het founder-effect?',
      [
        'Verminderde genetische variatie in een populatie die door een klein aantal individuen is gesticht',
        'Selectie die het eerste allel dat in een populatie verschijnt bevoordeelt',
        'De tendens van fenotypisch dominante allelen om over generaties in frequentie toe te nemen',
        'Verlies van heterozygositeit na een populatie-expansie',
      ],
      0,
      'Een speciaal geval van een genetische bottleneck, en waarom bepaalde zeldzame allelen veelvoorkomend zijn in geografisch geïsoleerde populaties.',
    ],
  ],
  professor: [
    [
      'Wat beschrijft de Muller-ratel?',
      [
        'De onomkeerbare opeenhoping van schadelijke mutaties in een niet-recombinerende populatie',
        'De stapsgewijze fixatie van gunstige mutaties in een populatie onder sterke gerichte selectie',
        'De cyclische vervanging van allelen bij gastheer-parasietcoevolutie',
        'Het verlies van genfunctie na een verdubbeling van het gehele genoom',
      ],
      0,
      'Zonder recombinatie is er geen weg terug naar een minder gemuteerd genotype - een van de argumenten waarom seks blijft bestaan.',
    ],
    [
      'Waar verwijst het Warburg-effect in tumorbiologie naar?',
      [
        'Een verschuiving naar aerobe glycolyse met lactaatproductie ondanks beschikbare zuurstof',
        'Verhoogde oxidatieve fosforylering in hypoxisch weefsel',
        'Onderdrukking van apoptose door stabilisering van het mitochondriale membraan',
        'Voorkeursgebruik van vetzuuroxidatie boven glucose door snel prolifererende cellen',
      ],
      0,
      'Beschreven in de jaren 1920; de huidige interpretatie is dat het de biosynthese ondersteunt in plaats van louter inefficiënt ATP te genereren.',
    ],
    [
      'Wat is het inclusive-fitnesscriterium van verwantschapselectie, zoals geformaliseerd door Hamilton?',
      [
        'rB > C, waarbij r verwantschap is, B het voordeel voor de ontvanger, C de kosten voor de handelende partij',
        'B/C > N, waarbij N de populatiegrootte is',
        'rC > B, waarbij r de inteeltcoëfficiënt is',
        'B - C > 0, geëvalueerd op het niveau van de groep in plaats van dat van het individu',
      ],
      0,
      'De regel van Hamilton, 1964. Het is waarom een steriele werkster evolutionair zinvol kan zijn.',
    ],
    [
      'Wat is het mechanisme van centrale tolerantie in de immunologie?',
      [
        'Deletie of aanpassing van zelfreactieve lymfocyten tijdens ontwikkeling in thymus en beenmerg',
        'Onderdrukking van geactiveerde T-cellen door regulerende cytokinen in weefsel',
        'Fysieke uitsluiting van lymfocyten uit immuungeprivilegieerde plaatsen',
        'Antilichaamgemedieerde opruiming van zelfreactieve lymfocytklonen die in de perifere weefsels circuleren',
      ],
      0,
      'Onderdrukking door regulerende cytokinen en antilichaamgemedieerde opruiming in de periferie zijn allebei vormen van perifere tolerantie; centrale tolerantie gebeurt voordat de cel haar primaire orgaan ooit verlaat.',
    ],
    [
      'Wat betekent de term "prion", en wat is de kern van het mechanisme?',
      [
        'Een misgevouwen eiwit dat de misvouwing van zijn normale tegenhanger als sjabloon oplegt',
        'Een subviraal RNA dat zich repliceert zonder eiwitmantel',
        'Een defect virus dat een helper nodig heeft om te repliceren',
        'Een zelfsplitsend intron dat in staat is tot horizontale overdracht tussen onverwante genomen',
      ],
      0,
      'De eiwit-alleen-hypothese van Prusiner. Het RNA-agens zonder mantel is een viroïde.',
    ],
  ],
};
