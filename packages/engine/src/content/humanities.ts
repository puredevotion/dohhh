import type { CategoryContent } from './row.js';

/**
 * History, Geography, Literature.
 *
 * Calibration, which is the hard part of authoring this:
 *  - graduate: an educated non-specialist gets it more often than not.
 *  - phd: you have studied the field, or you guess.
 *  - professor: you work in the field, or you are betting fifteen points on a
 *    hunch, which is the entire point of the game.
 */

export const HISTORY: CategoryContent = {
  msc: [

    [
      'The Treaty of Utrecht (1713) settled which war?',
      [
        'The War of the Spanish Succession',
        'The War of the Austrian Succession',
        'The Nine Years War, also known as the War of the League of Augsburg',
        'The Great Northern War between Sweden and its Baltic neighbours',
      ],
      0,
      'It separated the French and Spanish crowns permanently and handed Britain Gibraltar and the asiento - the slaving contract that shaped the next century of Atlantic trade.',
    ],
    [
      'The Diplomatic Revolution of 1756 aligned Austria with which power?',
      ['France', 'Prussia', 'Great Britain', 'The Ottoman Empire'],
      0,
      'Kaunitz reversed two centuries of Habsburg-Bourbon enmity to isolate Prussia, and Britain took Prussia instead - the alignment the Seven Years War was then fought in.',
    ],
    [
      'Which empire was defeated at the Battle of Manzikert in 1071?',
      [
        'The Byzantine Empire',
        'The Abbasid Caliphate, then in decline under Turkic military control',
        'The Bulgarian Empire under its last Krum-line rulers',
        'The Fatimid Caliphate, campaigning north out of Syria',
      ],
      0,
      'Seljuk forces captured the emperor Romanos IV. The defeat mattered less militarily than politically: the civil wars that followed opened Anatolia to settlement.',
    ],
    [
      'The Japanese abolition of the domains and creation of prefectures (haihan-chiken) took place in which year?',
      ['1871', '1868', '1877', '1889'],
      0,
      'Three years after the Restoration. The daimyo were pensioned off as a peerage, which is how a feudal order was dismantled without a second civil war.',
    ],
    [
      'Great Zimbabwe was the capital of a state built by which people?',
      [
        'The Shona',
        'The Kingdom of Kush, expanding south from the middle Nile',
        'The Ashanti, in the course of their westward gold trade',
        'The Songhai, at the southern limit of their Sahelian empire',
      ],
      0,
      'It flourished from roughly the eleventh to the fifteenth century on cattle and the Indian Ocean gold trade. Nineteenth-century attributions to outside builders were colonial politics, not archaeology.',
    ],
  ],
  phd: [
    [
      'Which dynasty sponsored the treasure fleets commanded by Zheng He?',
      ['Song', 'Yuan', 'Ming', 'Qing'],
      2,
      'Seven voyages between 1405 and 1433, under the Yongle and Xuande emperors of the Ming.',
    ],
    [
      'At the Battle of Ain Jalut in 1260, who halted the Mongol advance?',
      ['The Ayyubids', 'The Mamluks of Egypt', 'The Seljuks of Rum', 'The Knights Templar'],
      1,
      'A Mamluk army under Qutuz and Baybars defeated the Mongols in Galilee - their first serious strategic reverse in the region.',
    ],
    [
      'The Peace of Augsburg (1555) established which principle?',
      [
        'Freedom of individual conscience',
        'The ruler of a territory determines its religion',
        'Papal supremacy over imperial law',
        'Toleration of Calvinism throughout the Empire',
      ],
      1,
      'Cuius regio, eius religio - and notably it covered Lutheranism only, not Calvinism, which is part of why the Thirty Years War happened.',
    ],
    [
      'The Zanj Rebellion of 869-883 took place within which state?',
      ['The Umayyad Caliphate', 'The Abbasid Caliphate', 'The Fatimid Caliphate', 'The Sasanian Empire'],
      1,
      'A revolt of enslaved labourers in the salt marshes of southern Iraq, which held Basra for a time.',
    ],
    [
      'The Edict of Nantes (1598) was issued by which monarch?',
      ['Francis I', 'Charles IX', 'Henry IV', 'Louis XIII'],
      2,
      'Henry IV granted the Huguenots substantial rights; Louis XIV revoked the edict in 1685.',
    ],
  ],
  professor: [
    [
      'The Treaty of Zuhab (1639) fixed a long-lasting border between which two powers?',
      [
        'The Ottoman Empire and Safavid Persia',
        'The Ottoman Empire and the Habsburgs',
        'Muscovy and the Crimean Khanate',
        'The Mughals and the Safavids',
      ],
      0,
      'It ended roughly 150 years of Ottoman-Safavid warfare and its line still broadly follows the modern Iraq-Iran border.',
    ],
    [
      'The Donation of Pippin (756) transferred territory to whom?',
      ['The Lombard kings', 'The papacy', 'The Abbey of Saint-Denis', 'The Byzantine exarchate'],
      1,
      'Pippin the Short handed the former exarchate of Ravenna to the pope, the seed of the Papal States.',
    ],
    [
      'The Treaty of Tordesillas (1494) placed the dividing line how far west of the Cape Verde islands?',
      ['100 leagues', '270 leagues', '370 leagues', '500 leagues'],
      2,
      'The 1493 papal bull said 100 leagues; Portugal negotiated it out to 370, which is how Brazil ended up Portuguese.',
    ],
    [
      'Who wrote the Muqaddimah, an early systematic treatment of historiography and social cohesion?',
      ['Al-Masudi', 'Ibn Khaldun', 'Al-Tabari', 'Ibn Battuta'],
      1,
      'Written in 1377 as the introduction to his universal history, and built around the concept of asabiyyah, or group solidarity.',
    ],
    [
      'The Kalmar Union of 1397 joined Denmark, Norway and which third realm?',
      ['Sweden', 'Finland', 'Scotland', 'Pomerania'],
      0,
      'Sweden left definitively in 1523; Norway remained tied to Denmark until 1814.',
    ],
  ],
  bscba: [

    [
      'Which Roman general and statesman became the first emperor of Rome?',
      ['Augustus', 'Julius Caesar', 'Mark Antony', 'Pompey the Great'],
      0,
      'Octavian, known as Augustus, ruled from 27 BCE until his death in 14 CE, establishing the principate that defined the Roman Empire.',
    ],
    [
      'What was the capital of the Byzantine Empire?',
      ['Constantinople', 'Athens', 'Antioch', 'Alexandria'],
      0,
      'Founded by Constantine I as Nova Roma, it remained the empire\'s capital for over a thousand years until its fall in 1453.',
    ],
    [
      'In what year did Rome traditionally fall, marking the end of the Western Roman Empire?',
      ['476 CE', '410 CE', '395 CE', '1453 CE'],
      0,
      'The deposition of the last Western emperor Romulus Augustulus by Germanic leader Odoacer is the conventional date.',
    ],
    [
      'Which early Islamic caliphate immediately followed the Rashidun period?',
      ['The Umayyad Caliphate', 'The Abbasid Caliphate', 'The Fatimid Caliphate', 'The Ottoman Empire'],
      0,
      'The Umayyads ruled from 661 to 750 CE, expanding Islamic territory from Spain to the borders of China.',
    ],
    [
      'Which Chinese emperor ordered the construction of much of the Great Wall?',
      ['Qin Shi Huang', 'Kangxi', 'Kublai Khan', 'Yongzheng'],
      0,
      'The Qin Dynasty ruler ordered the wall built around the 3rd century BCE to defend against northern invasions.',
    ],
    [
      'What period in European history is roughly dated from the 5th to 10th centuries, following the fall of Rome?',
      ['The Dark Ages', 'The Renaissance', 'The High Middle Ages', 'The Early Medieval Period'],
      0,
      'The term reflects the scarcity of written records and general economic decline in western Europe during this era.',
    ],
    [
      'Which Roman emperor legalized Christianity throughout the empire?',
      ['Constantine I', 'Julian', 'Theodosius I', 'Diocletian'],
      0,
      'Constantine issued the Edict of Milan in 313 CE, granting tolerance to Christianity; Theodosius later made it official.',
    ],
    [
      'The Hundred Years\' War was fought primarily between which two kingdoms?',
      ['England and France', 'France and the Holy Roman Empire', 'England and Scotland', 'France and Spain'],
      0,
      'This series of conflicts lasted from 1337 to 1453, determining control of vast territories in medieval Europe.',
    ],
    [
      'Which Portuguese explorer was the first European to reach India by sea around Africa?',
      ['Vasco da Gama', 'Bartolomeu Dias', 'Pedro Cabral', 'Henry the Navigator'],
      0,
      'Da Gama\'s 1498 voyage established a direct sea route from Europe to Asia, bypassing Middle Eastern merchants.',
    ],
    [
      'In what century did Johann Gutenberg invent the movable-type printing press?',
      ['15th century', '14th century', '16th century', '13th century'],
      0,
      'Gutenberg\'s invention around 1440 revolutionized information distribution and enabled rapid idea dissemination.',
    ],
    [
      'Which French king earned the epithet "the Sun King"?',
      ['Louis XIV', 'Louis XVI', 'Louis XIII', 'Louis XII'],
      0,
      'Louis XIV reigned from 1643 to 1715 and presided over France\'s golden age of culture and military dominance.',
    ],
    [
      'What was the primary grievance of the American colonies against British rule before 1776?',
      ['Taxation without representation', 'Religious persecution', 'Prohibition of westward expansion', 'Forced military conscription'],
      0,
      '"No taxation without representation" captured colonial anger at being taxed without elected representation in Parliament.',
    ],
    [
      'In what year did the French Revolution begin with the storming of the Bastille?',
      ['1789', '1776', '1799', '1815'],
      0,
      'The Bastille\'s fall on 14 July symbolized assault on royal absolutism and is now France\'s national holiday.',
    ],
    [
      'Which Frankish emperor unified much of western Europe in the early 9th century?',
      ['Charlemagne', 'Otto I', 'Frederick Barbarossa', 'Louis the Pious'],
      0,
      'Charlemagne\'s empire lasted only a generation but established the template for European power structures.',
    ],
    [
      'What was the primary trade network connecting Europe, Asia and Africa in the medieval period?',
      ['The Silk Road', 'The Amber Route', 'The Spice Routes', 'The Tea Roads'],
      0,
      'Despite its name, the Silk Road carried spices, ceramics, and precious metals. Its decline spurred European exploration.',
    ],
  ],
};

export const GEOGRAPHY: CategoryContent = {
  msc: [

    [
      'The Coriolis parameter f is equal to what?',
      [
        'Twice the Earth\'s angular velocity times the sine of the latitude',
        'The Earth\'s angular velocity times the cosine of the latitude',
        'The ratio of the inertial to the gravitational acceleration at a given latitude',
        'The rate of change of angular velocity with respect to latitude',
      ],
      0,
      'f = 2*Omega*sin(phi), which is why it vanishes at the equator - and why tropical cyclones cannot form there.',
    ],
    [
      'The environmental lapse rate in the troposphere averages roughly what?',
      ['6.5 degrees C per km', '9.8 degrees C per km', '3.0 degrees C per km', '15 degrees C per km'],
      0,
      '9.8 is the dry adiabatic rate, which is a parcel property rather than a property of the surrounding air; the saturated rate is nearer 5.',
    ],
    [
      'Strahler stream order measures what?',
      [
        'The hierarchical position of a channel segment within a branching drainage network',
        'The discharge of a channel relative to its bankfull capacity',
        'The ratio of a basin\'s total relief to its longest horizontal dimension, expressed as a gradient',
        'The sediment calibre a channel is competent to transport',
      ],
      0,
      'Two first-order streams join to make a second-order; a first joining a second leaves it second. It is the basis of Horton\'s laws of drainage composition.',
    ],
    [
      'The Great Rift Valley system runs from Lebanon south to roughly which country?',
      [
        'Mozambique',
        'Kenya, terminating at the southern end of the Gregory Rift',
        'Egypt, where the Red Sea rift meets the Nile',
        'Zambia, at the western arm of the East African system',
      ],
      0,
      'Some 6,000 km from the Beqaa to central Mozambique, though whether the Levantine section belongs to the same system is a matter of definition rather than fact.',
    ],
    [
      'Podzolisation produces which diagnostic feature?',
      [
        'A bleached eluvial horizon, from which iron and aluminium have been leached downward',
        'A calcium carbonate hardpan formed by upward capillary movement',
        'A clay-enriched horizon formed by in-situ weathering of primary minerals under a humid regime',
        'A dark, base-rich surface horizon with a crumb structure',
      ],
      0,
      'Organic acids from coniferous litter chelate iron and aluminium and carry them down to a rust-coloured illuvial horizon. The carbonate hardpan is a calcrete, from an arid regime.',
    ],
  ],
  phd: [
    [
      'The Danakil Depression, one of the hottest places on Earth, lies within which tectonic feature?',
      ['The Afar Triple Junction', 'The Dead Sea Transform', 'The Anatolian Fault', 'The Zagros Fold Belt'],
      0,
      'Three spreading centres meet there - the Red Sea, Gulf of Aden and East African rifts.',
    ],
    [
      'A foehn wind is warm and dry because of which process?',
      [
        'Adiabatic warming during descent on the lee side of a range',
        'Frictional heating over rough terrain',
        'Advection of tropical air masses',
        'Radiative heating of the atmospheric boundary layer over bare ground',
      ],
      0,
      'Air loses moisture climbing the windward slope, then warms at the dry adiabatic rate on the way down.',
    ],
    [
      'Which is the largest endorheic body of water in the world?',
      ['The Aral Sea', 'The Caspian Sea', 'Lake Chad', 'The Dead Sea'],
      1,
      'Endorheic means it has no outflow to the ocean. The Caspian covers roughly 371,000 square kilometres.',
    ],
    [
      'The mild winters of north-western Europe are usually attributed to which oceanic feature?',
      ['The Canary Current', 'The North Atlantic Drift', 'The Labrador Current', 'The Antarctic Circumpolar Current'],
      1,
      'The North Atlantic Drift, the extension of the Gulf Stream, though prevailing westerlies over a warm ocean do much of the work.',
    ],
    [
      'What does the Wallace Line separate?',
      [
        'Asian and Australasian faunal regions',
        'Tropical and temperate rainfall regimes',
        'Continental and oceanic crust in the Pacific',
        'Northern and southern monsoon systems',
      ],
      0,
      'Drawn by Alfred Russel Wallace between Bali and Lombok, it tracks a deep-water trench that stopped land animals crossing.',
    ],
  ],
  professor: [
    [
      'The Mohorovicic discontinuity marks the boundary between which two layers?',
      ['Inner and outer core', 'Crust and mantle', 'Upper and lower mantle', 'Lithosphere and asthenosphere'],
      1,
      'Identified in 1909 from a sharp increase in seismic P-wave velocity beneath the crust.',
    ],
    [
      'The obliquity component of the Milankovitch cycles has a period of roughly how long?',
      ['21,000 years', '41,000 years', '100,000 years', '400,000 years'],
      1,
      'Axial tilt varies between about 22.1 and 24.5 degrees on a roughly 41,000-year cycle; precession is about 21,000 and eccentricity about 100,000.',
    ],
    [
      'What is a nunatak?',
      [
        'A summit protruding through an ice sheet',
        'A meltwater channel beneath a glacier',
        'A ridge of glacial debris at an ice margin',
        'A basin scoured by a former ice stream',
      ],
      0,
      'A Greenlandic Inuit term. The debris ridge is a moraine; the subglacial channel is an esker when it fills with sediment.',
    ],
    [
      'Post-glacial isostatic rebound is currently fastest in which region?',
      ['The Gulf of Bothnia', 'Patagonia', 'The Canadian Rockies', 'The Scottish Highlands'],
      0,
      'The northern Baltic is rising by roughly 8-10 mm a year as the mantle relaxes after the Fennoscandian ice sheet.',
    ],
    [
      'In fluvial geomorphology, what does the Hjulstrom curve relate?',
      [
        'Flow velocity to erosion, transport and deposition by grain size',
        'Channel slope to meander wavelength and the radius of curvature of each bend',
        'Discharge to drainage basin area',
        'Sediment yield to vegetation cover',
      ],
      0,
      'Its counter-intuitive feature is that fine clays need higher velocities to erode than sands, because cohesion holds them together.',
    ],
  ],
  bscba: [

    [
      'What is the primary source of energy driving Earth\'s atmospheric and oceanic circulation?',
      ['The Sun', 'Geothermal energy from the Earth\'s interior', 'Tidal friction from the Moon', 'Radioactive decay in the core'],
      0,
      'Solar radiation heats the atmosphere unevenly, creating temperature gradients that drive wind and ocean currents.',
    ],
    [
      'Which ocean covers the largest area of Earth\'s surface?',
      ['The Pacific Ocean', 'The Atlantic Ocean', 'The Indian Ocean', 'The Arctic Ocean'],
      0,
      'The Pacific covers roughly 165 million square kilometres, representing nearly 46% of Earth\'s ocean surface.',
    ],
    [
      'What is the name of the imaginary line that divides Earth into the Northern and Southern hemispheres at 0° latitude?',
      ['The Equator', 'The Prime Meridian', 'The Tropic of Cancer', 'The Tropic of Capricorn'],
      0,
      'At the equator, Earth\'s radius is greatest and the rotation is fastest in terms of surface velocity.',
    ],
    [
      'Which type of plate boundary is most commonly associated with active volcanic eruptions?',
      ['Convergent boundaries', 'Divergent boundaries', 'Transform boundaries', 'Passive margins'],
      0,
      'Subduction zones, where oceanic plates descend beneath continental plates, drive the most frequent volcanic activity.',
    ],
    [
      'What is the term for the phenomenon where moisture-bearing winds lose their water on one side of a mountain, creating drier conditions on the other?',
      ['Rain shadow effect', 'Orographic uplift', 'Convective precipitation', 'Frontal system'],
      0,
      'Air forced upward cools and loses moisture; descending air on the lee side is warm and dry.',
    ],
    [
      'How many continents are conventionally recognized in the standard geographical model?',
      ['Seven', 'Six', 'Five', 'Eight'],
      0,
      'The division varies by region and convention, but the seven-continent model is most common in English-speaking geography.',
    ],
    [
      'What is permafrost?',
      ['Soil or rock that remains frozen year-round in polar and high-altitude regions', 'A permanent glacial layer beneath all mountains', 'Underground rock that never thaws', 'The deepest layer of Earth\'s crust'],
      0,
      'Permafrost can be tens to hundreds of metres thick and covers roughly 25% of the Northern Hemisphere\'s land area.',
    ],
    [
      'Which warm ocean current significantly moderates the climate of northwestern Europe?',
      ['The Gulf Stream', 'The Canary Current', 'The Humboldt Current', 'The Kuroshio Current'],
      0,
      'The North Atlantic Drift, an extension of the Gulf Stream, transports tropical heat and keeps ports ice-free.',
    ],
    [
      'What is the approximate circumference of Earth at the equator?',
      ['40,075 kilometres', '25,000 kilometres', '50,000 kilometres', '30,000 kilometres'],
      0,
      'Earth is slightly oblate, so the circumference around the poles is about 40,008 kilometres.',
    ],
    [
      'Which mountain range contains the world\'s highest peak?',
      ['The Himalayas', 'The Andes', 'The Rocky Mountains', 'The Alps'],
      0,
      'Mount Everest rises to 8,849 metres and remains the ultimate mountaineering objective.',
    ],
    [
      'What is the process by which solid rock is broken down into smaller fragments by natural processes?',
      ['Weathering', 'Erosion', 'Deposition', 'Metamorphism'],
      0,
      'Weathering occurs in place through mechanical, chemical, or biological processes; it precedes erosion and transport.',
    ],
    [
      'What is the primary difference between weather and climate?',
      ['Weather describes short-term atmospheric conditions; climate describes long-term patterns', 'Weather is local and climate is global', 'Weather changes daily but climate never changes', 'Weather is predictable but climate is random'],
      0,
      'Weather is atmospheric conditions experienced today; climate is the statistics of weather over decades or centuries.',
    ],
    [
      'What are the three major categories of rock classified by their mode of formation?',
      ['Igneous, sedimentary, and metamorphic', 'Mineral, crystal, and ore', 'Granite, limestone, and slate', 'Plutonic, volcanic, and extrusive'],
      0,
      'Igneous forms from magma; sedimentary from compressed sediment; metamorphic from heat and pressure on existing rock.',
    ],
    [
      'What is a watershed?',
      ['An area of land whose surface water drains to a particular waterbody', 'The dividing line between two ocean basins', 'A region where two climate zones meet', 'A glacial valley shaped by flowing ice'],
      0,
      'Watersheds range from local to continental scales and are fundamental units for understanding water cycles.',
    ],
    [
      'Which process moves weathered rock and soil fragments from one location to another?',
      ['Erosion', 'Weathering', 'Consolidation', 'Lithification'],
      0,
      'Erosion is driven by water, wind, ice, and gravity; it is distinguished from weathering by the transport component.',
    ],
  ],
};

export const LITERATURE: CategoryContent = {
  msc: [

    [
      'Which term did Bakhtin use for the coexistence of distinct social voices within a novel?',
      [
        'Heteroglossia',
        'Polyphony, meaning the formal counterpoint of plot lines within one work',
        'Defamiliarisation, the making-strange of habitual perception',
        'Interpellation, the summoning of a subject by ideology',
      ],
      0,
      'Polyphony is also his, but names the relation between consciousnesses; defamiliarisation is Shklovsky and interpellation is Althusser.',
    ],
    [
      'The critical term "objective correlative" is most associated with whom?',
      [
        'T. S. Eliot',
        'I. A. Richards, in the course of developing practical criticism',
        'William Empson, in his account of ambiguity',
        'Cleanth Brooks, in his defence of the poem as an autonomous object',
      ],
      0,
      'From the 1919 Hamlet essay. Eliot took the phrase from Washington Allston, which is one of the better-documented cases of a borrowed term outliving its source.',
    ],
    [
      'In Old English and Old Norse verse, what is a kenning?',
      [
        'A compound periphrasis substituting for a simple noun, such as "whale-road" for the sea',
        'The caesura dividing each line into two half-lines',
        'The alliterative pattern binding the stressed syllables across the two half-lines of a verse',
        'A formulaic epithet attached to a hero throughout a poem',
      ],
      0,
      'The caesura and the alliteration are the metrical frame the kenning sits inside; the formulaic epithet is the Homeric device.',
    ],
    [
      'Who wrote The Master and Margarita?',
      [
        'Mikhail Bulgakov',
        'Boris Pasternak, in the years before Doctor Zhivago',
        'Andrei Platonov, whose major works were also suppressed',
        'Isaac Babel, before his arrest and execution in 1940',
      ],
      0,
      'Written through the 1930s and not published uncensored in the Soviet Union until 1973 - the manuscript-does-not-burn line is the novel\'s own comment on that.',
    ],
    [
      'In Genette\'s narratology, what does focalisation distinguish?',
      [
        'Who perceives, as distinct from who narrates',
        'The order of events in the telling, as distinct from the order in the story',
        'The frequency with which an event is narrated relative to its occurrence',
        'The relation between narrative duration and story duration',
      ],
      0,
      'The point-of-view question separated from the voice question - the other three options are his categories of order, frequency and duration.',
    ],
  ],
  phd: [
    [
      'Terza rima, the interlocking three-line rhyme scheme, is the verse form of which work?',
      ['Paradise Lost', 'The Divine Comedy', 'The Faerie Queene', 'Orlando Furioso'],
      1,
      'Dante appears to have invented it; the chain ABA BCB CDC binds the whole poem together.',
    ],
    [
      'Who wrote The Life and Opinions of Tristram Shandy, Gentleman?',
      ['Henry Fielding', 'Tobias Smollett', 'Laurence Sterne', 'Samuel Richardson'],
      2,
      'Published 1759-67, and still the most formally disruptive novel in English.',
    ],
    [
      'The Kokinshu is an anthology of what?',
      ['Chinese regulated verse', 'Japanese waka poetry', 'Korean sijo', 'Sanskrit court drama'],
      1,
      'Compiled around 905 CE, and the model for Japanese poetic taste for centuries afterwards.',
    ],
    [
      'Who wrote The Book of Disquiet?',
      ['Fernando Pessoa', 'Miguel de Unamuno', 'Italo Svevo', 'Robert Walser'],
      0,
      'Assembled posthumously from a trunk of fragments, attributed to his heteronym Bernardo Soares.',
    ],
    [
      'In Aristotle Poetics, what is anagnorisis?',
      ['A reversal of fortune', 'A recognition or discovery', 'A purging of emotion', 'A violation of decorum'],
      1,
      'The moment of recognition. Peripeteia is the reversal; catharsis is the purging.',
    ],
  ],
  professor: [
    [
      'The Hypnerotomachia Poliphili (1499) was printed by whom?',
      ['Johann Gutenberg', 'Aldus Manutius', 'William Caxton', 'Christophe Plantin'],
      1,
      'The Aldine Press in Venice, and still cited as one of the most beautiful books ever printed.',
    ],
    [
      'The Sanskrit Natyashastra is principally a treatise on what?',
      ['Grammar', 'Dramaturgy and performance', 'Statecraft', 'Metrics and prosody'],
      1,
      'Attributed to Bharata, it covers theatre, dance and music, and introduces rasa theory.',
    ],
    [
      'In Occitan troubadour poetics, what does trobar clus denote?',
      [
        'A deliberately hermetic, difficult style',
        'A dialogue between two poets',
        'A dawn song sung by lovers at the moment of parting',
        'A poem of feudal complaint',
      ],
      0,
      'Closed composition, as opposed to trobar leu, the light or open style. The dawn song is the alba; the dialogue is the tenso.',
    ],
    [
      'Zaum was a poetic language associated with which movement?',
      ['Italian Futurism', 'Russian Futurism', 'French Symbolism', 'German Expressionism'],
      1,
      'Khlebnikov and Kruchenykh coined it - a sound-driven language "beyond sense".',
    ],
    [
      'The Epic of Sundiata belongs to the oral tradition of which people?',
      ['The Yoruba', 'The Mande', 'The Amhara', 'The Zulu'],
      1,
      'Transmitted by Mande griots, it recounts the founding of the Mali Empire in the 13th century.',
    ],
  ],
  bscba: [

    [
      'Who is the protagonist of Jane Austen\'s novel "Pride and Prejudice"?',
      ['Elizabeth Bennet', 'Jane Bennet', 'Emma Woodhouse', 'Anne Elliot'],
      0,
      'Elizabeth\'s wit and independence, and her journey to overcome prejudice against Mr. Darcy, drive the novel.',
    ],
    [
      'Which author wrote the dystopian novel "1984"?',
      ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'Margaret Atwood'],
      0,
      'Published in 1949, Orwell\'s novel depicts a totalitarian future state and introduced the concept of Big Brother.',
    ],
    [
      'In which Shakespeare tragedy does the protagonist feign madness while seeking revenge?',
      ['Hamlet', 'Macbeth', 'Othello', 'King Lear'],
      0,
      'Hamlet\'s delayed revenge on his uncle Claudius remains one of literature\'s most analyzed plots.',
    ],
    [
      'What is a sonnet?',
      ['A 14-line poem with a specific rhyme scheme and metre', 'A brief lyric poem about love', 'A narrative poem in blank verse', 'A dramatic poem meant to be performed'],
      0,
      'The Petrarchan and Shakespearean sonnets are the two major forms; both have 14 lines in iambic pentameter.',
    ],
    [
      'Who wrote the novel "The Great Gatsby"?',
      ['F. Scott Fitzgerald', 'Ernest Hemingway', 'John Steinbeck', 'William Faulkner'],
      0,
      'Published in 1925, Fitzgerald\'s work captures the excess and disillusionment of the Jazz Age.',
    ],
    [
      'What is a metaphor in literature?',
      ['A comparison between two unlike things without using "like" or "as"', 'An exaggeration used for emphasis', 'A reference to another work of art', 'A statement that contradicts itself'],
      0,
      '"Love is a rose" is a metaphor; "love is like a rose" is a simile using comparative language.',
    ],
    [
      'Which Russian novelist wrote "War and Peace"?',
      ['Leo Tolstoy', 'Fyodor Dostoevsky', 'Ivan Turgenev', 'Nikolai Gogol'],
      0,
      'Published in the 1860s, this epic novel interweaves fictional and historical events during the Napoleonic Wars.',
    ],
    [
      'What is the primary sequence of events in a narrative called?',
      ['The plot', 'The setting', 'The theme', 'The exposition'],
      0,
      'Plot encompasses the causal chain of events from exposition through resolution, distinguishing it from mere chronology.',
    ],
    [
      'Who wrote the novel "Wuthering Heights"?',
      ['Emily Bronte', 'Charlotte Bronte', 'Anne Bronte', 'George Eliot'],
      0,
      'Published under the pen name Ellis Bell in 1847, this gothic romance remains Emily\'s sole novel.',
    ],
    [
      'What is a flashback in narrative?',
      ['A return in time to events earlier than the main action', 'A sudden scene of intense action', 'A shift in narrative perspective', 'A repetition of an earlier scene'],
      0,
      'Flashbacks interrupt linear chronology and are often used to reveal character motivation or backstory.',
    ],
    [
      'Who is traditionally credited as the author of the ancient Greek epic "The Odyssey"?',
      ['Homer', 'Hesiod', 'Ovid', 'Virgil'],
      0,
      'Scholars debate Homer\'s identity, but both the Odyssey and the Iliad are attributed to him in classical tradition.',
    ],
    [
      'What is alliteration?',
      ['The repetition of beginning consonant sounds in nearby words', 'The use of words with similar meanings', 'A comparison between two things', 'The repetition of vowel sounds'],
      0,
      'Common in poetry and prose, alliteration creates musicality and emphasis through sound patterning.',
    ],
    [
      'Which author wrote "Alice\'s Adventures in Wonderland"?',
      ['Lewis Carroll', 'J.M. Barrie', 'Charles Dickens', 'Oscar Wilde'],
      0,
      'Carroll (pen name of Charles Dodgson) published this whimsical tale in 1865; it spawned a sequel.',
    ],
    [
      'What is irony in literature?',
      ['A discrepancy between appearance and reality or expectation and outcome', 'A humorous comparison', 'A character\'s internal conflict', 'A hidden meaning in dialogue'],
      0,
      'Situational irony occurs when outcomes contradict expectations; dramatic irony when readers know what characters do not.',
    ],
    [
      'Who wrote the novel "Crime and Punishment"?',
      ['Fyodor Dostoevsky', 'Leo Tolstoy', 'Ivan Turgenev', 'Aleksandr Dumas'],
      0,
      'Published in 1866, this Russian masterpiece explores morality, guilt, and redemption through protagonist Raskolnikov.',
    ],
  ],
};
