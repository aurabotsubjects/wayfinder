// Rich lesson-plan content for Term 2, Week 10 — "The Wayfinder's Examination" (Boss Battle 2)
// Each day maps to one station of the final gauntlet, recapping and assessing real
// content from Weeks 6–9. Matches the structure and depth of Week 5's lesson plans,
// closing with the Wayfinder Ceremony and the emotional payoff of Tama's whole arc.

const WEEK10_LESSONS_RAW = [

// ───────────────────────────── MONDAY — HISTORY STATION ─────────────────────────────
{
  day: 'Monday', strand: 'History', sessionLabel: "Wayfinder's Examination — Station 1: Arrival and Legacy",
  topic: "FINAL EXAMINATION STATION 1 — Testing Real History Knowledge from Weeks 6–9",
  curriculumArea: 'Social Sciences',
  aos: [
    'Understanding the Past: demonstrate understanding of historical events, evidence, and the people involved, drawn from a full term of prior learning.',
  ],
  keyCompetencies: 'Thinking; Relating to Others',
  learningIntentions: [
    'We are demonstrating what we have learned about arrival, settlement, and legacy from Weeks 6–9.',
    'We are working as a team under time pressure to recall accurate historical facts.',
    'I can connect real historical evidence to real present-day significance.',
  ],
  assessment: 'This IS the assessment for Weeks 6–9 History content. Score team performance on the quick-fire round and use results to identify any concepts needing revisiting before the end of term.',
  introduction: `"The Council has called us back one final time. Today's station tests everything we've learned since arriving in Aotearoa — the landing itself, the long pause, the scattering across the Pacific, and the living legacy that continues into today."`,
  mainContent: [
    {
      title: 'Station Setup (5 minutes)',
      points: [
        "Explain the format: this is a rapid-fire True/False round, same as Week 5. Read each statement aloud; teams confer briefly (10–15 seconds) then signal their answer.",
        "Award one point per correct answer, with a bonus point for a team that can correctly explain WHY a false statement is false.",
      ],
    },
    {
      title: 'Quick-Fire Question Bank (20 minutes)',
      points: [
        "1. Aotearoa was one of the very first landmasses on Earth settled by humans. (FALSE — it was one of the LAST major landmasses settled, around 1300 CE)",
        "2. Wairau Bar is a real archaeological site providing evidence of early settlement in Aotearoa. (TRUE)",
        "3. Aotearoa had many native land mammals before humans arrived, similar to most other landmasses. (FALSE — it had no native land mammals aside from bats)",
        "4. The rua kūmara was a real storage pit used to protect kūmara through Aotearoa's colder winters. (TRUE)",
        "5. Pounamu (greenstone) became significant in Aotearoa for both practical tools and valued ornaments. (TRUE)",
        "6. Pacific settlement happened all at once, in a single continuous wave of voyaging. (FALSE — there was a real, still-debated 'long pause' of roughly 1,000+ years between the Lapita spread and the later voyages to Hawaii, Rapa Nui, and Aotearoa)",
        "7. Whakapapa is simply a list of names with no other real information attached. (FALSE — it is a structured historical record carrying real information about identity, land, and events)",
        "8. The same double-hull principle behind the waka hourua is still used in some modern sailing vessels today. (TRUE)",
        "9. Aotearoa today has no real, living connection to the Pacific migration story studied this term. (FALSE — Aotearoa is home to large, living Pacific communities with direct, real connection to this story)",
        "10. Real, contemporary Pacific and Māori artists still actively practice traditions like weaving and carving today. (TRUE)",
        "Optional extension: invite teams to write one additional True/False statement of their own from Weeks 6–9 content, to challenge another team.",
      ],
    },
    {
      title: 'Debrief (5 minutes)',
      points: [
        "Reveal team scores. Briefly revisit any question more than one team got wrong, with a short explanation, before moving to tomorrow's station.",
      ],
    },
  ],
  exitTicket: `As a team, write down the ONE fact from Weeks 6–9 you're most confident you'll remember in a year's time — and why it stuck.`,
  resources: [
    'Quick-fire question bank (above) printed or read aloud',
    'A simple way for teams to signal answers (cards, hands, buzzers)',
    'A visible scoreboard',
  ],
  videos: [],
  studentAgency: {
    art: { title: 'Design a Final Wayfinder Medal', body: `Design a medal or badge that could be awarded to a team that performs well across the whole Wayfinder's Examination.\n\n**Instructions:**\n1. Sketch the medal design.\n2. Include a symbol representing the whole term's journey, not just one week.\n\n**Reflection Prompt:** Why did you choose that particular symbol to represent the entire term?` },
    readWrite: { title: 'My Term History MVP Moment', body: `Write a short reflection on the ONE piece of history content from across the WHOLE term you understood best, and why.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** Looking back over ten weeks, how did your understanding change from Week 1 to now?` },
    technology: { title: 'Build a Final Digital Scoreboard', body: `Create a simple digital scoreboard to track team scores across all of this week's stations, building on Week 5's format.\n\n**Reflection Prompt:** What would make a scoreboard feel like a fitting close to a whole term's effort?` },
    watchReview: { title: 'Review Your Whole Term\'s Quest Log', body: `Look back through your own Quest Log entries from across the entire term and choose the one you're proudest of.\n\n**Reflection Prompt:** What does that entry show about how much you've grown this term?` },
  }
},

// ───────────────────────────── TUESDAY — GEOGRAPHY STATION ─────────────────────────────
{
  day: 'Tuesday', strand: 'Geography', sessionLabel: "Wayfinder's Examination — Station 2: Distance and Climate",
  topic: "FINAL EXAMINATION STATION 2 — Testing Real Geography Knowledge from Weeks 6–9",
  curriculumArea: 'Social Sciences (Geography)',
  aos: [
    'Understanding Place and Environment: demonstrate understanding of geographic features, scale, climate, and environmental change drawn from a full term of prior learning.',
  ],
  keyCompetencies: 'Thinking; Using Language, Symbols & Text',
  learningIntentions: [
    'We are demonstrating our memory of real Pacific geography from Weeks 6–9.',
    'We are working under pressure, using memory and reasoning rather than guesswork.',
    'I can connect real geographic concepts (latitude, distance, ocean health) into one coherent understanding.',
  ],
  assessment: 'This IS the assessment for Weeks 6–9 Geography content. Use results to identify which geographic concepts (latitude, distance, ocean conservation) may need revisiting.',
  introduction: `"Yesterday tested your memory of history. Today, the Council tests your understanding of place itself — distance, climate, and the real state of the ocean that carried this whole story."`,
  mainContent: [
    {
      title: 'Station Setup (5 minutes)',
      points: [
        "Lay out the large Pacific floor/wall map used throughout the term. Prepare a set of challenge cards covering: real distances (gateway voyage, Tahiti–Hawaii, Tahiti–Rapa Nui, Tahiti–Aotearoa), real latitude figures for each island group, and real ocean conservation facts from Week 9.",
      ],
    },
    {
      title: 'Challenge Round (20 minutes)',
      points: [
        "Round 1: call out two locations at a time (e.g. \"Samoa/Tonga to Tahiti\" or \"Tahiti to Rapa Nui\") and have teams estimate and rank the real distance compared to the others, without looking at notes.",
        "Round 2: call out an island group and have teams correctly identify its real climate type (tropical, subtropical, temperate) based on latitude.",
        "Round 3: ask teams to recall one real example of genuine Pacific ocean conservation from Week 9, and explain why it matters.",
        "Key Question for discussion: \"Which was harder to remember accurately — a number, like distance or latitude, or a real-world example, like a conservation project? Why?\"",
      ],
    },
    {
      title: 'Debrief (5 minutes)',
      points: [
        "Reveal scores. Briefly re-show correct answers on the map for anything answered incorrectly.",
      ],
    },
  ],
  exitTicket: `Write one sentence: which real Pacific geography fact from this term do you feel most confident about, and why?`,
  resources: [
    'Large Pacific floor/wall map',
    'Challenge cards: distances, latitude, conservation facts',
    'A visible scoreboard',
  ],
  videos: [],
  studentAgency: {
    art: { title: 'Draw the Whole Voyage Route from Memory', body: `Without looking at any reference, draw your best memory of the full voyage route studied this term, from the Lapita homeland to Aotearoa and beyond.\n\n**Reflection Prompt:** Compare your drawing to a real map afterward — what did you remember well, and what surprised you?` },
    readWrite: { title: 'My Term Geography MVP Moment', body: `Write a short reflection on the ONE piece of geography content from across the whole term you understood best.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How did you come to understand it so clearly?` },
    technology: { title: 'Digital Term Map Challenge', body: `Use a simple digital map tool to label as many real locations, distances, and climate zones from across the term as you can recall, unaided.\n\n**Reflection Prompt:** How many could you label correctly without checking back?` },
    watchReview: { title: 'Review Your Term\'s Map Work', body: `Look back over your star compass, distance, and latitude work from across the whole term. What's the one geography skill you feel most confident in now?` },
  }
},

// ───────────────────────────── WEDNESDAY — SCIENCE STATION ─────────────────────────────
{
  day: 'Wednesday', strand: 'Science', sessionLabel: "Wayfinder's Examination — Station 3: The Real World, Honestly",
  topic: "FINAL EXAMINATION STATION 3 — Testing Real Science Knowledge from Weeks 6–9",
  curriculumArea: 'Science',
  aos: [
    'Demonstrate understanding of seasonal change, extreme weather, and environmental science drawn from a full term of prior learning.',
  ],
  keyCompetencies: 'Thinking; Participating & Contributing',
  learningIntentions: [
    'We are demonstrating our understanding of real seasonal, weather, and environmental science from Weeks 6–9.',
    'We are using real content to reason through honest, sometimes difficult scenarios.',
    'I can apply scientific understanding to real present-day issues with care and accuracy.',
  ],
  assessment: 'This IS the assessment for Weeks 6–9 Science content. Use results to identify which scientific concepts (seasonal survival, cyclones, sea level rise) may need revisiting.',
  introduction: `"Today's station asks you to bring together everything we've learned about real science this term — from surviving Aotearoa's first winter, to understanding the real forces shaping the ocean's future."`,
  mainContent: [
    {
      title: 'Station Setup (5 minutes)',
      points: [
        "Prepare 4–5 scenario cards covering: surviving Aotearoa's seasons (Week 6), how cyclones form (Week 8), and the real, gentle science of sea level rise (Week 9).",
      ],
    },
    {
      title: 'Challenge Round (20 minutes)',
      points: [
        "Present each scenario to teams in turn. Teams must respond using real content from this term — for example: \"Explain, using real science, why early Aotearoa settlers needed the rua kūmara,\" or \"Explain, using real science, why sea levels are rising.\"",
        "Award points for both accuracy AND for genuinely thoughtful, well-reasoned answers, especially on the more sensitive topics (sea level rise, cyclones).",
        "Key Question for discussion: \"Which real science concept from this term do you think matters most for understanding the world you actually live in today?\"",
      ],
    },
    {
      title: 'Debrief (5 minutes)',
      points: [
        "Reveal scores. Use this moment to reinforce that understanding difficult real-world science, calmly and accurately, is itself a genuine achievement.",
      ],
    },
  ],
  exitTicket: `Write one sentence: what real science concept from this term do you think will stay with you the longest, and why?`,
  resources: [
    'Scenario cards covering seasons, cyclones, and sea level rise',
    'A visible scoreboard',
  ],
  videos: [],
  studentAgency: {
    art: { title: 'Illustrate "Understanding, Not Fear"', body: `Draw an image representing how real scientific understanding (rather than fear) helps people face a real environmental challenge.\n\n**Reflection Prompt:** What did you choose to show as the source of hope in your illustration?` },
    readWrite: { title: 'My Term Science MVP Moment', body: `Write a short reflection on the ONE science concept from across the whole term you understood best.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How would you explain it clearly to someone who missed this whole term?` },
    technology: { title: 'Build a Term Science Concept Map', body: `Create a simple digital concept map connecting the science topics studied this term (weather, seasons, cyclones, sea level rise) and how they relate to each other.\n\n**Reflection Prompt:** What connection between topics surprised you most?` },
    watchReview: { title: 'Review Your Voyage Forecasts and Science Notes', body: `Look back at your science notes and forecasts from across the term. Has your confidence in explaining real weather and environmental science grown? How can you tell?` },
  }
},

// ───────────────────────────── THURSDAY — TECHNOLOGY STATION ─────────────────────────────
{
  day: 'Thursday', strand: 'Technology', sessionLabel: "Wayfinder's Examination — Station 4: Then, Now, and What's Next",
  topic: "FINAL EXAMINATION STATION 4 — Testing Real Technology Knowledge and the Future Waka Pitch",
  curriculumArea: 'Technology',
  aos: [
    'Demonstrate understanding of design, materials, and technological development drawn from a full term of prior learning and a culminating design task.',
  ],
  keyCompetencies: 'Thinking; Managing Self; Participating & Contributing',
  learningIntentions: [
    'We are demonstrating our real engineering and technology knowledge from across the whole term.',
    'We are presenting our "waka of the future" designs as the culminating task of the term.',
    'I can explain why a design choice draws meaningfully on both tradition and innovation.',
  ],
  assessment: "This IS the assessment for Weeks 6–9 Technology content, alongside the term's culminating design task from Week 9. Use the pitch presentations as evidence of synthesis across the whole term's Technology learning.",
  introduction: `"This is the final technology test, and it brings together the whole term: from the waka hourua, to GPS, to the 'waka of the future' you designed last week. Today, you pitch it properly to the Council."`,
  mainContent: [
    {
      title: 'Station Setup (5 minutes)',
      points: [
        "Gather the 'waka of the future' designs created in Week 9. If not already presented in full, allow a few minutes for teams to finalise their pitch.",
      ],
    },
    {
      title: 'Then, Now, and What\'s Next Quick Round (10 minutes)',
      points: [
        "Quick-fire questions connecting Technology content across the whole term: \"What real engineering principle connects the waka hourua to modern catamarans?\" \"What is one real strength and one real limitation of GPS?\" \"What is one real example of sustainable ocean technology today?\"",
      ],
    },
    {
      title: 'Future Waka Pitch (10 minutes)',
      points: [
        "Activity: each team formally pitches their 'waka of the future' design to the Council (the class/teacher), explaining the traditional feature kept, the modern feature added, and the sustainable choice made.",
        "Award points for both technical accuracy and the quality of the pitch's reasoning.",
      ],
    },
  ],
  exitTicket: `Write one sentence: what is the single most important lesson about technology and design you're taking away from this whole term?`,
  resources: [
    "Teams' 'waka of the future' designs from Week 9",
    'A visible scoreboard',
  ],
  videos: [],
  studentAgency: {
    art: { title: 'Design a Final Pitch Poster', body: `Create a polished, presentation-ready poster of your "waka of the future" design for today's pitch.\n\n**Reflection Prompt:** What did you refine or improve since first designing it last week?` },
    readWrite: { title: 'My Term Technology MVP Moment', body: `Write a short reflection on the ONE piece of technology content from across the whole term you understood best.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How did building and testing real models help you understand this better than just reading about it?` },
    technology: { title: 'Digital Term Technology Timeline', body: `Build a simple digital timeline showing the technology studied across the whole term, from the waka hourua to the waka of the future.\n\n**Reflection Prompt:** What does this timeline show about how technology builds on what came before it?` },
    watchReview: { title: 'Review Your Whole Build Journey', body: `Look back at every design, sketch, and model you've created this term. What's the single biggest improvement you can see in your own thinking?` },
  }
},

// ───────────────────────────── FRIDAY — STAR NAVIGATION + WAYFINDER CEREMONY ─────────────────────────────
{
  day: 'Friday', strand: 'Bonus Station', sessionLabel: "Wayfinder's Examination — Finale: The Wayfinder Ceremony",
  topic: "TERM FINALE — Final Star Navigation Challenge and the Wayfinder Ceremony",
  curriculumArea: 'Social Sciences / The Arts',
  aos: [
    'Demonstrate understanding and contribute meaningfully to a shared class outcome, drawn from a full term of prior learning, and reflect on growth across an extended unit of work.',
  ],
  keyCompetencies: 'Thinking; Participating & Contributing; Relating to Others',
  learningIntentions: [
    'We are demonstrating our ability to use real navigation knowledge built across the whole term.',
    'We are formally reflecting on a full term of learning, growth, and contribution.',
    'I can recognise and celebrate genuine growth in my own understanding across an extended unit of work.',
  ],
  assessment: "Teacher observation of the final star navigation challenge. Use the Wayfinder Ceremony as a genuinely celebratory close to the whole term — not a new graded task, but a meaningful culmination of ten weeks of learning.",
  introduction: `"This is it, crew. The final challenge, and then — if the Council agrees — a celebration ten weeks in the making."`,
  mainContent: [
    {
      title: 'Final Star Navigation Challenge (10 minutes)',
      points: [
        "Using everything learned across the term (star compass from Week 4, latitude from Week 7), teams must correctly 'steer' a token across the floor map from the voyage's starting point all the way to Aotearoa, using real star reference points and reasoning rather than guessing.",
        "Award bonus points for teams who can also correctly explain WHY their chosen route makes sense, using real content from across the term.",
      ],
    },
    {
      title: 'Tallying the Final Examination (10 minutes)',
      points: [
        "Add up all points from Monday through Friday's final challenge. Announce results, framing this as a genuine, shared achievement — every team has demonstrated a full term's worth of real learning, regardless of final score.",
      ],
    },
    {
      title: 'The Wayfinder Ceremony (15 minutes)',
      points: [
        "Narrate the compass prop coming fully, calmly to life one final time — steady now, not restless.",
        "Read Tama's closing words aloud to the class (from the Boss Battle page): his thanks, and the moment he formally calls the class \"Wayfinders\" for the first time.",
        "Present each student or team with a simple certificate, badge, or token marking their completion of the term, in role as the Council's formal recognition.",
        "Lay out every group's completed quilt side by side one final time as a class, looking back over the whole ten-week journey together.",
      ],
    },
  ],
  exitTicket: `Write one sentence: looking back over the WHOLE term, what is the one thing you're proudest of having learned or done?`,
  resources: [
    'Star compass wheels and the floor/wall Pacific map',
    "The class's compass/journal prop for the ceremony",
    'Simple certificates or badges for each student/team',
    'Each group\'s completed voyage quilt',
    'A running scoreboard from the week',
  ],
  videos: [],
  studentAgency: {
    art: { title: 'Design Your Own Wayfinder Certificate', body: `Design a personal certificate marking your completion of "The Wayfinder's Journal," including one symbol representing your favourite part of the term.\n\n**Reflection Prompt:** What symbol did you choose, and why does it represent your term best?` },
    readWrite: { title: 'A Letter to Next Year\'s Class', body: `Write a short letter to the students who will do this voyage next year, telling them what to expect and what mattered most to you.\n\n**Word Count Guide:** 120–180 words.\n\n**Reflection Prompt:** What's the one piece of advice you'd most want them to have?` },
    technology: { title: 'Build a Term Highlights Reel', body: `Create one final digital slide or page summarising your proudest moment, design, or piece of learning from the entire term.\n\n**Reflection Prompt:** Why did you choose that particular highlight out of everything from this term?` },
    watchReview: { title: 'Review the Whole Voyage, Start to Finish', body: `Look back over your group's entire completed quilt and your full Quest Log from Week 1 to now.\n\n**Reflection Prompt:** Looking at where you started in Week 1 and where you are now, what's the biggest change you can see in yourself?` },
  }
}

]

// Register these lesson plans into the shared app registry: Term 2, Week 10
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {};
window.ALL_LESSON_PLANS['polynesian-migration'] = window.ALL_LESSON_PLANS['polynesian-migration'] || {};
window.ALL_LESSON_PLANS['polynesian-migration'][10] = {};
WEEK10_LESSONS_RAW.forEach(l => { window.ALL_LESSON_PLANS['polynesian-migration'][10][l.day] = l; });
