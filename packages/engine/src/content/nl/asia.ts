import type { CategoryContent } from '../row.js';

/**
 * Centraal-Aziatische geschiedenis, Oost-Aziatische ontwikkeling.
 *
 * Twee categorieën die het oorspronkelijke twaalftal slecht behandelde:
 * "Geschiedenis & beschavingen" betekende in de praktijk Europese en
 * mediterrane geschiedenis met een Zheng He-vraag voor de balans, wat een
 * echte dekkingsscheefheid is en geen afrondingsfout. Dit zijn afzonderlijke
 * pakketten omdat de specialistische literatuur ook gescheiden is.
 *
 * Calibratie zoals in `DIFFICULTY_TIERS`: graduate is masterniveau in het
 * vakgebied, phd is een specialist, professor volgt de actuele literatuur.
 */

export const CENTRAL_ASIA: CategoryContent = {
  graduate: [
    [
      'De Slag bij Talas in 751 werd uitgevochten tussen Tang-troepen en welke macht?',
      ['Het Abbasidische kalifaat', 'Het Omajjadische kalifaat', 'Het Tibetaanse Rijk', 'Het Oeigoerse Khaganaat'],
      0,
      'Dit gebeurde drie jaar na de Abbasidische revolutie en markeerde de praktische grens van Tang-invloed ten westen van de Pamir, eerder dan een beslissende nederlaag.',
    ],
    [
      'Waarom zijn de Sogdiërs historisch vooral van belang?',
      [
        'Als het handelsnetwerk wiens taal de lingua franca van de Zijderoutehandel werd',
        'Als de dynastie die Transoxanië onder één bestuur verenigde',
        'Als de nomadenconfederatie die de Scythen van de steppe verdreef',
        'Als de kloosterorde die het boeddhisme naar China bracht',
      ],
      0,
      'Sogdische brieven en contracten uit Dunhuang en de berg Mugh zijn de reden dat we zoveel weten over de mechanismen van die handel.',
    ],
    [
      'Welke staat vernietigde Dzjengis Khan tijdens de veldtocht van 1219-1221?',
      [
        'Het Khwarezmische Rijk',
        'Het Ghuridische Sultanaat',
        'Het Seltsjoekse Sultanaat van Rum',
        'Het Samanidische Emiraat',
      ],
      0,
      'De aanleiding was de moord op een Mongoolse gezantschap in Otrar. Merv, Boekhara en Samarkand werden achtereenvolgens geplunderd.',
    ],
    [
      'In welke stad vestigde Timoer zijn hoofdstad?',
      ['Samarkand', 'Boekhara', 'Herat', 'Balkh'],
      0,
      'Zijn kleinzoon Ulugh Beg bouwde daar de sterrenwacht; Herat werd onder Shah Rukh de Timoeridische culturele hoofdstad.',
    ],
    [
      'De negentiende-eeuwse "Great Game" beschrijft rivaliteit tussen welke twee machten?',
      [
        'Groot-Brittannië en Rusland',
        'Rusland en Qing-China',
        'Groot-Brittannië en het Ottomaanse Rijk',
        'Rusland en Perzië',
      ],
      0,
      'De term werd populair gemaakt door Kipling; het historiografische debat gaat over hoeveel ervan strategische realiteit was en hoeveel werd geproduceerd door de mannen die de rapporten schreven.',
    ],
  ],
  phd: [
    [
      'De Kara-Khitai (Westelijke Liao) werd gesticht door vluchtelingen na de val van welk rijk?',
      [
        'De Khitaanse Liao-dynastie, na haar verovering door de Jurchen Jin',
        'De Tangut Westelijke Xia, na de Mongoolse invasies',
        'Het Oeigoerse Khaganaat, na zijn nederlaag tegen de Jenisej-Kirgiezen',
        'De Noordelijke Song, na het verlies van Kaifeng',
      ],
      0,
      'Yelü Dashi leidde hen in de jaren 1120 naar het westen. Hun overwinning op de Seltsjoeken bij Qatwan in 1141 is een van de mogelijke bronnen voor de Prester John-legende.',
    ],
    [
      'Wat was de yasa?',
      [
        'Het geheel van Mongools recht en gewoonte dat aan Dzjengis Khan wordt toegeschreven',
        'De belasting die Mongoolse bestuurders aan sedentaire bevolkingen oplegden',
        'Het postrelaisysteem dat de Mongoolse leengebieden met elkaar verbond',
        'De raad van prinsen die een nieuwe khan koos',
      ],
      0,
      'Er is geen complete tekst overgeleverd, waardoor zowel de inhoud als het bestaan als geschreven wetboek omstreden zijn. Het relaisysteem is de yam; de raad is de quriltai.',
    ],
    [
      'Hoe wordt de Jadid-beweging in Russisch Centraal-Azië het best gekarakteriseerd?',
      [
        'Als een islamitisch-modernistische hervormingsbeweging rond nieuw-methodisch onderwijs en gedrukte journalistiek',
        'Als een soefistisch revivalisme-netwerk dat Russische bestuurlijke penetratie weerstond',
        'Als een pan-Turkse politieke partij die aansluiting bij het Ottomaanse Rijk zocht',
        'Als een clericale factie die het madrasa-curriculum tegen hervorming verdedigde',
      ],
      0,
      'Genoemd naar usul-i jadid, "de nieuwe methode". De Sovjetstaat coöpteerde de Jadids eerst en vernietigde ze vervolgens tijdens de zuiveringen.',
    ],
    [
      'Wat was de Basmachi-beweging?',
      [
        'Gewapend verzet tegen de bolsjewistische en vroege Sovjetheerschappij in heel Turkestan',
        'Een Kazachse autonomistische beweging die onderhandelde met de Voorlopige Regering',
        'Een confederatie van Turkmeense stammen die zich verzette tegen de Russische verovering in de jaren 1880',
        'Een hervormingsgezinde factie binnen het emiraat Boekhara die een grondwet nastreefde',
      ],
      0,
      'De naam komt van een pejoratief dat "bandiet" betekent. De beweging liep van ongeveer 1916 tot begin jaren 1930 en was eerder een reeks lokale opstanden dan één beweging.',
    ],
    [
      'Door wie werd het Zunghaarse Khanaat in de jaren 1750 vernietigd?',
      [
        'De Qing onder de Qianlong-keizer',
        'Het Russische Rijk onder Elizabeth',
        'De Kazachse Middenhorde',
        'Het Durrani-Rijk onder Ahmad Shah',
      ],
      0,
      'De veldtocht en de daaropvolgende demografische ramp creëerden wat de Qing daarna Xinjiang noemde - "de nieuwe grens".',
    ],
  ],
  professor: [
    [
      'Wat concludeerde de genomische studie van 2021 naar de mummies uit de bronstijd in het Tarimbekken?',
      [
        'Ze stammen grotendeels af van een lokale Ancient North Eurasian-populatie, genetisch geïsoleerd maar cultureel verbonden',
        'Het waren Indo-Europese migranten uit de Afanasievo-cultuur van het Altaigebergte, die met wielvoertuigen en zuivelbewerking aankwamen',
        'Ze stammen voornamelijk af van Bactria-Margiana-landbouwers die naar het noorden trokken',
        'Ze vertegenwoordigen een vroege vermenging van Yamnaya-steppeherders met Oost-Aziatische boeren',
      ],
      0,
      'Zhang et al., Nature. Dit ontkrachtte de migratiehypotheses die domineerden sinds de mummies bekend werden, en scheidde genetische afkomst netjes van culturele overdracht.',
    ],
    [
      'Welke figuren worden herdacht in de Orkhon-inscripties?',
      [
        'Bilge Khagan en zijn broer Kul Tigin van het Tweede Türk-Khaganaat',
        'Bumin Qaghan en Istämi, stichters van het Eerste Türk-Khaganaat',
        'Kutlug Bilge Köl en de stichters van het Oeigoerse Khaganaat',
        'Tonyukuk alleen, als vizier van drie opeenvolgende khagans',
      ],
      0,
      'De oudste substantiële Turkse teksten, in het runiforme schrift, en ongewoon omdat het het eigen verhaal van een steppestaat is in plaats van een Chinese kroniek.',
    ],
    [
      'Wat betekende Sovjet-korenizatsija in Centraal-Azië in de praktijk?',
      [
        'Het promoveren van titulaire nationaliteiten naar partij- en staatsfuncties en het opbouwen van instellingen in de eigen taal',
        'Het vestigen van Slavische bevolkingsgroepen in de republieken om lokale meerderheden te verzwakken',
        'Het afschaffen van de republieken ten gunste van direct bestuur vanuit Moskou',
        'Het herstellen van vooroorlogs gewoonterecht onder Sovjettoezicht, in plaats van zowel sharia als koloniale rechtbanken',
      ],
      0,
      'Het revisionistische argument - Martin, Hirsch - is dat de Sovjetstaat de nationale categorieën die hij vervolgens bestuurde actief construeerde, in plaats van ze slechts te erkennen.',
    ],
    [
      'Welke twee khanaten onderwierp Nader Shahs veldtocht ten noorden van de Amu Darja in 1740?',
      ['Boekhara en Chiwa', 'Kokand en Boekhara', 'Chiwa en Kashgar', 'Balkh en Badakhshan'],
      0,
      'Beide werden tot schatplichtige status teruggebracht; het herstel van de Oezbeekse khanaten na zijn moord in 1747 bepaalde de regio tot de Russische verovering.',
    ],
    [
      'Welk historiografisch argument wordt aangevoerd in Beckwiths "Empires of the Silk Road"?',
      [
        'Dat Centraal-Eurazië op zichzelf een economisch en politiek centrum vormde',
        'Dat steppe-rijken fundamenteel parasitair waren op sedentair landbouwoverschot',
        'Dat de Zijderoute als continue handelsroute een negentiende-eeuwse uitvinding is zonder premoderne realiteit',
        'Dat klimaatvariabiliteit de belangrijkste drijfveer is voor de vorming van steppe-imperia',
      ],
      0,
      'Het anti-perifere argument. De stelling dat "Zijderoute" zelf een moderne term is - von Richthofen, 1877 - is waar en wordt afzonderlijk beargumenteerd, met name door Hansen.',
    ],
  ],
};

/**
 * Strikt beperkt tot economische/ontwikkelingsinhoud uit 1980-2000 - alles
 * wat algemener was (theorie zonder datum, of gedateerd buiten dat venster)
 * is verhuisd naar de nieuwe categorie Oost-Aziatische geschiedenis
 * (asia2.ts). Zie MORE_EAST_ASIA in more/eastasia.ts voor de rest van deze
 * categorie.
 */
export const EAST_ASIA: CategoryContent = {
  graduate: [
    [
      'Wat beschrijft het Japanse "hoofdbanksysteem"?',
      [
        'Een leidende bank die zowel schuld als aandelen in een klantonderneming aanhoudt, deze monitort en reddingsacties organiseert',
        'Het postspaarsysteem dat huishoudelijke deposito\'s naar publieke investeringen kanaliseert',
        'De window guidance van de centrale bank over de omvang van commerciële kredietverlening',
        'Kruisparticipaties tussen bedrijven binnen een keiretsu-groep',
      ],
      0,
      'Kruisparticipaties zijn een verwant maar apart kenmerk. De monitoringsrol van de hoofdbank is de standaardverklaring voor waarom Japanse bedrijven zo\'n hoge schuldhefboom konden aanhouden.',
    ],
    [
      'Wat werd in 1985 overeengekomen in het Plaza Akkoord?',
      [
        'Gecoördineerde interventie om de Amerikaanse dollar te laten depreciëren, met de grootste gevolgen tegenover de yen',
        'Een terugkeer naar vaste pariteiten tussen de G5-valuta\'s, verdedigd met afgesproken interventiebanden en gezamenlijke reserves',
        'Vrijwillige Japanse exportbeperkingen op auto\'s',
        'Wederzijdse verlagingen van landbouwtarieven tussen de G5',
      ],
      0,
      'De daaropvolgende endaka dreef Japanse fabrikanten naar het buitenland en wordt doorgaans genoemd als voorwaarde voor de binnenlandse activabubbel.',
    ],
    [
      'Wat beschrijft het "vliegende ganzen"-model?',
      [
        'Sequentiële industriële opwaardering, waarbij volwassen industrieën verhuizen naar later ontwikkelende economieën',
        'Gecoördineerd valutabeheer binnen de Oost-Aziatische regio',
        'Exportgeleide groei gefinancierd door onderdrukte huishoudconsumptie',
        'De verspreiding van Japanse managementpraktijken via joint ventures en gelicentieerde technologieoverdracht',
      ],
      0,
      'Akamatsu\'s formulering, nieuw leven ingeblazen door Kojima. De kritiek is dat het een door Japan geleide hiërarchie inleest in wat een veel rommeliger geheel van productienetwerken werd.',
    ],
    [
      'Wat zijn de Zuid-Koreaanse chaebol?',
      [
        'Gediversifieerde bedrijvengroepen onder familiecontrole, doorgaans via kruisparticipaties en holdingstructuren',
        'Staatsbedrijven geprivatiseerd tijdens de liberalisering van de jaren 1980 en vervolgens genoteerd aan de beurs van Seoul',
        'Exportkartels gelicentieerd door het ministerie van Handel',
        'Regionale banken die de zware industrie financierden onder de vijfjarenplannen',
      ],
      0,
      'De crisis van 1997 dwong tot herstructurering van de met schulden gefinancierde diversificatie, maar de zeggenschapsstructuren overleefden dit grotendeels.',
    ],
    [
      'Wat waren township and village enterprises tijdens de Chinese hervormingsperiode?',
      [
        'Collectief eigendom zijnde plattelandsbedrijven, die een groot deel van de industriële groei van de jaren 1980 aandreven',
        'Joint ventures tussen provinciale overheden en buitenlandse investeerders onder het beleid van open kustgebieden',
        'Huishoudelijke bedrijfjes gelicentieerd onder de regels voor individuele onderneming',
        'Staatsfabrieken overgedragen aan de controle van lokale overheden',
      ],
      0,
      'Hun ambigue eigendomsrechten werden lange tijd gezien als een raadsel voor de standaardtheorie - en als bewijs dat zeker particulier eigendomsrecht geen voorwaarde is voor investering.',
    ],
  ],
  phd: [
    [
      'Wat beweert de "balansrecessie"-verklaring van Japans verloren decennium?',
      [
        'Bedrijven gaven voorrang aan schuldaflossing boven investering ondanks bijna-nul rentetarieven, wat monetaire verruiming buiten werking zette',
        'Banken waren insolvent maar verhulden dit, waardoor krediet werd weggehouden van gezonde kredietnemers en toegewezen aan hun bestaande debiteuren',
        'Deflatoire verwachtingen werden zelfvervullend doordat nominale loonrigiditeit de reële lonen liet stijgen tijdens de neerwaartse prijsspiraal',
        'Demografische krimp verlaagde de natuurlijke rentevoet tot onder elk haalbaar beleidsniveau, aansluitend bij Summers secular-stagnation-these',
      ],
      0,
      'Koo\'s formulering: met een afwezige bedrijfsvraag naar krediet komt het argument uit bij begrotingsbeleid. De concurrerende "zombiekrediet"-verklaring - Caballero, Hoshi en Kashyap - plaatst het probleem in plaats daarvan bij bankterughoudendheid.',
    ],
    [
      'Met welke gebeurtenis begon de Aziatische financiële crisis van 1997?',
      [
        'Het loslaten van de Thaise baht in juli 1997',
        'De ineenstorting van Hanbo Steel in Zuid-Korea',
        'Indonesië\'s opgave van zijn crawling peg',
        'De verdediging van de Hongkongse valutaraad door de Hong Kong Monetary Authority',
      ],
      0,
      'Het daaropvolgende debat - fundamentals versus zelfvervullende paniek, en of de begrotingsvoorwaarden van het IMF het erger maakten - herschikte de kijk van het vakgebied op kapitaalrekeningliberalisering.',
    ],
    [
      'Wat deed de fiscale hervorming van 1994 (fenshuizhi) in China?',
      [
        'Hercentraliseerde belastinginkomsten naar Peking terwijl de uitgavenverplichtingen bij de lokale overheid bleven',
        'Droeg zowel inkomsten als uitgaven over aan de provincies',
        'Verving het systeem van bedrijfswinstafdracht door een belasting over de toegevoegde waarde tegen ongewijzigde aandelen',
        'Creëerde een formele gemeentelijke obligatiemarkt voor lokale infrastructuur',
      ],
      0,
      'De resulterende kloof tussen inkomsten en uitgaven is de gangbare verklaring voor grondfinanciering en lokale financieringsvehikels van de overheid - en daarmee voor de vastgoedcyclus.',
    ],
  ],
  professor: [
    [
      'Waar stonden de faillissementen van Yamaichi Securities en de Long-Term Credit Bank in 1997-1998 voor?',
      [
        'Het einde van het konvooisysteem, en het begin van echte faillissementen en nationalisatie in Japan',
        'De eerste toepassing van depositoverzekering op Japanse stadsbanken, na de golf van kredietcoöperatie-faillissementen eind jaren tachtig, in plaats van alleen op regionale instellingen',
        'De eerste toepassing van kwantitatieve verruiming door de Bank of Japan, ingevoerd onder gouverneur Hayami om de deflatoire spiraal te doorbreken',
        'De afschaffing van het hoofdbanksysteem bij wet, aangekondigd door het ministerie van Financiën als onderdeel van de Big Bang-hervormingen',
      ],
      0,
      'Tot dan had het ministerie van Financiën reddingsacties georganiseerd zodat geen grote instelling daadwerkelijk failliet ging - precies de manier waarop de verliezen ongezien konden oplopen.',
    ],
  ],
};
