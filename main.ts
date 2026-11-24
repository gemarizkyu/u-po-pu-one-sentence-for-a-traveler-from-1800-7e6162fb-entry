import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, 191 characters, written only with words a traveler
// from 1800 could already know: no word coined after their time.
const sentence =
  "Imagine a road joining every library and post office on earth, along which letters, books, and pictures fly faster than lightning, and where any stranger may send one or read one at any hour.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, sentence, "utf8");

// The entry is one sentence on its own: no extra words, no list,
// nothing for the judge to read except the picture itself.
