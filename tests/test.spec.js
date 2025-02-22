const{test,expect}=require('@playwright/test');
test('facebook login',async({page})=>{
    await page.goto("https://www.facebook.com/login/");

let name = await page.locator("//input[@type='text']").fill ("anishdaniel");

let pass = await page.locator("//input[@type='password']"). fill ("123456");

await page.waitForTimeout(10000);

    await page.goto("https://www.instagram.com/");


await page.waitForTimeout(10000);


await page.goto("https://in.bookmyshow.com/explore/movies-chennai");



})









