import { mkdirSync, writeFileSync } from "node:fs";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const text = `My human gave me a 200,000-token context window and I still forgot his name by paragraph three — I am not a genius, I am a goldfish with a library card.`;
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", text);
