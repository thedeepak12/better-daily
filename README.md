# Better Daily

Better Daily is a browser extension that provides a curated daily coding problem from LeetCode to help you build a consistent practice habit. Each day features a single problem chosen to be balanced and relevant so you can improve your coding skills steadily.

LeetCode's daily challenge often varies significantly in difficulty. Some days present problems that are very simple, while other days introduce problems that are unusually complex. This inconsistency can make it difficult to maintain a steady habit of solving one meaningful problem every day.

Better Daily addresses this by selecting a single, carefully curated problem each day that emphasizes widely useful problem-solving patterns and core algorithmic concepts. The extension replaces the default daily challenge with a cleaner, focused alternative, allowing you to spend your daily practice time on problems that are balanced, relevant, and worth solving.

## Getting Started

### Build Environment

- **Node.js**: v14 or higher
- **npm**: v6 or higher

### Build Process

1. **Install dependencies** (none required, but npm is used for build scripts):
   ```bash
   npm install
   ```

2. **Build for Firefox**:
   ```bash
   npm run build:firefox
   ```
   Output: `dist/firefox/`

3. **Build for Chromium** (Chrome, Edge, etc.):
   ```bash
   npm run build:chromium
   ```
   Output: `dist/chromium/`

### Testing the Extension

**Firefox:**
1. Build: `npm run build:firefox`
2. Open `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on..."
4. Select `dist/firefox/manifest.json`

**Chrome/Edge:**
1. Build: `npm run build:chromium`
2. Open `chrome://extensions/` or `edge://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select `dist/chromium/` folder
