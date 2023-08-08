import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://localhost:7147/Identity/Account/Login');
  await page.setViewport({width: 1080, height: 1024});

  console.log('Url ', page.url());

  await page.type('#Input_Email', 'nwork2@mail.ru');
  await page.type('#Input_Password', '!HsCQRnf).U,U/4');

  const [response] = await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.click('#login-submit'), // Clicking the link will indirectly cause a navigation
  ]);

  console.log('Redirected url ', page.url());

  await browser.close();
})();
