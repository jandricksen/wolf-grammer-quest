import type { Territory } from "../../types";
import { apostrophes } from "./apostrophes";
import { subordinate } from "./subordinate";
import { nouns } from "./nouns";
import { verbs } from "./verbs";
import { adjectives } from "./adjectives";
import { adverbs } from "./adverbs";
import { pronouns } from "./pronouns";
import { conjunctions } from "./conjunctions";
import { affixes } from "./affixes";
import { commas } from "./commas";
import { directspeech } from "./directspeech";

export const territories: Record<string, Territory> = {
  apostrophes,
  subordinate,
  nouns,
  verbs,
  adjectives,
  adverbs,
  pronouns,
  conjunctions,
  affixes,
  commas,
  directspeech,
};
