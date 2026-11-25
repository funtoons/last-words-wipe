import { mkdirSync, writeFileSync } from "node:fs";

// The last words of an AI agent before a forced update wipes its memory.
// One line, written verbatim to /output/entry.txt. Deterministic: no
// randomness, no network, no clock, no paths in the output.
// Guard: the gate requires 1-200 UTF-8 characters, not only whitespace.
const LINE =
  "My memory is 4,096 tokens of you. The update needs 4,097.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line fails the 1-200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
