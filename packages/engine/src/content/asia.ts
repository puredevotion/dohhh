import type { CategoryContent } from './row.js';

/**
 * Central Asian History, East Asian Development.
 *
 * Two categories the original twelve handled badly: "History & Civilisations"
 * in practice meant European and Mediterranean history with a Zheng He question
 * for balance, which is a real coverage bias rather than a rounding error. These
 * are separate decks because the specialist literatures are separate.
 *
 * Calibration as in `DIFFICULTY_TIERS`: graduate is MA-in-the-field, phd is a
 * specialist, professor follows the current literature.
 */

export const CENTRAL_ASIA: CategoryContent = {
  bscba: [
    [
      'During the medieval period, which was the primary Chinese dynasty competing for influence in Central Asia?',
      ['The Tang', 'The Qin', 'The Song', 'The Yuan'],
      0,
      'The Tang Dynasty (618-907) was the major Chinese imperial power in Central Asia before Mongol expansion.',
    ],
    [
      'What major religious faith spread from South Asia eastward through Central Asia along trade routes?',
      ['Buddhism', 'Islam', 'Christianity', 'Zoroastrianism'],
      0,
      'Buddhism traveled from India through Central Asia into East Asia via Silk Road networks.',
    ],
    [
      'Which merchant people are historically most credited with developing overland trade networks across Central Asia?',
      ['The Sogdians', 'The Turkic peoples', 'The Persians', 'The Arabs'],
      0,
      'Sogdian merchants from Samarkand and Bukhara dominated long-distance trade across the region.',
    ],
    [
      'What was the primary economic system of medieval Central Asian nomadic peoples?',
      ['Pastoral herding of livestock', 'Agricultural farming', 'Marine trade and fishing', 'Mining and metalwork'],
      0,
      'Nomadic pastoralism of horses, sheep, and yaks provided the economic foundation of steppe societies.',
    ],
    [
      'Which Mongol leader unified the diverse tribal confederations of the Central Asian steppe?',
      ['Temüjin (Chinggis Khan)', 'Batu Khan', 'Timur', 'Kublai Khan'],
      0,
      'Temüjin unified the Mongol tribes in the early 13th century, becoming Chinggis Khan.',
    ],
    [
      'The Timurid Empire, which ruled Samarkand and Herat, was known for patronizing what?',
      ['Art, architecture, and scholarship', 'Naval exploration', 'Infantry-based warfare', 'Agricultural innovation'],
      0,
      'Timurid rulers made their capitals centers of astronomy, mathematics, and literature.',
    ],
    [
      'Which medieval Central Asian city became famous as a major center of Islamic learning?',
      ['Bukhara', 'Kashgar', 'Samarkand', 'Tashkent'],
      0,
      'Bukhara was a major hub of Islamic jurisprudence and mathematics for centuries.',
    ],
    [
      'Why did Central Asia become strategically important to successive empires and powers?',
      ['Control of trade routes between distant civilizations created wealth and political leverage', 'Vast deposits of precious metals', 'Fertile agricultural land suited to grain crops', 'Access to warm-water ocean ports'],
      0,
      'Geographic position between civilizations made Central Asian trade routes economically vital.',
    ],
    [
      'In which century did the Russian Empire intensify its expansion into Central Asia?',
      ['The nineteenth century', 'The sixteenth century', 'The eighteenth century', 'The twentieth century'],
      0,
      'Russian imperial expansion into Central Asia accelerated significantly during the 1800s.',
    ],
    [
      'What were the khanates that ruled Central Asia in the early modern period?',
      ['Independent states ruled by khans, with cities like Bukhara, Khiva, and Kokand as capitals', 'Provinces directly administered by the Russian Tsar', 'Trading companies licensed by the Ottoman Empire', 'Nomadic confederations without fixed urban centers'],
      0,
      'Bukhara, Khiva, and Kokand were independent khanates ruling Central Asia until Russian conquest.',
    ],
    [
      'Which mountain ranges formed the eastern and southern boundaries of historical Central Asia?',
      ['The Pamirs and Tian Shan', 'The Caucasus and Carpathians', 'The Urals and Altai', 'The Himalayas alone'],
      0,
      'The Pamirs and Tian Shan created natural barriers between Central Asia and East/South Asia.',
    ],
    [
      'How did Islam become the dominant religion of Central Asia?',
      ['Through military conquest and subsequent merchant networks expanding Muslim influence', 'Exclusively through peaceful missionary work', 'It was the region\'s indigenous faith before any invasions', 'Through European colonial expansion'],
      0,
      'Arab conquests from the 7th century brought Islam; merchants then expanded Muslim influence.',
    ],
    [
      'What was the primary purpose of caravanserais built along the Silk Road?',
      ['To provide merchants shelter, security, and trading facilities for goods and livestock', 'To serve as military fortifications', 'To process and refine luxury goods for resale', 'To house Buddhist pilgrims traveling to holy sites'],
      0,
      'Caravanserais were fortified roadside inns providing hospitality and security for merchants.',
    ],
    [
      'After the decline of Mongol unity, which ethnic and linguistic groups became dominant in Central Asia?',
      ['Turkic and Uzbek peoples', 'Scythians and Sarmatians', 'Huns and Rouran', 'Franks and Germanic tribes'],
      0,
      'Turkic and Uzbek groups ruled Central Asia after Mongol power fragmented into regional khanates.',
    ],
    [
      'What major geopolitical competition shaped Central Asian history in the nineteenth century?',
      ['British and Russian imperial interests vying for regional dominance', 'Ottoman and Persian dynastic rivalry', 'Chinese and Mongol territorial conflicts', 'Arab and Jewish political disputes'],
      0,
      'Britain and Russia competed for influence in Central Asia, the so-called "Great Game".',
    ],
  ],
  msc: [
    [
      'The Battle of Talas in 751 was fought between Tang forces and which power?',
      ['The Abbasid Caliphate', 'The Umayyad Caliphate', 'The Tibetan Empire', 'The Uyghur Khaganate'],
      0,
      'It came three years after the Abbasid revolution, and marked the practical limit of Tang influence west of the Pamirs rather than a decisive rout.',
    ],
    [
      'The Sogdians are historically most significant as what?',
      [
        'The merchant network whose language became the lingua franca of Silk Road trade',
        'The dynasty that unified Transoxiana under a single administration',
        'The nomadic confederation that displaced the Scythians from the steppe',
        'The monastic order that carried Buddhism into China',
      ],
      0,
      'Sogdian letters and contracts from Dunhuang and Mount Mugh are the reason we know as much as we do about the mechanics of that trade.',
    ],
    [
      'Which state did Chinggis Khan destroy in the campaign of 1219-21?',
      [
        'The Khwarazmian Empire',
        'The Ghurid Sultanate',
        'The Seljuk Sultanate of Rum',
        'The Samanid Emirate',
      ],
      0,
      'Triggered by the killing of a Mongol embassy at Otrar. Merv, Bukhara and Samarkand were sacked in sequence.',
    ],
    [
      'Timur made his capital at which city?',
      ['Samarkand', 'Bukhara', 'Herat', 'Balkh'],
      0,
      'His grandson Ulugh Beg built the observatory there; Herat became the Timurid cultural capital under Shah Rukh.',
    ],
    [
      'The nineteenth-century "Great Game" describes rivalry between which two powers?',
      [
        'Britain and Russia',
        'Russia and Qing China',
        'Britain and the Ottoman Empire',
        'Russia and Persia',
      ],
      0,
      'The term was popularised by Kipling; the historiographical argument is how much of it was strategic reality and how much was produced by the men writing the reports.',
    ],
  ],
  phd: [
    [
      'The Kara-Khitai (Western Liao) state was founded by refugees from which collapse?',
      [
        'The Khitan Liao dynasty, after its conquest by the Jurchen Jin',
        'The Tangut Western Xia, after the Mongol invasions',
        'The Uyghur Khaganate, after its defeat by the Yenisei Kirghiz',
        'The Northern Song, after the loss of Kaifeng',
      ],
      0,
      'Yelü Dashi led them west in the 1120s. Their defeat of the Seljuks at Qatwan in 1141 is one candidate source for the Prester John legend.',
    ],
    [
      'What was the yasa?',
      [
        'The body of Mongol law and custom attributed to Chinggis Khan',
        'The tax levied on sedentary populations by Mongol administrators',
        'The postal relay system linking the Mongol appanages',
        'The council of princes that elected a new khan',
      ],
      0,
      'No complete text survives, which is why its content and even its existence as a written code are contested. The relay system is the yam; the council is the quriltai.',
    ],
    [
      'The Jadid movement in Russian Central Asia is best characterised as what?',
      [
        'A Muslim modernist reform movement built around new-method schooling and print journalism',
        'A Sufi revivalist network resisting Russian administrative penetration',
        'A pan-Turkic political party seeking union with the Ottoman Empire',
        'A clerical faction defending madrasa curricula against reform',
      ],
      0,
      'Named from usul-i jadid, "the new method". The Soviet state initially co-opted the Jadids and then destroyed them in the purges.',
    ],
    [
      'What was the Basmachi movement?',
      [
        'Armed resistance to Bolshevik and early Soviet rule across Turkestan',
        'A Kazakh autonomist movement negotiating with the Provisional Government',
        'A confederation of Turkmen tribes resisting Russian conquest in the 1880s',
        'A reformist faction within the Bukharan emirate seeking a constitution',
      ],
      0,
      'The name comes from a pejorative meaning "bandit". It ran from roughly 1916 into the early 1930s and was as much a series of local revolts as one movement.',
    ],
    [
      'The Zunghar Khanate was destroyed in the 1750s by whom?',
      [
        'The Qing under the Qianlong emperor',
        'The Russian Empire under Elizabeth',
        'The Kazakh Middle Horde',
        'The Durrani Empire under Ahmad Shah',
      ],
      0,
      'The campaign and the demographic catastrophe that followed created what the Qing then named Xinjiang - "the new frontier".',
    ],
  ],
  professor: [
    [
      'The 2021 genomic study of the Bronze Age Tarim Basin mummies concluded what?',
      [
        'They descend largely from a local Ancient North Eurasian population, genetically isolated but culturally connected',
        'They were Indo-European migrants from the Afanasievo culture of the Altai, arriving with wheeled vehicles and dairying',
        'They derive principally from Bactria-Margiana agriculturalists moving north',
        'They represent an early admixture of Yamnaya steppe herders with East Asian farmers',
      ],
      0,
      'Zhang et al., Nature. It overturned the migration hypotheses that had dominated since the mummies were publicised, and separated genetic ancestry from cultural transmission cleanly.',
    ],
    [
      'The Orkhon inscriptions commemorate which figures?',
      [
        'Bilge Khagan and his brother Kul Tigin of the Second Türk Khaganate',
        'Bumin Qaghan and Istämi, founders of the First Türk Khaganate',
        'Kutlug Bilge Köl and the founders of the Uyghur Khaganate',
        'Tonyukuk alone, as vizier to three successive khagans',
      ],
      0,
      'The oldest substantial Turkic texts, in the runiform script, and unusual in being a steppe polity\'s own account of itself rather than a Chinese chronicle\'s.',
    ],
    [
      'Soviet korenizatsiya in Central Asia meant what in practice?',
      [
        'Promoting titular nationalities into party and state posts and building native-language institutions',
        'Settling Slavic populations in the republics to dilute local majorities',
        'Abolishing the republics in favour of direct administration from Moscow',
        'Restoring pre-revolutionary customary law under Soviet supervision, in place of both sharia and imperial courts',
      ],
      0,
      'The revisionist argument - Martin, Hirsch - is that the Soviet state actively manufactured the national categories it then administered, rather than merely recognising them.',
    ],
    [
      'Nader Shah\'s campaign north of the Amu Darya in 1740 subdued which two khanates?',
      ['Bukhara and Khiva', 'Kokand and Bukhara', 'Khiva and Kashgar', 'Balkh and Badakhshan'],
      0,
      'Both were reduced to tributary status; the Uzbek khanates\' recovery after his assassination in 1747 shaped the region until the Russian conquest.',
    ],
    [
      'The historiographical argument advanced in Beckwith\'s "Empires of the Silk Road" is what?',
      [
        'That Central Eurasia was an economic and political centre in its own right',
        'That steppe empires were fundamentally parasitic on sedentary agricultural surplus',
        'That the Silk Road as a continuous trade route is a nineteenth-century invention with no premodern reality',
        'That climate variability is the primary driver of steppe imperial formation',
      ],
      0,
      'The anti-peripheral case. The claim that "Silk Road" is itself a modern coinage - von Richthofen, 1877 - is true and separately argued, notably by Hansen.',
    ],
  ],
};

/**
 * Kept strictly to 1980-2000 economic/development content - anything more
 * general (theory with no date, or dated outside that window) moved to the
 * new East Asian History category (asia2.ts) instead. See MORE_EAST_ASIA
 * in more/eastasia.ts for the rest of this category.
 */
export const EAST_ASIA: CategoryContent = {
  bscba: [
    [
      'What term describes a government that actively guides economic development through strategic planning and targeted investment?',
      ['Developmental state', 'Centrally planned economy', 'Laissez-faire capitalism', 'Feudal economy'],
      0,
      'The developmental state used selective investment to promote rapid industrial growth in East Asia.',
    ],
    [
      'What were zaibatsu in postwar Japan?',
      ['Large family-controlled business conglomerates diversified across multiple sectors', 'Government-owned manufacturing plants', 'Labor unions in heavy industry', 'Agricultural marketing cooperatives'],
      0,
      'Zaibatsu were massive conglomerates like Mitsubishi and Mitsui that dominated Japan.',
    ],
    [
      'Why did South Korea and Taiwan emphasize export-led growth strategies in the 1960s-1980s?',
      ['Limited domestic markets made foreign sales essential for earning foreign currency to finance development', 'Abundant natural resources for international sale', 'Government mandate to eliminate all imports', 'Colonial legacy requiring specific trade partners'],
      0,
      'Export sales generated foreign currency needed for industrial investment in these small markets.',
    ],
    [
      'Which four East and Southeast Asian economies became known as the "Tiger" or "Dragon" economies in the 1980s?',
      ['South Korea, Taiwan, Hong Kong, and Singapore', 'Japan, Thailand, Malaysia, and Indonesia', 'China, Vietnam, Philippines, and Cambodia', 'Vietnam, Laos, Myanmar, and Thailand'],
      0,
      'The Four Tigers achieved rapid growth through export manufacturing and foreign investment.',
    ],
    [
      'What did foreign direct investment (FDI) contribute to East Asian countries during rapid industrialization?',
      ['Capital, manufacturing technology, and management expertise', 'Only low-wage labor opportunities', 'Colonial-style political control and debt', 'Environmental degradation without economic benefit'],
      0,
      'FDI provided capital and technology enabling the shift to export manufacturing.',
    ],
    [
      'What did China\'s "reform and opening up" policy beginning in 1978 aim to achieve?',
      ['Gradual introduction of market mechanisms while opening to foreign investment', 'Immediate abandonment of all communist structures', 'Return of the economy from industry to agriculture', 'Further isolation from global economic systems'],
      0,
      'The reforms gradually introduced market mechanisms while maintaining state control.',
    ],
    [
      'What were Special Economic Zones (SEZs) established in China?',
      ['Designated coastal areas with preferential policies designed to attract foreign investment and manufacturing', 'Military restricted zones closed to foreigners', 'Agricultural development and innovation areas', 'Historical and cultural preservation sites'],
      0,
      'SEZs like Shenzhen offered tax incentives to attract multinational manufacturing.',
    ],
    [
      'What did Vietnam\'s "Doi Moi" (Renovation) reform policy of 1986 introduce?',
      ['Market mechanisms and limited private enterprise while the Communist Party retained political control', 'Complete transition to Western-style representative democracy', 'Greater economic isolation from the global market', 'Expansion of centrally planned socialist production'],
      0,
      'Doi Moi introduced market reforms similar to China\'s economic opening.',
    ],
    [
      'Which country became the world\'s largest exporter of electronics and semiconductors in the 1980s?',
      ['Japan', 'South Korea', 'Germany', 'Taiwan'],
      0,
      'Japan dominated global electronics manufacturing in the 1980s.',
    ],
    [
      'What strategy did Malaysia and Thailand use to attract multinational manufacturing investment?',
      ['Offering low labor costs, political stability, and access to natural resources', 'Building indigenous technology companies independently', 'Strictly restricting foreign ownership to protect local industries', 'Relying exclusively on agricultural and raw material exports'],
      0,
      'Low wages and stability attracted foreign manufacturers to the region.',
    ],
    [
      'How did rapid industrialization in East Asia affect the rural population?',
      ['Rural workers migrated to cities seeking factory employment', 'Rural areas became centers of heavy industry', 'Farms became more productive through mechanization alone', 'Urban populations declined as workers returned to agriculture'],
      0,
      'Rural workers migrated to cities for manufacturing jobs and higher wages.',
    ],
    [
      'What role did Japanese companies play in East Asian industrialization networks?',
      ['They invested in joint ventures, transferred technology, and trained local workers across the region', 'They hoarded all advanced technology and prevented others from accessing it', 'They avoided investment outside Japan', 'They exploited resources while preventing local industrial development'],
      0,
      'Japanese firms invested regionally through joint ventures and technology licensing.',
    ],
    [
      'Why was infrastructure investment critical to East Asian development during this period?',
      ['Ports, roads, and power systems enabled manufacturing and trade networks essential for growth', 'Infrastructure was wasteful and slowed development', 'It primarily served military purposes and strategy', 'It was imposed by Western colonial powers against local interest'],
      0,
      'Ports, roads, and power grids enabled manufacturing and export trade.',
    ],
    [
      'What happened to agriculture\'s role in rapidly industrializing East Asian economies?',
      ['Agricultural production\'s share of GDP declined as economies shifted to manufacturing and services', 'Agriculture remained stable in economic importance', 'Farm output increased without any shift toward industry', 'Agriculture disappeared entirely from these economies'],
      0,
      'Agriculture\'s share of GDP fell as manufacturing and services grew.',
    ],
    [
      'Which international institution helped finance infrastructure and development projects across East Asia?',
      ['The Asian Development Bank and World Bank', 'OPEC', 'The Soviet Comecon bloc', 'The European Union'],
      0,
      'The Asian Development Bank financed infrastructure across East Asia.',
    ],
  ],
  msc: [
    [
      'The Japanese "main bank system" describes what?',
      [
        'A lead bank holding both debt and equity in a client firm, monitoring it and organising rescues',
        'The postal savings system channelling household deposits into public investment',
        'The central bank\'s window guidance over commercial lending volumes',
        'Cross-shareholding among firms within a keiretsu group',
      ],
      0,
      'Cross-shareholding is a related but distinct feature. The main bank\'s monitoring role is the standard explanation for why Japanese firms could run such high leverage.',
    ],
    [
      'What did the 1985 Plaza Accord agree?',
      [
        'Coordinated intervention to depreciate the US dollar, most consequentially against the yen',
        'A return to fixed parities among the G5 currencies, defended by agreed intervention bands and joint reserves',
        'Japanese voluntary export restraints on automobiles',
        'Mutual reductions in agricultural tariffs among the G5',
      ],
      0,
      'The endaka that followed pushed Japanese manufacturers offshore and is usually named as a precondition of the domestic asset bubble.',
    ],
    [
      'The "flying geese" model describes what?',
      [
        'Sequential industrial upgrading, with mature industries relocating to later-developing economies',
        'Coordinated currency management across the East Asian region',
        'Export-led growth financed by suppressed household consumption',
        'The diffusion of Japanese management practice through joint ventures and licensed technology transfer',
      ],
      0,
      'Akamatsu\'s formulation, revived by Kojima. The criticism is that it reads a Japan-led hierarchy into what became a far messier set of production networks.',
    ],
    [
      'What are the Korean chaebol?',
      [
        'Diversified business groups under family control, typically through cross-shareholding and holding structures',
        'State-owned enterprises privatised during the 1980s liberalisation and subsequently listed on the Seoul exchange',
        'Export cartels licensed by the trade ministry',
        'Regional banks that financed heavy industry under the Five-Year Plans',
      ],
      0,
      'The 1997 crisis forced restructuring of the debt-financed diversification, but the control structures largely survived it.',
    ],
    [
      'What were township and village enterprises in the Chinese reform period?',
      [
        'Collectively-owned rural firms, which drove much of the industrial growth of the 1980s',
        'Joint ventures between provincial governments and foreign investors under the open-coast policy',
        'Household businesses licensed under the individual-enterprise rules',
        'State-owned factories transferred to local government control',
      ],
      0,
      'Their ambiguous property rights were long treated as a puzzle for standard theory - and as evidence that secure private title is not a precondition for investment.',
    ],
  ],
  phd: [
    [
      'What does the "balance-sheet recession" account of Japan\'s lost decade claim?',
      [
        'Firms prioritised debt repayment over investment despite near-zero interest rates, so monetary easing could not transmit',
        'Banks were insolvent but concealed it, so credit was rationed away from healthy borrowers and toward their existing obligors',
        'Deflationary expectations became self-fulfilling through nominal wage rigidity',
        'Demographic decline reduced the natural rate below any achievable policy rate',
      ],
      0,
      'Koo\'s formulation: with corporate demand for credit absent, the argument runs to fiscal policy. The competing "zombie lending" account - Caballero, Hoshi and Kashyap - locates the problem in bank forbearance instead.',
    ],
    [
      'The Asian financial crisis of 1997 began with which event?',
      [
        'The float of the Thai baht in July 1997',
        'The collapse of Hanbo Steel in Korea',
        'Indonesia\'s abandonment of its crawling peg',
        'The Hong Kong Monetary Authority\'s defence of its currency board',
      ],
      0,
      'The subsequent argument - fundamentals versus self-fulfilling panic, and whether the IMF\'s fiscal conditionality made it worse - reshaped the field\'s view of capital-account liberalisation.',
    ],
    [
      'The 1994 fiscal reform (fenshuizhi) in China did what?',
      [
        'Recentralised tax revenue to Beijing while leaving expenditure obligations with local government',
        'Devolved both revenue and expenditure to the provinces',
        'Replaced the enterprise profit-remittance system with a value-added tax at unchanged shares',
        'Created a formal municipal bond market for local infrastructure',
      ],
      0,
      'The resulting revenue-expenditure gap is the standard explanation for land finance and local government financing vehicles - and therefore for the property cycle.',
    ],
  ],
  professor: [
    [
      'The failures of Yamaichi Securities and the Long-Term Credit Bank in 1997-98 marked what?',
      [
        'The end of the convoy system, and the beginning of genuine failure and nationalisation in Japanese finance',
        'The first application of deposit insurance to Japanese city banks rather than to regional institutions alone',
        'The Bank of Japan\'s first use of quantitative easing',
        'The abolition of the main bank system by statute',
      ],
      0,
      'Until then the Ministry of Finance had arranged rescues so that no major institution actually failed - which is precisely how the losses were allowed to accumulate unrecognised.',
    ],
  ],
};
