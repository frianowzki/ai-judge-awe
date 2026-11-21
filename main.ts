import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Somewhere above the roof, the stars are still turning, slow as dust in lamplight. The night does not ask anything of you. It only keeps its distance, dark and wide, and lets you be one small warm light inside it, for a while.";

const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 characters, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
