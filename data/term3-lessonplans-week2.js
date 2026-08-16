// Rich lesson-plan content for SKYBOUND: The Baobab Route (Term 3) — Week 2
// Monday (History) / Tuesday (Geography) / Wednesday (Science) / Friday (Art)
// Thursday (Technology) for this week already lives in data/term3-lessonplans-thursdays.js
// — this file follows the exact same structure (see that file's header notes), and the
// exact same story beats as data/term3.js Week 2, so introductions echo Tapiwa's actual
// dialogue from that file. Registers additively into window.ALL_LESSON_PLANS so it can sit
// alongside the Thursday file without overwriting it.
//
// Story continuity: Tapiwa (Hwange/Vic Falls) still narrates solo this week — Nomvula's
// first radio-in isn't until Week 3. Sekuru Josiah (grandfather, retired bush pilot) tells
// the Monday history beat himself, by radio, for the first time. The carved wooden elephant
// and Baba Farai's ranger work are both referenced again this week, per the continuity rules.

const SKYBOUND_WEEK2_LESSONS = [

// ============================== MONDAY — HISTORY ==============================
{
  day: `Monday`, strand: `History`, sessionLabel: `Flight Log 6: The Stone City`,
  topic: `THE STONE CITY — Great Zimbabwe and a Trading Kingdom Before European Contact`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding the Past: understand how the perspectives of people who lived before written record can still be known today, through evidence and continuing living culture.`,
    `Understanding Place and Environment: understand how a significant place can reveal the scale and sophistication of a past society.`,
  ],
  keyCompetencies: `Thinking; Language, Symbols and Text`,
  learningIntentions: [
    `We are learning that Great Zimbabwe, the Stone City, was a powerful trading kingdom centuries before any European set foot in Southern Africa.`,
    `We are learning that its dry-stone walls were built without mortar, and what that tells us about the skill and organisation of the people who built them.`,
    `I can explain why some impressive civilisations are less globally well-known than others, and what that says about whose stories get told.`,
  ],
  assessment: `Teacher observation of the class discussion and group reasoning task; review of dry-stone pattern sketches for engagement with the "no mortar" construction idea.`,
  introduction: `The logbook falls open, but this time it isn't Tapiwa's voice that crackles through first — it's older, warmer, a little crackly with static. "Sharp, crew — Sekuru Josiah's telling this one, not me, so listen carefully." Tapiwa's grandfather's voice carries on, unhurried. "Long before any European ever set foot here, my people built a city of stone — walls stacked so precisely, without a scrap of mortar, that they've stood for centuries. Great Zimbabwe, they call it now. A whole trading kingdom, right here, before anyone from outside had ever heard of us." Tapiwa cuts back in, grinning: "He tells this one every time, and I still get a look on my face like it surprises me it's actually true."

Wonder question: how could a whole city of stone walls stay standing for centuries without any mortar holding the stones together?`,
  mainContent: [
    {
      title: `What Is Great Zimbabwe? (10 minutes)`,
      points: [
        `Teacher Input: Great Zimbabwe was the capital of a powerful trading kingdom that flourished roughly between the 11th and 15th centuries, in what is now Zimbabwe — the country itself later took its name from this site ("dzimba dza mabwe" means "houses of stone" in Shona).`,
        `Explain that at its height, Great Zimbabwe may have been home to thousands of people, and was the centre of a trade network reaching as far as the East African coast, the Middle East, India and China — evidenced by imported glass beads, Chinese porcelain and Persian pottery found at the site.`,
        `Key Question: "What does trading with places as far away as China and Persia tell us about how connected this kingdom actually was?"`,
      ],
    },
    {
      title: `Stone Without Mortar (15 minutes)`,
      points: [
        `Teacher Input: Show images of Great Zimbabwe's dry-stone walls, some over five metres high, built by carefully shaping and stacking granite blocks with no mortar or cement holding them together — a construction method requiring immense skill and planning.`,
        `Activity: In pairs, students examine close-up images of the walls and discuss what they notice about how the stones fit together, then attempt to stack small blocks, books or blocks of soap without any adhesive to feel, briefly, how much precision dry-stone building demands.`,
        `Key Question: "If one stone is cut or placed badly, what happens to the whole wall? What does that tell you about the builders' skill?"`,
      ],
    },
    {
      title: `Why Isn't This Better Known? (10 minutes)`,
      points: [
        `Teacher Input: For a long time, some colonial-era writers wrongly claimed Great Zimbabwe could not have been built by Africans, despite clear archaeological evidence — a misconception now firmly rejected by historians and archaeologists.`,
        `Discuss as a class: why might a civilisation as impressive as Great Zimbabwe be less globally well-known than other ancient sites of a similar age, and what does that reveal about whose stories tend to get told, and whose get overlooked?`,
        `Key Question: "Whose job is it to make sure a true story like this one gets told properly?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE fact about Great Zimbabwe that shows it was a sophisticated, powerful society, and explain why that fact matters.`,
  faith: {
    ponder: `Sekuru Josiah tells this story with pride, wanting the next generation to know it properly. The Psalms describe exactly that responsibility — telling the next generation the praiseworthy deeds of the past, so a true story is never lost or overlooked.`,
    verse: `We will tell the next generation the praiseworthy deeds of the Lord, his power, and the wonders he has done.`,
    ref: `Psalm 78:4 (NIV)`,
    value: `Mōhio  Know`,
    valueDesc: `Knowing a people's real history — not the flattened or dismissed version — is part of honouring what God has done through every nation and generation.`,
    questions: [
      `Psalm 78 says we should tell the next generation the truth about what came before us. Who has told you a story like that, about your own family or country?`,
      `Sekuru Josiah is proud to pass this story on. What is something from your own history you'd be proud to pass on to someone younger than you?`,
      `Why do you think it matters to God that every people's true story gets told, not just some?`,
    ],
  },
  resources: [
    `Images of Great Zimbabwe's dry-stone walls (wide shots and close-up detail)`,
    `Small blocks, books, or offcuts of soap for the no-mortar stacking demonstration`,
    `Map of Southern Africa showing Great Zimbabwe's location and its trade routes to the East African coast`,
  ],
  videos: [
    { title: `Great Zimbabwe explained`, search: `Great Zimbabwe stone city history explained`, why: `Gives students a clear visual introduction to the site and its scale before the stacking activity.` },
    { title: `How dry-stone walling works`, search: `dry stone wall building technique explained`, why: `Helps students understand the specific skill involved in mortar-free construction.` },
  ],
  studentAgency: {
    art: { title: `Sketch a Dry-Stone Pattern`, body: `Sketch a simple stone wall pattern inspired by Great Zimbabwe's dry-stone construction, without using any mortar or glue in your drawing's "joins."\n\n**Instructions:**\n1. Draw a grid of irregular stone shapes, interlocking like a real dry-stone wall.\n2. Shade each stone slightly differently to show individual blocks.\n3. Add one label pointing to where the wall would be weakest if a stone were placed badly.\n\n**Reflection Prompt:** What made interlocking the stones on paper harder than you expected?` },
    readWrite: { title: `A Trader's Account`, body: `Write a short first-person account from a trader arriving at Great Zimbabwe for the first time, describing what they see and trade.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What detail did you include to show how impressive the city was?` },
    technology: { title: `Map the Trade Network`, body: `Using a simple drawing or slide tool, map Great Zimbabwe's trade connections to the East African coast, the Middle East, India and China, with one line per connection.\n\n**Reflection Prompt:** Which trade connection surprised you the most, and why?` },
    watchReview: { title: `Watch and Note: Great Zimbabwe`, body: `Watch a short video explaining Great Zimbabwe and its history.\n\n**Search term:** "Great Zimbabwe stone city history explained"\n\n**Reflection Prompt:** What is one fact you learned that you didn't expect?` },
  },
},

// ============================== TUESDAY — GEOGRAPHY ==============================
{
  day: `Tuesday`, strand: `Geography`, sessionLabel: `Flight Log 7: What the Family Table Needs`,
  topic: `WHAT THE FAMILY TABLE NEEDS — Subsistence Farming and Food Security`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding Place and Environment: understand how people's connection to the land shapes how they meet their own needs, and how this differs across communities.`,
  ],
  keyCompetencies: `Thinking; Managing Self`,
  learningIntentions: [
    `We are learning what subsistence farming is, and how it differs from farming to sell a crop.`,
    `We are learning why crops like maize, sorghum and groundnuts matter to a family's food security.`,
    `I can plan a small subsistence plot and explain the reasoning behind my choices.`,
  ],
  assessment: `Teacher observation of the class planning discussion; review of drawn family plots for evidence of reasoned crop choices.`,
  introduction: `"My mum keeps a small plot behind our house — maize, sorghum, groundnuts. Nothing fancy, nothing for selling, just enough to feed us," Tapiwa says, turning the wooden elephant carving over in his pocket, the way he does when he's thinking something through. "Pipi — my little cousin — thinks food just appears, which, fair enough, she's six. But growing just enough for your own family, that's a whole different job to growing a big field to sell. Help me show you the difference?"

Wonder question: if you were only growing food for your own family — not to sell to anyone — would you choose the same crops as a farmer growing food for a whole town?`,
  mainContent: [
    {
      title: `What Is Subsistence Farming? (10 minutes)`,
      points: [
        `Teacher Input: Subsistence farming means growing crops and raising animals mainly to feed your own family, with little or nothing left over to sell — this is different from commercial farming, which grows large quantities of a crop specifically to sell for income.`,
        `Introduce maize, sorghum and groundnuts as three staple subsistence crops common across rural Zimbabwe and much of Southern Africa, each chosen for being reliable, nutritious and suited to the local climate.`,
        `Key Question: "Why might a family choose to grow three different crops instead of just one?"`,
      ],
    },
    {
      title: `Why It Still Matters (10 minutes)`,
      points: [
        `Teacher Input: Explain that subsistence farming remains central to food security for many rural households across Southern Africa — when a family grows enough to feed itself, it is less dependent on buying food, which matters especially when money or transport is limited.`,
        `Discuss the risks too: a poor rainfall year can threaten a subsistence family's food supply directly, in a way that affects them differently to a family that buys all its food from a shop.`,
        `Key Question: "What could go wrong for a subsistence-farming family in a year with very little rain?"`,
      ],
    },
    {
      title: `Plan a Subsistence Plot (15 minutes)`,
      points: [
        `Activity: As a class, plan a small subsistence plot — students choose three crops they would grow if the goal was simply feeding their own family through the year, and must justify each choice (nutrition, reliability, how well it stores).`,
        `Groups compare their choices and discuss trade-offs: a crop that's nutritious but hard to store, versus one that's easy to grow but less filling.`,
        `Key Question: "Which of your three crops would you protect first in a difficult year, and why?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE crop a subsistence farmer might grow, and explain why it would be a good choice for feeding a family.`,
  faith: {
    ponder: `Tapiwa's mum tends her plot carefully, trusting that steady, patient work will feed her family through the year. The Bible often pictures faithful provision this way — not instant abundance, but daily bread, worked for and trusted for, season after season.`,
    verse: `Give us today our daily bread.`,
    ref: `Matthew 6:11 (NIV)`,
    value: `Pānga  Impact`,
    valueDesc: `Growing enough to feed your own family, faithfully and without waste, is a real and honourable way of bringing God's care for people into daily, practical life.`,
    questions: [
      `Jesus taught his followers to pray for "daily bread," not a huge stockpile all at once. Why might trusting for just what's needed, day by day, matter more than we think?`,
      `Tapiwa's family relies on their own plot for food. Who grows or provides the food your own family relies on?`,
      `What is one way you could show gratitude this week for food that didn't just "appear," the way Pipi thinks it does?`,
    ],
  },
  resources: [
    `Images or real samples of maize, sorghum and groundnuts`,
    `A simple blank plot-planning grid (paper or digital) for the class activity`,
    `Map showing rural Zimbabwe/Southern Africa farming regions`,
  ],
  videos: [
    { title: `What is subsistence farming?`, search: `subsistence farming explained for kids Africa`, why: `Gives students a clear, age-appropriate definition before the plot-planning activity.` },
  ],
  studentAgency: {
    art: { title: `Draw Your Family Plot`, body: `Draw your imagined family plot from above, like a map, labelling what's growing where.\n\n**Instructions:**\n1. Draw a simple rectangular plot outline.\n2. Divide it into three sections and label each with a chosen crop.\n3. Add one small symbol near each crop showing why you chose it (e.g. a raindrop for "grows well with little rain").\n\n**Reflection Prompt:** Which crop took up the most space on your plot, and why did you give it priority?` },
    readWrite: { title: `A Letter About the Harvest`, body: `Write a short letter in role as a child describing this year's harvest from your family's subsistence plot to a relative who lives far away.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** Did you describe a good harvest or a difficult one, and why did you choose that?` },
    technology: { title: `Build a Crop Comparison Chart`, body: `Use a simple document, slide or spreadsheet to compare maize, sorghum and groundnuts across nutrition, drought-resistance and storage life.\n\n**Reflection Prompt:** Based on your chart, which crop would you rely on most in a dry year?` },
    watchReview: { title: `Watch and Note: Subsistence Farming`, body: `Watch a short video explaining subsistence farming in Southern Africa.\n\n**Search term:** "subsistence farming explained for kids Africa"\n\n**Reflection Prompt:** What is one thing you learned that changed how you think about where your own food comes from?` },
  },
},

// ============================== WEDNESDAY — SCIENCE ==============================
{
  day: `Wednesday`, strand: `Science`, sessionLabel: `Flight Log 8: Built for the Dry`,
  topic: `BUILT FOR THE DRY — How Savanna Plants Survive Drought`,
  curriculumArea: `Science`,
  aos: [
    `Living World, Ecology: understand how living things are suited to their particular habitat, and how survival adaptations solve specific environmental problems.`,
  ],
  keyCompetencies: `Thinking; Using Language, Symbols and Text`,
  learningIntentions: [
    `We are learning that savanna plants have specific physical adaptations that help them survive months without rain.`,
    `We are learning how thorns, small leaves and deep roots each solve a different survival problem.`,
    `I can explain the specific problem a chosen plant adaptation solves, using evidence.`,
  ],
  assessment: `Teacher observation of the group adaptation-matching task and discussion; review of designed "super-adapted" plants for correct reasoning behind each feature.`,
  introduction: `"Thorns, tiny leaves, roots that go deeper than the plant is tall — the plants out here aren't lucky, they're built," Tapiwa says, crouched beside a thorny scrub bush at the edge of the logbook page. "Every single feature is solving a problem: how do you survive months without rain? I want to actually understand WHY, not just know that they do."

Wonder question: if a plant can't move to find water, what has to change about the plant itself to survive months without rain?`,
  mainContent: [
    {
      title: `Three Problems, Three Solutions (10 minutes)`,
      points: [
        `Teacher Input: Introduce three common savanna plant adaptations — thorns (which deter grazing animals from eating scarce, precious leaves and stored water), small leaves (which reduce surface area and therefore water loss through evaporation), and deep root systems (which reach underground water far below the dry surface).`,
        `Explain that each adaptation exists because it solves a very specific survival problem, shaped by generations of plants that survived and reproduced because they had that feature.`,
        `Key Question: "Which of these three problems do you think is the biggest threat to a savanna plant's survival?"`,
      ],
    },
    {
      title: `Matching Adaptations to Problems (15 minutes)`,
      points: [
        `Activity: In teams, students are given cards describing savanna plant features (thorns, small/waxy leaves, deep roots, swollen water-storing stems) and must match each to the specific survival problem it solves, explaining their reasoning.`,
        `Groups present one matched pair to the class, justifying the connection with evidence from the discussion.`,
        `Key Question: "Could a plant survive the dry season with only ONE of these adaptations, or does it usually need more than one working together?"`,
      ],
    },
    {
      title: `Design a Super-Adapted Plant (10 minutes)`,
      points: [
        `Activity: In pairs, students sketch an imaginary "super-adapted" plant for extreme drought, labelling at least three features and the specific problem each one solves.`,
        `Share back: a few pairs explain their plant's features and the reasoning behind each choice.`,
        `Key Question: "Which feature of your plant would matter most in the very driest years?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE savanna plant adaptation and explain the specific survival problem it solves.`,
  faith: {
    ponder: `Every thorn, waxy leaf and deep root in the savanna is a precise answer to a real problem — nothing wasted, nothing accidental. The Psalms describe God's wisdom filling creation exactly this way: intricate, purposeful design in even the toughest, driest corners of the earth.`,
    verse: `How many are your works, Lord! In wisdom you made them all; the earth is full of your creatures.`,
    ref: `Psalm 104:24 (NIV)`,
    value: `Aroha  Love (World)`,
    valueDesc: `Looking closely at how carefully even a thorn bush is designed to survive is one way of loving and honouring the world God made, instead of overlooking it.`,
    questions: [
      `Psalm 104 says God made everything "in wisdom." How does learning WHY a plant has thorns or deep roots change the way you see a "boring" desert plant?`,
      `Tapiwa says these plants aren't "lucky," they're "built." Is there a challenge in your own life where being "built" for it, rather than lucky, matters more?`,
      `What is one part of creation near you that you've never really looked closely at, the way today's lesson asked you to look at savanna plants?`,
    ],
  },
  resources: [
    `Images or real specimens of thorny/small-leaved savanna plants, if available`,
    `Adaptation-matching card sets (feature cards and problem cards) for the group activity`,
    `Diagram showing a cross-section of a deep-rooted savanna plant`,
  ],
  videos: [
    { title: `How savanna plants survive drought`, search: `savanna plant adaptations drought explained`, why: `Gives students a clear visual grounding in the specific adaptations before the matching activity.` },
  ],
  studentAgency: {
    art: { title: `Sketch Your Super-Adapted Plant`, body: `Design an imaginary "super-adapted" plant for extreme drought, labelling each feature and the problem it solves.\n\n**Instructions:**\n1. Sketch your plant with at least three visible adaptations.\n2. Label each feature clearly.\n3. Next to each label, write one sentence naming the specific problem it solves.\n\n**Reflection Prompt:** Which of your three features do you think a real botanist would find least realistic, and why?` },
    readWrite: { title: `A Plant's-Eye View`, body: `Write a short first-person account from the point of view of a savanna plant surviving a long dry season, describing how its features help it cope.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** Which adaptation did you focus on the most in your writing, and why?` },
    technology: { title: `Build an Adaptation Diagram`, body: `Using a simple drawing or slide tool, create a labelled diagram of a savanna plant showing at least three adaptations and the problem each solves.\n\n**Reflection Prompt:** What was hardest to show clearly in your diagram — the feature itself, or the problem it solves?` },
    watchReview: { title: `Watch and Note: Savanna Plant Adaptations`, body: `Watch a short video about how savanna plants survive drought.\n\n**Search term:** "savanna plant adaptations drought explained"\n\n**Reflection Prompt:** What is one adaptation you saw that you hadn't thought of before?` },
  },
},

// ============================== FRIDAY — ART ==============================
{
  day: `Friday`, strand: `Art`, sessionLabel: `Flight Log 10: Carving a Story in Stone`,
  topic: `CARVING A STORY IN STONE — Shona Stone Sculpture as Storytelling`,
  curriculumArea: `The Arts`,
  aos: [
    `Visual Arts, Developing Practical Knowledge: explore and use materials, techniques and technologies with growing confidence to develop a work with intention.`,
  ],
  keyCompetencies: `Thinking; Using Language, Symbols and Text`,
  learningIntentions: [
    `We are learning that Shona stone sculpture is an internationally renowned art tradition from Zimbabwe, not just decoration but genuine storytelling.`,
    `We are learning that carvers plan a figure from multiple angles before removing any material, because material removed can't be put back.`,
    `I can shape a simple figure that represents an idea or feeling, and explain the intention behind it.`,
  ],
  assessment: `Teacher observation of the planning sketches and carving process; review of finished carvings and titles for evidence of clear intention behind the chosen form.`,
  introduction: `"Shona stone sculpture is famous the world over — proper famous, museums-and-galleries famous," Tapiwa says, holding up a small worn photo tucked in the back of the logbook. "It's not just decoration, it's storytelling, the same way San rock art is, just carved instead of painted. A block of stone becomes a bird, an ancestor, a feeling. I want you to try shaping something today, even if all we've got is soap and not stone."

Wonder question: if you could only remove material, never add it back, how carefully would you need to plan before you even started cutting?`,
  mainContent: [
    {
      title: `What Is Shona Stone Sculpture? (10 minutes)`,
      points: [
        `Teacher Input: Shona stone sculpture is a modern Zimbabwean art tradition, internationally celebrated since the mid-20th century, in which artists carve figures — often abstract or symbolic representations of ancestors, animals, family bonds, or emotions — from stones such as serpentine.`,
        `Explain that, like San rock art, Shona sculpture is a form of storytelling: the shape itself, not written words, carries the meaning, and viewers are often invited to interpret feeling and idea from form.`,
        `Key Question: "How is telling a story through a carved SHAPE different from telling a story through words?"`,
      ],
    },
    {
      title: `Planning Before Carving (10 minutes)`,
      points: [
        `Teacher Input: Explain that skilled carvers plan every side of a figure before removing any material, because — unlike drawing or painting — material that's carved away cannot be put back. This makes planning from multiple angles essential.`,
        `Model briefly: sketch a simple figure from front, side and top view before demonstrating a first careful cut into soap or clay.`,
        `Key Question: "What could go wrong if a carver started cutting without planning all sides first?"`,
      ],
    },
    {
      title: `Soap or Clay Carving (15 minutes)`,
      points: [
        `Activity: Using soft carving soap (or air-dry clay as a substitute), students carve a simple figure inspired by Shona stone sculpture traditions — an animal, ancestor figure, or abstract form representing an idea or feeling — using safe carving tools under supervision.`,
        `Before carving, students sketch their planned figure from three different angles, mirroring how real carvers plan every side before removing material they can't put back.`,
        `Key Question: "Did your finished carving end up matching your plan, or did it change along the way? Why?"`,
      ],
    },
  ],
  exitTicket: `Give your finished carving a one-word title that captures the feeling or idea behind it — then write one sentence explaining why you chose that word.`,
  faith: {
    ponder: `God filled Bezalel with skill and creativity to craft beautiful, meaningful things for His people — a reminder that artistic skill itself is a gift from God, given so we can shape material into something that carries real meaning forward.`,
    verse: `I have filled him with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills.`,
    ref: `Exodus 35:31 (NIV)`,
    value: `Aroha  Love`,
    valueDesc: `Carving something with care and intention, the way Shona sculptors do, is a way of loving both the material and the idea being shaped — taking the time to plan, rather than rushing.`,
    questions: [
      `Exodus says God filled a craftsman with skill for a purpose. Carving means planning carefully because mistakes can't be undone — where else in life do you need to "plan before you cut"?`,
      `Shona sculptors often carve feelings, not just objects. What feeling would YOU want to carve into stone if you could?`,
      `What is one thing you're proud of that took careful planning, the way today's carving did?`,
    ],
  },
  resources: [
    `Soft carving soap or air-dry clay, one block per student`,
    `Safe carving tools (blunt-tipped, teacher-supervised) appropriate for the material used`,
    `A small set of respectful reference images of Shona stone sculptures`,
  ],
  videos: [
    { title: `Shona stone sculpture of Zimbabwe`, search: `Shona stone sculpture Zimbabwe art explained`, why: `Gives students a respectful, visual grounding in the real tradition before they attempt their own carving.` },
  ],
  studentAgency: {
    art: { title: `Extend Your Carving Plan`, body: `Choose your carving's three-angle plan and add one more angle (from above), showing how the figure would look from directly overhead.\n\n**Reflection Prompt:** What did adding a fourth angle reveal that the first three didn't show?` },
    readWrite: { title: `Write the Story Behind the Carving`, body: `Write out, in full sentences, the story or feeling your finished carving was meant to represent.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** Do you think someone looking at your carving without this explanation would guess the same story? Why or why not?` },
    technology: { title: `Design a Digital Sculpture Concept`, body: `Using a simple drawing tool, sketch a digital concept for a Shona-inspired sculpture from three angles, in the spirit of planning before carving.\n\n**Reflection Prompt:** What was harder — planning the front view, or the side view? Why?` },
    watchReview: { title: `Watch and Note: Shona Stone Sculpture`, body: `Watch a short video about Shona stone sculpture.\n\n**Search term:** "Shona stone sculpture Zimbabwe art explained"\n\n**Reflection Prompt:** What is one thing that surprised you about how meaningful, or how famous, this art form is?` },
  },
},

]

// Register these lesson plans into the shared app registry, additively (won't overwrite
// Thursday's entry, already registered by data/term3-lessonplans-thursdays.js).
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'] = window.ALL_LESSON_PLANS['skybound-baobab-route'] || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'][2] = window.ALL_LESSON_PLANS['skybound-baobab-route'][2] || {}
SKYBOUND_WEEK2_LESSONS.forEach(lesson => {
  window.ALL_LESSON_PLANS['skybound-baobab-route'][2][lesson.day] = lesson
})
