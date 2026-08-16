// Rich lesson-plan content for SKYBOUND: The Baobab Route (Term 3) — Week 3
// Monday (History) / Tuesday (Geography) / Wednesday (Science) / Friday (Art)
// Thursday (Technology) for this week already lives in data/term3-lessonplans-thursdays.js
// — this file follows the exact same structure (see that file's header notes), and the
// exact same story beats as data/term3.js Week 3, so introductions echo the actual dialogue
// from that file. Registers additively into window.ALL_LESSON_PLANS so it can sit alongside
// the Thursday file without overwriting it.
//
// Story continuity: Nomvula (Ndebele village) radios in for the FIRST time this week —
// Monday and Friday are hers to lead, per the character bible ("Nomvula grounds it in
// meaning — culture/art/food"). Tapiwa still narrates Tuesday and hands off Wednesday to
// his dad's team's work. Gogo Thandiwe (Nomvula's grandmother, house-painter) is introduced
// on Friday.

const SKYBOUND_WEEK3_LESSONS = [

// ============================== MONDAY — HISTORY ==============================
{
  day: `Monday`, strand: `History`, sessionLabel: `Flight Log 11: The Gold and Ivory Kingdom`,
  topic: `THE GOLD AND IVORY KINGDOM — Mapungubwe and Southern Africa's Ancient Trade Links`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding the Past: understand how the perspectives of people who lived before written record can still be known today, through evidence and continuing living culture.`,
    `Understanding Place and Environment: understand how trade and movement connect places across long distances, even in the distant past.`,
  ],
  keyCompetencies: `Thinking; Language, Symbols and Text`,
  learningIntentions: [
    `We are learning that Mapungubwe was a gold and ivory trading kingdom in Southern Africa, active before Great Zimbabwe reached its height.`,
    `We are learning that Mapungubwe traded across the Indian Ocean, as far as Arabia, India and China.`,
    `I can trace a plausible trade route on a map and explain what goods might have travelled along it.`,
  ],
  assessment: `Teacher observation of the map-tracing activity and class discussion; review of exit tickets for understanding of Mapungubwe's trade connections.`,
  introduction: `A new voice crackles in over the radio for the first time — steady, a little shy, but sure of itself. "Sharp, crew, this side too." Tapiwa grins. "That's my cousin Nomvula, finally! She's been waiting to tell you this one herself." Nomvula continues: "Before Great Zimbabwe even faded, there was Mapungubwe — a gold and ivory trading kingdom, right here, trading all the way to Arabia, India, even China. That's the pattern of it, crew: this land has been connected to the whole world for a very, very long time."

Wonder question: if a kingdom here was trading with places as far away as China, centuries ago, what would that journey have actually taken to make happen?`,
  mainContent: [
    {
      title: `What Was Mapungubwe? (10 minutes)`,
      points: [
        `Teacher Input: Mapungubwe was a powerful kingdom that flourished from roughly the 11th to 13th centuries, near where South Africa, Zimbabwe and Botswana now meet — it is considered a forerunner to Great Zimbabwe, and one of Southern Africa's earliest known class-based societies.`,
        `Explain that Mapungubwe grew wealthy through trading gold and ivory, and that archaeologists have found evidence of this — including a small, famous golden rhino ornament discovered in a royal burial site.`,
        `Key Question: "What does finding gold objects buried with a ruler tell us about how the society was organised?"`,
      ],
    },
    {
      title: `Trading Across the Indian Ocean (15 minutes)`,
      points: [
        `Teacher Input: Show a map tracing Mapungubwe's trade connections — goods travelled overland to the East African coast, then by dhow (sailing vessel) across the Indian Ocean to Arabia, India, and as far as China, evidenced by imported glass beads and Chinese ceramics found at the site.`,
        `Activity: In pairs, students trace a possible trade route from Mapungubwe to one of its trading partners (Arabia, India, or China) on a map, discussing what goods might have travelled each way (gold and ivory outward; glass beads, ceramics, cloth inward).`,
        `Key Question: "Why might gold and ivory have been so valuable to traders thousands of kilometres away?"`,
      ],
    },
    {
      title: `A World Already Connected (10 minutes)`,
      points: [
        `Teacher Input: Discuss as a class that long before European contact, Southern Africa was already part of a wide, ancient trade network — a fact often missing from popular versions of world history.`,
        `Connect back to Great Zimbabwe (Week 2): Mapungubwe's decline is thought to link to Great Zimbabwe's later rise, showing how power and trade shifted between kingdoms over centuries.`,
        `Key Question: "Why do you think most people haven't heard of Mapungubwe, even though it traded with China centuries ago?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE place Mapungubwe traded with, and explain what that connection tells us about this region's history.`,
  faith: {
    ponder: `Mapungubwe's traders used honest weights and measures to build trust across vast distances — the kind of fair dealing the Bible repeatedly calls for. A kingdom's reputation, then as now, rested on whether its word and its scales could be trusted.`,
    verse: `The Lord detests dishonest scales, but accurate weights find favor with him.`,
    ref: `Proverbs 11:1 (NIV)`,
    value: `Mōhio  Know`,
    valueDesc: `Knowing that Southern Africa has always been connected to the wider world helps us see God's story as one big, joined-up story, not a set of separate, unconnected ones.`,
    questions: [
      `Proverbs says God cares about honest dealing between people — even in trade routes thousands of years old. Why do you think fairness matters to God, even in something as ordinary as buying and selling?`,
      `Nomvula is proud that her home has "always been connected to the whole world." What is something about your own home or community that connects it to somewhere far away?`,
      `What does it look like to deal honestly and fairly with people this week, the way good traders had to?`,
    ],
  },
  resources: [
    `Map of the Indian Ocean trade network, showing Mapungubwe, the East African coast, Arabia, India and China`,
    `Images of Mapungubwe artefacts (the golden rhino, glass beads, imported ceramics), if available`,
    `Small pieces of paper for exit tickets`,
  ],
  videos: [
    { title: `Mapungubwe: the golden kingdom`, search: `Mapungubwe golden rhino kingdom history explained`, why: `Gives students a clear, visual introduction to Mapungubwe and its famous golden rhino artefact.` },
    { title: `Indian Ocean trade routes explained`, search: `Indian Ocean trade routes Africa Arabia India China history`, why: `Helps students understand the scale and reach of the trade network Mapungubwe was part of.` },
  ],
  studentAgency: {
    art: { title: `Design a Merchant's Trade-Mark`, body: `Design a simple trade-mark or seal that a Mapungubwe merchant might have used on their goods.\n\n**Instructions:**\n1. Choose a symbol that represents trust or quality.\n2. Sketch it as a small, simple stamp-like design.\n3. Add one label explaining what your symbol means.\n\n**Reflection Prompt:** Why might a simple, recognisable symbol matter more than a detailed picture for a trade-mark?` },
    readWrite: { title: `A Trader's Journey`, body: `Write a short first-person account from a trader travelling from Mapungubwe to the East African coast to meet a foreign ship.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What was the biggest risk your trader faced on the journey?` },
    technology: { title: `Map the Trade Route`, body: `Using a simple drawing or slide tool, mark Mapungubwe's trade route to one trading partner (Arabia, India or China), labelling goods travelling each direction.\n\n**Reflection Prompt:** Which good travelling along your route do you think was most valuable, and why?` },
    watchReview: { title: `Watch and Note: Mapungubwe`, body: `Watch a short video about Mapungubwe and its history.\n\n**Search term:** "Mapungubwe golden rhino kingdom history explained"\n\n**Reflection Prompt:** What is one fact you learned that you didn't expect?` },
  },
},

// ============================== TUESDAY — GEOGRAPHY ==============================
{
  day: `Tuesday`, strand: `Geography`, sessionLabel: `Flight Log 12: Farming for the World, Not Just the Table`,
  topic: `FARMING FOR THE WORLD, NOT JUST THE TABLE — Commercial Farming and Export Crops`,
  curriculumArea: `Social Sciences`,
  aos: [
    `Understanding Place and Environment: understand how people's economic activities connect a place to the wider world, and how scale changes both purpose and risk.`,
  ],
  keyCompetencies: `Thinking; Managing Self`,
  learningIntentions: [
    `We are learning what commercial farming is, and how it differs in scale and purpose from the subsistence farming we studied in Week 2.`,
    `We are learning that tobacco, citrus and sugar are grown in Zimbabwe and South Africa mainly for export to markets far beyond the region.`,
    `I can compare subsistence and commercial farming across purpose, scale and risk.`,
  ],
  assessment: `Teacher observation of the comparison-chart activity and class discussion; review of export labels for evidence of understanding commercial farming's purpose.`,
  introduction: `"Tobacco, citrus, sugar — some farms around here aren't growing food for the family table, they're growing for export, for markets far beyond Zimbabwe or South Africa entirely," Tapiwa says, spreading a hand-drawn map of farmland across the logbook page. "That's a completely different kind of farming to my mum's little plot. Different scale, different risks, different everything. Let's compare them properly."

Wonder question: if a whole farm exists to sell one crop to buyers on the other side of the world, what happens to that farm if the price of that crop suddenly drops?`,
  mainContent: [
    {
      title: `What Is Commercial Farming? (10 minutes)`,
      points: [
        `Teacher Input: Commercial farming means growing crops at large scale specifically to sell for profit, often to markets far beyond the country where they're grown — this is different from subsistence farming (Week 2), which grows just enough to feed a family.`,
        `Introduce tobacco, citrus (oranges, grapefruit) and sugar as major export crops grown commercially in Zimbabwe and South Africa, often on much larger farms than a family subsistence plot.`,
        `Key Question: "Why might a commercial farm need far more land, workers and equipment than a subsistence plot?"`,
      ],
    },
    {
      title: `Comparing Purpose, Scale and Risk (15 minutes)`,
      points: [
        `Activity: As a class, build a comparison chart of subsistence farming vs commercial farming across three categories: purpose (feeding a family vs earning income), scale (small plot vs large farm), and what happens if the harvest fails (a subsistence family faces hunger directly; a commercial farm faces lost income and possible worker layoffs).`,
        `Discuss: a commercial farm depends on far-away buyers and prices it cannot control — a risk a subsistence family growing its own food doesn't face in the same way.`,
        `Key Question: "Which type of farming feels riskier to you, and why — and does 'riskier' always mean 'worse'?"`,
      ],
    },
    {
      title: `Why Both Matter (10 minutes)`,
      points: [
        `Teacher Input: Explain that both types of farming matter to Southern Africa's economy and food security — commercial farming brings in income and jobs, while subsistence farming keeps rural families fed directly, and many regions rely on a mix of both.`,
        `Discuss: some families do both — a subsistence plot for their own food, alongside working on or near a commercial farm for income.`,
        `Key Question: "Why might a family choose to do both kinds of farming instead of just one?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE difference between subsistence and commercial farming, and explain why that difference matters.`,
  faith: {
    ponder: `Whether a farmer grows just enough for their own family's table or a whole field bound for markets overseas, Scripture treats both kinds of labour with the same dignity — honest work, worthy of its reward, wherever the harvest ends up.`,
    verse: `The hardworking farmer should be the first to receive a share of the crops.`,
    ref: `2 Timothy 2:6 (NIV)`,
    value: `Pānga  Impact`,
    valueDesc: `Recognising the value of both small, family-feeding farms and large export farms is a way of honouring the dignity of hard work at every scale.`,
    questions: [
      `2 Timothy says a hardworking farmer deserves a fair share of the harvest. Do you think that's equally true for a small family farmer and someone working a huge export farm? Why or why not?`,
      `Tapiwa's family farms differently from a commercial tobacco or citrus farm nearby. What is one kind of hard work in your own family or community that deserves more recognition than it gets?`,
      `What does it look like to value someone's work fairly, whether their "harvest" is small or huge?`,
    ],
  },
  resources: [
    `Images or samples of tobacco, citrus and sugar (or packaging showing these as export products)`,
    `Blank two-column comparison chart template (subsistence vs commercial)`,
    `Map showing major commercial farming regions of Zimbabwe and South Africa`,
  ],
  videos: [
    { title: `What is commercial farming?`, search: `commercial farming explained for kids export crops`, why: `Gives students a clear, age-appropriate definition before the comparison activity.` },
  ],
  studentAgency: {
    art: { title: `Design an Export Label`, body: `Design a simple export label for a Southern African farm product of your choice (tobacco, citrus or sugar).\n\n**Instructions:**\n1. Choose one export crop.\n2. Design a label including the product name, country of origin, and one simple image.\n3. Add one line describing the product for a buyer far away.\n\n**Reflection Prompt:** What did you choose to highlight to make your product appealing to a buyer who has never seen it grown?` },
    readWrite: { title: `Two Farms, Two Letters`, body: `Write two very short letters — one from a subsistence farmer, one from a commercial farm worker — each describing their day.\n\n**Word Count Guide:** 60–80 words each.\n\n**Reflection Prompt:** What was the clearest difference between the two days you imagined?` },
    technology: { title: `Build a Farming Comparison Chart`, body: `Use a simple document, slide or spreadsheet to compare subsistence and commercial farming across purpose, scale and risk.\n\n**Reflection Prompt:** Which category showed the biggest difference between the two types of farming?` },
    watchReview: { title: `Watch and Note: Commercial Farming`, body: `Watch a short video explaining commercial farming and export crops.\n\n**Search term:** "commercial farming explained for kids export crops"\n\n**Reflection Prompt:** What is one thing you learned that changed how you think about where farm products in shops come from?` },
  },
},

// ============================== WEDNESDAY — SCIENCE ==============================
{
  day: `Wednesday`, strand: `Science`, sessionLabel: `Flight Log 13: Who Eats Whom`,
  topic: `WHO EATS WHOM — Savanna Predators and Food Webs`,
  curriculumArea: `Science`,
  aos: [
    `Living World, Ecology: understand how living things are related to each other and to their environment through feeding relationships, and how changes affect the whole system.`,
  ],
  keyCompetencies: `Thinking; Using Language, Symbols and Text`,
  learningIntentions: [
    `We are learning what a food web is, and how plants, herbivores and predators connect within one.`,
    `We are learning specifically how lions and leopards fit into the savanna food web as predators.`,
    `I can predict what might happen to a food web if one part of it disappeared.`,
  ],
  assessment: `Teacher observation of the class food web construction and group predictions; review of drawn food web sections for accurate, connected relationships.`,
  introduction: `"You can't understand a lion without understanding everything it eats, and everything THAT eats, all the way down to the grass," Tapiwa says, sketching lines in the dirt with a stick. "My dad's team studies this constantly — predators, prey, and everything connecting them. Show me how it all fits together?"

Wonder question: if you removed just ONE animal from the savanna — say, every antelope disappeared overnight — how far do you think the effects would actually spread?`,
  mainContent: [
    {
      title: `What Is a Food Web? (10 minutes)`,
      points: [
        `Teacher Input: A food web shows how energy moves through an ecosystem — from producers (plants, which make their own energy from sunlight) to herbivores (which eat plants) to predators (which eat other animals) — and how many of these feeding relationships connect and overlap, unlike a simple single-line food chain.`,
        `Introduce lion and leopard as key savanna predators, explaining what each typically hunts (antelope, zebra and other herbivores) and how their presence affects herbivore behaviour and numbers.`,
        `Key Question: "Why is a 'web' a better word than a 'chain' for describing these feeding relationships?"`,
      ],
    },
    {
      title: `Building a Savanna Food Web (15 minutes)`,
      points: [
        `Activity: As a class, build a simple savanna food web diagram together on the board, using arrows to connect grass → antelope/zebra → lion/leopard, then adding extra connections (e.g. scavengers, other prey species) as students suggest them.`,
        `Discuss how energy and connection flow in more than one direction once several species and predators are added.`,
        `Key Question: "What would happen to the lions if there were suddenly far fewer antelope?"`,
      ],
    },
    {
      title: `The Ripple Effect Challenge (10 minutes)`,
      points: [
        `Activity: In groups, students predict what might happen to the whole food web if one link — for example, all the antelope — suddenly disappeared, tracing the ripple effects forward (less food for lions) and sideways (more grass left uneaten, affecting other herbivores).`,
        `Groups share one ripple effect they predicted and explain their reasoning using the food web diagram.`,
        `Key Question: "Which part of the food web do you think would be hit hardest, and why?"`,
      ],
    },
  ],
  exitTicket: `Write one sentence: name ONE feeding connection in the savanna food web, and explain what might happen if it were broken.`,
  faith: {
    ponder: `A food web is a picture of astonishing, interlocking design — every creature connected to another, nothing standing entirely alone. Genesis describes God's care in exactly this way: a world made whole, each part depending on and supporting the next.`,
    verse: `God saw all that he had made, and it was very good.`,
    ref: `Genesis 1:31 (NIV)`,
    value: `Aroha  Love (World)`,
    valueDesc: `Understanding how deeply every creature in the savanna depends on another helps us love and care for creation as the connected whole God made it to be, not as isolated pieces.`,
    questions: [
      `Genesis says God looked at everything he'd made, connected and complete, and called it "very good." How does seeing a food web change the way you think about that verse?`,
      `Tapiwa's dad's team studies how everything out here is connected. Who or what are YOU connected to and depend on, in ways you don't always notice?`,
      `What is one small way you could care for a "connection" in your own life or community this week — a friendship, a responsibility, a piece of creation nearby?`,
    ],
  },
  resources: [
    `Whiteboard or large paper for building the class food web diagram`,
    `Animal/plant cards (grass, antelope, zebra, lion, leopard, scavenger) for the diagram-building activity`,
    `Images of lions and leopards hunting or resting, for context`,
  ],
  videos: [
    { title: `How savanna food webs work`, search: `savanna food web lion leopard explained kids`, why: `Gives students a clear visual grounding in food web relationships before the ripple-effect activity.` },
  ],
  studentAgency: {
    art: { title: `Draw Your Food Web Section`, body: `Draw your own small section of a savanna food web, with at least four connected organisms.\n\n**Instructions:**\n1. Choose four organisms (at least one plant, one herbivore, one predator, one other).\n2. Draw arrows showing "eaten by" connections between them.\n3. Label each arrow with the direction of energy flow.\n\n**Reflection Prompt:** Which organism in your web has the most connections, and what does that suggest about its importance?` },
    readWrite: { title: `A Day in the Food Web`, body: `Write a short story following one meal, from grass to antelope to lion, describing the journey of energy through the food web.\n\n**Word Count Guide:** 100–150 words.\n\n**Reflection Prompt:** What surprised you about tracing energy this way?` },
    technology: { title: `Build a Digital Food Web Diagram`, body: `Using a simple drawing or slide tool, build a labelled food web diagram showing at least five connected organisms and the direction of energy flow.\n\n**Reflection Prompt:** What was the trickiest connection to represent clearly?` },
    watchReview: { title: `Watch and Note: Savanna Food Webs`, body: `Watch a short video about how savanna food webs work.\n\n**Search term:** "savanna food web lion leopard explained kids"\n\n**Reflection Prompt:** What is one connection in the food web you hadn't thought about before?` },
  },
},

// ============================== FRIDAY — ART ==============================
{
  day: `Friday`, strand: `Art`, sessionLabel: `Flight Log 15: Painting the Walls`,
  topic: `PAINTING THE WALLS — Ndebele Geometric House Art`,
  curriculumArea: `The Arts`,
  aos: [
    `Visual Arts, Developing Practical Knowledge: explore and use materials, techniques and technologies with growing confidence, including pattern and symmetry, to develop a work with intention.`,
  ],
  keyCompetencies: `Thinking; Language, Symbols and Text`,
  learningIntentions: [
    `We are learning that Ndebele house painting is a real, living geometric art tradition, painted directly onto the outside walls of homes.`,
    `We are learning that Ndebele wall art relies on precise, repeated geometry and symmetry, not free-hand guessing.`,
    `I can plan and create a geometric pattern with intentional meaning, in the spirit of Ndebele wall art.`,
  ],
  assessment: `Teacher observation of the symmetry-planning and painting process; review of finished patterns and explanations for evidence of intentional design choices.`,
  introduction: `"In my village, the walls themselves are art," Nomvula says, and for the first time the class can hear the sound of her village behind her voice — distant voices, someone laughing. "My gogo is one of the best house-painters around — bold geometric patterns, painted straight onto the outside walls, for everyone passing by to see. Every pattern can mean something, if you know how to look. That's the pattern of it. Today, design your own — something that would mean something to YOU, painted big enough for the whole street to see."

Wonder question: if your own house's outside wall was painted with one pattern, visible to your whole street, what would you want it to say about your family?`,
  mainContent: [
    {
      title: `What Is Ndebele Wall Art? (10 minutes)`,
      points: [
        `Teacher Input: Ndebele house painting is a living tradition from Southern Africa, most associated with Ndebele communities, in which women traditionally paint bold, geometric patterns — straight lines, triangles, zigzags and repeating shapes in strong, contrasting colours — directly onto the outside walls of their homes.`,
        `Explain that this art form is not random decoration: patterns are planned with real precision and symmetry, and can carry meaning, mark celebrations, or express identity and pride, visible to the whole community.`,
        `Key Question: "Why might painting a pattern on the OUTSIDE of a house, for everyone to see, feel different from painting something just for yourself?"`,
      ],
    },
    {
      title: `Planning With Symmetry (10 minutes)`,
      points: [
        `Teacher Input: Real Ndebele wall art relies on careful, repeated geometry — straight lines and precise angles, often planned out before any paint is applied, so the finished mural reads as sharp and intentional rather than freehand and uneven.`,
        `Model briefly: sketch a simple symmetrical geometric pattern on grid paper, showing how a shape repeated and mirrored builds a stronger design than one placed randomly.`,
        `Key Question: "What might go wrong with a wall pattern that wasn't planned for symmetry first?"`,
      ],
    },
    {
      title: `Ndebele-Inspired Geometric Wall Art (15 minutes)`,
      points: [
        `Activity: Using bold, bright paint or oil pastel on paper, students design a geometric pattern inspired by Ndebele house painting — straight lines, triangles, and repeating shapes in strong contrasting colours, arranged the way a real house-wall mural would be.`,
        `Before painting, students plan their pattern's symmetry on grid paper, mirroring how real Ndebele wall art is planned with precise, repeated geometry rather than free-hand guessing.`,
        `Key Question: "Which part of your pattern repeats, and why does repetition make a wall mural stronger?"`,
      ],
    },
  ],
  exitTicket: `Choose one shape in your design and explain, in one sentence, what it represents to you.`,
  faith: {
    ponder: `Nomvula's gogo paints patterns bold enough for a whole street to see — a visible, public expression of identity and pride. The Bible often speaks of light that isn't meant to be hidden, but placed where everyone can see it.`,
    verse: `Let your light shine before others, that they may see your good deeds.`,
    ref: `Matthew 5:16 (NIV)`,
    value: `Manaaki  Serve`,
    valueDesc: `Creating something bold and visible, meant to be seen and shared with a whole community, is one way of serving others with our gifts rather than keeping them hidden.`,
    questions: [
      `Jesus talks about a light that shouldn't be hidden. Ndebele wall art is a light of a different kind — visible pride, painted for everyone. What "light" do you have that you sometimes keep too hidden?`,
      `Nomvula's gogo paints for her whole street, not just her own house. Who in your life creates or does something generous, meant for others to enjoy, not just themselves?`,
      `What is one way you could let something good about you "shine" more visibly this week, the way this wall art does?`,
    ],
  },
  resources: [
    `Bold, bright paint or oil pastels in strong contrasting colours (e.g. black, white, red, yellow, blue)`,
    `Grid paper for symmetry planning`,
    `A small set of respectful reference images of real Ndebele house-painted walls`,
  ],
  videos: [
    { title: `Ndebele house painting explained`, search: `Ndebele house painting geometric wall art South Africa`, why: `Gives students a respectful, visual grounding in the real tradition before they plan their own pattern.` },
  ],
  studentAgency: {
    art: { title: `Extend Your Pattern`, body: `Take your finished geometric pattern and design a second version using a completely different colour combination, keeping the same shapes and symmetry.\n\n**Reflection Prompt:** How much did changing only the colours change the overall feeling of your pattern?` },
    readWrite: { title: `The Meaning Behind the Wall`, body: `Write out, in full sentences, what your pattern represents and why you chose those particular shapes and colours.\n\n**Word Count Guide:** 80–120 words.\n\n**Reflection Prompt:** Do you think a stranger walking past your "wall" would guess the same meaning without your explanation?` },
    technology: { title: `Design a Digital Symmetrical Pattern`, body: `Using a simple drawing tool, create a digital geometric pattern with clear symmetry, in the spirit of Ndebele wall art.\n\n**Reflection Prompt:** What was harder to achieve digitally — the geometry, or the symmetry?` },
    watchReview: { title: `Watch and Note: Ndebele Wall Art`, body: `Watch a short video about Ndebele house painting.\n\n**Search term:** "Ndebele house painting geometric wall art South Africa"\n\n**Reflection Prompt:** What is one thing that surprised you about how precise or how meaningful this art form is?` },
  },
},

]

// Register these lesson plans into the shared app registry, additively (won't overwrite
// Thursday's entry, already registered by data/term3-lessonplans-thursdays.js).
window.ALL_LESSON_PLANS = window.ALL_LESSON_PLANS || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'] = window.ALL_LESSON_PLANS['skybound-baobab-route'] || {}
window.ALL_LESSON_PLANS['skybound-baobab-route'][3] = window.ALL_LESSON_PLANS['skybound-baobab-route'][3] || {}
SKYBOUND_WEEK3_LESSONS.forEach(lesson => {
  window.ALL_LESSON_PLANS['skybound-baobab-route'][3][lesson.day] = lesson
})
