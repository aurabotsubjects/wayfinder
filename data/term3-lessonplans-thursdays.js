// Rich lesson-plan content for SKYBOUND: The Baobab Route (Term 3) — Thursday (Technology)
// sessions, Weeks 1–10. Built to match the same structure as the Term 2 (Polynesian migration)
// lesson-plan files, so these register into the app's existing window.ALL_LESSON_PLANS system.
//
// FILE NAMING: index.html already stubs in <script src="data/term3.js"> and
// <script src="data/term3-lessonplans-week1.js">, following the same pattern Term 2 used
// (term2.js = the story/quest data for Mon–Fri + boss battles; term2-lessonplans-weekN.js =
// the rich teacher lesson plans for each day). This file covers only Thursdays for now — once
// Monday/Tuesday/Wednesday/Friday are written, they can either move into this same file
// (renamed data/term3-lessonplans-weekN.js per week, matching Term 2's pattern exactly) or
// stay as separate files that also populate window.ALL_LESSON_PLANS[TERM_KEY][N][day].
//
// REGISTRATION KEY: Term 2's story data (term2.js) registers under window.ALL_TERMS['polynesian-migration']
// — a descriptive slug, not literally 'term2'. This file uses 'skybound-baobab-route' as that same
// kind of slug for Term 3. When term3.js (the Monday–Friday story/quest file) is built, register
// it under the SAME key so everything links up — or rename the key here to whatever you prefer.
//
// Story continuity used throughout: Tapiwa (Hwange/Vic Falls), Nomvula (Ndebele village),
// Sekuru Josiah (retired bush pilot, grandfather), Baba Farai (Tapiwa's dad, anti-poaching ranger),
// Gogo Thandiwe (Nomvula's grandmother, beadworker/painter). Technology strand = conservation &
// field technology (tracking, radios, camera traps, DNA tracing, GPS collars, beehive fences,
// drones/thermal cameras) in place of Food Technology.

const SKYBOUND_THURSDAY_LESSONS = [

// ============================== WEEK 1 — TAKE-OFF ==============================
{
  week: 1,
  lesson: {
    day: `Thursday`, strand: `Technology`, sessionLabel: `Flight Log 4: Reading the Land`,
    topic: `READING THE LAND — From San Trackers to Modern Ranger Technology`,
    curriculumArea: `Technology`,
    aos: [
      `Technological Knowledge: understand that technologies have designed features that suit their purpose, and that a range of technologies exist to help people gather and interpret information.`,
      `Nature of Technology: understand that technology both reflects and changes society, and that technological outcomes are developed to meet a need or opportunity.`,
    ],
    keyCompetencies: `Thinking; Managing Self`,
    learningIntentions: [
      `We are learning how the San people read the land — footprints, broken grass, dung — to know what animals had passed and when.`,
      `We are learning that modern ranger technology (radios, GPS, cameras) does a similar job to ancient tracking skill, just with different tools.`,
      `I can read and interpret a set of "spoor" clues to solve a simple tracking challenge.`,
    ],
    assessment: `Teacher observation of the spoor-reading challenge and class discussion; review of exit tickets for understanding of tracking as an information-gathering technology, ancient and modern.`,
    introduction: `The logbook falls open onto a wide, dry stretch of Hwange bush at first light. Tapiwa crouches by a smudge in the red dirt. "Sharp, crew," he grins up at the class. "Before anyone had a radio or a camera, my ancestors could read a whole story out of dirt like this. Come and see if you can."

Wonder question: if you had no radio, no camera, and no GPS, how could you possibly know an elephant had walked past two hours ago instead of two days ago?`,
    mainContent: [
      {
        title: `Spoor: The Original Tracking Technology (10 minutes)`,
        points: [
          `Teacher Input: The San people of southern Africa are famous for tracking — reading "spoor" (footprints, droppings, broken twigs, disturbed sand) to work out which animal passed, how long ago, how fast it was moving, and even how it was feeling.`,
          `Explain that this is genuinely a technology: a learned system of skills and knowledge, passed down and refined over generations, used to solve a real problem — finding food, or, today, finding and protecting animals.`,
          `Show spoor identification cards (elephant, lion, rhino, antelope) — discuss what shape and depth might tell a tracker.`,
        ],
      },
      {
        title: `Try It: A Spoor-Reading Challenge (15 minutes)`,
        points: [
          `Activity: In small groups, students receive a set of "spoor clue cards" (footprint size/shape, droppings description, a broken branch, a partial water-hole print) for a mystery animal and must work out what animal it was, roughly how long ago it passed, and which direction it was heading.`,
          `Groups justify their answer using the specific clues, not just a guess — mirroring how a real tracker builds a case from evidence.`,
          `Key Question: "What could go wrong if a tracker read the clues too quickly, or missed one?"`,
        ],
      },
      {
        title: `From Spoor to Satellite: Why Rangers Still Need Both (10 minutes)`,
        points: [
          `Teacher Input: Modern rangers — like Tapiwa's dad, Baba Farai — still learn to read spoor, because it works without batteries, signal or expensive equipment. But they now pair that skill with radios, GPS units and cameras (which the class will meet over the coming weeks) to cover far bigger areas, faster.`,
          `Discuss: old and new technology aren't rivals — the best ranger teams use both, the way a pilot like Sekuru Josiah used both his instruments and his own trained eye.`,
          `Key Question: "Why might relying on only ONE kind of technology be risky for a ranger?"`,
        ],
      },
    ],
    exitTicket: `Write one sentence: name ONE thing a tracker can learn from spoor, and explain how that same information helps protect an animal today.`,
    faith: {
      ponder: `Long before satellites, God had already written signs into creation for anyone patient enough to read them. Job reminds his friends that even the animals and the earth itself can teach us something true, if we're willing to look closely.`,
      verse: `Ask the animals, and they will teach you, or the birds of the air.`,
      ref: `Job 12:7 (NIV)`,
      value: `Mōhio  Know`,
      valueDesc: `Learning to read the land, ancient or modern, is a way of knowing creation more closely — and knowing it is part of knowing the God who made it.`,
      questions: [
        `The San people could read a whole story out of a footprint. What does that tell you about how closely they paid attention to the world God made?`,
        `Tapiwa's dad uses both old tracking skill and new technology. Why might God want us to value old wisdom AND new tools, instead of choosing one over the other?`,
        `What is one thing in creation you could "read" more closely this week, if you slowed down enough to look?`,
      ],
    },
    resources: [
      `Spoor identification cards (elephant, lion, rhino, antelope) — printable or hand-drawn`,
      `Mystery animal "clue card" sets, one per group (footprint, droppings, broken branch, partial print)`,
      `Southern Africa map for context`,
      `Small pieces of paper for exit tickets`,
    ],
    videos: [
      { title: `San trackers reading animal spoor`, search: `San Bushmen tracking skills spoor reading documentary`, why: `Shows real San tracking skill in action, grounding the lesson in an authentic, respectful example.` },
      { title: `How modern rangers combine tracking with technology`, search: `anti-poaching rangers tracking technology Africa`, why: `Bridges today's ancient-tracking focus with the ranger technology theme running through the rest of the term.` },
    ],
    studentAgency: {
      art: { title: `Draw a Spoor Field Guide Page`, body: `Design one page of a "field guide" showing three animal tracks from today's lesson.\n\n**Instructions:**\n1. Draw each footprint to scale, roughly.\n2. Label one clue for each that would help identify it.\n\n**Reflection Prompt:** Which track was hardest to tell apart from another, and why?` },
      readWrite: { title: `A Tracker's Notebook Entry`, body: `Write a short diary entry in role as a young tracker who has just found and interpreted a fresh set of spoor.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What did you notice, and what did you decide it meant?` },
      technology: { title: `Design a Simple Tracking App Idea`, body: `Sketch or describe (on paper or a simple drawing tool) an idea for an app that could help a ranger log spoor sightings in the field.\n\n**Reflection Prompt:** What information would it need to record to actually be useful?` },
      watchReview: { title: `Watch and Note: Reading Spoor`, body: `Watch a short video of real trackers reading spoor.\n\n**Search term:** "San Bushmen tracking skills spoor reading"\n\n**Reflection Prompt:** What surprised you about how much information one footprint can hold?` },
    },
  },
},

// ============================== WEEK 2 — LANDING AT HWANGE ==============================
{
  week: 2,
  lesson: {
    day: `Thursday`, strand: `Technology`, sessionLabel: `Flight Log 9: Voices Across the Bush`,
    topic: `VOICES ACROSS THE BUSH — Radio Communication and Ranger Teamwork`,
    curriculumArea: `Technology`,
    aos: [
      `Technological Systems: understand that technological systems have inputs, controlled processes and outputs, and are the means by which people control, monitor or send information.`,
      `Nature of Technology: understand that technology can have both intended and unintended impacts, and that solutions often involve trade-offs.`,
    ],
    keyCompetencies: `Relating to Others; Thinking`,
    learningIntentions: [
      `We are learning why fast, reliable communication is one of the most important technologies for protecting animals across huge areas.`,
      `We are learning how a two-way radio system actually works, in simple terms.`,
      `I can plan and run a short relay of accurate information, and understand what can go wrong along the way.`,
    ],
    assessment: `Teacher observation of the radio relay activity, focusing on accuracy of information passed on; review of written reflections on why clear communication protocols matter.`,
    introduction: `The logbook settles over Hwange again, but this time there's a crackle of static first. "Sharp, crew — that's Baba," Tapiwa says, suddenly serious, turning the wooden elephant over in his pocket. "My dad's on patrol today. When his radio goes quiet too long, that's when Sekuru Josiah taught me to really worry."

Wonder question: Hwange National Park is bigger than some entire countries. If a ranger spots something urgent on one side of it, how does help get there fast enough to matter?`,
    mainContent: [
      {
        title: `Why Radios, Not Just Phones (10 minutes)`,
        points: [
          `Teacher Input: Explain that many reserves and parks are far larger than mobile phone coverage can reach, and radios don't rely on phone towers — they send signals directly, ranger to ranger, which is why they're still the backbone of ranger communication today.`,
          `Simple explanation of how a two-way radio works: a microphone turns your voice into an electrical signal, a transmitter turns that into a radio wave, and a receiver on another radio turns the wave back into sound — Sekuru Josiah used exactly this kind of radio to talk to airfields when he was flying.`,
          `Key Question: "Why might a system that doesn't need phone signal be especially important in wild, remote places?"`,
        ],
      },
      {
        title: `The Rules of Good Radio Communication (10 minutes)`,
        points: [
          `Teacher Input: Real ranger and pilot radio communication uses short, clear phrases, confirms messages were received ("copy"), and avoids talking over each other — because a garbled message in an emergency can be dangerous.`,
          `Model a short example exchange (e.g., reporting a sighting) using clear, simple radio phrasing.`,
          `Discuss: what could go wrong if a message about an animal's location was passed on inaccurately?`,
        ],
      },
      {
        title: `The Message Relay Challenge (15 minutes)`,
        points: [
          `Activity: In a line or circle, one student is given a short, specific "ranger report" (e.g., an animal type, a rough location, a time) and must pass it on by whispering, relay-style, to the end of the chain — no repeating.`,
          `Compare the final message to the original — discuss how and why details changed.`,
          `Reframe: this is why real radio protocol insists on reading back important details, rather than just saying "got it."`,
          `Key Question: "What is one radio habit that could have stopped our message from changing?"`,
        ],
      },
    ],
    exitTicket: `Write one sentence: what is ONE rule of clear radio communication, and why does it matter when the message is about protecting an animal?`,
    faith: {
      ponder: `Ecclesiastes reminds us that we weren't made to carry every load alone — we're stronger, and safer, working as a connected team. A ranger's radio is a small, practical picture of that truth: nobody protects a whole reserve by themselves.`,
      verse: `Two are better than one, because they have a good return for their labor.`,
      ref: `Ecclesiastes 4:9 (NIV)`,
      value: `Manaaki  Serve`,
      valueDesc: `Serving faithfully with our gifts often means being a reliable link in someone else's chain — passing on what we know, clearly and honestly, so others can act on it.`,
      questions: [
        `If "two are better than one," why do you think God designed us to need each other, instead of making each of us able to do everything alone?`,
        `Baba Farai depends on other rangers hearing his radio message correctly. Who depends on YOU passing on information clearly — at school, or at home?`,
        `What does it look like to be a "clear voice" for someone else this week?`,
      ],
    },
    resources: [
      `Real or toy two-way radios, if available (or simple "walkie-talkie" role-play)`,
      `Pre-written "ranger report" message cards for the relay activity`,
      `Diagram of how a radio signal travels (microphone → transmitter → receiver → speaker), simplified`,
    ],
    videos: [
      { title: `How two-way radios work`, search: `how does a two way radio work simple explanation`, why: `Gives students a clear, age-appropriate picture of the technology behind today's activity.` },
      { title: `A day with anti-poaching rangers`, search: `anti-poaching rangers daily patrol Africa`, why: `Shows the real context radios are used in, connecting to Tapiwa's dad's work.` },
    ],
    studentAgency: {
      art: { title: `Design a Ranger Radio Call-Sign Chart`, body: `Design a simple chart of radio call-signs and short phrases a ranger team might use (e.g., what they'd say for "all clear" or "need help").\n\n**Reflection Prompt:** Why is short and clear better than long and detailed, on a radio?` },
      readWrite: { title: `Write the Radio Transcript`, body: `Write a short, realistic radio exchange between two rangers reporting and responding to an animal sighting.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** What did you include to keep the message clear and short?` },
      technology: { title: `Map a Communication Network`, body: `Using a simple drawing tool or paper, map out how a message might travel from a ranger in the field to help arriving — ranger to base, base to nearest team, etc.\n\n**Reflection Prompt:** Where in your chain could a message get delayed or lost?` },
      watchReview: { title: `Watch and Note: Ranger Radios in Action`, body: `Watch a short video showing rangers using radios on patrol.\n\n**Search term:** "anti-poaching rangers daily patrol Africa"\n\n**Reflection Prompt:** What tone or style of speaking did you notice in how they communicated?` },
    },
  },
},

// ============================== WEEK 3 — FOLLOWING THE ZAMBEZI ==============================
{
  week: 3,
  lesson: {
    day: `Thursday`, strand: `Technology`, sessionLabel: `Flight Log 14: The Watching Eye`,
    topic: `THE WATCHING EYE — Camera Traps and Studying Animals Without Disturbing Them`,
    curriculumArea: `Technology`,
    aos: [
      `Technological Products: understand that materials, electronics and sensors can be combined to form a technological product that senses and responds to its environment.`,
      `Technological Practice: understand the role of planning and evaluation in the development of a technological outcome.`,
    ],
    keyCompetencies: `Thinking; Participating and Contributing`,
    learningIntentions: [
      `We are learning what a camera trap is and how it senses and reacts to a passing animal.`,
      `We are learning why researchers prefer to study predators without disturbing them.`,
      `I can plan where I would place a camera trap and justify my choice using real reasoning.`,
    ],
    assessment: `Teacher observation of the camera-trap placement activity and group justifications; review of written design explanations for understanding of sensor logic.`,
    introduction: `The logbook opens over the Zambezi at dusk, and for a moment the class hears Nomvula's voice crackle in over the radio for the first time — "Sharp, crew, this side too!" — before Tapiwa answers, then turns to the class. "Out here, if you want to see a lion properly, you can't just walk up and ask it to wait around. My dad's team uses something smarter."

Wonder question: how could you find out exactly which animals visit a waterhole at night, without ever being there yourself?`,
    mainContent: [
      {
        title: `How a Camera Trap Actually Works (10 minutes)`,
        points: [
          `Teacher Input: A camera trap is a weatherproof camera with a motion and/or heat sensor (similar to the sensor in some automatic lights) — when something warm moves in front of it, the sensor triggers the camera to take a photo or short video, then goes back to waiting.`,
          `Explain the input → process → output idea simply: input = movement/heat detected, process = sensor triggers the camera, output = a photo or video saved automatically, day or night.`,
          `Key Question: "Why might a sensor-triggered camera capture something a human with a camera never could?"`,
        ],
      },
      {
        title: `Why Not Just Watch in Person? (10 minutes)`,
        points: [
          `Teacher Input: Predators like lion and leopard change their behaviour around people — some avoid humans, some become dangerously bold. A camera trap lets researchers gather real, honest data about what animals actually do when no one is watching.`,
          `Discuss real uses: counting how many individual animals live in an area, tracking health and injuries over time, and — increasingly — spotting people or vehicles where they shouldn't be, which links camera traps directly to anti-poaching work too.`,
          `Key Question: "What's the difference between data collected by camera trap and a story someone remembers from a sighting?"`,
        ],
      },
      {
        title: `Placement Planning Challenge (15 minutes)`,
        points: [
          `Activity: In groups, students are given a simple map of a waterhole/game trail area and must decide and justify exactly where they'd place 2–3 camera traps to capture the most useful information, considering animal paths, height, and angle.`,
          `Groups present their placement choices to another group, who challenge them with one "what if" question (e.g., "what if the sun is behind your camera every afternoon?").`,
          `Key Question: "What is one thing that could go wrong with a badly placed camera trap?"`,
        ],
      },
    ],
    exitTicket: `Write one sentence: why is a camera trap sometimes a better research tool than a person with a camera?`,
    faith: {
      ponder: `The Psalms describe God watching over the whole earth — seeing what happens even when no human eye is there. A camera trap does a small, human-sized version of that: it keeps a faithful, patient watch, even in the dark, even when nobody's looking.`,
      verse: `From heaven the LORD looks down and sees all mankind.`,
      ref: `Psalm 33:13 (NIV)`,
      value: `Mōhio  Know`,
      valueDesc: `Watching carefully and patiently — the way a camera trap does — helps us know creation as it truly is, not just the version we happen to see.`,
      questions: [
        `If God sees the whole earth, even the parts no human ever visits, what does that tell you about how much He cares about all of it — not just the parts people notice?`,
        `A camera trap tells the truth about what happens, even in the dark. Why does it matter to be truthful, even when nobody's watching us either?`,
        `What's one part of creation you think God delights in that most people never even see?`,
      ],
    },
    resources: [
      `Simple diagram of a camera trap (sensor, camera, weatherproof case)`,
      `Printed waterhole/game trail maps, one per group`,
      `Example real camera-trap photos (lion, leopard, antelope at night) if available`,
    ],
    videos: [
      { title: `How camera traps work`, search: `how do camera traps work wildlife research`, why: `Explains the sensor technology behind today's lesson in an age-appropriate way.` },
      { title: `Best camera trap footage of African predators`, search: `camera trap footage lion leopard Africa night`, why: `Gives students a genuine sense of what this technology reveals that a human observer couldn't.` },
    ],
    studentAgency: {
      art: { title: `Design a Camera Trap Housing`, body: `Draw a labelled design for a weatherproof camera trap case that could survive rain, dust and curious animals.\n\n**Reflection Prompt:** What feature of your design solves a specific problem, and what problem is it?` },
      readWrite: { title: `A Researcher's Field Notes`, body: `Write a short field-notes entry in role as a researcher reviewing a week of camera trap photos from one waterhole.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What pattern did your imagined data reveal?` },
      technology: { title: `Sketch a Sensor Flowchart`, body: `Create a simple flowchart (input → process → output) showing exactly how a camera trap reacts when an animal walks past.\n\n**Reflection Prompt:** What would happen if the sensor was too sensitive, or not sensitive enough?` },
      watchReview: { title: `Watch and Note: Camera Trap Footage`, body: `Watch real camera trap footage of African predators.\n\n**Search term:** "camera trap footage lion leopard Africa night"\n\n**Reflection Prompt:** What did the footage show that surprised you?` },
    },
  },
},

// ============================== WEEK 4 — STORM OVER THE RESERVE ==============================
{
  week: 4,
  lesson: {
    day: `Thursday`, strand: `Technology`, sessionLabel: `Flight Log 19: Marked and Traced`,
    topic: `MARKED AND TRACED — DNA, Microchips and the Fight to Protect Rhino`,
    curriculumArea: `Technology`,
    aos: [
      `Nature of Technology: understand how technologies can be used ethically and responsibly to respond to a genuine societal need.`,
      `Technological Knowledge: understand how a technological system, such as a database, can be used to identify and trace materials.`,
    ],
    keyCompetencies: `Thinking; Relating to Others`,
    learningIntentions: [
      `We are learning what a DNA database is, in simple terms, and why it can identify one specific rhino horn out of thousands.`,
      `We are learning about horn notching and microchipping as real, current anti-poaching technologies.`,
      `I can explain why identifying evidence is a crucial part of stopping wildlife crime, not just catching someone in the act.`,
    ],
    assessment: `Teacher observation of the matching/identification activity and class discussion; review of exit tickets for understanding of how tracing evidence supports enforcement.`,
    introduction: `The radio crackles mid-lesson, just like Baba Farai warned it might this week. Tapiwa goes quiet — properly quiet, not joke-quiet — turning the wooden elephant over and over in his pocket. "Poachers," he says eventually. "Near the reserve. Dad's team is out right now." Nomvula's voice comes through steady: "That's the pattern of it, crew — this is the hard week. But listen: there are tools built exactly for this fight."

Wonder question: if a rhino horn is found somewhere it shouldn't be, how could anyone possibly prove exactly which rhino, and which reserve, it came from?`,
    mainContent: [
      {
        title: `Why This Week Is Different (5 minutes)`,
        points: [
          `Teacher Input: Briefly and gently connect to the week's story — poaching is presented honestly as a real, serious problem, but the focus of this lesson is on the real people and real technology working against it, giving students agency rather than only alarm.`,
          `Set the tone: today is about the tools of protection, not the details of the crime.`,
        ],
      },
      {
        title: `DNA as a Fingerprint (12 minutes)`,
        points: [
          `Teacher Input: Explain DNA simply — a unique genetic "code" inside every living thing's cells, different for every individual. In South Africa, a real system called RhODIS (Rhino DNA Index System) stores DNA samples from individual rhinos and from horns, so that if a horn is ever recovered, it can potentially be matched back to the exact rhino and location it came from — much like matching a fingerprint at a crime scene.`,
          `Activity: give groups a simplified "DNA pattern matching" worksheet — a set of horn samples with matching pattern codes, and a set of "known rhino" records — students match evidence to the correct individual, mirroring (in a very simplified way) how RhODIS works.`,
          `Key Question: "Why does it matter to prove exactly WHERE a horn came from, not just that it is a rhino horn?"`,
        ],
      },
      {
        title: `Notching and Microchipping (10 minutes)`,
        points: [
          `Teacher Input: Explain two further real techniques used by wildlife vets and rangers — ear notching (a small, painless pattern cut into a rhino's ear so individuals can be told apart at a distance) and microchipping (a tiny chip inserted into the horn itself, detectable by scanner, similar to a pet microchip).`,
          `Discuss as a class: these technologies don't stop a determined poacher on their own — they work alongside rangers, radios, and law enforcement. Technology is one part of a bigger system of protection, not a magic fix.`,
          `Key Question: "Why might using several different technologies together work better than relying on just one?"`,
        ],
      },
    ],
    exitTicket: `Write one sentence: name ONE real technology used to help protect rhino, and explain in your own words why it helps.`,
    faith: {
      ponder: `Proverbs calls God's people to speak up for those who cannot speak for themselves. A rhino cannot explain what happened to it, or ask for help — but real people, using real technology, have chosen to be its voice and its defence.`,
      verse: `Speak up for those who cannot speak for themselves.`,
      ref: `Proverbs 31:8 (NIV)`,
      value: `Pānga  Impact`,
      valueDesc: `Pānga is about bringing God's kingdom to earth in real, practical ways — and standing up for a creature that cannot stand up for itself is exactly that kind of impact.`,
      questions: [
        `Proverbs says to speak up for those who cannot speak for themselves. Who — or what — around you might need someone to do that for them?`,
        `Tapiwa is scared for his dad this week, but he still trusts the fight is worth it. Where do you find courage when something you care about feels under threat?`,
        `Technology alone doesn't save a rhino — people using it well does. What is one gift or skill YOU have that could be used to protect something that matters?`,
      ],
    },
    resources: [
      `Simplified "DNA pattern matching" worksheet sets (horn sample codes vs known rhino records)`,
      `Diagram or photo reference of ear-notching patterns used to identify individual rhino`,
      `Simple diagram of a microchip scanner (for context only — no need for real equipment)`,
    ],
    videos: [
      { title: `How rhino DNA tracking works`, search: `rhino DNA database RhODIS South Africa explained`, why: `Grounds today's lesson in the real system referenced in class, at an appropriate level of detail for the age group.` },
      { title: `Rangers protecting rhino in South Africa`, search: `rhino anti-poaching rangers South Africa`, why: `Shows the real people and teamwork behind the technology, connecting to Tapiwa's dad's work this week.` },
    ],
    studentAgency: {
      art: { title: `Design an Ear-Notch Identification Chart`, body: `Design a simple chart showing 4–5 different notch patterns and the "name" each would identify.\n\n**Reflection Prompt:** Why does a pattern need to be simple enough to recognise from a distance?` },
      readWrite: { title: `A Ranger's Report`, body: `Write a short, calm, factual radio report in role as a ranger who has just found a horn and needs to describe it accurately for identification.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** Why does accuracy matter more than speed in a report like this?` },
      technology: { title: `Explain the DNA-Matching Process`, body: `Create a simple step-by-step diagram or flowchart explaining how a horn sample could be matched to a known rhino using a database.\n\n**Reflection Prompt:** What would happen to the system if the database wasn't kept accurate and up to date?` },
      watchReview: { title: `Watch and Note: Rhino Protection Technology`, body: `Watch a short video on real rhino DNA tracking or ranger anti-poaching work.\n\n**Search term:** "rhino DNA database RhODIS South Africa explained"\n\n**Reflection Prompt:** What part of the system most impressed you, and why?` },
    },
  },
},

// ============================== WEEK 5 — BOSS BATTLE 1: THE LOST CITY TRIAL ==============================
{
  week: 5,
  lesson: {
    day: `Thursday`, strand: `Technology`, sessionLabel: `The Lost City Trial — Station 4: The Ranger's Workshop`,
    topic: `THE RANGER'S WORKSHOP — Designing a Monitoring Solution (Consolidation Challenge)`,
    curriculumArea: `Technology`,
    aos: [
      `Technological Practice: undertake planning to guide the development of an outcome, and use feedback to make ongoing decisions.`,
      `Nature of Technology: understand how technological outcomes are evaluated, including by considering how well they meet the need they were designed for.`,
    ],
    keyCompetencies: `Thinking; Participating and Contributing; Managing Self`,
    learningIntentions: [
      `We are learning to bring together everything we've learned about tracking, radios, camera traps and DNA tracing into one design.`,
      `We are learning to plan, build and defend a simple technology solution to a real conservation problem.`,
      `I can explain and justify my team's design choices using reasoning from the whole month's learning.`,
    ],
    assessment: `Teacher observation of the design-and-pitch challenge, assessing use of prior learning (tracking, radios, camera traps, DNA tracing) and clarity of justification. Peer feedback recorded on pitch evaluation sheets.`,
    introduction: `The logbook flares open onto every leg of the route flown so far — Hwange, the Zambezi, the reserve under threat — stitched together like a map coming alive. "This is it, crew," Tapiwa says, steadier than the class has heard him all month. "Sekuru Josiah always says a good pilot — or a good ranger — doesn't just have one tool. They know how to put them all together." Nomvula's voice crackles in: "That's the pattern of it. Today, you build the plan."

Wonder question: if you had to design ONE monitoring solution for a reserve, and could only use ideas from this month — tracking, radios, camera traps, DNA tracing — how would you combine them to cover the most ground?`,
    mainContent: [
      {
        title: `The Challenge Brief (5 minutes)`,
        points: [
          `Teacher Input: Present the Boss Battle brief — teams are "ranger technology consultants" asked to design a simple monitoring plan for a fictional reserve, combining at least THREE of the four technologies studied this month (spoor-reading, radios, camera traps, DNA/notching).`,
          `Clarify success criteria: the design must explain what each technology is used for, why it was chosen over the alternatives, and how the technologies work together, not just alongside each other.`,
        ],
      },
      {
        title: `Design Time (15 minutes)`,
        points: [
          `Activity: In teams, students sketch and annotate their monitoring plan on a simple reserve map (provided), marking where each technology would be used and why.`,
          `Circulate and prompt teams with challenge questions drawn from the month: "What happens at night, when your camera trap can't see colour?" "What if the radio signal drops out here?"`,
        ],
      },
      {
        title: `Pitch and Peer Challenge (15 minutes)`,
        points: [
          `Activity: Each team pitches their design to the class in under 2 minutes, then fields one challenge question from a rival team — mirroring how real conservation technology proposals are questioned and improved before funding.`,
          `Class votes (or teacher scores) on which design best combines the month's technologies with clear reasoning, not just the most technology crammed in.`,
          `Debrief: technology works best as a system, not a single silver-bullet tool — exactly the lesson Baba Farai lives by on patrol.`,
        ],
      },
    ],
    exitTicket: `Write one sentence: which TWO technologies from this month worked best together in your design, and why?`,
    faith: {
      ponder: `Colossians reminds us to give our whole heart to whatever we do, as if doing it for God Himself — not for the applause of the pitch, but because the work itself matters. Today's challenge is a chance to offer real effort toward something worth protecting.`,
      verse: `Whatever you do, work at it with all your heart.`,
      ref: `Colossians 3:23 (NIV)`,
      value: `Manaaki  Serve`,
      valueDesc: `Combining our best thinking to serve a real need — even a pretend reserve, standing in for a real one — is Manaaki in action: using our gifts fully, not half-heartedly.`,
      questions: [
        `Why do you think God cares about the EFFORT we put in, not just whether our idea "wins"?`,
        `Your team had to combine different tools to solve one problem. How is that like the way God gives different gifts to different people in a team, a class, or a church?`,
        `Tapiwa says a good ranger "doesn't just have one tool." What are some different "tools" — skills, gifts, strengths — your own team brought to today's challenge?`,
      ],
    },
    resources: [
      `Blank annotated reserve maps, one per team`,
      `Challenge question cards (one per rival team, for the pitch stage)`,
      `Simple pitch evaluation/peer-feedback sheets`,
    ],
    videos: [
      { title: `How conservation technology works together`, search: `wildlife conservation technology ranger tools combined`, why: `Reinforces the consolidation theme — that real conservation success usually comes from combining tools, not relying on one.` },
    ],
    studentAgency: {
      art: { title: `Illustrate Your Monitoring Plan`, body: `Create a clear, labelled illustration of your team's final reserve design.\n\n**Reflection Prompt:** If you had to explain your design to someone in 10 seconds, what would you say first?` },
      readWrite: { title: `Write the Pitch Script`, body: `Write out your team's 2-minute pitch as a script, ready to present.\n\n**Word Count Guide:** 150–200 words.\n\n**Reflection Prompt:** What's the strongest piece of reasoning in your pitch, and why?` },
      technology: { title: `Digital Reserve Map`, body: `Recreate your team's monitoring plan digitally (Canva, Google Drawings, or similar), with labels for each technology used.\n\n**Reflection Prompt:** What did turning your sketch digital make you reconsider?` },
      watchReview: { title: `Watch and Note: Conservation Technology in Action`, body: `Watch a short video on how real conservation teams combine different technologies.\n\n**Search term:** "wildlife conservation technology ranger tools combined"\n\n**Reflection Prompt:** What combination of tools did you notice, and did it match your team's design?` },
    },
  },
},

// ============================== WEEK 6 — CROSSING THE BORDER ==============================
{
  week: 6,
  lesson: {
    day: `Thursday`, strand: `Technology`, sessionLabel: `Flight Log 24: Following From the Sky`,
    topic: `FOLLOWING FROM THE SKY — GPS Collars and Elephant Movement`,
    curriculumArea: `Technology`,
    aos: [
      `Technological Systems: understand that a technological system's outputs can be used as inputs into another system, such as a collar feeding data into a monitoring map.`,
      `Nature of Technology: understand that technology can help balance the needs of people and the needs of wildlife.`,
    ],
    keyCompetencies: `Thinking; Relating to Others`,
    learningIntentions: [
      `We are learning how a GPS satellite collar works and what data it actually collects.`,
      `We are learning how tracking elephant movement can help prevent conflict between elephants and nearby farms and villages.`,
      `I can interpret a simple set of GPS movement data and explain what it might mean.`,
    ],
    assessment: `Teacher observation of the data-interpretation activity and discussion; review of written explanations linking GPS data to real decision-making.`,
    introduction: `The route crosses into South Africa for the first time, and for once it's Nomvula who's quiet, taking in a bigger, busier world than her village. Tapiwa fills the silence, predictably: "Sharp, crew — you know what doesn't get lost, even out here? A collared elephant. Not with the tech my dad's team uses."

Wonder question: elephants can walk 50 kilometres or more in a single day. How could researchers possibly know exactly where a whole herd has been, without following it on foot the entire way?`,
    mainContent: [
      {
        title: `How a GPS Collar Works (10 minutes)`,
        points: [
          `Teacher Input: A GPS (Global Positioning System) collar contains a receiver that picks up signals from satellites orbiting Earth, calculates its own position from those signals, and stores or transmits that location at set intervals — building up a trail of exactly where the animal has been.`,
          `Explain simply: several satellite signals are needed together to work out one precise position — students don't need the maths, just the idea that multiple signals combine to pinpoint one spot.`,
          `Key Question: "Why might researchers want a location every hour, rather than just once a day?"`,
        ],
      },
      {
        title: `Reading Real Movement Data (15 minutes)`,
        points: [
          `Activity: In groups, students are given a simplified table or map of GPS "ping" points for a fictional elephant herd over one week, and must plot the route and describe the pattern (e.g., moving toward water each evening, avoiding a particular area during the day).`,
          `Discuss: what could explain a sudden change in the pattern (finding water, avoiding a threat, moving toward farmland)?`,
        ],
      },
      {
        title: `From Data to Decisions: Preventing Conflict (10 minutes)`,
        points: [
          `Teacher Input: Explain that when GPS data shows a herd heading toward farmland or a village, rangers and conservation teams can sometimes warn communities in advance — giving both people and elephants a chance to avoid a dangerous, costly encounter.`,
          `Discuss: this is technology serving BOTH people and animals at once, not choosing one over the other — a theme the class will meet again next week.`,
          `Key Question: "Why is preventing a conflict usually better than only reacting after it happens?"`,
        ],
      },
    ],
    exitTicket: `Write one sentence: what is ONE piece of information a GPS collar gives researchers, and how could it help prevent a problem before it happens?`,
    faith: {
      ponder: `Psalm 139 describes a God who already knows every place we could ever go, before we go there. A GPS collar can only track where an elephant has been — but God's knowledge of where we are, and where we're headed, is complete and unending.`,
      verse: `Where can I go from your Spirit? Where can I flee from your presence?`,
      ref: `Psalm 139:7 (NIV)`,
      value: `Mōhio  Know`,
      valueDesc: `Tracking technology helps us know an animal's path in part; knowing that God already knows the whole of every path — ours included — is a much bigger comfort.`,
      questions: [
        `A GPS collar only knows where an elephant has already been. Psalm 139 says God knows where we're going before we even get there. How does that make you feel?`,
        `Why do you think it matters to use tracking technology to help BOTH elephants and the people living nearby, rather than choosing a side?`,
        `Is there somewhere you've felt like nobody knew where you were or what you were going through? What does it mean that God always does?`,
      ],
    },
    resources: [
      `Simplified GPS "ping" data tables/maps, one set per group`,
      `Southern Africa outline map for plotting movement`,
      `Coloured pencils/markers for tracing routes`,
    ],
    videos: [
      { title: `How GPS satellite collars track wildlife`, search: `GPS tracking collar elephants how it works`, why: `Explains the real technology behind today's lesson in an age-appropriate way.` },
      { title: `Elephants and human-wildlife conflict solutions`, search: `elephant tracking preventing human wildlife conflict Africa`, why: `Connects today's data lesson to the real-world purpose — protecting both people and elephants.` },
    ],
    studentAgency: {
      art: { title: `Map an Elephant's Week`, body: `Draw and label a simple map showing an imagined elephant herd's movement over one week, based on today's data patterns.\n\n**Reflection Prompt:** What real need (water, food, safety) explains each part of your route?` },
      readWrite: { title: `A Researcher's Data Summary`, body: `Write a short summary, in role as a researcher, explaining what a week of GPS data revealed about a herd's movement and what action (if any) it suggests.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What decision did your data lead you to recommend?` },
      technology: { title: `Plot Data Digitally`, body: `Use a simple spreadsheet or drawing tool to plot the week's GPS points and connect them into a route.\n\n**Reflection Prompt:** What was easier to see once the data was visual instead of just numbers?` },
      watchReview: { title: `Watch and Note: GPS Collars in Action`, body: `Watch a short video on GPS tracking collars and elephant movement.\n\n**Search term:** "GPS tracking collar elephants how it works"\n\n**Reflection Prompt:** What part of the technology did you not expect?` },
    },
  },
},

// ============================== WEEK 7 — THE VILLAGE OF GOGO THANDIWE ==============================
{
  week: 7,
  lesson: {
    day: `Thursday`, strand: `Technology`, sessionLabel: `Flight Log 29: The Buzz That Builds Peace`,
    topic: `THE BUZZ THAT BUILDS PEACE — Beehive Fences and Elephant-Safe Farming`,
    curriculumArea: `Technology`,
    aos: [
      `Nature of Technology: understand that a good technological solution often solves more than one problem at once, and considers the needs of multiple groups.`,
      `Technological Practice: understand the value of a simple, low-cost solution over a complex one, when it meets the need effectively.`,
    ],
    keyCompetencies: `Thinking; Relating to Others`,
    learningIntentions: [
      `We are learning how a beehive fence works and why elephants naturally avoid bees.`,
      `We are learning that a genuinely clever technology solution doesn't have to be expensive or complicated to be effective.`,
      `I can explain how one invention can benefit two different groups (farmers and elephants) at the same time.`,
    ],
    assessment: `Teacher observation of the design-reasoning discussion and diagram activity; review of written explanations linking the invention to real needs on both sides.`,
    introduction: `The crew lands in Nomvula's village, where the air hums — literally — near the edge of Gogo Thandiwe's fields. "Listen," Nomvula says, pride creeping into her voice for the first time in a while. "That's not just bees. That's the fence that keeps my grandmother's crops safe, and the elephants too."

Wonder question: elephants are some of the strongest animals on land — strong enough to push through almost any ordinary fence. So what could possibly stop one, without hurting it?`,
    mainContent: [
      {
        title: `The Problem: Elephants and Farms in the Same Space (8 minutes)`,
        points: [
          `Teacher Input: As farmland and elephant territory increasingly overlap across parts of Africa, elephants sometimes raid crops — a real problem for family food security, and one that can lead to elephants being harmed in response. A genuinely useful solution needs to protect crops WITHOUT harming elephants.`,
          `Key Question: "If a fence needs to be strong enough to stop an elephant but not hurt it, what problem does that create for a fence-builder?"`,
        ],
      },
      {
        title: `The Beehive Fence Solution (12 minutes)`,
        points: [
          `Teacher Input: Explain the real invention — beehives are hung on wires strung between posts around a field. If an elephant brushes the wire, the hives swing and disturb the bees, which the elephant hears and smells and instinctively avoids, since bees can sting sensitive areas like the trunk and around the eyes.`,
          `Explain why this works so well: it uses the elephant's OWN natural instinct rather than force, is far cheaper than an electric fence, and gives farmers a bonus — honey to sell or use, alongside protecting their crops.`,
          `Key Question: "Why might a solution that works WITH an animal's natural behaviour be better than one that tries to overpower it?"`,
        ],
      },
      {
        title: `Design Reasoning Challenge (10 minutes)`,
        points: [
          `Activity: In pairs, students list every group who benefits from a beehive fence (farmers, elephants, bees/pollinators, the wider community) and how each one benefits — building toward the idea of a genuinely "win-win" technology.`,
          `Discuss: this connects directly to this week's pollinators lesson — the bees themselves are doing double duty, protecting the field AND pollinating it.`,
        ],
      },
    ],
    exitTicket: `Write one sentence: explain, in your own words, why a beehive fence protects elephants as much as it protects the farm.`,
    faith: {
      ponder: `Psalm 8 marvels that God gave people real responsibility over creation — not to dominate it carelessly, but to care for it wisely. A beehive fence is a small, beautiful picture of that kind of care: clever enough to protect a family's crops without harming the very creature it's keeping out.`,
      verse: `You made him ruler over the works of your hands.`,
      ref: `Psalm 8:6 (NIV)`,
      value: `Aroha (World)`,
      valueDesc: `Loving the world God made sometimes looks like finding a clever solution that protects people AND protects animals, instead of assuming it always has to be one or the other.`,
      questions: [
        `Psalm 8 says God gave people responsibility over creation. What kind of responsibility do you think that is — control, or care? What's the difference?`,
        `The beehive fence protects Gogo Thandiwe's crops without harming the elephants outside them. Can you think of another situation where two different needs could both be met, if someone thought creatively?`,
        `What's one clever, low-cost way YOU could solve a problem this week, instead of reaching for the most expensive option first?`,
      ],
    },
    resources: [
      `Diagram of a beehive fence (posts, wire, hanging hives) around a field`,
      `Simple "who benefits" worksheet for the design reasoning activity`,
      `Reference photos of real beehive fence projects, if available`,
    ],
    videos: [
      { title: `How beehive fences protect farms from elephants`, search: `beehive fence elephants deterrent Africa`, why: `Shows the real invention referenced in this lesson and how it works in practice.` },
      { title: `Elephants and bees: the science of why it works`, search: `why elephants afraid of bees`, why: `Explains the natural behaviour the invention relies on, deepening understanding of WHY the solution is clever.` },
    ],
    studentAgency: {
      art: { title: `Diagram a Beehive Fence`, body: `Draw and label a diagram of a beehive fence around a field, showing posts, wire and hives.\n\n**Reflection Prompt:** What part of your diagram shows HOW the fence actually works, not just what it looks like?` },
      readWrite: { title: `A Farmer's Perspective`, body: `Write a short piece, in role as a farmer near Gogo Thandiwe's village, explaining why you chose a beehive fence over an electric one.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What trade-off did you consider before deciding?` },
      technology: { title: `List the "Win-Win" Chain`, body: `Create a simple diagram or flowchart showing every group that benefits from a beehive fence, and how.\n\n**Reflection Prompt:** Which benefit surprised you most when you mapped it out?` },
      watchReview: { title: `Watch and Note: Beehive Fences`, body: `Watch a short video on real beehive fence projects.\n\n**Search term:** "beehive fence elephants deterrent Africa"\n\n**Reflection Prompt:** What part of the invention did you think was the cleverest, and why?` },
    },
  },
},

// ============================== WEEK 8 — INDEPENDENCE DAY ==============================
{
  week: 8,
  lesson: {
    day: `Thursday`, strand: `Technology`, sessionLabel: `Flight Log 34: Eyes That Never Sleep`,
    topic: `EYES THAT NEVER SLEEP — Drones, Thermal Cameras and Modern Ranger Patrols`,
    curriculumArea: `Technology`,
    aos: [
      `Technological Systems: understand how several different technologies can be combined into one patrol system.`,
      `Nature of Technology: understand that new technologies raise new questions about how they should be used responsibly.`,
    ],
    keyCompetencies: `Thinking; Managing Self`,
    learningIntentions: [
      `We are learning how drones and thermal cameras extend what a ranger team can see, especially at night.`,
      `We are learning what patrol-management software does and why logging data carefully matters.`,
      `I can explain how combining several modern technologies creates a stronger patrol system than any one on its own.`,
    ],
    assessment: `Teacher observation of the patrol-planning activity and discussion; review of written explanations for understanding of how combined systems reduce blind spots.`,
    introduction: `It's Independence Day, and the whole route feels lighter — music somewhere in the distance, Tapiwa unusually still for once, watching a small aircraft-shaped kite someone's flying nearby. "Sekuru Josiah used to fly the whole night sky just with instruments and instinct," he says. "These days, my dad's team has a few more eyes than that."

Wonder question: a rhino poacher is far more likely to move at night. So how do you patrol a reserve the size of a small country, in the dark, when you can't see very far by torchlight?`,
    mainContent: [
      {
        title: `Seeing in the Dark: Thermal Cameras (10 minutes)`,
        points: [
          `Teacher Input: A thermal camera doesn't detect light like a normal camera — it detects heat, showing warm shapes (a person, an animal) as a glowing outline even in total darkness or thick bush, because living bodies are almost always warmer than their surroundings.`,
          `Discuss: why might this be especially useful for a night patrol looking for both wildlife AND people who shouldn't be there?`,
        ],
      },
      {
        title: `Eyes in the Sky: Drones (10 minutes)`,
        points: [
          `Teacher Input: A drone (small remote-controlled aircraft) fitted with a thermal or regular camera can cover a huge area quickly from above, spotting things a ground patrol on foot might walk right past — while keeping the ranger team safely at a distance.`,
          `Discuss trade-offs honestly: drones need trained pilots, batteries run out, and they work best alongside ground teams, not instead of them.`,
        ],
      },
      {
        title: `Bringing It Together: Patrol-Planning Simulation (15 minutes)`,
        points: [
          `Activity: In teams, students plan a night patrol route for a reserve map, deciding where to use ground patrol, where a drone sweep would help most, and where a fixed camera trap (from Week 3) would be the better tool — justifying each choice.`,
          `Teams share one decision and the reasoning behind it.`,
          `Key Question: "Why is combining several technologies usually stronger than choosing just the newest or most impressive one?"`,
        ],
      },
    ],
    exitTicket: `Write one sentence: name ONE way a drone or thermal camera helps rangers do something they couldn't do on foot alone.`,
    faith: {
      ponder: `Nehemiah's people didn't just build — they kept watch, day and night, while they worked, because they knew the threat was real. Modern rangers do something similar: careful, constant vigilance, using every tool available, because what they're protecting matters enough to stay alert for.`,
      verse: `We prayed to our God and posted a guard day and night.`,
      ref: `Nehemiah 4:9 (NIV)`,
      value: `Manaaki  Serve`,
      valueDesc: `Manaaki includes the quiet, unglamorous kind of service — staying alert, keeping watch, showing up night after night for something worth protecting.`,
      questions: [
        `Nehemiah's people prayed AND posted a guard — they trusted God, but they still did the hard, practical work too. Why do you think both mattered?`,
        `Rangers use drones and thermal cameras to stay watchful even when they're tired. What helps YOU stay faithful to something even when it's hard or tiring?`,
        `What is something worth "keeping watch" over in your own life or community?`,
      ],
    },
    resources: [
      `Blank reserve patrol maps, one per team`,
      `Diagram/photo examples of thermal camera imagery (heat-shape outlines), if available`,
      `Diagram of a simple drone with a camera attached`,
    ],
    videos: [
      { title: `How thermal cameras help anti-poaching patrols`, search: `thermal camera anti-poaching night patrol Africa`, why: `Shows the real application of thermal imaging technology referenced in this lesson.` },
      { title: `Drones used in wildlife conservation`, search: `drones wildlife conservation anti-poaching Africa`, why: `Demonstrates real drone use in African conservation, grounding today's design activity.` },
    ],
    studentAgency: {
      art: { title: `Design a Patrol Map`, body: `Create a labelled patrol map showing where ground teams, drones and camera traps would each be used across one night.\n\n**Reflection Prompt:** Which area of your map relies on more than one technology, and why?` },
      readWrite: { title: `A Night Patrol Report`, body: `Write a short report, in role as a ranger, summarising what a night patrol using drones and thermal cameras found.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What did the combined technologies let you notice that a single tool might have missed?` },
      technology: { title: `Compare the Technologies`, body: `Create a simple comparison chart of ground patrol, drones and camera traps — strengths and weaknesses of each.\n\n**Reflection Prompt:** Which technology would you trust least on its own, and why?` },
      watchReview: { title: `Watch and Note: Modern Ranger Technology`, body: `Watch a short video on drones or thermal cameras used in anti-poaching work.\n\n**Search term:** "drones wildlife conservation anti-poaching Africa"\n\n**Reflection Prompt:** What part of the technology impressed you most?` },
    },
  },
},

// ============================== WEEK 9 — LOOKING AHEAD ==============================
{
  week: 9,
  lesson: {
    day: `Thursday`, strand: `Technology`, sessionLabel: `Flight Log 39: Blueprints for Tomorrow`,
    topic: `BLUEPRINTS FOR TOMORROW — Planning the Conservation Tech Expo`,
    curriculumArea: `Technology`,
    aos: [
      `Technological Practice: undertake planning to guide the development of an outcome, identifying key considerations and stakeholders.`,
      `Nature of Technology: understand that technological outcomes are evaluated in terms of how well they meet the need or opportunity they were developed for.`,
    ],
    keyCompetencies: `Thinking; Managing Self; Participating and Contributing`,
    learningIntentions: [
      `We are learning to choose an endangered Southern African animal and identify a real, specific problem affecting it.`,
      `We are learning to apply the technological design process (plan, create, evaluate) to invent a device or system that could help.`,
      `I can plan a project, including what I'll need and how I'll know if it worked.`,
    ],
    assessment: `Teacher observation of the planning process; review of completed planning templates for clarity of problem definition and realistic evaluation criteria.`,
    introduction: `Both Tapiwa and Nomvula sound different this week — a little older, somehow. "Sekuru Josiah always says the whole point of learning something is being able to pass it on," Tapiwa says. "So here's your chance. Next week, it's not us teaching you. It's you, showing everyone what you've learned."

Wonder question: out of everything you've learned this term — tracking, radios, camera traps, DNA tracing, GPS collars, beehive fences, drones — if you had to invent ONE new idea to help protect a specific animal, what problem would you choose to solve?`,
    mainContent: [
      {
        title: `Choosing an Animal and a Real Problem (10 minutes)`,
        points: [
          `Teacher Input: Remind students of the specific animals and challenges met this term (rhino poaching, elephant-human conflict, predator monitoring) and any others they know of. Emphasise choosing ONE specific, real problem rather than a vague one — "help elephants" is too broad; "warn a village before elephants reach the crops" is a real, solvable problem.`,
          `Activity: individually or in pairs, students choose their animal and write a single clear sentence describing the specific problem they will try to solve.`,
        ],
      },
      {
        title: `Applying the Design Process (15 minutes)`,
        points: [
          `Teacher Input: Walk through the technological design process the class has been using all term without necessarily naming it: Plan (what's the problem, who needs it, what materials/ideas are available), Create (sketch or build a first version), Evaluate (would it actually solve the problem — what are its limits).`,
          `Activity: students complete a simple planning template — problem, chosen technology idea (can combine ideas from the term, e.g. a camera trap plus an alert system), materials needed, and one way they'll know if it worked.`,
          `Circulate and prompt with the same kind of challenge questions used in Week 5's Boss Battle.`,
        ],
      },
      {
        title: `Peer Feedback (10 minutes)`,
        points: [
          `Activity: students swap plans with a partner and give one honest piece of feedback: one strength, and one question that would make the plan stronger.`,
          `Key Question: "What is the difference between a good idea and a plan that could actually be built and tested?"`,
        ],
      },
    ],
    exitTicket: `Write one sentence: what specific problem will your Conservation Tech Expo project try to solve, and for which animal?`,
    faith: {
      ponder: `Ephesians reminds us that we are God's own handiwork, made on purpose, for good work prepared in advance for us to do. Planning something that could genuinely help protect a real animal is a small taste of stepping into that kind of purposeful, good work.`,
      verse: `We are God's handiwork, created to do good works.`,
      ref: `Ephesians 2:10 (NIV, shortened)`,
      value: `Manaaki  Serve`,
      valueDesc: `Careful planning — not just a good idea, but a plan someone could actually act on — is itself a form of faithful service with the gifts God has given us.`,
      questions: [
        `Ephesians says we were made for "good works prepared in advance." Do you think God cares about small, practical plans like this one, or only "big" things? Why?`,
        `Tapiwa and Nomvula are learning to pass on what they know, the way Sekuru Josiah passed it to them. Who has passed something valuable on to YOU, and what will you do with it?`,
        `What is one piece of feedback you received today that will genuinely make your plan better?`,
      ],
    },
    resources: [
      `Conservation Tech Expo planning templates, one per student/pair`,
      `List/reminder cards of the term's technologies (tracking, radios, camera traps, DNA tracing, GPS collars, beehive fences, drones) for inspiration`,
      `Peer feedback slips`,
    ],
    videos: [
      { title: `Young inventors solving conservation problems`, search: `young inventors wildlife conservation technology students`, why: `Shows relatable, age-appropriate examples of real people designing solutions, to inspire students' own planning.` },
    ],
    studentAgency: {
      art: { title: `Sketch Your First Design`, body: `Create a labelled first-draft sketch of your Conservation Tech Expo idea.\n\n**Reflection Prompt:** What is the one feature of your design that solves the actual problem, specifically?` },
      readWrite: { title: `Write Your Project Pitch`, body: `Write a short pitch explaining your chosen animal, the problem, and your idea.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What is the strongest sentence in your pitch, and why?` },
      technology: { title: `Build a Digital Planning Board`, body: `Use a simple document or slide to organise your plan under headings: Problem, Idea, Materials, How I'll Know It Worked.\n\n**Reflection Prompt:** Which heading was hardest to fill in clearly, and why?` },
      watchReview: { title: `Watch and Note: Young Conservation Inventors`, body: `Watch a short video about young people inventing conservation solutions.\n\n**Search term:** "young inventors wildlife conservation technology students"\n\n**Reflection Prompt:** What is one thing their process has in common with yours?` },
    },
  },
},

// ============================== WEEK 10 — BOSS BATTLE 2: THE LEGACY TRIAL ==============================
{
  week: 10,
  lesson: {
    day: `Thursday`, strand: `Technology`, sessionLabel: `The Legacy Trial — Station 4: The Route-Keepers' Invention`,
    topic: `THE ROUTE-KEEPERS' INVENTION — Conservation Tech Expo Showcase`,
    curriculumArea: `Technology`,
    aos: [
      `Technological Practice: evaluate an outcome against the need or opportunity it was developed for, using feedback.`,
      `Nature of Technology: understand how technology reflects the values and priorities of the people who create it.`,
    ],
    keyCompetencies: `Thinking; Participating and Contributing; Relating to Others`,
    learningIntentions: [
      `We are learning to present a finished (or model/prototype) technology idea clearly, explaining the problem it solves and how.`,
      `We are learning to evaluate our own and others' work honestly, using the term's learning as the standard.`,
      `I can reflect on how the whole term's Technology learning has changed the way I think about protecting animals.`,
    ],
    assessment: `Teacher observation and rubric-based assessment of the Expo showcase presentations, evaluating clarity of problem definition, technical reasoning, and use of the term's learning. Peer feedback recorded.`,
    introduction: `The logbook lies open one final time, every leg of the route glowing faintly across its pages — Hwange, the Zambezi, the reserve, the border, Gogo Thandiwe's village, all the way home. "Sharp, crew," Tapiwa says, and for once his voice doesn't crack a joke early. "Sekuru Josiah always said a route only really matters if someone else can fly it after you. So today... you show us what you'd build." Nomvula, bracelet finished at last, adds quietly: "That's the pattern of it. You're not visitors on this route anymore."

Wonder question: after everything you've learned this term, what would YOU build, right now, if you knew it could genuinely help protect one real animal?`,
    mainContent: [
      {
        title: `Final Preparation (10 minutes)`,
        points: [
          `Teacher Input: Give students final time to complete their model, prototype, poster or diagram from last week's plan, using the planning template as their guide.`,
          `Remind the class of the success criteria: clearly explain the problem, the technology idea, why it would work, and one honest limitation.`,
        ],
      },
      {
        title: `Conservation Tech Expo Showcase (20 minutes)`,
        points: [
          `Activity: students present their finished (or in-progress) Conservation Tech Expo project in small groups or to the whole class, in the style of a real expo — explaining their chosen animal, the specific problem, and how their idea helps.`,
          `Audience members ask at least one genuine question per presentation, echoing the challenge-and-improve culture built since Week 5's Boss Battle.`,
        ],
      },
      {
        title: `Reflecting on the Whole Term (10 minutes)`,
        points: [
          `Teacher Input: Guide a class discussion connecting the dots across the whole term's Technology strand — from San spoor-reading in Week 1 to today's original inventions — asking what stayed the same about GOOD technology the whole way through (it solves a real problem, for a real need, honestly evaluated).`,
          `Key Question: "What is one thing you now understand about technology that you didn't understand in Week 1?"`,
        ],
      },
    ],
    exitTicket: `Write one sentence: what is the single most useful thing you learned this term about how technology helps protect animals?`,
    faith: {
      ponder: `Jesus said to let our light shine, not for our own praise, but so that others would see good works and glorify God because of them. The Conservation Tech Expo is exactly that kind of moment — the class's best effort, offered outward, for something and Someone bigger than themselves.`,
      verse: `Let your light shine before others, so they may see your good deeds.`,
      ref: `Matthew 5:16 (NIV, shortened)`,
      value: `Manaaki  Serve`,
      valueDesc: `Showcasing our best work isn't about being praised for talent — it's Manaaki completed: using our gifts fully, and letting that service point beyond ourselves.`,
      questions: [
        `Why do you think Jesus said to let our good works be SEEN, instead of keeping them hidden — when so much of the Bible also talks about humility?`,
        `Tapiwa and Nomvula say the class isn't just "visitors on this route" anymore. What do you think they mean by that?`,
        `Looking back over the whole term's Technology learning — from tracking to today's invention — what is one thing you'd want to "pass on" to someone else, the way Sekuru Josiah passed his knowledge on?`,
      ],
    },
    resources: [
      `Student Conservation Tech Expo projects/prototypes/posters from Week 9 planning`,
      `Simple presentation/assessment rubric`,
      `Peer question prompt cards, if helpful for shy presenters`,
    ],
    videos: [
      { title: `Real conservation technology innovations`, search: `new wildlife conservation technology innovations`, why: `A closing, forward-looking video connecting the class's own inventions to real, ongoing innovation in the field.` },
    ],
    studentAgency: {
      art: { title: `Finalise Your Expo Display`, body: `Complete a polished, labelled final version of your project's poster, model or diagram for the showcase.\n\n**Reflection Prompt:** What one change did you make since last week's first draft, and why?` },
      readWrite: { title: `Write Your Term Reflection`, body: `Write a short reflection on how your understanding of conservation technology changed across the term, from Week 1's tracking lesson to today.\n\n**Word Count Guide:** 120–180 words.\n\n**Reflection Prompt:** What surprised you most about the term's Technology learning?` },
      technology: { title: `Record a Short Pitch Video/Audio`, body: `If equipment allows, record a short (under 1 minute) pitch of your project, as if presenting to a real conservation organisation.\n\n**Reflection Prompt:** What did explaining it out loud make you realise you needed to clarify?` },
      watchReview: { title: `Watch and Note: Real Conservation Innovation`, body: `Watch a short video on current real-world conservation technology innovations.\n\n**Search term:** "new wildlife conservation technology innovations"\n\n**Reflection Prompt:** Which real innovation is most similar to your own Expo project?` },
    },
  },
},

]

// Register these lesson plans into the shared app registry, additively (won't overwrite
// Monday/Tuesday/Wednesday/Friday entries once those are built into the same week object).
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'] = window.ALL_LESSON_PLANS['skybound-baobab-route'] || {}
SKYBOUND_THURSDAY_LESSONS.forEach(({ week, lesson }) => {
  window.ALL_LESSON_PLANS['skybound-baobab-route'][week] = window.ALL_LESSON_PLANS['skybound-baobab-route'][week] || {}
  window.ALL_LESSON_PLANS['skybound-baobab-route'][week][lesson.day] = lesson
})
