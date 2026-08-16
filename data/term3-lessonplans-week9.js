// Rich lesson-plan content for SKYBOUND: The Baobab Route (Term 3) — Week 9
// Monday (History) / Tuesday (Geography) / Wednesday (Science) / Friday (Art)
// Thursday (Technology) for this week already lives in data/term3-lessonplans-thursdays.js
// — this file follows the exact same structure (see that file's header notes), and the
// exact same story beats as data/term3.js Week 9, so introductions echo the actual dialogue
// from that file. Registers additively into window.ALL_LESSON_PLANS so it can sit alongside
// the Thursday file without overwriting it.
//
// Story continuity: this is "Looking Ahead" — a reflective chapter, per the planning
// document's emotional arc, where Tapiwa and Nomvula both start to sound like people who
// could one day pass all this on themselves, the way Sekuru Josiah passed it to them.
// Matches the exact Bible references and values from the planning document's Faith
// Connections table for Week 9 (Monday: Jeremiah 29:11 / Mōhio; Tuesday: Romans 8:19–21 /
// Pānga; Wednesday: Revelation 21:5 / Pānga; Friday: Psalm 139:14 / Mōhio).

const SKYBOUND_WEEK9_LESSONS = [

// ============================== MONDAY — HISTORY ==============================
{
  day: `Monday`, strand: `History`, sessionLabel: `Flight Log 36: Two Worlds, One Life`,
  topic: `TWO WORLDS, ONE LIFE — Southern Africa Today`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding Place and Environment: understand that modern Southern Africa includes busy cities, rural life, and communities living between both.`,
  ],
  keyCompetencies: `Thinking; Relating to Others`,
  learningIntentions: [
    `We are learning that Southern Africa today includes large modern cities as well as rural villages and reserves.`,
    `We are learning about the diaspora — people and families who live and work between two different places.`,
    `I can describe what might be hard and what might be good about living between a city and a home village.`,
  ],
  assessment: `Teacher observation of the pairs discussion; review of two-scene drawings for genuine engagement with living "between two worlds."`,
  introduction: `Both Tapiwa and Nomvula sound a little older this week, somehow. "Sharp, crew," Tapiwa says. "Southern Africa today isn't just villages and reserves — it's huge, busy cities too, and a lot of young people living between both worlds, like Nomvula's own mum, working in Johannesburg during the week and coming home on weekends. I want you to see the whole modern picture, not just the parts we've shown you so far."

Wonder question: what do you think it would feel like to belong fully to two very different places at once?`,
  mainContent: [
    {
      title: `A Modern, Varied Region (10 minutes)`,
      points: [
        `Teacher Input: explain that Southern Africa today includes large, modern cities like Johannesburg and Harare, alongside rural villages, farms and wildlife reserves — a much more varied picture than any single week's story location has shown.`,
        `Key Question: "Why do you think it's easy to picture only ONE version of a country or region, instead of the whole varied picture?"`,
      ],
    },
    {
      title: `Living Between Two Worlds (15 minutes)`,
      points: [
        `Teacher Input: introduce the idea of the diaspora — people who live and work away from their home community, like Nomvula's mother working in Johannesburg during the week and returning home on weekends — and explain this is a genuinely common experience for many families in the region.`,
        `Activity: in pairs, students discuss what might be hard, and what might be good, about living between a busy city and a home village or town.`,
        `Key Question: "What do you think would be the hardest thing to explain to a friend in the OTHER world about your life in this one?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE thing that might be hard, and ONE thing that might be good, about living between two worlds.`,
  faith: {
    ponder: `Jeremiah's promise wasn't given to a settled, comfortable people — it was given to Israelites living far from home, uncertain about the future. It's a fitting promise for families like Nomvula's, stretched between two worlds: God's plans for hope and a future don't depend on staying in one place.`,
    verse: `For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future.`,
    ref: `Jeremiah 29:11 (NIV)`,
    value: `Mōhio  Know`,
    valueDesc: `Knowing that God's good plans for us don't depend on staying in one fixed place helps us see families living between two worlds not as divided, but as carried by the same hope wherever they are.`,
    questions: [
      `Jeremiah 29:11 was written to people living far from home. Why might that make the promise even MORE meaningful, rather than less?`,
      `Nomvula's mum lives between two worlds for her family's sake. Do you know anyone in your own life who does something similar?`,
      `How might knowing God has a plan for you change how you feel about a big change or move in your own life?`,
    ],
  },
  resources: [
    `Images contrasting modern Southern African cities and rural/village life`,
    `Blank paper for two-scene drawings`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Modern Southern Africa: cities and rural life`, search: `modern South Africa Zimbabwe cities rural life today`, why: `Gives students a clear, current visual picture of the region's variety before the pairs discussion.` },
  ],
  studentAgency: {
    art: { title: `Draw Two Connected Scenes`, body: `Draw two small connected scenes — one city, one village — joined by a single line representing a family's journey between them.\n\n**Instructions:**\n1. Sketch a small city scene on one side.\n2. Sketch a small village or rural scene on the other.\n3. Draw a single connecting line or road between them, representing the journey.\n\n**Reflection Prompt:** What did you choose to include in each scene to show they're both "home" in different ways?` },
    readWrite: { title: `A Weekend Journey`, body: `Write a short piece in role as someone who travels between a city job and a home village each week, describing the journey and what they look forward to.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What did your character look forward to most, and why?` },
    technology: { title: `Build a "Two Worlds" Comparison Chart`, body: `Using a simple digital tool, build a chart comparing city life and village life in modern Southern Africa.\n\n**Reflection Prompt:** Which difference on your chart do you think matters most to a family living between both?` },
    watchReview: { title: `Watch and Note: Modern Southern Africa`, body: `Watch a short video about cities and rural life in Southern Africa today.\n\n**Search term:** "modern South Africa Zimbabwe cities rural life today"\n\n**Reflection Prompt:** What is one thing about modern Southern Africa that surprised you?` },
  },
},

// ============================== TUESDAY — GEOGRAPHY ==============================
{
  day: `Tuesday`, strand: `Geography`, sessionLabel: `Flight Log 37: Farming for a Changing Climate`,
  topic: `FARMING FOR A CHANGING CLIMATE — Sustainable and Climate-Smart Farming`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding Place and Environment: understand how farming communities adapt their practices in response to a changing climate.`,
  ],
  keyCompetencies: `Thinking; Participating and Contributing`,
  learningIntentions: [
    `We are learning what sustainable and climate-smart farming means, drawing together the farming knowledge built across this whole term.`,
    `We are learning specific techniques farmers use to adapt to a changing climate.`,
    `I can design a simple farm plan that includes at least two climate-smart features.`,
  ],
  assessment: `Teacher observation of the brainstorm discussion; review of climate-smart farm diagrams for genuine understanding of adaptation, not just decoration.`,
  introduction: `"The climate's changing, crew — that's not really up for debate anymore, my mum says," Tapiwa explains. "Sustainable, climate-smart farming is about adapting: new methods that protect the land while still feeding families. I want you to plan farming for the future, not just describe farming as it's always been."

Wonder question: if you were a farmer today, what's one thing about the weather you couldn't count on the way farmers once could?`,
  mainContent: [
    {
      title: `Recap: Farming Across the Term (8 minutes)`,
      points: [
        `Teacher Input: briefly recap subsistence farming (Week 2), commercial farming (Week 3), water and irrigation challenges (Week 4), and land/food security (Week 6), setting up today's forward-looking question: how does farming need to adapt now?`,
        `Key Question: "Looking back across everything we've learned about farming, what's the ONE challenge that's come up again and again?"`,
      ],
    },
    {
      title: `Climate-Smart Techniques (17 minutes)`,
      points: [
        `Teacher Input: introduce real climate-smart farming techniques used across the region — conservation agriculture (minimal soil disturbance), drought-resistant crop varieties, rainwater harvesting, mixed cropping, and better water management.`,
        `Activity: in groups, students brainstorm three changes a farmer might make to protect their crops and soil as rainfall patterns shift, drawing on techniques just introduced.`,
        `Key Question: "Which of these techniques do you think would be easiest for a small family farm to adopt, and which would be hardest?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE climate-smart farming technique and explain what problem it solves.`,
  faith: {
    ponder: `Paul writes that creation itself is "groaning" under the weight of a broken world, waiting for renewal — a genuinely honest picture of a changing climate. Farmers adapting wisely, working with the land rather than against it, are a small but real part of caring for that same waiting creation.`,
    verse: `For the creation waits in eager expectation for the children of God to be revealed... in hope that the creation itself will be liberated from its bondage to decay.`,
    ref: `Romans 8:19, 21 (NIV, shortened)`,
    value: `Pānga  Impact`,
    valueDesc: `Choosing to farm in ways that protect the land for the future is real Kingdom work — small, practical action that cares for a creation the Bible says is still waiting to be fully renewed.`,
    questions: [
      `Paul says creation is "waiting," almost like it's holding its breath for something better. What do you think climate-smart farming has to do with that waiting?`,
      `Tapiwa says his mum talks about the climate changing. Have you noticed anyone in your own life talking about changes like this?`,
      `What's one small, practical thing YOU could do that cares for the land the way a climate-smart farmer does?`,
    ],
  },
  resources: [
    `Images or diagrams of real climate-smart farming techniques`,
    `Blank paper for climate-smart farm diagrams`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Climate-smart farming explained`, search: `climate smart farming techniques explained for kids`, why: `Gives students a clear, practical introduction to real adaptation techniques before the group brainstorm.` },
  ],
  studentAgency: {
    art: { title: `Design a Climate-Smart Farm Diagram`, body: `Design a simple "climate-smart farm" diagram showing at least two sustainable features.\n\n**Instructions:**\n1. Sketch a small farm layout.\n2. Add and label at least two climate-smart features (e.g. rainwater tank, mixed crops).\n3. Add a short caption explaining what problem each feature solves.\n\n**Reflection Prompt:** Which feature did you think was the cleverest solution, and why?` },
    readWrite: { title: `A Farmer's Plan for the Future`, body: `Write a short piece in role as a farmer explaining the changes they're making to farm sustainably as the climate shifts.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What change did your farmer prioritise first, and why?` },
    technology: { title: `Build a Climate-Smart Techniques Chart`, body: `Using a simple digital tool, build a chart listing climate-smart techniques and the specific problem each one solves.\n\n**Reflection Prompt:** Which technique would you want to learn more about, and why?` },
    watchReview: { title: `Watch and Note: Climate-Smart Farming`, body: `Watch a short video about climate-smart farming techniques.\n\n**Search term:** "climate smart farming techniques explained for kids"\n\n**Reflection Prompt:** What is one technique from the video you didn't discuss in class?` },
  },
},

// ============================== WEDNESDAY — SCIENCE ==============================
{
  day: `Wednesday`, strand: `Science`, sessionLabel: `Flight Log 38: Where Things Are Getting Better`,
  topic: `WHERE THINGS ARE GETTING BETTER — Conservation Success Stories`,
  curriculumArea: `Science`,
  aos: [
    `Living World, Ecology: understand that conservation efforts, such as national parks and community conservancies, can lead to measurable recovery of species and habitats.`,
  ],
  keyCompetencies: `Thinking; Participating and Contributing`,
  learningIntentions: [
    `We are learning that national parks and community conservancies are producing real, measurable conservation successes in Southern Africa today.`,
    `We are learning to evaluate what makes a conservation project genuinely successful, not just well-intentioned.`,
    `I can describe one real conservation success story from this region.`,
  ],
  assessment: `Teacher observation of the class discussion; review of "conservation win" certificates for genuine understanding of what a real success looks like.`,
  introduction: `"After the rhino week, I want to show you something hopeful," Tapiwa says. "National parks and community conservancies really are protecting wildlife today — real, measurable wins, not just good intentions. It's not all struggle, crew. Some of it's working."

Wonder question: what do you think is the difference between a conservation project that SOUNDS good and one that's actually, measurably working?`,
  mainContent: [
    {
      title: `Real Conservation Wins (12 minutes)`,
      points: [
        `Teacher Input: introduce real conservation success stories from the region — national parks and community conservancies (locally-run protected areas that often directly benefit nearby communities) that have led to measurable recovery in species populations or habitat protection, connecting back to Week 4's rhino crisis and Week 6's elephants.`,
        `Key Question: "Why might a conservancy RUN by the local community succeed differently than one run entirely by outsiders?"`,
      ],
    },
    {
      title: `What Makes Success Real? (13 minutes)`,
      points: [
        `Activity: as a class, discuss what makes a conservation project actually successful long-term — measurable population recovery, community involvement and benefit, ongoing funding, and effective anti-poaching enforcement — rather than just well-intentioned.`,
        `Key Question: "If you were checking whether a conservation project was REALLY working, what evidence would you look for?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE thing that makes a conservation project genuinely successful, not just well-intentioned.`,
  faith: {
    ponder: `Revelation pictures God making all things new — real, complete renewal, not just good intentions. Every genuine conservation success story, however small, is a small preview of that larger promise: things that were breaking down being restored.`,
    verse: `He who was seated on the throne said, "I am making everything new!"`,
    ref: `Revelation 21:5 (NIV)`,
    value: `Pānga  Impact`,
    valueDesc: `Celebrating real conservation wins helps us see restoration work as genuine Kingdom impact — small, real signs of the renewal God has promised for the whole of creation.`,
    questions: [
      `Revelation pictures God making "everything" new, not just some things. How does that compare to a conservation project that succeeds in one small area?`,
      `Tapiwa wanted to show you something hopeful today, after the harder rhino lesson. Why might hope matter just as much as honesty about hard things?`,
      `What's one small "renewal" YOU could be part of, in your own community or family, this week?`,
    ],
  },
  resources: [
    `Real examples/images of conservation success stories from the region`,
    `Blank certificate template`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Conservation success stories in Southern Africa`, search: `conservation success stories Southern Africa national parks`, why: `Gives students real, hopeful examples of measurable conservation success before the class discussion.` },
  ],
  studentAgency: {
    art: { title: `Design a "Conservation Win" Certificate`, body: `Design a simple "conservation win" certificate for a species or area of your choice, imagining its recovery.\n\n**Instructions:**\n1. Choose a species or area studied this term.\n2. Design a certificate celebrating its imagined recovery.\n3. Add one sentence explaining what made the recovery successful.\n\n**Reflection Prompt:** What evidence did you imagine would prove your chosen recovery was real?` },
    readWrite: { title: `A Ranger's Good News Report`, body: `Write a short "good news" report in role as a ranger describing a real conservation success they've witnessed.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What specific evidence did your ranger include to prove the success was real?` },
    technology: { title: `Build a Conservation Success Timeline`, body: `Using a simple digital tool, build a timeline showing the steps from a conservation problem to a measurable success.\n\n**Reflection Prompt:** Which step in your timeline do you think was the turning point?` },
    watchReview: { title: `Watch and Note: Conservation Wins`, body: `Watch a short video about real Southern African conservation success stories.\n\n**Search term:** "conservation success stories Southern Africa national parks"\n\n**Reflection Prompt:** What is one success story from the video that gave you genuine hope?` },
  },
},

// ============================== FRIDAY — ART ==============================
{
  day: `Friday`, strand: `Art`, sessionLabel: `Flight Log 40: Faces Carved to Remember`,
  topic: `FACES CARVED TO REMEMBER — Mask and Carving Traditions`,
  curriculumArea: `The Arts`,
  aos: [
    `Visual Arts, Developing Ideas: explore mask and carving traditions as forms of memory, ceremony and storytelling.`,
  ],
  keyCompetencies: `Thinking; Managing Self`,
  learningIntentions: [
    `We are learning that mask and carving traditions run across this whole region, and that they carry memory, ceremony and storytelling, not just decoration.`,
    `We are learning to design a mask or carved-face artwork with real personal meaning behind it.`,
    `I can explain what value, memory or feeling my artwork represents.`,
  ],
  assessment: `Teacher observation of the planning and design process; review of finished masks/faces and written explanations for genuine personal meaning.`,
  introduction: `"Masks and carving traditions run right across this whole region, crew — not just decoration, but memory, ceremony, storytelling passed down through generations," Nomvula says. "Today, before next week's big finish, I want you to carve or draw a face that means something — a memory, a value, a feeling you want to carry forward."

Wonder question: if you could carve or draw ONE face to represent something you want to remember from this whole term, what would it be?`,
  mainContent: [
    {
      title: `Masks and Carving as Memory (10 minutes)`,
      points: [
        `Teacher Input: explain that mask and carving traditions across Southern Africa are rarely made purely for decoration — they carry meaning connected to memory, ceremony, storytelling and identity, often representing values, ancestors, or important community moments.`,
        `Key Question: "Why do you think a physical object, like a carved mask, might help a community remember something better than words alone?"`,
      ],
    },
    {
      title: `Designing a Meaningful Mask or Face (20 minutes)`,
      points: [
        `Activity: using card, clay, or paper, students design a mask or carved-face artwork representing a value, memory, or feeling they want to carry forward from the term, first writing one sentence about what it represents before starting, in keeping with real ceremonial masks never being made without a clear purpose.`,
        `Circulate and prompt: "How does the SHAPE or expression of your face design connect to what it represents?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence explaining what your mask or face design represents and why you chose it.`,
  faith: {
    ponder: `Psalm 139 marvels that each person is "fearfully and wonderfully made" — carefully, intentionally crafted, not accidental. Designing a mask or face with real, chosen meaning behind it is a small echo of that same idea: careful, intentional creation carries purpose.`,
    verse: `I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.`,
    ref: `Psalm 139:14 (NIV)`,
    value: `Mōhio  Know`,
    valueDesc: `Making something with real, chosen meaning behind it helps us know that intentional creation — whether a mask or a person — carries real purpose, not accident.`,
    questions: [
      `Psalm 139 says WE are "fearfully and wonderfully made," on purpose. How is that similar to how you approached designing your mask today?`,
      `Real ceremonial masks are never made without a clear purpose. Why do you think that matters, compared to art made just to look nice?`,
      `What is one value or memory from this whole term you'd genuinely want to "carve" into how you live going forward?`,
    ],
  },
  resources: [
    `Images of real mask and carving traditions from the region (age-appropriate examples)`,
    `Card, clay, or paper for mask/face designs`,
    `Paint, markers, or colouring materials`,
  ],
  videos: [
    { title: `Mask and carving traditions across Southern Africa`, search: `African mask carving traditions ceremony storytelling`, why: `Gives students a respectful, visual grounding in real mask and carving traditions before designing their own.` },
  ],
  studentAgency: {
    art: { title: `Design a Second Mask`, body: `Design a second mask or face representing a DIFFERENT value, memory or feeling from the term.\n\n**Reflection Prompt:** How does your second design differ in style from your first, and why?` },
    readWrite: { title: `Explaining Your Mask`, body: `Write out, in full sentences, what your mask or face design represents and why you chose it.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** Was it easier to design the mask or to explain it in words?` },
    technology: { title: `Design a Digital Mask Concept`, body: `Using a simple drawing tool, create a digital concept sketch for a mask design before making it by hand.\n\n**Reflection Prompt:** What changed between your digital concept and your finished physical mask?` },
    watchReview: { title: `Watch and Note: Mask and Carving Traditions`, body: `Watch a short video about mask and carving traditions across the region.\n\n**Search term:** "African mask carving traditions ceremony storytelling"\n\n**Reflection Prompt:** What is one tradition from the video that influenced your own design?` },
  },
},

]

// Register these lesson plans into the shared app registry, additively (won't overwrite
// Thursday's entry, already registered by data/term3-lessonplans-thursdays.js).
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'] = window.ALL_LESSON_PLANS['skybound-baobab-route'] || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'][9] = window.ALL_LESSON_PLANS['skybound-baobab-route'][9] || {}
SKYBOUND_WEEK9_LESSONS.forEach(lesson => {
  window.ALL_LESSON_PLANS['skybound-baobab-route'][9][lesson.day] = lesson
})
