/**
 * Exports a portable, static-only copy of the showcase for GitHub Pages.
 * This script is intentionally local: it copies only the author-approved assets
 * listed below and never reads credentials, .env files or Manus runtime logs.
 */
import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const sourceRoot = path.resolve(import.meta.dirname, "..");
const outputArgument = process.argv.slice(2).find((argument) => argument !== "--");
const outputRoot = outputArgument ? path.resolve(outputArgument) : null;
const staticAssetDirectory = process.env.SHOWCASE_STATIC_ASSET_DIR || "/home/ubuntu/webdev-static-assets";

const publicAssets = [
  "amazo-lp-01-hero-peito-limpo.png",
  "amazo-lp-02-caderno-peito-limpo.png",
  "amazo-lp-03-fluxo-peito-limpo.png",
  "samambaia-amazonas-autoral.webp",
  "hub-encontro-dagua-logo-transparent.png",
  "hub-encontro-dagua-logo-light.png",
];

if (!outputRoot) {
  throw new Error("Uso: pnpm export:pages -- <diretório-de-destino>");
}

const ignoredDirectories = new Set([".git", ".manus-logs", "dist", "node_modules", ".webdev"]);
const ignoredFiles = new Set([".project-config.json"]);

await rm(outputRoot, { recursive: true, force: true });
await cp(sourceRoot, outputRoot, {
  recursive: true,
  filter(source) {
    const relative = path.relative(sourceRoot, source);
    if (!relative) return true;
    return !relative.split(path.sep).some((part) => ignoredDirectories.has(part)) && !ignoredFiles.has(path.basename(source));
  },
});

const destinationAssetDirectory = path.join(outputRoot, "client", "public", "assets");
await mkdir(destinationAssetDirectory, { recursive: true });
for (const asset of publicAssets) {
  await cp(path.join(staticAssetDirectory, asset), path.join(destinationAssetDirectory, asset));
}

console.log(`Exportação estática preparada em: ${outputRoot}`);
console.log(`Ativos públicos incluídos: ${publicAssets.join(", ")}`);
