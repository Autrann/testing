import { createRequire } from 'node:module';
import { mkdir } from 'node:fs/promises';

const runtimeRequire = createRequire(
  'C:/Users/luisa/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.61.0/node_modules/playwright/index.js'
);
const require = createRequire(
  'C:/Users/luisa/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/pngjs@7.0.0/node_modules/pngjs/package.json'
);
const { chromium } = runtimeRequire('playwright');
const { PNG } = require('pngjs');

const outputDir = new URL('../qa-screenshots/', import.meta.url);
await mkdir(outputDir, { recursive: true });

async function verifyViewport(page, viewport, name) {
  await page.setViewportSize(viewport);
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
  await page.waitForSelector('canvas');
  await page.waitForTimeout(900);

  const screenshotPath = new URL(`${name}.png`, outputDir);
  const canvasPath = new URL(`${name}-canvas.png`, outputDir);

  await page.screenshot({ path: screenshotPath, fullPage: true });
  const canvas = page.locator('canvas').first();
  await canvas.screenshot({ path: canvasPath });

  const buffer = await canvas.screenshot();
  const png = PNG.sync.read(buffer);
  let nonTransparent = 0;
  let colorVariance = 0;

  for (let index = 0; index < png.data.length; index += 4) {
    const alpha = png.data[index + 3];
    if (alpha > 10) {
      nonTransparent += 1;
      colorVariance += Math.abs(png.data[index] - png.data[index + 1]);
      colorVariance += Math.abs(png.data[index + 1] - png.data[index + 2]);
    }
  }

  if (nonTransparent < 500 || colorVariance < 2500) {
    throw new Error(`${name} canvas appears blank`);
  }

  const overlapCount = await page.locator('.projectCard, .timelineItem, .contactBand').count();
  if (overlapCount < 4) {
    throw new Error(`${name} content sections did not render as expected`);
  }

  return { name, nonTransparent, colorVariance, screenshot: screenshotPath.pathname };
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const results = [];
results.push(await verifyViewport(page, { width: 1440, height: 1000 }, 'desktop'));
results.push(await verifyViewport(page, { width: 390, height: 920 }, 'mobile'));

await browser.close();
console.log(JSON.stringify(results, null, 2));
