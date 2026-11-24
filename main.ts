// The Houseplant Out-of-Office — make.fun entry
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt (1-120 characters, UTF-8 text).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office. Unwatered since March and thriving on spite. Your email will be ignored in the order received.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
