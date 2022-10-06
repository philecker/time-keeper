const puppeteer = require('puppeteer');

(async () => {
  try {
    // Define .env variables
    const { username, password, url, system_id } = require('./config');

    const minimal_args = [
      '--autoplay-policy=user-gesture-required',
      '--disable-background-networking',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-breakpad',
      '--disable-client-side-phishing-detection',
      '--disable-component-update',
      '--disable-default-apps',
      '--disable-dev-shm-usage',
      '--disable-domain-reliability',
      '--disable-extensions',
      '--disable-features=AudioServiceOutOfProcess',
      '--disable-hang-monitor',
      '--disable-ipc-flooding-protection',
      '--disable-notifications',
      '--disable-offer-store-unmasked-wallet-cards',
      '--disable-popup-blocking',
      '--disable-print-preview',
      '--disable-prompt-on-repost',
      '--disable-renderer-backgrounding',
      '--disable-setuid-sandbox',
      '--disable-speech-api',
      '--disable-sync',
      '--hide-scrollbars',
      '--ignore-gpu-blacklist',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-default-browser-check',
      '--no-first-run',
      '--no-pings',
      '--no-sandbox',
      '--no-zygote',
      '--password-store=basic',
      '--use-gl=swiftshader',
      '--use-mock-keychain',
    ];

    // Open new browswer and set timeout
    const browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      args: minimal_args
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
    await page.click('#goToLbl', { delay: 5000 })
    await page.click('#bus__PE', { delay: 2500 })
    await page.click('#dpt__ES', { delay: 2500 })
    await page.click('#wrk__PayrollandBenefits', { delay: 2500 })
    await page.click('#actvty__ESQLVSTAT', { delay: 2500 })

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
