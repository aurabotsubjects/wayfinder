// Rich lesson-plan content for SKYBOUND: The Baobab Route (Term 3) — Week 1
// Monday (History) / Tuesday (Geography) / Wednesday (Science) / Friday (Art)
// Thursday (Technology) for this week already lives in data/term3-lessonplans-thursdays.js
// — this file follows the exact same structure (see that file's header notes), and the
// exact same story beats as data/term3.js Week 1, so introductions echo Tapiwa's actual
// dialogue from that file. Registers additively into window.ALL_LESSON_PLANS so it can sit
// alongside the Thursday file without overwriting it.
//
// Story continuity: Tapiwa (Hwange/Vic Falls) narrates this week solo — Nomvula doesn't
// radio in for the first time until Week 3. Sekuru Josiah (grandfather, retired bush pilot)
// is referenced as the logbook's original owner.

const SKYBOUND_WEEK1_LESSONS = [

// ============================== MONDAY — HISTORY ==============================
{
  day: `Monday`, strand: `History`, sessionLabel: `Flight Log 1: The Logbook Opens`,
  topic: `THE LOGBOOK OPENS — Locating Southern Africa and Meeting the San, its First Peoples`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding Place and Environment: understand how people's awareness of spatial patterns helps them make sense of geographic space, and locate significant places on a map.`,
    `Understanding the Past: understand how the perspectives of people who lived before written record can still be known today, through evidence and continuing living culture.`,
  ],
  keyCompetencies: `Thinking; Language, Symbols and Text`,
  learningIntentions: [
    `We are learning to locate Zimbabwe and South Africa on a map of Africa, and get a real sense of how big this region actually is.`,
    `We are learning who the San people are — the first peoples of Southern Africa, whose knowledge of the land stretches back tens of thousands of years.`,
    `I can explain why deep, unwritten knowledge of a landscape is a genuine form of expertise, not a lesser one.`,
  ],
  assessment: `Teacher observation of the map-location activity and class discussion; review of exit tickets for understanding of Southern Africa's location and the San as Southern Africa's first peoples.`,
  introduction: `An old leather logbook tumbles out of a battered suitcase prop. The moment it opens, the classroom window seems to fill with cloud, and the room tilts gently, like it's banking in the air. "Sharp, crew!" A boy's voice, grinning, framed by red dust and thorn trees. "I'm Tapiwa. This logbook belonged to my grandfather, Sekuru Josiah — he flew bush planes his whole life, and now my cousin and I use it to bring people to meet our world. You're airborne now, whether you meant to be or not. Before we go anywhere, you should know where 'here' actually is. Zimbabwe, South Africa — big names, but I want you to see them properly, on the map, and meet the very first people who ever called this land home: the San. Ready when you are."

Wonder question: before any map, any road, any shop existed here — how would you even begin to learn a landscape well enough to survive in it?`,
  mainContent: [
    {
      title: `Finding Southern Africa (10 minutes)`,
      points: [
        `Teacher Input: Using a large map or globe, locate Africa as a continent, then zoom in to find Zimbabwe and South Africa in the southern part of it. Compare their size to a familiar reference (e.g. South Africa is roughly four to five times the size of New Zealand; Zimbabwe is a little larger than New Zealand's North and South Islands combined).`,
        `Introduce "Southern Africa" as a region name, not a single country — point out neighbouring countries (Botswana, Zambia, Mozambique, Namibia) so students see it as part of a connected region, not an isolated place.`,
        `Key Question: "Why might it matter to look at the actual size of a place on a map, instead of just hearing its name?"`,
      ],
    },
    {
      title: `Meeting the San — Southern Africa's First Peoples (15 minutes)`,
      points: [
        `Teacher Input: The San (sometimes called Bushmen, a term some San communities use themselves and others do not — explain that naming matters, and "San" is the most widely respected general term) are widely considered to hold the oldest continuous cultural and genetic lineage known to science, with a presence in Southern Africa stretching back tens of thousands of years.`,
        `Explain that San communities historically lived as skilled hunter-gatherers across the deserts and savannas of the region, and that their languages are famous for using click consonants — sounds no other language family uses in quite the same way.`,
        `Important nuance: San people are not a "vanished" people — San communities live in Southern Africa today, in the Kalahari and elsewhere, some continuing traditional practices and many living modern lives, often facing real challenges around land rights and recognition.`,
        `Discuss: what kind of knowledge would you need — about water, animals, plants, weather — to live well in a place like this without shops, taps or roads? The San built exactly that kind of knowledge, refined and passed down over an extraordinary span of time.`,
      ],
    },
    {
      title: `What Would You Need to Know? (10 minutes)`,
      points: [
        `Activity: In pairs, students list three things they would need to know about a landscape before they could survive in it without modern conveniences (e.g. where water hides, which plants are safe to eat, how to read weather signs).`,
        `Share back as a class, then compare the class's list to what is actually known about San survival knowledge — water-finding (including from underground root sources and dew), tracking for food, plant knowledge for medicine and nutrition.`,
        `Key Question: "Is this kind of knowledge easier or harder to learn than what's in a textbook? Why?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE thing the San needed to know to live well in Southern Africa, and explain why that counts as real knowledge, not just "old ways."`,
  faith: {
    ponder: `Long before any map was drawn, God had already placed the San people here, painting their world onto rock. Every nation's story — including this one — is part of the larger story God has been telling since the beginning.`,
    verse: `From one man he made all the nations, that they should inhabit the whole earth; and he marked out their appointed times in history and the boundaries of their lands.`,
    ref: `Acts 17:26 (NIV)`,
    value: `Mōhio  Know`,
    valueDesc: `Learning where the San people came from helps us know God's story, and see that every people group has a place within it.`,
    questions: [
      `If God marked out appointed times and places for every nation, what does that tell us about the San people — and about the country you were born in?`,
      `Tapiwa and Nomvula are proud of where they come from. What are you proud of about where YOU come from?`,
      `How does knowing God as the one who placed every nation change the way we look at a country very different from our own?`,
    ],
  },
  resources: [
    `Large map of Africa (physical or digital), plus a globe if available`,
    `Battered suitcase and/or "old leather logbook" prop, for the ongoing story device`,
    `A small set of respectful, contemporary and historical images of San communities (avoid images that only show the past, so students understand San people exist today)`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Who are the San people?`, search: `San people Southern Africa first peoples documentary`, why: `Gives an age-appropriate, respectful introduction to San history and identity, grounding the lesson in real people rather than stereotype.` },
    { title: `Map overview of Southern Africa`, search: `Southern Africa map Zimbabwe South Africa geography overview`, why: `Helps students visually anchor the region before the term's journey begins.` },
  ],
  studentAgency: {
    art: { title: `Draw the Route So Far`, body: `Draw a simple route line from where you live to Hwange, Zimbabwe, marking one thing you're curious to find out along the way.\n\n**Instructions:**\n1. Sketch a very simple world/regional outline, or use a printed map.\n2. Mark your home and Hwange, and draw a dotted line between them.\n3. Add a small label near Hwange naming one question you have about it.\n\n**Reflection Prompt:** What made you choose that particular question to mark?` },
    readWrite: { title: `First Logbook Entry`, body: `Write a short diary entry in role as a student who has just discovered the logbook and realised where it's taking you.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What is the one detail from today's lesson you most wanted to include, and why?` },
    technology: { title: `Build a Simple Digital Map Marker`, body: `Using a simple slide, document, or drawing tool, mark Zimbabwe and South Africa on a digital map outline and add one labelled fact about the San people to each.\n\n**Reflection Prompt:** Which fact did you choose to include, and why did it stand out to you?` },
    watchReview: { title: `Watch and Note: The San People`, body: `Watch a short video introducing the San people of Southern Africa.\n\n**Search term:** "San people Southern Africa first peoples documentary"\n\n**Reflection Prompt:** What is one thing you learned that changed how you think about "old" knowledge?` },
  },
},

// ============================== TUESDAY — GEOGRAPHY ==============================
{
  day: `Tuesday`, strand: `Geography`, sessionLabel: `Flight Log 2: Three Kinds of Country`,
  topic: `THREE KINDS OF COUNTRY — Savanna, Highveld and Lowveld Climate Zones`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding Place and Environment: understand how physical processes shape landscapes and environments, and how people adapt their lives to different climate conditions.`,
  ],
  keyCompetencies: `Thinking; Participating and Contributing`,
  learningIntentions: [
    `We are learning that Zimbabwe and South Africa are not one single kind of landscape — different climate zones shape very different ways of life within the same countries.`,
    `We are learning to identify a savanna, a highveld and a lowveld, and describe key differences in rainfall, temperature and vegetation between them.`,
    `I can predict how a place's climate zone shapes the housing, clothing and food of the people who live there.`,
  ],
  assessment: `Teacher observation of the climate-zone sorting activity and group predictions; review of postcard tasks for accurate use of climate clues.`,
  introduction: `"Sharp, crew — back already. Good. Here's something that took me a while to get: Zimbabwe and South Africa aren't just one kind of place. There's the savanna where I live, all dry grass and thorn trees. There's the highveld, up high and cooler. There's the lowveld, hot and low near the rivers. My gogo — my grandmother — always says you can't farm the same way in all three, and you definitely can't dress the same way either. Help me show you the difference?"

Wonder question: if two places are in the same country, how could they possibly need completely different houses, clothes and crops?`,
  mainContent: [
    {
      title: `What Makes a Climate Zone? (8 minutes)`,
      points: [
        `Teacher Input: Explain that a climate zone is shaped mainly by altitude (how high above sea level), latitude, and distance from the coast — all of which affect rainfall and temperature.`,
        `Introduce the three zones simply: savanna (warm, dry grassland with scattered trees, like around Hwange), highveld (a high inland plateau, cooler, found across much of South Africa's interior), and lowveld (low-lying, hot, near river systems, including part of the Kruger region).`,
        `Key Question: "Why might being higher above sea level make a place cooler, even in a hot country?"`,
      ],
    },
    {
      title: `Sorting Savanna, Highveld and Lowveld (17 minutes)`,
      points: [
        `Activity: Using a physical/climate map of Southern Africa, students sort a set of landscape photographs into the correct climate zone (savanna, highveld, lowveld), discussing rainfall, temperature and vegetation clues in each image.`,
        `Groups justify their sorting choices using specific visual evidence — vegetation type, land shape, signs of dryness or rainfall — not just a guess.`,
        `Key Question: "What was the biggest clue that gave a zone away?"`,
      ],
    },
    {
      title: `Predicting Life in Each Zone (10 minutes)`,
      points: [
        `Activity: In groups, students predict what kind of house, clothing and food would suit each of the three zones, explaining their reasoning using the climate clues from the sorting activity.`,
        `Discuss as a class: farming, building materials and daily life all have to adapt to climate — this is true everywhere, including the students' own region.`,
        `Key Question: "Which of the three zones would be hardest to farm, and why?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE difference between two of the three climate zones, and explain how that difference would change the way people live there.`,
  faith: {
    ponder: `God filled creation with astonishing variety — not one single landscape repeated everywhere, but savanna, highveld and lowveld each doing something different, each declared "good." Noticing that variety is one way of noticing God's creativity.`,
    verse: `God saw all that he had made, and it was very good.`,
    ref: `Genesis 1:31 (NIV)`,
    value: `Aroha  Love (World)`,
    valueDesc: `Loving the world God made includes noticing its variety closely enough to actually understand it, not just glancing past it.`,
    questions: [
      `Why do you think God made three such different kinds of country within the same region, instead of just one?`,
      `Tapiwa's gogo farms differently depending on the zone. What is one way people in YOUR region adapt to the climate you live in?`,
      `What is one part of creation near you that you could look at more closely this week, the way today's lesson asked you to look closely at savanna, highveld and lowveld?`,
    ],
  },
  resources: [
    `Physical/climate map of Southern Africa`,
    `Photograph sets of savanna, highveld and lowveld landscapes (printed or digital), unlabelled for sorting`,
    `Blank postcard templates for the creative task`,
  ],
  videos: [
    { title: `Southern Africa's climate zones explained`, search: `Southern Africa savanna highveld lowveld climate zones`, why: `Gives students a clear, visual overview of the three zones before or after the sorting activity.` },
  ],
  studentAgency: {
    art: { title: `Design a Postcard From a Zone`, body: `Design a simple postcard from one of the three zones (savanna, highveld or lowveld), showing what you'd see, hear and feel there.\n\n**Instructions:**\n1. Choose one zone.\n2. Illustrate one scene that clearly shows that zone's climate.\n3. Write a short "wish you were here" message using at least two climate-specific details.\n\n**Reflection Prompt:** What one detail in your postcard makes it obviously THAT zone and not one of the other two?` },
    readWrite: { title: `A Letter Between Zones`, body: `Write a short letter from a child living in one climate zone to a cousin living in a different one, describing daily life.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What was the trickiest everyday detail to imagine differently for the other zone?` },
    technology: { title: `Build a Digital Climate Comparison Chart`, body: `Use a simple document, slide, or spreadsheet to build a comparison chart of the three zones across rainfall, temperature and vegetation.\n\n**Reflection Prompt:** Which zone would be hardest for YOU to adapt to, based on your chart?` },
    watchReview: { title: `Watch and Note: Southern Africa's Climate Zones`, body: `Watch a short video explaining Southern Africa's climate zones.\n\n**Search term:** "Southern Africa savanna highveld lowveld climate zones"\n\n**Reflection Prompt:** Which zone surprised you the most, and why?` },
  },
},

// ============================== WEDNESDAY — SCIENCE ==============================
{
  day: `Wednesday`, strand: `Science`, sessionLabel: `Flight Log 3: The Tree That Stores Water`,
  topic: `THE TREE THAT STORES WATER — Savanna Biome and Baobab Adaptation`,
  curriculumArea: `Science`,
  aos: [
    `Living World, Ecology: understand that living things have life processes that help them survive, and that they are suited to their particular habitat.`,
    `Living World, Ecology: begin to understand the interdependence between living things and their environment.`,
  ],
  keyCompetencies: `Thinking`,
  learningIntentions: [
    `We are learning to describe the savanna biome — its climate, seasons and typical plant and animal life.`,
    `We are learning how the baobab tree survives extreme dry seasons through specific physical adaptations.`,
    `I can explain how many other living things depend on a single baobab tree for food, water or shelter.`,
  ],
  assessment: `Teacher observation of group discussion and the interdependence-web activity; review of labelled baobab sketches for accurate understanding of adaptation features.`,
  introduction: `"There's a tree near our home that's older than anyone can properly count — Sekuru Josiah reckons some baobabs are over a thousand years old. It looks upside-down, like someone planted its roots in the sky by mistake. During the dry season, when everything else has given up, it's still standing there, full of water it stored months ago. How does a TREE do that? I've wondered my whole life."

Wonder question: if a tree can't move to find water, what could it possibly do instead to survive months of drought?`,
  mainContent: [
    {
      title: `The Savanna Biome (8 minutes)`,
      points: [
        `Teacher Input: Introduce the savanna biome — warm year-round, with a clearly split wet and dry season, grassland scattered with drought-tolerant trees, and home to some of the world's most recognisable wildlife.`,
        `Discuss: savanna plants and animals have all had to develop ways of coping with months without rain — today's focus is one of the most dramatic examples, the baobab tree.`,
      ],
    },
    {
      title: `How the Baobab Survives (17 minutes)`,
      points: [
        `Teacher Input: The baobab's swollen trunk is a genuine water-storage adaptation — it can hold hundreds, even thousands, of litres of water, taken up during the wet season and drawn on through the dry months.`,
        `Explain its other features: a wide, shallow but far-reaching root system to capture rainfall quickly; the ability to drop its leaves entirely in the dry season to reduce water loss; a very long lifespan that lets it survive repeated droughts across centuries.`,
        `Activity: In pairs, students label a simple baobab diagram (trunk, roots, leafless dry-season branches) with what each part does to help the tree survive.`,
        `Key Question: "Why might a tree that can't move need to be especially good at storing what it needs?"`,
      ],
    },
    {
      title: `Everything That Depends on One Tree (10 minutes)`,
      points: [
        `Activity: In teams, students list every living thing that might depend on a single baobab tree for food, water or shelter (e.g. elephants eating bark and fruit for moisture, birds and bats nesting or feeding in its canopy, insects living in its bark).`,
        `Discuss as a class: this is interdependence — one tree's survival supporting a whole web of other species around it, especially during drought when other water sources are scarce.`,
        `Key Question: "What might happen to that whole web if baobab trees became rare?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE adaptation that helps the baobab survive the dry season, and explain how it works.`,
  faith: {
    ponder: `The baobab's strange, upside-down shape is exactly the kind of wild creativity the Psalms praise God for — creation isn't just functional, it's astonishing, made with a wisdom far beyond what any one tree needed just to survive.`,
    verse: `How many are your works, Lord! In wisdom you made them all; the earth is full of your creatures.`,
    ref: `Psalm 104:24 (NIV)`,
    value: `Aroha  Love (World)`,
    valueDesc: `Looking closely at how a baobab survives is a way of loving the world God made — noticing its wisdom, not just its usefulness.`,
    questions: [
      `The baobab looks strange compared to trees you might know. Why do you think God made creation full of such different, surprising designs?`,
      `So many animals depend on one tree surviving. What does that teach us about how connected God made living things to be?`,
      `What is one "ordinary" plant or tree near you that might be more remarkable than you've ever noticed?`,
    ],
  },
  resources: [
    `Photos or a short video clip of baobab trees, ideally showing both wet-season and dry-season appearance`,
    `Simple unlabelled baobab diagram, one per pair`,
    `Chart paper for the interdependence-web activity`,
  ],
  videos: [
    { title: `How the baobab tree survives drought`, search: `baobab tree adaptation water storage explained`, why: `Grounds the lesson's key science content in real, visual footage of the tree students are learning about.` },
    { title: `Savanna biome overview`, search: `savanna biome plants animals climate overview`, why: `Gives broader context for the biome the baobab belongs to.` },
  ],
  studentAgency: {
    art: { title: `Sketch a Baobab`, body: `Sketch a baobab and label three features that help it survive the dry season.\n\n**Instructions:**\n1. Draw the tree's distinctive swollen trunk and root-like branches.\n2. Add three labels pointing to specific survival features.\n3. Add one small animal that depends on the tree.\n\n**Reflection Prompt:** Which feature took the longest to draw accurately, and why?` },
    readWrite: { title: `A Baobab's Diary`, body: `Write a short diary entry in role as a baobab tree, describing what the dry season feels like from its point of view.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What scientific fact did you build your "diary entry" around?` },
    technology: { title: `Build a Digital Interdependence Web`, body: `Use a simple drawing or slide tool to build a digital web showing at least four living things connected to a baobab tree.\n\n**Reflection Prompt:** Which connection in your web did you find most surprising?` },
    watchReview: { title: `Watch and Note: The Baobab Tree`, body: `Watch a short video about how baobab trees survive drought.\n\n**Search term:** "baobab tree adaptation water storage explained"\n\n**Reflection Prompt:** What is the most impressive fact you learned about the baobab?` },
  },
},

// ============================== FRIDAY — ART ==============================
{
  day: `Friday`, strand: `Art`, sessionLabel: `Flight Log 5: Stories on Stone`,
  topic: `STORIES ON STONE — San Rock Art as Storytelling`,
  curriculumArea: `The Arts, Visual Arts`,
  aos: [
    `Developing Practical Knowledge: explore materials and techniques to create a symbol-based artwork.`,
    `Developing Ideas: use observation and imagination to develop ideas that communicate a story through visual symbols alone.`,
  ],
  keyCompetencies: `Thinking; Language, Symbols and Text`,
  learningIntentions: [
    `We are learning that San rock art is one of the oldest storytelling traditions in the world, using symbols and images instead of written words.`,
    `We are learning that a single symbol can carry a whole story, if the meaning behind it is clear enough.`,
    `I can create a symbol-based artwork that tells a simple story without using any words.`,
  ],
  assessment: `Teacher observation of the artwork creation process and the partner "reading" activity; review of finished pieces for evidence of intentional, story-carrying symbol choices.`,
  introduction: `Tapiwa's voice softens, more careful than usual. "San rock art is some of the oldest storytelling in the entire world — paintings on cave walls and rock faces that have survived for thousands of years. No pen, no paper, just ochre and rock and something that mattered enough to last. Today I want you to make a symbol of your own, one that tells a story the way theirs did — through shape alone, not words."

Wonder question: if you could tell only ONE story using only shapes and symbols, with no words at all, what would you choose to show, and how?`,
  mainContent: [
    {
      title: `What Makes San Rock Art Remarkable (10 minutes)`,
      points: [
        `Teacher Input: San rock art appears across Southern Africa, painted using natural pigments (ochre, charcoal, animal fat as a binder) onto rock shelters and cave walls, some pieces many thousands of years old.`,
        `Explain that the art depicts animals, human figures and symbolic scenes, often connected to spiritual beliefs and important events — a genuine storytelling and record-keeping system, not simple decoration.`,
        `Discuss respectfully: this is a living cultural tradition with deep meaning to San communities, not just an ancient curiosity — treat the images shown with the same respect given to any sacred or meaningful artwork.`,
      ],
    },
    {
      title: `Symbol-Based Rock Art: Making Your Own (25 minutes)`,
      points: [
        `Activity: On paper made to resemble stone (torn-edged brown/orange paper), students use ochre-toned paint, pastel or crayon to create a symbol-based artwork inspired by San rock art — figures, animals or symbols telling a simple story without any written words.`,
        `Encourage students to plan their symbols before painting: what is the story, and what is the smallest number of clear shapes that could tell it?`,
        `Circulate with prompting questions: "What is happening in your story?" "How would someone who's never met you understand that from the shapes alone?"`,
      ],
    },
    {
      title: `Reading Each Other's Stories (10 minutes)`,
      points: [
        `Activity: Students swap artworks with a partner and try to "read" the story in their symbols before the artist explains it — then compare what was guessed with what was actually meant.`,
        `Key Question: "What made a symbol easy or hard for your partner to read correctly?"`,
      ],
    },
  ],
  exitTicket: `Give your finished piece a title using only symbols, no words at all — then, on paper, write one sentence explaining what your title means.`,
  faith: {
    ponder: `God filled Bezalel with skill and creativity to craft beautiful, meaningful things for His people — a reminder that artistic skill itself is a gift from God, given so we can create things that tell the truth and carry meaning forward.`,
    verse: `I have filled him with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills.`,
    ref: `Exodus 35:31 (NIV)`,
    value: `Mōhio  Know`,
    valueDesc: `Creating symbols that carry real meaning, the way San artists did, is a way of knowing that art can hold truth just as powerfully as words.`,
    questions: [
      `Exodus says God filled a craftsman with skill for a purpose. What do you think your own creative skill might be "filled" for?`,
      `San rock art lasted thousands of years without a single word written down. Why do you think some stories are better told through image than through words?`,
      `What is one story or value from your own life that you'd want to last as long as San rock art has?`,
    ],
  },
  resources: [
    `Torn-edged brown/orange paper, cut to resemble stone`,
    `Ochre-toned paint, pastel or crayon (browns, reds, oranges, black)`,
    `A small set of respectful reference images of San rock art (figures, animals, symbolic scenes)`,
  ],
  videos: [
    { title: `San rock art of Southern Africa`, search: `San rock art Southern Africa explained`, why: `Gives students a respectful, visual grounding in the real tradition before they create their own symbol-based artwork.` },
  ],
  studentAgency: {
    art: { title: `Extend Your Rock Art Symbol`, body: `Choose one symbol from your finished artwork and redesign it three different ways, each slightly simpler than the last.\n\n**Reflection Prompt:** At what point did the symbol become too simple to still tell the story?` },
    readWrite: { title: `Write the Story Behind the Symbols`, body: `Write out, in full sentences, the story your symbol-based artwork was telling.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How different is the written story from what your partner guessed earlier?` },
    technology: { title: `Design a Digital Symbol Set`, body: `Using a simple drawing tool, design a set of 4–5 symbols that could tell a short story, in the spirit of San rock art.\n\n**Reflection Prompt:** What was harder — designing the symbols, or making sure they'd be understood without explanation?` },
    watchReview: { title: `Watch and Note: San Rock Art`, body: `Watch a short video about San rock art.\n\n**Search term:** "San rock art Southern Africa explained"\n\n**Reflection Prompt:** What is one thing that surprised you about how old, or how meaningful, this art form is?` },
  },
},

]

// Register these lesson plans into the shared app registry, additively (won't overwrite
// Thursday's entry, already registered by data/term3-lessonplans-thursdays.js).
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'] = window.ALL_LESSON_PLANS['skybound-baobab-route'] || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'][1] = window.ALL_LESSON_PLANS['skybound-baobab-route'][1] || {}
SKYBOUND_WEEK1_LESSONS.forEach(lesson => {
  window.ALL_LESSON_PLANS['skybound-baobab-route'][1][lesson.day] = lesson
})
