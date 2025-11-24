const fs = require('fs');
const path = require('path');
const pixelmatch = require('pixelmatch');
const { PNG } = require('pngjs');
const playwright = require('playwright');

(async () => {
  const referencePath = path.resolve(__dirname, 'reference.png');
  const outDir = path.resolve(__dirname);
  const currentPath = path.join(outDir, 'current.png');
  const diffPath = path.join(outDir, 'diff.png');

  if (!fs.existsSync(referencePath)) {
    console.error('Reference image not found. Drop your target screenshot as:', referencePath);
    process.exit(2);
  }

  const url = process.env.VISUAL_URL || 'http://localhost:3000';
  console.log('Opening', url);

  const browser = await playwright.chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 3000 } });
  const page = await context.newPage();

  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500); // small wait for animations

  // full page screenshot
  await page.screenshot({ path: currentPath, fullPage: true });
  await browser.close();

  // load images
  const img1 = PNG.sync.read(fs.readFileSync(referencePath));
  const img2 = PNG.sync.read(fs.readFileSync(currentPath));

  const width = Math.max(img1.width, img2.width);
  const height = Math.max(img1.height, img2.height);

  const img1p = new PNG({ width, height });
  const img2p = new PNG({ width, height });

  // copy into padded canvases
  PNG.bitblt(img1, img1p, 0, 0, img1.width, img1.height, 0, 0);
  PNG.bitblt(img2, img2p, 0, 0, img2.width, img2.height, 0, 0);

  const diff = new PNG({ width, height });
  const diffPixels = pixelmatch(img1p.data, img2p.data, diff.data, width, height, { threshold: 0.12 });

  fs.writeFileSync(diffPath, PNG.sync.write(diff));

  const total = width * height;
  const percent = ((diffPixels / total) * 100).toFixed(3);

  console.log(`Diff saved to ${diffPath}`);
  console.log(`Different pixels: ${diffPixels} / ${total} (${percent}%)`);

  // exit code non-zero if more than 0.1% diff
  const thresholdPercent = 0.1;
  if (parseFloat(percent) > thresholdPercent) {
    console.warn('Difference exceeds threshold:', thresholdPercent, '%');
    process.exit(1);
  }

  console.log('Visual diff within threshold.');
  process.exit(0);
})();
