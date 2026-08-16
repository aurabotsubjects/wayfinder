// Rich lesson-plan content for SKYBOUND: The Baobab Route (Term 3) — Week 8
// Monday (History) / Tuesday (Geography) / Wednesday (Science) / Friday (Art)
// Thursday (Technology) for this week already lives in data/term3-lessonplans-thursdays.js
// — this file follows the exact same structure (see that file's header notes), and the
// exact same story beats as data/term3.js Week 8, so introductions echo the actual dialogue
// from that file. Registers additively into window.ALL_LESSON_PLANS so it can sit alongside
// the Thursday file without overwriting it.
//
// Story continuity: this is "Independence Day" — a celebration chapter, per the planning
// document's emotional arc, with a happier, prouder tone after Week 7's heavier history.
// Matches the exact Bible references and values from the planning document's Faith
// Connections table for Week 8 (Monday: Galatians 5:1 / Pānga; Tuesday: Proverbs 31:14 /
// Manaaki; Wednesday: Psalm 104:30 / Aroha (World); Friday: Psalm 150:4 / Aroha).

const SKYBOUND_WEEK8_LESSONS = [

// ============================== MONDAY — HISTORY ==============================
{
  day: `Monday`, strand: `History`, sessionLabel: `Flight Log 31: The Day the Flag Changed`,
  topic: `THE DAY THE FLAG CHANGED — Independence in Zimbabwe and South Africa`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding How Societies Work: understand what independence and democratic self-determination mean for a country's people.`,
    `Understanding the Past: investigate significant national moments and what changed, and did not immediately change, because of them.`,
  ],
  keyCompetencies: `Thinking; Participating and Contributing`,
  learningIntentions: [
    `We are learning that Zimbabwe gained independence in 1980 and South Africa held its first democratic election in 1994.`,
    `We are learning what democracy and self-determination mean for a country's people.`,
    `I can name one thing that changes quickly on an independence day, and one thing that takes much longer to change.`,
  ],
  assessment: `Teacher observation of the class discussion; review of badge/flag designs for genuine engagement with what these days meant to real people.`,
  introduction: `Music drifts somewhere in the distance. Tapiwa's unusually still, watching a small kite shaped like an aircraft. "Independence Day, crew!" he says. "Zimbabwe in 1980, South Africa's first democratic election in 1994 — both huge moments, both about the same thing at heart: a country's people finally getting to choose for themselves. Sekuru Josiah says he still remembers exactly where he was flying the day it happened. Let's find out what democracy and self-determination actually meant, for real people, on those days."

Wonder question: what do you think would be the very first thing that felt different for a family, on the actual day their country became independent?`,
  mainContent: [
    {
      title: `Two Independence Days (12 minutes)`,
      points: [
        `Teacher Input: explain that Zimbabwe gained independence in 1980, ending British colonial rule and minority rule, and South Africa held its first fully democratic election in 1994, ending apartheid, with Nelson Mandela elected as its first democratically elected president.`,
        `Key Question: "Why do you think both of these moments involved an ELECTION or a change in who could vote and lead, rather than just a change of flag?"`,
      ],
    },
    {
      title: `What Changes, and What Takes Longer (13 minutes)`,
      points: [
        `Activity: as a class, discuss what might change quickly on a day like this (a flag, a national anthem, who holds office) and what might take much longer to change (economic opportunity, land ownership, everyday attitudes) — listing three of each.`,
        `Key Question: "Why do you think some kinds of change happen instantly, while others take generations?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE thing that changed quickly, and ONE thing that took much longer, after independence.`,
  faith: {
    ponder: `Paul writes that Christ set us free specifically FOR freedom — not just freedom from something, but freedom for something better. Independence Day, for Zimbabwe and South Africa alike, was exactly that kind of moment: freedom won not as an ending, but as a beginning.`,
    verse: `It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.`,
    ref: `Galatians 5:1 (NIV)`,
    value: `Pānga  Impact`,
    valueDesc: `Recognising that real freedom is meant to be used for something good, not just celebrated once, helps us see independence as a call to keep building justice, not just a finished achievement.`,
    questions: [
      `Paul says Christ set us free "for freedom," not just to end slavery. What do you think a country's freedom should be FOR, once it's won?`,
      `Sekuru Josiah remembers exactly where he was on Zimbabwe's independence day. Do you know a story like that from your own family's history?`,
      `Why might it matter to "stand firm" in freedom, even long after the actual day it was won?`,
    ],
  },
  resources: [
    `Simple, age-appropriate timeline of Zimbabwean and South African independence`,
    `Blank card/paper for badge or flag element designs`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Zimbabwe and South African independence, explained for kids`, search: `Zimbabwe independence 1980 South Africa 1994 election explained for kids`, why: `Gives students a clear, celebratory but honest overview of both independence moments before the class discussion.` },
  ],
  studentAgency: {
    art: { title: `Design a Commemorative Badge`, body: `Design a simple commemorative badge or flag element celebrating one of these independence days.\n\n**Instructions:**\n1. Choose Zimbabwe (1980) or South Africa (1994).\n2. Sketch a badge using colours and symbols meaningful to that country's independence.\n3. Add one short word or phrase capturing the feeling of that day.\n\n**Reflection Prompt:** What made you choose those particular colours or symbols?` },
    readWrite: { title: `A Letter on Independence Day`, body: `Write a short letter in role as a young person living through one of these independence days, describing what they hope will change.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What hope did you choose to include, and why that one?` },
    technology: { title: `Build a Two-Country Timeline`, body: `Using a simple digital tool, build a timeline comparing Zimbabwe's 1980 independence and South Africa's 1994 election.\n\n**Reflection Prompt:** What similarity between the two timelines stood out most?` },
    watchReview: { title: `Watch and Note: Two Independence Days`, body: `Watch a short video explaining both independence moments.\n\n**Search term:** "Zimbabwe independence 1980 South Africa 1994 election explained for kids"\n\n**Reflection Prompt:** What is one thing you learned that you hadn't known before today?` },
  },
},

// ============================== TUESDAY — GEOGRAPHY ==============================
{
  day: `Tuesday`, strand: `Geography`, sessionLabel: `Flight Log 32: From Field to Table`,
  topic: `FROM FIELD TO TABLE — Markets and Supply Chains`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding Place and Environment: understand how food moves from producer to consumer through markets and supply chains.`,
  ],
  keyCompetencies: `Thinking; Participating and Contributing`,
  learningIntentions: [
    `We are learning the steps food takes from a farm to a family's table, including markets and transport.`,
    `We are learning to connect this journey back to the subsistence and commercial farming studied earlier this term.`,
    `I can sequence the steps a crop takes from planting to reaching a dinner table.`,
  ],
  assessment: `Teacher observation of the sequencing activity; review of flow diagrams for accurate, logical steps in the supply chain.`,
  introduction: `"Farm to table isn't as simple as it sounds," Tapiwa says. "Markets, transport, storage — a lot has to happen between my mum's plot and someone's dinner plate. Let's trace the whole journey, connecting back to everything we've learned about farming this term."

Wonder question: how many different people do you think touch a single piece of fruit between the farm it grew on and your own dinner table?`,
  mainContent: [
    {
      title: `Recap: Two Kinds of Farming (8 minutes)`,
      points: [
        `Teacher Input: briefly recap subsistence farming (Week 2) and commercial farming (Week 3), reminding the class that food's journey to a table looks different depending on which kind of farming produced it.`,
        `Key Question: "Which of the two farming types do you think involves a LONGER supply chain, and why?"`,
      ],
    },
    {
      title: `Sequencing the Journey (17 minutes)`,
      points: [
        `Activity: as a class, sequence the steps a maize crop takes from planting to reaching a family's dinner table — planting, growing, harvesting, storage, transport, market/sale, and preparation — identifying where things could go wrong along the way (spoilage, transport delays, unfair pricing).`,
        `Key Question: "Which single step in the chain do you think is the MOST likely to go wrong, and why?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE step in the farm-to-table journey where something could go wrong.`,
  faith: {
    ponder: `Proverbs 31 describes a capable woman who "provides food for her family" with foresight and care — bringing food from distant places, planning ahead. The whole farm-to-table chain, at its best, is a shared act of exactly that kind of care for others.`,
    verse: `She is like the merchant ships, bringing her food from afar.`,
    ref: `Proverbs 31:14 (NIV)`,
    value: `Manaaki  Serve`,
    valueDesc: `Understanding the many hands and steps behind a simple meal helps us recognise farm-to-table work as real service — care for others carried out through careful, unglamorous effort.`,
    questions: [
      `Proverbs 31 praises someone who works hard so others can eat well. Who are the "hidden" people in a modern farm-to-table chain doing something similar?`,
      `Tapiwa says a lot has to happen between the field and the plate. Why might it be easy to forget all those steps when you're just hungry?`,
      `How could you show more gratitude for the people involved in getting food to YOUR table?`,
    ],
  },
  resources: [
    `Blank flow-diagram template for the farm-to-table sequence`,
    `Recap notes/images from Week 2 (subsistence) and Week 3 (commercial) farming lessons`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `How food gets from farm to table`, search: `farm to table supply chain explained for kids`, why: `Gives students a clear, simple grounding in supply chains before the class sequencing activity.` },
  ],
  studentAgency: {
    art: { title: `Draw a Farm-to-Table Flow Diagram`, body: `Draw a simple flow diagram showing "farm to table" for a crop of your choice.\n\n**Instructions:**\n1. Choose a crop studied this term (maize, tobacco, citrus, etc).\n2. Sketch each step from planting to plate as connected boxes or icons.\n3. Add one arrow labelled with a risk (e.g. spoilage, delay).\n\n**Reflection Prompt:** Which step took the longest to draw clearly, and why?` },
    readWrite: { title: `A Day in the Supply Chain`, body: `Write a short piece in role as one person in the farm-to-table chain (farmer, transporter, market seller), describing their part of the journey.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What made your chosen role's part of the journey challenging?` },
    technology: { title: `Build a Digital Supply Chain Map`, body: `Using a simple digital tool, build a map or flowchart showing the farm-to-table journey for a chosen crop.\n\n**Reflection Prompt:** Which part of your digital map would be hardest to represent as a real photo?` },
    watchReview: { title: `Watch and Note: Farm to Table`, body: `Watch a short video explaining how food travels from farm to table.\n\n**Search term:** "farm to table supply chain explained for kids"\n\n**Reflection Prompt:** What is one step in the chain you hadn't thought about before?` },
  },
},

// ============================== WEDNESDAY — SCIENCE ==============================
{
  day: `Wednesday`, strand: `Science`, sessionLabel: `Flight Log 33: The Dung Beetle's Big Job`,
  topic: `THE DUNG BEETLE'S BIG JOB — Decomposers in the Savanna`,
  curriculumArea: `Science`,
  aos: [
    `Living World, Ecology: understand the role of decomposers in recycling nutrients and maintaining a healthy ecosystem.`,
  ],
  keyCompetencies: `Thinking; Managing Self`,
  learningIntentions: [
    `We are learning what a decomposer is, and that dung beetles are an important decomposer in the savanna.`,
    `We are learning specific ways dung beetles help the savanna ecosystem, beyond just being unusual.`,
    `I can explain what would happen to a savanna ecosystem without decomposers like the dung beetle.`,
  ],
  assessment: `Teacher observation of the group discussion; review of comic strips for genuine understanding of the dung beetle's ecological role.`,
  introduction: `"Okay, this one's genuinely funny, but stick with me," Tapiwa grins. "Dung beetles roll up animal dung and bury it — which sounds odd, until you realise they're recycling nutrients back into the soil, controlling parasites, even helping seeds spread. Small, unglamorous, essential. My favourite kind of hero, honestly."

Wonder question: can you think of a job in real life that sounds unglamorous but is actually essential to how everything else works?`,
  mainContent: [
    {
      title: `What Is a Decomposer? (8 minutes)`,
      points: [
        `Teacher Input: explain that decomposers are organisms that break down dead material and waste, recycling nutrients back into the soil so plants can use them again, making them essential to any healthy ecosystem.`,
        `Key Question: "What do you think a savanna would look like after just a few months without ANY decomposers at work?"`,
      ],
    },
    {
      title: `The Dung Beetle's Big Job (17 minutes)`,
      points: [
        `Teacher Input: explain the dung beetle's real, essential role — rolling and burying dung, which recycles nutrients into the soil, helps control fly and parasite populations, and even helps disperse seeds that were inside the dung, connecting back to plant growth across the savanna.`,
        `Activity: in groups, discuss why an ecosystem might struggle without its decomposers, even though they're small and easy to overlook, listing at least two specific consequences.`,
        `Key Question: "Why do you think it took scientists a while to properly appreciate how important dung beetles are?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE specific way dung beetles help the savanna ecosystem.`,
  faith: {
    ponder: `Psalm 104 celebrates the sheer variety of God's creatures, right down to the smallest and strangest, all sustained and given purpose by God's Spirit. The dung beetle — genuinely funny, genuinely essential — is a perfect small example of a creation full of purpose in unexpected places.`,
    verse: `When you send your Spirit, they are created, and you renew the face of the ground.`,
    ref: `Psalm 104:30 (NIV)`,
    value: `Aroha  Love (World)`,
    valueDesc: `Appreciating even the strangest, least glamorous parts of God's creation — like the dung beetle — helps us love the whole of creation, not just the parts that seem impressive at first glance.`,
    questions: [
      `Psalm 104 celebrates ALL kinds of creatures, not just the impressive ones. Why might God have made something as unglamorous as the dung beetle so essential?`,
      `Tapiwa calls the dung beetle his "favourite kind of hero." What's your own favourite example of something small doing something essential?`,
      `Is there a job or role in YOUR life or classroom that's unglamorous but actually really important? How could you appreciate it more?`,
    ],
  },
  resources: [
    `Images or video of dung beetles at work`,
    `Blank comic-strip template`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Dung beetles and their ecological role`, search: `dung beetle decomposer savanna ecosystem explained`, why: `Gives students a clear, genuinely engaging introduction to the dung beetle's role before the group discussion.` },
  ],
  studentAgency: {
    art: { title: `Draw a Dung Beetle "Hero" Comic Strip`, body: `Draw a dung beetle "hero" comic strip showing its unglamorous but essential job.\n\n**Instructions:**\n1. Draw 3–4 panels showing the dung beetle finding, rolling and burying dung.\n2. Add a caption in each panel explaining what's happening ecologically.\n3. Give your comic strip a heroic title.\n\n**Reflection Prompt:** What made you choose that particular title?` },
    readWrite: { title: `The Dung Beetle's Diary`, body: `Write a short diary entry from the point of view of a dung beetle describing its day's work.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** What detail did you include to show why the work matters, not just what it looks like?` },
    technology: { title: `Build a Decomposer Cycle Diagram`, body: `Using a simple digital tool, build a diagram showing how dung beetles recycle nutrients back into the soil and plant growth.\n\n**Reflection Prompt:** Which part of the cycle was hardest to represent clearly?` },
    watchReview: { title: `Watch and Note: Dung Beetles at Work`, body: `Watch a short video about dung beetles and decomposers.\n\n**Search term:** "dung beetle decomposer savanna ecosystem explained"\n\n**Reflection Prompt:** What is one fact from the video that made you laugh or surprised you?` },
  },
},

// ============================== FRIDAY — ART ==============================
{
  day: `Friday`, strand: `Art`, sessionLabel: `Flight Log 35: Marimba and Gumboot`,
  topic: `MARIMBA AND GUMBOOT — Music and Dance as Art`,
  curriculumArea: `The Arts`,
  aos: [
    `Music/Dance, Developing Practical Knowledge: explore rhythm and movement traditions with real cultural and historical roots, and perform a simple rhythm sequence.`,
  ],
  keyCompetencies: `Participating and Contributing; Relating to Others`,
  learningIntentions: [
    `We are learning that marimba music, drumming and gumboot dance are expressive traditions with real cultural and historical roots.`,
    `We are learning basic rhythm-making using body percussion, inspired by gumboot dance.`,
    `I can perform a simple rhythm pattern as part of a group.`,
  ],
  assessment: `Teacher observation of group participation and rhythm-pattern performance; genuine engagement with the celebratory tone of the day.`,
  introduction: `"Music and dance ARE Independence Day, crew," Nomvula says, already tapping a rhythm. "Marimba, drumming, gumboot dance — expressive traditions with real history behind them, especially gumboot, born out of hard work in the mines, turned into something joyful. Today, make some noise, properly, in celebration."

Wonder question: why do you think people so often turn to music and dance specifically to celebrate freedom or independence?`,
  mainContent: [
    {
      title: `Marimba, Drumming and Gumboot Dance (10 minutes)`,
      points: [
        `Teacher Input: introduce marimba music (a xylophone-like instrument central to Zimbabwean musical tradition), drumming patterns, and gumboot dance — a rhythmic, stamping and boot-slapping dance style that originated among miners in South Africa and became a powerful expression of resilience and joy.`,
        `Key Question: "How does knowing gumboot dance began as something born out of hard work change the way you look at it as a celebration today?"`,
      ],
    },
    {
      title: `Creating a Rhythm Pattern (20 minutes)`,
      points: [
        `Activity: in groups, students create a simple 8-beat rhythm pattern using body percussion (stamping, clapping, slapping), inspired by gumboot dance, then perform it for the class.`,
        `Circulate and prompt: "How does your group keep everyone in time together?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence explaining why gumboot dance is a good symbol for turning something hard into something joyful.`,
  faith: {
    ponder: `Psalm 150 calls for praising God with dancing and rhythm, tambourine and strings, holding nothing back. A classroom full of stamping, clapping rhythm on a celebration day is, in its own small way, exactly the kind of full-bodied, joyful expression the psalm describes.`,
    verse: `Praise him with tambourine and dancing, praise him with the strings and pipe.`,
    ref: `Psalm 150:4 (NIV)`,
    value: `Aroha  Love`,
    valueDesc: `Making music and moving together in celebration is a genuine act of Aroha — joy shared out loud, in community, echoing how the Bible itself describes praising God.`,
    questions: [
      `Psalm 150 lists lots of different instruments and dancing, not just quiet singing. Why do you think celebration in the Bible is often so physical and loud?`,
      `Gumboot dance turned hard work into something joyful. Is there something hard in your own life that could be turned into something joyful, the way gumboot dance was?`,
      `What's one thing worth celebrating loudly and physically in your own life or classroom right now?`,
    ],
  },
  resources: [
    `Recorded marimba music or simple percussion instruments`,
    `Open floor space for the rhythm-pattern activity`,
    `Video or images of gumboot dance for reference`,
  ],
  videos: [
    { title: `Gumboot dance and marimba music`, search: `gumboot dance marimba South Africa Zimbabwe explained`, why: `Gives students a clear, energetic visual introduction to both traditions before creating their own rhythm pattern.` },
  ],
  studentAgency: {
    art: { title: `Design a Rhythm Notation Card`, body: `Design a simple visual notation card showing your group's 8-beat rhythm pattern using symbols or icons.\n\n**Reflection Prompt:** What symbol did you choose for a stamp versus a clap, and why?` },
    readWrite: { title: `Writing About Gumboot Dance`, body: `Write a short piece explaining what gumboot dance is and why it began, in your own words.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** What part of gumboot dance's history surprised you most?` },
    technology: { title: `Record Your Group's Rhythm`, body: `If equipment allows, record a short audio or video of your group's 8-beat rhythm pattern.\n\n**Reflection Prompt:** What did you notice about your rhythm when you listened back that you hadn't noticed while performing it?` },
    watchReview: { title: `Watch and Note: Gumboot Dance and Marimba`, body: `Watch a short video about gumboot dance and marimba music.\n\n**Search term:** "gumboot dance marimba South Africa Zimbabwe explained"\n\n**Reflection Prompt:** What is one movement or sound from the video you tried to copy in your own rhythm pattern?` },
  },
},

]

// Register these lesson plans into the shared app registry, additively (won't overwrite
// Thursday's entry, already registered by data/term3-lessonplans-thursdays.js).
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'] = window.ALL_LESSON_PLANS['skybound-baobab-route'] || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'][8] = window.ALL_LESSON_PLANS['skybound-baobab-route'][8] || {}
SKYBOUND_WEEK8_LESSONS.forEach(lesson => {
  window.ALL_LESSON_PLANS['skybound-baobab-route'][8][lesson.day] = lesson
})
