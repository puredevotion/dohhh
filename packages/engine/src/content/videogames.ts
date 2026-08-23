import type { CategoryContent } from './row.js';

/**
 * Video Games & Consoles.
 */

export const VIDEOGAMES: CategoryContent = {
  bscba: [
    [
      'The Nintendo Entertainment System prevented unlicensed games from running using a special authentication chip. What primary industry problem did this system aim to solve?',
      ['Too many low-quality third-party games flooding the market after the 1983 crash', 'Cartridges being copied illegally and sold as counterfeits', 'Players sharing cartridges between multiple consoles', 'Game developers charging unfairly high prices for cartridges'],
      0,
      'After the 1983 video game market collapse caused by overproduction of poor-quality games on competing systems, Nintendo used the 10NES lockout chip to control third-party publishing through a strict licensing program, maintaining market quality.'
    ],
    [
      'Sega marketed the Genesis console heavily in the early 1990s with the phrase "Blast Processing." What hardware capability did this slogan refer to?',
      ['Fast data transfer to the graphics processor for rapid screen updates', 'A second CPU running at twice the main processor\'s speed', 'A special chip dedicated to 3D polygon rendering', 'A proprietary memory system that was fundamentally faster'],
      0,
      'The Genesis could rapidly transfer graphics data between video frames using DMA, allowing quick visual updates. Sega rebranded this existing feature with the catchy "Blast Processing" marketing slogan to suggest superior speed against Nintendo.'
    ],
    [
      'The Atari 2600 home console used a processor known as the 6507. This chip was a cost-reduced version of which well-known processor family?',
      ['The MOS 6502', 'The Zilog Z80', 'The Motorola 68000', 'The Intel 8086'],
      0,
      'The 6507 was a smaller, cheaper variant of the 6502 with fewer address lines and pins, allowing Atari to reduce manufacturing costs on the console while maintaining basic processor functionality for 1977 hardware.'
    ],
    [
      'Why did Nintendo choose to use cartridges instead of adopting the CD-ROM format for the Nintendo 64, despite both Sony PlayStation and Sega Saturn using discs?',
      ['Cartridges offered faster loading and better anti-piracy protection', 'CD-ROMs were too expensive for Nintendo to manufacture', 'Nintendo lacked the technology to make CD-ROM drives work', 'Cartridges could store more data than the CD-ROMs available at the time'],
      0,
      'Cartridges provided near-instant loading with minimal lag and were much harder to pirate than CDs. However, this choice meant the N64 had far less storage capacity than rival consoles, limiting game scope.'
    ],
    [
      'The Sega Dreamcast, released in 1998-1999, was notable for including which standard feature that most other consoles offered only as an optional add-on?',
      ['A built-in modem for internet connectivity', 'Support for multiple controllers simultaneously', 'A built-in FM synthesis sound chip', 'Backward compatibility with previous Sega consoles'],
      0,
      'Every Dreamcast shipped with a 56k modem integrated into the console, letting owners play online games like Phantasy Star Online without purchasing separate hardware, distinguishing it from competitors.'
    ],
    [
      'Before becoming Sony\'s standalone PlayStation console, the project began as a joint development with which company as a CD-ROM add-on for their existing console?',
      ['Nintendo', 'Sega', 'Atari', 'NEC'],
      0,
      'Sony partnered with Nintendo in the early 1990s to develop a CD-ROM add-on for the Super Nintendo, but Nintendo simultaneously negotiated with Philips and publicly blindsided Sony at CES 1991, leading Sony to launch the PlayStation independently.'
    ],
    [
      'The original Game Boy featured a relatively simple, low-power processor design compared to more colorful rival handhelds. What was the primary reason for this design choice?',
      ['To maximize battery life on AA batteries', 'To make the device cheap enough for mass-market consumers', 'To ensure compatibility with future Game Boy revisions', 'To simplify game development for the platform'],
      0,
      'The Game Boy\'s modest hardware was deliberately chosen to run many hours on four AA batteries, while flashier competitors like the Atari Lynx and Game Gear drained batteries much faster, limiting their practical appeal.'
    ],
    [
      'The Magnavox Odyssey is generally credited as the first commercial home video game console. In what year was it released?',
      ['1972', '1975', '1969', '1977'],
      0,
      'Ralph Baer\'s design was released by Magnavox as the Odyssey in 1972, years before Atari\'s home Pong and other competitors, using analog circuitry and plastic screen overlays rather than a microprocessor for its simple graphics.'
    ],
    [
      'SNK\'s Neo Geo AES home console was extraordinarily expensive compared to rivals when launched in 1990. What hardware design choice primarily drove this high cost?',
      ['It used arcade-identical hardware from SNK\'s existing arcade boards', 'It included a built-in arcade game library in ROM', 'It required expensive custom manufacturing in Japan', 'It included a high-end monitor and arcade-style joystick'],
      0,
      'The Neo Geo AES essentially reused SNK\'s MVS arcade board hardware directly in a home console format. This gave authentic arcade graphics but cost far more than competitors, positioning it as a boutique product for enthusiasts.'
    ],
    [
      'The original PlayStation\'s graphics often exhibited a visual artifact where textures on polygons appeared to bend or warp. What was this technical limitation called?',
      ['Texture warping from affine texture mapping', 'Aliasing artifacts from interlaced rendering', 'Z-fighting between overlapping surfaces', 'Mip-map level banding artifacts'],
      0,
      'The PS1 GPU used affine texture mapping without perspective correction, causing textures to distort visibly on large or angled polygon surfaces. This became a recognizable signature of the console\'s visual style throughout its generation.'
    ],
    [
      'What was the primary reason Nintendo decided to keep the Virtual Boy\'s display monochrome red instead of offering full color graphics?',
      ['Using red LEDs and mirrors was cheaper than making color LCD panels', 'Red light causes less eye strain during prolonged play', 'Monochrome displays were easier for the eyes to process', 'Color LCD technology was not available in 1995'],
      0,
      'The Virtual Boy used a clever but inexpensive LED and oscillating mirror system for each eye. Using only red LEDs was cheaper than building dual color LCD panels at the resolution Nintendo wanted for the stereoscopic effect.'
    ],
    [
      'The Sega Master System, while unsuccessful in the United States and Europe, achieved long-term market dominance in one country thanks to a partnership with a local company. Which country?',
      ['Brazil', 'Mexico', 'South Korea', 'Argentina'],
      0,
      'A Brazilian company called Tectoy licensed the Master System for their market starting in 1989 and continued manufacturing and releasing games for decades after Sega moved on to other consoles globally, dominating the local market.'
    ],
    [
      'The PC Engine (TurboGrafx-16) was marketed with "16-bit" branding despite having an 8-bit CPU. What component did the "16-bit" designation actually refer to?',
      ['The graphics processor that operated on 16-bit data internally', 'The main processor bus width between CPU and RAM', 'The cartridge ROM address space size', 'The sound synthesis chip from Yamaha'],
      0,
      'NEC\'s marketing leaned on the graphics chip\'s 16-bit internal operation to compete against genuinely 16-bit machines like the Genesis and SNES, even though the CPU itself was an 8-bit design derived from the 6502 family.'
    ],
    [
      'Doom (1993) was revolutionary partly because it popularized which type of file that players could create and share to extend the game beyond the original content?',
      ['Custom maps and game modifications (mods)', 'High-definition texture packs for graphics upgrades', 'Network protocol extensions for online play', 'Emulation cores for running on different hardware'],
      0,
      'id Software officially supported Doom modifications and custom maps, establishing a thriving modding community that created new levels and gameplay variants. This became standard industry practice for PC games afterward.'
    ],
    [
      'The Famicom Disk System, released in Japan, offered an alternative to cartridges using rewritable storage. What advantage did disk-based games provide over cartridge-only games?',
      ['Lower cost per game and built-in save data without batteries', 'Faster loading times and access to larger game worlds', 'Better sound quality and music composition capabilities', 'Ability to play games from previous Nintendo consoles'],
      0,
      'The Famicom Disk System used Mitsumi Quick Disk media, which was cheaper to produce than cartridges and allowed in-game save data without requiring battery-backed RAM chips in the cartridges themselves.'
    ]
  ],
  msc: [
    [
      'What is the name of the authentication chip Nintendo embedded in both NES cartridges and consoles specifically to block unlicensed games from running on the hardware?',
      ['10NES', 'CIC-2000', 'NES-Lock', 'RGB-1'],
      0,
      'The 10NES was a lockout chip pair: one chip in the console and a matching one in every cartridge had to handshake correctly, or the console would reset itself repeatedly, producing the infamous blinking screen.',
    ],
    [
      'The Atari 2600\'s main CPU was a cost-reduced variant of the MOS 6502 with a smaller pin package and only 13 address lines instead of 16. What was this chip\'s designation?',
      ['MOS 6507', 'MOS 6502', 'Zilog Z80', 'Motorola 6800'],
      0,
      'The 6507 was a 6502 die in a cheaper 28-pin package with fewer address pins, letting Atari reach an aggressive 1977 price point.',
    ],
    [
      'In what year did the Magnavox Odyssey, generally credited as the first commercial home video game console, go on sale?',
      ['1972', '1975', '1969', '1977'],
      0,
      'Ralph Baer\'s prototype, developed in the late 1960s, was licensed to Magnavox and released as the Odyssey in 1972, years before Atari\'s home Pong unit.  It used analog circuitry, generated simple dots and lines, and required plastic overlays taped to the TV screen for graphics.',
    ],
    [
      'Which 1982 Atari 2600 game, developed in roughly five weeks to meet a Christmas deadline, is most commonly cited as accelerating the 1983 North American video game crash and was later linked to a mass landfill burial in Alamogordo, New Mexico?',
      ['E.T. the Extra-Terrestrial', 'Pac-Man (Atari 2600)', 'Custer\'s Revenge', 'Raiders of the Lost Ark'],
      0,
      'Atari paid $20-25 million for the film license, then rushed the game in five weeks for the 1982 holiday season, producing a poorly reviewed product.  Atari overproduced relative to demand, creating a symbol of industry collapse.',
    ],
    [
      'Sega\'s marketing slogan \'Blast Processing,\' used to claim the Genesis was faster than the SNES, was primarily a rebranding of which real hardware feature?',
      ['Fast DMA transfers to the VDP for rapid graphics updates', 'A dedicated second Motorola 68000 co-processor chip', 'Hardware-accelerated polygon rendering circuitry', 'A proprietary 32-bit bus doubling the CPU clock speed'],
      0,
      'The Genesis\'s video display processor used DMA to update screen portions between frames.  Sega\'s marketing team packaged this existing feature into "Blast Processing"—catchy but technically vague.',
    ],
    [
      'Approximately how much did SNK\'s Neo Geo AES home console retail for at its 1990 US launch, a price reflecting its use of essentially unmodified arcade hardware?',
      ['around $650', 'around $200', 'around $1,200', 'around $350'],
      0,
      'SNK built the AES from the same MVS arcade hardware used in coin-op cabinets, giving arcade-identical graphics and sound at arcade-scale costs far above competitor consoles.  Cartridges cost $200+ each, containing the same ROM chips as arcade boards.',
    ],
    [
      'Which built-in feature made the Sega Dreamcast, launched in Japan in 1998 and North America in 1999, the first major home console to ship with native internet connectivity as a standard, non-optional feature?',
      ['A built-in 56k modem', 'A built-in Ethernet port', 'A bundled ISDN adapter', 'A proprietary satellite receiver'],
      0,
      'Every Dreamcast shipped with a built-in 56k modem, letting owners dial into SegaNet or ISPs to play early online titles like Phantasy Star Online without buying separate hardware.  This was forward-looking; PlayStation 2 and GameCube treated online as optional add-on peripherals for years afterward.',
    ],
    [
      'Before becoming Sony\'s standalone PlayStation, the project began as a CD-ROM add-on developed jointly with Sony for which existing Nintendo console, under a partnership that later collapsed?',
      ['Super Nintendo (SNES)', 'Sega Genesis Mega Drive', 'NEC PC Engine TurboGrafx', 'Nintendo 64 game console'],
      0,
      'Nintendo contracted Sony to build a CD-ROM add-on and SNES-compatible cartridge format called "Play Station," but simultaneously negotiated a rival CD deal with Philips, publicly blindsiding Sony at CES 1991.',
    ],
    [
      'id Software\'s Doom (1993) rendered its levels efficiently in real time by precomputing which space-partitioning data structure, which let the engine quickly determine visible geometry from the player\'s viewpoint?',
      ['Binary space partitioning (BSP trees)', 'Ray-traced voxel rendering', 'Z-buffered polygon culling', 'Portal-based occlusion culling'],
      0,
      'John Carmack implemented BSP trees to preprocess level geometry into a tree for quick traversal, drawing walls in correct depth order without a depth buffer.  This was essential for early-1990s PCs lacking per-pixel depth testing.',
    ],
    [
      'The original Game Boy\'s CPU, the Sharp LR35902, is best described as a custom chip combining instruction-set features of which two earlier processor families?',
      ['The Zilog Z80 and the Intel 8080', 'The MOS 6502 and Zilog Z80', 'The Motorola 68000 and MOS 6502', 'The Intel 8086 and Zilog Z80'],
      0,
      'The LR35902 implements Z80 instructions alongside 8080-style register conventions, close enough to both that programmers could adapt quickly.  Sharp built it for Game Boy, prioritizing low power over speed for many hours on four AA batteries.',
    ],
    [
      'Sega\'s System 16 arcade hardware, introduced in 1985 and used for games like Altered Beast and Shinobi, used which processor as its primary CPU, with a secondary chip of the same family handling sound?',
      ['Motorola 68000', 'Zilog Z80 alone', 'MOS 6502', 'Intel 8086'],
      0,
      'System 16 paired a Motorola 68000 as the main CPU with a dedicated Z80 for sound, a common arcade division of labor.',
    ],
    [
      'Atari marketed the Jaguar (1993) as the world\'s first \'64-bit\' console, a claim widely disputed because its actual controlling CPU, a Motorola 68000, only handled data at what width, with the \'64-bit\' figure instead referring to a combined bus width across separate custom co-processors?',
      ['16/32-bit', '8-bit', '64-bit (the claim was accurate)', '128-bit'],
      0,
      'The Jaguar\'s 68000 served mainly as boot/housekeeping while two custom chips ("Tom" and "Jerry") handled graphics and audio.  Atari\'s "64-bit" claim came from adding up various internal bus widths rather than describing any processor\'s register width.',
    ],
    [
      'NEC\'s PC Engine (sold in North America as the TurboGrafx-16) was marketed using \'16-bit\' branding despite its main CPU being an 8-bit processor; the \'16-bit\' figure instead referred to which component?',
      ['Its graphics chip, the HuC6270 controller', 'Its Yamaha-derived FM sound synthesis chip', 'Its main CPU-to-memory system bus width', 'Its cartridge ROM address bus width'],
      0,
      'The PC Engine\'s CPU was an 8-bit HuC6280 derived from the 6502, but its graphics processor operated on 16-bit data internally.  NEC\'s marketing leaned entirely on that 16-bit graphics capability to compete with genuinely 16-bit machines.',
    ],
    [
      'Nintendo\'s decision to keep cartridges rather than adopt CD-ROM for the Nintendo 64, unlike Sony\'s PlayStation and Sega\'s Saturn, was driven primarily by concerns over which two factors?',
      ['Load times and anti-piracy protection', 'Manufacturing cost and color depth limits', 'Third-party licensing fees and cartridge physical durability', 'Storage capacity and controller compatibility'],
      0,
      'Cartridges offered near-instant loading and were much harder to pirate than CDs, both priorities for Nintendo given earlier piracy problems.',
    ],
    [
      'Despite being a commercial also-ran against the NES in the United States, the Sega Master System achieved dominant, decades-long market success in which country, largely due to a long-running licensing partnership with a local company called Tectoy?',
      ['Brazil', 'Mexico', 'South Korea', 'Argentina'],
      0,
      'Tectoy licensed the Master System for Brazil starting in 1989 and unusually kept manufacturing and releasing new games for decades after Sega moved on elsewhere, including region-specific titles never released anywhere else.',
    ],
  ],
  phd: [
    [
      'The Sega Saturn\'s notoriously difficult architecture centered on two identical main CPUs of which type, run in a master/slave configuration that made efficient parallel programming difficult for many Western developers?',
      ['Hitachi SH-2', 'Motorola 68020', 'MIPS R4300i', 'NEC V810'],
      0,
      'Sega paired two Hitachi SH-2 processors, betting developers could split workloads, but this required careful manual scheduling many Western studios struggled to exploit.  Japanese in-house teams like AM2 got much better results.',
    ],
    [
      'The 3DO Interactive Multiplayer, licensed to multiple manufacturers such as Panasonic and Goldstar rather than built by one company, was designed by a company founded by which former Electronic Arts co-founder and first CEO?',
      ['Trip Hawkins', 'Bing Gordon', 'Larry Probst', 'Bill Budge'],
      0,
      'Trip Hawkins left EA to start The 3DO Company in 1991, using a VHS-like licensing model where 3DO designed specs and hardware partners like Panasonic manufactured units under their own brands.  This avoided manufacturing costs for 3DO but meant no single company controlled pricing tightly.',
    ],
    [
      'The Nintendo 64\'s Reality Co-Processor (RCP), which handled both graphics and audio processing, was co-designed with Nintendo by which workstation and graphics technology company?',
      ['Silicon Graphics, Inc. (SGI)', 'Sun Microsystems', 'Evans & Sutherland', '3dfx Interactive'],
      0,
      'SGI, known for high-end professional 3D graphics workstations, partnered with Nintendo to adapt rendering expertise into consumer-affordable silicon for the N64, giving it advanced texture filtering and anti-aliasing for 1996.',
    ],
    [
      'The Sega CD add-on for the Genesis included an additional Motorola 68000 CPU running roughly twice the clock speed of the Genesis\'s own main CPU, primarily to handle which task?',
      ['Decompressing and managing CD data separately from the main Genesis CPU', 'Rendering true polygonal 3D graphics', 'Running FM synthesis audio entirely independently of the Genesis sound chip', 'Emulating Sega Master System backward compatibility'],
      0,
      'Streaming and decompressing CD data in real time, plus sprite scaling and rotation, required more power than Sega wanted from the Genesis\'s original 68000, so engineers added a second, faster 68000 dedicated to that overhead.',
    ],
    [
      'Nintendo\'s Virtual Boy (1995) created its monochrome stereoscopic 3D effect using which unconventional display technology, rather than a conventional LCD or CRT screen?',
      ['A pair of oscillating mirrors reflecting red LED arrays into each eye', 'Dual monochrome LCD panels mounted at a fixed parallax offset', 'A single rear-projection CRT split optically between the eyes', 'Plasma display elements arranged in a stereo pair'],
      0,
      'Each eyepiece had a row of red LEDs and an oscillating mirror that swept light to create a persistence-of-vision image, cheaper than dual LCD panels.  Tradeoffs included monochrome red-and-black display, tabletop-only design, and widely reported eye strain from extended play.',
    ],
    [
      'The original PlayStation\'s GPU rendered textured polygons using affine texture mapping without per-pixel depth correction across the polygon surface, producing the console\'s characteristic visual artifact commonly described by which term?',
      ['Texture warping (affine texture distortion)', 'Screen tearing from unsynchronized vertical sync', 'Z-fighting between overlapping polygon surfaces', 'Mip-map level banding and aliasing artifacts'],
      0,
      'The GPU interpolated texture coordinates linearly across the screen rather than correctly in 3D perspective space, causing textures on large or angled polygons to bend, swim, or wobble as the camera moved, especially visible on ground planes.',
    ],
    [
      'Namco\'s 1982 arcade shooter Xevious is frequently credited by historians as an early landmark for popularizing which now-ubiquitous scrolling technique, achieved through a dedicated tilemap hardware layer separate from the sprite layer?',
      ['Smooth continuous scrolling via a dedicated background tile layer', 'Multi-plane parallax scrolling at different independent speeds', 'Diagonal 45-degree scrolling across the playfield', 'Horizontal wraparound scrolling for infinite terrain loops'],
      0,
      'Xevious used custom hardware to scroll a large, detailed background tilemap smoothly beneath the player\'s ship and sprites, letting designer Masanobu Endo create a sense of flying over coherent, sprawling terrain.',
    ],
    [
      'Bandai\'s Playdia, a CD-ROM console released in Japan in 1994, was specifically designed around which target audience, distinguishing its software library sharply from contemporaries like the 3DO and Sega CD?',
      ['Young children, with interactive picture-book and anime-style titles', 'Arcade operators, for location-based testing of new coin-op concepts', 'Adult-oriented visual novel and FMV enthusiasts', 'Educational institutions, for classroom-based instructional software'],
      0,
      'Bandai positioned the Playdia as a children\'s entertainment device around simple branching interactive stories, often licensing anime and tokusatsu properties with a remote-control-style controller.',
    ],
    [
      'The Panasonic M2, developed as a technical successor to the 3DO but ultimately cancelled as a consumer console and repurposed for arcade and industrial applications, was built around which CPU architecture?',
      ['Dual PowerPC 602 processors', 'MIPS R4000 RISC processor', 'ARM610 embedded processor', 'SuperH SH-4 RISC processor'],
      0,
      'The M2 used dual PowerPC 602 processors delivering more 3D graphics than the original 3DO, PlayStation, and Saturn.  Matsushita invested heavily before shelving consumer plans in 1997 amid Sony\'s market dominance.',
    ],
    [
      'Commodore\'s Amiga CD32 (1993), one of the first 32-bit CD-based game consoles, was essentially a console-form adaptation of which existing Amiga computer model\'s custom chipset?',
      ['Amiga 1200', 'Amiga 500', 'Amiga 4000', 'Amiga 3000'],
      0,
      'The CD32 reused the AGA chipset from the Amiga 1200 computer, giving it enhanced color and resolution without new custom graphics.  This let existing Amiga software port with little rework and launched with competitive price and specs against 3DO and Sega CD.',
    ],
    [
      'The Sega Genesis\'s distinctive FM synthesis sound came from which Yamaha sound chip, also used in several contemporary arcade boards and PC sound cards of the same era?',
      ['YM2612', 'YM2151', 'SN76489', 'YM3812 (OPL2)'],
      0,
      'The YM2612 provided six channels of FM synthesis, giving Genesis a harsher, metallic tone vs.  SNES\'s sample-based sound.  Composers leaned into this to create the console\'s now-nostalgic sonic identity in games like Streets of Rage.',
    ],
    [
      'Nintendo\'s Famicom Disk System (1986) used rewritable removable storage media based on which existing Mitsumi consumer format, repackaged into a proprietary yellow plastic casing for Nintendo\'s use?',
      ['Quick Disk (magnetic floppy variant)', 'Standard 3.5-inch floppy disk drives', 'Compact Cassette magnetic tape drives', 'MiniDisc magneto-optical disc media'],
      0,
      'Nintendo licensed Mitsumi\'s Quick Disk format and rebranded it as the Famicom Disk System\'s proprietary media, giving Japanese owners cheaper, rewritable, higher-capacity storage than cartridges.',
    ],
    [
      'The arcade version of Rare and Midway\'s Killer Instinct (1994) ran on hardware built around a MIPS-family processor derived from Silicon Graphics workstation technology, an unusually powerful and expensive choice for an arcade fighting game of its era. What was this general processor family?',
      ['MIPS (an SGI-derived RISC architecture)', 'A custom Motorola 88000 RISC processor', 'An Intel i860 graphics co-processor', 'A Zilog Z8000'],
      0,
      'Rare extended its SGI workstation expertise into powerful custom arcade hardware for Killer Instinct, giving noticeably advanced pre-rendered visual fidelity vs.  rival fighting games on older arcade boards.',
    ],
    [
      'NEC\'s PC-FX (1994), successor to the PC Engine, deliberately avoided dedicated 3D polygon rendering hardware and instead invested heavily in supporting which content type, a strategic choice that hurt it competitively against the PlayStation and Saturn?',
      ['Full-motion video and visual novel titles', 'Real-time 3D racing simulation software', 'Arcade-perfect 2D fighting game ports', 'Point-and-click PC adventure game ports'],
      0,
      'NEC and Hudson Soft bet FMV and visual novel content, popular on Japanese PCs, would be PC-FX\'s strength, engineering it for fast video decompression rather than 3D geometry.',
    ],
    [
      'The ColecoVision\'s Expansion Module #1 allowed it to play cartridges from which earlier console by replicating that console\'s hardware almost exactly inside the add-on?',
      ['Atari 2600', 'Magnavox Odyssey²', 'Atari 5200', 'Mattel Intellivision'],
      0,
      'Coleco built genuine Atari 2600-compatible hardware into the expansion module rather than software emulation, giving ColecoVision owners access to the huge 2600 library on day one.',
    ],
  ],
  professor: [
    [
      'Magnavox\'s 1974 patent-infringement lawsuit against Atari over the Odyssey\'s underlying technology, the first in a long series Magnavox won against nearly the entire industry, was built on patents originally filed by which engineer, later called \'the father of home video games\'?',
      ['Ralph Baer', 'Nolan Bushnell', 'Al Alcorn', 'Bill Rusch'],
      0,
      'Ralph Baer sketched interactive television game concepts starting in 1966 at Sanders Associates; his patents, licensed to Magnavox, covered fundamental concepts like on-screen player-controlled dots interacting, broad enough to cover essentially every subsequent console including Atari\'s.',
    ],
    [
      'RCA\'s Studio II (1977), a commercial failure that predated and lost badly to the Atari 2600, shipped with a notable hardware omission relative to most contemporaries: it had no...',
      ['sound output of any kind', 'cartridge slot, using built-in games only', 'AC power adapter, requiring user-supplied power circuits', 'controller ports, using only built-in keypads'],
      0,
      'The Studio II produced entirely silent gameplay, striking even by 1977 standards, since rivals like Fairchild Channel F and Magnavox Odyssey managed beeps.',
    ],
    [
      'Nintendo\'s Donkey Kong (1981) was created partly out of commercial necessity: the company had a large unsold surplus of arcade cabinets from which earlier, commercially disappointing shooter that needed new game boards to become sellable again?',
      ['Radar Scope', 'Sheriff', 'Space Firebird', 'Sky Skipper'],
      0,
      'Radar Scope flopped on its 1980 US release, leaving Nintendo\'s American subsidiary with ~2000 unsold cabinets and financial pressure.  The company tasked Shigeru Miyamoto with creating a new game reusing existing hardware.',
    ],
    [
      'Sega\'s Zaxxon (1982) is historically significant as one of the first widely successful arcade games to popularize which visual perspective, using flat painted sprites combined with height and shadow cues to simulate a 3D axonometric viewpoint?',
      ['Isometric (axonometric) projection', 'True first-person perspective rendering', 'Mode 7-style hardware rotozoom scaling', 'Forced-perspective parallax scrolling'],
      0,
      'Zaxxon displayed space-fortress environments from a fixed diagonal overhead angle using drop shadows beneath the ship to convey altitude, simulating flight without true 3D geometry.',
    ],
    [
      'Williams Electronics\' early-1980s arcade hardware, used for games like Defender, Stargate, and Robotron: 2084, featured a custom-designed graphics chip that let those games display far more simultaneously moving objects than most competing boards. This chip is generally referred to by collectors and hardware historians as the...',
      ['Williams Special Chip (custom blitter)', 'Williams Pixel Array Controller chip', 'Williams Vector Accelerator chip', 'Williams Sprite Engine Mark 1 chip'],
      0,
      'The Special Chip functioned as an early hardware blitter, rapidly copying and moving pixel data blocks without requiring the main CPU to redraw everything, letting Robotron: 2084 sustain dozens of independently moving enemies on screen at once.',
    ],
    [
      'Coleco\'s ADAM computer (1983), sold as an expansion of the ColecoVision, suffered from a notorious design flaw in which the printer\'s power-up surge, needed to power the whole combined system, could erase data on which storage medium if a tape happened to be sitting in the drive during boot?',
      ['Digital Data Pack cassette tapes', '5.25-inch floppy disk cartridges', 'Cartridge-based battery-backed RAM packs', 'Bubble memory solid-state storage cards'],
      0,
      'The ADAM drew power through its bundled daisy-wheel printer rather than separate power brick, and power-on surge could corrupt Digital Data Pack tapes in the drive.  This became an infamous early-home-computer design flaw, compounding a troubled launch with manufacturing delays.',
    ],
    [
      'Capcom\'s CP System II (CPS-2) arcade boards, used for later titles like Street Fighter Alpha and Darkstalkers, employed a battery-backed on-chip encryption and decryption scheme specifically engineered to defeat which persistent threat to arcade operators\' revenue?',
      ['Bootleg or pirated arcade boards copying the game\'s ROM data', 'Home console ports undercutting arcade ticket sales', 'Tournament players exploiting frame-data glitches for unfair advantage', 'Rival publishers reverse-engineering the fighting engine\'s move system'],
      0,
      'CPS-2 boards encrypted program ROMs, requiring a battery-backed security module to decrypt code on the fly.  Once batteries died, typically after years, boards failed entirely rather than continuing—a deliberate anti-piracy tradeoff.',
    ],
    [
      'The Sharp X68000, a Japanese home computer released in 1987, became particularly renowned among arcade enthusiasts because its custom sprite and scroll hardware could produce unusually faithful ports of which company\'s arcade titles, most famously Street Fighter II and Ghouls \'n Ghosts?',
      ['Capcom', 'Sega', 'Taito', 'SNK'],
      0,
      'The X68000\'s custom video hardware included dedicated sprite and background-scroll circuitry similar in capability to Capcom arcade boards, letting programmers achieve remarkably close ports years before affordable consoles could match them.',
    ],
    [
      'SNK\'s Multi Video System (MVS), the arcade counterpart to the Neo Geo AES home console, allowed a single cabinet to hold up to how many swappable game cartridges simultaneously, selectable from a menu, in its largest common configuration?',
      ['Six', 'Four', 'Two', 'Ten'],
      0,
      'MVS cabinets came in one-, two-, four-, and six-slot configurations.  Six-slot versions let operators offer a rotating menu of games and swap underperforming titles without new hardware, an efficient business model for limited floor space.',
    ],
    [
      'Sega\'s Model 2 arcade board (1993), which powered Virtua Fighter 2 and Daytona USA, built on 3D rendering technology developed in collaboration with the Real3D graphics division, a joint venture tied to which aerospace and defense contractor\'s flight-simulator graphics heritage?',
      ['Lockheed Martin', 'General Dynamics', 'Northrop Grumman', 'Raytheon'],
      0,
      'Model 2 used 3D technology developed for military flight simulators, continued through Real3D, a joint venture with Lockheed Martin\'s advanced graphics group, bringing aerospace-grade real-time 3D into arcades years before home consoles.',
    ],
    [
      'Atari founder Nolan Bushnell reportedly learned that the very first Pong test unit installed at Andy Capp\'s Tavern was malfunctioning within days, only to discover the actual problem was that...',
      ['the coin box had become completely jammed full of quarters', 'the vector display\'s power supply had overheated and shut down', 'a faulty potentiometer was causing erratic paddle drift', 'the scoring circuit had looped past ninety-nine and reset to zero'],
      0,
      'The bar owner called Atari reporting the machine had stopped working, but when a technician opened the cabinet, they found the coin box packed solid with quarters—the machine was so popular it overflowed with money faster than anticipated.',
    ],
    [
      'In the original Pac-Man (1980), the pink ghost Pinky\'s targeting algorithm calculates its destination tile by projecting how many tiles directly ahead of Pac-Man\'s current position and facing direction?',
      ['Four tiles', 'Two tiles', 'Eight tiles', 'One tile'],
      0,
      'Pinky\'s AI computes a target tile exactly four spaces ahead of Pac-Man in his facing direction, then paths toward it.  All four ghosts use the same logic but calculate different targets, giving each distinct personality.',
    ],
    [
      'Taito\'s arcade shoot-\'em-up Darius (1986) was notable for an original cabinet configuration featuring which unusual display setup, later offered as a selectable presentation option in some home ports of its sequel, Darius Gaiden?',
      ['Three connected CRT monitors forming one panoramic ultra-wide screen', 'A single ultra-widescreen CRT viewed through an anamorphic lens', 'Dual stacked vertical screens for local split-screen co-op', 'A rear-projection screen fed by two overlapping projectors'],
      0,
      'Darius\'s original cabinet, the "Body Sonic" edition, joined three separate CRT monitors edge to edge to create one continuous panoramic playfield, a dramatic and expensive presentation meant to make large-scale boss encounters feel immersive.',
    ],
    [
      'Sega\'s Out Run (1986), designed by Yu Suzuki, achieved its pseudo-3D racing visuals not through true polygon rendering but through a technique historians commonly call \'Super Scaling,\' in which custom hardware did what to sprites in real time to simulate depth and distance?',
      ['Scaled sprites line by line as they approached or receded', 'Rotated sprites continuously around a fixed z-axis pivot point', 'Rendered Gouraud-shaded low-polygon meshes at reduced screen resolution', 'Composited pre-rendered ray-traced frames stored on a laserdisc'],
      0,
      'Out Run\'s custom hardware scaled sprite graphics per-scanline in real time, letting roadside objects grow and shrink as the player\'s car approached, simulating speed and depth without true 3D geometry.',
    ],
    [
      'Atari\'s Battlezone (1980), an arcade vector-graphics tank game, was adapted for the United States Army into a training simulator under a program known by which name, which replaced the arcade tank\'s silhouette with more realistic vehicle models and added tactical training scenarios?',
      ['The Bradley Trainer', 'The Abrams Simulator', 'Project Ironclad', 'The M1 Tactical Trainer'],
      0,
      'The Army approached Atari because Battlezone\'s vector-graphics engine simulated a first-person tank gunner\'s viewpoint convincingly.  Atari engineers modified it to train Bradley Fighting Vehicle gunners, adjusting vehicle handling and weapon systems with realistic terrain vs.',
    ],

  ],
};
