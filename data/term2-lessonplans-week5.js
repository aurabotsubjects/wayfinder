// Rich lesson-plan content for Term 2, Week 5 — "The Sea Trial" (Boss Battle 1)
// Each day maps to one station of the gauntlet, recapping and assessing real
// content from Weeks 1–4. Matches the structure and depth of previous weeks.

const WEEK5_LESSONS_RAW = [

// ───────────────────────────── MONDAY — HISTORY STATION ─────────────────────────────
{
  day: 'Monday', strand: 'History', sessionLabel: 'Sea Trial — Station 1: True Voyager or Myth?',
  topic: 'SEA TRIAL STATION 1 — Testing Real History Knowledge from Weeks 1–4',
  curriculumArea: 'Social Sciences',
  aos: [
    'Understanding the Past: demonstrate understanding of historical events, evidence, and the people involved, drawn from prior learning.',
  ],
  keyCompetencies: 'Thinking; Relating to Others',
  learningIntentions: [
    'We are demonstrating what we have learned about real Pacific migration history from Weeks 1–4.',
    'We are working as a team under time pressure to recall accurate historical facts.',
    'I can tell the difference between a true historical fact and a common misconception.',
  ],
  assessment: 'This IS the assessment for Weeks 1–4 History content. Score team performance on the quick-fire round and use results to identify any concepts needing revisiting before Week 6.',
  introduction: `"The Council of Wayfinders has summoned you. Before this voyage can continue, you must prove what you have truly learned across four weeks of trials. Today's first station: history itself. Quick wits and accurate memory will serve you far better than guessing."`,
  mainContent: [
    {
      title: 'Station Setup (5 minutes)',
      points: [
        "Explain the format: this is a rapid-fire True/False round. Read each statement aloud; teams confer briefly (10–15 seconds) then signal their answer (show a card, raise a hand, or use a simple buzzer system).",
        "Award one point per correct answer. Consider a bonus point for a team that can correctly explain WHY a false statement is false.",
      ],
    },
    {
      title: 'Quick-Fire Question Bank (20 minutes)',
      points: [
        "1. The Lapita culture is named after a site in New Caledonia. (TRUE)",
        "2. The Lapita people are believed to have first appeared near Papua New Guinea. (TRUE)",
        "3. Voyagers reached Hawaii, Rapa Nui, and Aotearoa at the same time as the early Lapita spread. (FALSE — this happened roughly 1,000+ years later)",
        "4. Voyaging canoes are believed to have carried food crops like kūmara, intended for planting at new lands. (TRUE)",
        "5. Mau Piailug navigated the Hōkūleʻa using modern GPS technology. (FALSE — he used only traditional, instrument-free wayfinding)",
        "6. The Hōkūleʻa voyage sailed from Hawaii to Tahiti in 1976. (TRUE)",
        "7. Overcrowding and drought are real examples of 'pull' factors that drew people toward a new land. (FALSE — these are push factors that drove people away from a place)",
        "8. Bird migration patterns may have been a real clue voyagers used to suspect that land existed somewhere unseen. (TRUE)",
        "9. The magnetic compass was first invented in ancient Greece. (FALSE — it is believed to have first been developed in ancient China)",
        "10. Etak is a real navigational idea where the canoe is imagined to stay still while islands move past it. (TRUE)",
        "Optional extension: invite teams to write one additional True/False statement of their own from Weeks 1–4 content, to challenge another team.",
      ],
    },
    {
      title: 'Debrief (5 minutes)',
      points: [
        "Reveal team scores. Briefly revisit any question more than one team got wrong, with a short explanation, before moving to tomorrow's station.",
      ],
    },
  ],
  exitTicket: `As a team, write down the ONE question from today you're most confident you'll remember correctly in a year's time — and why it stuck.`,
  resources: [
    'Quick-fire question bank (above) printed or read aloud',
    'A simple way for teams to signal answers (cards, hands, buzzers)',
    'A visible scoreboard',
  ],
  videos: [],
  studentAgency: {
    art: { title: 'Design a Sea Trial Medal', body: `Design a medal or badge that could be awarded to a team that performs well in today's History Station.\n\n**Instructions:**\n1. Sketch the medal design.\n2. Include one symbol from this term's story (pottery shard, waka, compass, star).\n\n**Reflection Prompt:** Why did you choose that particular symbol to represent History knowledge?` },
    readWrite: { title: 'My History MVP Moment', body: `Write a short reflection on the ONE piece of history content from Weeks 1–4 that you understood best, and why.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How did you come to understand it so well — what helped it stick?` },
    technology: { title: 'Build a Digital Scoreboard', body: `Create a simple digital scoreboard (spreadsheet or slide) to track team scores across all five Sea Trial stations this week.\n\n**Reflection Prompt:** What information does a good scoreboard need to show clearly?` },
    watchReview: { title: 'Review Your Own Quest Log', body: `Look back through your own Quest Log entries from Weeks 1–4 and note one thing you wrote that you'd improve on now, with what you know today.\n\n**Reflection Prompt:** What does this tell you about how much you've learned this term?` },
  }
},

// ───────────────────────────── TUESDAY — GEOGRAPHY STATION ─────────────────────────────
{
  day: 'Tuesday', strand: 'Geography', sessionLabel: 'Sea Trial — Station 2: Place the Islands',
  topic: 'SEA TRIAL STATION 2 — Testing Real Geography Knowledge from Weeks 1–4',
  curriculumArea: 'Social Sciences (Geography)',
  aos: [
    'Understanding Place and Environment: demonstrate understanding of geographic features, scale, and patterns drawn from prior learning.',
  ],
  keyCompetencies: 'Thinking; Using Language, Symbols & Text',
  learningIntentions: [
    'We are demonstrating our memory of real Pacific geography from Weeks 1–4.',
    'We are working under pressure, using memory rather than guesswork.',
    'I can recall and place real geographic features correctly without looking.',
  ],
  assessment: 'This IS the assessment for Weeks 1–4 Geography content. Use results to identify which geographic concepts (scale, currents, navigation signs) may need revisiting.',
  introduction: `"Yesterday, your knowledge of history was tested. Today, the Council tests your knowledge of place itself. A real voyager could not always see — sometimes they had to know, from memory alone, where things truly were."`,
  mainContent: [
    {
      title: 'Station Setup (5 minutes)',
      points: [
        "Lay out the large Pacific floor/wall map used throughout the term, but cover or remove the usual labels.",
        "Explain the challenge: one team member is blindfolded (or simply closes their eyes), and must correctly place a token at a named location based purely on memory, guided only by verbal directions (not physical guidance) from their team.",
      ],
    },
    {
      title: 'Challenge Round (20 minutes)',
      points: [
        "Call out locations one at a time for each team to place: Hawaii, Aotearoa, Rapa Nui (the three points of the Polynesian Triangle), Tahiti, and one island group from Week 1's distance work.",
        "Award points for correct or close placement. Follow with a short verbal recap round: ask teams to recall one real fact about ocean currents (South Equatorial Current, North Equatorial Current, Equatorial Countercurrent) and one real wave-piloting or bird-based navigation clue from Week 3.",
        "Key Question for discussion: \"Which was harder — remembering WHERE something was, or remembering WHAT a clue meant?\"",
      ],
    },
    {
      title: 'Debrief (5 minutes)',
      points: [
        "Reveal scores. Briefly re-show correct locations on the map for anything placed incorrectly.",
      ],
    },
  ],
  exitTicket: `Write one sentence: which real Pacific location or geographic fact from this term do you feel most confident about, and why?`,
  resources: [
    'Large Pacific floor/wall map (labels removed or covered)',
    'Blindfolds (optional) and placement tokens',
    'A visible scoreboard',
  ],
  videos: [],
  studentAgency: {
    art: { title: 'Draw the Triangle from Memory', body: `Without looking at any reference, draw your best memory of the Polynesian Triangle and its three points.\n\n**Reflection Prompt:** Compare your drawing to a real map afterward — what did you get right, and what surprised you?` },
    readWrite: { title: 'My Geography MVP Moment', body: `Write a short reflection on the ONE piece of geography content from Weeks 1–4 you understood best.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How did you remember it so clearly?` },
    technology: { title: 'Digital Map Labelling Challenge', body: `Use a simple digital map tool or slide to label as many real locations and currents from this term as you can recall, unaided.\n\n**Reflection Prompt:** How many could you label without checking back?` },
    watchReview: { title: 'Review the Term\'s Map Work', body: `Look back at your own star compass and distance work from Weeks 1 and 4. What's one detail you'd add now that you wouldn't have known back then?`, },
  }
},

// ───────────────────────────── WEDNESDAY — SCIENCE STATION ─────────────────────────────
{
  day: 'Wednesday', strand: 'Science', sessionLabel: 'Sea Trial — Station 3: Read the Conditions',
  topic: 'SEA TRIAL STATION 3 — Testing Real Science Knowledge from Weeks 1–4',
  curriculumArea: 'Science',
  aos: [
    'Demonstrate understanding of weather, climate, and astronomical phenomena drawn from prior learning.',
  ],
  keyCompetencies: 'Thinking; Participating & Contributing',
  learningIntentions: [
    'We are demonstrating our understanding of real weather, wind, and seasonal science from Weeks 1–4.',
    'We are using real observed or given conditions to make a justified decision.',
    'I can apply scientific reasoning under realistic pressure, not just recall facts.',
  ],
  assessment: 'This IS the assessment for Weeks 1–4 Science content. Use results to identify which scientific concepts (weather vs. climate, wind formation, cloud signs, seasons) may need revisiting.',
  introduction: `"A real voyager often had only moments to decide: is it safe to sail today, or not? Today, the Council gives you a real or simulated set of conditions. Your knowledge of sky and sea will be tested for real."`,
  mainContent: [
    {
      title: 'Station Setup (5 minutes)',
      points: [
        "If possible, take the class outside for genuine conditions; if not, prepare 3–4 written/illustrated weather scenario cards (e.g. \"calm seas, light cumulus clouds, steady wind from the east\" or \"darkening cumulonimbus clouds building rapidly, wind shifting\").",
      ],
    },
    {
      title: 'Challenge Round (20 minutes)',
      points: [
        "Present each scenario to teams in turn. Teams must decide: safe to sail, or not — and justify their answer using real content from this term (weather vs. climate, cloud types, trade wind patterns).",
        "Include at least one question testing the real cause of seasons (Earth's axial tilt) and one testing the real 'island cloud' phenomenon from Week 3.",
        "Award points for correct decisions AND for scientifically sound justifications, even if the final decision is debatable.",
      ],
    },
    {
      title: 'Debrief (5 minutes)',
      points: [
        "Reveal scores. Discuss any scenario where teams disagreed — was there a genuinely defensible case for both decisions?",
      ],
    },
  ],
  exitTicket: `Write one sentence: what real science concept from this term would you most want a real voyager to understand before setting sail?`,
  resources: [
    'Weather scenario cards (or real outdoor conditions)',
    'A visible scoreboard',
  ],
  videos: [],
  studentAgency: {
    art: { title: 'Illustrate a "Safe to Sail" Scene', body: `Draw a sky/sea scene showing conditions a real voyager would consider genuinely safe to set sail in, labelling the clues that make it safe.\n\n**Reflection Prompt:** What's the one clue you'd never ignore, even if everything else looked fine?` },
    readWrite: { title: 'My Science MVP Moment', body: `Write a short reflection on the ONE science concept from Weeks 1–4 you understood best.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How would you explain it to someone who missed this term?` },
    technology: { title: 'Build a Decision Flowchart', body: `Create a simple digital flowchart: "Is it safe to sail?" — branching through weather, cloud, and wind checks based on this term's content.\n\n**Reflection Prompt:** What question did you put first in your flowchart, and why?` },
    watchReview: { title: 'Review Your Voyage Forecasts', body: `Look back at your own voyage forecast entries from Weeks 1–3. Were your past decisions justified by real evidence, or guesswork? Reflect honestly.` },
  }
},

// ───────────────────────────── THURSDAY — TECHNOLOGY STATION ─────────────────────────────
{
  day: 'Thursday', strand: 'Technology', sessionLabel: 'Sea Trial — Station 4: The Final Float Test',
  topic: 'SEA TRIAL STATION 4 — Testing Real Technology Knowledge and the Class Vessels',
  curriculumArea: 'Technology',
  aos: [
    'Demonstrate understanding of design, materials, and structures, drawn from prior learning and testing.',
  ],
  keyCompetencies: 'Thinking; Managing Self',
  learningIntentions: [
    'We are demonstrating our real engineering knowledge from Weeks 1–4.',
    'We are testing our own vessel designs under genuine, timed conditions.',
    'I can explain why a real design choice worked, using evidence.',
  ],
  assessment: "This IS the assessment for Weeks 1–4 Technology content. Use the float-and-sail test and verbal explanations as evidence of understanding buoyancy, stability, and sail design.",
  introduction: `"Every voyager's fate rests on their vessel. Today, the Council asks for proof: bring forward your waka hourua and sail, built and improved across these four weeks, and show that it can truly survive the open sea."`,
  mainContent: [
    {
      title: 'Station Setup (5 minutes)',
      points: [
        "Gather the class's waka hourua models (Week 2) and sail designs (Week 3). If models were not kept, allow a short rebuild using familiar materials.",
      ],
    },
    {
      title: 'The Final Float-and-Sail Test (20 minutes)',
      points: [
        "Each team tests their vessel in front of the class: float test with cargo (Week 1–2 buoyancy knowledge), stability test against a simulated wave (Week 2 double-hull knowledge), and a sail test in front of a fan or moving air (Week 3 crab claw sail knowledge).",
        "After each test, the team must verbally explain ONE real engineering reason their design succeeded or failed, using correct vocabulary from this term (displacement, density, stability, sail angle).",
        "Award points for both performance AND for the quality/accuracy of the verbal explanation.",
      ],
    },
    {
      title: 'Debrief (5 minutes)',
      points: [
        "Reveal scores. Celebrate the strongest design feature seen across all teams, regardless of final score.",
      ],
    },
  ],
  exitTicket: `Write one sentence: what is the single most important design feature your vessel needed to survive this final test?`,
  resources: [
    "Class waka hourua and sail models from Weeks 1–3 (or rebuild materials)",
    'Tubs of water, a fan or moving air source',
    'A visible scoreboard',
  ],
  videos: [],
  studentAgency: {
    art: { title: 'Design a "Sea-Worthy" Certificate', body: `Design a certificate that could be awarded to a vessel that passes today's final test, listing the real engineering features it demonstrated.\n\n**Reflection Prompt:** What would a certificate need to show to prove a vessel is genuinely sea-worthy?` },
    readWrite: { title: 'My Technology MVP Moment', body: `Write a short reflection on the ONE piece of technology content from Weeks 1–4 you understood best.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** How did testing your own design help you understand it better than just reading about it?` },
    technology: { title: 'Digital Design Evolution Poster', body: `Create a simple before/after digital poster showing your vessel's design at Week 1 versus its final, improved version today.\n\n**Reflection Prompt:** What's the biggest improvement you made, and what taught you to make it?` },
    watchReview: { title: 'Review Your Build Journey', body: `Look back at your design notes and sketches from Weeks 1–3. What's one change you made that you're proudest of?` },
  }
},

// ───────────────────────────── FRIDAY — STAR NAVIGATION + COUNCIL CEREMONY ─────────────────────────────
{
  day: 'Friday', strand: 'Bonus Station', sessionLabel: 'Sea Trial — Bonus Station: Star Navigation & The Council\'s Verdict',
  topic: 'SEA TRIAL FINALE — Star Navigation Test and the Council Ceremony',
  curriculumArea: 'Social Sciences / The Arts',
  aos: [
    'Demonstrate understanding of navigation knowledge and contribute meaningfully to a shared class outcome, drawn from a full term of prior learning.',
  ],
  keyCompetencies: 'Thinking; Participating & Contributing; Relating to Others',
  learningIntentions: [
    'We are demonstrating our ability to use a star compass for real navigation decisions.',
    'We are reflecting honestly on a full term of learning and contribution.',
    'I can recognise growth in my own understanding across an extended unit of work.',
  ],
  assessment: "Teacher observation of the star navigation challenge. Use the Council Ceremony as a celebratory, low-pressure close to Weeks 1–4's assessment, not as a new graded task.",
  introduction: `"You have faced History, Geography, Science, and Technology. One final test remains, and then the Council of Wayfinders will render its verdict on this voyage so far."`,
  mainContent: [
    {
      title: 'Bonus Station: Star Navigation (10 minutes)',
      points: [
        "Using the star compass wheels built in Week 4, teams must correctly 'steer' a token from one named island to another on the floor map, using real star reference points (Matariki, Te Matau a Māui, Te Punga/the Southern Cross) rather than guessing direction.",
        "Award bonus points for correct use of the real star names alongside correct direction.",
      ],
    },
    {
      title: 'Tallying the Sea Trial (10 minutes)',
      points: [
        "Add up all points from Monday through Friday's bonus station. Announce results — frame this as a genuine achievement regardless of which team scores highest, since every team has demonstrated four weeks of real learning.",
      ],
    },
    {
      title: 'The Council Ceremony (10 minutes)',
      points: [
        "If the class has \"passed\" (a generous bar — this is about participation and growth, not a cutoff score), narrate the compass prop visibly coming back to life: spin it once, then let it settle.",
        "Read a closing line in Tama's voice: \"You have proven yourselves true Wayfinders-in-training. The compass settles, ready for what comes next — for soon, after so long at sea, we will see land.\"",
        "This sets up Week 6's arrival in Aotearoa.",
      ],
    },
  ],
  exitTicket: `Write one sentence: looking back over Weeks 1–4, what is the one thing you understand now that you didn't at the start of the term?`,
  resources: [
    'Star compass wheels from Week 4',
    'The floor/wall Pacific map',
    "The class's compass/journal prop for the ceremony",
    'A running scoreboard from the week',
  ],
  videos: [],
  studentAgency: {
    art: { title: 'Design a "Wayfinder-in-Training" Badge', body: `Design a small badge or certificate every student could receive for completing the Sea Trial.\n\n**Reflection Prompt:** What symbol best represents what you've learned this term so far?` },
    readWrite: { title: 'A Letter to Myself at the Start of Term', body: `Write a short letter to yourself from Week 1, telling your past self what you now understand about this voyage.\n\n**Word Count Guide:** 120–180 words.\n\n**Reflection Prompt:** What would surprise your Week 1 self the most?` },
    technology: { title: 'Build a Term Highlights Slide', body: `Create one digital slide summarising your proudest moment or piece of learning from Weeks 1–4.\n\n**Reflection Prompt:** Why did you choose that particular highlight?` },
    watchReview: { title: 'Review the Whole Voyage Quilt', body: `Look back over your group's quilt squares built across Weeks 1–4 and choose the one square you think tells the story best.\n\n**Reflection Prompt:** What makes that square so effective at telling the story?` },
  }
}

]

// Register these lesson plans into the shared app registry: Term 2, Week 5 (Boss Battle 1)
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {};
window.ALL_LESSON_PLANS['polynesian-migration'] = window.ALL_LESSON_PLANS['polynesian-migration'] || {};
window.ALL_LESSON_PLANS['polynesian-migration'][5] = {};
WEEK5_LESSONS_RAW.forEach(l => { window.ALL_LESSON_PLANS['polynesian-migration'][5][l.day] = l; });
