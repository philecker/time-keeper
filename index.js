const puppeteer = require('puppeteer');

(async () => {
  try {
    // Define .env variables
    const { url, username, password, system_id } = require('./config');

    // Open new browswer and set timeout
    const browser = await puppeteer.launch({
      headless: true,
      devtools: false
    })

    const page = await browser.newPage()
    page.setDefaultNavigationTimeout(0);

    await page.goto(url)

    await page.type('input[name="USER"]', username)
    await page.type('input#CLIENT_PASSWORD', password)
    await page.type('input#DATABASE', system_id)

    await Promise.all([
      page.click('input#loginBtn'),
      page.waitForNavigation()
    ]);

    // await navigating to Leave Status page
    await page.click('#goToLbl', { delay: 10000 })
    await page.click('#bus__PE', { delay: 5000 })
    await page.click('#dpt__ES', { delay: 5000 })
    await page.click('#wrk__PayrollandBenefits', { delay: 5000 })
    await page.click('#actvty__ESQLVSTAT', { delay: 5000 })

    // await Leave Status input
    await page.waitForSelector('#CURRENT_BAL-_0_E')

    // Access to the raw HTML for input
    const leaveStatus = await page.evaluate(() => {
      return {
        html: document.getElementById('CURRENT_BAL-_0_E').value
      };
    });

    console.log(leaveStatus.html)
  } catch (error) {
    console.error(error)
  }
})();
