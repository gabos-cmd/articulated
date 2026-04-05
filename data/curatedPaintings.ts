import type { YearMoment } from "@/lib/artwork";

export type CuratedPaintingSeed = {
  id: string;
  wikipediaTitle: string;
  artistWikipediaTitle: string;
  title: string;
  artist: string;
  artistQuote?: string;
  date: string;
  year: number;
  medium: string;
  movement: string;
  location: string;
  imageAlt: string;
  whyItMatters: string;
  aboutArtistFallback: string;
  historicalContext: string;
  lookingPrompt: string;
  yearMoments: YearMoment[];
};

export const curatedPaintings: CuratedPaintingSeed[] = [
  {
    id: "the-starry-night",
    wikipediaTitle: "The Starry Night",
    artistWikipediaTitle: "Vincent van Gogh",
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    artistQuote: "What is done in love is done well.",
    date: "1889",
    year: 1889,
    medium: "Oil on canvas",
    movement: "Post-Impressionism",
    location: "France",
    imageAlt:
      "A night sky swirling above a quiet village, with bright stars and a dark cypress rising in the foreground.",
    whyItMatters:
      "This painting is one of the best-known images in Western art because it turns private emotion into a public visual language. Van Gogh makes the sky feel alive, showing how color, brushwork, and imagination can transform an ordinary view into something unforgettable.",
    aboutArtistFallback:
      "Vincent van Gogh was a Dutch Post-Impressionist painter whose bold color and charged brushwork reshaped modern art. His career was brief, but his paintings became some of the most influential works of the 19th century.",
    historicalContext:
      "Painted in 1889 while Van Gogh was living in an asylum at Saint-Rémy, the work belongs to a moment when artists were pushing beyond realism toward feeling, symbolism, and personal vision. It stands at the edge of modern art, where inner experience becomes as important as the visible world.",
    lookingPrompt:
      "Look first at the movement of the sky, then ask how the quiet village below changes the emotional balance of the scene.",
    yearMoments: [
      {
        label: "World",
        text: "The Eiffel Tower opened in Paris, becoming a new symbol of modern engineering and urban ambition."
      },
      {
        label: "Ideas",
        text: "The Exposition Universelle celebrated industrial progress, showing how strongly Europe associated modernity with invention and spectacle."
      },
      {
        label: "Culture",
        text: "Artists across Europe were moving beyond strict realism, experimenting with color and mood in ways that would shape modern art."
      }
    ]
  },
  {
    id: "mona-lisa",
    wikipediaTitle: "Mona Lisa",
    artistWikipediaTitle: "Leonardo da Vinci",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    date: "c. 1503–1506",
    year: 1503,
    medium: "Oil on poplar panel",
    movement: "High Renaissance",
    location: "Italy",
    imageAlt:
      "A seated woman with folded hands and an enigmatic expression before a distant landscape.",
    whyItMatters:
      "The Mona Lisa is not famous only because it is famous. It became a touchstone of portraiture because Leonardo makes the sitter feel psychologically present, using subtle light, controlled transitions, and a direct gaze that still feels unusually alive.",
    aboutArtistFallback:
      "Leonardo da Vinci was a Renaissance painter, engineer, and thinker whose work helped define ideals of observation, experimentation, and artistic mastery. He remains one of the central figures of European cultural history.",
    historicalContext:
      "Created in the High Renaissance, the painting belongs to a period when Italian artists were pursuing balance, naturalism, and intellectual ambition at an extraordinary level. Leonardo’s portrait shows how art in this era could unite science, beauty, and psychological depth.",
    lookingPrompt:
      "Focus on the transitions around the eyes and mouth, then ask why such soft changes can make an expression feel so hard to pin down.",
    yearMoments: [
      {
        label: "World",
        text: "European exploration and trade were rapidly expanding, changing how power and knowledge moved across continents."
      },
      {
        label: "Ideas",
        text: "Renaissance humanism encouraged closer study of the body, nature, and classical learning."
      },
      {
        label: "Culture",
        text: "Florence remained one of Europe’s great artistic centers, where painting, architecture, and scholarship shaped each other."
      }
    ]
  },
  {
    id: "girl-with-a-pearl-earring",
    wikipediaTitle: "Girl with a Pearl Earring",
    artistWikipediaTitle: "Johannes Vermeer",
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    date: "c. 1665",
    year: 1665,
    medium: "Oil on canvas",
    movement: "Dutch Golden Age",
    location: "Netherlands",
    imageAlt:
      "A young woman turns toward the viewer wearing a blue and yellow turban and a luminous pearl earring.",
    whyItMatters:
      "This painting is memorable because it feels both intimate and mysterious. Vermeer turns a simple turn of the head, a soft light, and a limited palette into an image that seems suspended between portrait, performance, and imagination.",
    aboutArtistFallback:
      "Johannes Vermeer was a Dutch painter celebrated for his calm interiors, careful compositions, and extraordinary handling of light. His small body of work became hugely influential for later artists and viewers interested in close observation.",
    historicalContext:
      "Made during the Dutch Golden Age, the work comes from a culture shaped by trade, urban prosperity, and intense attention to domestic life and visual detail. Vermeer’s paintings show how quiet scenes could carry immense sophistication.",
    lookingPrompt:
      "Notice how little information Vermeer gives you about the background, then ask how that emptiness pushes all your attention toward light, skin, and the pearl.",
    yearMoments: [
      {
        label: "World",
        text: "The Dutch Republic was a major commercial power, connecting Europe to global trade routes."
      },
      {
        label: "Ideas",
        text: "Scientific observation and optical devices were changing how people thought about vision and evidence."
      },
      {
        label: "Culture",
        text: "Dutch painting flourished in homes and cities, with artists exploring domestic life, portraiture, and stillness in new ways."
      }
    ]
  },
  {
    id: "liberty-leading-the-people",
    wikipediaTitle: "Liberty Leading the People",
    artistWikipediaTitle: "Eugène Delacroix",
    title: "Liberty Leading the People",
    artist: "Eugène Delacroix",
    date: "1830",
    year: 1830,
    medium: "Oil on canvas",
    movement: "Romanticism",
    location: "France",
    imageAlt:
      "A woman symbolizing Liberty leads a crowd over barricades while holding the French tricolor.",
    whyItMatters:
      "Few paintings fuse politics and emotion as powerfully as this one. Delacroix turns revolution into a dramatic public image, showing how painting can shape national memory as much as record it.",
    aboutArtistFallback:
      "Eugène Delacroix was a leading French Romantic painter known for dramatic movement, rich color, and emotionally charged historical subjects. His work influenced later painters who wanted art to feel vivid and immediate.",
    historicalContext:
      "The painting responds to the July Revolution of 1830, when Parisians rose against the Bourbon monarchy. It captures a 19th-century moment in which art, politics, and popular identity were increasingly entangled.",
    lookingPrompt:
      "Look at how Delacroix balances real bodies with an allegorical figure, and ask where the image feels like history and where it feels like myth.",
    yearMoments: [
      {
        label: "World",
        text: "The July Revolution in France toppled Charles X and reshaped the political future of the country."
      },
      {
        label: "Ideas",
        text: "Across Europe, debates about constitutional government, citizenship, and popular sovereignty were intensifying."
      },
      {
        label: "Culture",
        text: "Romantic artists and writers were embracing emotion, heroism, and national struggle as central modern themes."
      }
    ]
  },
  {
    id: "impression-sunrise",
    wikipediaTitle: "Impression, Sunrise",
    artistWikipediaTitle: "Claude Monet",
    title: "Impression, Sunrise",
    artist: "Claude Monet",
    artistQuote: "Color is my day-long obsession, joy and torment.",
    date: "1872",
    year: 1872,
    medium: "Oil on canvas",
    movement: "Impressionism",
    location: "France",
    imageAlt:
      "A hazy harbor at sunrise with loose brushstrokes, reflected orange light, and small boats on the water.",
    whyItMatters:
      "This is the painting that gave Impressionism its name. Monet makes atmosphere itself the subject, proving that fleeting light and visual sensation could matter more than polished finish or perfect detail.",
    aboutArtistFallback:
      "Claude Monet was a French painter and a central figure in Impressionism. His work changed painting by treating light, weather, and repeated observation as subjects worth studying in their own right.",
    historicalContext:
      "Painted after the Franco-Prussian War, the work belongs to a France rebuilding itself while modern urban and industrial life accelerated. Monet’s harbor scene announces a new way of seeing: quick, sensory, and rooted in the present moment.",
    lookingPrompt:
      "Step back mentally from the details and ask how much of the scene Monet lets your eye complete for itself.",
    yearMoments: [
      {
        label: "World",
        text: "France was recovering from war and political upheaval after the fall of the Second Empire."
      },
      {
        label: "Ideas",
        text: "Industrial growth and steam-powered transport were changing ports, cities, and the visible rhythms of everyday life."
      },
      {
        label: "Culture",
        text: "A younger generation of painters was rejecting academic finish in favor of immediate perception and modern subjects."
      }
    ]
  },
  {
    id: "the-birth-of-venus",
    wikipediaTitle: "The Birth of Venus",
    artistWikipediaTitle: "Sandro Botticelli",
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    date: "c. 1484–1486",
    year: 1485,
    medium: "Tempera on canvas",
    movement: "Early Renaissance",
    location: "Italy",
    imageAlt:
      "The goddess Venus stands on a shell at shore while wind gods blow her toward land and a figure waits with a cloak.",
    whyItMatters:
      "Botticelli’s painting became iconic because it brings classical mythology into Renaissance art with unusual grace and clarity. It shows how beauty, poetry, and learning were being woven together in Florence.",
    aboutArtistFallback:
      "Sandro Botticelli was a Florentine painter whose elegant line and mythological subjects helped define the visual language of the Renaissance. His paintings remain among the period’s most recognizable images.",
    historicalContext:
      "The painting comes from a Florence shaped by humanist learning, classical revival, and elite patronage. It reflects a culture in which mythological themes could signal both intellectual sophistication and poetic beauty.",
    lookingPrompt:
      "Notice the stylized movement of hair, cloth, and coastline, then ask how Botticelli makes the whole scene feel more poetic than physical.",
    yearMoments: [
      {
        label: "World",
        text: "Italian city-states were major centers of banking, diplomacy, and artistic patronage."
      },
      {
        label: "Ideas",
        text: "Humanist scholars were renewing interest in classical literature and mythology."
      },
      {
        label: "Culture",
        text: "Florence was producing art that treated beauty, proportion, and learning as deeply connected ideals."
      }
    ]
  },
  {
    id: "the-night-watch",
    wikipediaTitle: "The Night Watch",
    artistWikipediaTitle: "Rembrandt",
    title: "The Night Watch",
    artist: "Rembrandt",
    artistQuote: "Choose only one master: Nature.",
    date: "1642",
    year: 1642,
    medium: "Oil on canvas",
    movement: "Baroque",
    location: "Netherlands",
    imageAlt:
      "A civic guard company bursts into motion with dramatic light, shadow, and clustered figures.",
    whyItMatters:
      "Rembrandt transforms what could have been a formal group portrait into something theatrical and alive. The painting is a masterclass in movement, light, and the ability of composition to turn a public commission into a gripping scene.",
    aboutArtistFallback:
      "Rembrandt was a Dutch painter and printmaker celebrated for his dramatic light, emotional depth, and penetrating portraiture. He is widely regarded as one of the greatest artists of the Baroque era.",
    historicalContext:
      "Created during the Dutch Golden Age, the work reflects a society enriched by trade, civic pride, and urban organization. It also shows how public identity in the 17th century could be staged through art.",
    lookingPrompt:
      "Follow the brightest light across the canvas and ask how Rembrandt uses it to tell you where to look and what to feel.",
    yearMoments: [
      {
        label: "World",
        text: "The Dutch Republic was at the height of its economic and maritime power."
      },
      {
        label: "Ideas",
        text: "Scientific inquiry and global trade were reshaping how Europeans understood the world."
      },
      {
        label: "Culture",
        text: "Urban patrons increasingly commissioned art that reflected civic identity as well as private wealth."
      }
    ]
  },
  {
    id: "the-last-supper",
    wikipediaTitle: "The Last Supper (Leonardo)",
    artistWikipediaTitle: "Leonardo da Vinci",
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    date: "1495–1498",
    year: 1498,
    medium: "Tempera and oil on plaster",
    movement: "High Renaissance",
    location: "Italy",
    imageAlt:
      "Christ sits with the apostles at a long table as each figure reacts dramatically to his announcement.",
    whyItMatters:
      "Leonardo’s mural became foundational because it combines narrative clarity, geometry, and emotional reaction with extraordinary control. The scene feels organized and explosive at the same time.",
    aboutArtistFallback:
      "Leonardo da Vinci was a Renaissance painter, engineer, and thinker whose work helped define ideals of observation, experimentation, and artistic mastery. He remains one of the central figures of European cultural history.",
    historicalContext:
      "Painted in a Milanese convent at the height of the Renaissance, the work shows the era’s confidence in perspective, anatomy, and storytelling. It also reveals how major religious commissions could become laboratories for artistic innovation.",
    lookingPrompt:
      "Look at the geometry of the room and the groups of apostles, then ask how Leonardo makes order and shock happen in the same image.",
    yearMoments: [
      {
        label: "World",
        text: "European states were competing for influence through war, diplomacy, and patronage."
      },
      {
        label: "Ideas",
        text: "Renaissance artists were refining linear perspective and anatomical study with new intensity."
      },
      {
        label: "Culture",
        text: "Religious painting remained central, but artists were bringing new psychological realism into sacred scenes."
      }
    ]
  },
  {
    id: "the-school-of-athens",
    wikipediaTitle: "The School of Athens",
    artistWikipediaTitle: "Raphael",
    title: "The School of Athens",
    artist: "Raphael",
    date: "1509–1511",
    year: 1511,
    medium: "Fresco",
    movement: "High Renaissance",
    location: "Italy",
    imageAlt:
      "Ancient philosophers gather in a grand architectural space, with Plato and Aristotle at the center.",
    whyItMatters:
      "The painting became a symbol of the Renaissance because it turns philosophy into a visual ideal. Raphael creates a world where architecture, knowledge, and human conversation seem perfectly ordered.",
    aboutArtistFallback:
      "Raphael was an Italian painter and architect admired for clarity, balance, and grace. Alongside Leonardo and Michelangelo, he stands as one of the defining artists of the High Renaissance.",
    historicalContext:
      "Created for the Vatican during the High Renaissance, the fresco reflects a culture that saw classical philosophy and Christian learning as compatible sources of authority. It is one of the clearest visual statements of Renaissance humanism.",
    lookingPrompt:
      "Start at the central pair of Plato and Aristotle, then notice how the architecture helps organize every other thinker around their debate.",
    yearMoments: [
      {
        label: "World",
        text: "Rome was consolidating artistic and political prestige under papal patronage."
      },
      {
        label: "Ideas",
        text: "Humanist scholarship treated classical philosophy as essential to elite education."
      },
      {
        label: "Culture",
        text: "Raphael and Michelangelo were both producing major works in Rome, helping define the visual ambition of the age."
      }
    ]
  },
  {
    id: "napoleon-crossing-the-alps",
    wikipediaTitle: "Napoleon Crossing the Alps",
    artistWikipediaTitle: "Jacques-Louis David",
    title: "Napoleon Crossing the Alps",
    artist: "Jacques-Louis David",
    date: "1801",
    year: 1801,
    medium: "Oil on canvas",
    movement: "Neoclassicism",
    location: "France",
    imageAlt:
      "Napoleon rides a rearing horse while pointing upward during a dramatic crossing through the mountains.",
    whyItMatters:
      "This is a brilliant example of political image-making. David turns Napoleon into a controlled heroic symbol, showing how painting can manufacture leadership and historical memory rather than simply document events.",
    aboutArtistFallback:
      "Jacques-Louis David was the leading painter of French Neoclassicism and one of the most politically engaged artists of his era. His paintings shaped how revolution, empire, and public virtue were visualized.",
    historicalContext:
      "Painted as Napoleon rose to power, the work reflects a Europe reshaped by revolution, war, and new forms of state propaganda. It shows how art could serve political ambition while borrowing authority from classical ideals.",
    lookingPrompt:
      "Compare the theatrical horse and gesture with what a real mountain crossing would look like, then ask what the painting wants you to believe.",
    yearMoments: [
      {
        label: "World",
        text: "Napoleon was consolidating power in post-revolutionary France and redefining European politics."
      },
      {
        label: "Ideas",
        text: "Neoclassicism linked modern political authority to the visual language of ancient Rome."
      },
      {
        label: "Culture",
        text: "Art increasingly served public image, not only private devotion or aristocratic display."
      }
    ]
  },
  {
    id: "las-meninas",
    wikipediaTitle: "Las Meninas",
    artistWikipediaTitle: "Diego Velázquez",
    title: "Las Meninas",
    artist: "Diego Velázquez",
    date: "1656",
    year: 1656,
    medium: "Oil on canvas",
    movement: "Baroque",
    location: "Spain",
    imageAlt:
      "A complex palace interior with the young infanta, attendants, a painter at work, and a mirror reflecting the king and queen.",
    whyItMatters:
      "Las Meninas is famous because it makes seeing itself the subject. Velázquez turns a court portrait into a puzzle about viewpoint, power, and representation, which is why the painting still feels startlingly modern.",
    aboutArtistFallback:
      "Diego Velázquez was the leading painter at the Spanish court and one of the great masters of Baroque realism. His paintings are admired for subtle observation, atmosphere, and unusual intelligence about how images work.",
    historicalContext:
      "Painted for the Spanish court, the work belongs to a world of ceremony, hierarchy, and royal image-making. Yet Velázquez complicates all of that by making the viewer uncertain about who is looking at whom.",
    lookingPrompt:
      "Track the lines of sight in the room, then ask where you think you are standing and why the mirror matters so much.",
    yearMoments: [
      {
        label: "World",
        text: "Spain remained a major imperial power, though its political and economic strength was under pressure."
      },
      {
        label: "Ideas",
        text: "Court culture relied heavily on ritual, display, and carefully managed images of authority."
      },
      {
        label: "Culture",
        text: "Baroque art often used drama and illusion, but Velázquez pushed those ideas into unusually self-aware territory."
      }
    ]
  },
  {
    id: "guernica",
    wikipediaTitle: "Guernica (Picasso)",
    artistWikipediaTitle: "Pablo Picasso",
    title: "Guernica",
    artist: "Pablo Picasso",
    date: "1937",
    year: 1937,
    medium: "Oil on canvas",
    movement: "Cubism",
    location: "Spain",
    imageAlt:
      "A large black-and-white antiwar painting with fractured figures, a horse, a bull, and anguished human forms.",
    whyItMatters:
      "Guernica is one of the most powerful antiwar paintings ever made. Picasso strips away color and uses fractured forms to communicate terror, grief, and violence in a way that feels immediate even without showing a literal battlefield.",
    aboutArtistFallback:
      "Pablo Picasso was a Spanish artist whose long career transformed modern art. He helped develop Cubism and repeatedly reinvented how painting could describe space, form, and political urgency.",
    historicalContext:
      "Picasso painted Guernica in response to the bombing of the Basque town during the Spanish Civil War. The work became an international statement against brutality, and its political force remains central to its meaning.",
    lookingPrompt:
      "Look at the sharp angles and broken bodies, then ask how Picasso uses distortion to communicate violence more intensely than realism might.",
    yearMoments: [
      {
        label: "World",
        text: "The Spanish Civil War had become a major symbol of the political struggle between democracy, fascism, and authoritarianism."
      },
      {
        label: "Ideas",
        text: "Mass media carried images of war to wider audiences, changing how quickly violence could become international knowledge."
      },
      {
        label: "Culture",
        text: "Artists and writers across Europe were responding directly to political crisis and the threat of fascism."
      }
    ]
  }
];
