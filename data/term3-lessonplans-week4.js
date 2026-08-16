// Rich lesson-plan content for SKYBOUND: The Baobab Route (Term 3) — Week 4
// Monday (History) / Tuesday (Geography) / Wednesday (Science) / Friday (Art)
// Thursday (Technology) for this week already lives in data/term3-lessonplans-thursdays.js
// — this file follows the exact same structure (see that file's header notes), and the
// exact same story beats as data/term3.js Week 4, so introductions echo the actual dialogue
// from that file. Registers additively into window.ALL_LESSON_PLANS so it can sit alongside
// the Thursday file without overwriting it.
//
// Story continuity: this is "Storm Over the Reserve" — the term's first real worry, per
// the emotional arc in the planning document. Baba Farai's team is out dealing with poachers
// near the reserve this week; Tapiwa goes quiet and turns his wooden elephant carving over
// in his pocket on Wednesday, and Nomvula's half-finished bracelet appears on Friday as a
// gentler close to a hard week. The rhino crisis is handled honestly but age-appropriately —
// consequence and courage, not violence or graphic detail, per the character bible's hard
// rules — and Wednesday/Thursday both end by turning toward real people and real tools
// fighting for the animals, not just the threat itself.

const SKYBOUND_WEEK4_LESSONS = [

// ============================== MONDAY — HISTORY ==============================
{
  day: `Monday`, strand: `History`, sessionLabel: `Flight Log 16: A Kingdom on the Move`,
  topic: `A KINGDOM ON THE MOVE — The Mfecane and the Rise of the Ndebele Kingdom`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding the Past: understand how conflict, environment and movement have shaped the formation of communities and nations over time.`,
    `Understanding Place and Environment: understand how people respond to environmental pressures such as drought by moving and rebuilding elsewhere.`,
  ],
  keyCompetencies: `Thinking; Language, Symbols and Text`,
  learningIntentions: [
    `We are learning what the Mfecane was, and how drought and conflict pushed large movements of people across Southern Africa in the early 1800s.`,
    `We are learning that the Ndebele Kingdom — Nomvula's own people — rose out of this period of upheaval.`,
    `I can explain at least three possible reasons a community might choose to leave everything and rebuild somewhere new.`,
  ],
  assessment: `Teacher observation of the group discussion and reasoning; review of migration-route sketches for engagement with the scale of the movement.`,
  introduction: `The radio crackles with more static than usual today. "Sharp, crew," Tapiwa says, quieter than before. "Before I tell you today's history, you should know — it's connected to something happening right now, this week. But first, the story: in the early 1800s, drought and conflict pushed huge movements of people across this region — the Mfecane, it's called — and out of it, the Ndebele Kingdom rose. Whole nations, on the move, rebuilding somewhere new. Nomvula's people, actually. Her whole village traces back to it."

Wonder question: if drought and conflict forced your whole community to leave and rebuild somewhere completely new, what do you think would be hardest to leave behind?`,
  mainContent: [
    {
      title: `What Was the Mfecane? (10 minutes)`,
      points: [
        `Teacher Input: The Mfecane ("the crushing" or "scattering") was a period of major upheaval across Southern Africa in the early 1800s, driven by a combination of severe drought, competition for land and resources, and conflict between growing kingdoms — it caused large-scale migration and the reshaping of entire communities.`,
        `Explain that out of this period of movement and hardship, new nations formed, including the Ndebele Kingdom, whose people migrated and rebuilt in a new region — the same Ndebele heritage Nomvula's village traces back to today.`,
        `Key Question: "Why might drought AND conflict together push people to move, when either one alone might not?"`,
      ],
    },
    {
      title: `Leaving and Rebuilding (15 minutes)`,
      points: [
        `Activity: In groups, students discuss what might make a whole community decide to leave everything they know and rebuild somewhere entirely new, listing at least three possible reasons (e.g. lack of water, safety, land to farm, keeping the community together).`,
        `Groups share their reasons, and the class discusses which reasons feel most urgent versus which feel more like long-term planning.`,
        `Key Question: "What skills or knowledge would a community need to carry WITH them, even if they had to leave everything else behind?"`,
      ],
    },
    {
      title: `From Upheaval to a New Kingdom (10 minutes)`,
      points: [
        `Teacher Input: Explain that the Ndebele Kingdom that formed from this period became a significant and lasting nation in the region, with its own leadership, culture and identity — a reminder that difficult, disruptive periods in history can still lead to communities that endure and thrive.`,
        `Connect to today: Nomvula's village, its geometric wall art (Week 3) and beadwork traditions (this Friday) all trace back to this history of movement and rebuilding.`,
        `Key Question: "Why might a community that has had to rebuild once become especially good at holding onto what matters most to them?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE reason a community might have moved during the Mfecane, and explain why that reason makes sense to you.`,
  faith: {
    ponder: `The Mfecane was a genuinely hard chapter — drought, conflict, whole communities uprooted. Yet out of it came new nations that endured. The Psalms describe exactly this kind of hope: God as a refuge and strength precisely in seasons of real trouble, not only in easy ones.`,
    verse: `God is our refuge and strength, an ever-present help in trouble.`,
    ref: `Psalm 46:1 (NIV)`,
    value: `Mōhio  Know`,
    valueDesc: `Knowing that a community can face real upheaval and still rebuild something lasting helps us understand both history and hope more honestly.`,
    questions: [
      `Psalm 46 says God is "an ever-present help in trouble" — not only after trouble ends. What does it look like to trust that in the MIDDLE of a hard time, not just once it's over?`,
      `Nomvula's people rebuilt after huge upheaval. Has your own family or community ever had to rebuild after something hard? What helped?`,
      `Tapiwa sounds worried today, even before telling the history. What's one way you could be a steady presence for a friend who's worried about something, this week?`,
    ],
  },
  resources: [
    `Map of Southern Africa showing the approximate scale and direction of Mfecane-era migrations`,
    `Timeline showing the early 1800s in regional context`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `The Mfecane explained`, search: `Mfecane Southern Africa history explained migration`, why: `Gives students an age-appropriate overview of this period of upheaval and migration.` },
    { title: `The Ndebele Kingdom`, search: `Ndebele Kingdom history South Africa Zimbabwe`, why: `Connects the historical period directly to Nomvula's own heritage.` },
  ],
  studentAgency: {
    art: { title: `Draw a Migration Route`, body: `Draw a simple migration route on a map, imagining the journey a community might have taken during the Mfecane.\n\n**Instructions:**\n1. Sketch a simple regional map outline.\n2. Draw a dotted route from a starting point to a new settlement.\n3. Mark one obstacle (river, mountain, drought area) the community would have had to cross.\n\n**Reflection Prompt:** What was the hardest part of the journey to imagine — the distance, or the uncertainty of where it would end?` },
    readWrite: { title: `A Letter Before Leaving`, body: `Write a short letter in role as a young person in a community about to leave and rebuild somewhere new, describing how you feel.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What did you choose to focus on — what you were losing, or what you hoped to find?` },
    technology: { title: `Build a Migration Timeline`, body: `Using a simple document or slide tool, build a short timeline showing drought/conflict, migration, and the formation of a new kingdom.\n\n**Reflection Prompt:** Which stage of your timeline do you think took the longest, and why?` },
    watchReview: { title: `Watch and Note: The Mfecane`, body: `Watch a short video explaining the Mfecane and its impact.\n\n**Search term:** "Mfecane Southern Africa history explained migration"\n\n**Reflection Prompt:** What is one thing you learned that helped you understand why so many people were on the move at once?` },
  },
},

// ============================== TUESDAY — GEOGRAPHY ==============================
{
  day: `Tuesday`, strand: `Geography`, sessionLabel: `Flight Log 17: When the Rain Doesn't Come`,
  topic: `WHEN THE RAIN DOESN'T COME — The Kariba Dam, Water and Drought`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding Place and Environment: understand how water systems connect places, and how drought affects communities differently depending on their scale and reliance on that water.`,
  ],
  keyCompetencies: `Thinking; Participating and Contributing`,
  learningIntentions: [
    `We are learning what the Kariba Dam is and its role in providing water and electricity across the region.`,
    `We are learning that drought affects far more than one field — it ripples out to farms, electricity, wildlife and people all connected to the same water system.`,
    `I can identify at least three things that depend on the Zambezi's water and explain what happens to each in a drought.`,
  ],
  assessment: `Teacher observation of the mapping activity and group discussion; review of water-saving posters for clarity of message.`,
  introduction: `"The Kariba Dam is one of the biggest in the world — it holds back the Zambezi River, makes electricity for whole countries," Tapiwa says, sketching a wide dam wall across the page. "But when the rains fail, even something that huge feels small against the problem. Drought doesn't just dry out a field, crew — it changes everything downstream from it. I want you to see the whole picture, not just my mum's plot."

Wonder question: if one dam provides water and electricity for whole countries, what do you think happens to everyone downstream when the rains simply don't come?`,
  mainContent: [
    {
      title: `What Is the Kariba Dam? (10 minutes)`,
      points: [
        `Teacher Input: The Kariba Dam sits on the Zambezi River between Zambia and Zimbabwe, and is one of the largest dams in the world by reservoir volume — it generates hydroelectric power for both countries and supports Lake Kariba, a major source of water and fishing for the region.`,
        `Explain simply how a hydroelectric dam works: water held back by the dam flows through turbines to generate electricity, meaning the dam's water level directly affects how much power it can produce.`,
        `Key Question: "Why might a single dam being affected by drought cause problems for people who live nowhere near it?"`,
      ],
    },
    {
      title: `Mapping What Depends on the Water (15 minutes)`,
      points: [
        `Activity: In groups, students map out everything that depends on the Zambezi's water — farms, electricity generation, wildlife, drinking water, fishing, tourism — and discuss what happens to each specifically when a drought hits.`,
        `Groups present one dependency they mapped and explain the ripple effect of drought on it.`,
        `Key Question: "Which of these dependencies do you think would be affected FIRST when a drought begins, and which would take longer to feel the effects?"`,
      ],
    },
    {
      title: `Small Choices, Big Picture (10 minutes)`,
      points: [
        `Teacher Input: Explain that while a single family can't control rainfall, water-saving choices at a household level (shorter showers, fixing leaks, watering gardens carefully) add up across a whole community and can meaningfully ease pressure during drought.`,
        `Discuss: this connects "big picture" problems like a regional drought to genuinely useful "small choices" anyone can make.`,
        `Key Question: "What is one water-saving habit that would be easy for YOUR household to start this week?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE thing that depends on the Zambezi's water, and explain what happens to it in a drought.`,
  faith: {
    ponder: `Water sustains everything downstream of it — farms, power, animals, people — in a way that mirrors how deeply connected creation truly is. Scripture pictures God's provision the same way: not stingy or isolated, but flowing out to sustain a whole, interconnected world.`,
    verse: `He waters the mountains from his upper chambers; the land is satisfied by the fruit of his work.`,
    ref: `Psalm 104:13 (NIV)`,
    value: `Pānga  Impact`,
    valueDesc: `Recognising how one resource — water — ripples out to affect an entire region helps us see that even small, careful choices genuinely matter to a much bigger picture.`,
    questions: [
      `Psalm 104 pictures God watering the whole land, sustaining far more than any one person could see at once. How does thinking about the whole Zambezi system change how you think about "just" turning off a tap?`,
      `Tapiwa says "big picture, small choices — they're connected." Where else in your own life is a small daily choice actually connected to something much bigger?`,
      `What is one way you could be more careful with a resource this week — water or otherwise — because you know it affects more than just you?`,
    ],
  },
  resources: [
    `Map of the Zambezi River system showing Kariba Dam and Lake Kariba`,
    `Simple diagram of how a hydroelectric dam generates power`,
    `Blank poster template for the water-saving creative task`,
  ],
  videos: [
    { title: `The Kariba Dam explained`, search: `Kariba Dam Zambezi River hydroelectric explained`, why: `Gives students a clear visual introduction to the dam and how it works before the mapping activity.` },
  ],
  studentAgency: {
    art: { title: `Design a Water-Saving Poster`, body: `Design a simple poster encouraging water-saving at home, using one clear image and a short slogan.\n\n**Instructions:**\n1. Choose one water-saving habit to focus on.\n2. Sketch one clear, simple image supporting your message.\n3. Write a short, memorable slogan (under 8 words).\n\n**Reflection Prompt:** Why did you choose that particular habit to highlight over other options?` },
    readWrite: { title: `A Diary of Drought`, body: `Write a short diary entry in role as a farmer near the Zambezi during a drought year, describing what's changing around you.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What did you choose to worry about most in your diary entry, and why?` },
    technology: { title: `Map the Water Dependency Web`, body: `Using a simple drawing or slide tool, map at least four things that depend on the Zambezi's water, with a note on how drought affects each.\n\n**Reflection Prompt:** Which dependency in your map surprised you the most?` },
    watchReview: { title: `Watch and Note: The Kariba Dam`, body: `Watch a short video explaining the Kariba Dam and its role in the region.\n\n**Search term:** "Kariba Dam Zambezi River hydroelectric explained"\n\n**Reflection Prompt:** What is one fact about the dam's scale that surprised you?` },
  },
},

// ============================== WEDNESDAY — SCIENCE ==============================
{
  day: `Wednesday`, strand: `Science`, sessionLabel: `Flight Log 18: The Rhino Crisis`,
  topic: `THE RHINO CRISIS — Understanding Endangered Species and Conservation`,
  curriculumArea: `Science`,
  aos: [
    `Living World, Ecology: understand that human activity can threaten a species' survival, and that conservation efforts respond to this with real, evidence-based action.`,
  ],
  keyCompetencies: `Thinking; Relating to Others`,
  learningIntentions: [
    `We are learning what makes a species "endangered," and that rhino poaching is a real and serious threat facing Southern Africa today.`,
    `We are learning that real people and organisations are actively working to protect rhino populations.`,
    `I can explain why protecting one endangered species can matter to an entire ecosystem, not just to that species alone.`,
  ],
  assessment: `Teacher observation of the class discussion, handled with care given the sensitivity of the topic; review of awareness-symbol designs for evidence of engaged, thoughtful response.`,
  introduction: `Tapiwa goes quiet — properly quiet, not joke-quiet — turning a small wooden elephant over and over in his pocket. "Poachers," he says eventually. "Near the reserve. Dad's team is out right now." Nomvula's voice comes through, steady. "That's the pattern of it, crew — this is the hard week. Rhino poaching is real, and it's happening near people we love. But listen: there ARE people, and tools, fighting for them. I don't know if we can fix this one completely. I don't think anyone does. But we're not giving up on it either."

Wonder question: if protecting a rhino population takes real people, real tools and real effort, what do you think that effort actually looks like, day to day?`,
  mainContent: [
    {
      title: `What Does "Endangered" Mean? (10 minutes)`,
      points: [
        `Teacher Input: Explain "endangered" simply — a species whose population has dropped so low that it faces a real risk of dying out entirely, usually because of human activity such as habitat loss or, in the rhino's case, poaching for their horns.`,
        `Explain, gently and without graphic detail, that rhino are poached because their horns are illegally sold, despite having no proven medicinal value, and that this illegal trade has caused a serious decline in wild rhino populations across Africa.`,
        `Key Question: "Why do you think laws alone haven't been enough to stop this problem?"`,
      ],
    },
    {
      title: `Why One Species Matters to a Whole Ecosystem (10 minutes)`,
      points: [
        `Teacher Input: Explain that rhino are a "keystone" or ecologically important species — their grazing habits shape grassland and vegetation patterns in ways that affect many other species sharing their habitat, so losing rhino would change the whole ecosystem, not just remove one animal.`,
        `Discuss as a class: why protecting one endangered species can matter to an entire ecosystem, not just to that one animal.`,
        `Key Question: "Can you think of another animal we've studied this term whose loss might change more than just its own population?"`,
      ],
    },
    {
      title: `The People Fighting For Them (15 minutes)`,
      points: [
        `Teacher Input: Introduce, at an appropriate level of detail, the real people and organisations working to protect rhino — anti-poaching rangers (like Baba Farai), conservation scientists, and wildlife organisations — emphasising that this is an active, ongoing effort with real progress in many reserves.`,
        `Activity: As a class, discuss what qualities or skills these different roles (ranger, scientist, community educator) would each need to contribute to protecting rhino.`,
        `Key Question: "Which of these roles do you think you'd be best suited to, and why?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE reason protecting rhino matters beyond just the rhino itself.`,
  faith: {
    ponder: `This is a genuinely hard topic, and Tapiwa and Nomvula don't pretend otherwise — but they hold onto hope alongside the honesty. The Bible speaks often of caring for creation as something entrusted to us, and of hope that keeps working even when a problem feels too big to fully solve.`,
    verse: `The righteous care for the needs of their animals.`,
    ref: `Proverbs 12:10 (NIV)`,
    value: `Pānga  Impact`,
    valueDesc: `Choosing to care about a creature's wellbeing, and to keep working for it even without a guaranteed happy ending, is a real and honest way of bringing God's care into the world.`,
    questions: [
      `Proverbs says the righteous "care for the needs of their animals." Why do you think caring for creation is treated as a matter of character, not just a nice extra?`,
      `Nomvula says "I don't know if we can fix this one completely... but we're not giving up on it either." Is there a hard problem in your own life or community where that same attitude might help?`,
      `What is one small way you could show care for an animal or for creation this week, even if it feels like a small gesture against a big problem?`,
    ],
  },
  resources: [
    `Respectful, non-graphic images of rhino in their habitat, and of rangers on patrol`,
    `Simple diagram showing a rhino's role in shaping grassland vegetation`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Understanding the rhino conservation crisis`, search: `rhino conservation crisis explained for kids Africa`, why: `Gives students an age-appropriate, honest introduction to the topic, with a focus on real conservation response.` },
  ],
  studentAgency: {
    art: { title: `Design a Rhino Conservation Symbol`, body: `Design a simple awareness symbol for rhino conservation that could appear on a poster or badge.\n\n**Instructions:**\n1. Choose one clear message about rhino conservation.\n2. Sketch a simple, memorable symbol representing it.\n3. Add a short caption (under 6 words).\n\n**Reflection Prompt:** What made you choose that particular image to represent something as serious as this issue?` },
    readWrite: { title: `A Ranger's Reflection`, body: `Write a short, thoughtful reflection in role as a ranger like Baba Farai, describing why the work matters to them even when it's hard.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What did you choose to focus on — the difficulty of the work, or the reason it's worth doing?` },
    technology: { title: `Research a Conservation Organisation`, body: `Using approved resources, research one real organisation working to protect rhino, and note three facts about their work.\n\n**Reflection Prompt:** What is one thing this organisation does that you hadn't thought of as part of "conservation"?` },
    watchReview: { title: `Watch and Note: Rhino Conservation`, body: `Watch a short video about efforts to protect rhino populations.\n\n**Search term:** "rhino conservation crisis explained for kids Africa"\n\n**Reflection Prompt:** What is one thing that gave you hope after watching this?` },
  },
},

// ============================== FRIDAY — ART ==============================
{
  day: `Friday`, strand: `Art`, sessionLabel: `Flight Log 20: What a Colour Can Say`,
  topic: `WHAT A COLOUR CAN SAY — Beadwork and Southern African Colour Symbolism`,
  curriculumArea: `The Arts`,
  aos: [
    `Visual Arts, Communicating and Interpreting: understand and use symbolic elements, including colour, to communicate ideas and feelings intentionally.`,
  ],
  keyCompetencies: `Thinking; Relating to Others`,
  learningIntentions: [
    `We are learning that traditional Southern African beadwork uses colour as a real, shared language, not just decoration.`,
    `We are learning to design a pattern where each colour choice carries intentional meaning.`,
    `I can explain what my finished beadwork pattern communicates, using only its colours.`,
  ],
  assessment: `Teacher observation of the colour-code agreement and design process; review of finished patterns and explanations for evidence of intentional colour meaning.`,
  introduction: `"My gogo says every bead colour and pattern can communicate something, if you know the language," Nomvula says, turning her half-finished beadwork bracelet over in her hands — one bead further along than last time. "After this week, I wanted a gentler day — something that reminds us why we protect what we protect. Design your own bead pattern today, and give it real meaning, not just pretty colours."

Wonder question: if you could only communicate a feeling using colours, with no words at all, how would you even begin to choose which colour meant what?`,
  mainContent: [
    {
      title: `Colour as a Real Language (10 minutes)`,
      points: [
        `Teacher Input: Explain that in many Southern African beadwork traditions, colours are assigned shared, understood meanings within a community — for example, green often relating to land or growth, blue to water, red to courage or strength, and white to purity or peace — and that patterns combining these colours can communicate real messages.`,
        `Explain that, like Ndebele wall art (Week 3), this is a genuine symbolic language, not random decoration — a viewer who knows the "code" can read real meaning into a pattern.`,
        `Key Question: "Why might a community agree on shared colour meanings, instead of everyone choosing their own?"`,
      ],
    },
    {
      title: `Agreeing on a Class Colour Code (10 minutes)`,
      points: [
        `Activity: As a class, agree on a simple shared "colour code" — three or four colours and what each represents (e.g. green for land, blue for water, red for courage, white for hope) — before students design individually using that shared code.`,
        `Discuss briefly why agreeing on the code together, before designing, makes the finished patterns "readable" by the whole class.`,
        `Key Question: "What would happen if everyone used their own private meaning for each colour instead of a shared code?"`,
      ],
    },
    {
      title: `Beadwork Pattern Design (15 minutes)`,
      points: [
        `Activity: Using paper "beads" (coloured circles/squares) or real beads on string/card, students design a beadwork pattern inspired by traditional Southern African colour symbolism, using the class's agreed colour code to give their pattern intentional meaning.`,
        `Students plan their pattern's sequence before assembling it, deciding deliberately which meaning should stand out most.`,
        `Key Question: "Which colour did you use the most in your pattern, and does that reflect what you most wanted to say?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence explaining what your finished pattern says, using only its colours as your "words."`,
  faith: {
    ponder: `After a genuinely hard week, Nomvula reaches for something small and steady — one more bead, added carefully, meaning something real. The Bible often pictures faithfulness this way too: not one dramatic act, but small, meaningful additions, made steadily over time.`,
    verse: `Do not despise these small beginnings, for the Lord rejoices to see the work begin.`,
    ref: `Zechariah 4:10 (NLT)`,
    value: `Mōhio  Know`,
    valueDesc: `Knowing that a pattern's meaning is built one small, deliberate choice at a time helps us see that faithfulness is often made of small things, added steadily, not one big gesture.`,
    questions: [
      `Zechariah says God rejoices even in small beginnings, not just finished, impressive things. Nomvula's bracelet is only one bead further along — why might that still be worth celebrating?`,
      `After a hard week in the story, this lesson was deliberately made gentler. Why might it matter to have a "gentler day" sometimes, even when there's still a bigger problem out there?`,
      `What is one small, steady thing you could add to this week — like Nomvula's one more bead — that would mean something real over time?`,
    ],
  },
  resources: [
    `Paper "beads" (coloured circles/squares) or real beads on string/card`,
    `A simple reference sheet of traditional Southern African bead colour meanings`,
    `String, card, or paper strips for assembling patterns`,
  ],
  videos: [
    { title: `Southern African beadwork and colour meaning`, search: `African beadwork colour symbolism meaning explained`, why: `Gives students a respectful, visual grounding in the real tradition before designing their own pattern.` },
  ],
  studentAgency: {
    art: { title: `Extend Your Pattern`, body: `Take your finished beadwork pattern and design a second, shorter version using only your TWO most important colours.\n\n**Reflection Prompt:** What did you have to leave out, and did the message get clearer or less clear without it?` },
    readWrite: { title: `The Meaning Behind the Beads`, body: `Write out, in full sentences, what your finished pattern communicates and why you chose that particular colour sequence.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** Do you think someone using the same colour code as you would read your pattern the same way you meant it?` },
    technology: { title: `Design a Digital Bead Pattern`, body: `Using a simple drawing tool, design a digital version of a beadwork pattern using the class colour code.\n\n**Reflection Prompt:** What was harder to represent digitally — the colours, or the pattern's sequence?` },
    watchReview: { title: `Watch and Note: Beadwork Colour Symbolism`, body: `Watch a short video about Southern African beadwork and colour meaning.\n\n**Search term:** "African beadwork colour symbolism meaning explained"\n\n**Reflection Prompt:** What is one colour meaning that surprised you, or that you hadn't thought of before?` },
  },
},

]

// Register these lesson plans into the shared app registry, additively (won't overwrite
// Thursday's entry, already registered by data/term3-lessonplans-thursdays.js).
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'] = window.ALL_LESSON_PLANS['skybound-baobab-route'] || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'][4] = window.ALL_LESSON_PLANS['skybound-baobab-route'][4] || {}
SKYBOUND_WEEK4_LESSONS.forEach(lesson => {
  window.ALL_LESSON_PLANS['skybound-baobab-route'][4][lesson.day] = lesson
})
