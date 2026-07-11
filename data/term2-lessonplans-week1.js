// Rich lesson-plan content for Term 2, Week 1 — matches the school's lesson plan template
// Each entry follows the same structure as the WW2 WHO example provided by the teacher.

const WEEK1_LESSONS_RAW = [

// ───────────────────────────── MONDAY — HISTORY ─────────────────────────────
{
  day: 'Monday', strand: 'History', sessionLabel: 'Trial 1: The Shattered Shard',
  topic: 'WHERE WE BEGAN — The Lapita People and the First Great Voyages',
  curriculumArea: 'Social Sciences',
  aos: [
    'Understanding the Past: investigate how the perspectives of people in the past differ, and how this is influenced by the limited and varied evidence available.',
    'Understanding Place and Environment: explore how exploration and discovery have consequences for people and places.',
  ],
  keyCompetencies: 'Thinking; Language, Symbols & Text; Relating to Others',
  learningIntentions: [
    'We are learning to understand who the Lapita people were and where the first great Pacific voyages began.',
    'We are learning how archaeologists use physical evidence — like pottery — to understand history that was never written down.',
    'I can explain why some history has to be pieced together like a puzzle, rather than read in a book.',
  ],
  assessment: 'Teacher observation of student participation in the evidence jigsaw and class discussion. Review of student exit tickets and quest-log entries for understanding of how unwritten history is recovered.',
  introduction: `Teacher holds up a torn, fragmented picture — pieces of a "found journal" prop, or simply a jigsaw envelope. "Good morning, everyone. Today we begin a brand-new voyage through history — one that starts not with a date in a textbook, but with a single broken piece of pottery. Before anyone wrote a single word about it, real people set out across the largest ocean on Earth and settled it, island by island. We're going to meet them through the clues they left behind.

Let's start with a wonder question: if a people never wrote anything down, how could we possibly know anything true about their lives thousands of years later?

Genesis reminds us that from the very beginning, God placed people across the earth with purpose. Acts 17:26 tells us God 'marked out their appointed times in history and the boundaries of their lands.' Today we're going to explore one of the greatest, and least written-about, journeys in human history — and see if we can find the truth in the clues it left behind."`,
  mainContent: [
    {
      title: 'What Was the Lapita Culture? (10 minutes)',
      points: [
        "Teacher Input: Around 3,000 years ago, archaeologists began finding a very particular kind of pottery scattered across islands of the western Pacific — decorated with fine, comb-like dots pressed into the clay before it was fired, called dentate-stamped pottery.",
        "This pottery was first properly studied at a site called Lapita in New Caledonia in the 1950s–60s — which is where the name 'Lapita culture' comes from.",
        "Show a world/Pacific map. Explain: archaeologists believe these people first appeared near the Bismarck Archipelago, close to Papua New Guinea, then spread an extraordinary distance — all the way to Fiji, Tonga and Samoa — in only a few hundred years. For people without metal tools, compasses, or maps, this was one of the fastest and farthest human migrations in the ancient world.",
        "Key Question: \"If they didn't write anything down, how do we know any of this actually happened?\"",
      ],
    },
    {
      title: 'Piecing Together the Evidence (15 minutes)',
      points: [
        "Teacher Input: explain that historians and archaeologists piece together unwritten history using several kinds of evidence: archaeology (broken pottery, old rubbish heaps called middens, tools), linguistics (related words for the same things — like 'canoe' or 'house' — showing up in many different Pacific languages, because they share a common ancestor language), and oral tradition (stories, chants and whakapapa passed down by families for generations).",
        "Activity: In small groups, students piece together a jigsaw image of a Lapita-style pottery shard laid over a faint Pacific map. As the picture comes together, it reveals the region archaeologists believe is the likely homeland.",
        "Discuss as each group finishes: what does this physical evidence tell us, and what doesn't it tell us? (E.g. pottery shows us where people lived and roughly when, but not their names, feelings, or exact reasons for moving.)",
      ],
    },
    {
      title: 'Why the Timeline Matters (10 minutes)',
      points: [
        "Teacher Input: Important distinction for students — the Lapita spread (around 3,000 years ago) happened across the western Pacific (Papua New Guinea to Samoa/Tonga). The much later voyages into the 'Polynesian Triangle' — to Hawaii, Rapa Nui, and eventually Aotearoa — happened roughly 1,000–1,300 years after that, around 700–800 years ago. They are two different chapters of the same long story, not the same event.",
        "Key Question: \"Why might it matter to get the order of events right, instead of treating it as one single voyage?\"",
      ],
    },
    {
      title: 'Biblical Connection — Every Nation, Known to God (5 minutes)',
      points: [
        "\"Acts 17:26–27 tells us God 'marked out their appointed times in history and the boundaries of their lands ... so that they would seek him.' Even though we only have fragments of evidence for the Lapita story, none of these real people and their journeys were lost to God, even when they were lost to written history.\"",
      ],
    },
  ],
  exitTicket: `On a small piece of paper, write down ONE type of evidence historians use to learn about history that was never written down, and explain why it's useful. Be ready to share your answer.`,
  faith: {
    ponder: 'God placed in us a longing to know where we come from. When we uncover ancient pottery shards, we glimpse the creativity of people made in His image — adventurers, makers, and storytellers, just like us.',
    verse: 'From one man he made all the nations, that they should inhabit the whole earth; and he marked out their appointed times in history and the boundaries of their lands.',
    ref: 'Acts 17:26 (NIV)',
    value: 'Mōhio  Know',
    valueDesc: "Learning where we come from helps us know God's story and our place in it.",
    questions: [
      'If God marked out appointed times and places for every nation, what does that tell us about the Lapita people — and about where YOU were born?',
      'The voyagers left their mark in pottery. What marks are you making that might tell your story to someone a thousand years from now?',
      "Tama is searching for where he comes from. How does knowing God as our Creator change the way we understand where we come from?",
    ],
  },
  resources: [
    'Large Pacific Ocean map',
    "Jigsaw sets: Lapita pottery image over a faint Pacific map (one per group)",
    'Evidence cards (archaeology / linguistics / oral tradition)',
    "Tama's Journal prop (or a sealed box/journal for the term-long story)",
    'Small pieces of paper for exit tickets',
  ],
  videos: [
    { title: 'Lapita pottery and the Pacific migration', search: 'Lapita pottery Pacific migration explained', why: 'Gives a visual, age-appropriate overview of the real archaeological evidence behind this lesson.' },
    { title: 'Animated map of Pacific migration routes', search: 'Pacific migration map animation', why: 'Helps students visualise the scale and direction of the spread discussed in class.' },
  ],
  studentAgency: {
    art: {
      title: "Design Your Own Lapita-Style Pottery Pattern",
      body: `Real Lapita pottery was decorated using a technique called dentate-stamping — pressing a small comb-like tool into wet clay to leave rows of tiny dots and lines.

**Instructions:**
1. On paper (or air-dry clay/playdough if available), design your own repeating pattern using only dots and lines, the way a Lapita potter would have.
2. Use a real comb, the edge of a fork, or a rolled-up piece of card to press your pattern in, if working with clay/dough — or draw it carefully if working on paper.
3. Add a short caption explaining what makes this pottery style historically important.

**Reflection Prompt:** What does a pattern like this tell future archaeologists about the people who made it — and what doesn't it tell them?`
    },
    readWrite: {
      title: "An Archaeologist's Field Diary",
      body: `Imagine you are an archaeologist who has just uncovered a piece of genuine Lapita pottery on a dig.

**Instructions:**
1. Write a field diary entry describing the moment you found it.
2. Describe what the pottery looks like, where you found it, and what you think it might tell us.
3. Include at least one sentence about why this discovery matters for understanding unwritten history.

**Word Count Guide:** Aim for approximately 150–200 words.

**Reflection Prompt:** How does writing as an archaeologist help you understand how real historical knowledge is built from physical evidence?`
    },
    technology: {
      title: 'Build a Digital Migration Timeline',
      body: `You are going to create a simple digital timeline (using Canva, Google Slides, or a similar tool) showing the spread of the Lapita culture across the Pacific.

**Instructions:**
1. Create at least 4 points on your timeline: the likely starting region (near Papua New Guinea), and three island groups it spread to (e.g. Fiji, Tonga, Samoa).
2. Add an approximate date or "years ago" label to each point.
3. Add one image or icon per point.

**Reflection Prompt:** What surprised you about how quickly this migration happened?`
    },
    watchReview: {
      title: 'Watch and Note: Evidence of the Lapita Voyagers',
      body: `Watch a short video about the Lapita culture or early Pacific migration.

**Search term:** "Lapita pottery Pacific migration explained"

**What to Watch For:** the type of evidence used, the region the people came from, and roughly how long ago this happened.

**Your Review Task:** Complete a simple table: Evidence Type | What It Shows | Why It Matters.

**Reflection Prompt:** What was the most convincing piece of evidence in the video, and why?`
    }
  }
},

// ───────────────────────────── TUESDAY — GEOGRAPHY ─────────────────────────────
{
  day: 'Tuesday', strand: 'Geography', sessionLabel: 'Trial 2: How Far Is Far?',
  topic: 'THE SCALE OF THE PACIFIC — Understanding the Polynesian Triangle',
  curriculumArea: 'Social Sciences (Geography)',
  aos: [
    'Understanding Place and Environment: explore how places influence people and people influence places.',
    'Understanding Place and Environment: understand how people view and use places differently.',
  ],
  keyCompetencies: 'Thinking; Using Language, Symbols & Text',
  learningIntentions: [
    'We are learning to understand the true scale of the Pacific Ocean.',
    "We are learning what the 'Polynesian Triangle' is and why it represents one of the greatest feats of human exploration.",
    'I can compare real distances between Pacific island groups using a map and scale.',
  ],
  assessment: 'Teacher observation during the floor-map measuring activity. Review of star compass design and written distance comparisons.',
  introduction: `"Yesterday we found our first clue about where the Pacific voyagers began. Today, we need to understand exactly how big the challenge ahead of them really was.

Quick question before we start: how big do you think the Pacific Ocean actually is? Bigger than New Zealand? Bigger than Australia? Let's find out."

Show a true-scale world map (not the commonly distorted Mercator-projection versions) to reveal the Pacific's real size relative to landmasses.`,
  mainContent: [
    {
      title: 'Just How Big Is the Pacific? (10 minutes)',
      points: [
        "Teacher Input: The Pacific Ocean covers about 165 million square kilometres — roughly one-third of the entire surface of the Earth, and bigger than all the continents on Earth combined.",
        "Introduce the Polynesian Triangle: a region of the Pacific with three corner points — Hawaii in the north, Aotearoa New Zealand in the southwest, and Rapa Nui (Easter Island) in the southeast. Inside this triangle are over 1,000 islands, nearly all of them settled by voyaging Polynesians over several centuries.",
        "Key Question: \"If you placed this triangle over a map of Europe, what do you think would happen?\" (It would swallow the entire continent several times over.)",
      ],
    },
    {
      title: 'Measuring the Triangle (15 minutes)',
      points: [
        "Activity: On a large floor map or outdoor chalk map of the Pacific, use string/wool cut to a measured scale to physically lay out the distances between Hawaii, Aotearoa, and Rapa Nui, forming a giant triangle the class can stand inside or around.",
        "Real distances for reference: Tahiti to Hawaii is roughly 4,400 km. Tahiti to Aotearoa is roughly 4,300 km. Tahiti to Rapa Nui is roughly 4,000 km. Hawaii to Rapa Nui — almost corner to corner of the whole triangle — is roughly 7,000 km.",
        "Ask students to guess how many classrooms or school halls would fit end-to-end along just ONE side of the triangle, before revealing the real number.",
      ],
    },
    {
      title: 'Building a Tool for the Voyage (10 minutes)',
      points: [
        "Activity: In groups, design a simple paper star compass wheel — a circle divided into key directions, decorated and labelled (e.g. sunrise point, sunset point, key star positions). This becomes a tool used again later in the term.",
        "Key Question: \"Why might a voyager need a tool like this, instead of just guessing direction by feel?\"",
      ],
    },
  ],
  exitTicket: `Write one sentence describing the real scale of the Pacific Ocean in your own words, using at least one number from today's lesson.`,
  faith: {
    ponder: 'The Polynesian Triangle covers a third of the Earth\'s surface — and people crossed it in wooden canoes guided by stars alone. God made us with an extraordinary capacity to explore and inhabit the world He created for us.',
    verse: 'God blessed them and said to them, "Be fruitful and increase in number; fill the earth and subdue it."',
    ref: 'Genesis 1:28 (NIV)',
    value: 'Mōhio  Know',
    valueDesc: 'Understanding the full scale of Polynesian migration helps us grasp the wonder of how God spread His people across the earth.',
    questions: [
      'The Pacific covers a third of the earth — what does the fact that people crossed it in wooden canoes tell you about how God designed humans?',
      'If God called people to \'fill the earth,\' do you think the Polynesian voyagers were part of that calling without knowing it?',
      'What places in the world do you think God is calling people to reach in your generation?',
    ],
  },
  resources: [
    'Large floor/wall map of the Pacific',
    'A true-scale (not Mercator) world map for comparison',
    'Wool/string cut to a measured scale',
    'Paper, compasses (drawing), pencils for star compass craft',
  ],
  videos: [
    { title: 'How big is the Pacific Ocean, really?', search: 'true size of the Pacific Ocean map comparison', why: 'Helps correct the common misconception (from standard maps) of how small the Pacific looks compared to its real size.' },
    { title: 'The Polynesian Triangle explained', search: 'Polynesian Triangle map explained', why: 'Gives a clear visual explanation of the three-point region central to this lesson.' },
  ],
  studentAgency: {
    art: { title: 'Illustrate the Polynesian Triangle', body: `Draw your own decorated map of the Polynesian Triangle, marking Hawaii, Aotearoa, and Rapa Nui, plus at least 3 other island groups inside it.\n\n**Instructions:**\n1. Sketch the rough outline of the Pacific.\n2. Mark and label the three triangle points plus extra islands.\n3. Add a decorative compass rose in one corner.\n\n**Reflection Prompt:** What was the hardest part of getting the scale right?` },
    readWrite: { title: 'A Letter Describing the Ocean Ahead', body: `Write a short letter, in role as a young voyager, to a family member staying behind, describing how big and frightening the ocean ahead seems.\n\n**Instructions:**\n1. Mention at least one real distance fact from today's lesson.\n2. Describe how it feels to face that much open ocean.\n\n**Word Count Guide:** 120–180 words.\n\n**Reflection Prompt:** How did using a real number change the way you wrote about the ocean's size?` },
    technology: { title: 'Build a Digital Distance Chart', body: `Use a spreadsheet or simple table tool (Google Sheets, Canva chart) to chart the four distances mentioned today (Tahiti–Hawaii, Tahiti–Aotearoa, Tahiti–Rapa Nui, Hawaii–Rapa Nui).\n\n**Instructions:**\n1. Enter each distance.\n2. Create a simple bar chart comparing them.\n3. Add one sentence noting which is the longest.\n\n**Reflection Prompt:** Did the chart change how you picture these distances compared to just hearing the numbers?` },
    watchReview: { title: 'Watch and Note: Mapping the Pacific', body: `Watch a short video on the size of the Pacific Ocean or the Polynesian Triangle.\n\n**Search term:** "Polynesian Triangle map explained"\n\n**What to Watch For:** the three corner points, how many islands are inside, and any real distance figures mentioned.\n\n**Reflection Prompt:** What was the most surprising fact you noted?` }
  }
},

// ───────────────────────────── WEDNESDAY — SCIENCE ─────────────────────────────
{
  day: 'Wednesday', strand: 'Science', sessionLabel: 'Trial 3: Reading the Sky',
  topic: 'WEATHER vs. CLIMATE — What Every Voyager Needed to Know',
  curriculumArea: 'Science (Planet Earth and Beyond)',
  aos: [
    'Investigate weather phenomena and how they affect people and the environment.',
    'Appreciate that science is a way of explaining the world, and that science knowledge changes over time.',
  ],
  keyCompetencies: 'Thinking; Participating & Contributing',
  learningIntentions: [
    'We are learning the difference between weather and climate.',
    'We are learning how observing wind and sky helped real voyagers make safe decisions.',
    'I can use real, observed conditions to make and justify a simple prediction.',
  ],
  assessment: "Teacher observation of the card-sorting activity and outdoor wind observation. Review of students' written voyage forecasts.",
  introduction: `"Yesterday, we measured how big the ocean ahead really is. Today we need to understand something just as important: how do you know it's actually safe to go?

Wonder question: what's the difference between knowing today's weather, and knowing what a whole season is usually like?

Real voyagers couldn't check a weather app. They relied entirely on careful, repeated observation of the sky, wind, and sea — skills built up over a lifetime, and passed down through generations."`,
  mainContent: [
    {
      title: 'Weather vs. Climate (10 minutes)',
      points: [
        "Teacher Input: Weather is what's happening in the sky right now — today's wind, rain, temperature, cloud cover. Climate is the long-term pattern of weather in a place, built up over many years (e.g. \"the Pacific has a wet season and a dry season\").",
        "Real example: in much of the South Pacific, cyclone season runs roughly from November to April. A voyager who understood climate would avoid setting out during this period, even on a calm day — because they understood the bigger seasonal pattern, not just that day's conditions.",
        "Key Question: \"Why would a voyager need to know both the weather AND the climate before setting out on a long voyage?\"",
      ],
    },
    {
      title: 'Sorting Weather from Climate (15 minutes)',
      points: [
        "Activity: In teams, race to physically sort scattered statement/picture cards into two zones — Weather (right now) and Climate (the long-term pattern). Example cards: \"It rained today\" (weather), \"December to March is generally hot and wet in the tropical Pacific\" (climate), \"There are strong winds this afternoon\" (weather).",
        "Discuss as a class once sorted: what real decisions would each type of information help a voyager make?",
      ],
    },
    {
      title: 'Reading the Real Sky (10 minutes)',
      points: [
        "Activity: Take the class outside (or to a window) for a genuine sky and wind observation using a simple pinwheel or paper streamer. Record wind direction, cloud type, and general conditions.",
        "Teacher Input (brief, simplified): trade winds in the tropical Pacific blow fairly steadily from the east, because warm air rising near the equator and sinking further north and south creates a repeating pattern of wind. Voyagers used this knowledge to plan routes that worked with the wind, not against it.",
      ],
    },
  ],
  exitTicket: `Based on today's real observation, write one sentence: would a voyager be safe to set sail today? Justify your answer using something you actually observed.`,
  faith: {
    ponder: 'The voyagers read the sky like a letter written by God. They had no instruments — only attention, and the sky was enough. The same heavens that guided their canoe have always been declaring God\'s glory.',
    verse: 'The heavens declare the glory of God; the skies proclaim the work of his hands.',
    ref: 'Psalm 19:1 (NIV)',
    value: 'Mōhio  Know',
    valueDesc: 'Learning to read God\'s creation helps us know the Creator who designed and sustains it all.',
    questions: [
      'Psalm 19 says the sky \'proclaims\' God\'s work without any words. What do you think the sky is saying?',
      'The voyagers trusted the sky with their lives. What does it take to trust something that completely?',
      'What part of creation speaks most powerfully to you about God\'s creativity?',
    ],
  },
  resources: [
    'Weather/climate sorting cards',
    'Pinwheels or paper streamers for outdoor wind test',
    'Simple cloud-type reference chart',
    'Paper for voyage forecast logs',
  ],
  videos: [
    { title: 'Weather vs climate explained for kids', search: 'weather vs climate explained for kids', why: 'A clear, age-appropriate explanation of the core science concept for this lesson.' },
    { title: 'What are trade winds?', search: 'trade winds explained simple', why: 'Gives students a simplified but accurate picture of the real wind pattern referenced in class.' },
  ],
  studentAgency: {
    art: { title: 'Illustrate a Voyager Reading the Sky', body: `Draw a scene of a voyager studying the sky and sea before deciding whether to set sail.\n\n**Instructions:**\n1. Include at least one weather clue (clouds, wind, waves) in your drawing.\n2. Add a thought bubble showing what the voyager is deciding.\n\n**Reflection Prompt:** What clue in your drawing would matter most, and why?` },
    readWrite: { title: "A Voyager's Forecast Log", body: `Write a short "ship's log" entry in role as a voyager studying today's real sky and wind.\n\n**Instructions:**\n1. Describe what you actually observed outside today.\n2. State your decision: safe to sail, or not — and why.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** How confident would you really be making this decision with no weather app?` },
    technology: { title: 'Build a Simple Weather-Tracking Sheet', body: `Create a simple digital or paper tracking sheet that records the weather for 5 days (could continue beyond today's lesson).\n\n**Instructions:**\n1. Record wind, cloud, and temperature each day.\n2. After 5 days, write one sentence: is this weather, or is it starting to show a climate pattern?\n\n**Reflection Prompt:** How many days of data do you think you'd need before you could call something a "pattern" rather than just "today's weather"?` },
    watchReview: { title: 'Watch and Note: Reading Wind and Sky', body: `Watch a short video about trade winds or weather basics.\n\n**Search term:** "trade winds explained simple"\n\n**What to Watch For:** why winds blow in consistent patterns, and how that might help (or hinder) a sea voyage.\n\n**Reflection Prompt:** What was one fact that would have genuinely helped a real voyager?` }
  }
},

// ───────────────────────────── THURSDAY — TECHNOLOGY ─────────────────────────────
{
  day: 'Thursday', strand: 'Technology', sessionLabel: 'Trial 4: The Floating Trial',
  topic: 'WHY THINGS FLOAT — Buoyancy and the First Voyaging Vessels',
  curriculumArea: 'Technology',
  aos: [
    'Technological Knowledge: understand how materials are selected for use based on their physical and functional properties.',
    'Nature of Technology: understand that technological outcomes are products or systems developed to meet a need.',
  ],
  keyCompetencies: 'Thinking; Managing Self',
  learningIntentions: [
    'We are learning why some objects float and others sink.',
    "We are learning how shape and material affect a vessel's ability to carry weight safely.",
    'I can design, test, and improve a simple floating vessel using real engineering reasoning.',
  ],
  assessment: 'Teacher observation of the build-and-test challenge, including the redesign stage. Review of written design explanations.',
  introduction: `"We now know how big the ocean is, and how to read the sky. But none of it matters if the vessel itself doesn't survive the water. Today, we become engineers.

Wonder question: why does a heavy ship made of solid metal float, while a small stone sinks straight to the bottom?"`,
  mainContent: [
    {
      title: 'The Real Science of Floating (10 minutes)',
      points: [
        "Teacher Input: An object floats when it pushes aside (displaces) enough water to support its own weight. This is sometimes called Archimedes' Principle, named after the ancient Greek scientist who first explained it. Shape matters hugely: a solid lump of clay sinks, but the same amount of clay shaped into a wide, hollow bowl floats — because the bowl shape displaces far more water relative to its weight.",
        "Introduce density simply: density compares how much something weighs for its size. Denser materials need a shape that displaces more water in order to float.",
        "Demonstrate: drop a solid ball of clay/foil into water (sinks), then reshape the same material into a wide, shallow bowl shape and try again (floats).",
      ],
    },
    {
      title: 'Build and Test (15 minutes)',
      points: [
        "Activity: In teams, using a limited material kit (foil, a small amount of clay, straws, tape), build a small vessel that must float AND carry a 'cargo' (a marble or small weight) across a tub of water without sinking.",
        'Test each design live in front of the class.',
        "Key Question during testing: \"What made some designs more stable than others?\"",
      ],
    },
    {
      title: 'Redesign and Improve (10 minutes)',
      points: [
        'Activity: After the first test, each team gets one chance to redesign and improve their vessel based on what failed the first time — this mirrors real engineering, where the first attempt is rarely the final design.',
        'Discuss: what specific change did you make, and why did you expect it to help?',
      ],
    },
  ],
  exitTicket: `Write one sentence explaining, in your own words, why shape affects whether something floats.`,
  faith: {
    ponder: 'The waka was one of the most sophisticated vessels ever built by human hands — designed using nothing but observation, experience, and inherited wisdom. God gives wisdom to those who seek it, and the waka builders are evidence of that extraordinary gift.',
    verse: 'By wisdom a house is built, and through understanding it is established; through knowledge its rooms are filled with rare and beautiful treasures.',
    ref: 'Proverbs 24:3-4 (NIV)',
    value: 'Manaaki  Serve',
    valueDesc: 'Using our God-given skills to build something that serves and carries others is at the heart of Manaaki — faithful service with our gifts.',
    questions: [
      'The waka builders had no computers or modern tools — how do you think God gave them the wisdom to build something so advanced?',
      'If \'by wisdom a house is built,\' what kind of wisdom do you think you\'re building right now in school that will serve others later?',
      'How might God want you to use your particular skills to serve your community?',
    ],
  },
  resources: [
    'Foil, clay/playdough, straws, tape (per team)',
    'Tubs or basins of water',
    'Marbles or small weights for "cargo"',
    'Paper for design sketches/explanations',
  ],
  videos: [
    { title: "Archimedes' Principle for kids", search: 'Archimedes principle buoyancy explained for kids', why: "Explains the real scientific principle behind today's lesson in an age-appropriate way." },
    { title: 'Why do boats float? Density explained', search: 'why do boats float density explained kids', why: 'Reinforces the link between density, shape, and floating ahead of the hands-on build.' },
  ],
  studentAgency: {
    art: { title: 'Design a Vessel Blueprint', body: `Create a labelled "blueprint" style drawing of your ideal voyaging vessel.\n\n**Instructions:**\n1. Draw your vessel from the side and from above.\n2. Label at least 3 design features and explain what each one does.\n\n**Reflection Prompt:** Which feature do you think matters most for surviving open ocean, and why?` },
    readWrite: { title: "An Engineer's Test Report", body: `Write a short report, in role as the engineer who built today's vessel, describing the test, what failed, and what you changed.\n\n**Instructions:**\n1. Describe the first design and what happened when tested.\n2. Describe your redesign and why you made that choice.\n\n**Word Count Guide:** 120–180 words.\n\n**Reflection Prompt:** How is this similar to how real engineers work?` },
    technology: { title: 'Digital Design Poster', body: `Use Canva or a similar tool to create a digital poster of your vessel design, labelling key features.\n\n**Instructions:**\n1. Add an image or drawing of your vessel.\n2. Label at least 3 features with short explanations.\n\n**Reflection Prompt:** What would you change if you had to build it twice as big?` },
    watchReview: { title: 'Watch and Note: Why Boats Float', body: `Watch a short video explaining buoyancy or boat design.\n\n**Search term:** "why do boats float density explained kids"\n\n**What to Watch For:** the real scientific reason objects float, and how shape changes this.\n\n**Reflection Prompt:** Did the video change how you'd design your next vessel? How?` }
  }
},

// ───────────────────────────── FRIDAY — ART ─────────────────────────────
{
  day: 'Friday', strand: 'Art', sessionLabel: 'Trial 5: The First Quilt Square',
  topic: 'THE FOLD-AND-CUT TECHNIQUE — Beginning a Pacific-Inspired Quilt',
  curriculumArea: 'The Arts (Visual Art)',
  aos: [
    'Developing Practical Knowledge: explore a variety of materials and tools, and discover elements and techniques.',
    'Understanding the Arts in Context: investigate the purpose of objects and images from the past and recognise that this reflects the technology and aesthetics of cultures and times.',
  ],
  keyCompetencies: 'Thinking; Using Language, Symbols & Text',
  learningIntentions: [
    'We are learning a fold-and-cut technique that produces symmetric, radiating patterns similar to traditional Pacific design.',
    'We are learning that Pacific art often carries real cultural meaning, not just decoration.',
    'I can create one considered, technique-based square as part of a small-group collaborative quilt.',
  ],
  assessment: 'Teacher observation of technique use, care taken with the fold-and-cut process, and group collaboration while assembling the quilt.',
  introduction: `"Every great journey deserves to be remembered — not just in words, but in something we can see. This term, instead of one giant class artwork, each of you will create your own small square every Friday, inspired by a real Pacific design tradition. Square by square, your small group's squares will be glued together into your own quilt, growing week by week.

Before we begin, it's worth knowing: across the real Pacific, art was never just decoration. Patterns and motifs often carried real meaning — telling stories of family, place, and belief. Today's square is inspired by the very first clue we found this term: Lapita pottery."`,
  mainContent: [
    {
      title: 'Real Pacific Art Traditions (8 minutes)',
      points: [
        'Teacher Input: Introduce tapa cloth (also called ngatu in Tonga, siapo in Samoa) — a real, traditional Pacific art form made by beating the inner bark of the paper mulberry tree into a flat cloth, then decorating it with natural dyes using stencils and repeating patterns.',
        'Explain that these patterns were not random — they often represented genealogy, status, or stories specific to a family or village, similar in purpose to the carved patterns in whakairo (Māori carving) or ta moko (Māori tattoo design).',
        'Show 2–3 real examples of tapa/ngatu/siapo patterns, and the dentate-stamped (dotted/lined) Lapita pottery style referenced in Monday\'s trial, if available.',
      ],
    },
    {
      title: 'Teaching the Fold-and-Cut Technique (10 minutes)',
      points: [
        "Teacher demonstrates the technique step by step: 1) Trim an A4 sheet into a square. 2) Fold the square in half diagonally to form a triangle. 3) Fold that triangle in half again to form a smaller triangle. 4) Cut small notches, triangles, or dots into the folded edges — NOT all the way across, leaving the centre fold intact. 5) Carefully unfold to reveal a symmetric, radiating pattern.",
        "This week's pattern inspiration: dots and short lines, echoing the dentate-stamped Lapita pottery pattern from Monday's trial.",
        "Safety note: model safe scissor use on folded paper (multiple layers can be thicker to cut) before students begin independently.",
        "Practise the fold and one or two test cuts together on scrap paper first, so students see the unfolded result before committing to their real square.",
      ],
    },
    {
      title: 'Making and Assembling the Quilt Squares (12 minutes)',
      points: [
        "Activity: split the class into small groups (4–5 students each). Each student creates their own square using today's technique and pattern inspiration.",
        "Each group glues their finished squares onto a shared backing sheet (poster paper or card), beginning that group's own quilt — kept small and manageable rather than one large class piece.",
        "Encourage genuine collaboration within each group — comparing techniques, helping each other line up cuts, discussing what to do with hidden secret cuts (see Quest below).",
      ],
    },
  ],
  exitTicket: `Write one sentence: what is one real purpose Pacific art traditions like tapa cloth served, beyond just looking decorative?`,
  faith: {
    ponder: 'The Lapita pottery makers were artists — every dot and line a deliberate choice. When we create art, we are doing something deeply human: making things that reflect the imagination of the God who made us in His image.',
    verse: 'For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.',
    ref: 'Ephesians 2:10 (NIV)',
    value: 'Pānga  Impact',
    valueDesc: 'Every creative act done with care and intention brings a little of God\'s Kingdom creativity into the world.',
    questions: [
      'If we are \'God\'s handiwork,\' what does that tell us about how God feels about the things we make?',
      'The Lapita people put their patterns on pottery — you put yours on paper. Why does it matter HOW we do our creative work?',
      'How can making art be a way of bringing glory to God?',
    ],
  },
  resources: [
    'A4 paper, one square per student (plus spares for mistakes)',
    'Safety scissors',
    'Glue and a backing sheet (poster paper or card) per small group',
    'Reference images of tapa/ngatu/siapo cloth and Lapita pottery patterns',
    'Scrap paper for technique practice',
  ],
  videos: [
    { title: 'How tapa cloth is made', search: 'tapa cloth ngatu making process', why: 'Shows the real traditional technique referenced in this lesson, grounding the art activity in genuine cultural practice.' },
  ],
  studentAgency: {
    art: { title: 'Create Your First Quilt Square', body: `This week's main activity IS the art focus — create your fold-and-cut square and add it to your group's quilt.\n\n**Reflection Prompt:** What does your square's pattern represent, and what did you hide as your "secret" cut?` },
    readWrite: { title: 'Describe a Pacific Pattern', body: `Research (or use today's examples) one real tapa/ngatu/siapo pattern and write a short description of what it might represent.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** Why might it matter that a pattern has real meaning, rather than being purely decorative?` },
    technology: { title: 'Digital Pattern Design', body: `Use a simple drawing tool (Canva, Google Drawings) to design your own repeating pattern inspired by tapa cloth or Lapita pottery geometry.\n\n**Reflection Prompt:** What part of real tapa cloth design did you borrow, and what part did you make your own?` },
    watchReview: { title: 'Watch and Note: Making Tapa Cloth', body: `Watch a short video on how tapa cloth is traditionally made.\n\n**Search term:** "tapa cloth ngatu making process"\n\n**Reflection Prompt:** What part of the process surprised you most?` }
  }
}

]




// Register these lesson plans into the shared app registry: Term 2, Week 1
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {};
window.ALL_LESSON_PLANS['polynesian-migration'] = window.ALL_LESSON_PLANS['polynesian-migration'] || {};
window.ALL_LESSON_PLANS['polynesian-migration'][1] = {};
WEEK1_LESSONS_RAW.forEach(l => { window.ALL_LESSON_PLANS['polynesian-migration'][1][l.day] = l; });
