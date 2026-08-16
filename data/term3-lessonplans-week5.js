// Rich lesson-plan content for SKYBOUND: The Baobab Route (Term 3) — Week 5 (Boss Battle 1: "The Lost City Trial")
// Monday (History) / Tuesday (Geography) / Wednesday (Science) / Friday (Art)
// Thursday (Technology — "The Ranger's Workshop") for this week already lives in
// data/term3-lessonplans-thursdays.js — this file follows the exact same structure
// (see that file's header notes), matching the station-consolidation format used in
// data/term2-lessonplans-week5.js. Registers additively into window.ALL_LESSON_PLANS
// so it can sit alongside the Thursday file without overwriting it.
//
// Story continuity: this is "The Lost City Trial" — Boss Battle 1, per the planning
// document's emotional arc, a genuine turning point for Tapiwa's confidence, and a
// consolidation of Weeks 1–4 (San/first peoples through the Ndebele migration, farming
// and water, savanna predators and food webs, and the ranger-technology + art threads).
// Matches the bossBattles[5] intro/outro already written in data/term3.js, and reuses
// the exact Bible references and values from the planning document's Faith Connections
// table for Week 5 (Monday: Joshua 4:6–7 / Mōhio; Tuesday: Genesis 8:22 / Pānga;
// Wednesday: Psalm 104:24 / Aroha (World); Friday: Exodus 35:31 / Aroha (Self/Others)).

const SKYBOUND_WEEK5_LESSONS = [

// ============================== MONDAY — HISTORY STATION ==============================
{
  day: `Monday`, strand: `History`, sessionLabel: `The Lost City Trial — Station 1: True Story or Myth?`,
  topic: `TRUE STORY OR MYTH? — Testing Real History Knowledge from Weeks 1–4`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding the Past: demonstrate understanding of historical events, evidence, and the people involved, drawn from prior learning.`,
  ],
  keyCompetencies: `Thinking; Relating to Others`,
  learningIntentions: [
    `We are demonstrating what we have learned about real Southern African history from Weeks 1–4.`,
    `We are working as a team under time pressure to recall accurate historical facts.`,
    `I can tell the difference between a true historical fact and a common misconception.`,
  ],
  assessment: `This IS the assessment for Weeks 1–4 History content. Score team performance on the quick-fire round and use results to identify any concepts needing revisiting before Week 6.`,
  introduction: `The logbook flares open onto every leg of the route flown so far — Hwange, the Zambezi, the reserve under threat — stitched together like a map coming alive. "This is it, crew," Tapiwa says, steadier than the class has heard him all month. "Sekuru Josiah always says a good pilot doesn't just have one tool. Today, the logbook wants proof you've been paying attention." Nomvula's voice crackles in: "That's the pattern of it. Quick wits and accurate memory will serve you far better than guessing."

Wonder question: after four weeks of real history — the San, Great Zimbabwe, Mapungubwe, the Ndebele migration — which single fact do you think you'll still remember a year from now?`,
  mainContent: [
    {
      title: `Station Setup (5 minutes)`,
      points: [
        `Explain the format: this is a rapid-fire True/False round. Read each statement aloud; teams confer briefly (10–15 seconds) then signal their answer (show a card, raise a hand, or use a simple buzzer system).`,
        `Award one point per correct answer. Consider a bonus point for a team that can correctly explain WHY a false statement is false.`,
      ],
    },
    {
      title: `Quick-Fire Question Bank (20 minutes)`,
      points: [
        `1. The San people are believed to be among the first peoples to live in Southern Africa, with knowledge of the land stretching back tens of thousands of years. (TRUE)`,
        `2. San rock art was painted purely for decoration, with no storytelling or spiritual meaning behind it. (FALSE — it is understood as a genuine storytelling and spiritual tradition)`,
        `3. Great Zimbabwe's famous stone walls were built without any mortar holding the stones together. (TRUE)`,
        `4. Great Zimbabwe was a small village with no trade links beyond its own region. (FALSE — it was the centre of a powerful trading civilisation)`,
        `5. Mapungubwe was a trading kingdom whose links reached as far as Arabia, India and China. (TRUE)`,
        `6. Mapungubwe is famous for gold and ivory trade goods, including gold artefacts found by archaeologists. (TRUE)`,
        `7. The Mfecane was a period of major upheaval in the early 1800s caused only by conflict, with drought playing no real part. (FALSE — severe drought was a key driving factor alongside conflict)`,
        `8. The Ndebele Kingdom — Nomvula's own heritage — rose out of the migration and rebuilding that followed the Mfecane. (TRUE)`,
        `9. Subsistence farming (Week 2) means growing crops mainly to sell for profit rather than to feed your own family. (FALSE — that describes commercial farming; subsistence farming is mainly for the family's own food)`,
        `10. Maize, sorghum and groundnuts are all real examples of subsistence crops grown by families in the region. (TRUE)`,
        `Optional extension: invite teams to write one additional True/False statement of their own from Weeks 1–4 content, to challenge another team.`,
      ],
    },
    {
      title: `Debrief (5 minutes)`,
      points: [
        `Reveal team scores. Briefly revisit any question more than one team got wrong, with a short explanation, before moving to tomorrow's station.`,
      ],
    },
  ],
  exitTicket: `As a team, write down the ONE question from today you're most confident you'll remember correctly in a year's time — and why it stuck.`,
  faith: {
    ponder: `Joshua told the Israelites to stack up stones as a memorial, so that when their children asked "what do these stones mean?" the story of what God had done would never be forgotten. Great Zimbabwe's stone walls do something similar — they make sure a story is never lost.`,
    verse: `In the future, when your children ask you, "What do these stones mean?" tell them…`,
    ref: `Joshua 4:6–7 (NIV, shortened)`,
    value: `Mōhio  Know`,
    valueDesc: `Piecing together Great Zimbabwe, Mapungubwe and the Ndebele migration helps us know that every civilisation's story matters to God, even the ones that were never written down.`,
    questions: [
      `Why do you think God cares about people remembering their history, not just living in the present?`,
      `What "stones" — objects, stories, photos — does your own family keep to remember its story?`,
      `Tapiwa says the trial only works if the crew works together. How is that true of God's people too?`,
    ],
  },
  resources: [
    `Quick-fire question bank (above) printed or read aloud`,
    `A simple way for teams to signal answers (cards, hands, buzzers)`,
    `A visible scoreboard`,
  ],
  videos: [],
  studentAgency: {
    art: { title: `Design a Lost City Trial Medal`, body: `Design a medal or badge that could be awarded to a team that performs well in today's History Station.\n\n**Instructions:**\n1. Sketch the medal design.\n2. Include one symbol from this term's story so far (the logbook, the wooden elephant carving, a stone wall pattern, a bead).\n\n**Reflection Prompt:** Why did you choose that particular symbol to represent History knowledge?` },
    readWrite: { title: `My History MVP Moment`, body: `Write a short reflection on the ONE piece of history content from Weeks 1–4 you understood best, and why.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How did you come to understand it so well — what helped it stick?` },
    technology: { title: `Build a Digital Scoreboard`, body: `Create a simple digital scoreboard (spreadsheet or slide) to track team scores across all five Lost City Trial stations this week.\n\n**Reflection Prompt:** What information does a good scoreboard need to show clearly?` },
    watchReview: { title: `Review Your Own Flight Log Entries`, body: `Look back through your own Quest Log entries from Weeks 1–4 and note one thing you wrote that you'd improve on now, with what you know today.\n\n**Reflection Prompt:** What does this tell you about how much you've learned this month?` },
  },
},

// ============================== TUESDAY — GEOGRAPHY STATION ==============================
{
  day: `Tuesday`, strand: `Geography`, sessionLabel: `The Lost City Trial — Station 2: Farming & Water Challenge`,
  topic: `FARMING & WATER CHALLENGE — Testing Real Geography Knowledge from Weeks 1–4`,
  curriculumArea: `Social Sciences (Geography)`,
  aos: [
    `Understanding Place and Environment: demonstrate understanding of climate zones, land use, and human-environment interactions drawn from prior learning.`,
  ],
  keyCompetencies: `Thinking; Using Language, Symbols & Text`,
  learningIntentions: [
    `We are demonstrating our memory of real Southern African geography from Weeks 1–4.`,
    `We are working under pressure, matching real knowledge rather than guesswork.`,
    `I can correctly match a farming type or water challenge to the correct climate zone or cause.`,
  ],
  assessment: `This IS the assessment for Weeks 1–4 Geography content. Use results to identify which geographic concepts (climate zones, subsistence vs. commercial farming, water systems) may need revisiting.`,
  introduction: `"Yesterday, your knowledge of history was tested," Tapiwa says. "Today, the logbook wants to know if you really understand this land itself — where things grow, and what happens when the water doesn't come." Nomvula adds: "A real guide can't always show you. Sometimes you have to know, from memory alone, where things truly stand."

Wonder question: of everything you've learned about farming and water this term, which fact do you think matters most to a family actually living here?`,
  mainContent: [
    {
      title: `Station Setup (5 minutes)`,
      points: [
        `Lay out the large regional floor/wall map used throughout the term, with climate zone areas (savanna, highveld, lowveld) marked but unlabelled.`,
        `Prepare a set of matching cards: farming types (subsistence, commercial), crops (maize, sorghum, groundnuts, tobacco, citrus, sugar), and water features (Zambezi River, Kariba Dam, Lake Kariba).`,
      ],
    },
    {
      title: `Challenge Round (20 minutes)`,
      points: [
        `Teams take turns drawing a card and correctly placing/matching it to the right climate zone or water feature on the map, explaining their reasoning aloud (e.g. "tobacco is a commercial crop, grown for export, so it needs reliable irrigation near a major water source").`,
        `Include at least one question testing why subsistence farming differs from commercial farming, and one testing what the Kariba Dam provides to the region and what happens to it in drought.`,
        `Key Question for discussion: "Which was harder to remember — WHERE something grows, or WHY it grows there?"`,
      ],
    },
    {
      title: `Debrief (5 minutes)`,
      points: [
        `Reveal scores. Briefly re-show correct placements on the map for anything placed incorrectly.`,
      ],
    },
  ],
  exitTicket: `Write one sentence: which real geography fact from this term do you feel most confident about, and why?`,
  faith: {
    ponder: `Genesis promises that as long as the earth endures, seedtime and harvest will not cease — a rhythm God built into creation itself. Yet this month's trial has also shown how fragile that rhythm can feel when the rain doesn't come, and how much real work goes into farming this land well.`,
    verse: `As long as the earth endures, seedtime and harvest, cold and heat, summer and winter, day and night will never cease.`,
    ref: `Genesis 8:22 (NIV)`,
    value: `Pānga  Impact`,
    valueDesc: `Understanding how farming and water genuinely connect a whole region helps us see that caring well for land and water is real Kingdom work, not just a school topic.`,
    questions: [
      `Genesis 8:22 promises seedtime and harvest will not cease — yet this term has shown droughts genuinely happen. How do both of those things fit together?`,
      `Which farming type — subsistence or commercial — do you think requires more trust that the rain will come, and why?`,
      `What is one way you could show care for water this week, knowing how much depends on it further downstream?`,
    ],
  },
  resources: [
    `Large regional floor/wall map (climate zones marked, unlabelled)`,
    `Matching cards: farming types, crops, water features`,
    `A visible scoreboard`,
  ],
  videos: [],
  studentAgency: {
    art: { title: `Draw the Region from Memory`, body: `Without looking at any reference, draw your best memory of Southern Africa's three climate zones and where each farming type belongs.\n\n**Reflection Prompt:** Compare your drawing to a real map afterward — what did you get right, and what surprised you?` },
    readWrite: { title: `My Geography MVP Moment`, body: `Write a short reflection on the ONE piece of geography content from Weeks 1–4 you understood best.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How did you remember it so clearly?` },
    technology: { title: `Digital Map Labelling Challenge`, body: `Use a simple digital map tool or slide to label as many real locations, crops and water features from this term as you can recall, unaided.\n\n**Reflection Prompt:** How many could you label without checking back?` },
    watchReview: { title: `Review the Term's Farming and Water Work`, body: `Look back at your own farming and water-saving work from Weeks 2 and 4. What's one detail you'd add now that you wouldn't have known back then?` },
  },
},

// ============================== WEDNESDAY — SCIENCE STATION ==============================
{
  day: `Wednesday`, strand: `Science`, sessionLabel: `The Lost City Trial — Station 3: Build the Food Web`,
  topic: `BUILD THE FOOD WEB — Testing Real Science Knowledge from Weeks 1–4`,
  curriculumArea: `Science`,
  aos: [
    `Living World, Ecology: demonstrate understanding of adaptation, interdependence and food webs, drawn from prior learning.`,
  ],
  keyCompetencies: `Thinking; Participating & Contributing`,
  learningIntentions: [
    `We are demonstrating our understanding of real savanna ecology from Weeks 1–4.`,
    `We are correctly linking predators, herbivores and plants using evidence from this term.`,
    `I can apply real ecological reasoning under pressure, not just recall isolated facts.`,
  ],
  assessment: `This IS the assessment for Weeks 1–4 Science content. Use results to identify which scientific concepts (plant adaptation, food webs, endangered species) may need revisiting.`,
  introduction: `Tapiwa turns his wooden elephant carving over once in his pocket, then sets it down deliberately. "A real ranger has to understand how everything out there is connected, crew — not just one animal at a time. Today, the logbook wants to see if you understand the whole web, not just a piece of it."

Wonder question: if you removed just ONE part of a food web — one plant, one herbivore, one predator — how far do you think the effects would actually spread?`,
  mainContent: [
    {
      title: `Station Setup (5 minutes)`,
      points: [
        `Lay out connector cards or string and a set of savanna organism cards: baobab tree, grasses/thorn plants, herbivores (e.g. impala, zebra), predators (lion, leopard), and the rhino (endangered species).`,
      ],
    },
    {
      title: `Challenge Round (20 minutes)`,
      points: [
        `Teams correctly link predators, herbivores, and plants into a real food web using connector cards or string, justifying each link with real content from this term (plant adaptation, predator-prey relationships, why rhino grazing shapes grassland).`,
        `Include at least one question testing why thorns and deep roots help savanna plants survive drought, and one testing why losing an endangered species like the rhino can affect a whole ecosystem, not just that species.`,
        `Award points for correct links AND for the quality of the scientific justification, even where teams reasoned slightly differently.`,
      ],
    },
    {
      title: `Debrief (5 minutes)`,
      points: [
        `Reveal scores. Discuss any link where teams disagreed — was there a genuinely defensible case for more than one connection?`,
      ],
    },
  ],
  exitTicket: `Write one sentence: what real science concept from this term would you most want a young ranger to understand before their first patrol?`,
  faith: {
    ponder: `The Psalms describe God's wisdom on display in the sheer number and variety of living things He has made — each one fitted to its place, each one connected to the next. Building today's food web is a small window into just how carefully all of it fits together.`,
    verse: `How many are your works, Lord! In wisdom you made them all; the earth is full of your creatures.`,
    ref: `Psalm 104:24 (NIV)`,
    value: `Aroha  Love (World)`,
    valueDesc: `Seeing how deeply every part of the savanna depends on every other part helps us love God's creation more carefully, not just admire one animal at a time.`,
    questions: [
      `Psalm 104 marvels at the sheer number of living things God made. Which connection in today's food web surprised you the most?`,
      `If removing one part of a food web affects far more than expected, what does that suggest about the ripple effects of our own choices — even small ones?`,
      `Tapiwa is learning to understand the whole web, not just one animal. Is there an area of your own life where you need to see the bigger picture, not just one piece of it?`,
    ],
  },
  resources: [
    `Savanna organism cards (plants, herbivores, predators, rhino)`,
    `Connector cards or string for linking the food web`,
    `A visible scoreboard`,
  ],
  videos: [],
  studentAgency: {
    art: { title: `Illustrate a Complete Food Web`, body: `Draw a labelled savanna food web showing at least five organisms and the real connections between them.\n\n**Reflection Prompt:** Which connection did you find hardest to draw accurately, and why?` },
    readWrite: { title: `My Science MVP Moment`, body: `Write a short reflection on the ONE science concept from Weeks 1–4 you understood best.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How would you explain it to someone who missed this term?` },
    technology: { title: `Build a Digital Food Web`, body: `Create a simple digital diagram showing at least five real Southern African organisms and the connections between them, using this term's content.\n\n**Reflection Prompt:** What did digital arrows make clearer than a hand-drawn version might?` },
    watchReview: { title: `Review Your Own Rhino Reflections`, body: `Look back at your own rhino conservation reflection from Week 4. Has anything you thought then changed after today's food web challenge?` },
  },
},

// ============================== FRIDAY — ART STATION ==============================
{
  day: `Friday`, strand: `Art`, sessionLabel: `The Lost City Trial — Station 5: One Symbol, Three Traditions`,
  topic: `ONE SYMBOL, THREE TRADITIONS — A Consolidation Symbol-Design Challenge`,
  curriculumArea: `The Arts`,
  aos: [
    `Visual Arts, Communicating and Interpreting: understand and use symbolic elements from more than one tradition to communicate a single intentional idea.`,
  ],
  keyCompetencies: `Thinking; Relating to Others; Participating & Contributing`,
  learningIntentions: [
    `We are bringing together San storytelling symbols, Ndebele geometric patterns, and beadwork colour-meaning into one combined design.`,
    `We are working as a team to agree on what our symbol should communicate before designing it.`,
    `I can explain how each part of my finished symbol draws on a real tradition studied this term.`,
  ],
  assessment: `This IS the assessment for Weeks 1–4 Art content. Review finished symbols and team explanations for genuine, respectful use of San, Ndebele and beadwork traditions studied this term.`,
  introduction: `Nomvula holds up her half-finished beadwork bracelet — one bead further along than last week. "My gogo says every good pattern points back to something bigger than itself. Today's the last station before the logbook decides if we've earned the right to cross the border. One symbol, crew — but it has to carry three traditions inside it, properly, not just mixed together." Tapiwa grins, steadier than he's sounded all week: "Sharp, crew. Let's finish this properly."

Wonder question: if you had to combine three real art traditions into ONE symbol, which part of each would you keep, and which would you have to simplify?`,
  mainContent: [
    {
      title: `Recap: Three Real Traditions (10 minutes)`,
      points: [
        `Teacher Input: Briefly recap San rock art as storytelling symbols (Week 1), Ndebele geometric wall painting as a shared visual language (Week 3), and beadwork colour symbolism as an agreed community "code" (Week 4).`,
        `Key Question: "What do all three of these traditions have in common, even though they look completely different?" (Guide toward: each uses shared, understood symbols to communicate real meaning, not just decoration.)`,
      ],
    },
    {
      title: `Agreeing on the Message (10 minutes)`,
      points: [
        `Activity: In teams, agree on ONE message the combined symbol should communicate (e.g. "we protect this land together," "the story continues," "small pieces make something bigger").`,
        `Teams briefly justify why they chose that message over other options.`,
      ],
    },
    {
      title: `Design the Combined Symbol (15 minutes)`,
      points: [
        `Activity: Teams design one symbol that genuinely draws on a storytelling shape or figure inspired by San rock art, a geometric pattern element inspired by Ndebele wall painting, and a colour choice with real meaning from the class's beadwork colour code (Week 4).`,
        `Circulate and prompt: "Which part of your symbol is doing the storytelling, which part is doing the pattern, and which part is doing the colour-meaning?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence explaining what your team's combined symbol communicates, and name the three traditions inside it.`,
  faith: {
    ponder: `Bezalel was the craftsman God specifically filled with skill to create beautiful, meaningful work for the tabernacle — a reminder that combining real skill and real meaning into one finished piece has always mattered to God, not just to art class.`,
    verse: `I have filled him with the Spirit of God, with skill, ability and knowledge in all kinds of crafts.`,
    ref: `Exodus 35:31 (NIV)`,
    value: `Aroha  Love (Self/Others)`,
    valueDesc: `Working as a team to combine three real traditions into one honest, meaningful symbol is a way of loving both the people who created those traditions and the teammates working alongside us.`,
    questions: [
      `Exodus says God filled Bezalel with skill for a purpose bigger than himself. What's one skill God has given YOU that could serve something bigger than just yourself?`,
      `Your team had to agree on one message before designing. Was that easier or harder than designing alone — and why?`,
      `Looking back at Weeks 1–4 together, which of the three traditions in today's symbol did you personally find most meaningful, and why?`,
    ],
  },
  resources: [
    `Reference images/examples of San rock art, Ndebele wall painting, and the class's agreed beadwork colour code (from Week 4)`,
    `Paper, pencils and colouring materials for the combined symbol design`,
    `A visible scoreboard (if scoring this station alongside the others)`,
  ],
  videos: [],
  studentAgency: {
    art: { title: `Extend Into a Team Banner`, body: `Combine every team's finished symbol into one shared class banner or display.\n\n**Reflection Prompt:** Looking at every team's symbol together, what pattern or theme keeps showing up across the whole class?` },
    readWrite: { title: `My Art MVP Moment`, body: `Write a short reflection on the ONE art tradition from Weeks 1–4 you enjoyed learning about most, and why.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** What made that tradition stick with you more than the others?` },
    technology: { title: `Digitise Your Symbol`, body: `Recreate your team's combined symbol using a simple digital drawing tool, keeping all three traditions visible.\n\n**Reflection Prompt:** What was harder to translate digitally — the storytelling shape, the pattern, or the colour meaning?` },
    watchReview: { title: `Review the Whole Trial`, body: `Look back across all five Lost City Trial stations this week. Which station are you proudest of your team's performance in, and why?` },
  },
},

]

// Register these lesson plans into the shared app registry, additively (won't overwrite
// Thursday's entry, already registered by data/term3-lessonplans-thursdays.js).
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'] = window.ALL_LESSON_PLANS['skybound-baobab-route'] || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'][5] = window.ALL_LESSON_PLANS['skybound-baobab-route'][5] || {}
SKYBOUND_WEEK5_LESSONS.forEach(lesson => {
  window.ALL_LESSON_PLANS['skybound-baobab-route'][5][lesson.day] = lesson
})
