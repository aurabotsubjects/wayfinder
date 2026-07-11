// Rich lesson-plan content for Term 2, Week 3 — "Out on the Open Sea"
// Matches the structure and depth of Week 1 and Week 2's lesson plans.

const WEEK3_LESSONS_RAW = [

// ───────────────────────────── MONDAY — HISTORY ─────────────────────────────
{
  day: 'Monday', strand: 'History', sessionLabel: 'Trial 11: Leaving Sight of Land',
  topic: 'COURAGE AND PROVISIONS — What It Really Took to Cross the Ocean',
  curriculumArea: 'Social Sciences',
  aos: [
    'Understanding the Past: investigate the relationship between people and significant historical events, and how people responded.',
    'Understanding Place and Environment: explore how people\'s wellbeing is connected to their access to resources.',
  ],
  keyCompetencies: 'Thinking; Relating to Others; Managing Self',
  learningIntentions: [
    'We are learning what real Pacific voyaging canoes carried, and why those choices mattered for survival.',
    'We are learning to understand the real emotional and physical challenge of losing sight of land.',
    'I can connect a historical moment to a real human experience of courage.',
  ],
  assessment: "Teacher observation during the 'last sight of land' reflection and the trust walk. Review of students' captain's orders.",
  introduction: `"For two weeks we've prepared — we know the scale of the ocean, the currents, the winds, and the double-hulled vessel strong enough to survive it. Today we face the moment historians believe was often the hardest of the entire voyage: the last sight of land disappearing behind you.

Wonder question: what do you think would be harder — the physical danger of the ocean, or the feeling of having no land in sight for weeks at a time?"`,
  mainContent: [
    {
      title: 'What a Real Voyaging Canoe Carried (10 minutes)',
      points: [
        "Teacher Input: Voyaging canoes weren't just carrying people — historians and archaeologists believe they carried entire futures. Real voyaging canoes are believed to have carried food crops like kūmara (sweet potato) and other plants, intended to be planted at any new land found, alongside dried food and water stored in gourds or coconut shells for the journey itself.",
        "Some voyages are believed to have also carried animals such as dogs, pigs, or chickens — meaning a successful voyage wasn't just about survival at sea, but about being able to start an entirely new life upon arrival.",
        "Key Question: \"If you could only bring a limited number of things to start a brand-new life somewhere unknown, what would actually be worth the space on board?\"",
      ],
    },
    {
      title: 'The Real Challenge of Losing Sight of Land (10 minutes)',
      points: [
        "Teacher Input: Historians and psychologists studying voyaging cultures note that losing sight of land was both a practical and an emotional turning point — practically, because all navigation now depended entirely on sky, sea and memory; emotionally, because there was no longer any visible link back to everything familiar.",
        "Key Question: \"Why might a voyage's danger have been as much about the mind as it was about the body?\"",
      ],
    },
    {
      title: 'Stepping Into the Moment (15 minutes)',
      points: [
        "Activity: Quietly narrate the last sight of land disappearing behind the voyage. In pairs, students share (low-stakes) a time they had to be brave doing something unfamiliar.",
        "Activity: Run a blindfolded 'trust walk' in pairs across a short, safe course, mirroring the trust a voyager had to place in their crew and their preparation once land was gone.",
        "Activity: In small groups, write a short 'captain's order' — a sentence a voyage leader might say to keep the crew's courage up at this exact moment.",
      ],
    },
  ],
  exitTicket: `Write one sentence: what is ONE item historians believe real voyaging canoes carried, and why would it have mattered?`,
  faith: {
    ponder: 'The moment land disappears behind you is one of the most frightening — and most freeing — moments of any voyage. Tama\'s hand is shaking as he writes. But God\'s promise in Jeremiah was written for exactly this moment: a future we can\'t see yet, held by a God who can.',
    verse: '"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."',
    ref: 'Jeremiah 29:11 (NIV)',
    value: 'Aroha  Love',
    valueDesc: 'God\'s love for us is shown in the plans He holds for our future — even when we cannot see the destination from where we stand.',
    questions: [
      'Tama can\'t see land behind him or land ahead. Have you ever been in a situation where you couldn\'t see the way forward? What helped?',
      'God says His plans are \'to give you hope and a future.\' How does it change things to know that Someone knows what\'s ahead, even when you don\'t?',
      'How do you hold on to hope when you\'re in the \'middle of the ocean\' — far from what was familiar and not yet at what\'s next?',
    ],
  },
  resources: [
    'Blindfolds for the trust walk',
    'A short, clear, safe course for the activity',
    'Paper for captain\'s orders',
  ],
  videos: [
    { title: 'What did voyaging canoes carry?', search: 'what did Polynesian voyaging canoes carry provisions', why: 'Provides real, age-appropriate detail on what voyaging canoes are believed to have carried.' },
  ],
  studentAgency: {
    art: { title: 'Illustrate the Loaded Canoe', body: `Draw a cross-section or "cutaway" view of a voyaging canoe, showing what real historians believe it would have carried.\n\n**Instructions:**\n1. Include people, food crops, water storage, and one animal.\n2. Label each item.\n\n**Reflection Prompt:** What surprised you about how much had to be planned for, beyond just the people?` },
    readWrite: { title: 'The Last Sight of Land', body: `Write a short personal reflection, in role as a voyager, describing the exact moment land disappears from view.\n\n**Word Count Guide:** 120–180 words.\n\n**Reflection Prompt:** What emotion did you choose to focus on, and why?` },
    technology: { title: 'Build a Provisions Packing List', body: `Create a simple digital checklist or table of everything a real voyaging canoe is believed to have carried, with a one-line reason for each item.\n\n**Reflection Prompt:** If you had to remove one item to save space, which would you cut, and why?` },
    watchReview: { title: 'Watch and Note: Voyaging Provisions', body: `Watch a short video on what voyaging canoes carried.\n\n**Search term:** "what did Polynesian voyaging canoes carry provisions"\n\n**Reflection Prompt:** What item did the video mention that you hadn't thought of?` },
  }
},

// ───────────────────────────── TUESDAY — GEOGRAPHY ─────────────────────────────
{
  day: 'Tuesday', strand: 'Geography', sessionLabel: "Trial 12: What the Ocean's Surface Tells You",
  topic: 'WAVE PILOTING — Reading the Real Signs of Land',
  curriculumArea: 'Social Sciences (Geography)',
  aos: [
    'Understanding Place and Environment: explore how people use their understanding of natural features and patterns to make decisions.',
  ],
  keyCompetencies: 'Thinking; Using Language, Symbols & Text',
  learningIntentions: [
    'We are learning real techniques voyagers used to detect land long before it was visible.',
    'We are learning how swells, birds, and floating debris each provided different real clues.',
    'I can match a type of evidence to the conclusion it supports.',
  ],
  assessment: 'Teacher observation of the detective-style clue-matching activity and the "report to the captain" presentations.',
  introduction: `"Yesterday we faced the moment land disappeared. Today, we learn one of the most genuinely impressive real skills in human history: how voyagers could sense land was near long before they could see it, just by reading the ocean's surface.

Wonder question: how do you think someone could possibly know land was nearby, without seeing it?"`,
  mainContent: [
    {
      title: 'Wave Piloting — A Real, Documented Skill (12 minutes)',
      points: [
        "Teacher Input: In real Pacific navigation traditions — including ones still taught today in places like the Marshall Islands — skilled navigators learned to feel and read subtle changes in ocean swells. When swells hit an island, they bend and reflect off it in patterns that can be felt by an experienced navigator lying in the hull of a canoe, sometimes long before the island is visible.",
        "Key Question: \"Why might FEELING a wave pattern be a skill that takes years to learn, compared to simply looking for land?\"",
      ],
    },
    {
      title: 'Birds and Floating Clues (10 minutes)',
      points: [
        "Teacher Input: Certain real seabirds, like frigatebirds, generally don't land on the ocean's surface — so spotting one far out at sea is a genuine clue that land must be within flying range. Many seabirds also reliably return to land at dusk, meaning their direction of flight at the end of the day could point a voyager toward an island.",
        "Floating plant matter, particular leaves, or changes in water colour near reefs were also real, used clues that land was close.",
      ],
    },
    {
      title: 'Detective Challenge: Match the Clue (15 minutes)',
      points: [
        "Activity: Set up a detective-style station challenge with scattered clue cards showing real wayfinding signs (a bird far from land, drifting plant matter, a swell pattern bending around an unseen island). In teams, match each clue to what it would tell a real voyager.",
        "Activity: Teams present their best clue-match as a short 'report to the captain' — what does the evidence suggest right now?",
      ],
    },
  ],
  exitTicket: `Write one sentence naming ONE real clue voyagers used to detect land before seeing it.`,
  faith: {
    ponder: 'Jesus challenged the Pharisees for being able to read the weather but unable to read what God was doing right in front of them. The voyagers were extraordinary readers of the ocean\'s signs. God invites us to be readers of His signs too — attentive, curious, and awake.',
    verse: 'You know how to interpret the appearance of the sky, but you cannot interpret the signs of the times.',
    ref: 'Matthew 16:3 (NIV)',
    value: 'Mōhio  Know',
    valueDesc: 'Knowing God means learning to read what He is doing in the world — in nature, in history, and in our own lives.',
    questions: [
      'The voyagers read the ocean\'s surface for signs of land. What \'signs\' in your daily life might God be using to say something to you?',
      'Jesus said the Pharisees could read the sky but missed what God was doing. What might you be missing that God is doing right now?',
      'How do you practise being more attentive to what God might be saying?',
    ],
  },
  resources: [
    'Clue cards: bird behaviour, floating debris, swell patterns',
    'Simple Pacific map for context',
  ],
  videos: [
    { title: 'Wave piloting — reading ocean swells', search: 'wave piloting Marshall Islands navigation swells', why: 'Documents the real, still-taught navigation technique referenced in this lesson.' },
    { title: 'How birds helped Pacific navigators find land', search: 'birds signs of land Pacific navigation', why: 'Reinforces the real bird-behaviour clues discussed in class.' },
  ],
  studentAgency: {
    art: { title: 'Illustrate a Wave Pattern Bending Around an Island', body: `Draw a simple diagram showing how ocean swells bend and reflect when they hit an island.\n\n**Instructions:**\n1. Draw an island and incoming straight swell lines.\n2. Show how the lines bend around the island.\n\n**Reflection Prompt:** Why would this pattern be detectable even before the island is visible?` },
    readWrite: { title: "A Navigator's Report", body: `Write a short "report to the captain" in role as a navigator who has just noticed a real clue (bird, debris, or swell pattern) suggesting land is near.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** How confident would you really feel acting on just one clue?` },
    technology: { title: 'Build a Clue-Matching Digital Quiz', body: `Create a simple digital matching activity (Google Slides, Canva) pairing each real clue (bird, debris, swell) with what it tells a voyager.\n\n**Reflection Prompt:** Which clue do you think would be hardest to learn to read well?` },
    watchReview: { title: 'Watch and Note: Reading the Ocean', body: `Watch a short video on wave piloting or bird-based navigation.\n\n**Search term:** "wave piloting Marshall Islands navigation swells"\n\n**Reflection Prompt:** What part of this skill most impressed you?` },
  }
},

// ───────────────────────────── WEDNESDAY — SCIENCE ─────────────────────────────
{
  day: 'Wednesday', strand: 'Science', sessionLabel: 'Trial 13: Cloud Code',
  topic: 'READING CLOUDS — A Real Trick for Finding Islands Before You See Them',
  curriculumArea: 'Science (Planet Earth and Beyond)',
  aos: [
    'Investigate weather phenomena and how they affect people and the environment.',
    'Build science knowledge by exploring observations and comparing these with current scientific understanding.',
  ],
  keyCompetencies: 'Thinking; Participating & Contributing',
  learningIntentions: [
    'We are learning to identify basic cloud types and what each can indicate.',
    'We are learning a real technique voyagers used: spotting a stationary cloud cap to find an island before seeing land.',
    'I can make and justify a simple weather prediction using real observation.',
  ],
  assessment: "Teacher observation of outdoor cloud observation and the class's 'voyage forecast' predictions.",
  introduction: `"Yesterday we learned how to read the sea's surface. Today we look up again — because clouds hold a genuinely clever real secret that helped voyagers find islands long before they could see them.

Wonder question: have you ever noticed a cloud that seems to just sit in one place, while others move past it?"`,
  mainContent: [
    {
      title: 'Basic Cloud Types (10 minutes)',
      points: [
        "Teacher Input: Introduce three simple cloud types — cumulus (puffy, often fair weather), cumulonimbus (tall, dark, often storm-bearing), and cirrus (thin, wispy, high up, often signalling a change in weather coming).",
        "Show real images of each type for students to identify.",
      ],
    },
    {
      title: "The Real Island Cloud Trick (12 minutes)",
      points: [
        "Teacher Input: Here's a genuinely real and clever navigation trick — islands, especially ones with mountains, often cause a single cloud to form and sit almost stationary directly above them, because rising warm air off the land cools and condenses at a consistent point. A trained voyager could sometimes spot this 'island cloud' on the horizon well before the island itself came into view.",
        "Key Question: \"Why would a cloud that doesn't move, while others around it drift past, be a genuinely useful clue?\"",
      ],
    },
    {
      title: 'Real Sky Observation (8 minutes)',
      points: [
        "Activity: Take the class outside to observe real clouds, identifying any of today's three types and noting whether any appear to be staying in one place rather than moving.",
        "Activity: In groups, use today's observation to make and justify a real 'voyage forecast' prediction.",
      ],
    },
  ],
  exitTicket: `Write one sentence explaining the real "island cloud" trick discussed today.`,
  faith: {
    ponder: 'The cloud code the voyagers read was God\'s weather system — a complex, interconnected design that brings rain to mountains, signals danger to sailors, and tells stories to those who know how to look. Every cloud type is part of a system God designed and still maintains.',
    verse: 'He covers the sky with clouds; he supplies the earth with rain and makes grass grow on the hills.',
    ref: 'Psalm 147:8 (NIV)',
    value: 'Mōhio  Know',
    valueDesc: 'Understanding how God\'s creation works — from weather patterns to cloud types — deepens our knowledge of the wise Creator behind it all.',
    questions: [
      'Psalm 147 says God \'covers the sky with clouds\' — does knowing God made the weather system change how you look at clouds? How?',
      'Hina taught Tama to read clouds like a letter. What \'language\' do you think God uses most often to communicate with you?',
      'Why do you think God designed a world that rewards careful observation and patient learning?',
    ],
  },
  resources: [
    'Reference images of cumulus, cumulonimbus, and cirrus clouds',
    'Paper for voyage forecast logs',
  ],
  videos: [
    { title: 'Cloud types explained for kids', search: 'cloud types explained for kids cumulus cirrus cumulonimbus', why: 'Gives a clear, age-appropriate overview of the basic cloud types covered in this lesson.' },
    { title: 'How clouds reveal hidden islands', search: 'how clouds form over islands navigation clue', why: 'Explains the real, documented phenomenon central to this lesson\'s key navigation trick.' },
  ],
  studentAgency: {
    art: { title: 'Illustrate an Island Cloud', body: `Draw an island with its real "island cloud" forming above it, while other clouds drift past in the background.\n\n**Instructions:**\n1. Draw the island and its stationary cloud.\n2. Draw 2–3 other clouds clearly moving in a different direction.\n\n**Reflection Prompt:** What did you do in your drawing to show one cloud is "stuck" while others move?` },
    readWrite: { title: "A Voyager Spots the Sign", body: `Write a short story moment, in role as a voyager, describing the instant you notice a stationary cloud and realise it might mean land.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** How would you feel in that exact moment, after weeks without land?` },
    technology: { title: 'Build a Cloud Identification Guide', body: `Create a simple digital reference guide (Canva, Google Slides) with an image and short description of each cloud type from today's lesson.\n\n**Reflection Prompt:** Which cloud type do you think would be easiest to misidentify, and why?` },
    watchReview: { title: 'Watch and Note: Clouds and Islands', body: `Watch a short video on cloud types or the island-cloud phenomenon.\n\n**Search term:** "how clouds form over islands navigation clue"\n\n**Reflection Prompt:** What detail from the video would you tell a friend who didn't believe this trick was real?` },
  }
},

// ───────────────────────────── THURSDAY — TECHNOLOGY ─────────────────────────────
{
  day: 'Thursday', strand: 'Technology', sessionLabel: 'Trial 14: Catch the Wind',
  topic: 'THE CRAB CLAW SAIL — A Real, Remarkably Efficient Design',
  curriculumArea: 'Technology',
  aos: [
    'Technological Knowledge: understand how the shape and properties of materials affect the performance of a product.',
    'Nature of Technology: understand that technological outcomes are evaluated and improved through testing.',
  ],
  keyCompetencies: 'Thinking; Managing Self',
  learningIntentions: [
    'We are learning how sail shape and angle affect how efficiently a vessel catches wind.',
    "We are learning about the real 'crab claw' sail design used across the Pacific.",
    'I can test and improve a sail design using real engineering reasoning.',
  ],
  assessment: 'Teacher observation of the sail-testing and redesign process. Review of written explanations connecting shape to performance.',
  introduction: `"We've built a stable double-hulled vessel and learned to read sea, sky, and clouds for clues. Today we focus on the part that actually moves the whole vessel forward: the sail. And it turns out, Pacific sailors developed one of the most efficient sail shapes in the whole of human sailing history.

Wonder question: do you think a sail's shape actually matters, or is any large piece of material just as good at catching wind?"`,
  mainContent: [
    {
      title: 'The Real Crab Claw Sail (10 minutes)',
      points: [
        "Teacher Input: Many traditional Pacific sailing vessels used a distinctive triangular sail shape, sometimes called a 'crab claw' sail because of its curved, claw-like silhouette. Modern sailing scientists studying traditional designs have found this shape to be genuinely, remarkably efficient at generating forward motion from the wind — among the most aerodynamically effective traditional sail shapes ever studied.",
        "Key Question: \"Why might a society without modern science have still arrived at such an efficient design, just through generations of trial and observation?\"",
      ],
    },
    {
      title: 'Shape, Angle, and Wind (10 minutes)',
      points: [
        "Teacher Input: A sail works by being angled so wind flowing across its surface creates forward force, similar to how an aeroplane wing generates lift. The exact angle and curve of a sail changes how efficiently it captures that force.",
      ],
    },
    {
      title: 'Test, Redesign, Improve (15 minutes)',
      points: [
        "Activity: In teams, design and test a simple sail (paper or fabric on a small mast) attached to a model vessel, testing in front of a fan or moving air to find the most effective shape and angle.",
        "Activity: After the first test, redesign and re-test at least once, just as real sail-makers improved their designs over generations.",
        "Key Question during testing: \"What specifically changed between your first and second design, and why did you expect it to help?\"",
      ],
    },
  ],
  exitTicket: `Write one sentence explaining why sail shape and angle affect how well a sail catches wind.`,
  faith: {
    ponder: 'A sail doesn\'t fight the wind — it trusts it. A sail trimmed correctly uses the wind\'s power to go places no amount of paddling could reach. Isaiah\'s image of soaring on wings is about the same kind of trust: not straining against the circumstances, but finding the right angle to let God\'s strength carry you.',
    verse: 'Those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
    ref: 'Isaiah 40:31 (NIV)',
    value: 'Pānga  Impact',
    valueDesc: 'When we align our gifts with God\'s purposes — like a sail catching the wind — we have far greater impact than we could ever achieve alone.',
    questions: [
      'A sail doesn\'t generate power — it harnesses what\'s already there. How might that be a picture of how God wants us to work?',
      '\'Soar on wings like eagles\' — what does it feel like when everything is working the way it should, and you\'re moving with God\'s strength rather than just your own?',
      'How do you \'trim your sail\' — position yourself to catch God\'s strength rather than relying only on your own effort?',
    ],
  },
  resources: [
    'Paper or light fabric, small masts/sticks, tape',
    'A fan or open space with moving air for testing',
    'Model vessels from Week 1/2 (optional, can reuse)',
  ],
  videos: [
    { title: 'The crab claw sail explained', search: 'crab claw sail Pacific Polynesian efficient design', why: 'Documents the real, scientifically-studied sail design referenced in this lesson.' },
    { title: 'How sails work', search: 'how sails work wind science explained', why: 'Gives a clear, age-appropriate explanation of the basic physics behind sailing.' },
  ],
  studentAgency: {
    art: { title: 'Design a Decorated Crab Claw Sail', body: `Draw a labelled crab claw sail design, decorated with a pattern that represents your "voyage" so far.\n\n**Instructions:**\n1. Draw the distinctive curved triangular shape.\n2. Add a decorative pattern.\n3. Label the parts that catch the wind.\n\n**Reflection Prompt:** Why do you think this curved shape might work better than a flat rectangle?` },
    readWrite: { title: "A Sail-Maker's Notes", body: `Write a short set of "notes," in role as a real sail-maker, describing what you changed between your first and second sail design and why.\n\n**Word Count Guide:** 120–180 words.\n\n**Reflection Prompt:** How is this similar to how real inventors improve their designs over time?` },
    technology: { title: 'Digital Sail Design Comparison', body: `Create a simple digital chart comparing your two sail test results (e.g. speed, stability, how well it caught the wind).\n\n**Reflection Prompt:** Did your redesign perform the way you expected?` },
    watchReview: { title: 'Watch and Note: The Crab Claw Sail', body: `Watch a short video about the crab claw sail or how sails work.\n\n**Search term:** "crab claw sail Pacific Polynesian efficient design"\n\n**Reflection Prompt:** What surprised you about how effective this traditional design really is?` },
  }
},

// ───────────────────────────── FRIDAY — ART ─────────────────────────────
{
  day: 'Friday', strand: 'Art', sessionLabel: 'Trial 15: Reading the Patterns',
  topic: 'KŌWHAIWHAI DESIGN STUDY — Wave Scrolls, Colour & Meaning',
  curriculumArea: 'The Arts (Visual Art)',
  aos: [
    'Developing Practical Knowledge: explore the visual qualities of art works from a range of cultures and periods.',
    'Communicating and Interpreting: identify and describe ways in which meanings are communicated through art works.',
    'Understanding the Arts in Context: investigate the purpose of objects and images from past and present cultures.',
  ],
  keyCompetencies: 'Thinking; Relating to Others; Using Language, Symbols & Text',
  learningIntentions: [
    'We are learning to read and interpret kōwhaiwhai patterns as a visual language used by Māori artists.',
    'We are understanding how colour (black, red/kōkōwhai, white) and repeating motifs create rhythm and meaning.',
    'I can design my own wave-pattern panel inspired by kōwhaiwhai, and explain the choices I made.',
  ],
  assessment: 'Teacher observation of pattern study and student written reflection explaining motif choices and personal connection to the patterns.',
  introduction: `Display the archival kōwhaiwhai reference image (Tikitiki Church, Arawa Rotorua, and Tikitiki panels). Give students 2 minutes to simply look — no talking — before asking: "What do you notice about the colours? The shapes? Do you see any shapes repeating?" Take 3–4 responses, then explain: "These patterns are a language. Every scroll, every chevron tells a story about the ocean, about movement, about who these people were. Today we're going to learn to read that language — and then speak a little of it ourselves."`,
  mainContent: [
    {
      title: 'Reading the Patterns Together (10 minutes)',
      points: [
        "Teacher Input: introduce the three key kōwhaiwhai patterns visible in the archival image — (1) the koru/scroll (a curling fern frond representing new life, growth, and the ocean returning on itself); (2) the chevron/arrow pointing forward (direction, courage, the voyage ahead); (3) the repeating band structure (the rhythm of the sea, one wave always following another).",
        "Discuss: Māori artists traditionally used only three colours — black (charcoal), red/kōkōwhai (red ochre pigment), and white (pipe clay). Why might these specific colours have been chosen? What do they suggest? (Black: night sky, the deep ocean; Red: blood, life, fire, courage; White: the stars, seafoam, light.)",
        "Point out: in the Arawa Rotorua panel (middle band), the scroll reverses direction as it repeats — ask students: what might that reversal represent? (The wave going out and coming back. The voyage leaving home and returning.)",
      ],
    },
    {
      title: 'Guided Design Sketch (8 minutes)',
      points: [
        "Activity: give each student a landscape strip of paper (roughly A5 size, or half an A4). Students choose ONE motif from the reference image to practise — either the scroll/koru or the chevron — and repeat it across the strip as a border pattern, using pencil first.",
        "Teacher circulates: the key question to prompt is 'What does your pattern look like it's doing?' — is it moving, breathing, surging? Help students feel the rhythm rather than just copy mechanically.",
        "Encourage students to vary the size of repeats slightly — Māori artists were not rigid; the pattern breathes.",
      ],
    },
    {
      title: 'Adding Colour and Reflection (12 minutes)',
      points: [
        "Activity: students colour their pattern using only the three traditional colours — black, red, and white — using felt tips, dye, or paint as available. Remind them: the background matters as much as the motif.",
        "Activity: in their journal or on the back of the strip, students write 2–3 sentences: what pattern they chose, what it reminds them of from this week's voyage, and what they think the original artist might have felt making it.",
        "Optional extension: students may add a personal touch — a shape or line that is theirs — while still honouring the pattern's structure.",
      ],
    },
  ],
  exitTicket: `Share one sentence with the class: "My pattern is saying ______ because ______."`,
  faith: {
    ponder: 'The kōwhaiwhai scroll is a pattern that keeps returning — the wave curls back on itself, the spiral never truly ends. Paul\'s words about Christ echo this rhythm: all things hold together in Him. Even when the wave breaks, even when the scroll reaches its edge, it begins again.',
    verse: 'He is before all things, and in him all things hold together.',
    ref: 'Colossians 1:17 (NIV)',
    value: 'Pānga  Impact',
    valueDesc: 'Art that carries meaning — like the kōwhaiwhai scroll — brings God\'s Kingdom creativity into the world and points to the One who holds all things together.',
    questions: [
      'The kōwhaiwhai wave reverses direction and returns — \'going out and coming back.\' How might that be a picture of something in your own faith journey?',
      'If \'in him all things hold together,\' what does that mean for the parts of your life that feel like they might be falling apart?',
      'How can the art you make today be an act of worship?',
    ],
  },
  resources: [
    'Printed or projected archival kōwhaiwhai reference image (Tikitiki Church / Arawa Rotorua panels)',
    'A5 strips of white cartridge paper (or half A4), one per student',
    'Pencils for sketching',
    'Black, red, and white felt tips, paint, or dye',
    'Student journals for written reflection',
  ],
  videos: [
    { title: 'Introduction to Kōwhaiwhai Patterns', search: 'kowhaiwhai patterns Maori art meaning for kids', why: 'Provides accessible context for students on the meaning and tradition behind kōwhaiwhai, supporting the pattern-reading discussion at the start of the lesson.' },
    { title: 'Māori Rafter Painting Technique', search: 'Maori rafter painting kowhaiwhai technique traditional', why: 'Shows how kōwhaiwhai patterns are applied in real wharenui contexts, helping students understand the patterns as living tradition rather than historical artefact.' },
  ],
  studentAgency: {
    art: { title: 'Design Your Kōwhaiwhai Panel', body: `This week's main activity IS the art focus — study the archival reference, choose your motif, and design your own kōwhaiwhai wave-pattern strip using the three traditional colours.\n\n**Reflection Prompt:** What does your pattern look like it's doing — moving, surging, breathing? How did you make that happen?` },
    readWrite: { title: 'The Language of Patterns', body: `Write a short piece (100–150 words) imagining you are the Māori artist who created the Arawa Rotorua panel. Why did you choose the scroll pattern? What were you trying to say about the ocean or the voyage?\n\n**Reflection Prompt:** How is designing a pattern similar to writing a sentence?` },
    technology: { title: 'Digital Kōwhaiwhai', body: `Use a simple drawing tool to recreate one kōwhaiwhai motif digitally, then repeat it to form a border pattern. Use only black, red, and white.\n\n**Reflection Prompt:** What was harder to control digitally — the shape, the spacing, or the colour? Why?` },
    watchReview: { title: 'Watch and Note: Kōwhaiwhai Meaning', body: `Watch a short video on kōwhaiwhai patterns and their meaning in Māori art.\n\n**Search term:** "kowhaiwhai patterns Maori art meaning for kids"\n\n**Reflection Prompt:** What surprised you most about what these patterns represent?` },
  }
}

]

// Register these lesson plans into the shared app registry: Term 2, Week 3
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {};
window.ALL_LESSON_PLANS['polynesian-migration'] = window.ALL_LESSON_PLANS['polynesian-migration'] || {};
window.ALL_LESSON_PLANS['polynesian-migration'][3] = {};
WEEK3_LESSONS_RAW.forEach(l => { window.ALL_LESSON_PLANS['polynesian-migration'][3][l.day] = l; });
