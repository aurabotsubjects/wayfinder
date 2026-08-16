// ═══════════════════════════════════════════════════════════════════════════
// SKYBOUND: THE BAOBAB ROUTE — Term 3 story/quest data
// History: Southern Africa (Zimbabwe & South Africa) · Geography: Farming & Land
// Science: Savanna Ecology & Wildlife · Technology: Conservation & Field Tech
// Art: Southern African Art Traditions
// Guides: Tapiwa (Hwange/Vic Falls) & Nomvula (Ndebele village) — see
// data/term3-lessonplans-thursdays.js header notes for full character bible.
// Edit only this file to update Term 3's Monday–Friday story content.
// Rich teacher lesson plans (Learning Intentions, Teacher Input, etc.) live in
// the companion data/term3-lessonplans-weekN.js files and register separately
// into window.ALL_LESSON_PLANS['skybound-baobab-route'].
// ═══════════════════════════════════════════════════════════════════════════

const TERM3_DATA = {

  weeks: {

    1: { chapter: 'Take-Off', days: {
      Monday: {
        strand: 'History', trialNum: 1, trialName: 'The Logbook Opens',
        story: `<em>An old leather logbook tumbles out of a battered suitcase prop. The moment it opens, the classroom window seems to fill with cloud, and the room tilts gently, like it's banking in the air.</em><br><br>"Sharp, crew!" <em>A boy's voice, grinning, framed by red dust and thorn trees.</em> "I'm Tapiwa. This logbook belonged to my grandfather, Sekuru Josiah — he flew bush planes his whole life, and now my cousin and I use it to bring people to meet our world. You're airborne now, whether you meant to be or not.<br><br>Before we go anywhere, you should know where 'here' actually is. Zimbabwe, South Africa — big names, but I want you to see them properly, on the map, and meet the very first people who ever called this land home: the San. Ready when you are."`,
        activity: `Locate Zimbabwe and South Africa on a large map of Africa, then zoom into the region. Introduce the San (Bushmen) as Southern Africa's first peoples — hunter-gatherers whose knowledge of the land stretches back tens of thousands of years.`,
        quest: `In pairs, list three things you'd need to know about a landscape before you could survive in it without shops, taps, or roads. Compare with what the San actually knew.`,
        creative: `Draw a simple route line from where you live to Hwange, Zimbabwe, and mark one thing you're curious to find out along the way.`,
        journalWakes: `A small hand-drawn map of Southern Africa appears in the logbook, a single dotted line curling toward Hwange. <em>"That's the start of it, crew. My cousin Nomvula's going to want to meet you too — she's louder than me about some things and quieter about others, you'll see.<br><br>Tomorrow, I want to show you the actual shape of this place — the land itself, why it looks the way it does. Sharp, see you then."</em>`,
        bible: `Acts 17:26 (NIV) — "From one man he made all the nations... and marked out their appointed times in history and the boundaries of their lands."`,
        value: 'Know', curriculum: `Social Sciences — Understanding Place and Environment: locating Southern Africa and meeting its first peoples.`
      },
      Tuesday: {
        strand: 'Geography', trialNum: 2, trialName: 'Three Kinds of Country',
        story: `"Sharp, crew — back already. Good.<br><br>Here's something that took me a while to get: Zimbabwe and South Africa aren't just one kind of place. There's the savanna where I live, all dry grass and thorn trees. There's the highveld, up high and cooler. There's the lowveld, hot and low near the rivers. My gogo — my grandmother — always says you can't farm the same way in all three, and you definitely can't dress the same way either. Help me show you the difference?"`,
        activity: `Using a physical/climate map of Southern Africa, sort photographs of savanna, highveld, and lowveld landscapes into the correct climate zone, discussing rainfall, temperature, and vegetation differences.`,
        quest: `In groups, predict what kind of house, clothing, and food would suit each of the three zones, and explain your reasoning using the climate clues.`,
        creative: `Design a simple postcard from one of the three zones, showing what you'd see, hear, and feel there.`,
        journalWakes: `Three small landscape sketches appear side by side in the logbook. <em>"Now you've got it — three very different countries wrapped up in two. Tomorrow, I want to show you the tree that survives ALL three, somehow. Wait until you see it. It's not like any tree you've met."</em>`,
        value: 'Love'
      },
      Wednesday: {
        strand: 'Science', trialNum: 3, trialName: 'The Tree That Stores Water',
        story: `"There's a tree near our home that's older than anyone can properly count — Sekuru Josiah reckons some baobabs are over a thousand years old. It looks upside-down, like someone planted its roots in the sky by mistake. During the dry season, when everything else has given up, it's still standing there, full of water it stored months ago. How does a TREE do that? I've wondered my whole life."`,
        activity: `Investigate the savanna biome and explore how the baobab tree survives extreme dry seasons — its swollen water-storing trunk, deep roots, and how it supports wildlife (elephants, birds, bats) even in drought.`,
        quest: `In teams, list every living thing that might depend on a single baobab tree for food, water, or shelter, and explain the connections you find.`,
        creative: `Sketch a baobab and label three features that help it survive the dry season.`,
        journalWakes: `A wide, strange-shaped tree appears drawn in the margin of the logbook. <em>"Told you it looks upside-down. Baba — my dad — says the old stories call it the tree the gods planted the wrong way up in a hurry. Tomorrow, I want to show you how my ancestors read the land itself, without any of it being written down. Sharp, see you then."</em>`,
        value: 'Love', curriculum: `Science, Living World — Ecology: adaptation of the baobab and interdependence within the savanna biome.`
      },
      Thursday: {
        strand: 'Technology', trialNum: 4, trialName: 'Reading the Land',
        story: `"See this scar in the dirt?" <em>Tapiwa crouches by a smudged track.</em> "Before anyone had a radio or a camera, my ancestors could read a whole story out of dirt like this — the San people, tracking animals across the whole of Southern Africa. I tried it myself this morning, before you got here, and I'm honestly not as good at it as I'd like to be. Help me get better?"`,
        activity: `Explore tracking as a technology — how the San read spoor (footprints, droppings, broken grass) to know which animal passed, how long ago, and in what direction. Sort spoor identification cards and attempt a simple tracking challenge.`,
        quest: `Using a set of spoor clue cards, work out what animal passed, how recently, and which way it was heading — and justify your answer with the actual evidence.`,
        creative: `Design your own footprint or "spoor" symbol for an animal of your choice, one a tracker could learn to recognise at a glance.`,
        journalWakes: `A page of animal tracks fills the logbook margin, each one carefully labelled. <em>"Not bad, crew, not bad at all. Sekuru Josiah says reading the land properly is the first skill any ranger learns, before radios, before cameras, before anything. Tomorrow — my grandmother's people have been painting stories onto rock for longer than anyone can count. I want you to see it."</em>`,
        value: 'Know', curriculum: `Technology — Nature of Technology: tracking as humanity's original information-gathering technology.`
      },
      Friday: {
        strand: 'Art', trialNum: 5, trialName: 'Stories on Stone',
        story: `<em>Tapiwa's voice softens, more careful than usual.</em> "San rock art is some of the oldest storytelling in the entire world — paintings on cave walls and rock faces that have survived for thousands of years. No pen, no paper, just ochre and rock and something that mattered enough to last. Today I want you to make a symbol of your own, one that tells a story the way theirs did — through shape alone, not words."`,
        activity: `**Symbol-Based Rock Art:** On paper made to resemble stone (torn-edged brown/orange paper), use ochre-toned paint, pastel, or crayon to create a symbol-based artwork inspired by San rock art — figures, animals, or symbols telling a simple story without any written words.`,
        quest: `Swap artworks with a partner and try to "read" the story in their symbols before they explain it — then compare what you guessed with what they meant.`,
        creative: `Give your finished piece a title using only symbols, no words at all.`,
        journalWakes: `END OF WEEK — a small painted symbol, half-finished, appears at the bottom of the logbook page, as if someone started it and got interrupted. <em>"Sharp, crew — good first week. Nomvula's finally free to talk properly next week, and honestly, she's better at explaining what things MEAN than I am. See you at Hwange."</em>`,
        value: 'Know', curriculum: `The Arts, Visual Arts — Developing Practical Knowledge: symbol-based storytelling through art.`
      }
    }},

    2: { chapter: 'Landing at Hwange', days: {
      Monday: {
        strand: 'History', trialNum: 6, trialName: 'The Stone City',
        story: `"Sharp, crew — Sekuru Josiah's telling this one, not me, so listen carefully.<br><br><em>The old pilot's voice crackles warmly over the radio.</em> Long before any European ever set foot here, my people built a city of stone — walls stacked so precisely, without a scrap of mortar, that they've stood for centuries. Great Zimbabwe, they call it now. A whole trading kingdom, right here, before anyone from outside had ever heard of us. My grandson still gets a look on his face every time I tell this one — proud, like it surprises him it's actually true."`,
        activity: `Explore Great Zimbabwe — the Stone City, its dry-stone walls built without mortar, and what the site tells us about a powerful trading civilisation that existed centuries before European contact.`,
        quest: `In groups, discuss: why might a civilisation as impressive as Great Zimbabwe be less well-known globally than others of a similar age? What does that tell us about whose stories get told?`,
        creative: `Sketch a simple stone wall pattern inspired by Great Zimbabwe's dry-stone construction, without using any mortar or glue in your drawing's "joins."`,
        journalWakes: `A curved stone wall, carefully drawn, fills the logbook page. <em>"See? Told you it'd surprise you. Tomorrow — my mum's maize plot. Smaller than Great Zimbabwe, but just as important to us."</em>`,
        bible: `Psalm 78:4 (NIV) — "We will tell the next generation the praiseworthy deeds of the Lord."`,
        value: 'Know', curriculum: `Social Sciences — Understanding the Past: evidence, perspective, and civilisations before written record.`
      },
      Tuesday: {
        strand: 'Geography', trialNum: 7, trialName: 'What the Family Table Needs',
        story: `"My mum keeps a small plot behind our house — maize, sorghum, groundnuts. Nothing fancy, nothing for selling, just enough to feed us. Pipi — my little cousin — thinks food just appears, which, fair enough, she's six. But growing just enough for your own family, that's a whole different job to growing a big field to sell. Help me show the difference?"`,
        activity: `Explore subsistence farming — small-holder crops like maize, sorghum, and groundnuts grown primarily to feed a family — and why it remains central to food security for many rural households.`,
        quest: `As a class, plan a small subsistence plot: what three crops would you choose, and why, if the goal was simply feeding your own family through the year?`,
        creative: `Draw your imagined family plot from above, like a map, labelling what's growing where.`,
        journalWakes: `A neat little sketched plot appears in the margin — three rows, carefully labelled. <em>"Mum would approve of that layout, honestly. Tomorrow — how the plants around here survive months without proper rain. It's cleverer than you'd think."</em>`,
        value: 'Impact'
      },
      Wednesday: {
        strand: 'Science', trialNum: 8, trialName: 'Built for the Dry',
        story: `"Thorns, tiny leaves, roots that go deeper than the plant is tall — the plants out here aren't lucky, they're built. Every single feature is solving a problem: how do you survive months without rain? I want to actually understand WHY, not just know that they do."`,
        activity: `Investigate plant adaptations to drought — how thorns deter grazing, small leaves reduce water loss, and deep root systems reach underground water — across common savanna plants.`,
        quest: `In teams, choose a savanna plant feature (thorns, small leaves, or deep roots) and explain the specific survival problem it solves.`,
        creative: `Design an imaginary "super-adapted" plant for extreme drought, labelling each feature and the problem it solves.`,
        journalWakes: `A thorny, deep-rooted plant sketch appears, roots trailing off the bottom of the page. <em>"Now I get why nothing out here looks 'wasteful' — every part of these plants is working for its life. Tomorrow — how my dad's team stays in touch across a reserve the size of a small country. Should be a good one."</em>`,
        value: 'Love', curriculum: `Science, Living World — Ecology: plant adaptation to drought conditions in the savanna biome.`
      },
      Thursday: {
        strand: 'Technology', trialNum: 9, trialName: 'Staying Connected Across the Bush',
        story: `"My dad's a ranger — an anti-poaching scout, out on patrol most days. Hwange is bigger than some entire countries, crew, properly huge. If something urgent happens on one side of it, how does help possibly arrive fast enough to matter? Sekuru Josiah used a radio in his plane his whole flying life. Dad still carries one on patrol. I want to show you why it matters so much."`,
        activity: `Explore two-way radio communication technology — how rangers coordinate across vast reserves, relay urgent sightings, and call for backup, and why fast, reliable communication can be the difference between saving an animal and losing it.`,
        quest: `In pairs, role-play a short radio exchange between two rangers reporting an urgent sighting — practise being clear, calm, and fast.`,
        creative: `Design a simple radio call-sign for yourself as a ranger-in-training, and explain what it means.`,
        journalWakes: `A little sketched radio, aerial and all, appears beside a scribbled call-sign. <em>"That's the pattern of it, crew — Baba's actually fine, by the way, radio just went a bit quiet earlier and I worried for nothing. Tomorrow — my mum's cousin's husband carves stone the way I wish I could draw. Wait till you see it."</em>`,
        value: 'Serve', curriculum: `Technology — Technological Practice: communication systems and their role in coordinating action over distance.`
      },
      Friday: {
        strand: 'Art', trialNum: 10, trialName: 'Carving a Story in Stone',
        story: `"Shona stone sculpture is famous the world over — proper famous, museums-and-galleries famous. It's not just decoration, it's storytelling, the same way San rock art is, just carved instead of painted. A block of stone becomes a bird, an ancestor, a feeling. I want you to try shaping something today, even if all we've got is soap and not stone."`,
        activity: `**Soap or Clay Carving:** Using soft carving soap (or air-dry clay as a substitute), carve a simple figure inspired by Shona stone sculpture traditions — an animal, ancestor figure, or abstract form representing an idea or feeling, using safe carving tools under supervision.`,
        quest: `Before carving, sketch your planned figure from three different angles — carvers plan every side before they start removing material they can't put back.`,
        creative: `Give your finished carving a one-word title that captures the feeling or idea behind it.`,
        journalWakes: `END OF WEEK: a small carved figure, rough but recognisable, is drawn resting on the logbook's page. <em>"Sharp, crew — good work this week. Nomvula's voice is coming through properly next week, finally, radioing in from her village for the first time. Get ready."</em>`,
        value: 'Love', curriculum: `The Arts, Visual Arts — Developing Practical Knowledge: carving as storytelling.`
      }
    }},

    3: { chapter: 'Following the Zambezi', days: {
      Monday: {
        strand: 'History', trialNum: 11, trialName: 'The Gold and Ivory Kingdom',
        story: `<em>A new voice crackles in over the radio for the first time — steady, a little shy, but sure of itself.</em> "Sharp, crew, this side too." <em>Tapiwa grins.</em> "That's my cousin Nomvula, finally! She's been waiting to tell you this one herself." <em>Nomvula continues:</em> "Before Great Zimbabwe even faded, there was Mapungubwe — a gold and ivory trading kingdom, right here, trading all the way to Arabia, India, even China. That's the pattern of it, crew: this land has been connected to the whole world for a very, very long time."`,
        activity: `Explore Mapungubwe — the gold and ivory trading kingdom, and its Indian Ocean trade links stretching to Arabia, India, and China, using a map to trace the trade routes.`,
        quest: `Using the map, trace a possible trade route from Mapungubwe to one of its trading partners, and discuss what goods might have travelled each way.`,
        creative: `Design a simple trade-mark or seal that a Mapungubwe merchant might have used on their goods.`,
        journalWakes: `A curled trade-route line, connecting several distant points, is drawn across a small map in the logbook. <em>"Sharp, crew — that's global trade, centuries before anyone called it that. Tomorrow, Baba's team and how farming here can be about more than just feeding your own family. Nomvula out."</em>`,
        bible: `Proverbs 11:1 (NIV) — "The Lord detests dishonest scales, but accurate weights find favor with him."`,
        value: 'Know', curriculum: `Social Sciences — Understanding the Past: trade networks and evidence of Southern Africa's global connections before colonisation.`
      },
      Tuesday: {
        strand: 'Geography', trialNum: 12, trialName: 'Farming for the World, Not Just the Table',
        story: `"Tobacco, citrus, sugar — some farms around here aren't growing food for the family table, they're growing for export, for markets far beyond Zimbabwe or South Africa entirely. That's a completely different kind of farming to my mum's little plot. Different scale, different risks, different everything. Let's compare them properly."`,
        activity: `Explore commercial farming — tobacco, citrus, and sugar grown for export — comparing scale, purpose, and risk to subsistence farming from Week 2.`,
        quest: `As a class, build a comparison chart: subsistence farming vs commercial farming, across purpose, scale, and what happens if the harvest fails.`,
        creative: `Design a simple export label for a Southern African farm product of your choice.`,
        journalWakes: `A neat two-column comparison chart appears sketched in the logbook. <em>"That's the pattern of it — different farms, different jobs, both matter. Tomorrow — lions, leopards, and how everything out here is connected to everything else, whether it wants to be or not."</em>`,
        value: 'Impact'
      },
      Wednesday: {
        strand: 'Science', trialNum: 13, trialName: 'Who Eats Whom',
        story: `"You can't understand a lion without understanding everything it eats, and everything THAT eats, all the way down to the grass. My dad's team studies this constantly — predators, prey, and everything connecting them. Show me how it all fits together?"`,
        activity: `Explore predators of the savanna (lion, leopard) and how food webs connect plants, herbivores, and predators — building a simple savanna food web diagram together as a class.`,
        quest: `In groups, predict what might happen to the whole food web if one link — say, all the antelope — suddenly disappeared. Trace the ripple effects.`,
        creative: `Draw your own small section of a savanna food web, with at least four connected organisms.`,
        journalWakes: `A web of arrows, connecting grass to antelope to lion, spreads across the logbook page. <em>"Everything really is connected, isn't it. Tomorrow — how my dad's team watches predators without ever actually disturbing them. Clever bit of kit, that one."</em>`,
        value: 'Love', curriculum: `Science, Living World — Ecology: food webs and interdependence in the savanna biome.`
      },
      Thursday: {
        strand: 'Technology', trialNum: 14, trialName: 'Watching Without Disturbing',
        story: `"Here's a real problem: if you want to study a lion, walking up close to watch it is a terrible idea — for you AND the lion. My dad's team uses camera traps instead — motion- and heat-triggered cameras that capture images without a single person ever needing to be there. I want to show you how researchers actually use what those cameras capture."`,
        activity: `Explore camera trap technology — motion- and heat-triggered cameras that let researchers study lions, leopards, and other predators without disturbing them — and how the images feed real conservation research.`,
        quest: `In pairs, decide where you'd place a camera trap in a savanna landscape to maximise your chance of capturing predator activity, and explain your reasoning.`,
        creative: `Design a simple camera trap alert icon — something that would flag "predator spotted!" at a glance.`,
        journalWakes: `A small sketched camera, strapped to a tree trunk, appears in the logbook margin. <em>"Watching without disturbing — that's the real skill, crew. Tomorrow — Nomvula's village, and the patterns painted right onto the walls of the houses there. Her turn to show off, properly this time."</em>`,
        value: 'Know', curriculum: `Technology — Nature of Technology: non-invasive monitoring technology and its role in wildlife research.`
      },
      Friday: {
        strand: 'Art', trialNum: 15, trialName: 'Painting the Walls',
        story: `"In my village, the walls themselves are art," <em>Nomvula says.</em> "My gogo is one of the best house-painters around — bold geometric patterns, painted straight onto the outside walls, for everyone passing by to see. Every pattern can mean something, if you know how to look. That's the pattern of it. Today, design your own — something that would mean something to YOU, painted big enough for the whole street to see."`,
        activity: `**Ndebele-Inspired Geometric Wall Art:** Using bold, bright paint or oil pastel on paper, design a geometric pattern inspired by Ndebele house painting — straight lines, triangles, and repeating shapes in strong contrasting colours, arranged the way a real house-wall mural would be.`,
        quest: `Before painting, plan your pattern's symmetry on grid paper — real Ndebele wall art relies on precise, repeated geometry, not free-hand guessing.`,
        creative: `Choose one shape in your design and explain, in one sentence, what it represents to you.`,
        journalWakes: `END OF WEEK: a bold geometric border, sharp and colourful, frames the edge of the logbook page. <em>"That's the pattern of it, properly," Nomvula says, satisfied. <em>Tapiwa adds:</em> "Next week gets heavier, crew — I won't lie to you about that. But we'll get through it together. Sharp, see you then."</em>`,
        value: 'Serve', curriculum: `The Arts, Visual Arts — Developing Practical Knowledge: pattern, symmetry, and cultural meaning in Ndebele wall art.`
      }
    }},

    4: { chapter: 'Storm Over the Reserve', days: {
      Monday: {
        strand: 'History', trialNum: 16, trialName: 'A Kingdom on the Move',
        story: `<em>The radio crackles with more static than usual today.</em> "Sharp, crew," Tapiwa says, quieter than before. "Before I tell you today's history, you should know — it's connected to something happening right now, this week. But first, the story: in the early 1800s, drought and conflict pushed huge movements of people across this region — the Mfecane, it's called — and out of it, the Ndebele Kingdom rose. Whole nations, on the move, rebuilding somewhere new. Nomvula's people, actually. Her whole village traces back to it."`,
        activity: `Explore the Ndebele Kingdom and the Mfecane migrations of the early 1800s — how drought and conflict pushed large movements of people across the region, and how new nations formed from that upheaval.`,
        quest: `In groups, discuss: what might make a whole community decide to leave everything they know and rebuild somewhere entirely new? List at least three possible reasons.`,
        creative: `Draw a simple migration route on a map, imagining the journey a community might have taken during the Mfecane.`,
        journalWakes: `A single dotted migration line, crossing hills and rivers, is sketched into the logbook. <em>"Big history, crew. But listen — the radio's been crackling for a real reason today. Tomorrow, water, and why it's suddenly the most important thing on everyone's mind around here."</em>`,
        bible: `Psalm 46:1 (NIV) — "God is our refuge and strength, an ever-present help in trouble."`,
        value: 'Know', curriculum: `Social Sciences — Understanding the Past: migration, conflict, and the formation of new communities.`
      },
      Tuesday: {
        strand: 'Geography', trialNum: 17, trialName: 'When the Rain Doesn\u2019t Come',
        story: `"The Kariba Dam is one of the biggest in the world — it holds back the Zambezi River, makes electricity for whole countries. But when the rains fail, even something that huge feels small against the problem. Drought doesn't just dry out a field, crew — it changes everything downstream from it. I want you to see the whole picture, not just my mum's plot."`,
        activity: `Explore water and irrigation — the Kariba Dam's role in the region, and how drought affects farming communities from small family plots to entire river systems.`,
        quest: `In groups, map out everything that depends on the Zambezi's water — farms, electricity, wildlife, people — and discuss what happens to each when a drought hits.`,
        creative: `Design a simple poster encouraging water-saving at home, using one clear image and a short slogan.`,
        journalWakes: `A wide dam wall, water pooling behind it, is drawn stretching across the logbook page. <em>"Big picture, small choices — they're connected. Tomorrow's the hard one, crew. I won't pretend it isn't."</em>`,
        value: 'Impact'
      },
      Wednesday: {
        strand: 'Science', trialNum: 18, trialName: 'The Rhino Crisis',
        story: `<em>Tapiwa goes quiet — properly quiet, not joke-quiet — turning a small wooden elephant over and over in his pocket.</em> "Poachers," he says eventually. "Near the reserve. Dad's team is out right now." <em>Nomvula's voice comes through, steady.</em> "That's the pattern of it, crew — this is the hard week. Rhino poaching is real, and it's happening near people we love. But listen: there ARE people, and tools, fighting for them. I don't know if we can fix this one completely. I don't think anyone does. But we're not giving up on it either."`,
        activity: `Explore the endangered species crisis facing rhinos, the science behind population decline, and the people and organisations working to protect them — approached honestly but without graphic detail.`,
        quest: `As a class, discuss: why might protecting one endangered species matter to an entire ecosystem, not just to that one animal?`,
        creative: `Design a simple awareness symbol for rhino conservation that could appear on a poster or badge.`,
        journalWakes: `A rhino, drawn carefully and protectively in the margin, watches over the logbook page. <em>"Thank you for sitting with the hard part of this with us, crew. Tomorrow — the actual tools Dad's team uses in this exact fight. It helps to know something's being done."</em>`,
        value: 'Impact', curriculum: `Science, Living World — Evolution (introductory, via extinction risk): conservation and endangered species.`
      },
      Thursday: {
        strand: 'Technology', trialNum: 19, trialName: 'Proving Which Rhino, Which Reserve',
        story: `"If a rhino horn turns up somewhere it shouldn't be, how could anyone possibly prove exactly which rhino it came from, or which reserve? My dad's team uses horn notching, microchipping, and something called the RhODIS DNA database — every rhino horn in South Africa can be traced, like a fingerprint. This is the real fight, crew, the actual tools in it."`,
        activity: `Explore anti-poaching technology — horn notching, microchipping, and the RhODIS DNA database that allows every rhino horn in South Africa to be traced back to a specific animal and reserve.`,
        quest: `In pairs, discuss: why might being ABLE to prove exactly where a horn came from help stop poaching, even before an arrest happens?`,
        creative: `Design a simple "tracked and protected" tag symbol that could represent a microchipped, DNA-registered rhino.`,
        journalWakes: `A small notched horn symbol, carefully drawn, appears beside a scribbled DNA strand. <em>"That's real hope, crew, not just a nice idea. Tomorrow — colour and pattern as a whole language, the way Gogo Thandiwe teaches it. A gentler day, I promise."</em>`,
        value: 'Impact', curriculum: `Technology — Nature of Technology: how forensic and tracking technology supports wildlife protection.`
      },
      Friday: {
        strand: 'Art', trialNum: 20, trialName: 'What a Colour Can Say',
        story: `"My gogo says every bead colour and pattern can communicate something, if you know the language," <em>Nomvula says, turning her half-finished beadwork bracelet over in her hands.</em> "After this week, I wanted a gentler day — something that reminds us why we protect what we protect. Design your own bead pattern today, and give it real meaning, not just pretty colours."`,
        activity: `**Beadwork Pattern Design:** Using paper "beads" (coloured circles/squares) or real beads on string/card, design a beadwork pattern inspired by traditional Southern African colour symbolism, assigning meaning to each colour used (e.g. green for land, blue for water, red for courage).`,
        quest: `Before starting, agree on a simple class "colour code" — three or four colours and what each represents — then design individually using that shared code.`,
        creative: `Write one sentence explaining what your finished pattern says, using only its colours as your "words."`,
        journalWakes: `END OF WEEK: a small beaded bracelet pattern, one bead further along than last time, is drawn in the logbook margin. <em>"One more bead added, crew — small progress, but it's there. Next week, the whole class helps us pull everything from this month together. Sharp, see you at the Trial."</em>`,
        value: 'Know', curriculum: `The Arts, Visual Arts — Communicating and Interpreting: colour and pattern as a symbolic language.`
      }
    }},

    6: { chapter: 'Crossing the Border', days: {
      Monday: {
        strand: 'History', trialNum: 21, trialName: 'New Arrivals, New Boundaries',
        story: `<em>The route crosses into South Africa for the first time — bigger cities, a different rhythm.</em> "Sharp, crew," Tapiwa says, a little out of his depth for once. "This part's not really mine to tell. Nomvula, over to you." <em>Nomvula, careful with her words:</em> "European settlers arrived here, and the British South Africa Company after them — and it changed everything about who owned this land, and how. It's a heavy story. I want to tell it honestly, but through what people DID next, not just what happened to them."`,
        activity: `Explore colonisation — the arrival of European settlers and the British South Africa Company, and its impact on land and people — presented honestly, focused on consequence and courage rather than graphic detail.`,
        quest: `As a class, discuss: when land ownership changes suddenly and unfairly, what choices are still left to the people affected? List examples of resilience, not just loss.`,
        creative: `Draw a simple "before and after" pair of sketches showing land use changing over time.`,
        journalWakes: `A single boundary line, drawn firmly across a small map, appears in the logbook. <em>"Heavy history, crew, and there's more of it coming this week. Tomorrow — what happens to a family's land and food when the land itself changes hands."</em>`,
        bible: `Micah 6:8 (NIV) — "And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God."`,
        value: 'Know', curriculum: `Social Sciences — Understanding the Past: colonisation and its consequences, presented with age-appropriate honesty.`
      },
      Tuesday: {
        strand: 'Geography', trialNum: 22, trialName: 'Whose Land, Whose Food',
        story: `"When land use changes hands, food security changes with it," <em>Nomvula says.</em> "Families who once farmed for themselves sometimes lost the ability to. It's not just a history fact — it still shapes who has enough to eat today. Let's look at it properly."`,
        activity: `Explore land and food security — how changing land use and ownership affected farming communities, and how it still shapes access to food today.`,
        quest: `In groups, discuss: what does a community need — land, water, seeds, knowledge — to feed itself reliably? What happens when even one of those is taken away?`,
        creative: `Design a simple "food security checklist" poster listing what a community needs to feed itself well.`,
        journalWakes: `A short checklist, hand-written, appears pinned into the logbook page. <em>"That's the pattern of it — food security isn't just about farming skill, it's about fairness too. Tomorrow — elephants, and why losing even one matters more than you'd think."</em>`,
        value: 'Impact'
      },
      Wednesday: {
        strand: 'Science', trialNum: 23, trialName: 'The Animal That Shapes the Land',
        story: `"Elephants aren't just big, crew — they're what scientists call a keystone species. They knock down trees, dig waterholes, spread seeds for kilometres. Take elephants away, and the whole savanna changes shape. I want you to see just how much weight rests on one kind of animal."`,
        activity: `Explore elephants as a keystone species — herd structure, migration patterns, and their outsized role in shaping the savanna landscape for countless other species.`,
        quest: `In groups, list three ways an elephant herd changes its landscape, and predict what might happen to those changes if the herd disappeared.`,
        creative: `Draw a "before and after" savanna landscape showing the difference elephants make.`,
        journalWakes: `A large elephant, mid-stride, is sketched shaping the land beneath its feet in the logbook. <em>"One animal, that much weight on its shoulders. Tomorrow — how researchers actually follow a whole herd's movement, without following it on foot the entire way."</em>`,
        value: 'Love', curriculum: `Science, Living World — Ecology: keystone species and their disproportionate impact on ecosystems.`
      },
      Thursday: {
        strand: 'Technology', trialNum: 24, trialName: 'Following the Herd from the Sky',
        story: `"Elephants can walk fifty kilometres in a single day. How could researchers possibly know exactly where a whole herd has been, without following it on foot the entire way? GPS and satellite tracking collars — that's how. My dad's team uses the same technology to get early warning before human-elephant conflict even starts."`,
        activity: `Explore GPS and satellite tracking collars — how researchers follow elephant herds' movement patterns, and how the same technology gives early warning of human-elephant conflict before it happens.`,
        quest: `In pairs, plot an imaginary elephant herd's GPS path across a floor/map grid over five "days," then discuss what patterns you notice.`,
        creative: `Design a simple collar-tag symbol showing a tracked elephant's ID and herd number.`,
        journalWakes: `A dotted GPS trail, looping across a savanna map, appears sketched into the logbook. <em>"Following without ever getting close — that's the whole trick of it. Tomorrow, Nomvula's turn again — the murals painted across whole neighbourhoods here, and the stories they tell."</em>`,
        value: 'Know', curriculum: `Technology — Nature of Technology: satellite tracking and its role in early-warning conservation systems.`
      },
      Friday: {
        strand: 'Art', trialNum: 25, trialName: 'A Wall Big Enough for a Whole Story',
        story: `"In townships across South Africa, whole walls become murals — communities telling their own stories in public, for everyone to see, not hidden away," <em>Nomvula says.</em> "Today, imagine a wall wide enough for a whole story, and design what you'd paint on it."`,
        activity: `**Mural Design:** On a long shared sheet of paper (or joined individual sheets), design a section of a community mural inspired by township art and mural storytelling — a scene, symbol, or message the community would want everyone passing by to see.`,
        quest: `As a group, agree on ONE shared theme for your whole mural before anyone starts painting their individual section, so the pieces connect into a single story.`,
        creative: `Write one sentence explaining what story your section of the mural tells.`,
        journalWakes: `END OF WEEK: a long, colourful mural strip is drawn stretching across the bottom of the logbook page. <em>"That's the pattern of it, crew — a story too big for one person, painted by everyone together. Next week, we're heading to my own village. It's my turn to be a little nervous about showing you something."</em>`,
        value: 'Love', curriculum: `The Arts, Visual Arts — Communicating and Interpreting: public art as collective storytelling.`
      }
    }},

    7: { chapter: 'The Village of Gogo Thandiwe', days: {
      Monday: {
        strand: 'History', trialNum: 26, trialName: 'Ubuntu — I Am, Because We Are',
        story: `<em>The route lands in Nomvula's own village. Her voice is proud, but there's something careful underneath it too.</em> "This is my home, crew — and this next part of the story is my family's, properly. Apartheid, the struggle for freedom, Nelson Mandela — it's hard history, but it's also a story about an idea called Ubuntu: 'I am, because we are.' Courage and unity got my grandmother's generation through it. I want you to understand the courage, not just the hardship."`,
        activity: `Explore apartheid and the struggle for freedom — Nelson Mandela, the idea of Ubuntu, and the path to reconciliation — framed honestly and age-appropriately around courage, unity, and the consequences of injustice, not graphic detail.`,
        quest: `As a class, discuss what "I am, because we are" might mean in your own classroom or community. Give one real example.`,
        creative: `Design a simple symbol representing Ubuntu — unity between people — for the class to display.`,
        journalWakes: `A small symbol of linked figures, hand in hand, appears drawn carefully in the logbook. <em>"Thank you for listening properly to that one, crew. It matters to me that you did. Tomorrow — something lighter: my family's cattle, and why they mean so much more than just farming."</em>`,
        bible: `1 Corinthians 12:12 (NIV) — "Just as a body, though one, has many parts... so it is with Christ."`,
        value: 'Love', curriculum: `Social Sciences — Understanding How Societies Work: justice, unity, and the path to reconciliation.`
      },
      Tuesday: {
        strand: 'Geography', trialNum: 27, trialName: 'More Than Just Cattle',
        story: `"Nguni cattle aren't just farm animals here — they're status, they're dowry, they're identity. My uncle's herd means something far bigger than the beef or milk it provides. I want to show you a kind of farming that's really about culture as much as food."`,
        activity: `Explore livestock farming and Nguni cattle — their deep cultural significance beyond farming, including status, lobola (dowry), and identity within Southern African communities.`,
        quest: `In pairs, discuss: what's something valuable in YOUR family or culture that means more than its practical use? Compare it to what cattle represent here.`,
        creative: `Design a simple Nguni-style hide pattern, choosing your own colours and shapes.`,
        journalWakes: `A patterned cattle hide, bold and distinctive, is sketched into the logbook. <em>"Cattle as identity, not just income — that's the pattern of it. Tomorrow — the small creatures doing HUGE work in my grandmother's fields, without anyone noticing."</em>`,
        value: 'Serve'
      },
      Wednesday: {
        strand: 'Science', trialNum: 28, trialName: 'The Small Workers of the Fields',
        story: `"Sunbirds, weaver birds — small, easy to overlook, but without them, so many plants around my grandmother's fields wouldn't reproduce at all. I want you to notice the small, quiet workers today, not just the big dramatic animals."`,
        activity: `Explore pollinators — sunbirds and weaver birds — and their essential role in plant reproduction across Southern African landscapes.`,
        quest: `In groups, list three plants or crops that would struggle without pollinators, and discuss what would happen to the wider food web without them.`,
        creative: `Draw a sunbird or weaver bird visiting a flower, and label how it helps the plant.`,
        journalWakes: `A small, brightly coloured bird is sketched mid-flight beside a flower in the logbook. <em>"Small but essential — that's today's whole lesson, really. Tomorrow — a fence that keeps my grandmother's crops safe using nothing but bees. You'll want to see this one."</em>`,
        value: 'Love', curriculum: `Science, Living World — Ecology: the role of pollinators in plant reproduction and ecosystem health.`
      },
      Thursday: {
        strand: 'Technology', trialNum: 29, trialName: 'The Fence Made of Bees',
        story: `"Listen," Nomvula says, pride creeping into her voice. "That's not just bees. That's the fence that keeps my grandmother's crops safe — and the elephants too, without hurting a single one. Elephants are terrified of bees, so a simple line of beehives strung on wire keeps them out of the fields, gently. It's such a simple idea, and it works."`,
        activity: `Explore beehive fences — a simple, low-cost invention using real beehives strung on wire around fields, using elephants' natural fear of bees to protect both crops and elephants at once, connecting directly to Wednesday's pollinators.`,
        quest: `In pairs, discuss: why might a "gentle" solution like a beehive fence be better than a solid wall or an electric fence, for both people AND elephants?`,
        creative: `Design a simple diagram of a beehive fence protecting a field, labelling how it works.`,
        journalWakes: `A line of small beehives, strung along a fence, is sketched around a field in the logbook. <em>"Technology that solves a problem for people AND animals at once — that's real genius, crew, not just cleverness. Tomorrow, weaving and fabric — my grandmother's other great skill."</em>`,
        value: 'Love', curriculum: `Technology — Technological Practice: low-cost, low-tech solutions that solve problems for both people and wildlife.`
      },
      Friday: {
        strand: 'Art', trialNum: 30, trialName: 'Threads That Tell a Story',
        story: `"Shweshwe fabric, basket weaving — my grandmother's other great skill, alongside painting the walls," <em>Nomvula says.</em> "Every thread, woven with intention. Today, I want you to try weaving something yourselves — even something small teaches you how much patience real weaving takes."`,
        activity: `**Simple Paper Weaving:** Using strips of coloured paper, weave a small mat or panel inspired by Shweshwe textile patterns and basket weaving techniques — over-and-under, in a deliberate repeating pattern.`,
        quest: `Before weaving, plan your colour pattern on paper first — real weavers plan the whole design before a single thread crosses another.`,
        creative: `Give your finished weaving a name, based on what its pattern reminds you of.`,
        journalWakes: `END OF WEEK: a small woven panel, colours interlocking neatly, is drawn filling a corner of the logbook page. <em>"That's the pattern of it, properly. Thank you for spending this week in my village with me, crew — all of it, the hard parts and the good ones. Next week's a celebration. You've earned it."</em>`,
        value: 'Know', curriculum: `The Arts, Visual Arts — Developing Practical Knowledge: weaving technique and pattern planning.`
      }
    }},

    8: { chapter: 'Independence Day', days: {
      Monday: {
        strand: 'History', trialNum: 31, trialName: 'The Day the Flag Changed',
        story: `<em>Music drifts somewhere in the distance. Tapiwa's unusually still, watching a small kite shaped like an aircraft.</em> "Independence Day, crew! Zimbabwe in 1980, South Africa's first democratic election in 1994 — both huge moments, both about the same thing at heart: a country's people finally getting to choose for themselves. Sekuru Josiah says he still remembers exactly where he was flying the day it happened. Let's find out what democracy and self-determination actually meant, for real people, on those days."`,
        activity: `Explore independence: Zimbabwe's 1980 independence and South Africa's first democratic election in 1994 — what democracy and self-determination meant for each country's people.`,
        quest: `As a class, discuss: what does it mean for a country's people to "choose for themselves"? List three things that might change on a day like that, and three things that might take much longer to change.`,
        creative: `Design a simple commemorative badge or flag element celebrating one of these independence days.`,
        journalWakes: `A small badge design, bright and celebratory, is sketched into the logbook. <em>"Big days, properly worth celebrating. Tomorrow — how food actually gets from a farm to a family's table. Lighter stuff, but still important."</em>`,
        bible: `Galatians 5:1 (NIV) — "It is for freedom that Christ has set us free."`,
        value: 'Impact', curriculum: `Social Sciences — Understanding How Societies Work: democracy, self-determination, and independence.`
      },
      Tuesday: {
        strand: 'Geography', trialNum: 32, trialName: 'From Field to Table',
        story: `"Farm to table isn't as simple as it sounds," <em>Tapiwa says.</em> "Markets, transport, storage — a lot has to happen between my mum's plot and someone's dinner plate. Let's trace the whole journey, connecting back to everything we've learned about farming this term."`,
        activity: `Explore farm to table — markets and supply chains — linking back to earlier farming units (subsistence and commercial) to trace how food actually reaches families and communities.`,
        quest: `As a class, sequence the steps a maize crop takes from planting to reaching a family's dinner table, identifying where things could go wrong along the way.`,
        creative: `Draw a simple flow diagram showing "farm to table" for a crop of your choice.`,
        journalWakes: `A simple arrowed flow chart, farm to market to table, appears sketched in the logbook. <em>"Now you can see the whole chain, crew. Tomorrow — an insect that does one of the most important, and funniest, jobs in the whole savanna."</em>`,
        value: 'Serve'
      },
      Wednesday: {
        strand: 'Science', trialNum: 33, trialName: 'The Dung Beetle\u2019s Big Job',
        story: `"Okay, this one's genuinely funny, but stick with me," <em>Tapiwa grins.</em> "Dung beetles roll up animal dung and bury it — which sounds odd, until you realise they're recycling nutrients back into the soil, controlling parasites, even helping seeds spread. Small, unglamorous, essential. My favourite kind of hero, honestly."`,
        activity: `Explore decomposers — the dung beetle's essential (and genuinely funny) role in the savanna ecosystem, recycling nutrients and controlling parasites.`,
        quest: `In groups, discuss: why might an ecosystem struggle without its decomposers, even though they're small and easy to overlook?`,
        creative: `Draw a dung beetle "hero" comic strip showing its unglamorous but essential job.`,
        journalWakes: `A small, determined dung beetle, mid-roll, is sketched into the logbook margin. <em>"Small hero, big job — that's today's lesson. Tomorrow — drones, thermal cameras, and how modern rangers patrol at night."</em>`,
        value: 'Love', curriculum: `Science, Living World — Ecology: decomposers and nutrient cycling in the savanna ecosystem.`
      },
      Thursday: {
        strand: 'Technology', trialNum: 34, trialName: 'Patrolling in the Dark',
        story: `"Sekuru Josiah used to fly the whole night sky just with instruments and instinct," Tapiwa says. "These days, my dad's team has a few more eyes than that. Poachers are far more likely to move at night — so how do you patrol a reserve the size of a small country, in the dark, when you can't see very far by torchlight? Drones and thermal cameras, that's how."`,
        activity: `Explore modern ranger technology — drones for aerial patrols, thermal cameras for night work, and patrol-management apps that help real Southern African parks plan where rangers go and log what they find.`,
        quest: `In pairs, discuss why thermal cameras (which detect heat, not light) might be more useful than ordinary cameras for night patrols.`,
        creative: `Design a simple patrol-app icon showing a "heat signature detected" alert.`,
        journalWakes: `A small drone, camera glowing, is sketched hovering over a night-time savanna in the logbook. <em>"More eyes in the dark, crew — real modern tools for a real modern fight. Tomorrow — music and dance, a proper celebration day, at last."</em>`,
        value: 'Serve', curriculum: `Technology — Nature of Technology: aerial and thermal technology in modern conservation patrol work.`
      },
      Friday: {
        strand: 'Art', trialNum: 35, trialName: 'Marimba and Gumboot',
        story: `"Music and dance ARE Independence Day, crew," <em>Nomvula says, already tapping a rhythm.</em> "Marimba, drumming, gumboot dance — expressive traditions with real history behind them, especially gumboot, born out of hard work in the mines, turned into something joyful. Today, make some noise, properly, in celebration."`,
        activity: `**Rhythm and Movement Exploration:** Introduce marimba music (recorded or simple percussion instruments), basic drumming patterns, and the gumboot dance's rhythmic stamping and slapping movements — students learn and perform a short simple rhythm sequence as a class.`,
        quest: `In groups, create a simple 8-beat rhythm pattern using body percussion (stamping, clapping, slapping), inspired by gumboot dance.`,
        creative: `Give your group's rhythm pattern a name that captures its feeling.`,
        journalWakes: `END OF WEEK: musical notes and small dancing figures fill the bottom corner of the logbook page. <em>"That's the pattern of it, properly — joy is part of this story too, not just the hard parts. Next week, we start looking ahead, to what comes after all this learning."</em>`,
        value: 'Love', curriculum: `The Arts, Music/Dance — expressive traditions and their cultural and historical roots.`
      }
    }},

    9: { chapter: 'Looking Ahead', days: {
      Monday: {
        strand: 'History', trialNum: 36, trialName: 'Two Worlds, One Life',
        story: `<em>Both Tapiwa and Nomvula sound a little older this week, somehow.</em> "Sharp, crew," Tapiwa says. "Southern Africa today isn't just villages and reserves — it's huge, busy cities too, and a lot of young people living between both worlds, like Nomvula's own mum, working in Johannesburg during the week and coming home on weekends. I want you to see the whole modern picture, not just the parts we've shown you so far."`,
        activity: `Explore Southern Africa today — modern cities, rural life, and the diaspora — young people and families living between two worlds, and what that means for identity and connection to home.`,
        quest: `In pairs, discuss: what might be hard, and what might be good, about living between a busy city and a home village or town?`,
        creative: `Draw two small connected scenes — one city, one village — joined by a single line representing a family's journey between them.`,
        journalWakes: `Two small scenes, city and village, joined by a thin road, appear sketched in the logbook. <em>"Two worlds, one life — that's real, for a lot of families here. Tomorrow — farming for a future that's already changing around us."</em>`,
        bible: `Jeremiah 29:11 (NIV) — "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."`,
        value: 'Know', curriculum: `Social Sciences — Understanding Place and Environment: modern urban and rural life, and diaspora communities.`
      },
      Tuesday: {
        strand: 'Geography', trialNum: 37, trialName: 'Farming for a Changing Climate',
        story: `"The climate's changing, crew — that's not really up for debate anymore, my mum says. Sustainable, climate-smart farming is about adapting: new methods that protect the land while still feeding families. I want you to plan farming for the future, not just describe farming as it's always been."`,
        activity: `Explore sustainable and climate-smart farming — conservation agriculture techniques and how farming communities are adapting to a changing climate.`,
        quest: `In groups, brainstorm three changes a farmer might make to protect their crops and soil as rainfall patterns shift.`,
        creative: `Design a simple "climate-smart farm" diagram showing at least two sustainable features.`,
        journalWakes: `A small sketched farm with visible sustainable features — a rainwater tank, mixed crops — appears in the logbook. <em>"Now you're thinking like a future farmer, properly. Tomorrow — the real conservation wins, the places where things ARE getting better."</em>`,
        value: 'Impact'
      },
      Wednesday: {
        strand: 'Science', trialNum: 38, trialName: 'Where Things Are Getting Better',
        story: `"After the rhino week, I want to show you something hopeful," <em>Tapiwa says.</em> "National parks and community conservancies really are protecting wildlife today — real, measurable wins, not just good intentions. It's not all struggle, crew. Some of it's working."`,
        activity: `Explore conservation success stories — national parks and community conservancies protecting Southern African wildlife today, using real examples of population recovery or habitat protection.`,
        quest: `As a class, discuss: what do you think makes a conservation project actually successful, long-term, rather than just well-intentioned?`,
        creative: `Design a simple "conservation win" certificate for a species or area of your choice, imagining its recovery.`,
        journalWakes: `A small certificate, hand-drawn and celebratory, is sketched into the logbook. <em>"Real hope, crew, backed up by real results. Tomorrow, it's your turn properly — planning your own invention for the Expo."</em>`,
        value: 'Impact', curriculum: `Science, Living World — Ecology: conservation success and habitat/species recovery.`
      },
      Thursday: {
        strand: 'Technology', trialNum: 39, trialName: 'Planning the Conservation Tech Expo',
        story: `"Sekuru Josiah always says the whole point of learning something is being able to pass it on," Tapiwa says. "So here's your chance. Next week, it's not us teaching you — it's you, showing everyone what you've learned. Today, plan a device or system that could genuinely help protect a Southern African animal of your choice."`,
        activity: `Apply the technological design process (plan, create, evaluate) to invent a device or system that could help protect an endangered Southern African animal of the class's choice, drawing on the whole term's Technology learning — tracking, radios, camera traps, DNA tracing, GPS collars, beehive fences, drones.`,
        quest: `In your Expo team, choose one animal, one specific problem it faces, and sketch a first-draft plan for a solution — you'll build on this next week.`,
        creative: `Write a one-sentence "pitch" for your invention, as if presenting it to a real conservation organisation.`,
        journalWakes: `A rough first-draft invention sketch, labelled and half-finished, is tucked into the logbook page. <em>"Real planning, for a real problem — that's exactly it, crew. Next week, it's the Legacy Trial. Sharp, get ready."</em>`,
        value: 'Serve', curriculum: `Technology — Technological Practice: planning, designing, and evaluating a conservation solution.`
      },
      Friday: {
        strand: 'Art', trialNum: 40, trialName: 'Faces Carved to Remember',
        story: `"Masks and carving traditions run right across this whole region, crew — not just decoration, but memory, ceremony, storytelling passed down through generations," <em>Nomvula says.</em> "Today, before next week's big finish, I want you to carve or draw a face that means something — a memory, a value, a feeling you want to carry forward."`,
        activity: `**Mask or Face Design:** Using card, clay, or paper, design a mask or carved-face artwork inspired by mask and carving traditions across the region, representing a value, memory, or feeling the student wants to carry forward from the term.`,
        quest: `Before starting, write one sentence about what your mask represents — real ceremonial masks are never made without a clear purpose in mind.`,
        creative: `Give your finished mask a name connected to the meaning behind it.`,
        journalWakes: `END OF WEEK — final cliffhanger: the logbook's pages ripple slightly, as if the whole route is holding its breath. <em>"That's the pattern of it, crew — everything we've learned, everywhere we've been, all leading somewhere. One trial left. We'll see you there."</em>`,
        value: 'Know', curriculum: `The Arts, Visual Arts — Developing Ideas: carving and mask-making as memory and ceremony.`
      }
    }},

  },

  bossBattles: {
    5: {
      title: 'The Lost City Trial',
      subtitle: 'Boss Battle 1 · Covering Weeks 1–4',
      intro: `The logbook flares open onto every leg of the route flown so far — Hwange, the Zambezi, the reserve under threat — stitched together like a map coming alive. "This is it, crew," Tapiwa says, steadier than the class has heard him all month. "Sekuru Josiah always says a good pilot — or a good ranger — doesn't just have one tool. They know how to put them all together." Nomvula's voice crackles in: "That's the pattern of it. Today, you help us piece together Great Zimbabwe, Mapungubwe, and the Ndebele migration to solve a challenge blocking the route forward — and design something real that could help protect an animal, using everything you've learned this month." Run this as a multi-station gauntlet, narrating Tapiwa and Nomvula watching and cheering throughout.`,
      stations: [
        { name: 'Station 1 — History', icon: '🏛️', desc: 'A rapid "True Story or Myth" challenge — quick-fire statements about Great Zimbabwe, Mapungubwe, and the Ndebele migration to sort true/false.' },
        { name: 'Station 2 — Geography', icon: '🌾', desc: 'A farming-and-water challenge — match farming type (subsistence/commercial) and water source to the correct climate zone on the floor map.' },
        { name: 'Station 3 — Science', icon: '🦁', desc: 'A savanna food web challenge — correctly link predators, herbivores, and plants using connector cards or string.' },
        { name: 'Station 4 — Ranger Tech Challenge', icon: '📡', desc: 'Teams design a simple monitoring or tracking solution — drawing on tracking, radios, camera traps, and DNA tracking from Weeks 1–4 — for a chosen animal, then present and defend their design.' },
        { name: 'Station 5 — Art', icon: '🎨', desc: 'A symbol-design challenge — create a single symbol combining San storytelling, Ndebele geometry, and beadwork colour-meaning into one design.' },
      ],
      outro: `Score as team points across all stations. If the class "passes," have the logbook glow warmly and settle (rather than crackle with static) as the reward — setting up Week 6's crossing into South Africa. Tapiwa, relieved: "Sharp, crew. Properly sharp. See you on the other side of the border."`
    },
    10: {
      title: 'The Legacy Trial',
      subtitle: 'Boss Battle 2 · Final Route Showcase · Covering Weeks 6–9',
      intro: `The logbook lies open one final time, every leg of the route glowing faintly across its pages — Hwange, the Zambezi, the reserve, the border, Gogo Thandiwe's village, all the way home. "Sharp, crew," Tapiwa says, and for once his voice doesn't crack a joke early. "Sekuru Josiah always said a route only really matters if someone else can fly it after you. So today... you show us what you'd build." Nomvula, bracelet finished at last, adds quietly: "That's the pattern of it. You're not visitors on this route anymore." This is the capstone of the whole term — not just a review, but the moment the class finds out together whether they've truly earned the title of Route-Keeper. Run the same multi-station gauntlet style as before, covering colonisation and independence, elephants and cattle culture, conservation science, and the Conservation Tech Expo showcase.`,
      stations: [
        { name: 'Station 1 — History', icon: '📜', desc: 'A timeline synthesis challenge — arrange key moments from the San to today (colonisation, apartheid, independence) in correct order on the floor timeline.' },
        { name: 'Station 2 — Geography', icon: '🌍', desc: 'A "farming plan for the future" challenge — teams pitch a sustainable farming plan drawing on subsistence, commercial, and climate-smart farming from across the term.' },
        { name: 'Station 3 — Science', icon: '🐘', desc: 'A conservation-plan challenge — teams design a simple conservation plan for an endangered Southern African species of their choice, using food web and adaptation knowledge from the term.' },
        { name: 'Station 4 — Conservation Tech Expo', icon: '🚁', desc: `The class presents (and where possible builds or models) the protection technology they've designed across Week 9's planning — applying the whole term's Technology learning to a real conservation problem.` },
      ],
      outro: `"It's done. Crew... it's actually done. Nomvula and I are standing here with the whole route glowing behind us, and I keep thinking back to that first page, the battered old logbook, not knowing if anyone would even find it. You found it. You stayed. You learned this world properly, the hard parts and the good parts both." Nomvula: "So we're not calling you 'crew' one more time. From this page on, you've earned a different name: Route-Keepers." Finish with a Route-Keeper Ceremony — formally "award" the title to each student/team in role, with a simple certificate or badge, and unveil the class's final Baobab Route artwork alongside it as the term's legacy piece.`
    }
  }

}


// Who is "telling" each day's story beat — used by index.html to label the story panel
// as "Tapiwa's story", "Nomvula's story", or "Tapiwa & Nomvula's story" instead of a
// generic label, based on the actual dialogue attribution in each day's `story` text above.
window.ALL_STORY_SPEAKERS = window.ALL_STORY_SPEAKERS || {};
window.ALL_STORY_SPEAKERS['skybound-baobab-route'] = {
  1: { Monday: 'Tapiwa', Tuesday: 'Tapiwa', Wednesday: 'Tapiwa', Thursday: 'Tapiwa', Friday: 'Tapiwa' },
  2: { Monday: 'Tapiwa', Tuesday: 'Tapiwa', Wednesday: 'Tapiwa', Thursday: 'Tapiwa', Friday: 'Tapiwa' },
  3: { Monday: 'Both', Tuesday: 'Tapiwa', Wednesday: 'Tapiwa', Thursday: 'Tapiwa', Friday: 'Nomvula' },
  4: { Monday: 'Tapiwa', Tuesday: 'Tapiwa', Wednesday: 'Both', Thursday: 'Tapiwa', Friday: 'Nomvula' },
  6: { Monday: 'Both', Tuesday: 'Nomvula', Wednesday: 'Tapiwa', Thursday: 'Tapiwa', Friday: 'Nomvula' },
  7: { Monday: 'Nomvula', Tuesday: 'Nomvula', Wednesday: 'Nomvula', Thursday: 'Nomvula', Friday: 'Nomvula' },
  8: { Monday: 'Tapiwa', Tuesday: 'Tapiwa', Wednesday: 'Tapiwa', Thursday: 'Tapiwa', Friday: 'Nomvula' },
  9: { Monday: 'Both', Tuesday: 'Tapiwa', Wednesday: 'Tapiwa', Thursday: 'Tapiwa', Friday: 'Nomvula' },
};

// Register this topic into the shared app registry
window.ALL_TERMS = window.ALL_TERMS || {};
window.ALL_TERMS['skybound-baobab-route'] = {
  meta: {
    label: 'Skybound: The Baobab Route',
    chapterIntro: 'History: Southern Africa (Zimbabwe & South Africa) · Geography: Farming & Land · Science: Savanna Ecology & Wildlife · Technology: Conservation & Field Tech · Art: Southern African Art Traditions',
  },
  weeks: TERM3_DATA.weeks,
  bossBattles: TERM3_DATA.bossBattles,
};
