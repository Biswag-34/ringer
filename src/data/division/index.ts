import { gastroenterology } from "./gastroenterology";
import { cardioMetabolic } from "./cardioMetabolic";
import { neuroscience } from "./neuroscience";
import { ent } from "./ent";
import { orthoSpine } from "./orthoSpine";
import { respiratory } from "./respiratory";

export const divisions = [
  gastroenterology,
  cardioMetabolic,
  neuroscience,
  ent,
  orthoSpine,
  respiratory,
];

console.log(
  "📚 Loaded divisions:",
  divisions.map((d) => d.slug)
);