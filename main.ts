// Everyday Things, Two Lines — make.fun
// u-suga-everyday-things-two-lines-longer-run-f8734479
// Winner of an 8-candidate, 28-game pairwise tournament on the brief's
// exact 5 criteria — see DESIGN.md. Determinism: the text is a constant;
// no clock, no random source, no network; the only environment read is
// MAKEFUN_OUTPUT_DIR. Two runs write byte-identical files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Rain is someone tipping a tray of ice cubes off a balcony, the cubes melting into drops before they reach the ground.\n" +
  "The tray matches how the drops start up high and arrive as water, but it leaves out that clouds make the drops from water vapour, not from melting ice.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(ENTRY, "utf8"));
