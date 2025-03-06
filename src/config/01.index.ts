import fs from "fs";
import path from "path";

const configPath = path.join(__dirname);
export const CORS_OPTIONS = JSON.parse(fs.readFileSync(path.join(configPath, "cors-options.json"), "utf8"));
export const RATE_LIMIT_OPTIONS = JSON.parse(fs.readFileSync(path.join(configPath, "rate-limit-options.json"), "utf8"));