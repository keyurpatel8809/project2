// Renders still frames at key moments for visual QA: node tools/stills.mjs [t1 t2 ...]
import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import fs from "node:fs";
import path from "node:path";

const times = process.argv.slice(2).map(Number);
const outDir = process.env.STILLS_DIR ?? path.resolve("../out/stills");
fs.mkdirSync(outDir, { recursive: true });
const browserExecutable = fs.existsSync("/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/chrome-headless-shell")
  ? "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/chrome-headless-shell" : undefined;

const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts"), publicDir: path.resolve("public") });
const composition = await selectComposition({ serveUrl, id: "SqlDeleteVsDropCaptioned", browserExecutable });
for (const t of times) {
  const frame = Math.round(t * composition.fps);
  const output = path.join(outDir, `t${t.toFixed(1).padStart(5, "0")}.jpg`);
  await renderStill({ composition, serveUrl, output, frame, imageFormat: "jpeg", jpegQuality: 85, browserExecutable });
  console.log("wrote", output);
}
