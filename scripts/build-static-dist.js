const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const distRoot = path.join(projectRoot, "dist");

const entriesToCopy = [
  "index.html",
  "game.html",
  "admin.html",
  "css",
  "js",
  "assets",
];

function ensureCleanDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyEntry(relativePath) {
  const sourcePath = path.join(projectRoot, relativePath);
  const targetPath = path.join(distRoot, relativePath);

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing build entry: ${relativePath}`);
  }

  const stat = fs.statSync(sourcePath);
  if (stat.isDirectory()) {
    copyDirectory(sourcePath, targetPath);
    return;
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.copyFileSync(sourcePath, targetPath);
}

function copyDirectory(sourceDir, targetDir) {
  fs.mkdirSync(targetDir, { recursive: true });
  fs.readdirSync(sourceDir, { withFileTypes: true }).forEach((entry) => {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, targetPath);
      return;
    }

    if (entry.isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

ensureCleanDir(distRoot);
entriesToCopy.forEach(copyEntry);

console.log(`Built static dist at ${path.relative(projectRoot, distRoot)}`);
