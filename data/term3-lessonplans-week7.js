// Rich lesson-plan content for SKYBOUND: The Baobab Route (Term 3) — Week 7
// Monday (History) / Tuesday (Geography) / Wednesday (Science) / Friday (Art)
// Thursday (Technology) for this week already lives in data/term3-lessonplans-thursdays.js
// — this file follows the exact same structure (see that file's header notes), and the
// exact same story beats as data/term3.js Week 7, so introductions echo the actual dialogue
// from that file. Registers additively into window.ALL_LESSON_PLANS so it can sit alongside
// the Thursday file without overwriting it.
//
// Story continuity: this is "The Village of Gogo Thandiwe" — Nomvula's own chapter, per the
// planning document's emotional arc. She's proud but vulnerable here, since apartheid and the
// struggle for freedom is her own family's history, carrying on from Week 6's handover. Handled
// honestly but age-appropriately — courage, unity and Ubuntu, not violence or despair, per the
// character bible's hard rules. Matches the exact Bible references and values from the planning
// document's Faith Connections table for Week 7 (Monday: 1 Corinthians 12:12 / Aroha (Others);
// Tuesday: Proverbs 27:23 / Manaaki; Wednesday: Matthew 6:26 / Aroha (World); Friday: Proverbs
// 31:13 / Mōhio).

const SKYBOUND_WEEK7_LESSONS = [

// ============================== MONDAY — HISTORY ==============================
{
  day: `Monday`, strand: `History`, sessionLabel: `Flight Log 26: I Am, Because We Are`,
  topic: `I AM, BECAUSE WE ARE — Apartheid and the Struggle for Freedom`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding How Societies Work: understand that societies can build unjust systems, and that people can respond to injustice with courage, unity and reconciliation.`,
    `Understanding the Past: investigate a significant struggle for freedom, and the values that carried people through it.`,
  ],
  keyCompetencies: `Thinking; Relating to Others`,
  learningIntentions: [
    `We are learning what apartheid was, and that it was an unjust system that separated and disadvantaged people because of race.`,
    `We are learning about the struggle for freedom, Nelson Mandela, and the idea of Ubuntu — "I am, because we are."`,
    `I can explain, in my own words, what Ubuntu means and give one example of courage or unity from this history.`,
  ],
  assessment: `Teacher observation of the Ubuntu discussion and class contribution; review of symbol designs for genuine engagement with the idea of unity between people.`,
  introduction: `The route lands in Nomvula's own village at last. Her voice is proud, but there's something careful underneath it too. "This is my home, crew," she says. "And this next part of the story is my family's, properly. Apartheid, the struggle for freedom, Nelson Mandela — it's hard history. But it's also a story about an idea called Ubuntu: 'I am, because we are.' Courage and unity got my grandmother's generation through it. I want you to understand the courage, not just the hardship."

Wonder question: what do you think "I am, because we are" might mean — and can a person really only become fully themselves through other people?`,
  mainContent: [
    {
      title: `An Unjust System (10 minutes)`,
      points: [
        `Teacher Input: explain simply that apartheid was a system in South Africa that legally separated people and gave them very different rights and opportunities based on race, and that it was deeply unjust — most South Africans were denied basic freedoms because of it.`,
        `Keep the explanation focused on fact and consequence, in line with an honest but age-appropriate telling, without graphic detail.`,
        `Key Question: "Why do you think it matters that we call this system 'unjust,' and not just 'different' or 'unfair'?"`,
      ],
    },
    {
      title: `The Struggle for Freedom, and Ubuntu (13 minutes)`,
      points: [
        `Teacher Input: introduce Nelson Mandela and the long struggle for freedom against apartheid, and the idea of Ubuntu — a philosophy meaning roughly "I am, because we are," which held that people find their humanity through their connection to others, and shaped how the struggle for freedom and, eventually, reconciliation were approached.`,
        `Activity: as a class, discuss real examples of courage and unity from this history — people organising together, refusing to give up, and eventually working toward reconciliation rather than revenge.`,
        `Key Question: "How might believing 'I am, because we are' change the way a whole movement chooses to fight for freedom?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence, in your own words, explaining what "I am, because we are" means.`,
  faith: {
    ponder: `Paul pictures the church as one body with many parts, each needing the others to function — a Christian echo of the very idea Ubuntu holds. Nomvula's family's history shows real people living out that truth under real pressure: that we are never fully ourselves alone.`,
    verse: `Just as a body, though one, has many parts, but all its many parts form one body, so it is with Christ.`,
    ref: `1 Corinthians 12:12 (NIV)`,
    value: `Aroha  Love (Others)`,
    valueDesc: `Understanding Ubuntu helps us love others the way God designed people to need each other — not as an inconvenience, but as part of what it means to be fully human.`,
    questions: [
      `Paul says the body needs ALL its parts, not just some. How is that similar to what Ubuntu teaches?`,
      `Nomvula says she wants the class to understand the courage of this history, not just the hardship. Why might focusing on courage matter?`,
      `Who is someone in your own life who helps you "be yourself" more fully, the way Ubuntu describes?`,
    ],
  },
  resources: [
    `Simple, age-appropriate timeline or picture book covering the struggle for freedom and Nelson Mandela`,
    `Board or poster space for the Ubuntu discussion`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Ubuntu and Nelson Mandela, explained for kids`, search: `Ubuntu Nelson Mandela South Africa explained for kids`, why: `Gives students an age-appropriate, honest overview of Ubuntu and the struggle for freedom before the class discussion.` },
  ],
  studentAgency: {
    art: { title: `Design an Ubuntu Symbol`, body: `Design a simple symbol representing Ubuntu — unity between people — for the class to display.\n\n**Instructions:**\n1. Sketch a symbol showing two or more figures connected or supporting each other.\n2. Choose colours that feel warm and unified rather than divided.\n3. Add one word or short phrase capturing the idea.\n\n**Reflection Prompt:** What part of your symbol shows connection, not just individual people?` },
    readWrite: { title: `What Ubuntu Means to Me`, body: `Write a short piece explaining, in your own words, what "I am, because we are" means and give one real example from your own life.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** Was it easy or hard to think of a real example? Why?` },
    technology: { title: `Build an Ubuntu Mind Map`, body: `Using a simple digital tool, build a mind map connecting the idea of Ubuntu to at least three people who help make you who you are.\n\n**Reflection Prompt:** Which connection on your mind map surprised you most?` },
    watchReview: { title: `Watch and Note: Ubuntu Explained`, body: `Watch a short video explaining Ubuntu and Nelson Mandela's role in the struggle for freedom.\n\n**Search term:** "Ubuntu Nelson Mandela South Africa explained for kids"\n\n**Reflection Prompt:** What is one thing you learned that you hadn't known before today?` },
  },
},

// ============================== TUESDAY — GEOGRAPHY ==============================
{
  day: `Tuesday`, strand: `Geography`, sessionLabel: `Flight Log 27: More Than Just Cattle`,
  topic: `MORE THAN JUST CATTLE — Nguni Cattle Culture and Livestock Farming`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding Place and Environment: understand that livestock farming can carry deep cultural significance far beyond its economic or food value.`,
  ],
  keyCompetencies: `Thinking; Relating to Others`,
  learningIntentions: [
    `We are learning that Nguni cattle are central to livestock farming in this region, and that they carry deep cultural meaning beyond farming.`,
    `We are learning what status, lobola (dowry) and identity mean in relation to cattle in Southern African culture.`,
    `I can compare something valuable in my own culture to what cattle represent here.`,
  ],
  assessment: `Teacher observation of the pairs discussion; review of hide pattern designs for genuine engagement with cattle as more than an economic resource.`,
  introduction: `"Nguni cattle aren't just farm animals here," Nomvula says. "They're status, they're dowry, they're identity. My uncle's herd means something far bigger than the beef or milk it provides. I want to show you a kind of farming that's really about culture as much as food."

Wonder question: can you think of something your own family owns or keeps that means far more than its practical use?`,
  mainContent: [
    {
      title: `Livestock Farming, Nguni Style (10 minutes)`,
      points: [
        `Teacher Input: explain that Nguni cattle are a hardy, distinctively patterned breed central to livestock farming across parts of Southern Africa, valued for milk, meat and hide as well as their resilience to the local climate.`,
        `Key Question: "Why might a hardy, adaptable breed of cattle matter especially in a region with unpredictable rainfall?"`,
      ],
    },
    {
      title: `Cattle as Status, Dowry and Identity (15 minutes)`,
      points: [
        `Teacher Input: explain that beyond farming, cattle carry deep cultural significance in many Southern African communities — the size of a family's herd can reflect status, cattle are traditionally part of lobola (a dowry exchanged between families at marriage), and individual cattle patterns can even be recognised and named, becoming part of family identity.`,
        `Activity: in pairs, students discuss something valuable in their own family or culture that means more than its practical use, and compare it to what cattle represent here.`,
        `Key Question: "What's the difference between owning something because it's USEFUL and owning something because of what it MEANS?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE thing Nguni cattle represent in this culture, beyond food or farming.`,
  faith: {
    ponder: `Proverbs urges a wise person to know the condition of their flocks well — a call to attentive, careful stewardship of what's been entrusted to us. Nguni cattle, known individually by pattern and name, are a living example of exactly that kind of careful attention.`,
    verse: `Be sure you know the condition of your flocks, give careful attention to your herds.`,
    ref: `Proverbs 27:23 (NIV)`,
    value: `Manaaki  Serve`,
    valueDesc: `Caring attentively for what we've been given — whether a herd of cattle or something else entirely — is a real, practical way of serving faithfully with what God has entrusted to us.`,
    questions: [
      `Proverbs calls for "careful attention," not just ownership. What's the difference between owning something and truly caring for it?`,
      `Nomvula says cattle carry identity, not just economic value. What is something YOU care for that carries meaning beyond its usefulness?`,
      `How might "giving careful attention" to what God has given you look different from just using it up?`,
    ],
  },
  resources: [
    `Images of Nguni cattle showing their distinctive hide patterns`,
    `Blank paper or card for hide pattern designs`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Nguni cattle and their cultural significance`, search: `Nguni cattle culture South Africa explained`, why: `Gives students a clear, respectful grounding in the real cultural significance of Nguni cattle before the pairs discussion.` },
  ],
  studentAgency: {
    art: { title: `Design a Nguni-Style Hide Pattern`, body: `Design a simple Nguni-style hide pattern, choosing your own colours and shapes.\n\n**Instructions:**\n1. Sketch the outline of a cattle hide shape.\n2. Fill it with a bold, distinctive pattern of your own design.\n3. Give your pattern a name, the way real Nguni patterns are often named and recognised.\n\n**Reflection Prompt:** What made you choose that particular pattern and name?` },
    readWrite: { title: `A Family Herd Story`, body: `Write a short piece in role as a member of a family describing their herd and what it means to them, beyond its economic value.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What did you choose to emphasise — status, identity, or something else?` },
    technology: { title: `Build a Comparison Chart`, body: `Using a simple digital tool, build a chart comparing what cattle represent here to something valuable in your own culture.\n\n**Reflection Prompt:** What surprised you most about the comparison?` },
    watchReview: { title: `Watch and Note: Nguni Cattle Culture`, body: `Watch a short video about Nguni cattle and their cultural significance.\n\n**Search term:** "Nguni cattle culture South Africa explained"\n\n**Reflection Prompt:** What is one fact from the video you hadn't already discussed in class?` },
  },
},

// ============================== WEDNESDAY — SCIENCE ==============================
{
  day: `Wednesday`, strand: `Science`, sessionLabel: `Flight Log 28: The Small Workers of the Fields`,
  topic: `THE SMALL WORKERS OF THE FIELDS — Sunbirds, Weaver Birds and Pollination`,
  curriculumArea: `Science`,
  aos: [
    `Living World, Ecology: understand the essential role pollinators play in plant reproduction, and that many pollinators are small and easily overlooked.`,
  ],
  keyCompetencies: `Thinking; Relating to Others`,
  learningIntentions: [
    `We are learning what pollinators are, and that sunbirds and weaver birds are important pollinators in this region.`,
    `We are learning that small, easily overlooked animals can play an essential role in an ecosystem.`,
    `I can name at least one plant or crop that depends on pollinators and explain what would happen without them.`,
  ],
  assessment: `Teacher observation of the group discussion; review of labelled sunbird/weaver bird drawings for genuine understanding of the pollination process.`,
  introduction: `"Sunbirds, weaver birds — small, easy to overlook," Nomvula says. "But without them, so many plants around my grandmother's fields wouldn't reproduce at all. I want you to notice the small, quiet workers today, not just the big dramatic animals."

Wonder question: can you think of something small in your own life that does far more important work than people usually notice?`,
  mainContent: [
    {
      title: `What Is a Pollinator? (8 minutes)`,
      points: [
        `Teacher Input: explain that pollination is the process by which pollen moves from one part of a flower to another (or between flowers), allowing plants to reproduce and produce seeds and fruit, and that animals like birds and insects that carry this pollen are called pollinators.`,
        `Key Question: "Why might a plant NEED help from an animal, instead of pollinating itself?"`,
      ],
    },
    {
      title: `Sunbirds, Weaver Birds and Their Job (17 minutes)`,
      points: [
        `Teacher Input: introduce sunbirds and weaver birds as real, important pollinators in Southern African landscapes — sunbirds feed on nectar and carry pollen between flowers on their beaks and heads as they feed, while weaver birds contribute to plant reproduction and seed dispersal as they forage and build their distinctive woven nests.`,
        `Activity: in groups, students list three plants or crops (including some studied earlier this term) that would struggle without pollinators, and discuss what would happen to the wider food web without them.`,
        `Key Question: "If pollinators disappeared, what is the very FIRST thing you think would happen, before anything else?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE plant or crop that depends on pollinators, and what would happen to it without them.`,
  faith: {
    ponder: `Jesus points to the birds of the air as proof that God notices and provides for even the smallest, most overlooked creatures. Sunbirds and weaver birds — easy to miss, essential to the whole savanna — are a living picture of exactly that kind of quiet, faithful provision.`,
    verse: `Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them.`,
    ref: `Matthew 6:26 (NIV, excerpt)`,
    value: `Aroha  Love (World)`,
    valueDesc: `Noticing the essential work of small, easily overlooked creatures helps us love and pay attention to the whole of God's creation, not just the parts that are big or dramatic.`,
    questions: [
      `Jesus uses ordinary birds to make a point about God's care. Why do you think he chose something so small and ordinary?`,
      `Nomvula asks you to notice the "small, quiet workers" today. What is something small in creation you've never really noticed before?`,
      `If God pays attention to something as small as a sunbird, what might that tell you about how God pays attention to you?`,
    ],
  },
  resources: [
    `Images of sunbirds and weaver birds, including weaver nests`,
    `Blank paper for labelled bird drawings`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Sunbirds and weaver birds as pollinators`, search: `sunbirds weaver birds pollination Africa explained`, why: `Gives students a clear visual introduction to how these specific birds pollinate before the group discussion.` },
  ],
  studentAgency: {
    art: { title: `Draw a Sunbird or Weaver Bird Visiting a Flower`, body: `Draw a sunbird or weaver bird visiting a flower, and label how it helps the plant.\n\n**Instructions:**\n1. Sketch the bird feeding at or near a flower.\n2. Add arrows or labels showing where pollen would transfer.\n3. Add one caption explaining the bird's role in one sentence.\n\n**Reflection Prompt:** What was the trickiest part of showing HOW pollination happens, rather than just what the bird looks like?` },
    readWrite: { title: `A Day in the Life of a Pollinator`, body: `Write a short story from the point of view of a sunbird or weaver bird, describing a day spent pollinating flowers.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What detail did you include to show the bird doing essential, if unnoticed, work?` },
    technology: { title: `Build a Pollination Food Web Diagram`, body: `Using a simple digital tool, build a diagram showing how pollinators connect to at least three other parts of the savanna food web.\n\n**Reflection Prompt:** Which connection in your diagram was the least obvious before today?` },
    watchReview: { title: `Watch and Note: Pollinators at Work`, body: `Watch a short video about sunbirds, weaver birds and pollination.\n\n**Search term:** "sunbirds weaver birds pollination Africa explained"\n\n**Reflection Prompt:** What is one fact from the video that surprised you?` },
  },
},

// ============================== FRIDAY — ART ==============================
{
  day: `Friday`, strand: `Art`, sessionLabel: `Flight Log 30: Threads That Tell a Story`,
  topic: `THREADS THAT TELL A STORY — Weaving and Shweshwe Textiles`,
  curriculumArea: `The Arts`,
  aos: [
    `Visual Arts, Developing Practical Knowledge: explore weaving as a practical craft technique, planning and executing a repeating pattern.`,
  ],
  keyCompetencies: `Thinking; Managing Self`,
  learningIntentions: [
    `We are learning that Shweshwe fabric and basket weaving are important textile traditions in this region.`,
    `We are learning basic weaving technique, and that real weaving requires planning a pattern before starting.`,
    `I can create a simple woven piece using a planned, repeating pattern.`,
  ],
  assessment: `Teacher observation of the planning and weaving process; review of finished woven pieces for evidence of a genuinely planned, deliberate pattern.`,
  introduction: `"Shweshwe fabric, basket weaving — my grandmother's other great skill, alongside painting the walls," Nomvula says. "Every thread, woven with intention. Today, I want you to try weaving something yourselves — even something small teaches you how much patience real weaving takes."

Wonder question: why do you think a weaver plans their whole pattern before a single thread crosses another, instead of just starting and seeing what happens?`,
  mainContent: [
    {
      title: `Weaving Traditions of the Region (10 minutes)`,
      points: [
        `Teacher Input: introduce Shweshwe, a distinctive printed cotton fabric with deep roots in Southern African fashion and identity, and basket weaving, a practical and artistic craft tradition using natural fibres woven into deliberate, often intricate patterns.`,
        `Key Question: "What do you think is the difference between a pattern that happens by accident, and one a weaver plans on purpose?"`,
      ],
    },
    {
      title: `Simple Paper Weaving (20 minutes)`,
      points: [
        `Activity: using strips of coloured paper, students weave a small mat or panel inspired by Shweshwe textile patterns and basket weaving techniques — over-and-under, in a deliberate, repeating pattern, planning their colour sequence on paper first.`,
        `Circulate and prompt: "How does your planned colour pattern compare to how it's actually turning out as you weave?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence explaining why real weavers plan their pattern before they begin weaving.`,
  faith: {
    ponder: `Proverbs 31 praises a woman who works with willing, capable hands — "she selects wool and flax and works with eager hands" — a picture of skilled, intentional craft as something genuinely worth honouring, not just decoration.`,
    verse: `She selects wool and flax and works with eager hands.`,
    ref: `Proverbs 31:13 (NIV)`,
    value: `Mōhio  Know`,
    valueDesc: `Learning a real, skilled craft like weaving helps us know and honour the kind of intentional, patient work the Bible itself holds up as admirable.`,
    questions: [
      `Proverbs 31 praises "eager hands" doing skilled work. Why might eagerness matter as much as skill itself?`,
      `Nomvula says every thread is "woven with intention." Where else in your own life could a little more intention change the result?`,
      `What is one skill you'd like to get patient and eager enough about to genuinely master, the way Gogo Thandiwe has mastered weaving?`,
    ],
  },
  resources: [
    `Images of real Shweshwe fabric and basket weaving`,
    `Strips of coloured paper for weaving`,
    `Glue or tape to secure finished woven pieces`,
  ],
  videos: [
    { title: `Shweshwe fabric and basket weaving traditions`, search: `Shweshwe fabric basket weaving South Africa`, why: `Gives students a clear, respectful visual grounding in the real textile traditions before the paper-weaving activity.` },
  ],
  studentAgency: {
    art: { title: `Weave a Second Panel`, body: `Weave a second, smaller panel using a different planned colour pattern from your first.\n\n**Reflection Prompt:** What did you change about your planning process the second time?` },
    readWrite: { title: `Naming Your Weaving`, body: `Write a short explanation of your finished weaving's name and what its pattern reminds you of.\n\n**Word Count Guide:** 60–100 words.\n\n**Reflection Prompt:** Did the name come before or after you finished weaving?` },
    technology: { title: `Design a Digital Pattern Plan`, body: `Using a simple drawing tool, design a colour pattern plan for a weaving before making it by hand.\n\n**Reflection Prompt:** Was planning digitally easier or harder than planning on paper?` },
    watchReview: { title: `Watch and Note: Weaving Traditions`, body: `Watch a short video about Shweshwe fabric and basket weaving.\n\n**Search term:** "Shweshwe fabric basket weaving South Africa"\n\n**Reflection Prompt:** What is one detail from the video that you tried to include in your own weaving?` },
  },
},

]

// Register these lesson plans into the shared app registry, additively (won't overwrite
// Thursday's entry, already registered by data/term3-lessonplans-thursdays.js).
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'] = window.ALL_LESSON_PLANS['skybound-baobab-route'] || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'][7] = window.ALL_LESSON_PLANS['skybound-baobab-route'][7] || {}
SKYBOUND_WEEK7_LESSONS.forEach(lesson => {
  window.ALL_LESSON_PLANS['skybound-baobab-route'][7][lesson.day] = lesson
})
