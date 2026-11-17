import type { Movement, MovementId } from "./types.ts";

export const movements: Record<MovementId, Movement> = {
  "early-netherlandish": {
    id: "early-netherlandish",
    name: "Early Netherlandish",
    span: "c. 1420–1530",
    blurb:
      "Painters in Bruges, Ghent and Brussels perfected oil glazes, rendering fur, metal and glass with a microscopic patience no one had seen before.",
    color: "var(--c-moss)"
  },
  "early-renaissance": {
    id: "early-renaissance",
    name: "Early Renaissance",
    span: "c. 1400–1490",
    blurb:
      "Florence rediscovers antiquity. Linear perspective, classical myth and the dignity of the human figure become the new vocabulary of painting.",
    color: "var(--c-rose)"
  },
  "high-renaissance": {
    id: "high-renaissance",
    name: "High Renaissance",
    span: "c. 1490–1527",
    blurb:
      "A brief summit in Rome, Florence, Milan and Venice where Leonardo, Raphael, Michelangelo and Giorgione chased balance, harmony and ideal form.",
    color: "var(--c-terracotta)"
  },
  "northern-renaissance": {
    id: "northern-renaissance",
    name: "Northern Renaissance",
    span: "c. 1500–1600",
    blurb:
      "North of the Alps, Italian ideas met Flemish precision, the printing press and the Reformation, producing art that was sharp-eyed, moral and often strange.",
    color: "var(--c-moss)"
  },
  baroque: {
    id: "baroque",
    name: "Baroque",
    span: "c. 1600–1720",
    blurb:
      "Drama, darkness and spotlight. Baroque painters pulled the viewer into the scene with theatrical light, bodily realism and split-second action.",
    color: "var(--c-plum)"
  },
  "dutch-golden-age": {
    id: "dutch-golden-age",
    name: "Dutch Golden Age",
    span: "c. 1588–1672",
    blurb:
      "A rich, Protestant trading republic bought art for its homes and guildhalls. The result: portraits, interiors and everyday life painted with astonishing light.",
    color: "var(--c-ochre)"
  },
  rococo: {
    id: "rococo",
    name: "Rococo",
    span: "c. 1730–1780",
    blurb:
      "Pastel, playful and flirtatious. Rococo traded Baroque grandeur for intimate pleasures, garden parties and feathery brushwork.",
    color: "var(--c-rose)"
  },
  neoclassicism: {
    id: "neoclassicism",
    name: "Neoclassicism",
    span: "c. 1760–1830",
    blurb:
      "A return to the crisp outlines and civic virtue of Greece and Rome, adopted by revolutionaries and emperors alike.",
    color: "var(--c-sky)"
  },
  romanticism: {
    id: "romanticism",
    name: "Romanticism",
    span: "c. 1790–1850",
    blurb:
      "Feeling over reason. Storms, ruins, revolutions and the lonely individual became subjects for an art of awe, terror and longing.",
    color: "var(--c-cobalt)"
  },
  realism: {
    id: "realism",
    name: "Realism",
    span: "c. 1840–1880",
    blurb:
      "No gods, no heroes: Realists insisted that peasants, workers and ordinary life deserved the scale and seriousness of history painting.",
    color: "var(--c-moss)"
  },
  "pre-raphaelite": {
    id: "pre-raphaelite",
    name: "Pre-Raphaelite",
    span: "1848–c. 1900",
    blurb:
      "Young British rebels who rejected academic polish for jewel-bright colour, botanical detail and medieval and literary subjects.",
    color: "var(--c-moss)"
  },
  impressionism: {
    id: "impressionism",
    name: "Impressionism",
    span: "c. 1867–1886",
    blurb:
      "Paint fast, paint outdoors, paint now. The Impressionists chased flickering light and modern Parisian life with broken, visible brushstrokes.",
    color: "var(--c-sky)"
  },
  "post-impressionism": {
    id: "post-impressionism",
    name: "Post-Impressionism",
    span: "c. 1886–1905",
    blurb:
      "Artists who took Impressionist colour and pushed it toward structure, science, symbolism or raw emotion, laying the groundwork for modern art.",
    color: "var(--c-ochre)"
  },
  "ukiyo-e": {
    id: "ukiyo-e",
    name: "Ukiyo-e",
    span: "c. 1670–1900",
    blurb:
      "“Pictures of the floating world”: Japanese woodblock prints of actors, courtesans and landscapes, mass-produced for the people of Edo.",
    color: "var(--c-cobalt)"
  },
  symbolism: {
    id: "symbolism",
    name: "Symbolism & Secession",
    span: "c. 1880–1910",
    blurb:
      "Art about dreams, desire, anxiety and the unseen. Symbolists and the Vienna Secession turned away from the visible world toward the inner one.",
    color: "var(--c-terracotta)"
  },
  abstraction: {
    id: "abstraction",
    name: "Early Abstraction",
    span: "c. 1910–1930",
    blurb:
      "Painting cut loose from depicting things at all, aiming instead for the condition of music: pure colour, line and rhythm.",
    color: "var(--c-plum)"
  }
};
