const fs = require('fs');
const path = require('path');

const target = process.argv[2] || 'firefox';

if (!['firefox', 'chromium'].includes(target)) {
  console.error('Usage: node build.js [firefox|chromium]');
  process.exit(1);
}

console.log(`Building for ${target}...`);

const srcDir = path.join(__dirname, '..', 'src');
const platformDir = path.join(__dirname, '..', 'platform', target);
const distDir = path.join(__dirname, '..', 'dist', target);

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}

copyDir(srcDir, distDir);

const manifestSrc = path.join(platformDir, 'manifest.json');
const manifestDest = path.join(distDir, 'manifest.json');
fs.copyFileSync(manifestSrc, manifestDest);

console.log(`Build complete: dist/${target}/`);

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.isFile() && entry.name !== 'README.md') {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
