// Rich lesson-plan content for Term 2, Week 4 — "Wayfinding in the Dark"
// Matches the structure and depth of Weeks 1–3's lesson plans.

const WEEK4_LESSONS_RAW = [

// ───────────────────────────── MONDAY — HISTORY ─────────────────────────────
{
  day: 'Monday', strand: 'History', sessionLabel: 'Trial 16: Lost Without Land',
  topic: 'WAYFINDING — A Real Skill Trained Over a Lifetime',
  curriculumArea: 'Social Sciences',
  aos: [
    'Understanding the Past: investigate how a significant person or group has influenced the course of events.',
    'Understanding the Past: understand how the perspectives of people in the past were shaped by the time and place in which they lived.',
  ],
  keyCompetencies: 'Thinking; Language, Symbols & Text',
  learningIntentions: [
    'We are learning what wayfinding really is, and why it took years to master.',
    'We are learning about a real master navigator who helped revive this skill in modern times.',
    "We are learning a genuinely real navigational idea called 'etak.'",
  ],
  assessment: "Teacher observation of the memory-sequence game and class discussion. Review of students' written reflections.",
  introduction: `"Over the last three weeks, we've learned to read currents, wind, swells, birds, and clouds. Today we bring it all together under one real word: wayfinding. This wasn't a single trick — it was an entire skill, trained over years, sometimes decades, and the knowledge was almost lost in the 20th century before being deliberately revived.

Wonder question: do you think you could memorise enough information to navigate across an entire ocean, with no instruments at all?"`,
  mainContent: [
    {
      title: 'A Real Master Navigator (12 minutes)',
      points: [
        "Teacher Input: A real and important figure in this story is Mau Piailug, a master navigator from the Micronesian island of Satawal, born in 1932. He had learned traditional wayfinding from his elders using methods passed down for generations — at a time when this knowledge was disappearing across much of the Pacific.",
        "In 1976, Mau Piailug navigated the double-hulled canoe Hōkūleʻa from Hawaii to Tahiti using only traditional wayfinding — no instruments at all — successfully proving the ancient method still worked, and helping spark a real revival of Pacific navigation traditions that continues today.",
        "Key Question: \"Why do you think it mattered so much to prove this method still worked, rather than just writing down what was remembered about it?\"",
      ],
    },
    {
      title: "A Real Navigational Idea: Etak (10 minutes)",
      points: [
        "Teacher Input: introduce a genuinely fascinating real concept used by traditional Micronesian/Carolinian navigators called etak. Rather than thinking of the canoe as moving toward a fixed island, navigators using etak imagined the canoe as staying still, while islands 'moved' past it in relation to reference stars. This mental framework helped navigators track progress without any instruments.",
        "Key Question: \"Why might imagining yourself as 'staying still' actually make it easier to track a long journey, rather than imagining yourself constantly moving?\"",
      ],
    },
    {
      title: 'Training the Memory (10 minutes)',
      points: [
        "Activity: Run a memory-sequence game — show a sequence of symbols (representing a 'star path') briefly, then hide it. Teams must recall and recreate the sequence accurately, just as real wayfinders trained their memory over years through repetition.",
        "Discuss: why might memorising something be safer at sea than relying on a written chart that could be lost or ruined by water?",
      ],
    },
  ],
  exitTicket: `Write one sentence: who was Mau Piailug, and why does his 1976 voyage matter to this story?`,
  faith: {
    ponder: 'After the storm, Tama doesn\'t know where he is. The stars are hidden. The ocean gives no clues. This is the feeling Psalm 119 was written for — the moment when you can\'t see the way forward and you need something beyond yourself to light the path. God\'s word is that lamp.',
    verse: 'Your word is a lamp to my feet and a light to my path.',
    ref: 'Psalm 119:105 (NIV)',
    value: 'Mōhio  Know',
    valueDesc: 'Knowing God and His word gives us a light to navigate by, even when everything around us is dark and disorienting.',
    questions: [
      'Have you ever been in a situation where you genuinely didn\'t know what to do next? What helped you find direction?',
      'A lamp only lights \'your feet\' and \'your path\' — not the whole landscape. What does it mean to trust God one step at a time?',
      'How do you practically use God\'s word as a \'lamp\' in your daily life?',
    ],
  },
  resources: [
    'Symbol/sequence cards for the memory game',
    'A simple timer for the memory challenge',
  ],
  videos: [
    { title: 'Mau Piailug and the Hōkūleʻa voyage', search: 'Mau Piailug master navigator Hokulea voyage', why: 'Documents the real historical figure and voyage central to this lesson.' },
    { title: 'What is etak navigation?', search: 'etak navigation concept explained Micronesia', why: 'Explains the real, genuinely clever navigational concept introduced in this lesson.' },
  ],
  studentAgency: {
    art: { title: 'Illustrate Mau Piailug\'s Voyage', body: `Draw a scene depicting the 1976 Hōkūleʻa voyage, showing the double-hulled canoe and the open ocean it crossed.\n\n**Instructions:**\n1. Include the canoe and a simple route from Hawaii to Tahiti.\n2. Add a small label noting the real navigator's name.\n\n**Reflection Prompt:** Why do you think this moment in history is worth illustrating and remembering?` },
    readWrite: { title: 'A Tribute to a Master Navigator', body: `Write a short tribute or biography paragraph about Mau Piailug and why his knowledge mattered.\n\n**Word Count Guide:** 120–180 words.\n\n**Reflection Prompt:** What real skill of his impressed you most?` },
    technology: { title: 'Build an Etak Diagram', body: `Use a simple drawing/slides tool to create a diagram explaining the etak concept — the canoe staying "still" while islands move past it.\n\n**Reflection Prompt:** How did making the diagram change your understanding of the idea?` },
    watchReview: { title: 'Watch and Note: A Real Master Navigator', body: `Watch a short video about Mau Piailug or the Hōkūleʻa voyage.\n\n**Search term:** "Mau Piailug master navigator Hokulea voyage"\n\n**Reflection Prompt:** What fact from the video would you want to share with someone who'd never heard this story?` },
  }
},

// ───────────────────────────── TUESDAY — GEOGRAPHY ─────────────────────────────
{
  day: 'Tuesday', strand: 'Geography', sessionLabel: 'Trial 17: The Star Compass',
  topic: 'NAVIGATING BY STARS — Real Names, Real Sky Positions',
  curriculumArea: 'Social Sciences (Geography)',
  aos: [
    'Understanding Place and Environment: explore how people view and use the natural environment differently, including for navigation and orientation.',
  ],
  keyCompetencies: 'Thinking; Using Language, Symbols & Text',
  learningIntentions: [
    'We are learning what a star compass is and how it works.',
    'We are learning real Pacific names and meanings for key stars and constellations.',
    'I can use a star compass to determine direction on a map.',
  ],
  assessment: 'Teacher observation of the star compass navigation activity on the floor map.',
  introduction: `"Yesterday we met a real navigator who used the stars to cross an entire ocean. Today, we build the actual tool in his mind: the star compass — and we learn some of the real star names that mattered to Pacific voyagers."`,
  mainContent: [
    {
      title: 'What Is a Star Compass? (10 minutes)',
      points: [
        "Teacher Input: A star compass is a mental (or sometimes physical) wheel of direction points, each linked to where a particular star or constellation reliably rises or sets on the horizon. Because stars rise and set in almost the same spot every night, a trained navigator could use them like a giant, glowing set of compass points.",
      ],
    },
    {
      title: 'Real Stars, Real Names (12 minutes)',
      points: [
        "Teacher Input: introduce a few real, genuinely used star reference points from Pacific navigation traditions. Matariki (the Pleiades star cluster) is well known across the Pacific and in Māori tradition, often associated with the new year and remembrance. Te Matau a Māui (Maui's fishhook, part of the constellation Scorpius) is a star pattern named in Māori tradition after the legendary fishhook of Māui. The Southern Cross, known in Māori as Te Punga (the anchor), is another key reference point still used for finding south in the southern hemisphere sky today.",
        "Key Question: \"Why might giving stars meaningful names — instead of just numbers or letters — have helped voyagers remember them more easily across generations?\"",
      ],
    },
    {
      title: "Building and Using a Star Compass (13 minutes)",
      points: [
        "Activity: Build a more detailed star compass wheel, marking key real stars/constellations (Matariki, Te Matau a Māui, Te Punga/Southern Cross) at points around it.",
        "Activity: Use the star compass to 'navigate' a paper waka token across a star-marked floor map between islands, choosing direction based on real star positions rather than guessing.",
      ],
    },
  ],
  exitTicket: `Write one sentence naming ONE real star or constellation used in Pacific navigation, and what it's called.`,
  faith: {
    ponder: 'The voyagers memorised hundreds of stars to navigate thousands of kilometres of open ocean. The same stars that Hina taught Tama to read are the \'work of God\'s fingers\' — set in place deliberately, as a gift to navigators and a declaration of His greatness.',
    verse: 'When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them, human beings that you care for them?',
    ref: 'Psalm 8:3-4 (NIV)',
    value: 'Mōhio  Know',
    valueDesc: 'Looking at the stars and learning their names is an act of knowing God — who named every star and knows us each by name too.',
    questions: [
      'The Psalmist looks at the stars and asks \'who am I that God cares about me?\' — do you ever feel that way? What do you do with that feeling?',
      'God named every star — Matariki, Te Punga, the Southern Cross — and God knows your name. What does that tell you about how God sees you?',
      'How does learning about the vastness of creation make you feel about God — and about yourself?',
    ],
  },
  resources: [
    'Paper, compasses (drawing), pencils for star compass craft',
    'A star-marked floor/wall map for the navigation activity',
    'Reference images of Matariki, Te Matau a Māui, and the Southern Cross if available',
  ],
  videos: [
    { title: 'What is a star compass?', search: 'Polynesian star compass navigation explained', why: 'Gives a clear, age-appropriate explanation of the real tool central to this lesson.' },
    { title: 'Matariki and Māori star navigation', search: 'Matariki Te Matau a Maui star navigation Maori', why: 'Introduces real, culturally significant star names relevant to this lesson.' },
  ],
  studentAgency: {
    art: { title: 'Illustrate the Real Star Names', body: `Draw a night sky scene featuring Matariki, Te Matau a Māui, and Te Punga (the Southern Cross), labelled with their real names and meanings.\n\n**Reflection Prompt:** Which of these star names did you find most interesting, and why?` },
    readWrite: { title: 'Why Names Matter', body: `Write a short paragraph explaining why giving stars meaningful names (rather than just numbers) might have helped voyagers remember and use them.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** Can you think of a modern example where a meaningful name helps you remember something better than a number would?` },
    technology: { title: 'Digital Star Compass', body: `Use a simple drawing tool to build a digital star compass wheel, labelling at least 3 real star reference points.\n\n**Reflection Prompt:** What was the trickiest part of placing the points accurately?` },
    watchReview: { title: 'Watch and Note: Star Navigation', body: `Watch a short video about the Polynesian star compass or Matariki.\n\n**Search term:** "Polynesian star compass navigation explained"\n\n**Reflection Prompt:** What real star name or fact from the video stuck with you most?` },
  }
},

// ───────────────────────────── WEDNESDAY — SCIENCE ─────────────────────────────
{
  day: 'Wednesday', strand: 'Science', sessionLabel: 'Trial 18: Why the Sky Changes',
  topic: "THE REAL REASON FOR SEASONS — It's Not About Distance from the Sun",
  curriculumArea: 'Science (Planet Earth and Beyond)',
  aos: [
    "Investigate the components of the solar system, including the Earth's place within it.",
    'Build science knowledge by exploring and comparing observations with current scientific understanding.',
  ],
  keyCompetencies: 'Thinking; Participating & Contributing',
  learningIntentions: [
    "We are learning the real scientific reason seasons happen — and addressing a common misconception.",
    'We are learning why the night sky changes with the seasons.',
    'I can use a simple model to explain a real astronomical phenomenon.',
  ],
  assessment: 'Teacher observation of the seasons demonstration and group discussion. Review of seasonal sky wheels.',
  introduction: `"This week we've learned real star names voyagers relied on. But here's an important real science question: why do different stars appear at different times of the year at all? And here's a common misconception worth tackling directly: many people think seasons happen because Earth gets closer to or further from the Sun. That's actually not true — let's find out the real reason."`,
  mainContent: [
    {
      title: "Addressing the Misconception (8 minutes)",
      points: [
        "Teacher Input: Ask the class directly: \"Why do you think we have seasons?\" Many will likely suggest Earth moves closer to or further from the Sun. Explain clearly: this is a common misconception — Earth's distance from the Sun barely changes across the year, and it isn't the real cause of seasons.",
      ],
    },
    {
      title: 'The Real Cause: Earth\'s Tilt (12 minutes)',
      points: [
        "Teacher Input: Earth is tilted on its axis by about 23.5 degrees, and this tilt stays pointed in roughly the same direction as Earth orbits the Sun across the year. This means different parts of Earth receive more or less direct sunlight at different times of year, depending on whether they're tilted toward or away from the Sun — and that is the real cause of seasons.",
        "Demonstration: use a torch as the 'sun' and have a student slowly orbit it holding a tilted globe (or ball with a marked tilt), observing how light hits different latitudes more directly at different points in the orbit.",
      ],
    },
    {
      title: 'Why the Night Sky Changes Too (10 minutes)',
      points: [
        "Teacher Input: As Earth orbits the Sun across the year, the part of space we face at night gradually changes too — which is why different stars and constellations (like Matariki) become visible at different times of year.",
        "Key Question: \"Why would a voyager need to know not just the season, but how the season changes which stars they could rely on at night?\"",
      ],
    },
  ],
  exitTicket: `Write one sentence correcting the common misconception about why seasons happen.`,
  faith: {
    ponder: 'The seasons change because God built them into the fabric of creation — the tilt of the earth, the orbit around the sun, the rhythms of warm and cold. God designed a world that rewards the patient learner who pays attention to His patterns.',
    verse: 'It was you who set all the boundaries of the earth; you made both summer and winter.',
    ref: 'Psalm 74:17 (NIV)',
    value: 'Mōhio  Know',
    valueDesc: 'Learning why the sky changes — and that God set those rhythms in place — deepens our knowledge of the Creator who built order into all things.',
    questions: [
      'God \'made both summer and winter.\' How do you experience God differently in different seasons — both in nature and in your own life?',
      'The changing sky confused navigators until they understood God\'s pattern behind it. What confusing things in your life might make more sense once you understand God\'s pattern?',
      'What does it say about God that He built reliable, repeating rhythms into creation?',
    ],
  },
  resources: [
    'A torch or lamp ("the sun")',
    'A globe or ball marked with a visible tilt',
    'Paper for seasonal sky wheels',
  ],
  videos: [
    { title: 'Why do we have seasons? (the real reason)', search: 'why do we have seasons axial tilt explained for kids', why: "Directly addresses and corrects the common 'distance from the sun' misconception with the real scientific explanation." },
  ],
  studentAgency: {
    art: { title: "Illustrate Earth's Tilt Through the Year", body: `Draw Earth at four points in its orbit around the Sun, clearly showing the consistent tilt at each point.\n\n**Instructions:**\n1. Draw the Sun in the centre.\n2. Draw Earth at four positions around it, tilted the same direction each time.\n3. Label which hemisphere is tilted toward the Sun at each point.\n\n**Reflection Prompt:** What was the hardest part of showing the tilt staying consistent?` },
    readWrite: { title: 'Correcting the Myth', body: `Write a short, clear explanation (as if to a younger student) correcting the "distance from the sun" myth and explaining the real cause of seasons.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** Why do you think this myth is so common, even though it isn't correct?` },
    technology: { title: 'Build a Seasonal Star Wheel', body: `Create a simple digital or paper wheel showing which real stars (e.g. Matariki) are visible in each season.\n\n**Reflection Prompt:** How does this wheel connect back to what voyagers needed to know?` },
    watchReview: { title: 'Watch and Note: The Real Reason for Seasons', body: `Watch a short video explaining the real scientific cause of seasons.\n\n**Search term:** "why do we have seasons axial tilt explained for kids"\n\n**Reflection Prompt:** Did the video change or confirm what you already believed about seasons?` },
  }
},

// ───────────────────────────── THURSDAY — TECHNOLOGY ─────────────────────────────
{
  day: 'Thursday', strand: 'Technology', sessionLabel: 'Trial 19: Old Ways, New Tools',
  topic: 'THE MAGNETIC COMPASS — A Real Invention, Compared to Real Wayfinding',
  curriculumArea: 'Technology',
  aos: [
    'Nature of Technology: understand that technological outcomes are products or systems developed to meet a need, and can be evaluated for fitness for purpose.',
    'Technological Knowledge: understand how a technological device makes use of a natural phenomenon to function.',
  ],
  keyCompetencies: 'Thinking; Participating & Contributing',
  learningIntentions: [
    'We are learning what a magnetic compass is, how it works, and its real history.',
    "We are learning to compare traditional wayfinding with magnetic compass navigation.",
    'I can form and justify an opinion using evidence from both navigation methods.',
  ],
  assessment: 'Teacher observation of the compass-vs-wayfinding comparison challenge and class debate.',
  introduction: `"We've spent four weeks learning real wayfinding skills passed down across generations. Today we meet a different real invention entirely: the magnetic compass — and ask an honest question: does having an instrument make a method 'better'?"`,
  mainContent: [
    {
      title: 'A Real Invention with a Long History (10 minutes)',
      points: [
        "Teacher Input: The magnetic compass is believed to have first been developed in ancient China, with early versions used for navigation by around the 11th century. It works because Earth itself behaves like a giant magnet, and a free-spinning magnetised needle naturally aligns itself with Earth's magnetic field, consistently pointing toward magnetic north.",
        "Key Question: \"Why might knowing the compass's real history help us appreciate it as just one more clever human invention, rather than something that makes older methods 'wrong'?\"",
      ],
    },
    {
      title: 'Comparing the Two Methods (10 minutes)',
      points: [
        "Teacher Input: A magnetic compass is reliable and doesn't require years of training, but it can be affected by magnetic interference and tells you direction only — not your real position. Traditional wayfinding takes years to master, but combines direction, position, and environmental awareness (wind, swells, stars, birds, clouds) into one constantly-updating mental picture.",
      ],
    },
    {
      title: 'Test and Debate (15 minutes)',
      points: [
        "Activity: Give groups a real compass to experiment with alongside their star compass wheel from Tuesday. Navigate the same simple course twice — once using only the star compass/memory method, once using the real compass — and compare speed, accuracy, and how each felt to use.",
        "Activity: Hold a short class debate: which method would you trust more on a real voyage, and why? Is there value in both?",
      ],
    },
  ],
  exitTicket: `Write one sentence: where and roughly when was the magnetic compass first developed?`,
  faith: {
    ponder: 'GPS is extraordinary — but it needs a satellite signal, a battery, and a working device. The stars require nothing except eyes that have been taught to read them. Hina\'s wisdom was about knowing something so deeply that no technology can replace it. This is the trust in God that Proverbs describes: not leaning on tools alone, but on deep, abiding relationship.',
    verse: 'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
    ref: 'Proverbs 3:5-6 (NIV)',
    value: 'Manaaki  Serve',
    valueDesc: 'Developing deep wisdom that serves others — not just relying on shortcuts and tools — is at the heart of faithful service.',
    questions: [
      'GPS tells you where to go without needing to understand why. How might that be different from the deep knowledge Hina passed to Tama?',
      '\'Lean not on your own understanding\' — does this mean we shouldn\'t use our minds? Or does it mean something else?',
      'Is there an area of your life where you\'ve been relying too much on external shortcuts rather than developing real wisdom?',
    ],
  },
  resources: [
    'Real compasses (one or more per group)',
    'Star compass wheels from Tuesday',
    'A simple course for the navigation comparison',
  ],
  videos: [
    { title: 'History of the magnetic compass', search: 'history of the magnetic compass invention China', why: 'Provides real historical context for the invention discussed in this lesson.' },
    { title: 'How does a compass work?', search: 'how does a compass work Earth magnetic field explained', why: "Explains the real science behind the compass's function." },
  ],
  studentAgency: {
    art: { title: 'Design a "Hybrid" Navigation Tool', body: `Design a tool on paper that combines the best of both traditional wayfinding and modern compass technology.\n\n**Instructions:**\n1. Sketch your hybrid tool.\n2. Label one traditional feature and one modern feature it combines.\n\n**Reflection Prompt:** Why did you choose to combine those two specific features?` },
    readWrite: { title: 'The Compass\'s Real History', body: `Write a short factual recount of the magnetic compass's real history and how it works.\n\n**Word Count Guide:** 120–180 words.\n\n**Reflection Prompt:** What part of its history surprised you most?` },
    technology: { title: 'Digital Comparison Chart', body: `Create a simple digital table comparing traditional wayfinding and the magnetic compass across categories like: training time, reliability, and information provided.\n\n**Reflection Prompt:** Which method "wins" more categories — and does that settle the debate?` },
    watchReview: { title: 'Watch and Note: The Compass', body: `Watch a short video on the magnetic compass's history or science.\n\n**Search term:** "history of the magnetic compass invention China"\n\n**Reflection Prompt:** What fact from the video would change someone's mind in today's debate?` },
  }
},

// ───────────────────────────── FRIDAY — ART ─────────────────────────────
{
  day: 'Friday', strand: 'Art', sessionLabel: 'Trial 20: Painting the Stars',
  topic: 'MATARIKI STAR PAINTING — Star Map Quilt Square',
  curriculumArea: 'The Arts (Visual Art)',
  aos: [
    'Developing Practical Knowledge: explore colour, line, and pattern to express ideas.',
    'Communicating and Interpreting: identify how artists have used the environment as inspiration.',
    'Understanding the Arts in Context: investigate the purpose of objects and images from past and present cultures.',
  ],
  keyCompetencies: 'Thinking; Using Language, Symbols & Text',
  learningIntentions: [
    'We are learning to use the night sky as an artistic reference, placing stars intentionally.',
    'We are understanding how Matariki and Te Punga held meaning for Māori and Pacific navigators.',
    'I can create a personal star map square showing at least two named star formations.',
  ],
  assessment: 'Completed star map square with at least two identifiable star formations and a written sentence.',
  introduction: `Dim the lights if possible. Display the Milky Way image from Monday's trial. Ask: "If this was your only road map, which dots would you memorise first?" Introduce Matariki (nine stars of the Pleiades) and Te Punga (Southern Cross) — the two most important clusters for Pacific navigation.`,
  mainContent: [
    {
      title: 'Sketching the Star Positions (8 minutes)',
      points: [
        "Use white chalk or light pencil to mark star positions on dark paper — start with Matariki\'s tight cluster of nine, then Te Punga\'s four stars of the Southern Cross.",
        'Encourage students to use actual relative positions from the star compass, not random placement.',
      ],
    },
    {
      title: 'Painting the Stars (12 minutes)',
      points: [
        'Using white and gold paint or pastel, paint each star — varying dot size to show brightness.',
        'Optional: add a faint Milky Way streak using a dry brush or smudged white pastel.',
        "Teacher prompt: \"A star that navigators trusted had to be remembered clearly. Make your important stars unmistakable.\"",
      ],
    },
    {
      title: 'Labelling and Assembly (10 minutes)',
      points: [
        'Lightly label key star clusters in pencil: Matariki, Te Punga, any others known.',
        "Write one sentence on the back: which star would YOU trust most on a dark night, and why?",
        "Add the square to the group quilt and step back — compare with Weeks 1–3\'s squares.",
      ],
    },
  ],
  exitTicket: 'Point to one star on your square and say its name and what it tells a navigator.',
  faith: {
    ponder: 'Matariki. Te Punga. Māui\'s fishhook. The voyagers gave stars names because names matter — names make things real, knowable, and part of your story. God does the same with every star in the universe. And He does it with us too: He knows your name.',
    verse: 'He determines the number of the stars and calls them each by name.',
    ref: 'Psalm 147:4 (NIV)',
    value: 'Pānga  Impact',
    valueDesc: 'Painting the stars and naming them reflects back the glory of the God who named them all — bringing wonder and worship into the world through our art.',
    questions: [
      'God calls every star by name — and there are more stars than grains of sand on every beach on earth. What does that tell you about God\'s capacity to know and love?',
      'If God names the stars, and names YOU, what does that mean for how God sees you on your hardest days?',
      'As you painted your star map, how might you make that kind of work an act of worship rather than just an art activity?',
    ],
  },
  resources: [
    'Dark blue or black paper squares (A4 trimmed to square)',
    'White and gold paint, pastels, or chalk',
    'Fine brushes or cotton buds for dot stars',
    'Star compass reference image from Tuesday',
    'Group quilt backing sheets',
  ],
  videos: [
    { title: 'Matariki — the nine stars explained', search: 'Matariki nine stars Maori New Year meaning kids', why: 'Provides context for each of the nine Matariki stars and their meanings.' },
    { title: 'Polynesian star navigation', search: 'Polynesian star navigation Pacific wayfinding stars', why: 'Shows how specific star clusters were used in practice.' },
  ],
  studentAgency: {
    art: { title: 'Paint Your Star Map Square', body: `This week's main activity IS the art focus — paint your Matariki star map on dark paper and add it to the group quilt.\n\n**Reflection Prompt:** What did you discover about placing stars intentionally versus randomly?` },
    readWrite: { title: 'The Night Watch', body: `Write a short journal entry (80–120 words) as Tama on night watch, identifying stars one by one.\n\n**Reflection Prompt:** Which star felt most like a friend by the end of your watch?` },
    technology: { title: 'Digital Star Map', body: `Use a drawing tool to create a digital star map showing Matariki, Te Punga, and at least two other named stars with labels.\n\n**Reflection Prompt:** What was the hardest thing about making stars look like stars on screen?` },
    watchReview: { title: 'Watch: Matariki — the Stars Explained', body: `Watch a short video on Matariki and its nine stars.\n\n**Search term:** "Matariki nine stars Maori New Year meaning kids"\n\n**Reflection Prompt:** Which of the nine stars' meanings surprised you most?` },
  }
}

]

// Register these lesson plans into the shared app registry: Term 2, Week 4
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {};
window.ALL_LESSON_PLANS['polynesian-migration'] = window.ALL_LESSON_PLANS['polynesian-migration'] || {};
window.ALL_LESSON_PLANS['polynesian-migration'][4] = {};
WEEK4_LESSONS_RAW.forEach(l => { window.ALL_LESSON_PLANS['polynesian-migration'][4][l.day] = l; });
