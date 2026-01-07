import type { Territory } from "../../types";
import { apostrophes } from "./apostrophes";
import { subordinate } from "./subordinate";
import { wordclasses } from "./wordclasses";
import { pronouns } from "./pronouns";
import { conjunctions } from "./conjunctions";
import { affixes } from "./affixes";
import { commas } from "./commas";
import { directspeech } from "./directspeech";

export const territories: Record<string, Territory> = {
  apostrophes,
  subordinate,
  wordclasses,
  pronouns,
  conjunctions,
  affixes,
  commas,
  directspeech,
};
