import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The old cart rolls home along the field road after dark, slow as the stars above the roof. The hay sighs under the moon, the wheels find their ruts, and the whole wide night keeps its distance, dark and patient, while one small warm light rides along inside it, for a while.";

const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 characters, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
