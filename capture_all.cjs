const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const artifactDir = 'C:/Users/DELL/.gemini/antigravity-ide/brain/989e4011-15df-446a-a99f-2db8ee9b692f';
  
  const viewports = [
    { name: 'desktop_1894', width: 1894, height: 1000 },
    { name: 'desktop_1440', width: 1440, height: 900 },
    { name: 'tablet_1024', width: 1024, height: 768 },
    { name: 'tablet_768', width: 768, height: 1024 },
    { name: 'mobile_390', width: 390, height: 844 }
  ];

  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const outPath = path.join(artifactDir, `fullpage_${vp.name}.png`);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`Captured ${vp.name} to ${outPath}`);
    await context.close();
  }

  await browser.close();
})();
