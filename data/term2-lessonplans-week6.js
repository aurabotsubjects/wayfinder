// Rich lesson-plan content for Term 2, Week 6 — "Landfall"
// Matches the structure and depth of Weeks 1–5's lesson plans.

const WEEK6_LESSONS_RAW = [

// ───────────────────────────── MONDAY — HISTORY ─────────────────────────────
{
  day: 'Monday', strand: 'History', sessionLabel: 'Trial 21: Land!',
  topic: 'ARRIVAL IN AOTEAROA — One of the Last Great Landmasses Settled by Humans',
  curriculumArea: 'Social Sciences',
  aos: [
    'Understanding the Past: investigate how the perspectives of people in the past differ, based on evidence available about their lives and choices.',
    'Understanding Place and Environment: explore how the arrival of people in a new place changes both the people and the place.',
  ],
  keyCompetencies: 'Thinking; Relating to Others',
  learningIntentions: [
    'We are learning roughly when and how Aotearoa was first settled, based on real evidence.',
    'We are learning that Aotearoa was one of the last major landmasses on Earth to be reached by people.',
    'I can use real evidence to support a claim about a historical arrival.',
  ],
  assessment: 'Teacher observation of the "first 24 hours" priority-ranking discussion. Review of student decisions and justifications.',
  introduction: `"After five weeks of preparing, sailing, and surviving, the voyage finally reaches land. But here's a fact that often surprises people: historians and archaeologists believe Aotearoa was one of the very last major landmasses on Earth to be settled by humans — likely only around 700 years ago, sometime around 1300 CE.

Wonder question: if humans had already been living on most other continents for tens of thousands of years, why might Aotearoa have been one of the last places reached?"`,
  mainContent: [
    {
      title: 'Real Evidence of Early Arrival (12 minutes)',
      points: [
        "Teacher Input: one of the most important real archaeological sites in this story is Wairau Bar, in Marlborough at the top of the South Island. Excavations there uncovered evidence of one of New Zealand's earliest known settlements, including tools, ornaments, and the bones of moa — a now-extinct giant flightless bird hunted by early arrivals — helping archaeologists estimate settlement dates of roughly 1280–1300 CE.",
        "Key Question: \"Why might bones and tools left behind tell us more reliable information than a guess based on stories alone — and why might we still need both kinds of evidence together?\"",
      ],
    },
    {
      title: 'Why So Late? (8 minutes)',
      points: [
        "Teacher Input: Aotearoa's extreme distance from other landmasses, combined with the genuinely difficult ocean crossing required to reach it, are real reasons historians believe it remained unsettled for so long compared to most of the rest of the world.",
      ],
    },
    {
      title: 'The First 24 Hours (15 minutes)',
      points: [
        "Activity: close eyes and narrate the moment of stepping onto an unknown shore — the sounds, smells, the ground feeling strange after weeks at sea — then open eyes to a real image of Aotearoa's coastline.",
        "Activity: in groups, rank the top 3 decisions a small group of new arrivals would genuinely need to make in their first 24 hours (shelter, fresh water, food, safety), and defend the chosen order.",
      ],
    },
  ],
  exitTicket: `Write one sentence: roughly when do historians believe Aotearoa was first settled, and what is one piece of real evidence that supports this?`,
  faith: {
    ponder: 'After weeks at sea, land appears — green mountains, birds, the smell of earth. This is the moment the whole voyage was for. The Bible is full of moments like this: God bringing His people to a new place after all the fear and waiting, and saying — here. This is it.',
    verse: 'He brought us to this place and gave us this land, a land flowing with milk and honey.',
    ref: 'Deuteronomy 26:9 (NIV)',
    value: 'Aroha  Love',
    valueDesc: 'God\'s love is shown in the places He brings us to — after the storms, after the long waiting, after the courage it cost.',
    questions: [
      'Deuteronomy describes God \'bringing\' His people to a new place. In what ways has God brought YOU somewhere new — a new school, a new friendship, a new understanding?',
      'Tama\'s family carried plants and seeds to grow in the new land. What things do you carry with you that are important to who you are?',
      'What would it mean for you to treat your home — your town, your school — as a gift from God worth caring for?',
    ],
  },
  resources: [
    'Image of Aotearoa\'s coastline/landscape',
    'Information or images relating to Wairau Bar (if available)',
    'Paper for the priority-ranking activity',
  ],
  videos: [
    { title: 'When was Aotearoa first settled?', search: 'when was New Zealand first settled by Polynesians Wairau Bar', why: 'Provides real, age-appropriate detail on the archaeological evidence behind this lesson\'s key dates.' },
  ],
  studentAgency: {
    art: { title: 'Illustrate the Moment of Arrival', body: `Draw the moment of first stepping onto Aotearoa's coastline, based on a real description of the landscape.\n\n**Instructions:**\n1. Include the coastline, the waka, and the first arrivals.\n2. Add one detail showing how different this land looks from a Pacific island.\n\n**Reflection Prompt:** What did you choose to focus on to show this was a genuinely new and different place?` },
    readWrite: { title: 'Wairau Bar: A Discovery Report', body: `Write a short report, in role as an archaeologist, describing what was found at Wairau Bar and why it matters for understanding Aotearoa's early history.\n\n**Word Count Guide:** 120–180 words.\n\n**Reflection Prompt:** Why does physical evidence like this matter so much when no written records exist?` },
    technology: { title: 'Build a "First 24 Hours" Decision Tree', body: `Create a simple digital flowchart or decision tree showing the order of priorities a new arrival would face in their first 24 hours.\n\n**Reflection Prompt:** What did you put first, and why?` },
    watchReview: { title: 'Watch and Note: The First Arrivals', body: `Watch a short video on the early settlement of Aotearoa.\n\n**Search term:** "when was New Zealand first settled by Polynesians Wairau Bar"\n\n**Reflection Prompt:** What real evidence mentioned in the video surprised you most?` },
  }
},

// ───────────────────────────── TUESDAY — GEOGRAPHY ─────────────────────────────
{
  day: 'Tuesday', strand: 'Geography', sessionLabel: 'Trial 22: A Different Land',
  topic: 'A LAND UNLIKE ANY OTHER — Aotearoa\'s Real Ecological Differences',
  curriculumArea: 'Social Sciences (Geography)',
  aos: [
    'Understanding Place and Environment: explore how the natural features of a place affect the people who live there.',
  ],
  keyCompetencies: 'Thinking; Using Language, Symbols & Text',
  learningIntentions: [
    'We are learning real, significant differences between tropical Pacific islands and Aotearoa.',
    'We are learning that Aotearoa had no native land mammals before humans arrived — a genuinely unusual fact.',
    'I can compare two environments using real evidence and explain the impact of the differences.',
  ],
  assessment: 'Teacher observation during the comparison-chart activity and class discussion.',
  introduction: `"Yesterday, we arrived. Today, we need to understand just how different this new land really was. Wonder question: what do you think it would be like landing somewhere with no familiar animals at all — not even ones you might expect, like deer, foxes, or wild dogs?"`,
  mainContent: [
    {
      title: 'Scale and Climate (10 minutes)',
      points: [
        "Teacher Input: Aotearoa is far larger than most Pacific islands, with genuine mountain ranges — including the Southern Alps — and a temperate climate with four distinct seasons, very different from the tropical wet/dry seasonal pattern of most Pacific islands.",
      ],
    },
    {
      title: 'A Genuinely Unusual Real Fact (10 minutes)',
      points: [
        "Teacher Input: Aotearoa is believed to have had no native land mammals at all before human arrival — no deer, no foxes, not even mice or rats, aside from bats. Instead, it had extraordinary, unique birdlife that had evolved without natural land predators, including the moa, a giant flightless bird that grew up to several metres tall.",
        "Key Question: \"Why might birds evolve so differently on a land with no land predators, compared to most other places on Earth?\"",
      ],
    },
    {
      title: 'Comparing the Two Environments (10 minutes)',
      points: [
        "Activity: sort image/fact cards comparing a typical Pacific island (small, warm, coral, limited land, familiar tropical animals) versus Aotearoa (large landmass, mountains, varied climate, no native land mammals, unique birdlife) into a physical comparison chart.",
        "Activity: decide and justify which single difference would have been hardest for new arrivals to adjust to.",
      ],
    },
  ],
  exitTicket: `Write one sentence: what is one genuinely unusual real fact about Aotearoa's wildlife before humans arrived?`,
  faith: {
    ponder: 'Tama stands on a hill looking at mountains that stretch further than he has ever seen land go. This is the feeling of \'new\' — overwhelming, wonderful, and a little frightening. Isaiah\'s God is the God of new things: not nostalgia, not just the past, but a living Creator still at work.',
    verse: '"See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland."',
    ref: 'Isaiah 43:19 (NIV)',
    value: 'Pānga  Impact',
    valueDesc: 'God is always doing new things and calls us to be part of bringing His Kingdom into new places and new situations.',
    questions: [
      'God asks: \'Do you not perceive it?\' — what new thing might God be doing in your life right now that you might be missing?',
      'Tama\'s first reaction to Aotearoa is awe — this land is enormous and strange. When have you experienced that kind of awe? What did it make you think about God?',
      'How might you be someone who helps bring God\'s \'new things\' into your school or community?',
    ],
  },
  resources: [
    'Comparison cards: Pacific island vs. Aotearoa features',
    'Images of moa and other unique native birds if available',
  ],
  videos: [
    { title: 'New Zealand before humans arrived', search: "New Zealand wildlife before human arrival moa no land mammals", why: 'Explains the real, unusual ecological history central to this lesson.' },
  ],
  studentAgency: {
    art: { title: 'Illustrate Aotearoa\'s Unique Birdlife', body: `Draw a moa or another unique native bird of Aotearoa, labelling at least one real fact about it.\n\n**Reflection Prompt:** What about this bird makes it different from animals new arrivals would have known from the Pacific islands?` },
    readWrite: { title: '"Welcome Guide" for New Arrivals', body: `Write a short "welcome guide" (in role) listing 3 real things to expect that are different about this new land.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** Which difference do you think would need explaining most urgently?` },
    technology: { title: 'Digital Comparison Chart', body: `Build a simple digital table comparing a typical Pacific island and Aotearoa across climate, size, and wildlife.\n\n**Reflection Prompt:** Which category shows the biggest difference?` },
    watchReview: { title: 'Watch and Note: A Land Without Land Mammals', body: `Watch a short video about Aotearoa's wildlife before human arrival.\n\n**Search term:** "New Zealand wildlife before human arrival moa no land mammals"\n\n**Reflection Prompt:** What fact from the video would most surprise someone who'd never heard it?` },
  }
},

// ───────────────────────────── WEDNESDAY — SCIENCE ─────────────────────────────
{
  day: 'Wednesday', strand: 'Science', sessionLabel: 'Trial 23: New Seasons, New Rules',
  topic: 'SURVIVING A COLDER YEAR — Real Adaptations for a New Climate',
  curriculumArea: 'Science (Planet Earth and Beyond)',
  aos: [
    'Investigate how living things, including humans, are suited to their particular way of life.',
    'Build science knowledge connected to real survival and food-growing decisions.',
  ],
  keyCompetencies: 'Thinking; Managing Self',
  learningIntentions: [
    'We are learning how a colder, four-season climate genuinely changed how new arrivals had to live.',
    "We are learning a real food-storage technique developed to survive Aotearoa's winters.",
    'I can plan a realistic seasonal survival strategy using real evidence.',
  ],
  assessment: "Teacher observation of the survival-calendar planning activity and team presentations.",
  introduction: `"Yesterday we learned how different this land truly was. Today, we focus on a genuinely serious real challenge: Aotearoa's winters are far colder than anything most Pacific voyagers had ever experienced — and food crops they relied on didn't grow the same way here."`,
  mainContent: [
    {
      title: 'A Genuinely Harder Climate for Growing Food (10 minutes)',
      points: [
        "Teacher Input: kūmara (sweet potato), a crop voyagers are believed to have carried with them, struggled to grow in much of Aotearoa's cooler climate compared to the tropical Pacific. Early growers had to find sheltered, sun-facing slopes and develop new techniques to give it any real chance of growing well.",
      ],
    },
    {
      title: 'A Real, Clever Solution: Storage Pits (10 minutes)',
      points: [
        "Teacher Input: a genuinely real and clever solution that developed was the rua kūmara — purpose-built storage pits dug into the ground, used to keep harvested kūmara protected from frost and cold through the winter months, ready for the following season.",
        "Key Question: \"Why might keeping food safe through an entire cold season have been just as important as growing it in the first place?\"",
      ],
    },
    {
      title: 'Planning a Survival Calendar (12 minutes)',
      points: [
        "Activity: in groups, plot a basic 'first year survival calendar,' deciding what should happen in each season (planting, storing, hunting, gathering) to survive a full year in this new climate.",
        "Activity: present your team's survival calendar and defend one key decision in it.",
      ],
    },
  ],
  exitTicket: `Write one sentence explaining what a rua kūmara was and why it mattered.`,
  faith: {
    ponder: 'Roa is already worried about keeping Pipi warm through the coming cold. The seasons of Aotearoa are completely different from what they knew. But God built seasons into creation on purpose — as rhythm, as rest, as reminder that time moves forward and He holds it all.',
    verse: 'There is a time for everything, and a season for every activity under the heavens.',
    ref: 'Ecclesiastes 3:1 (NIV)',
    value: 'Manaaki  Serve',
    valueDesc: 'Faithfully preparing for each season — whether literal or in life — and caring for those around us through change is at the heart of Manaaki.',
    questions: [
      'Ecclesiastes says there is \'a season for every activity.\' What season do you think you\'re in right now — in your life, your faith, your learning?',
      'Roa prepares for winter by planning ahead for her family. What does faithful preparation for the people around you look like in your own life?',
      'How does knowing that God holds all the seasons — including the difficult ones — change the way you face change?',
    ],
  },
  resources: [
    'Simple seasonal calendar templates',
    'Images of kūmara and storage pit reconstructions if available',
  ],
  videos: [
    { title: 'How early Māori grew and stored kūmara', search: 'rua kumara storage pits early Maori farming', why: 'Documents the real, clever food-storage solution central to this lesson.' },
  ],
  studentAgency: {
    art: { title: 'Illustrate a Rua Kūmara', body: `Draw a labelled cross-section of a rua kūmara (storage pit), showing how it protected food through winter.\n\n**Reflection Prompt:** What design feature do you think mattered most for keeping food safe?` },
    readWrite: { title: 'A Grower\'s Notes', body: `Write a short set of notes, in role as an early grower, explaining the challenge of growing kūmara in this new climate and the solution you found.\n\n**Word Count Guide:** 120–180 words.\n\n**Reflection Prompt:** What real-world problem-solving does this remind you of today?` },
    technology: { title: 'Build a Digital Survival Calendar', body: `Create a simple digital seasonal calendar showing planting, storing, and gathering tasks across a full year in Aotearoa.\n\n**Reflection Prompt:** Which season looks the most demanding on your calendar?` },
    watchReview: { title: 'Watch and Note: Storing Food for Winter', body: `Watch a short video about rua kūmara or early Māori food storage.\n\n**Search term:** "rua kumara storage pits early Maori farming"\n\n**Reflection Prompt:** What detail from the video impressed you most about this solution?` },
  }
},

// ───────────────────────────── THURSDAY — TECHNOLOGY ─────────────────────────────
{
  day: 'Thursday', strand: 'Technology', sessionLabel: 'Trial 24: New Land, New Tools',
  topic: "ADZE AND POUNAMU — Real Tool Adaptation in a New Land",
  curriculumArea: 'Technology',
  aos: [
    'Technological Knowledge: understand how materials available in an environment shape the tools and technologies a society develops.',
  ],
  keyCompetencies: 'Thinking; Managing Self',
  learningIntentions: [
    'We are learning how real tools and materials changed once people settled in Aotearoa.',
    'We are learning about pounamu (greenstone), a genuinely significant material found here.',
    'I can explain why available materials shape the technology a society develops.',
  ],
  assessment: 'Teacher observation of the tool redesign activity and written explanations.',
  introduction: `"New land. New challenges. Yesterday we focused on food. Today, we focus on tools — because the materials available in Aotearoa were genuinely different from what voyagers had used across the tropical Pacific, and that changed what tools they could make."`,
  mainContent: [
    {
      title: 'A Genuinely Significant New Material: Pounamu (10 minutes)',
      points: [
        "Teacher Input: Aotearoa's South Island contains pounamu (greenstone/NZ jade), a hard, beautiful stone that became hugely significant for both practical tools (like adzes, a type of cutting/shaping tool) and for ornaments carrying real cultural and spiritual value, still highly treasured today.",
        "Key Question: \"Why might a material that is both useful AND beautiful become especially treasured by a society?\"",
      ],
    },
    {
      title: 'Adapting Old Tools for New Tasks (10 minutes)',
      points: [
        "Teacher Input: voyaging-era tools designed for fishing and boat-building had to be adapted for entirely new tasks in Aotearoa — including hunting moa, working unfamiliar timbers, and building shelters suited to a much colder climate than most voyagers had known.",
      ],
    },
    {
      title: 'Redesign Challenge (10 minutes)',
      points: [
        "Activity: in groups, redesign a simple tool (fishing, building, or carrying) using 'new land' materials and constraints set by the teacher (e.g. a fishing tool needs to work in a river instead of open ocean).",
        "Activity: explain what you changed about the original design and why the new land required it.",
      ],
    },
  ],
  exitTicket: `Write one sentence: what is pounamu, and why did it become so significant in Aotearoa?`,
  faith: {
    ponder: 'Tama\'s ocean tools don\'t work in the river. Everything he knew has to be adapted. James tells us that when we lack wisdom for exactly these moments — when the old ways don\'t fit the new place — we can ask God, who gives generously. The hīnaki was the answer to that prayer.',
    verse: 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.',
    ref: 'James 1:5 (NIV)',
    value: 'Manaaki  Serve',
    valueDesc: 'Seeking God\'s wisdom to serve our community well — even when we have to learn completely new ways — is at the heart of faithful service.',
    questions: [
      'Have you ever been in a situation where what you knew before wasn\'t enough for where you were? What did you do?',
      'The hīnaki was created by adapting Pacific weaving knowledge to a new challenge. How might God want you to adapt your gifts for a new situation?',
      'James says to ask God for wisdom \'without doubting.\' What would it look like to ask God for wisdom about a real challenge you\'re facing right now?',
    ],
  },
  resources: [
    'Images of pounamu tools/ornaments if available',
    'Materials for the tool redesign challenge (card, string, sticks)',
  ],
  videos: [
    { title: 'What is pounamu (greenstone)?', search: 'pounamu greenstone New Zealand significance explained', why: 'Introduces the real, culturally significant material central to this lesson.' },
  ],
  studentAgency: {
    art: { title: 'Design a Pounamu-Inspired Tool or Ornament', body: `Draw a tool or ornament inspired by pounamu, labelling why both its usefulness and beauty might matter.\n\n**Reflection Prompt:** Why did you choose to make your design useful, decorative, or both?` },
    readWrite: { title: 'Why Materials Matter', body: `Write a short explanation of why the materials available in a place shape the tools a society can develop, using pounamu as your example.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** Can you think of a modern example of a material shaping what we're able to build?` },
    technology: { title: 'Digital Tool Redesign Poster', body: `Create a simple digital "before and after" poster showing your tool's original tropical design and its redesigned Aotearoa version.\n\n**Reflection Prompt:** What was the most important change you made?` },
    watchReview: { title: 'Watch and Note: Pounamu', body: `Watch a short video about pounamu and its significance.\n\n**Search term:** "pounamu greenstone New Zealand significance explained"\n\n**Reflection Prompt:** What fact from the video would you want to share with someone unfamiliar with pounamu?` },
  }
},

// ───────────────────────────── FRIDAY — ART ─────────────────────────────
{
  day: 'Friday', strand: 'Art', sessionLabel: 'Trial 30: Rock Art — Marking the Land',
  topic: 'PACIFIC PETROGLYPH SKETCHING — Arrival Marks in a Quilt Square',
  curriculumArea: 'The Arts (Visual Art)',
  aos: [
    'Developing Practical Knowledge: explore line, shape, and texture to make art works.',
    'Understanding the Arts in Context: investigate the purpose of objects and images from past cultures.',
    'Communicating and Interpreting: identify and describe ways in which meanings are communicated through art works.',
  ],
  keyCompetencies: 'Thinking; Using Language, Symbols & Text',
  learningIntentions: [
    'We are learning that Pacific petroglyphs used bold simple outlines to mark arrival and connection to place.',
    'We are practising drawing with confident unshaded lines to create a carving-like effect.',
    'I can sketch at least one petroglyph motif that connects to this week\'s landfall story.',
  ],
  assessment: 'Completed petroglyph square with at least one clear motif and a written sentence explaining its choice.',
  introduction: `Show images of real Pacific petroglyphs — Hawaiian lava field carvings, NZ stone carvings. Ask: "What do you notice about how these are drawn? No shading. No colour. Just lines." Explain: petroglyph artists worked with stone on stone — every mark was deliberate. Today students work the same way.`,
  mainContent: [
    {
      title: 'Choosing and Practising a Motif (8 minutes)',
      points: [
        'Display reference sheet of Pacific petroglyph motifs: sea turtle, fish, human figure, canoe/waka, bird, spiral.',
        "Students choose 1–2 motifs connecting to Tama\'s landfall story. Sketch rough draft on scrap paper first.",
        'Teacher prompt: "These marks were made by people who had just arrived somewhere new. What would YOU carve to say: I was here?"',
      ],
    },
    {
      title: 'Drawing the Petroglyph Square (15 minutes)',
      points: [
        'Draw chosen motif(s) in pencil — bold simple outlines, no interior shading. Scale to fill most of the square.',
        'Go over pencil lines with black ink pen or dark crayon, pressing firmly for strong confident marks.',
        'Add a simple repeated border pattern around the edge (dots, dashes, or small triangles).',
      ],
    },
    {
      title: 'Reflection and Assembly (7 minutes)',
      points: [
        "Write one sentence on back: which motif they chose and what it means for Tama\'s arrival.",
        "Add square to group quilt. Compare: how does petroglyph square look different from woven, kōwhaiwhai, and star squares?",
      ],
    },
  ],

  exitTicket: 'If you could carve ONE thing into the rocks at your landing place, what would it be and why?',
  faith: {
    ponder: 'The Pacific peoples carved their arrival into rock — turtles, canoes, spirals — not because they had to, but because they needed to say: I was here, this is who I am, this matters. God invites us to leave marks of His Kingdom in the world. What will yours say?',
    verse: 'Let this be written for a future generation, that a people not yet created may praise the LORD.',
    ref: 'Psalm 102:18 (NIV)',
    value: 'Pānga  Impact',
    valueDesc: 'The marks we leave — in art, in kindness, in truth-telling — can point future generations toward God, long after we are gone.',
    questions: [
      'The Psalm says to write things \'for a future generation.\' What are you doing now that might matter to someone who hasn\'t been born yet?',
      'Pacific petroglyph artists carved their marks without knowing who would see them centuries later. How does that change the way you think about doing your work faithfully today?',
      'If you could carve ONE thing into a rock that would be read in 1000 years, what would it say?',
    ],
  },}

]

// Register these lesson plans into the shared app registry: Term 2, Week 6
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {};
window.ALL_LESSON_PLANS['polynesian-migration'] = window.ALL_LESSON_PLANS['polynesian-migration'] || {};
window.ALL_LESSON_PLANS['polynesian-migration'][6] = {};
WEEK6_LESSONS_RAW.forEach(l => { window.ALL_LESSON_PLANS['polynesian-migration'][6][l.day] = l; });
