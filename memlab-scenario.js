// Simple memlab scenario for testing memory leaks
module.exports = {
  url: () => 'http://localhost:5173/about',

  action: async (page) => {
    console.log('Starting memlab scenario...');
    
    // Wait for the page to load
    await page.waitForSelector('h1');
    console.log('Page loaded successfully');
    
    // Click the button to navigate
    await page.waitForSelector('button');
    await page.click('button');
    console.log('Clicked navigation button');
    
    // Wait for navigation to complete
    await page.waitForSelector('h1');
    console.log('Navigation completed');
  },

  back: async (page) => {
    console.log('Starting back navigation...');
    
    // Click back button
    await page.waitForSelector('button');
    await page.click('button');
    console.log('Clicked back button');
    
    // Wait for back navigation to complete
    await page.waitForSelector('h1');
    console.log('Back navigation completed');
  }
};
