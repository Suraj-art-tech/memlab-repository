module.exports = {
  url: () => 'http://localhost:5173/about',

  action: async (page) => {
    console.log('[ACTION] Waiting for About page to load...');
    await page.waitForSelector('h1');

    const headingText = await page.$eval('h1', el => el.textContent);
    console.log(`[ACTION] Found heading: ${headingText}`);
    if (!headingText.includes('About')) {
      throw new Error('[ACTION] Not on About page as expected');
    }

    console.log('[ACTION] Clicking button to navigate to Login...');
    await page.waitForSelector('button');
    await page.click('button');

    // Wait for Login page to load
    await page.waitForSelector('h1');
    const loginHeading = await page.$eval('h1', el => el.textContent);
    console.log(`[ACTION] After click, heading: ${loginHeading}`);
    if (!loginHeading.includes('Login')) {
      throw new Error('[ACTION] Login page did not load correctly');
    }
  },

  back: async (page) => {
    console.log('[BACK] Waiting for Login page to load...');
    await page.waitForSelector('h1');

    const loginHeading = await page.$eval('h1', el => el.textContent);
    console.log(`[BACK] Found heading: ${loginHeading}`);
    if (!loginHeading.includes('Login')) {
      throw new Error('[BACK] Not on Login page as expected');
    }

    console.log('[BACK] Clicking button to navigate back to About...');
    await page.waitForSelector('button');
    await page.click('button');

    // Wait for About page again
    await page.waitForSelector('h1');
    const aboutHeading = await page.$eval('h1', el => el.textContent);
    console.log(`[BACK] After click, heading: ${aboutHeading}`);
    if (!aboutHeading.includes('About')) {
      throw new Error('[BACK] About page did not load correctly');
    }
  }
};
