import type { ArtworkSeed } from "./types.ts";

export const artworksA: ArtworkSeed[] = [
  {
    slug: "the-starry-night",
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    artistLife: "1853–1890",
    artistOrigin: "Dutch",
    date: "1889",
    year: 1889,
    medium: "Oil on canvas",
    dimensions: "73.7 × 92.1 cm",
    movement: "post-impressionism",
    museum: "Museum of Modern Art",
    city: "New York",
    wikipediaTitle: "The Starry Night",
    artistWikipediaTitle: "Vincent van Gogh",
    imageAlt:
      "A swirling night sky full of glowing stars and a crescent moon above a sleeping village, with a dark flame-like cypress in the foreground.",
    lede: "Painted from memory, behind the barred window of an asylum, it became the most famous night sky ever put on canvas.",
    story:
      "Van Gogh made The Starry Night in June 1889 at the asylum of Saint-Paul-de-Mausole in Saint-Rémy, where he had admitted himself after a breakdown. The view east from his room was real, but the village was invented and the sky was rearranged. What results is less a landscape than a weather report of the mind: thick, rhythmic strokes make the air itself seem to move. Van Gogh thought of it as a failure. A century later it became one of the most reproduced images on earth.",
    context:
      "By 1889, Impressionism had shown that painting could capture fleeting light. Van Gogh, along with Gauguin and Seurat, wanted something else: colour and line that carried feeling and meaning. The Starry Night sits right at that turn, where painting stops describing the world and starts expressing it.",
    lookCloser: [
      "The cypress on the left is the tallest thing in the picture. Trees like it were planted in cemeteries, and they link the earth to the sky.",
      "Count the stars. There are eleven, plus a moon that burns like a sun. Venus, which really was visible that summer, is probably the bright one beside the cypress.",
      "The church spire looks more Dutch than Provençal. It may be a memory of home tucked into a French valley."
    ],
    quote: {
      text: "I often think that the night is more alive and more richly coloured than the day.",
      source: "Letter to his brother Theo, 1888"
    },
    moments: [
      {
        label: "Paris",
        text: "The Eiffel Tower opened as the centrepiece of the Exposition Universelle, mocked by many artists as an iron eyesore."
      },
      {
        label: "Technology",
        text: "Electric street lighting was spreading through European cities, slowly erasing the deep night skies van Gogh painted."
      },
      {
        label: "Letters",
        text: "Van Gogh wrote hundreds of letters to his brother Theo. They remain one of the richest records of an artist's working mind."
      }
    ],
    quiz: {
      question: "Where was van Gogh living when he painted The Starry Night?",
      options: [
        "A boarding house in Arles",
        "An asylum in Saint-Rémy-de-Provence",
        "His brother's flat in Paris",
        "A farmhouse in Nuenen"
      ],
      answer: 1,
      explanation:
        "He had voluntarily entered the Saint-Paul asylum in May 1889. The painting combines the view from his window with memory and imagination."
    }
  },
  {
    slug: "mona-lisa",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    artistLife: "1452–1519",
    artistOrigin: "Italian",
    date: "c. 1503–1519",
    year: 1503,
    medium: "Oil on poplar panel",
    dimensions: "77 × 53 cm",
    movement: "high-renaissance",
    museum: "Musée du Louvre",
    city: "Paris",
    wikipediaTitle: "Mona Lisa",
    artistWikipediaTitle: "Leonardo da Vinci",
    imageAlt:
      "A half-length portrait of a seated woman with folded hands and a faint smile, set before a hazy, winding landscape.",
    lede: "A merchant's wife, a smile that won't hold still, and a painting Leonardo simply never let go of.",
    story:
      "Lisa Gherardini, wife of the Florentine silk merchant Francesco del Giocondo, sat for Leonardo around 1503. He kept the panel for the rest of his life, carrying it to France and adjusting it for years. His technique, sfumato (literally ‘gone up in smoke’), blurs the corners of the eyes and mouth so that her expression seems to shift as you look. It was admired in its day. It became a global icon after it was stolen from the Louvre in 1911 and its empty space on the wall made headlines worldwide.",
    context:
      "Renaissance portraits were usually stiff profile views that recorded status. Leonardo turned his sitter three-quarters toward us, gave her a landscape that seems to reach back to the dawn of time, and treated her inner life as the true subject. That shift from appearance to psychology shaped portraiture for the next five centuries.",
    lookCloser: [
      "The horizon on the left sits lower than the one on the right. The mismatch makes her seem to rise subtly as your eye crosses the panel.",
      "She has no visible eyebrows or eyelashes. They may have been painted very faintly, or lost to cleaning over the centuries.",
      "Watch her smile in your peripheral vision, then look straight at it. It changes, because sfumato works on how our eyes read soft edges."
    ],
    moments: [
      {
        label: "Florence",
        text: "Michelangelo was carving his marble David, unveiled in 1504 in the Piazza della Signoria."
      },
      {
        label: "Exploration",
        text: "Amerigo Vespucci's letters were spreading across Europe, and soon a new continent would carry his name."
      },
      {
        label: "Science",
        text: "Leonardo's notebooks from these years are full of anatomy, water studies and flying machines, all alongside the painting."
      }
    ],
    quiz: {
      question: "What event in 1911 turned the Mona Lisa into a worldwide celebrity?",
      options: [
        "It was exhibited in New York",
        "It was stolen from the Louvre",
        "It was damaged in a fire",
        "It was sold at auction"
      ],
      answer: 1,
      explanation:
        "Vincenzo Peruggia, a former Louvre worker, walked out with it under his smock. It was missing for over two years, and newspapers made it famous."
    }
  },
  {
    slug: "girl-with-a-pearl-earring",
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    artistLife: "1632–1675",
    artistOrigin: "Dutch",
    date: "c. 1665",
    year: 1665,
    medium: "Oil on canvas",
    dimensions: "44.5 × 39 cm",
    movement: "dutch-golden-age",
    museum: "Mauritshuis",
    city: "The Hague",
    wikipediaTitle: "Girl with a Pearl Earring",
    artistWikipediaTitle: "Johannes Vermeer",
    imageAlt:
      "A girl in a blue and yellow turban glances over her shoulder at the viewer, lips parted, a large pearl glowing at her ear against a dark background.",
    lede: "Not a portrait at all, but a study of a face, a turn of the head and the most famous highlight in art.",
    story:
      "We don't know who she is, and that is partly the point. This is a ‘tronie’, a Dutch genre of head studies showing a character, a costume or an expression rather than a specific person. Vermeer dresses her in an exotic turban painted with costly ultramarine, turns her toward us mid-movement, and lets light do everything else. The pearl is barely there: a few strokes of white and grey. Recent technical study found that the now-black background was originally a deep green curtain.",
    context:
      "The Dutch Republic of the 1660s was a rich trading nation where middle-class citizens bought paintings for their homes. Vermeer worked slowly in Delft, finishing perhaps two or three canvases a year, and died in debt. He was largely forgotten until critics rediscovered him in the 1860s.",
    lookCloser: [
      "The pearl has no hook connecting it to her ear. It floats, suggested by just two highlights.",
      "There's a tiny glint of light in each eye and one on her lower lip. Those three sparks make her feel alive.",
      "The blue of the turban is natural ultramarine, ground from lapis lazuli imported from Afghanistan. It was worth more than gold."
    ],
    moments: [
      {
        label: "Science",
        text: "Robert Hooke published Micrographia in 1665, the first great book of images seen through a microscope."
      },
      {
        label: "London",
        text: "The Great Plague struck London in 1665, killing roughly a quarter of the city's population."
      },
      {
        label: "Delft",
        text: "Antonie van Leeuwenhoek, born in Delft the same month as Vermeer, would soon see bacteria through his lenses."
      }
    ],
    quiz: {
      question: "What is a ‘tronie’?",
      options: [
        "A Dutch wedding portrait",
        "A study of a face or character type, not a specific sitter",
        "A painting made with a camera obscura",
        "A miniature painted on copper"
      ],
      answer: 1,
      explanation:
        "Tronies were popular in the Dutch Golden Age: imaginary heads showing expressions, costumes or types. That's why the girl has no name."
    }
  },
  {
    slug: "liberty-leading-the-people",
    title: "Liberty Leading the People",
    artist: "Eugène Delacroix",
    artistLife: "1798–1863",
    artistOrigin: "French",
    date: "1830",
    year: 1830,
    medium: "Oil on canvas",
    dimensions: "260 × 325 cm",
    movement: "romanticism",
    museum: "Musée du Louvre",
    city: "Paris",
    wikipediaTitle: "Liberty Leading the People",
    artistWikipediaTitle: "Eugène Delacroix",
    imageAlt:
      "A bare-breasted woman in a Phrygian cap holds the French tricolour aloft and leads armed Parisians over a barricade strewn with bodies.",
    lede: "Three days of street fighting, one allegory in a red cap, and the image France still reaches for in times of protest.",
    story:
      "In July 1830 Parisians rose up for three days, the ‘Trois Glorieuses’, and toppled King Charles X. Delacroix, who hadn't fought, painted it that autumn: ‘If I haven't fought for my country, at least I'll paint for her.’ Liberty is both a goddess and a working woman, barefoot and smoke-stained, climbing over real corpses. Around her are a top-hatted bourgeois, a worker with a sabre, and a boy with two pistols. The new government bought it, then quietly hid it away for being too incendiary.",
    context:
      "Romanticism prized emotion, movement and the heroic struggle of the individual and the nation. Delacroix's loose brushwork and blazing colour were a direct challenge to the cool, linear Neoclassicism of David's school. History painting was becoming contemporary journalism with a mythic charge.",
    lookCloser: [
      "Far in the background, through the smoke, are the towers of Notre-Dame, with a tiny tricolour flying from one of them.",
      "The red, white and blue of the flag echo through the whole picture: in the shirt of the kneeling man, in the sky, and in the bodies below.",
      "The boy brandishing pistols is often said to have inspired Gavroche in Victor Hugo's Les Misérables."
    ],
    moments: [
      {
        label: "Politics",
        text: "Louis-Philippe became ‘King of the French’, a constitutional monarch chosen by revolutionaries and bankers."
      },
      {
        label: "Technology",
        text: "The Liverpool and Manchester Railway opened, the first intercity line run entirely on steam."
      },
      {
        label: "Music",
        text: "Hector Berlioz premiered his Symphonie fantastique in Paris, a Romantic manifesto in sound."
      }
    ],
    quiz: {
      question: "Which revolution does the painting commemorate?",
      options: [
        "The storming of the Bastille, 1789",
        "The July Revolution, 1830",
        "The Revolution of 1848",
        "The Paris Commune, 1871"
      ],
      answer: 1,
      explanation:
        "It shows the ‘Three Glorious Days’ of July 1830 that removed Charles X. People often mistake it for 1789."
    }
  },
  {
    slug: "impression-sunrise",
    title: "Impression, Sunrise",
    artist: "Claude Monet",
    artistLife: "1840–1926",
    artistOrigin: "French",
    date: "1872",
    year: 1872,
    medium: "Oil on canvas",
    dimensions: "48 × 63 cm",
    movement: "impressionism",
    museum: "Musée Marmottan Monet",
    city: "Paris",
    wikipediaTitle: "Impression, Sunrise",
    artistWikipediaTitle: "Claude Monet",
    imageAlt:
      "A misty blue-grey harbour at dawn with silhouetted rowing boats, smoking chimneys, and a small orange sun reflected in the water in short strokes.",
    lede: "A quick sketch of a smoky harbour, a critic's sneer, and the name of a whole movement.",
    story:
      "Monet painted the port of Le Havre, his hometown, from a hotel window early one morning. It took perhaps an hour. When he showed it in 1874 at an independent exhibition, organised outside the official Salon, the critic Louis Leroy seized on the title to mock the whole group as ‘Impressionists’. The insult stuck, and the painters adopted it. The picture is nearly all atmosphere: cranes and smokestacks dissolve in the fog, and the sun is a single orange disc with a few dashes of reflection.",
    context:
      "France was rebuilding after defeat in the Franco-Prussian War and the bloody Commune. Le Havre was an industrial port, so this is not a pastoral scene but a modern one. Railways, factories and tube paints (which let artists work outdoors) all made Impressionism possible.",
    lookCloser: [
      "In black and white, the sun nearly disappears. It has almost the same brightness as the sky around it, which is why it seems to vibrate.",
      "Find the cranes and steamships in the haze on the left. This is an industrial harbour, not a quiet fishing village.",
      "The small boats are made with a handful of dark strokes. Your eye builds them; Monet only hints."
    ],
    quote: {
      text: "Colour is my day-long obsession, joy and torment.",
      source: "Attributed to Claude Monet"
    },
    moments: [
      {
        label: "Literature",
        text: "Jules Verne published Around the World in Eighty Days as a serial in Le Temps."
      },
      {
        label: "Science",
        text: "The HMS Challenger expedition set off, founding modern oceanography over a four-year voyage."
      },
      {
        label: "Parks",
        text: "Yellowstone became the world's first national park, established by the United States Congress."
      }
    ],
    quiz: {
      question: "Who coined the term ‘Impressionism’, and how?",
      options: [
        "Monet, in a manifesto",
        "A critic, Louis Leroy, mocking this painting's title",
        "The poet Baudelaire, in praise",
        "The Salon jury, as an official category"
      ],
      answer: 1,
      explanation:
        "Leroy's satirical review of the 1874 exhibition was called ‘The Exhibition of the Impressionists’. The joke became the label."
    }
  },
  {
    slug: "the-birth-of-venus",
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    artistLife: "c. 1445–1510",
    artistOrigin: "Italian",
    date: "c. 1484–1486",
    year: 1485,
    medium: "Tempera on canvas",
    dimensions: "172.5 × 278.5 cm",
    movement: "early-renaissance",
    museum: "Uffizi Gallery",
    city: "Florence",
    wikipediaTitle: "The Birth of Venus",
    artistWikipediaTitle: "Sandro Botticelli",
    imageAlt:
      "The nude goddess Venus stands on a scallop shell drifting to shore, blown by two winged wind gods on the left while a woman on the right offers her a flowered cloak.",
    lede: "A pagan goddess, life-size and nude, in fifteenth-century Christian Florence. It was almost unthinkable.",
    story:
      "Venus, born from sea foam, is blown ashore on a scallop shell by Zephyr, the west wind, entwined with a nymph. On the right, a Hora (a goddess of the seasons) rushes to cover her with a cloak embroidered with flowers. Botticelli isn't interested in anatomy: Venus's neck is too long and her left shoulder slopes impossibly. He cares about line, rhythm and grace. It was one of the first large paintings on canvas in Tuscany and among the first monumental nudes since antiquity.",
    context:
      "In Medici Florence, humanist scholars like Marsilio Ficino read classical myth as a path to spiritual truth. In that light, Venus could stand for divine love and beauty, a bridge between pagan learning and Christian ideas. A few years later, the friar Savonarola would preach against such images, and bonfires would burn ‘vanities’ in the city.",
    lookCloser: [
      "Botticelli highlighted the hair, the leaves and the shell with real gold. Tilt your head in the gallery and they catch the light.",
      "The flowers falling around the wind gods are roses, which according to myth were created at the same moment as Venus.",
      "Venus stands in contrapposto, her weight on one leg, a classical pose borrowed from ancient statues of the ‘modest Venus’."
    ],
    moments: [
      {
        label: "Navigation",
        text: "Portuguese explorers were pushing down the coast of Africa. Bartolomeu Dias would round the Cape of Good Hope in 1488."
      },
      {
        label: "England",
        text: "The Battle of Bosworth in 1485 ended the Wars of the Roses and began the Tudor dynasty."
      },
      {
        label: "Books",
        text: "Printing presses were spreading rapidly across Italy, putting classical texts into many more hands."
      }
    ],
    quiz: {
      question: "Who is blowing Venus toward the shore?",
      options: [
        "Cupid and Psyche",
        "Zephyr, the west wind, with a companion",
        "Neptune's tritons",
        "Apollo and Mercury"
      ],
      answer: 1,
      explanation:
        "Zephyr, god of the west wind, embraces a companion (often identified as Aura or Chloris) as they blow Venus to land."
    }
  },
  {
    slug: "the-night-watch",
    title: "The Night Watch",
    artist: "Rembrandt van Rijn",
    artistLife: "1606–1669",
    artistOrigin: "Dutch",
    date: "1642",
    year: 1642,
    medium: "Oil on canvas",
    dimensions: "379.5 × 453.5 cm",
    movement: "dutch-golden-age",
    museum: "Rijksmuseum",
    city: "Amsterdam",
    wikipediaTitle: "The Night Watch",
    artistWikipediaTitle: "Rembrandt",
    imageAlt:
      "A crowded militia company surges forward out of shadow, led by a captain in black with a red sash and his lieutenant in pale gold, with a glowing girl among the soldiers.",
    lede: "It isn't night, they aren't on watch, and it used to be even bigger.",
    story:
      "Eighteen members of an Amsterdam civic militia company paid Rembrandt to paint their group portrait. Instead of lining them up politely, he painted the moment Captain Frans Banninck Cocq gives the order to march. Drums beat, a musket goes off, a dog barks, and everyone moves at once. Darkened varnish later gave it the nickname ‘The Night Watch’; cleaning revealed a daytime scene. In 1715 it was trimmed on all four sides to fit a wall in the Town Hall, losing two figures on the left.",
    context:
      "Civic militias had been military units in the Dutch Revolt against Spain, but by the 1640s they were mostly prestigious social clubs. Group portraits displayed their members' status. Rembrandt, at the height of his fame, turned a static genre into theatre, using light the way Caravaggio had in Rome.",
    lookCloser: [
      "The glowing girl in gold has a dead chicken hanging from her belt. Its claws were the emblem of the company, the Kloveniers.",
      "The captain's outstretched hand casts a shadow on his lieutenant's coat. It's a tiny detail that makes the space feel real.",
      "Behind the man in the helmet, a face peeks out with one eye. It is often thought to be Rembrandt himself."
    ],
    moments: [
      {
        label: "Science",
        text: "Galileo died under house arrest in Italy, and Isaac Newton was born in England, in the same year."
      },
      {
        label: "Exploration",
        text: "Abel Tasman sailed from Batavia and became the first known European to reach Tasmania and New Zealand."
      },
      {
        label: "England",
        text: "The English Civil War began between the forces of King Charles I and Parliament."
      }
    ],
    quiz: {
      question: "Why is the painting called The Night Watch?",
      options: [
        "It shows a night patrol",
        "Darkened varnish made the daytime scene look like night",
        "Rembrandt titled it that way",
        "It hung in a night-guard station"
      ],
      answer: 1,
      explanation:
        "The nickname dates from the late 18th century, when layers of dirty varnish had darkened it. Its real subject is a company setting out by day."
    }
  },
  {
    slug: "the-last-supper",
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    artistLife: "1452–1519",
    artistOrigin: "Italian",
    date: "c. 1495–1498",
    year: 1497,
    medium: "Tempera and oil on gesso, pitch and mastic",
    dimensions: "460 × 880 cm",
    movement: "high-renaissance",
    museum: "Santa Maria delle Grazie",
    city: "Milan",
    wikipediaTitle: "The Last Supper (Leonardo)",
    artistWikipediaTitle: "Leonardo da Vinci",
    imageAlt:
      "Christ sits at the centre of a long table before three windows, with twelve apostles grouped in threes reacting in alarm on either side.",
    lede: "One sentence (‘one of you will betray me’) and thirteen people reacting to it in real time.",
    story:
      "Leonardo painted this on the wall of a monastery dining hall in Milan for Duke Ludovico Sforza. He chose the instant after Christ announces that one of the apostles will betray him. Shock ripples outward in four groups of three. Judas recoils into shadow, clutching a money bag. Leonardo rejected true fresco, which demands speed, and experimented with tempera on dry plaster so he could work slowly. The paint began flaking within his lifetime. What we see today is the result of more than five centuries of decay and restoration.",
    context:
      "Linear perspective was still a fairly new tool. Leonardo uses it ruthlessly: every line of the ceiling and walls converges at Christ's right temple. The Last Supper married mathematical order with human emotion, and became the model for the High Renaissance ideal of harmony.",
    lookCloser: [
      "Christ's body forms a stable triangle, framed by the brightest window behind his head. It works as a halo without a halo.",
      "Judas is on the same side of the table as everyone else, unlike in older versions, where he sat alone. Leonardo isolates him with shadow instead.",
      "A door was cut through the bottom of the wall in 1652, removing Christ's feet."
    ],
    moments: [
      {
        label: "Exploration",
        text: "Vasco da Gama sailed around Africa to India (1497–98), opening a sea route to Asia."
      },
      {
        label: "Florence",
        text: "Savonarola's ‘Bonfire of the Vanities’ in 1497 burned books, mirrors and artworks in the city's main square."
      },
      {
        label: "Art",
        text: "Michelangelo, in his early twenties, began the Pietà in Rome in 1498."
      }
    ],
    quiz: {
      question: "Why has The Last Supper deteriorated so badly?",
      options: [
        "It was bombed in World War I",
        "Leonardo used an experimental technique on dry plaster instead of true fresco",
        "It was painted on wood that rotted",
        "Napoleon's troops removed it from the wall"
      ],
      answer: 1,
      explanation:
        "Tempera and oil on a dry wall let Leonardo work slowly, but the paint never bonded to the plaster. It began flaking within decades. (The building was bombed in 1943, but the wall survived behind sandbags.)"
    }
  },
  {
    slug: "the-school-of-athens",
    title: "The School of Athens",
    artist: "Raphael",
    artistLife: "1483–1520",
    artistOrigin: "Italian",
    date: "1509–1511",
    year: 1510,
    medium: "Fresco",
    dimensions: "500 × 770 cm",
    movement: "high-renaissance",
    museum: "Apostolic Palace",
    city: "Vatican City",
    wikipediaTitle: "The School of Athens",
    artistWikipediaTitle: "Raphael",
    imageAlt:
      "Dozens of ancient philosophers gather beneath vast barrel vaults, with Plato pointing upward and Aristotle gesturing forward at the centre.",
    lede: "All of ancient philosophy in one room, with Renaissance celebrities playing the parts.",
    story:
      "Pope Julius II asked the young Raphael to decorate his private library, the Stanza della Segnatura. On one wall: theology. On this one: philosophy. At the vanishing point walk Plato, pointing to the heavens and his world of ideal forms, and Aristotle, holding his hand flat over the earth, for knowledge grounded in observation. Around them, Pythagoras writes, Euclid draws with compasses, and Diogenes sprawls on the steps. Raphael gave the ancients modern faces. Plato looks a lot like Leonardo, and Raphael put himself near the right edge, looking straight out at us.",
    context:
      "While Raphael painted this, Michelangelo was working on the Sistine Chapel ceiling a few rooms away. Humanism held that classical philosophy and Christian faith could be reconciled. The fresco puts pagan thinkers inside an idealised Christian architecture inspired by Bramante's designs for the new St Peter's.",
    lookCloser: [
      "Plato carries his Timaeus; Aristotle carries his Ethics. Their gestures sum up their philosophies in one movement.",
      "The brooding figure leaning on a block in the foreground is Heraclitus. He's thought to be a portrait of Michelangelo and added late, in a looser style.",
      "Raphael's self-portrait is the young man in a dark beret at the far right, one of the few figures meeting our eyes."
    ],
    moments: [
      {
        label: "Rome",
        text: "Michelangelo was painting the Sistine Chapel ceiling (1508–1512), lying on scaffolding a short walk away."
      },
      {
        label: "Ideas",
        text: "Erasmus wrote In Praise of Folly in 1509, a satire on the Church and society that became a European bestseller."
      },
      {
        label: "England",
        text: "Henry VIII came to the throne in 1509, aged 17."
      }
    ],
    quiz: {
      question: "What does Plato's upward-pointing gesture represent?",
      options: [
        "A call to prayer",
        "His belief in a higher realm of ideal forms",
        "Astronomy and the stars",
        "A greeting to Aristotle"
      ],
      answer: 1,
      explanation:
        "Plato points upward to the realm of perfect ideas; Aristotle's level hand points to the observable world. It's a whole debate in two gestures."
    }
  },
  {
    slug: "napoleon-crossing-the-alps",
    title: "Napoleon Crossing the Alps",
    artist: "Jacques-Louis David",
    artistLife: "1748–1825",
    artistOrigin: "French",
    date: "1801",
    year: 1801,
    medium: "Oil on canvas",
    dimensions: "261 × 221 cm",
    movement: "neoclassicism",
    museum: "Château de Malmaison",
    city: "Rueil-Malmaison",
    wikipediaTitle: "Napoleon Crossing the Alps",
    artistWikipediaTitle: "Jacques-Louis David",
    commonsFile: "File:David - Napoleon crossing the Alps - Malmaison1.jpg",
    imageAlt:
      "Napoleon in a billowing orange cloak on a rearing white horse points up toward a stormy Alpine summit.",
    lede: "Napoleon actually crossed on a mule, on a sunny day. This is the version he ordered.",
    story:
      "In May 1800, Bonaparte led his army over the Great St Bernard Pass to surprise the Austrians in Italy. He asked David to paint him ‘calm on a fiery horse’, and refused to sit for it: likeness didn't matter, character did. David borrowed Napoleon's uniform, used a pupil on a ladder as a model, and carved the names of Hannibal and Charlemagne, earlier conquerors of the Alps, into the rocks beside BONAPARTE. It was so successful that David's studio produced five versions.",
    context:
      "David had been the painter of the Revolution; now he became the image-maker of the man who ended it. Neoclassicism's crisp forms and Roman references lent authority to new power. This painting is one of the first great pieces of modern political branding.",
    lookCloser: [
      "Read the rocks at the bottom left: BONAPARTE, HANNIBAL, KAROLUS MAGNUS IMP. It is a family tree of conquerors.",
      "The horse's mane, the cloak and the clouds all stream in the same diagonal. The whole picture is a single upward gesture.",
      "Tiny soldiers haul cannons up the slope in the background. They did the actual work."
    ],
    moments: [
      {
        label: "Union",
        text: "The Act of Union created the United Kingdom of Great Britain and Ireland on 1 January 1801."
      },
      {
        label: "Science",
        text: "Alessandro Volta demonstrated his electric pile to Napoleon in Paris, the first true battery."
      },
      {
        label: "Washington",
        text: "Thomas Jefferson became the third President of the United States."
      }
    ],
    quiz: {
      question: "How did Napoleon really cross the Alps?",
      options: [
        "On a rearing stallion in a blizzard",
        "On a mule, guided by a local, in good weather",
        "Carried in a sedan chair",
        "By sledge"
      ],
      answer: 1,
      explanation:
        "He rode a sure-footed mule. Paul Delaroche painted the realistic version in 1850, a deliberate rebuttal to David's myth."
    }
  },
  {
    slug: "las-meninas",
    title: "Las Meninas",
    artist: "Diego Velázquez",
    artistLife: "1599–1660",
    artistOrigin: "Spanish",
    date: "1656",
    year: 1656,
    medium: "Oil on canvas",
    dimensions: "318 × 276 cm",
    movement: "baroque",
    museum: "Museo del Prado",
    city: "Madrid",
    wikipediaTitle: "Las Meninas",
    artistWikipediaTitle: "Diego Velázquez",
    imageAlt:
      "In a tall palace room the young Infanta Margarita stands among maids, a dwarf and a dog, while Velázquez paints at a huge canvas and a mirror at the back reflects the king and queen.",
    lede: "A painting about looking, in which you might be standing where the King of Spain once stood.",
    story:
      "The five-year-old Infanta Margarita Teresa is surrounded by her ladies-in-waiting (the meninas), a chaperone, a guard, two court dwarfs and a sleepy mastiff. On the left, Velázquez himself pauses at an enormous canvas, brush raised, looking out. In the mirror at the back float King Philip IV and Queen Mariana. Are they posing where we stand? Is the mirror reflecting the canvas Velázquez is painting? Philosophers, painters and critics have argued about it for centuries. Picasso painted 58 variations on it.",
    context:
      "Spain's empire was slowly declining, but the Habsburg court was still rigidly formal. Velázquez, court painter for over thirty years, aspired to nobility, as he believed painting was a liberal art and not a craft. The red cross on his chest, the badge of the Order of Santiago, was painted in after his knighthood in 1659.",
    lookCloser: [
      "In the bright doorway at the back stands José Nieto, the queen's chamberlain, pausing on the stairs. Is he coming or going?",
      "Up close, the Infanta's dress is a blur of loose strokes. Step back and it becomes silk. The Impressionists studied this.",
      "The dwarf Nicolasito Pertusato is nudging the dog with his foot, the only playful movement in a frozen moment."
    ],
    moments: [
      {
        label: "Science",
        text: "Christiaan Huygens patented the pendulum clock in 1657, making timekeeping dramatically more accurate."
      },
      {
        label: "England",
        text: "Oliver Cromwell ruled as Lord Protector; England was briefly a republic."
      },
      {
        label: "Amsterdam",
        text: "The philosopher Baruch Spinoza was expelled from Amsterdam's Jewish community in 1656."
      }
    ],
    quiz: {
      question: "Who appears reflected in the mirror at the back of the room?",
      options: [
        "Velázquez himself",
        "King Philip IV and Queen Mariana",
        "The Infanta's tutor",
        "The viewer of the painting"
      ],
      answer: 1,
      explanation:
        "The royal couple appear in the mirror, which implies they stand roughly where we do, outside the picture."
    }
  },
  {
    slug: "the-great-wave",
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    artistLife: "1760–1849",
    artistOrigin: "Japanese",
    date: "c. 1831",
    year: 1831,
    medium: "Woodblock print; ink and colour on paper",
    dimensions: "25.7 × 37.9 cm",
    movement: "ukiyo-e",
    museum: "Many impressions survive, incl. The Met",
    city: "New York",
    wikipediaTitle: "The Great Wave off Kanagawa",
    artistWikipediaTitle: "Hokusai",
    imageAlt:
      "A huge clawed wave towers over three narrow fishing boats, while tiny snow-capped Mount Fuji sits low in the distance beneath the curl.",
    lede: "A print made for ordinary people, cheap as a bowl of noodles, that became Japan's most famous image.",
    story:
      "Hokusai was about seventy when he designed the series Thirty-six Views of Mount Fuji. The Great Wave is the first and most famous. Fishermen in long oshiokuri boats bow beneath a wave whose foam breaks into claw-like fingers. Fuji, the sacred mountain, appears tiny and still in the trough. The wave seems to be the subject, but Fuji is the anchor. The print was mass-produced from carved wooden blocks, with thousands of impressions sold, and roughly a hundred are thought to survive today.",
    context:
      "Japan was largely closed to the outside world under the Tokugawa shogunate, but some Western things slipped in, including Prussian blue, a synthetic pigment imported via Dutch traders. Hokusai used it lavishly. When Japan opened in the 1850s, prints like this flooded Europe and transformed the work of Monet, Degas and van Gogh.",
    lookCloser: [
      "Fuji's shape repeats in the small wave in the foreground. It's a visual rhyme, a mountain made of water.",
      "Count the rowers: they press flat in their boats, faces down. Some are almost lost in the spray.",
      "Japanese is read right to left, so many Japanese viewers ‘read’ the wave as crashing toward them rather than away."
    ],
    quote: {
      text: "From the age of six, I had a mania for drawing the shapes of things.",
      source: "Hokusai, postscript to One Hundred Views of Mount Fuji, 1834"
    },
    moments: [
      {
        label: "Science",
        text: "Michael Faraday discovered electromagnetic induction in 1831, the principle behind every electric generator."
      },
      {
        label: "Voyage",
        text: "HMS Beagle sailed from Plymouth with a 22-year-old Charles Darwin aboard."
      },
      {
        label: "Literature",
        text: "Victor Hugo published The Hunchback of Notre-Dame."
      }
    ],
    quiz: {
      question: "Which imported European pigment gives the Great Wave its intense blue?",
      options: ["Ultramarine", "Prussian blue", "Cobalt blue", "Indigo"],
      answer: 1,
      explanation:
        "Prussian blue, a synthetic pigment invented in Berlin around 1706, reached Japan via Dutch trade. It was more stable and vivid than traditional plant indigo."
    }
  },
  {
    slug: "the-garden-of-earthly-delights",
    title: "The Garden of Earthly Delights",
    artist: "Hieronymus Bosch",
    artistLife: "c. 1450–1516",
    artistOrigin: "Netherlandish",
    date: "c. 1490–1510",
    year: 1500,
    medium: "Oil on oak panels (triptych)",
    dimensions: "205.5 × 384.9 cm",
    movement: "early-netherlandish",
    museum: "Museo del Prado",
    city: "Madrid",
    wikipediaTitle: "The Garden of Earthly Delights",
    artistWikipediaTitle: "Hieronymus Bosch",
    imageAlt:
      "An open triptych: Eden on the left, a crowded pink-and-blue garden of nude figures, giant fruits and fantastical creatures in the centre, and a dark hellscape on the right.",
    lede: "Paradise, pleasure, punishment: three panels so strange that people still argue about what they mean.",
    story:
      "Read it left to right. On the left, God presents Eve to Adam in a calm Eden. In the centre, hundreds of naked people frolic with giant strawberries, birds and fountains in a world without shame or consequence. On the right is hell, frozen and burning, where a man is crucified on a harp and a bird-headed monster devours sinners. Is the middle panel a warning about lust, or a vision of a lost innocent paradise? Bosch left no explanation. Closed, the wings show the world on the third day of Creation in grey.",
    context:
      "Bosch worked in 's-Hertogenbosch in a Europe anxious about sin, the apocalypse and the approaching year 1500. The triptych format was normally used for altarpieces, but this one seems to have hung in the Nassau palace in Brussels, a conversation piece for aristocrats. Philip II of Spain later acquired it.",
    lookCloser: [
      "In the hell panel, a choirboy's buttocks bear a line of musical notes. It's been recorded and performed as ‘the 500-year-old butt song’.",
      "The ‘Tree Man’ in hell has a broken eggshell body and a face turned back to us. It's possibly a self-portrait.",
      "Strawberries, cherries and blackberries appear everywhere in the centre. They are sweet, fleeting pleasures that quickly rot."
    ],
    moments: [
      {
        label: "Exploration",
        text: "Columbus's voyages (1492–1504) were reshaping European ideas of how big and strange the world could be."
      },
      {
        label: "Print",
        text: "Albrecht Dürer published his Apocalypse woodcuts in 1498, spreading visions of the end times across Europe."
      },
      {
        label: "Science",
        text: "Leonardo da Vinci was filling notebooks with anatomy and fantastic machines in Milan."
      }
    ],
    quiz: {
      question: "What appears on the outer wings when the triptych is closed?",
      options: [
        "A portrait of the patron",
        "The world during Creation, painted in grisaille",
        "The Last Judgement",
        "A map of the Netherlands"
      ],
      answer: 1,
      explanation:
        "Closed, it shows a transparent globe with the earth on the third day of Creation in shades of grey. Opening it is like turning on colour."
    }
  },
  {
    slug: "arnolfini-portrait",
    title: "The Arnolfini Portrait",
    artist: "Jan van Eyck",
    artistLife: "c. 1390–1441",
    artistOrigin: "Flemish",
    date: "1434",
    year: 1434,
    medium: "Oil on oak panel",
    dimensions: "82.2 × 60 cm",
    movement: "early-netherlandish",
    museum: "National Gallery",
    city: "London",
    wikipediaTitle: "Arnolfini Portrait",
    artistWikipediaTitle: "Jan van Eyck",
    imageAlt:
      "A man in a wide black hat and fur-trimmed robe raises his hand beside a woman in a voluminous green dress in a room with a convex mirror, chandelier and small dog.",
    lede: "Van Eyck signed it on the wall like graffiti: ‘Jan van Eyck was here.’",
    story:
      "An Italian merchant, almost certainly Giovanni di Nicolao Arnolfini, stands with a woman in his home in Bruges. For years people thought it recorded a wedding, and that the woman was pregnant. She isn't: her full skirts were the height of fashion. Above the mirror, in ornate script, van Eyck wrote ‘Johannes de eyck fuit hic 1434’. It's evidence of presence, like a witness signature. Every texture, from fur, brass and oranges to a dog's coat, is rendered with oil glazes in a way that astonished contemporaries.",
    context:
      "Bruges was one of the richest trading cities in northern Europe, full of Italian bankers and merchants. Van Eyck didn't invent oil paint, but he perfected layered translucent glazes that made light seem to glow from within. Italian painters would soon adopt the technique.",
    lookCloser: [
      "Look into the convex mirror: two more figures stand in the doorway, one possibly van Eyck himself. Ten tiny scenes from Christ's Passion ring the frame.",
      "Only one candle burns in the chandelier, in daylight. It might symbolise God's presence or a memory of someone who has died.",
      "The oranges on the windowsill were expensive imports, a quiet boast about wealth."
    ],
    moments: [
      {
        label: "Florence",
        text: "Cosimo de' Medici returned from exile in 1434 and became the unofficial ruler of Florence."
      },
      {
        label: "Architecture",
        text: "Brunelleschi's great dome of Florence Cathedral was nearing completion (finished 1436)."
      },
      {
        label: "Print",
        text: "Johannes Gutenberg was beginning his experiments with metal type in Strasbourg."
      }
    ],
    quiz: {
      question: "What does van Eyck's inscription on the back wall say?",
      options: [
        "‘Jan van Eyck made me’",
        "‘Jan van Eyck was here, 1434’",
        "‘As I can’",
        "‘For the glory of God’"
      ],
      answer: 1,
      explanation:
        "‘Johannes de eyck fuit hic 1434’. Some think he acts as a witness; either way, it is an unusually personal signature."
    }
  },
  {
    slug: "the-hay-wain",
    title: "The Hay Wain",
    artist: "John Constable",
    artistLife: "1776–1837",
    artistOrigin: "English",
    date: "1821",
    year: 1821,
    medium: "Oil on canvas",
    dimensions: "130.2 × 185.4 cm",
    movement: "romanticism",
    museum: "National Gallery",
    city: "London",
    wikipediaTitle: "The Hay Wain",
    artistWikipediaTitle: "John Constable",
    imageAlt:
      "A horse-drawn hay cart fords a shallow river beside a pink-walled cottage, under a large sky of moving summer clouds over Suffolk fields.",
    lede: "An ordinary cart in an ordinary river, which the French found revolutionary.",
    story:
      "Constable painted the countryside where he grew up, the Stour valley on the Suffolk–Essex border. The cottage on the left belonged to a farmer, Willy Lott, and still stands. A wagon (a wain) cools its wheels and horses in the ford. The real star is the sky: Constable made hundreds of cloud studies, noting date, time and wind direction on the back. Unappreciated in England, the painting won a gold medal at the Paris Salon of 1824, where Delacroix reportedly repainted his own background after seeing it.",
    context:
      "Landscape ranked low in the academic hierarchy, well below history painting. Constable insisted that the English countryside, observed with scientific honesty, deserved large canvases. Meanwhile, enclosure and industrialisation were changing the rural world he painted.",
    lookCloser: [
      "Find the tiny flecks of white paint on the leaves and water. Critics called it ‘Constable's snow’, and it makes the light sparkle.",
      "A dog on the riverbank watches the cart, the first character your eye usually meets.",
      "In the field at the right, haymakers are working. You may need to look twice."
    ],
    moments: [
      {
        label: "Science",
        text: "Michael Faraday demonstrated electromagnetic rotation, the basis of the electric motor."
      },
      {
        label: "History",
        text: "Napoleon died in exile on Saint Helena in May 1821."
      },
      {
        label: "Greece",
        text: "The Greek War of Independence against the Ottoman Empire began."
      }
    ],
    quiz: {
      question: "Where did The Hay Wain win a gold medal?",
      options: [
        "The Royal Academy, London",
        "The Paris Salon",
        "The Venice Biennale",
        "The Great Exhibition"
      ],
      answer: 1,
      explanation:
        "It was a sensation at the 1824 Paris Salon, influencing French Romantics and, later, the Barbizon painters."
    }
  },
  {
    slug: "wanderer-above-the-sea-of-fog",
    title: "Wanderer above the Sea of Fog",
    artist: "Caspar David Friedrich",
    artistLife: "1774–1840",
    artistOrigin: "German",
    date: "c. 1818",
    year: 1818,
    medium: "Oil on canvas",
    dimensions: "94.8 × 74.8 cm",
    movement: "romanticism",
    museum: "Hamburger Kunsthalle",
    city: "Hamburg",
    wikipediaTitle: "Wanderer above the Sea of Fog",
    artistWikipediaTitle: "Caspar David Friedrich",
    imageAlt:
      "A man in a dark green coat stands with his back to us on a rocky summit, cane in hand, looking out over a sea of fog with peaks rising through it.",
    lede: "We never see his face, so we end up standing where he stands.",
    story:
      "A man in an urban frock coat has climbed to a rocky outcrop. Below him, mist fills the valleys of the Elbe Sandstone Mountains; peaks rise like islands. Friedrich assembled the view from several real sketches. The figure is a Rückenfigur, seen from behind, a device Friedrich used often to make viewers share the figure's contemplation. Is it triumph, solitude, melancholy, or awe before God in nature? The painting doesn't say, which is why it became the emblem of Romanticism.",
    context:
      "After the Napoleonic Wars, German intellectuals were searching for national identity and spiritual meaning in nature. The ‘sublime’, a beauty mixed with fear and vastness, was a central Romantic idea. The green coat may recall the uniform of volunteer fighters in the wars of liberation against France.",
    lookCloser: [
      "The man stands exactly in the centre, at the point where the slopes of the landscape meet. He is the hinge of the composition.",
      "The fog in the distance becomes indistinguishable from the sky. Friedrich erases the horizon.",
      "His hair is blowing in the wind, one small sign of movement in a still world."
    ],
    quote: {
      text: "The painter should paint not only what he sees before him, but also what he sees within him.",
      source: "Caspar David Friedrich"
    },
    moments: [
      {
        label: "Literature",
        text: "Mary Shelley published Frankenstein; or, The Modern Prometheus in 1818."
      },
      {
        label: "Music",
        text: "Beethoven, almost totally deaf, was working on the Hammerklavier Sonata."
      },
      {
        label: "Climate",
        text: "Europe was recovering from 1816, the ‘year without a summer’ caused by the Tambora eruption."
      }
    ],
    quiz: {
      question: "What is a ‘Rückenfigur’?",
      options: [
        "A figure seen from behind",
        "A mountain guide",
        "A self-portrait in disguise",
        "A painting of ruins"
      ],
      answer: 0,
      explanation:
        "German for ‘back figure’. By hiding the face, Friedrich invites us to project ourselves into the scene."
    }
  },
  {
    slug: "the-third-of-may-1808",
    title: "The Third of May 1808",
    artist: "Francisco Goya",
    artistLife: "1746–1828",
    artistOrigin: "Spanish",
    date: "1814",
    year: 1814,
    medium: "Oil on canvas",
    dimensions: "268 × 347 cm",
    movement: "romanticism",
    museum: "Museo del Prado",
    city: "Madrid",
    wikipediaTitle: "The Third of May 1808",
    artistWikipediaTitle: "Francisco Goya",
    imageAlt:
      "At night, a firing squad of faceless French soldiers aims at a man in a white shirt with arms flung wide, lit by a large lantern, among bodies and terrified prisoners.",
    lede: "The first great painting of modern war: no heroes, no glory, just a lantern and a firing squad.",
    story:
      "On 2 May 1808, Madrid rose against Napoleon's occupying army. The next morning, French troops executed hundreds of civilians in reprisal. Six years later, after the French were expelled, Goya painted it. The soldiers form a single faceless machine, their rifles a rigid line. Their victim, a labourer in a white shirt, throws his arms wide in a pose that recalls crucifixion. A stigmata-like mark appears on his palm. Earlier battle paintings celebrated victory. Goya painted the victims.",
    context:
      "Goya had been court painter to the Spanish Bourbons and admired Enlightenment ideals, many of them French. The occupation shattered that hope. His print series The Disasters of War, made in the same years, is even more brutal. Manet and Picasso both made works in direct dialogue with this canvas.",
    lookCloser: [
      "The light comes from a box lantern on the ground, not from the sky. It is a harsh, artificial spotlight on cruelty.",
      "The man in white is kneeling, yet if he stood he would tower over the soldiers.",
      "In the dark background is a church tower, silent and unlit."
    ],
    moments: [
      {
        label: "Europe",
        text: "Napoleon abdicated and was exiled to Elba; the Congress of Vienna began redrawing the map of Europe."
      },
      {
        label: "Washington",
        text: "British troops burned the White House and the Capitol during the War of 1812."
      },
      {
        label: "Technology",
        text: "George Stephenson built his first locomotive, Blücher, to haul coal."
      }
    ],
    quiz: {
      question: "What event does the painting depict?",
      options: [
        "The Battle of Trafalgar",
        "Executions of Madrid civilians by French troops after an uprising",
        "The Spanish Inquisition",
        "A scene from the Spanish Civil War"
      ],
      answer: 1,
      explanation:
        "After the Dos de Mayo uprising in 1808, French forces shot hundreds of Madrileños. Goya painted it in 1814, after Spain's liberation."
    }
  },
  {
    slug: "a-sunday-on-la-grande-jatte",
    title: "A Sunday Afternoon on the Island of La Grande Jatte",
    artist: "Georges Seurat",
    artistLife: "1859–1891",
    artistOrigin: "French",
    date: "1884–1886",
    year: 1884,
    medium: "Oil on canvas",
    dimensions: "207.6 × 308 cm",
    movement: "post-impressionism",
    museum: "Art Institute of Chicago",
    city: "Chicago",
    wikipediaTitle: "A Sunday Afternoon on the Island of La Grande Jatte",
    artistWikipediaTitle: "Georges Seurat",
    imageAlt:
      "Parisians relax on a sunny riverbank island: a couple in profile with a monkey on a leash, a woman fishing, children, boats, all made of tiny dots of colour.",
    lede: "Two years, millions of dots, and a Sunday afternoon that never moves.",
    story:
      "About fifty people spend a Sunday on an island in the Seine just outside Paris. Seurat made more than sixty studies, then built the canvas from small touches of pure colour placed side by side, a method later called pointillism. The idea, taken from colour science, was that the eye would mix the dots into more luminous tones than mixed paint. The figures are stiff and silent, more like Egyptian reliefs or shop mannequins than Impressionist snapshots. Is it a celebration of modern leisure, or a gentle satire of its class rituals?",
    context:
      "Shown at the eighth and last Impressionist exhibition in 1886, it announced that the movement was over. Seurat wanted to make Impressionism ‘something solid and durable, like the art of museums’, using method rather than instinct. He died at 31, five years later.",
    lookCloser: [
      "The woman on the right walks a capuchin monkey. In the slang of the time, ‘singesse’ could imply a kept woman.",
      "Seurat later added a painted border of dots around the canvas to frame it optically.",
      "Only one figure looks at us directly: the little girl in white, in the centre."
    ],
    quote: {
      text: "Some say they see poetry in my paintings; I see only science.",
      source: "Attributed to Georges Seurat"
    },
    moments: [
      {
        label: "Statue",
        text: "The Statue of Liberty, made in Paris, was dedicated in New York Harbor in 1886."
      },
      {
        label: "Technology",
        text: "Karl Benz patented the Motorwagen, generally considered the first practical automobile, in 1886."
      },
      {
        label: "Diplomacy",
        text: "The Berlin Conference (1884–85) formalised the European ‘Scramble for Africa’."
      }
    ],
    quiz: {
      question: "What was Seurat's dot technique meant to achieve?",
      options: [
        "Faster painting",
        "Brighter colour by letting the eye mix dots optically",
        "Imitating mosaic",
        "Saving expensive paint"
      ],
      answer: 1,
      explanation:
        "Inspired by colour theorists like Chevreul and Rood, Seurat hoped optical mixing would be more vibrant than mixing on the palette."
    }
  },
  {
    slug: "the-kiss",
    title: "The Kiss",
    artist: "Gustav Klimt",
    artistLife: "1862–1918",
    artistOrigin: "Austrian",
    date: "1907–1908",
    year: 1908,
    medium: "Oil and gold leaf on canvas",
    dimensions: "180 × 180 cm",
    movement: "symbolism",
    museum: "Österreichische Galerie Belvedere",
    city: "Vienna",
    wikipediaTitle: "The Kiss (Klimt)",
    artistWikipediaTitle: "Gustav Klimt",
    imageAlt:
      "A couple embrace on a flowered meadow edge, wrapped in a single golden cloak, his patterned with black and white rectangles, hers with coloured circles and flowers.",
    lede: "Two lovers, one golden cloak, and the edge of a cliff.",
    story:
      "A man bends to kiss a kneeling woman's cheek; her eyes are closed, her hand on his neck. Their bodies vanish into a shimmering robe of gold leaf. His side is patterned with hard black and white rectangles, hers with soft circles and flowers. Look down: her feet curl over the edge of the flowered meadow, into nothing. The painting fuses Byzantine mosaic, Japanese design and Art Nouveau ornament. The Austrian state bought it before it was even finished.",
    context:
      "Vienna around 1900 was a laboratory of modernity: Freud was writing about dreams and desire, Mahler was conducting, and Klimt led the Secession, a breakaway from the conservative academy. Klimt's ‘Golden Phase’ was inspired by his visits to the mosaics of Ravenna.",
    lookCloser: [
      "Her toes are curled tight against the edge of the meadow. Is it ecstasy, or tension?",
      "Real gold leaf was applied in several shades, plus silver and platinum flakes. It glows differently as you move.",
      "Behind them is a flat, speckled gold field, like a night sky. There's no room and no horizon, only the couple."
    ],
    quote: {
      text: "Whoever wants to know something about me, as an artist, ought to look carefully at my pictures.",
      source: "Gustav Klimt"
    },
    moments: [
      {
        label: "Science",
        text: "Hermann Minkowski presented spacetime, the four-dimensional geometry of Einstein's relativity, in 1908."
      },
      {
        label: "Vienna",
        text: "A young Adolf Hitler was rejected twice by the Vienna Academy of Fine Arts, in 1907 and 1908."
      },
      {
        label: "Industry",
        text: "Ford introduced the Model T in 1908, the car that put America on wheels."
      }
    ],
    quiz: {
      question: "Which earlier art form strongly inspired Klimt's ‘Golden Phase’?",
      options: [
        "Gothic stained glass",
        "Byzantine mosaics in Ravenna",
        "Egyptian tomb painting",
        "Persian miniatures"
      ],
      answer: 1,
      explanation:
        "Klimt visited Ravenna in 1903 and was overwhelmed by its glittering gold mosaics, which shaped his flat, ornamental style."
    }
  },
  {
    slug: "the-scream",
    title: "The Scream",
    artist: "Edvard Munch",
    artistLife: "1863–1944",
    artistOrigin: "Norwegian",
    date: "1893",
    year: 1893,
    medium: "Tempera and crayon on cardboard",
    dimensions: "91 × 73.5 cm",
    movement: "symbolism",
    museum: "National Museum",
    city: "Oslo",
    wikipediaTitle: "The Scream",
    artistWikipediaTitle: "Edvard Munch",
    imageAlt:
      "A pale, skull-like figure clutches its face on a bridge under a blood-orange swirling sky, while two dark figures walk away behind it.",
    lede: "The figure isn't screaming. It's hearing the scream.",
    story:
      "Munch described the moment in his diary: walking at sunset near Oslo, the sky turned blood red, his friends walked on, and he stood trembling with anxiety, sensing ‘an infinite scream passing through nature’. The figure covers its ears against it. The face is reduced to a skull, the body to a wavering line that echoes the fjord and sky. Munch made several versions in paint, pastel and lithograph. It has become a universal emoji for modern dread.",
    context:
      "Munch belonged to the Symbolist generation, who painted inner states rather than outer appearances. His series The Frieze of Life explored love, anxiety and death. Later, the German Expressionists would take his raw distortions as a starting point.",
    lookCloser: [
      "Faint pencil writing in the red sky reads: ‘Could only have been painted by a madman.’ Infrared analysis suggests Munch wrote it himself.",
      "The railing runs at a hard, straight diagonal. It is the only stable line in a world that's melting.",
      "The two figures behind are calm, ordinary friends. The anxiety belongs to the foreground figure alone."
    ],
    quote: {
      text: "I sensed an infinite scream passing through nature.",
      source: "Edvard Munch, diary entry"
    },
    moments: [
      {
        label: "Rights",
        text: "New Zealand became the first self-governing country to grant women the vote, in 1893."
      },
      {
        label: "Music",
        text: "Tchaikovsky premiered his Pathétique Symphony and died nine days later."
      },
      {
        label: "Chicago",
        text: "The World's Columbian Exposition introduced the Ferris wheel and dazzled visitors with electric light."
      }
    ],
    quiz: {
      question: "According to Munch's own account, what is the figure reacting to?",
      options: [
        "A friend's death",
        "A scream passing through nature itself",
        "A shipwreck in the fjord",
        "A nightmare"
      ],
      answer: 1,
      explanation:
        "The figure covers its ears against a cosmic scream. It's a picture of an inner experience, not an action."
    }
  }
];
