const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {
  try {
    const { url, username, password, system_id } = require('./config');

    const browser = await puppeteer.launch({ headless: false, devtools: true })
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(0);

    await page.goto(url)

    await page.type('input[name="USER"]', username)
    await page.type('input#CLIENT_PASSWORD', password)
    await page.type('input#DATABASE', system_id)

    await Promise.all([
      page.click('input#loginBtn'),
      page.waitForNavigation()
    ]);

    await page.click('#goToLbl', { delay: 10000 })
    await page.click('#bus__PE', { delay: 10000 })
    await page.click('#dpt__ES', { delay: 10000 })
    await page.click('#wrk__PayrollandBenefits', { delay: 10000 })
    await page.click('#actvty__ESQLVSTAT', { delay: 10000 })

    await page.waitForNavigation()

    // //getting access to the raw HTML
    // const pageData = await page.evaluate(() => {
    //   return {
    //     html: document.documentElement.innerHTML,
    //   };
    // });

    // await browser.close()
    alert(document.documentElement.innerHTML);
  } catch (error) {
    console.error(error)
  }
})();
