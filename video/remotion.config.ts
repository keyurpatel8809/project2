import { Config } from "@remotion/cli/config";
import fs from "node:fs";

// Use the pre-installed Chromium when present (cloud/CI containers) instead of
// downloading Remotion's own headless shell. Locally, Remotion falls back to
// its managed browser automatically.
const preinstalled = [
  process.env.REMOTION_BROWSER_EXECUTABLE,
  "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/chrome-headless-shell",
].filter((p): p is string => Boolean(p) && fs.existsSync(p as string));
if (preinstalled[0]) {
  Config.setBrowserExecutable(preinstalled[0]);
}

Config.setVideoImageFormat("jpeg");
Config.setCodec("h264");
Config.setCrf(18);
Config.setOverwriteOutput(true);
Config.setConcurrency(2);
