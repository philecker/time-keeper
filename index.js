const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config();

async function navigate() {
  console.log('Something')
  await page.click('div#bus__PE')
}

async function login() {
  try {
    const URL = process.env.URL;
    const USERNAME = process.env.USER_ID;
    const PASSWORD = process.env.PASSWORD;
    const SYSTEM = process.env.SYSTEM_ID;

    console.log(URL, USERNAME, PASSWORD);
    const browser = await puppeteer.launch({headless: false, devtools: true})
    const page = await browser.newPage()

    await page.goto(URL)

    await page.type('input[name="USER"]', USERNAME)
    await page.type('input#CLIENT_PASSWORD', PASSWORD)
    await page.type('input#DATABASE', SYSTEM)

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