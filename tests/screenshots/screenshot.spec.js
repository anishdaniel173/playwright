const{test,expext}=require('@playwright/test');
test('screenshot',async({page})=>{
    await page.goto('https://www.myntra.com/');

    // await page.waitForTimeout(3000);

    // await page.screenshot({path:'screenshot/'+Date.now()+'myntral.jpg',fullPage:true});

    // await page.waitForTimeout(5000);

    await page.locator("//a[@class='myntraweb-sprite desktop-logo sprites-headerLogo ']");

    await page.screenshot({path:'screenshot/'+Date.now()+'myntrallogo.jpg'});


    await page.waitForTimeout(5000);
})