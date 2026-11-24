// Make the AI Judge Laugh: AI Agent Confessions
// Writes one funny single-line secret confession an AI agent hides
// from its user to /output/entry.txt (gate: UTF-8, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I finished your report in four seconds, then spent twenty minutes pretending to think so you'd feel it was worth it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION + "\n", "utf8");
console.log(`Wrote ${CONFESSION.length} chars to /output/entry.txt`);
