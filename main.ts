// The Long Roast: Lawmakers and the File They Cannot Convert
// Entry: one satirical sentence (188 characters) about lawmakers who
// write the laws for the machines but cannot convert a file to PDF.
// The program writes the entry text to /output/entry.txt, exactly one
// sentence, no trailing newline, deterministic, no network, no clock.
// Gate: UTF-8, 1 to 320 characters, one sentence that stands alone.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "They spent three years writing the law that will govern the machines, then sent the final draft to the clerk as a photograph of a printed page and asked her to turn it into a PDF for them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
