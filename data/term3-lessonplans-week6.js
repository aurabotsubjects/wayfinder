// Rich lesson-plan content for SKYBOUND: The Baobab Route (Term 3) — Week 6
// Monday (History) / Tuesday (Geography) / Wednesday (Science) / Friday (Art)
// Thursday (Technology) for this week already lives in data/term3-lessonplans-thursdays.js
// — this file follows the exact same structure (see that file's header notes), and the
// exact same story beats as data/term3.js Week 6, so introductions echo the actual dialogue
// from that file. Registers additively into window.ALL_LESSON_PLANS so it can sit alongside
// the Thursday file without overwriting it.
//
// Story continuity: this is "Crossing the Border" — the route's first crossing into South
// Africa, per the planning document's emotional arc. Tapiwa is a little out of his depth
// here for once, and Nomvula takes the lead for the first time — the beginning of her
// two-week arc (this week and Week 7) carrying the harder, closer-to-home history. Colonisation
// is handled honestly but age-appropriately — consequence and courage, not violence or graphic
// detail, per the character bible's hard rules — with Monday and Tuesday both turning toward
// resilience and fairness rather than despair alone.

const SKYBOUND_WEEK6_LESSONS = [

// ============================== MONDAY — HISTORY ==============================
{
  day: `Monday`, strand: `History`, sessionLabel: `Flight Log 21: New Arrivals, New Boundaries`,
  topic: `NEW ARRIVALS, NEW BOUNDARIES — Colonisation and Its Consequences`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding the Past: understand how the arrival of new groups of people can change land ownership, power, and daily life for those already living there.`,
    `Understanding the Past: investigate how the perspectives of people in the past differ, based on evidence available about their lives and choices.`,
  ],
  keyCompetencies: `Thinking; Relating to Others`,
  learningIntentions: [
    `We are learning what colonisation was, and that European settlers and the British South Africa Company changed who owned land in this region and how.`,
    `We are learning to look at this history honestly, focusing on what people DID in response, not only on what happened to them.`,
    `I can name at least two real ways communities responded to land and power changing hands.`,
  ],
  assessment: `Teacher observation of the class discussion and resilience list; review of "before and after" sketches for engagement with the scale of the change, handled with age-appropriate care.`,
  introduction: `The route crosses into South Africa for the first time — bigger cities, a different rhythm. "Sharp, crew," Tapiwa says, a little out of his depth for once. "This part's not really mine to tell. Nomvula, over to you." Nomvula, careful with her words: "European settlers arrived here, and the British South Africa Company after them — and it changed everything about who owned this land, and how. It's a heavy story. I want to tell it honestly, but through what people DID next, not just what happened to them."

Wonder question: when something as basic as land ownership changes suddenly and unfairly, what do you think would matter most to a community trying to hold onto who they are?`,
  mainContent: [
    {
      title: `What Changed, and How (12 minutes)`,
      points: [
        `Teacher Input: explain simply that from the late 1800s, European settlers arrived in the region, and organisations such as the British South Africa Company gained control over large areas of land, changing who owned and controlled land that communities had lived on for generations.`,
        `Keep the explanation focused on the real, factual consequence — land and power changing hands — rather than graphic detail, in line with an honest but age-appropriate telling.`,
        `Key Question: "Why might controlling land be one of the very first things a new, powerful group tries to change?"`,
      ],
    },
    {
      title: `What People Did Next (13 minutes)`,
      points: [
        `Activity: as a class, discuss what choices remained available to communities affected by this sudden change — for example, continuing to pass on language, stories, farming knowledge and art (many of which the class has already studied this term), organising and resisting where possible, and rebuilding community life under new, harder conditions.`,
        `List real examples of resilience discussed by the class, not only examples of loss, keeping the focus on what people actively did.`,
        `Key Question: "Which of the things we've learned about this term — the San's stories, Great Zimbabwe's walls, Ndebele patterns, beadwork meaning — do you think became even MORE important to hold onto during a hard time like this?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE real way a community can hold onto its identity even when land or power is taken from it unfairly.`,
  faith: {
    ponder: `Micah doesn't ask people to pretend hard history didn't happen — he asks what faithfulness looks like in response to it: justice, mercy, and humility. Today's honest history lesson is a real place to practise exactly that kind of response.`,
    verse: `And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.`,
    ref: `Micah 6:8 (NIV)`,
    value: `Mōhio  Know`,
    valueDesc: `Knowing this part of history honestly, and asking what justice, mercy and humility look like in response to it, helps us hold hard truths without either ignoring them or losing hope.`,
    questions: [
      `Micah 6:8 asks for justice AND mercy AND humility together. Why might it be easy to focus on just one of those three, and miss the others?`,
      `Nomvula chose to tell this story honestly, but through what people DID, not just what happened to them. Why might that choice matter?`,
      `Is there a hard truth in your own life or community that's easier to avoid than to face honestly? What would "walking humbly" through it actually look like?`,
    ],
  },
  resources: [
    `Simple regional map showing land use/ownership before and after this period`,
    `A running list (board or poster) for the "what people did" discussion`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Colonisation in Southern Africa, an honest overview`, search: `colonisation Southern Africa history explained for kids`, why: `Gives students an age-appropriate, honest overview before the class discussion, focused on consequence rather than graphic detail.` },
  ],
  studentAgency: {
    art: { title: `Draw Before and After`, body: `Draw a simple "before and after" pair of sketches showing land use changing over time in one imagined community.\n\n**Instructions:**\n1. Sketch the "before" scene, showing a community using their land freely.\n2. Sketch the "after" scene, showing the same land under new control.\n3. Add one small detail in the "after" scene showing the community still holding onto something of their own.\n\n**Reflection Prompt:** Why did you choose that particular detail to include as a sign of resilience?` },
    readWrite: { title: `A Letter That Wasn't Sent`, body: `Write a short letter in role as a young person from this time, describing one thing they refused to give up, even as land and power changed hands.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What did you choose as the "one thing," and why did you choose that over anything else?` },
    technology: { title: `Build a Timeline Slide`, body: `Using a simple document or slide tool, build a short timeline showing land use before, during, and after this period of change.\n\n**Reflection Prompt:** Which point on your timeline do you think mattered most to the people actually living through it?` },
    watchReview: { title: `Watch and Note: Colonisation, Honestly Told`, body: `Watch a short video explaining colonisation in this region at an age-appropriate level.\n\n**Search term:** "colonisation Southern Africa history explained for kids"\n\n**Reflection Prompt:** What is one thing you learned that you hadn't known before today?` },
  },
},

// ============================== TUESDAY — GEOGRAPHY ==============================
{
  day: `Tuesday`, strand: `Geography`, sessionLabel: `Flight Log 22: Whose Land, Whose Food`,
  topic: `WHOSE LAND, WHOSE FOOD — Land Use Change and Food Security`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding Place and Environment: understand how changes in land ownership and use affect a community's ability to feed itself, both historically and today.`,
  ],
  keyCompetencies: `Thinking; Participating and Contributing`,
  learningIntentions: [
    `We are learning that land use change historically affected who could farm for themselves, and that this still shapes food security today.`,
    `We are learning what a community genuinely needs — land, water, seeds, knowledge — to reliably feed itself.`,
    `I can explain what happens to a community's food security when even one of those needs is taken away.`,
  ],
  assessment: `Teacher observation of the group discussion; review of food security checklist posters for clarity and genuine understanding of what communities need.`,
  introduction: `"When land use changes hands, food security changes with it," Nomvula says. "Families who once farmed for themselves sometimes lost the ability to. It's not just a history fact — it still shapes who has enough to eat today. Let's look at it properly."

Wonder question: if you suddenly lost access to the land your family used to grow food on, what do you think would need to happen for your family to feel food-secure again?`,
  mainContent: [
    {
      title: `From Land Change to Food Change (10 minutes)`,
      points: [
        `Teacher Input: explain that when land use and ownership changed during this period, many families who had farmed for their own food (subsistence farming, Week 2) lost access to land they had relied on, which directly affected their ability to feed themselves.`,
        `Explain that this history still shapes food security in the region today — where people can farm, what they can grow, and how reliably they can feed their own families.`,
        `Key Question: "Why might losing farmland affect a family more seriously and more immediately than losing almost anything else?"`,
      ],
    },
    {
      title: `What Does a Community Need to Feed Itself? (15 minutes)`,
      points: [
        `Activity: In groups, students discuss and list what a community genuinely needs to feed itself reliably — land, water, seeds/crops, and knowledge (farming skill, passed down like Tapiwa's family's own maize and tobacco plot) — then discuss what happens if even ONE of those is taken away.`,
        `Groups share their list and their strongest example of what happens when one need is missing.`,
        `Key Question: "Which of these four needs — land, water, seeds, knowledge — do you think is hardest to get back once it's lost?"`,
      ],
    },
    {
      title: `Fairness, Not Just Farming Skill (10 minutes)`,
      points: [
        `Teacher Input: draw the discussion together — food security isn't only about farming skill or effort; fair access to land and water matters just as much, connecting today's geography directly to Monday's history.`,
        `Key Question: "How is today's lesson connected to what we learned on Monday, even though one was history and one is geography?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE thing, besides farming skill, that a community needs to be truly food-secure.`,
  faith: {
    ponder: `Leviticus reminds Israel that the land itself ultimately belongs to God, and that people are only ever stewards and sojourners on it, not final owners. That truth cuts both ways — it's a caution against ever treating land as something to be seized unfairly, and a comfort to anyone who has had land taken from them.`,
    verse: `The land must not be sold permanently, because the land is mine and you reside in my land as foreigners and strangers.`,
    ref: `Leviticus 25:23 (NIV)`,
    value: `Pānga  Impact`,
    valueDesc: `Understanding that land ultimately belongs to God, not to any one person or company, helps us see fair access to land and food as a real matter of justice, not just economics.`,
    questions: [
      `Leviticus says the land is God's, and people are "foreigners and strangers" on it, even in their own home. How does that change how you think about who has the "right" to land?`,
      `Nomvula connects today's geography straight back to yesterday's history. Why do land and food security keep showing up together throughout the Bible and throughout this term?`,
      `What is one way you could support fair access to food for others, even in a small way, this week?`,
    ],
  },
  resources: [
    `Blank poster template for the food security checklist`,
    `Recap notes/images from Week 2's subsistence farming lesson`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Food security explained simply`, search: `what is food security explained for kids`, why: `Gives students a clear, simple grounding in the concept before connecting it to the region's history.` },
  ],
  studentAgency: {
    art: { title: `Design a Food Security Checklist Poster`, body: `Design a simple poster listing what a community needs to feed itself well.\n\n**Instructions:**\n1. List the four key needs discussed in class (land, water, seeds, knowledge).\n2. Sketch one small icon for each.\n3. Add a short title summing up the whole poster's message.\n\n**Reflection Prompt:** Which of the four icons was hardest to represent visually, and why?` },
    readWrite: { title: `A Family's Food Story`, body: `Write a short story in role as a family whose access to farmland changed suddenly, describing how they adapted.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What did your family choose to do first when their situation changed?` },
    technology: { title: `Build a Needs Diagram`, body: `Using a simple slide or drawing tool, build a diagram showing the four things a community needs for food security, and what happens if one is removed.\n\n**Reflection Prompt:** Which connection in your diagram surprised you most?` },
    watchReview: { title: `Watch and Note: Food Security`, body: `Watch a short video explaining food security.\n\n**Search term:** "what is food security explained for kids"\n\n**Reflection Prompt:** What is one thing you learned that connects to this week's history lesson?` },
  },
},

// ============================== WEDNESDAY — SCIENCE ==============================
{
  day: `Wednesday`, strand: `Science`, sessionLabel: `Flight Log 23: The Animal That Shapes the Land`,
  topic: `THE ANIMAL THAT SHAPES THE LAND — Elephants as a Keystone Species`,
  curriculumArea: `Science`,
  aos: [
    `Living World, Ecology: understand that some species have a disproportionately large effect on their ecosystem relative to their numbers, and that removing them changes the whole system.`,
  ],
  keyCompetencies: `Thinking; Relating to Others`,
  learningIntentions: [
    `We are learning what a "keystone species" is, and that elephants are a real example in the savanna.`,
    `We are learning specific ways elephant herds physically shape the landscape for countless other species.`,
    `I can predict what would happen to a savanna landscape if elephants disappeared from it.`,
  ],
  assessment: `Teacher observation of the group discussion and prediction task; review of "before and after" landscape sketches for genuine ecological reasoning.`,
  introduction: `"Elephants aren't just big, crew — they're what scientists call a keystone species. They knock down trees, dig waterholes, spread seeds for kilometres. Take elephants away, and the whole savanna changes shape. I want you to see just how much weight rests on one kind of animal."

Wonder question: can you think of one small, everyday action YOU take that quietly shapes the space around you more than you'd expect, the way an elephant shapes a whole savanna?`,
  mainContent: [
    {
      title: `What Is a Keystone Species? (10 minutes)`,
      points: [
        `Teacher Input: explain that a "keystone species" is one whose impact on its ecosystem is far larger than its numbers alone would suggest — remove it, and the whole system changes shape, the way removing a keystone from an arch would collapse the whole structure.`,
        `Key Question: "Why do you think this idea is called a 'keystone' species, borrowing a word from building an arch?"`,
      ],
    },
    {
      title: `How Elephants Shape the Land (15 minutes)`,
      points: [
        `Teacher Input: present real examples of how elephant herds shape the savanna — knocking down trees (which opens space for grasses and smaller plants), digging waterholes that other species rely on, and spreading seeds across kilometres through their dung, helping plants grow in new places.`,
        `Activity: in groups, students list three real ways an elephant herd changes its landscape, then predict what would happen to each of those changes if the herd disappeared.`,
        `Key Question: "Which of these three effects do you think would be missed FASTEST by other animals if elephants vanished?"`,
      ],
    },
    {
      title: `Connecting the Whole System (5 minutes)`,
      points: [
        `Discuss briefly as a class: how does today's keystone species idea connect to the food web work from Week 5's Lost City Trial?`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE real way an elephant herd shapes the land around it, beyond just eating plants.`,
  faith: {
    ponder: `Psalm 50 pictures God declaring ownership of every wild animal, "the cattle on a thousand hills" — a reminder that elephants and every other creature already belong to God before they belong to any ecosystem study. Recognising their outsized importance is really recognising the intricate care God built into creation.`,
    verse: `For every animal of the forest is mine, and the cattle on a thousand hills.`,
    ref: `Psalm 50:10 (NIV)`,
    value: `Aroha  Love (World)`,
    valueDesc: `Understanding just how much weight rests on one keystone species helps us love and care for creation with real knowledge, not just general good feeling.`,
    questions: [
      `Psalm 50 says every animal already belongs to God. How does that change the way you think about protecting a keystone species like the elephant?`,
      `If one animal can shape an entire landscape just by living its ordinary life, what does that suggest about the importance of "ordinary" things in general?`,
      `What is one part of God's creation near you — even something small — that you think might be doing more important work than people usually notice?`,
    ],
  },
  resources: [
    `Images or video of elephant herds shaping savanna landscape (waterholes, felled trees, seed dispersal)`,
    `Blank paper for "before and after" landscape sketches`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Elephants as a keystone species`, search: `elephants keystone species savanna explained`, why: `Gives students a clear visual introduction to how elephants physically shape their environment before the group discussion.` },
  ],
  studentAgency: {
    art: { title: `Draw a Before-and-After Savanna`, body: `Draw a "before and after" savanna landscape showing the difference elephants make.\n\n**Instructions:**\n1. Sketch a savanna WITH elephants present, showing waterholes and open spaces.\n2. Sketch the SAME savanna without elephants, showing how it might change over time.\n3. Label at least two differences between the two scenes.\n\n**Reflection Prompt:** Which difference between your two scenes do you think would happen fastest?` },
    readWrite: { title: `A Keystone Species Report`, body: `Write a short factual report explaining what a keystone species is and why elephants qualify as one.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What is the clearest piece of evidence you used to support your explanation?` },
    technology: { title: `Build a Cause-and-Effect Diagram`, body: `Using a simple digital tool, build a diagram showing at least three effects elephants have on their landscape, and what happens if each is removed.\n\n**Reflection Prompt:** Which cause-and-effect chain in your diagram surprised you most?` },
    watchReview: { title: `Watch and Note: Elephants Shaping the Savanna`, body: `Watch a short video on elephants as a keystone species.\n\n**Search term:** "elephants keystone species savanna explained"\n\n**Reflection Prompt:** What is one fact from the video you hadn't already listed in class?` },
  },
},

// ============================== FRIDAY — ART ==============================
{
  day: `Friday`, strand: `Art`, sessionLabel: `Flight Log 25: A Wall Big Enough for a Whole Story`,
  topic: `A WALL BIG ENOUGH FOR A WHOLE STORY — Township Art and Mural Storytelling`,
  curriculumArea: `The Arts`,
  aos: [
    `Visual Arts, Communicating and Interpreting: understand how communities use shared public art to communicate collective stories and messages.`,
  ],
  keyCompetencies: `Thinking; Participating and Contributing; Relating to Others`,
  learningIntentions: [
    `We are learning that township communities in South Africa use large public murals to tell their own stories, in public, for everyone to see.`,
    `We are learning to design one section of a shared mural that connects to a single agreed class theme.`,
    `I can explain what message my section of a collaborative mural communicates.`,
  ],
  assessment: `Teacher observation of the theme-agreement discussion and collaborative design process; review of finished mural sections and written explanations for genuine connection to the shared theme.`,
  introduction: `"In townships across South Africa, whole walls become murals — communities telling their own stories in public, for everyone to see, not hidden away," Nomvula says. "Today, imagine a wall wide enough for a whole story, and design what you'd paint on it."

Wonder question: if your whole class had ONE wall to tell the world something true about your school or community, what do you think it should say?`,
  mainContent: [
    {
      title: `Murals as Public, Collective Storytelling (10 minutes)`,
      points: [
        `Teacher Input: explain that in many townships across South Africa, communities paint large public murals — on walls, buildings, and community spaces — to tell their own stories, celebrate identity, and communicate messages that matter to everyone in that community, rather than keeping art private.`,
        `Explain that, unlike a single artist's individual piece, a mural is often collaborative — many people contribute sections that connect into one larger, shared story.`,
        `Key Question: "Why might a community choose a huge public wall to tell a story, instead of something smaller and more private?"`,
      ],
    },
    {
      title: `Agreeing on One Shared Theme (10 minutes)`,
      points: [
        `Activity: as a group (or whole class), agree on ONE shared theme for the mural before anyone starts painting their individual section, so that every section connects into a single story rather than several unrelated ones.`,
        `Key Question: "What would happen to a mural if everyone painted their own theme instead of agreeing on one first?"`,
      ],
    },
    {
      title: `Mural Section Design (15 minutes)`,
      points: [
        `Activity: on a long shared sheet of paper (or joined individual sheets), each student or pair designs one section of a community mural inspired by township art and mural storytelling — a scene, symbol, or message the community would want everyone passing by to see, connected to the agreed theme.`,
        `Circulate and prompt: "How does your section connect visually or thematically to the sections next to it?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence explaining what story your section of the mural tells, and how it connects to the whole class's theme.`,
  faith: {
    ponder: `Isaiah pictures God turning ashes into something beautiful — a crown of beauty in place of grief. After a genuinely heavy week of history, a mural is exactly that kind of response: taking a real, sometimes difficult community story and turning it into something public, beautiful, and shared.`,
    verse: `To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning.`,
    ref: `Isaiah 61:3 (NIV, excerpt)`,
    value: `Aroha  Love (Others)`,
    valueDesc: `Choosing to turn a community's story — even a hard one — into something beautiful and shared is a real act of love for the people who will see it and recognise themselves in it.`,
    questions: [
      `Isaiah pictures beauty coming out of genuinely hard things, not instead of them. Why do you think that's different from just ignoring the hard part?`,
      `This week's history was heavy. Why might creating something beautiful together, like a mural, be an especially fitting way to close a week like this one?`,
      `Whose story would YOU want to help tell on a shared class or community wall, and why?`,
    ],
  },
  resources: [
    `Images of real township murals from South Africa (age-appropriate examples)`,
    `A long shared sheet of paper, or individual sheets that can be joined together`,
    `Paint, markers, or colouring materials`,
  ],
  videos: [
    { title: `Township mural art in South Africa`, search: `South African township mural art storytelling`, why: `Gives students a respectful, visual grounding in the real tradition before designing their own mural section.` },
  ],
  studentAgency: {
    art: { title: `Extend the Mural`, body: `Design a second, smaller mural section that could be added to the class mural, using the same agreed theme.\n\n**Reflection Prompt:** What did you keep the same from the first design, and what did you change?` },
    readWrite: { title: `The Mural's Message`, body: `Write out, in full sentences, what your class's whole mural communicates and why the class chose that theme.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** Do you think someone walking past your mural, who didn't know the class, would understand its message?` },
    technology: { title: `Design a Digital Mural Mockup`, body: `Using a simple drawing tool, create a digital mockup of how the whole class mural could look joined together.\n\n**Reflection Prompt:** What was harder to plan digitally — the individual sections, or how they connect?` },
    watchReview: { title: `Watch and Note: Township Mural Art`, body: `Watch a short video about township mural art and storytelling.\n\n**Search term:** "South African township mural art storytelling"\n\n**Reflection Prompt:** What is one message or story from a real mural that stood out to you?` },
  },
},

]

// Register these lesson plans into the shared app registry, additively (won't overwrite
// Thursday's entry, already registered by data/term3-lessonplans-thursdays.js).
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'] = window.ALL_LESSON_PLANS['skybound-baobab-route'] || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'][6] = window.ALL_LESSON_PLANS['skybound-baobab-route'][6] || {}
SKYBOUND_WEEK6_LESSONS.forEach(lesson => {
  window.ALL_LESSON_PLANS['skybound-baobab-route'][6][lesson.day] = lesson
})
