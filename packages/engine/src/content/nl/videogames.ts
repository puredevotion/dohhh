import type { CategoryContent } from '../row.js';

/**
 * Video Games & Consoles.
 */

export const VIDEOGAMES: CategoryContent = {
  bscba: [],
  msc: [
    [
      'Hoe heet de authenticatiechip die Nintendo zowel in NES-cartridges als in de console zelf inbouwde, specifiek om te voorkomen dat niet-gelicentieerde games op de hardware konden draaien?',
      ['10NES', 'CIC-2000', 'NES-Lock', 'RGB-1'],
      0,
      'De 10NES was een lockout-chippaar: een chip in de console en een bijpassende chip in elke cartridge moesten correct met elkaar communiceren, anders reset de console zichzelf steeds opnieuw, wat het beruchte knipperende scherm opleverde.',    ],
    [
      'De hoofdprocessor van de Atari 2600 was een goedkopere variant van de MOS 6502, met een kleinere pinbehuizing en maar 13 adreslijnen in plaats van 16. Hoe heette deze chip?',
      ['MOS 6507', 'MOS 6502', 'Zilog Z80', 'Motorola 6800'],
      0,
      'De 6507 was een 6502-die verpakt in een goedkopere behuizing met 28 pinnen, waarbij verschillende adres- en interruptpinnen waren weggelaten, zodat Atari in 1977 een agressieve prijs kon halen.',
    ],
    [
      'In welk jaar ging de Magnavox Odyssey, algemeen erkend als de eerste commerciële thuisvideogameconsole, in de verkoop?',
      ['1972', '1975', '1969', '1977'],
      0,
      'Ralph Baer\'s prototype "Brown Box", eind jaren zestig ontwikkeld bij Sanders Associates, werd gelicentieerd aan Magnavox en in 1972 als de Odyssey op de markt gebracht, jaren voor Atari\'s thuis-Pong-apparaat.',
    ],
    [
      'Welke Atari 2600-game uit 1982, in ongeveer vijf weken ontwikkeld om een kerstdeadline te halen, wordt het vaakst genoemd als versneller van de Noord-Amerikaanse videogamecrash van 1983 en werd later gelinkt aan een massale begrafenis op een vuilstortplaats in Alamogordo, New Mexico?',
      ['E.T. the Extra-Terrestrial', 'Pac-Man (Atari 2600)', 'Custer\'s Revenge', 'Raiders of the Lost Ark'],
      0,
      'Atari betaalde naar verluidt 20 tot 25 miljoen dollar voor de filmlicentie en joeg ontwerper Howard Scott Warshaw vervolgens op om de game in ongeveer vijf weken te bouwen zodat die nog voor de kerstperiode van 1982 kon uitkomen, met een verwarrend en slecht beoordeeld product als resultaat.',
    ],
    [
      'Sega\'s marketingslogan "Blast Processing", gebruikt om te claimen dat de Genesis sneller was dan de SNES, was vooral een herverpakking van welk echt hardwarekenmerk?',
      ['Snelle DMA-overdrachten naar de VDP voor razendsnelle beeldupdates', 'Een tweede, toegewijde Motorola 68000-coprocessorchip', 'Hardwareversnelde polygoon-rendering', 'Een eigen 32-bits bus die de kloksnelheid van de CPU verdubbelde'],
      0,
      '.',
    ],
    [
      'Voor hoeveel verkocht SNK\'s Neo Geo AES-thuisconsole ongeveer bij de Amerikaanse lancering in 1990, een prijs die zijn gebruik van vrijwel ongewijzigde arcadehardware weerspiegelde?',
      ['ongeveer $650', 'ongeveer $200', 'ongeveer $1.200', 'ongeveer $350'],
      0,
      'SNK bouwde de AES rond dezelfde MVS-arcadebordjes die in speelautomaten werden gebruikt, wat betekende dat thuisgebruikers echt arcade-identieke grafiek en geluid kregen, maar tegen kosten op arcadeniveau die die van elke rivaal ver overtroffen.',
    ],
    [
      'Welke ingebouwde functie maakte de Sega Dreamcast, in 1998 in Japan en in 1999 in Noord-Amerika gelanceerd, tot de eerste grote thuisconsole met standaard, niet-optionele internetverbinding?',
      ['Een ingebouwde 56k-modem', 'Een ingebouwde ethernetpoort', 'Een gebundelde ISDN-adapter', 'Een eigen satellietontvanger'],
      0,
      'Elke Dreamcast kwam met een 56k-modem ingebouwd in de console zelf, waarmee eigenaars konden inbellen op SegaNet of andere internetproviders om vroege onlinetitels als Phantasy Star Online en Chu Chu Rocket te spelen zonder apart aan te schaffen hardware.',
    ],
    [
      'Voordat het Sony\'s eigen PlayStation werd, begon het project als een cd-rom-uitbreiding, samen met Sony ontwikkeld voor welke bestaande Nintendo-console, onder een samenwerking die later klapte?',
      ['Super Nintendo (SNES)', 'Sega Genesis Mega Drive', 'NEC PC Engine TurboGrafx', 'Nintendo 64-spelconsole'],
      0,
      '.',
    ],
    [
      'id Software\'s Doom (1993) renderde zijn levels efficiënt in real time door welke ruimteverdelende datastructuur vooraf te berekenen, waarmee de engine snel kon bepalen welke geometrie zichtbaar was vanuit het gezichtspunt van de speler?',
      ['Binaire ruimteverdeling (BSP-bomen)', 'Ray-traced voxel-rendering', 'Z-buffered polygoon-culling', 'Portal-gebaseerde occlusion culling'],
      0,
      '.',
    ],
    [
      'De processor van de originele Game Boy, de Sharp LR35902, wordt het best beschreven als een aangepaste chip die instructiesetkenmerken van welke twee eerdere processorfamilies combineert?',
      ['De Zilog Z80 en de Intel 8080', 'De MOS 6502 en Zilog Z80', 'De Motorola 68000 en MOS 6502', 'De Intel 8086 en Zilog Z80'],
      0,
      'De LR35902 implementeert een subset van Z80-instructies naast 8080-achtige registerconventies, waardoor hij noch volledig Z80- noch 8080-compatibel is, maar dicht genoeg bij beide staat dat doorgewinterde assemblageprogrammeurs uit die tijd zich snel konden aanpassen.',
    ],
    [
      'Sega\'s System 16-arcadehardware, geïntroduceerd in 1985 en gebruikt voor games als Altered Beast en Shinobi, gebruikte welke processor als hoofdprocessor, met een tweede chip uit dezelfde familie voor het geluid?',
      ['Motorola 68000', 'Alleen Zilog Z80', 'MOS 6502', 'Intel 8086'],
      0,
      '.',
    ],
    [
      '.',
      ['16/32-bit', '8-bit', '64-bit (de claim klopte)', '128-bit'],
      0,
      '.',
    ],
    [
      'NEC\'s PC Engine (in Noord-Amerika verkocht als de TurboGrafx-16) werd op de markt gebracht met "16-bit"-branding, ondanks dat de hoofdprocessor een 8-bits processor was; waar verwees het cijfer "16-bit" in werkelijkheid naar?',
      ['Zijn grafische chip, de HuC6270-controller', 'Zijn van Yamaha afgeleide FM-geluidssynthesechip', 'De hoofdbus tussen processor en geheugen', 'De adresbus van de cartridge-ROM'],
      0,
      'De processor van de PC Engine was een HuC6280, een verbeterde 8-bits chip afgeleid van de 6502-familie, maar de grafische processor werkte intern met 16-bits gegevens, en NEC\'s marketing leunde volledig op dat feit om te concurreren met Sega en later Nintendo\'s werkelijk 16-bits machines.',
    ],
    [
      'Nintendo\'s keuze om bij cartridges te blijven in plaats van cd-rom te gebruiken voor de Nintendo 64, anders dan Sony\'s PlayStation en Sega\'s Saturn, werd vooral gedreven door zorgen over welke twee factoren?',
      ['Laadtijden en anti-piraterijbescherming', 'Productiekosten en beperkingen in kleurdiepte', 'Licentiekosten voor externe uitgevers en fysieke duurzaamheid van cartridges', 'Opslagcapaciteit en compatibiliteit met controllers'],
      0,
      'Cartridges laadden nagenoeg direct en waren veel moeilijker goedkoop te vervalsen dan cd\'s, allebei prioriteiten voor Nintendo gezien zijn bittere ervaring met niet-gelicentieerde en gepirateerde cartridges in eerdere generaties.',
    ],
    [
      'Ondanks een commerciële mislukking tegenover de NES in de Verenigde Staten, behaalde de Sega Master System decennialang dominant marktsucces in welk land, grotendeels dankzij een langdurige licentiesamenwerking met een lokaal bedrijf genaamd Tectoy?',
      ['Brazilië', 'Mexico', 'Zuid-Korea', 'Argentinië'],
      0,
      '.',
    ],
  ],
  phd: [
    [
      'De notoir lastige architectuur van de Sega Saturn draaide om twee identieke hoofdprocessoren van welk type, ingezet in een master/slave-opstelling die efficiënt parallel programmeren voor veel westerse ontwikkelaars moeilijk maakte?',
      ['Hitachi SH-2', 'Motorola 68020', 'MIPS R4300i', 'NEC V810'],
      0,
      '.',
    ],
    [
      'De 3DO Interactive Multiplayer, in licentie gegeven aan meerdere fabrikanten zoals Panasonic en Goldstar in plaats van door één bedrijf gebouwd, werd ontworpen door een bedrijf opgericht door welke voormalige medeoprichter en eerste CEO van Electronic Arts?',
      ['Trip Hawkins', 'Bing Gordon', 'Larry Probst', 'Bill Budge'],
      0,
      '.',
    ],
    [
      'De Reality Co-Processor (RCP) van de Nintendo 64, die zowel grafische als audioverwerking afhandelde, werd samen met Nintendo ontworpen door welk workstation- en grafische-technologiebedrijf?',
      ['Silicon Graphics, Inc. (SGI)', 'Sun Microsystems', 'Evans & Sutherland', '3dfx Interactive'],
      0,
      '.',    ],
    [
      'De Sega CD-uitbreiding voor de Genesis bevatte een extra Motorola 68000-processor die ongeveer twee keer zo snel klokte als de hoofdprocessor van de Genesis zelf, vooral om welke taak af te handelen?',
      ['Cd-gegevens decomprimeren en beheren, los van de hoofdprocessor van de Genesis', 'Echte polygonale 3D-grafiek renderen', 'FM-synthese-audio volledig los van de geluidschip van de Genesis afhandelen', 'Achterwaartse compatibiliteit met de Sega Master System emuleren'],
      0,
      '.',
    ],
    [
      'Nintendo\'s Virtual Boy (1995) creëerde zijn monochrome stereoscopische 3D-effect met welke ongewone beeldschermtechnologie, in plaats van een gangbaar lcd- of crt-scherm?',
      ['Een paar oscillerende spiegels die rode ledarrays op elk oog reflecteerden', 'Twee monochrome lcd-panelen op een vaste parallax-afstand', 'Een enkele achterprojectie-crt optisch gesplitst tussen de ogen', 'Plasmaschermelementen in een stereopaar opgesteld'],
      0,
      '.',    ],
    [
      'De GPU van de originele PlayStation renderde getextureerde polygonen met affiene textuurmapping zonder diepte-correctie per pixel over het polygoonoppervlak, wat het karakteristieke visuele artefact van de console veroorzaakte, gewoonlijk aangeduid met welke term?',
      ['Textuurvervorming (affiene textuurdistortie)', 'Beeldscheuring door ongesynchroniseerde verticale sync', 'Z-fighting tussen overlappende polygoonoppervlakken', 'Mip-mapniveaubanden en aliasing-artefacten'],
      0,
      '.',
    ],
    [
      'Namco\'s arcade-shooter Xevious uit 1982 wordt door historici vaak geëerd als een vroege mijlpaal die welke nu alomtegenwoordige scroll-techniek populair maakte, mogelijk gemaakt door een toegewijde tegelkaart-hardwarelaag apart van de spritelaag?',
      ['Vloeiende, continue scrolling via een toegewijde achtergrondtegel-laag', 'Multi-plane parallax-scrolling met onafhankelijke, verschillende snelheden per laag', 'Diagonale scrolling van 45 graden over het speelveld', 'Horizontale wraparound-scrolling voor eindeloze terreinlussen'],
      0,
      'Xevious gebruikte aangepaste hardware voor vloeiend scrollen van een grote achtergrondtegelkaart onder sprites, wat vliegen over coherent terrein simuleerde. Deze scheiding van scrollende achtergrond en sprites werd standaard in arcade/console-hardware.',
    ],
    [
      'Bandai\'s Playdia, een cd-rom-console die in 1994 in Japan werd uitgebracht, was specifiek ontworpen voor welk doelpubliek, wat de softwarebibliotheek scherp onderscheidde van tijdgenoten als de 3DO en de Sega CD?',
      ['Jonge kinderen, met interactieve prentenboeken en anime-achtige titels', 'Arcade-uitbaters, voor locatiegebonden tests van nieuwe muntautomaatconcepten', 'Volwassen visuele-novellenliefhebbers en FMV-fans', 'Onderwijsinstellingen, voor educatieve software in de klas'],
      0,
      'Bandai positioneerde Playdia als kinderentertainment met interactieve verhalen, anime-licenties en afstandsbediening-controller. De smalle focus betekende geen concurrentie met PlayStation/Saturn maar een niche tussen videospeeltje en spelmachine.',
    ],
    [
      'De Panasonic M2, ontwikkeld als technische opvolger van de 3DO maar uiteindelijk geschrapt als consumentenconsole en herbestemd voor arcade- en industriële toepassingen, was gebouwd rond welke processorarchitectuur?',
      ['Twee PowerPC 602-processoren', 'MIPS R4000 RISC-processor', 'ARM610-embeddedprocessor', 'SuperH SH-4 RISC-processor'],
      0,
      'De M2 gebruikte twee PowerPC 602-chips voor meer 3D-kracht dan PS1/Saturn. Matsushita investeerde als volgende-generatie-console maar gaf consumentenplannen in 1997 op in Sony\'s dominante markt. In plaats van af te schrijven, herbestemde Matsushita M2 voor arcade en industriële toepassingen.',
    ],
    [
      'Commodore\'s Amiga CD32 (1993), een van de eerste 32-bits cd-gebaseerde spelconsoles, was in essentie een consolevorm-aanpassing van het chipset van welk bestaand Amiga-computermodel?',
      ['Amiga 1200', 'Amiga 500', 'Amiga 4000', 'Amiga 3000'],
      0,
      '.',
    ],
    [
      'Het kenmerkende FM-synthesegeluid van de Sega Genesis kwam van welke Yamaha-geluidschip, ook gebruikt in verschillende gelijktijdige arcadebordjes en pc-geluidskaarten uit dezelfde periode?',
      ['YM2612', 'YM2151', 'SN76489', 'YM3812 (OPL2)'],
      0,
      'De YM2612 leverde zes FM-synthese-kanalen, gaf Genesis zijn scherpe metaalachtige klank tegenover SNES\' sample-gebaseerde chip. Genesis behield ook een SN76489-PSG voor achterwaarts-compatibiliteit, dus twee geluidstechnologieën.',
    ],
    [
      'Nintendo\'s Famicom Disk System (1986) gebruikte herschrijfbare, verwijderbare opslagmedia gebaseerd op welk bestaand Mitsumi-consumentenformaat, herverpakt in een eigen gele plastic behuizing voor Nintendo\'s gebruik?',
      ['Quick Disk (magnetische floppy-variant)', 'Standaard 3,5-inch floppydiskstations', 'Compact Cassette magnetische bandstations', 'MiniDisc magneto-optische schijfmedia'],
      0,
      'Nintendo licentieerde Mitsumi\'s Quick Disk, kleine herschrijfbare magnetische media, en merkde het als FDS. Dit gaf goedkopere, herschrijfbare opslag dan cartridges en speldata-opslag, jaren voor batterij-saves. Originele Zelda verscheen alleen op schijf in Japan.',
    ],
    [
      'De arcadeversie van Rare en Midway\'s Killer Instinct (1994) draaide op hardware gebouwd rond een processor uit de MIPS-familie, afgeleid van Silicon Graphics-workstationtechnologie, een ongewoon krachtige en dure keuze voor een arcadevechtgame uit die tijd.',
      ['MIPS (een van SGI afgeleide RISC-architectuur)', 'Een aangepaste Motorola 88000 RISC-processor', 'Een Intel i860-grafische coprocessor', 'Een Zilog Z8000'],
      0,
      'Rare gebruikte SGI-workstations voor Donkey Kong Country-rendering, breidde uit naar arcade Killer Instinct met geavanceerde 3D-sprites en real-time gameplay. De voorgerenderde visuele kwaliteit was 1994 opvallend en hielp tegen Street Fighter II/Mortal Kombat.',
    ],
    [
      'NEC\'s PC-FX (1994), opvolger van de PC Engine, vermeed bewust toegewijde 3D-polygoon-renderhardware en investeerde in plaats daarvan zwaar in het ondersteunen van welk inhoudstype, een strategische keuze die het competitief schaadde tegenover de PlayStation en Saturn?',
      ['Full-motion video en visuele-novelle-titels', 'Real-time 3D-racesimulatiesoftware', 'Arcade-getrouwe 2D-vechtgamepoorten', 'Point-and-click pc-avonturenspelpoorten'],
      0,
      '.',
    ],
    [
      'De uitbreidingsmodule #1 van de ColecoVision liet de console cartridges spelen van welke eerdere console, door de hardware van die console vrijwel exact te repliceren binnen de uitbreiding?',
      ['Atari 2600', 'Magnavox Odyssey²', 'Atari 5200', 'Mattel Intellivision'],
      0,
      'Coleco bouwde echte Atari 2600-compatibele hardware in een module in plaats van softwareemulatie, wat ColecoVision-eigenaars onmiddellijke toegang tot de enorme 2600-bibliotheek gaf.',
    ],
  ],
  professor: [
    [
      '.',
      ['Ralph Baer', 'Nolan Bushnell', 'Al Alcorn', 'Bill Rusch'],
      0,
      '.',
    ],
    [
      'RCA\'s Studio II (1977), een commerciële mislukking die de Atari 2600 voorafging en er ruimschoots van verloor, kwam met een opvallende hardwareweglating ten opzichte van de meeste tijdgenoten: het had geen...',
      ['geluidsuitvoer van welke aard dan ook', 'cartridgeslot, met alleen ingebouwde games', 'wisselstroomadapter, waardoor gebruikers hun eigen voedingscircuit moesten leveren', 'controllerpoorten, met alleen ingebouwde toetsenblokken'],
      0,
      'De Studio II leverde volledig stille gameplay, een opvallende weglating zelfs naar de bescheiden maatstaven van 1977, omdat rivaliserende systemen als de Fairchild Channel F en zelfs de eerdere Magnavox Odyssey tenminste rudimentaire piepjes en tonen produceerden.',
    ],
    [
      'Nintendo\'s Donkey Kong (1981) ontstond deels uit commerciële noodzaak: het bedrijf had een grote onverkochte voorraad arcadekasten van welke eerdere, commercieel teleurstellende shooter die nieuwe spelplaten nodig had om weer verkoopbaar te worden?',
      ['Radar Scope', 'Sheriff', 'Space Firebird', 'Sky Skipper'],
      0,
      '.',
    ],
    [
      'Sega\'s Zaxxon (1982) is historisch belangrijk als een van de eerste succesvolle arcadegames die welk visueel perspectief populair maakte, met platte geschilderde sprites gecombineerd met hoogte- en schaduwaanwijzingen om een 3D-axonometrisch gezichtspunt te simuleren?',
      ['Isometrische (axonometrische) projectie', 'Echte first-person-perspectiefrendering', 'Mode 7-achtige hardware-rotozoom-schaling', 'Geforceerd-perspectief parallax-scrolling'],
      0,
      '.',
    ],
    [
      'De arcadehardware van Williams Electronics uit begin jaren tachtig, gebruikt voor games als Defender, Stargate en Robotron: 2084, bevatte een speciaal ontworpen grafische chip waarmee die games veel meer gelijktijdig bewegende objecten konden weergeven dan de meeste concurrerende bordjes.',
      ['Williams Special Chip (aangepaste blitter)', 'Williams Pixel Array Controller-chip', 'Williams Vector Accelerator-chip', 'Williams Sprite Engine Mark 1-chip'],
      0,
      '.',
    ],
    [
      '.',
      ['Digital Data Pack-cassettebandjes', '5,25-inch floppydisk-cartridges', 'Cartridge-gebaseerde batterijgebufferde RAM-modules', 'Bubble memory solid-state opslagkaarten'],
      0,
      '.',
    ],
    [
      'Capcom\'s CP System II-arcadebordjes (CPS-2), gebruikt voor latere titels als Street Fighter Alpha en Darkstalkers, gebruikten een batterijgebufferd encryptie- en decryptiesysteem op de chip zelf, specifiek ontworpen om welke aanhoudende dreiging voor de inkomsten van arcade-uitbaters tegen te gaan?',
      ['Illegale of gepirateerde arcadebordjes die de ROM-gegevens van de game kopiëren', 'Thuisconsoleversies die de kaartverkoop in arcades onderscheppen', 'Toernooispelers die frame-datafouten misbruiken voor onterecht voordeel', 'Rivaliserende uitgevers die de move-systeem van de vechtengine reverse-engineeren'],
      0,
      '.',
    ],
    [
      'De Sharp X68000, een Japanse thuiscomputer uitgebracht in 1987, werd bijzonder gewaardeerd onder arcadeliefhebbers omdat de aangepaste sprite- en scrollhardware ongewoon getrouwe poorten kon produceren van arcadetitels van welk bedrijf, meest beroemd Street Fighter II en Ghouls \'n Ghosts?',
      ['Capcom', 'Sega', 'Taito', 'SNK'],
      0,
      '.',
    ],
    [
      'SNK\'s Multi Video System (MVS), de arcadetegenhanger van de Neo Geo AES-thuisconsole, liet één kast in de grootste gangbare configuratie tot hoeveel verwisselbare gamecartridges tegelijk bevatten, selecteerbaar via een menu?',
      ['Zes', 'Vier', 'Twee', 'Tien'],
      0,
      '.',
    ],
    [
      'Sega\'s Model 2-arcadebordje (1993), dat Virtua Fighter 2 en Daytona USA aandreef, bouwde voort op 3D-rendertechnologie ontwikkeld in samenwerking met de Real3D-grafische divisie, een joint venture verbonden aan de vluchtsimulator-grafische erfenis van welke lucht- en defensieaannemer?',
      ['Lockheed Martin', 'General Dynamics', 'Northrop Grumman', 'Raytheon'],
      0,
      '.',
    ],
    [
      'Atari-oprichter Nolan Bushnell hoorde naar verluidt dat de allereerste testeenheid van Pong, geïnstalleerd in Andy Capp\'s Tavern, binnen enkele dagen niet meer werkte, alleen om te ontdekken dat het echte probleem was dat...',
      ['de muntenbak volledig verstopt was geraakt met kwartjes', 'de voeding van het vectorscherm was overhit en uitgeschakeld', 'een defecte potentiometer voor onregelmatige drift van de peddel zorgde', 'het scorecircuit voorbij negenennegentig was doorgelopen en naar nul was gereset'],
      0,
      '.',
    ],
    [
      'In het originele Pac-Man (1980) berekent de roze geest Pinky zijn doeltegel door hoeveel tegels recht vooruit te projecteren, vanaf Pac-Mans huidige positie en kijkrichting?',
      ['Vier tegels', 'Twee tegels', 'Acht tegels', 'Een tegel'],
      0,
      '.',
    ],
    [
      'Taito\'s arcadeshoot-\'em-up Darius (1986) viel op door een originele kastconfiguratie met welke ongewone schermopstelling, later aangeboden als selecteerbare presentatieoptie in sommige thuisversies van het vervolg, Darius Gaiden?',
      ['Drie aan elkaar gekoppelde crt-monitoren die één panoramisch ultrabreed scherm vormden', 'Één ultrabreedbeeld-crt bekeken door een anamorfe lens', 'Twee gestapelde verticale schermen voor lokale split-screen co-op', 'Een achterprojectiescherm gevoed door twee overlappende projectoren'],
      0,
      '.',
    ],
    [
      'Sega\'s Out Run (1986), ontworpen door Yu Suzuki, bereikte zijn pseudo-3D-racevisuals niet door echte polygoonrendering, maar door een techniek die historici gewoonlijk "Super Scaling" noemen, waarbij aangepaste hardware in real time wat met sprites deed om diepte en afstand te simuleren?',
      ['Sprites regel voor regel schalen naarmate ze naderden of verder weg raakten', 'Sprites continu roteren om een vast draaipunt op de z-as', 'Gouraud-geshade low-poly meshes renderen op verlaagde schermresolutie', 'Voorgerenderde, ray-traced frames samenstellen die op laserdisc waren opgeslagen'],
      0,
      '.',
    ],
    [
      '.',
      ['De Bradley Trainer', 'De Abrams Simulator', 'Project Ironclad', 'De M1 Tactical Trainer'],
      0,
      '.',
    ],
  ],
};
