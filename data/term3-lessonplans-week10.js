// Rich lesson-plan content for SKYBOUND: The Baobab Route (Term 3) — Week 10 (Boss Battle 2:
// "The Legacy Trial")
// Monday (History) / Tuesday (Geography) / Wednesday (Science) / Friday (Art)
// Thursday (Technology — "The Route-Keepers' Invention") for this week already lives in
// data/term3-lessonplans-thursdays.js — this file follows the exact same structure (see that
// file's header notes), matching the station-consolidation format used in
// data/term3-lessonplans-week5.js. Registers additively into window.ALL_LESSON_PLANS so it
// can sit alongside the Thursday file without overwriting it.
//
// Story continuity: this is "The Legacy Trial" — Boss Battle 2, the emotional payoff of the
// whole term per the planning document, consolidating Weeks 6–9 (colonisation through
// conservation wins) and formally naming the class "Route-Keepers." Matches the bossBattles[10]
// intro/outro already written in data/term3.js, and reuses the exact Bible references and
// values from the planning document's Faith Connections table for Week 10 (Monday: Deuteronomy
// 6:6–7 / Mōhio; Tuesday: Matthew 25:21 / Pānga; Wednesday: Psalm 24:1 / Pānga; Friday: the
// full worked example already given in the planning document — 1 Corinthians 10:31 / Aroha,
// Soli Deo Gloria).

const SKYBOUND_WEEK10_LESSONS = [

// ============================== MONDAY — HISTORY STATION ==============================
{
  day: `Monday`, strand: `History`, sessionLabel: `The Legacy Trial — Station 1: The Whole Route, In Order`,
  topic: `THE WHOLE ROUTE, IN ORDER — Timeline Synthesis from the San to Today`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding the Past: demonstrate a coherent understanding of a sequence of historical events and their relationships to each other, drawn from a full term's learning.`,
  ],
  keyCompetencies: `Thinking; Relating to Others`,
  learningIntentions: [
    `We are demonstrating our understanding of the whole term's history, from the San to today, in correct sequence.`,
    `We are working as a team to place major historical moments in the correct order on a shared timeline.`,
    `I can explain how at least one earlier historical event influenced a later one.`,
  ],
  assessment: `This IS the assessment for the term's full History strand. Score team performance on the timeline challenge and use results to identify any concepts needing revisiting.`,
  introduction: `The logbook lies open one final time, every leg of the route glowing faintly across its pages — Hwange, the Zambezi, the reserve, the border, Gogo Thandiwe's village, all the way home. "Sharp, crew," Tapiwa says, and for once his voice doesn't crack a joke early. "Sekuru Josiah always said a route only really matters if someone else can fly it after you. Today, the logbook wants to see the WHOLE route, laid out properly, in order." Nomvula adds: "That's the pattern of it. Everything connects to everything else. Show us you can see it."

Wonder question: looking back across the entire term, which single historical moment do you think changed the course of everything that came after it the most?`,
  mainContent: [
    {
      title: `Station Setup (5 minutes)`,
      points: [
        `Lay out a long floor timeline (string, tape, or paper strip) with a clear "earliest" to "today" direction, plus a shuffled set of event cards covering the whole term: the San as first peoples, Great Zimbabwe, Mapungubwe, the Ndebele migration (Mfecane), colonisation, apartheid and the struggle for freedom, and independence (Zimbabwe 1980, South Africa 1994).`,
      ],
    },
    {
      title: `Challenge Round (20 minutes)`,
      points: [
        `Teams work together to place all event cards in correct chronological order along the timeline, justifying each placement aloud with a real fact from that week's learning.`,
        `Include at least one question testing WHY one event influenced a later one (e.g. how land and power changing hands during colonisation connects to the later struggle against apartheid).`,
        `Key Question: "Which two events on this timeline are most closely connected, even though they happened years apart?"`,
      ],
    },
    {
      title: `Debrief (5 minutes)`,
      points: [
        `Reveal the correct order. Briefly discuss any placements teams disagreed about, and why.`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE way an earlier event on the timeline directly influenced a later one.`,
  faith: {
    ponder: `Moses told the Israelites to talk about God's story constantly — at home, on the road, lying down, getting up — so that the story would never be lost between generations. Building this timeline together is exactly that kind of remembering: making sure a true story gets carried forward, not forgotten.`,
    verse: `These commandments that I give you today are to be on your hearts... Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up.`,
    ref: `Deuteronomy 6:6–7 (NIV, shortened)`,
    value: `Mōhio  Know`,
    valueDesc: `Piecing together the whole term's history, in order, helps us know that every nation's story — the hard parts and the hopeful parts — is worth remembering carefully and passing on.`,
    questions: [
      `Deuteronomy says to talk about important things constantly, in ordinary moments, not just on special occasions. Why might that matter for remembering history accurately?`,
      `Tapiwa says a route only matters if someone else can fly it after you. What is one part of this term's history YOU could "pass on" to someone else?`,
      `Looking at the whole timeline together, what does it tell you about how God has been present across all of this region's history, not just parts of it?`,
    ],
  },
  resources: [
    `Long floor timeline (string, tape, or paper strip)`,
    `Shuffled event cards covering the whole term's History content`,
    `A visible scoreboard`,
  ],
  videos: [],
  studentAgency: {
    art: { title: `Illustrate the Full Timeline`, body: `Draw a labelled illustrated timeline showing at least six major events from this term's History strand, in correct order.\n\n**Reflection Prompt:** Which event was hardest to place correctly, and why?` },
    readWrite: { title: `My History MVP Moment`, body: `Write a short reflection on the ONE history topic from this whole term you understood best.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How would you explain it to someone who missed this term?` },
    technology: { title: `Build a Digital Timeline`, body: `Using a simple digital tool, build a timeline of the whole term's History content, from the San to today.\n\n**Reflection Prompt:** What connection did building it digitally make clearer than the floor timeline did?` },
    watchReview: { title: `Review the Term's Journey`, body: `Look back at your own work from Week 1 (the San) through to Week 9 (Southern Africa today). What's one thing your understanding now includes that it didn't back then?` },
  },
},

// ============================== TUESDAY — GEOGRAPHY STATION ==============================
{
  day: `Tuesday`, strand: `Geography`, sessionLabel: `The Legacy Trial — Station 2: A Farming Plan for the Future`,
  topic: `A FARMING PLAN FOR THE FUTURE — Pitching Sustainable Farming`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding Place and Environment: apply understanding of farming types and sustainability to design and present a coherent farming plan.`,
  ],
  keyCompetencies: `Thinking; Participating and Contributing; Using Language, Symbols & Text`,
  learningIntentions: [
    `We are applying everything we've learned about subsistence, commercial, and climate-smart farming to design one coherent plan.`,
    `We are working as a team to present a farming plan clearly and persuasively.`,
    `I can justify at least two choices in my farming plan using real content from this term.`,
  ],
  assessment: `This IS a capstone assessment for the term's Geography/farming content. Assess team plans against a simple rubric: coherence, use of real term content, and clarity of presentation.`,
  introduction: `"Yesterday you showed us you remember the story," Tapiwa says. "Today's different. The logbook doesn't just want memory — it wants a real plan. Pitch us a farming plan for the future, using everything you've learned about this land." Nomvula: "Subsistence, commercial, climate-smart — you have all three now. Show us how they fit together."

Wonder question: if you were designing a farm from scratch today, which matters more to plan for first — what the land can already do, or what the climate will demand tomorrow?`,
  mainContent: [
    {
      title: `Station Setup (5 minutes)`,
      points: [
        `Explain the challenge: in teams, students design and pitch a sustainable farming plan for an imagined Southern African community, drawing on subsistence, commercial, and climate-smart farming content from across the term.`,
      ],
    },
    {
      title: `Planning and Pitching (20 minutes)`,
      points: [
        `Teams plan a farm that balances family food security (subsistence, Week 2), income opportunity (commercial farming, Week 3), and resilience to drought and changing climate (Week 4's water challenges, Week 9's climate-smart techniques).`,
        `Each team pitches their plan in 2–3 minutes, explaining what they chose to grow, how they manage water, and how their plan is climate-smart.`,
        `Key Question for the audience after each pitch: "What is the strongest, most realistic part of this plan?"`,
      ],
    },
    {
      title: `Debrief (5 minutes)`,
      points: [
        `Reveal scores based on the rubric. Discuss which pitched plans balanced ALL three goals most convincingly.`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name the ONE choice in your team's farming plan you're most confident is genuinely sustainable.`,
  faith: {
    ponder: `Jesus praises the servant who takes what he's been given and puts it to good, faithful use, growing it rather than burying it out of fear. A well-planned farm for the future is exactly that kind of faithful stewardship — taking what the land offers and using it wisely, for the long term.`,
    verse: `His master replied, "Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things."`,
    ref: `Matthew 25:21 (NIV, excerpt)`,
    value: `Pānga  Impact`,
    valueDesc: `Planning a farm that's genuinely sustainable, not just profitable in the short term, is real faithful stewardship — using what God has given wisely, for the sake of a future we won't fully see ourselves.`,
    questions: [
      `The servant in the parable was praised for being faithful with what he had, not for having the most. How does that change what "success" looks like in your team's farming plan?`,
      `Which part of your farming plan required you to trust something you couldn't fully control, like rainfall?`,
      `What is one resource in YOUR own life you could be more faithful in using well, for the long term rather than just right now?`,
    ],
  },
  resources: [
    `Recap notes/images from Weeks 2, 3, 4 and 9 farming lessons`,
    `Planning template for the farming plan pitch`,
    `A visible scoreboard/rubric`,
  ],
  videos: [],
  studentAgency: {
    art: { title: `Design a Farm Plan Poster`, body: `Design a labelled poster showing your team's farming plan, including crops, water management, and climate-smart features.\n\n**Reflection Prompt:** Which part of your poster would be most convincing to a real farmer?` },
    readWrite: { title: `My Geography MVP Moment`, body: `Write a short reflection on the ONE farming or geography concept from this whole term you understood best.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How did that concept help shape your team's plan today?` },
    technology: { title: `Build a Digital Farm Plan`, body: `Using a simple digital tool, build a diagram or slide presenting your team's farming plan for the future.\n\n**Reflection Prompt:** What did presenting it digitally add that a hand-drawn poster couldn't?` },
    watchReview: { title: `Review Your Own Farming Work`, body: `Look back at your own farming-related work from Weeks 2, 3, 4 and 9. What's one idea from your earlier work that made it into today's plan?` },
  },
},

// ============================== WEDNESDAY — SCIENCE STATION ==============================
{
  day: `Wednesday`, strand: `Science`, sessionLabel: `The Legacy Trial — Station 3: Design a Conservation Plan`,
  topic: `DESIGN A CONSERVATION PLAN — Protecting an Endangered Species of Choice`,
  curriculumArea: `Science`,
  aos: [
    `Living World, Ecology: apply understanding of adaptation, food webs and endangered species to design a coherent conservation plan.`,
  ],
  keyCompetencies: `Thinking; Participating and Contributing; Relating to Others`,
  learningIntentions: [
    `We are applying our understanding of food webs, adaptation and real conservation strategies to design a plan for one endangered species.`,
    `We are working as a team to justify our plan using real science content from this term.`,
    `I can explain how at least two parts of my conservation plan address a real threat to my chosen species.`,
  ],
  assessment: `This IS a capstone assessment for the term's Science/conservation content. Assess team plans against a simple rubric: scientific accuracy, use of real term content, and coherence.`,
  introduction: `Tapiwa turns his wooden elephant carving over once in his pocket, then sets it down deliberately, like he's done every big moment this term. "One trial left before Thursday's Expo and the ceremony," he says. "Today, design a real conservation plan — properly, like you're the ranger in charge. Choose your animal. Protect it properly." Nomvula: "Everything you've learned this whole term — food webs, adaptation, real threats — it all leads here."

Wonder question: if you could only choose ONE strategy to protect an endangered animal — protecting its habitat, stopping poaching, or community education — which would you choose first, and why?`,
  mainContent: [
    {
      title: `Station Setup (5 minutes)`,
      points: [
        `Explain the challenge: in teams, students choose one endangered Southern African species studied this term (e.g. the rhino) or another real species of their choice, and design a conservation plan addressing a real threat it faces.`,
      ],
    },
    {
      title: `Designing the Plan (20 minutes)`,
      points: [
        `Teams identify their chosen species' real threats (habitat loss, poaching, climate change, human-wildlife conflict) and design a plan combining at least two real strategies drawn from this term's learning (anti-poaching technology, food web/habitat protection, beehive-fence-style win-win solutions, community conservancies).`,
        `Each team presents their plan briefly, explaining the threat, their strategies, and why they'd work, using real reasoning from across the term.`,
        `Key Question for the audience after each pitch: "What is the most scientifically sound part of this plan?"`,
      ],
    },
    {
      title: `Debrief (5 minutes)`,
      points: [
        `Reveal scores based on the rubric. Discuss which plans best combined multiple real strategies rather than relying on just one.`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name the real threat your team's chosen species faces, and your plan's main strategy against it.`,
  faith: {
    ponder: `The Psalm declares that the whole earth, and everything in it, belongs to the Lord — not to us to use however we please. Designing a genuine conservation plan is a small act of taking that ownership seriously: caring for what was never fully ours to begin with.`,
    verse: `The earth is the Lord's, and everything in it, the world, and all who live in it.`,
    ref: `Psalm 24:1 (NIV)`,
    value: `Pānga  Impact`,
    valueDesc: `Designing a real conservation plan for a real species is genuine Kingdom impact — small hands taking seriously that the earth, and everything in it, ultimately belongs to God.`,
    questions: [
      `Psalm 24 says the earth and everything in it belongs to God, not to us. How does that change how a conservation plan should be designed?`,
      `Which part of your team's plan required the most careful scientific thinking, and why?`,
      `If the whole earth is God's, what responsibility do you think that gives US toward it, right now, at your age?`,
    ],
  },
  resources: [
    `Recap notes/images from Weeks 1, 3, 4, 6 and 9 (food webs, predators, rhino crisis, elephants, conservation wins)`,
    `Planning template for the conservation plan`,
    `A visible scoreboard/rubric`,
  ],
  videos: [],
  studentAgency: {
    art: { title: `Illustrate Your Conservation Plan`, body: `Draw a labelled diagram showing your team's chosen species, its main threat, and your plan's key strategies.\n\n**Reflection Prompt:** Which strategy in your diagram do you think would be hardest to actually put into practice?` },
    readWrite: { title: `My Science MVP Moment`, body: `Write a short reflection on the ONE science or conservation concept from this whole term you understood best.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How did that concept shape your team's conservation plan today?` },
    technology: { title: `Build a Digital Conservation Plan`, body: `Using a simple digital tool, build a slide or diagram presenting your team's conservation plan.\n\n**Reflection Prompt:** What did presenting it digitally make easier to explain than speaking alone?` },
    watchReview: { title: `Review Your Own Conservation Work`, body: `Look back at your own work from Week 4 (rhino crisis) and Week 9 (conservation wins). What's one idea from your earlier work that made it into today's plan?` },
  },
},

// ============================== FRIDAY — ART: BOSS BATTLE 2 FINALE ==============================
{
  day: `Friday`, strand: `Art`, sessionLabel: `Boss Battle 2 Finale: The Baobab Route Artwork`,
  topic: `THE BAOBAB ROUTE ARTWORK — A Whole-Term Legacy Piece`,
  curriculumArea: `The Arts`,
  aos: [
    `Visual Arts, Communicating and Interpreting: synthesise ideas, techniques and traditions explored across a sustained body of work into one cohesive final piece.`,
  ],
  keyCompetencies: `Thinking; Participating and Contributing; Relating to Others`,
  learningIntentions: [
    `We are drawing on every art form studied this term to create one final "Baobab Route" artwork.`,
    `We are creating this piece as a class legacy, not for personal praise, echoing the term's motto.`,
    `I can explain how my contribution connects to at least one art tradition studied this term.`,
  ],
  assessment: `Teacher observation of the collaborative creation process and final class discussion; review of the finished artwork for genuine synthesis of the term's art traditions, offered as a whole-class legacy piece.`,
  introduction: `The logbook's pages ripple slightly, as if the whole route is holding its breath. "That's the pattern of it, crew — everything we've learned, everywhere we've been, all leading somewhere," Tapiwa says. Nomvula holds up her bracelet, finished at last, bead by bead across the whole term. "Today, we make one final piece together — a legacy, not just a picture. Everything you've learned about art this term, all in one place."

Wonder question: after a whole term of learning, making and discovering, who do you think a final piece like this is really FOR?`,
  mainContent: [
    {
      title: `Recalling the Term's Art (10 minutes)`,
      points: [
        `Teacher Input: briefly recap every art tradition explored this term — San rock art, Shona stone sculpture, Ndebele house painting, beadwork and colour symbolism, township murals, weaving and Shweshwe textiles, music and dance, and mask and carving traditions.`,
        `Key Question: "Which of these traditions do you think will be hardest to represent within just ONE shared artwork?"`,
      ],
    },
    {
      title: `Creating the Baobab Route Artwork (25 minutes)`,
      points: [
        `Activity: as a class, create one large final artwork (a class mural, a collaborative canvas, or joined individual sections) shaped like or centred on a baobab tree, with each student contributing one element inspired by an art tradition studied this term, connecting it back to that tradition.`,
        `Circulate and prompt: "Which tradition does your contribution draw from, and how does it connect to the pieces around it?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence explaining which art tradition your contribution to the Baobab Route Artwork draws from, and why you chose it.`,
  faith: {
    value: `Aroha & the whole-term motto, Soli Deo Gloria`,
    ponder: `After a whole term of learning, making and discovering, this final artwork isn't about being praised for talent — it's about offering the best of what we've learned back to God, the way Nomvula's grandmother says every good pattern points back to its maker.`,
    verse: `So whether you eat or drink or whatever you do, do it all for the glory of God.`,
    ref: `1 Corinthians 10:31 (NIV)`,
    valueDesc: `Bringing together everything learned this term into one final piece is a chance to practise Manaaki — using our gifts — for God's glory alone, not our own.`,
    questions: [
      `Why do you think our school motto is "To God Alone the Glory" and not "to me"?`,
      `Tapiwa and Nomvula now call the class "Route-Keepers." What is God calling YOU to keep and pass on?`,
      `Looking back over the whole term — Aroha, Mōhio, Manaaki, Pānga — which one did you grow in the most, and why?`,
    ],
  },
  resources: [
    `A large shared surface (mural paper, canvas, or joined individual sheets) shaped or themed around a baobab tree`,
    `Paint, markers, beads, fabric scraps and other materials reflecting the term's art traditions`,
    `Quick recap images from each art tradition studied this term, for reference`,
  ],
  videos: [],
  studentAgency: {
    art: { title: `Add a Personal Detail`, body: `Once the shared artwork is complete, add one small personal detail nearby (a name tag, a tiny symbol) marking your specific contribution.\n\n**Reflection Prompt:** What made you choose that detail to represent your part?` },
    readWrite: { title: `The Legacy Piece's Story`, body: `Write out, in full sentences, the story of how the whole class's Baobab Route Artwork came together, and what it represents.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What do you hope someone looking at this artwork next year would understand about your class?` },
    technology: { title: `Document the Artwork`, body: `If equipment allows, photograph the finished class artwork and write a short digital caption explaining its meaning.\n\n**Reflection Prompt:** What was hardest to capture in a photo that was easy to see in person?` },
    watchReview: { title: `Review the Whole Term's Art`, body: `Look back at your own art pieces from across the whole term, from Week 1's San-inspired symbol to today. Which piece are you proudest of, and why?` },
  },
},

]

// Register these lesson plans into the shared app registry, additively (won't overwrite
// Thursday's entry, already registered by data/term3-lessonplans-thursdays.js).
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'] = window.ALL_LESSON_PLANS['skybound-baobab-route'] || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'][10] = window.ALL_LESSON_PLANS['skybound-baobab-route'][10] || {}
SKYBOUND_WEEK10_LESSONS.forEach(lesson => {
  window.ALL_LESSON_PLANS['skybound-baobab-route'][10][lesson.day] = lesson
})
