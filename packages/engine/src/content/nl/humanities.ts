import type { CategoryContent } from '../row.js';

/**
 * Geschiedenis, Aardrijkskunde, Literatuur.
 *
 * Calibratie, wat het moeilijke deel is van het samenstellen van deze inhoud:
 *  - graduate: een ontwikkelde niet-specialist heeft het vaker goed dan fout.
 *  - phd: je hebt het vakgebied gestudeerd, of je gokt.
 *  - professor: je werkt in het vakgebied, of je zet vijftien punten in op een
 *    gevoel, wat precies de essentie van het spel is.
 */

export const HISTORY: CategoryContent = {
  graduate: [

    [
      'De Vrede van Utrecht (1713) beëindigde welke oorlog?',
      [
        'De Spaanse Successieoorlog',
        'De Oostenrijkse Successieoorlog',
        'De Negenjarige Oorlog, ook bekend als de Oorlog van de Liga van Augsburg',
        'De Grote Noordse Oorlog tussen Zweden en zijn Baltische buren',
      ],
      0,
      'Het scheidde de Franse en Spaanse kronen permanent en gaf Groot-Brittannië Gibraltar en de asiento - het slavencontract dat de volgende eeuw van Atlantische handel vormgaf.',
    ],
    [
      'De Diplomatieke Revolutie van 1756 verbond Oostenrijk met welke macht?',
      ['Frankrijk', 'Pruisen', 'Groot-Brittannië', 'Het Ottomaanse Rijk'],
      0,
      'Kaunitz keerde twee eeuwen van Habsburgs-Bourbonse vijandschap om om Pruisen te isoleren, en Groot-Brittannië koos in plaats daarvan Pruisen - het bondgenootschap waarbinnen de Zevenjarige Oorlog werd uitgevochten.',
    ],
    [
      'Welk rijk werd verslagen in de Slag bij Manzikert in 1071?',
      [
        'Het Byzantijnse Rijk',
        'Het Abbasidische Kalifaat, destijds in verval onder Turkse militaire controle',
        'Het Bulgaarse Rijk onder zijn laatste heersers uit de Krum-lijn',
        'Het Fatimidische Kalifaat, tijdens een veldtocht noordwaarts vanuit Syrië',
      ],
      0,
      'Seltsjoekse troepen namen keizer Romanos IV gevangen. De nederlaag deed militair minder ertoe dan politiek: de burgeroorlogen die volgden openden Anatolië voor kolonisatie.',
    ],
    [
      'De Japanse afschaffing van de domeinen en de invoering van prefecturen (haihan-chiken) vond plaats in welk jaar?',
      ['1871', '1868', '1877', '1889'],
      0,
      'Drie jaar na de Restauratie. De daimyo werden afgekocht met een adellijke titel en pensioen, en zo werd een feodale orde ontmanteld zonder een tweede burgeroorlog.',
    ],
    [
      'Great Zimbabwe was de hoofdstad van een staat gebouwd door welk volk?',
      [
        'De Shona',
        'Het Koninkrijk Kush, dat zich vanaf de midden-Nijl zuidwaarts uitbreidde',
        'De Ashanti, in de loop van hun westwaartse goudhandel',
        'De Songhai, aan de zuidgrens van hun Sahel-rijk',
      ],
      0,
      'Het bloeide van ongeveer de elfde tot de vijftiende eeuw op vee en de goudhandel over de Indische Oceaan. Negentiende-eeuwse toeschrijvingen aan buitenlandse bouwers waren koloniale politiek, geen archeologie.',
    ],
  ],
  phd: [
    [
      'Welke dynastie financierde de schatvloten onder bevel van Zheng He?',
      ['Song', 'Yuan', 'Ming', 'Qing'],
      2,
      'Zeven reizen tussen 1405 en 1433, onder de Yongle- en Xuande-keizers van de Ming.',
    ],
    [
      'In de Slag bij Ain Jalut in 1260, wie hield de Mongoolse opmars tegen?',
      ['De Ayyubiden', 'De Mammelukken van Egypte', 'De Seltsjoeken van Rum', 'De Tempelridders'],
      1,
      'Een Mammelukkenleger onder Qutuz en Baybars verslo de Mongolen in Galilea - hun eerste serieuze strategische terugslag in de regio.',
    ],
    [
      'De Vrede van Augsburg (1555) legde welk principe vast?',
      [
        'Vrijheid van individueel geweten',
        'De heerser van een gebied bepaalt de religie ervan',
        'Pauselijke suprematie boven het keizerlijk recht',
        'Verdraagzaamheid tegenover het calvinisme in het gehele Rijk',
      ],
      1,
      'Cuius regio, eius religio - en opmerkelijk genoeg gold dit alleen voor het lutheranisme, niet voor het calvinisme, wat deels verklaart waarom de Dertigjarige Oorlog uitbrak.',
    ],
    [
      'De Zanj-opstand van 869-883 vond plaats binnen welke staat?',
      ['Het Omajjadenkalifaat', 'Het Abbasidische Kalifaat', 'Het Fatimidische Kalifaat', 'Het Sassanidische Rijk'],
      1,
      'Een opstand van tot slaaf gemaakte arbeiders in de zoutmoerassen van Zuid-Irak, die tijdelijk Basra in handen hield.',
    ],
    [
      'Het Edict van Nantes (1598) werd uitgevaardigd door welke vorst?',
      ['Frans I', 'Karel IX', 'Hendrik IV', 'Lodewijk XIII'],
      2,
      'Hendrik IV verleende de hugenoten aanzienlijke rechten; Lodewijk XIV herroep het edict in 1685.',
    ],
  ],
  professor: [
    [
      'De Vrede van Zuhab (1639) legde een langdurige grens vast tussen welke twee machten?',
      [
        'Het Ottomaanse Rijk en Safavidisch Perzië',
        'Het Ottomaanse Rijk en de Oostenrijkse Habsburgers, na de Lange Turkenoorlog',
        'Moskovië en het Krim-Khanaat, langs de zuidelijke steppegrens',
        'De Mogols onder Aurangzeb en de Safaviden om Kandahar',
      ],
      0,
      'Het beëindigde ongeveer 150 jaar Ottomaans-Safavidische oorlogvoering en de grenslijn volgt nog altijd grofweg de moderne grens tussen Irak en Iran.',
    ],
    [
      'De Schenking van Pepijn (756) droeg gebied over aan wie?',
      ['De Longobardische koningen', 'Het pausdom', 'De abdij van Saint-Denis', 'Het Byzantijnse exarchaat'],
      1,
      'Pepijn de Korte droeg het voormalige exarchaat van Ravenna over aan de paus, de kiem van de Kerkelijke Staat.',
    ],
    [
      'Het Verdrag van Tordesillas (1494) legde de scheidingslijn hoe ver ten westen van de Kaapverdische Eilanden?',
      ['100 mijl', '270 mijl', '370 mijl', '500 mijl'],
      2,
      'De pauselijke bul van 1493 sprak van 100 mijl; Portugal onderhandelde dit op tot 370, en zo kwam Brazilië bij Portugal terecht.',
    ],
    [
      'Wie schreef de Muqaddimah, een vroege systematische verhandeling over geschiedschrijving en sociale cohesie?',
      ['Al-Masudi', 'Ibn Khaldun', 'Al-Tabari', 'Ibn Battuta'],
      1,
      'Geschreven in 1377 als inleiding op zijn universele geschiedenis, opgebouwd rond het concept asabiyyah, of groepssolidariteit.',
    ],
    [
      'De Kalmar-Unie van 1397 verbond Denemarken, Noorwegen en welk derde rijk?',
      ['Zweden', 'Finland', 'Schotland', 'Pommeren'],
      0,
      'Zweden verliet de unie definitief in 1523; Noorwegen bleef tot 1814 aan Denemarken verbonden.',
    ],
  ],
};

export const GEOGRAPHY: CategoryContent = {
  graduate: [

    [
      'Waaraan is de Coriolisparameter f gelijk?',
      [
        'Twee keer de hoeksnelheid van de aarde maal de sinus van de breedtegraad',
        'De hoeksnelheid van de aarde maal de cosinus van de breedtegraad',
        'De verhouding tussen de inertiaal- en gravitatieversnelling op een bepaalde breedtegraad',
        'De veranderingssnelheid van de hoeksnelheid ten opzichte van de breedtegraad',
      ],
      0,
      'f = 2*Omega*sin(phi), waarom hij nul wordt bij de evenaar - en waarom tropische cyclonen daar niet kunnen ontstaan.',
    ],
    [
      'De gemiddelde omgevingslapse rate in de troposfeer bedraagt ongeveer wat?',
      ['6,5 graden C per km', '9,8 graden C per km', '3,0 graden C per km', '15 graden C per km'],
      0,
      '9,8 is de droogadiabatische snelheid, een eigenschap van het luchtpakket zelf en niet van de omgevende lucht; de verzadigde snelheid ligt dichter bij 5.',
    ],
    [
      'Wat meet de Strahler-stroomorde?',
      [
        'De hiërarchische positie van een riviersegment binnen een vertakkend afwateringsnetwerk',
        'De afvoer van een rivier ten opzichte van haar capaciteit bij bakvol water',
        'De verhouding tussen het totale reliëf van een bekken en zijn langste horizontale afmeting, uitgedrukt als een verhang',
        'De sedimentkorrelgrootte die een rivier kan vervoeren',
      ],
      0,
      'Twee eerste-orde beken vormen samen een tweede-orde beek; als een eerste-orde beek uitmondt in een tweede-orde beek blijft die tweede-orde. Dit vormt de basis van Hortons wetten van afwateringssamenstelling.',
    ],
    [
      'Het Grote Slenksysteem loopt van Libanon zuidwaarts tot ongeveer welk land?',
      [
        'Mozambique',
        'Kenia, eindigend bij het zuidelijke uiteinde van de Gregory-slenk',
        'Egypte, waar de Rode-Zeeslenk samenkomt met de Nijl',
        'Zambia, aan de westelijke arm van het Oost-Afrikaanse systeem',
      ],
      0,
      'Zo\'n 6.000 km van de Beqaa tot centraal Mozambique, al is het een kwestie van definitie en geen feit of het Levantijnse deel bij hetzelfde systeem hoort.',
    ],
    [
      'Welk diagnostisch kenmerk levert podzolisatie op?',
      [
        'Een gebleekte uitspoelingshorizont, waaruit ijzer en aluminium naar beneden zijn uitgeloogd',
        'Een kalkkorst gevormd door opwaartse capillaire beweging',
        'Een kleirijke horizont gevormd door verwering ter plaatse van primaire mineralen onder een vochtig regime',
        'Een donkere, basenrijke bovengrond met een kruimelstructuur',
      ],
      0,
      'Organische zuren uit naaldstrooisel binden ijzer en aluminium en voeren ze af naar een roestkleurige inspoelingshorizont. De kalkkorst is een calcreet, uit een aride regime.',
    ],
  ],
  phd: [
    [
      'De Danakil-laagvlakte, een van de warmste plekken op aarde, ligt binnen welk tektonisch kenmerk?',
      ['Het Afar-drielandenpunt', 'De Dode-Zeetransformbreuk', 'De Anatolische breuk', 'De Zagros-plooiengordel'],
      0,
      'Daar komen drie spreidingscentra samen - de Rode Zee, de Golf van Aden en de Oost-Afrikaanse slenken.',
    ],
    [
      'Waarom is een föhnwind warm en droog?',
      [
        'Adiabatische opwarming tijdens de daling aan de lijzijde van een gebergte',
        'Wrijvingswarmte over ruw terrein',
        'Advectie van tropische luchtmassa\'s',
        'Stralingsopwarming van de atmosferische grenslaag boven kaal terrein',
      ],
      0,
      'Lucht verliest vocht bij het opstijgen aan de windzijde en warmt dan op de droogadiabatische snelheid weer op tijdens de afdaling.',
    ],
    [
      'Wat is het grootste endorheïsche waterlichaam in de wereld?',
      ['De Aralzee', 'De Kaspische Zee', 'Het Tsjaadmeer', 'De Dode Zee'],
      1,
      'Endorheïsch betekent dat er geen afwatering naar de oceaan is. De Kaspische Zee bedekt ongeveer 371.000 vierkante kilometer.',
    ],
    [
      'Aan welk oceanisch kenmerk worden de milde winters van Noordwest-Europa doorgaans toegeschreven?',
      ['De Canarische stroom', 'De Noord-Atlantische stroom', 'De Labradorstroom', 'De Antarctische Circumpolaire Stroom'],
      1,
      'De Noord-Atlantische stroom, de voortzetting van de Golfstroom, al doen de overheersende westenwinden boven een warme oceaan ook veel werk.',
    ],
    [
      'Wat scheidt de Wallace-lijn?',
      [
        'Aziatische en Australaziatische faunagebieden',
        'Tropische en gematigde neerslagregimes',
        'Continentale en oceanische korst in de Stille Oceaan',
        'Noordelijke en zuidelijke monsoonsystemen',
      ],
      0,
      'Getrokken door Alfred Russel Wallace tussen Bali en Lombok, volgt hij een diepe zeetrog die landdieren tegenhield.',
    ],
  ],
  professor: [
    [
      'De Mohorovicic-discontinuïteit markeert de grens tussen welke twee lagen?',
      ['Binnen- en buitenkern', 'Aardkorst en mantel', 'Boven- en ondermantel', 'Lithosfeer en asthenosfeer'],
      1,
      'Ontdekt in 1909 door een scherpe toename van de seismische P-golfsnelheid onder de aardkorst.',
    ],
    [
      'De obliquiteitscomponent van de Milankovitch-cycli heeft ongeveer welke periode?',
      ['21.000 jaar', '41.000 jaar', '100.000 jaar', '400.000 jaar'],
      1,
      'De aardaskanteling varieert tussen ongeveer 22,1 en 24,5 graden in een cyclus van zo\'n 41.000 jaar; precessie bedraagt ongeveer 21.000 en excentriciteit ongeveer 100.000.',
    ],
    [
      'Wat is een nunatak?',
      [
        'Een top die door een ijskap heen steekt',
        'Een smeltwaterkanaal onder een gletsjer',
        'Een rug van glaciaal puin aan een ijsrand',
        'Een bekken uitgeschuurd door een voormalige ijsstroom',
      ],
      0,
      'Een Groenlands Inuit-woord. De puinrug is een morene; het subglaciale kanaal is een esker wanneer het zich met sediment vult.',
    ],
    [
      'Waar verloopt de postglaciale isostatische opheffing momenteel het snelst?',
      ['De Botnische Golf', 'Patagonië', 'De Canadese Rocky Mountains', 'De Schotse Hooglanden'],
      0,
      'De noordelijke Oostzee stijgt met ongeveer 8-10 mm per jaar terwijl de mantel zich herstelt na het Fennoscandische ijsschild.',
    ],
    [
      'Wat brengt de Hjulström-curve in de fluviale geomorfologie met elkaar in verband?',
      [
        'Stroomsnelheid met erosie, transport en afzetting naar korrelgrootte',
        'Kanaalhelling met meanderende golflengte en de kromtestraal van elke bocht',
        'Afvoer met het oppervlak van het afwateringsbekken',
        'Sedimentopbrengst met vegetatiebedekking',
      ],
      0,
      'Het contra-intuïtieve kenmerk is dat fijne klei hogere snelheden nodig heeft om te eroderen dan zand, omdat cohesie de deeltjes samenhoudt.',
    ],
  ],
};

export const LITERATURE: CategoryContent = {
  graduate: [

    [
      'Welke term gebruikte Bachtin voor het naast elkaar bestaan van verschillende sociale stemmen binnen een roman?',
      [
        'Heteroglossie',
        'Polyfonie, wat verwijst naar het formele contrapunt van plotlijnen binnen één werk',
        'Vervreemding, het vreemd maken van gewone waarneming',
        'Interpellatie, het aanroepen van een subject door ideologie',
      ],
      0,
      'Polyfonie is ook van hem, maar duidt de relatie tussen bewustzijnen aan; vervreemding is van Sjklovski en interpellatie is van Althusser.',
    ],
    [
      'De kritische term "objective correlative" wordt vooral geassocieerd met wie?',
      [
        'T.S. Eliot',
        'I.A. Richards, tijdens het ontwikkelen van de praktische kritiek',
        'William Empson, in zijn verhandeling over ambiguïteit',
        'Cleanth Brooks, in zijn verdediging van het gedicht als autonoom object',
      ],
      0,
      'Uit het Hamlet-essay van 1919. Eliot ontleende de uitdrukking aan Washington Allston, een van de beter gedocumenteerde gevallen van een geleende term die zijn bron overleeft.',
    ],
    [
      'Wat is een kenning in het Oudengels en Oudnoors vers?',
      [
        'Een samengestelde omschrijving die een eenvoudig zelfstandig naamwoord vervangt, zoals "walvisweg" voor de zee',
        'De cesuur die elke versregel in twee halfregels verdeelt',
        'Het alliteratiepatroon dat de beklemtoonde lettergrepen over de twee halfregels van een versregel verbindt',
        'Een vast epitheton dat doorheen een gedicht aan een held wordt gehecht',
      ],
      0,
      'De cesuur en de alliteratie vormen het metrische raamwerk waarbinnen de kenning past; het vaste epitheton is het Homerische procedé.',
    ],
    [
      'Wie schreef De Meester en Margarita?',
      [
        'Michail Boelgakov',
        'Boris Pasternak, in de jaren voor Doktor Zjivago',
        'Andrej Platonov, wiens belangrijkste werken ook onderdrukt werden',
        'Isaac Babel, voor zijn arrestatie en executie in 1940',
      ],
      0,
      'Geschreven doorheen de jaren 1930 en niet ongecensureerd gepubliceerd in de Sovjet-Unie tot 1973 - de zin "een manuscript brandt niet" is het commentaar van de roman op precies dat.',
    ],
    [
      'Wat onderscheidt focalisatie in de narratologie van Genette?',
      [
        'Wie waarneemt, in tegenstelling tot wie vertelt',
        'De volgorde van gebeurtenissen in het verhaal, in tegenstelling tot de volgorde in de geschiedenis',
        'De frequentie waarmee een gebeurtenis verteld wordt ten opzichte van hoe vaak ze plaatsvond',
        'De relatie tussen vertelduur en verhaalduur',
      ],
      0,
      'De gezichtspuntvraag losgemaakt van de stemvraag - de andere drie opties zijn zijn categorieën van orde, frequentie en duur.',
    ],
  ],
  phd: [
    [
      'Terza rima, het verstrengelde drieregelige rijmschema, is de versvorm van welk werk?',
      ['Paradise Lost', 'De Goddelijke Komedie', 'The Faerie Queene', 'Orlando Furioso'],
      1,
      'Dante lijkt het zelf te hebben uitgevonden; de keten ABA BCB CDC bindt het hele gedicht samen.',
    ],
    [
      'Wie schreef The Life and Opinions of Tristram Shandy, Gentleman?',
      ['Henry Fielding', 'Tobias Smollett', 'Laurence Sterne', 'Samuel Richardson'],
      2,
      'Gepubliceerd tussen 1759 en 1767, en nog steeds de formeel meest ontregelende roman in het Engels.',
    ],
    [
      'De Kokinshu is een bloemlezing van wat?',
      ['Chinese gereguleerde verzen', 'Japanse waka-poëzie', 'Koreaanse sijo', 'Sanskriet hoftoneel'],
      1,
      'Samengesteld rond 905 na Christus, en eeuwenlang het model voor de Japanse poëtische smaak.',
    ],
    [
      'Wie schreef Het boek der rusteloosheid?',
      ['Fernando Pessoa', 'Miguel de Unamuno', 'Italo Svevo', 'Robert Walser'],
      0,
      'Postuum samengesteld uit een koffer met fragmenten, toegeschreven aan zijn heteroniem Bernardo Soares.',
    ],
    [
      'Wat is anagnorisis in de Poëtica van Aristoteles?',
      ['Een omkering van het lot', 'Een herkenning of ontdekking', 'Een zuivering van emoties', 'Een schending van de decorum'],
      1,
      'Het moment van herkenning. Peripetie is de omkering; catharsis is de zuivering.',
    ],
  ],
  professor: [
    [
      'De Hypnerotomachia Poliphili (1499) werd gedrukt door wie?',
      ['Johannes Gutenberg', 'Aldus Manutius', 'William Caxton', 'Christoffel Plantijn'],
      1,
      'De Aldijnse drukkerij in Venetië, nog altijd aangehaald als een van de mooiste boeken ooit gedrukt.',
    ],
    [
      'Waarover gaat de Sanskriet Natyashastra voornamelijk?',
      ['Grammatica', 'Toneelkunst en opvoering', 'Staatsbestuur', 'Metriek en prosodie'],
      1,
      'Toegeschreven aan Bharata; het behandelt toneel, dans en muziek, en introduceert de rasa-theorie.',
    ],
    [
      'Wat duidt trobar clus aan in de Occitaanse troubadourspoëtica?',
      [
        'Een bewust hermetische, moeilijke stijl',
        'Een dialoog tussen twee dichters',
        'Een dageraadslied gezongen door geliefden op het moment van afscheid',
        'Een gedicht van feodale klacht',
      ],
      0,
      'Gesloten compositie, in tegenstelling tot trobar leu, de lichte of open stijl. Het dageraadslied is de alba; de dialoog is de tenso.',
    ],
    [
      'Zaum was een dichterlijke taal geassocieerd met welke beweging?',
      ['Italiaans futurisme', 'Russisch futurisme', 'Frans symbolisme', 'Duits expressionisme'],
      1,
      'Chlebnikov en Krutsjonych bedachten de term - een klankgedreven taal "voorbij de betekenis".',
    ],
    [
      'Het Epos van Sundiata behoort tot de mondelinge traditie van welk volk?',
      ['De Yoruba', 'De Mande', 'De Amhara', 'De Zulu'],
      1,
      'Overgeleverd door Mande-griots, verhaalt het over de stichting van het Malinese Rijk in de 13e eeuw.',
    ],
  ],
};
