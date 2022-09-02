const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {
  try {
    const { url, username, password, system_id } = require('./config');

    const browser = await puppeteer.launch({ headless: false, devtools: true })
    const page = await browser.newPage()

    await page.goto(url)

    await page.type('input[name="USER"]', username)
    await page.type('input#CLIENT_PASSWORD', password)
    await page.type('input#DATABASE', system_id)

    await Promise.all([
      page.click('input#loginBtn'),
      page.waitForNavigation(),
    ]);

    // //getting access to the raw HTML
    // const pageData = await page.evaluate(() => {
    //   // return {
    //   //   html: document.documentElement.innerHTML,
    //   // };
    //   page.type('input#appFltrFld', "Something")
    // });

    // // await browser.close()
    // console.log(pageData.html);
  } catch (error) {
    console.error(error)
  }
})();
