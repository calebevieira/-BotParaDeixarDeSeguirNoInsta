const { chromium } = require('playwright');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomDelay(min = 2000, max = 5000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 300
  });

  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 }
  });

  const page = await context.newPage();

  console.log('Abrindo Instagram...');
  await page.goto('https://www.instagram.com/', { waitUntil: 'domcontentloaded' });

  console.log('Faça login manualmente.');
  console.log('Depois que entrar, pressione ENTER no terminal.');

  process.stdin.resume();
  await new Promise(resolve => process.stdin.once('data', resolve));

  await page.goto('https://www.instagram.com/@DOINSTA/following/', { waitUntil: 'domcontentloaded' });
  await sleep(4000);

  let unfollowed = 0;
  const maxUnfollows = 483;

  while (unfollowed < maxUnfollows) {
    const buttons = page.locator('button').filter({ hasText: /Seguindo|Following/ });
    const count = await buttons.count();

    if (count === 0) {
      await page.mouse.wheel(0, 2000);
      await sleep(randomDelay());
      continue;
    }

    try {
      await buttons.nth(0).click();
      await sleep(randomDelay(1000, 2500));

      const confirm = page.locator('button').filter({ hasText: /Deixar de seguir|Unfollow/ }).last();
      await confirm.click();

      unfollowed++;
      console.log(`Unfollow: ${unfollowed}`);

      await sleep(randomDelay(4000, 9000));

      if (unfollowed % 10 === 0) {
        await sleep(randomDelay(15000, 30000));
      }

      await page.mouse.wheel(0, 1200);
    } catch (e) {
      await page.mouse.wheel(0, 1800);
      await sleep(randomDelay(3000, 6000));
    }
  }

  console.log('Finalizado');
}

main();
