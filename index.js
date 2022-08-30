const puppeteer = require('puppeteer');

async function navigate() {
    await page.type('input#appFltrFld', 'Leave Status', {delay: 1000})
}

async function login() {
  try {
    const { url, username, password, system_id } = require('./config');

    console.log(url, username, password, system_id);
    const browser = await puppeteer.launch({headless: false, devtools: true})
    const page = await browser.newPage()

    await page.goto(url)

    await page.type('input[name="USER"]', username)
    await page.type('input#CLIENT_PASSWORD', password)
    await page.type('input#DATABASE', system_id)

    await Promise.all([
        page.click('input#loginBtn'),
        page.waitForNavigation(),
    ]);

    navigate()

  } catch (error) {
      console.error(error)
  }
}

login()