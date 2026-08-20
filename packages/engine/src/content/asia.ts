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
  graduate: [
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

export const EAST_ASIA: CategoryContent = {
  graduate: [
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
      'MITI\'s "administrative guidance" is best described as what?',
      [
        'Informal, largely non-statutory direction of industry investment, capacity and cartel arrangements',
        'Statutory licensing of all industrial investment above a notified threshold, enforced by the trade ministry',
        'Direct state ownership of firms in designated strategic sectors',
        'Allocation of foreign exchange to exporters by administrative quota',
      ],
      0,
      'Johnson\'s "developmental state" made it famous; the revisionist literature argues its successes are heavily selected and its failures - aluminium, aerospace - understated.',
    ],
    [
      'What does China\'s hukou system principally determine?',
      [
        'Household registration, and with it local entitlement to schooling, health care and housing',
        'The right to hold urban land-use rights as collateral against a bank loan, a mortgage or a corporate bond',
        'Eligibility for employment in state-owned enterprises',
        'Internal travel permission between provinces',
      ],
      0,
      'It is why a large migrant workforce could be urban in employment while remaining rural in entitlement - a central mechanism of the growth model and of its inequality.',
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
      'What does the "dual circulation" strategy announced in 2020 prioritise?',
      [
        'The domestic market as the mainstay, with external engagement retained as complementary',
        'Import substitution across all strategic sectors within a decade',
        'Renminbi internationalisation as the primary route to external resilience, backed by bilateral swap lines',
        'Bilateral currency swap lines in place of dollar reserves',
      ],
      0,
      'Read at the time as a hedge against decoupling; the analytical question is whether it is a genuine reorientation of demand or a relabelling of the existing rebalancing agenda.',
    ],
    [
      'What is the principal empirical objection to the "middle income trap" as a concept?',
      [
        'Transition probabilities out of middle income are not unusual once income bands are defined consistently',
        'It applies only to resource exporters, and so carries no general content once terms of trade are controlled for',
        'It cannot be tested because too few countries have reached high income',
        'It conflates purchasing-power and market-exchange-rate measures of income',
      ],
      0,
      'Im and Rosenblatt made the case sharply. The policy discussion generally continued regardless, which is itself an interesting fact about the field.',
    ],
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
    [
      'Why is the term "Beijing Consensus" contested in the development literature?',
      [
        'It attributes a coherent transferable model to a policy record that was gradualist, experimental and internally inconsistent',
        'It was coined by Chinese officials as an explicit counter-programme to the Washington Consensus, and only later adopted abroad',
        'It describes only the post-2008 stimulus period and not the reform era',
        'It conflates Chinese policy with the earlier East Asian developmental state',
      ],
      0,
      'Ramo\'s 2004 coinage. "Crossing the river by feeling for the stones" is not a model, and the successful elements are hard to separate from the sheer scale of catch-up available.',
    ],
    [
      'What does the literature on China\'s "excess savings" identify as the main driver of the high household saving rate?',
      [
        'Precautionary motives under weak social insurance, compounded by demographic and sex-ratio effects on competitive saving',
        'Financial repression on its own, holding household deposit rates below the market-clearing level for two decades after 1994',
        'A cultural preference for thrift with no measurable economic determinant',
        'Mandatory contributions to the state pension system',
      ],
      0,
      'Wei and Zhang\'s competitive-saving argument from the sex ratio is the most striking single finding; the corporate and government sectors also save heavily, which the household framing tends to obscure.',
    ],
  ],
};
