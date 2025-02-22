const{test,expect}=require('@playwright/test');

test('facebook',async()=>{

    let browser = await chromium.launch();
    let contextA = await browser.newcontect();

     await page.waitForTimeout(3000);

    let tabA1= await contextA.newpage();
    await tabA1.goto('https://www.instagram.com/');

    await page.waitForTimeout(5000);
    
    let tab2= await contextA.newpage();
    await tab2.goto('https://www.facebook.com/');

    let contextB = await browser.newcontex();
    let tabB1 = await contextB.newpage();
    await tabB1.goto('https://in.bookmyshow.com/explore/home/chennai');

})