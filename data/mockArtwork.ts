import type { Artwork } from "@/lib/artwork";

export const mockArtworks: Artwork[] = [
  {
    id: "129884",
    title: "Starry Night and the Astronauts",
    artist: "Alma Thomas",
    date: "1972",
    year: 1972,
    medium: "Acrylic on canvas",
    imageUrl:
      "https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/1200,/0/default.jpg",
    imageAlt:
      "Abstract painting with blue brushstrokes and a burst of orange, yellow, and red in the upper right.",
    location: "United States",
    movement: "Contemporary",
    whyItMatters:
      "This painting turns the excitement of the space age into color and rhythm. Alma Thomas shows that abstraction can feel joyful, ambitious, and deeply connected to its historical moment rather than distant or cold.",
    aboutArtist:
      "Alma Thomas spent decades teaching art before gaining major recognition as a painter. Her late career proves that artistic breakthroughs do not always happen early, and her work opened doors for wider recognition of Black women in American art.",
    historicalContext:
      "Made in 1972, the painting belongs to a period shaped by civil rights progress, scientific ambition, and new ideas about what modern art could communicate. Thomas transforms that atmosphere into a visual language built from light, movement, and optimism.",
    yearMoments: [
      {
        label: "Science",
        text: "Apollo 17 became the final crewed Moon mission, keeping public attention fixed on space exploration."
      },
      {
        label: "Politics",
        text: "The Watergate break-in took place, setting off one of the most important political scandals in modern U.S. history."
      },
      {
        label: "Culture",
        text: "The first generation of home video games was arriving, hinting at how entertainment and technology would change daily life."
      }
    ],
    source: "mock",
    sourceLabel: "Curated museum sample"
  },
  {
    id: "4758",
    title: "Stoke-by-Nayland",
    artist: "John Constable",
    date: "1836",
    year: 1836,
    medium: "Oil on canvas",
    imageUrl:
      "https://www.artic.edu/iiif/2/400ce9e8-2f67-44e2-dd68-e6c98880d27f/full/1200,/0/default.jpg",
    imageAlt:
      "Expansive English countryside scene with trees, sky, and small figures near horses.",
    location: "England",
    movement: "19th century",
    whyItMatters:
      "Constable treats landscape as something emotional and immediate, not just decorative. The loose, energetic handling makes the painting feel surprisingly modern and shows how observation can become expressive.",
    aboutArtist:
      "John Constable returned again and again to places from his childhood. That personal attachment helped him paint nature with unusual intimacy, and it made his landscapes influential for later artists interested in atmosphere and lived experience.",
    historicalContext:
      "In the 1830s, Britain was experiencing industrial change, urban growth, and new debates about memory, labor, and the countryside. Constable's landscapes can feel like acts of preservation, holding on to place while the world around them transformed.",
    yearMoments: [
      {
        label: "Science",
        text: "Photography was emerging as a new way to record the world, changing ideas about observation and image-making."
      },
      {
        label: "Exploration",
        text: "Charles Darwin returned from the voyage of the Beagle, bringing back observations that would later reshape biology."
      },
      {
        label: "World events",
        text: "Political upheavals, including the Texas Revolution, reflected how unsettled and fast-moving the 1830s could be."
      }
    ],
    source: "mock",
    sourceLabel: "Curated museum sample"
  },
  {
    id: "22",
    title: "Villa Pamphili outside Porta S. Pancrazio, from Views of Rome",
    artist: "Giovanni Battista Piranesi",
    date: "1776",
    year: 1776,
    medium: "Etching on laid paper",
    imageUrl:
      "https://www.artic.edu/iiif/2/a76844cc-cec8-6026-5609-50d3961aed4c/full/1200,/0/default.jpg",
    imageAlt:
      "Detailed architectural print showing a Roman landscape with walls, trees, and dramatic sky.",
    location: "Italy",
    movement: "Printmaking",
    whyItMatters:
      "Piranesi's prints helped shape how people imagined Rome, especially those who knew it only through books and travel stories. The work shows how prints could spread visual culture long before digital media existed.",
    aboutArtist:
      "Piranesi was trained as an architect and became famous for etchings that combined precision with theatrical drama. His images are ideal for studying how artists can turn historical places into unforgettable visual experiences.",
    historicalContext:
      "By the late 18th century, Rome was central to the Grand Tour, when wealthy travelers studied classical culture across Europe. Prints like this one acted as souvenirs, teaching tools, and status objects all at once.",
    yearMoments: [
      {
        label: "Politics",
        text: "The United States Declaration of Independence was adopted, marking a major turning point in Atlantic history."
      },
      {
        label: "Ideas",
        text: "Adam Smith published The Wealth of Nations, a foundational text for modern economics."
      },
      {
        label: "Culture",
        text: "Neoclassicism continued to grow, showing how strongly European artists and designers were looking back to the ancient world."
      }
    ],
    source: "mock",
    sourceLabel: "Curated museum sample"
  }
];
