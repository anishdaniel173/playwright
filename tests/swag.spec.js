const{test,expect}=require('@playwright/test');
test('swaglab',async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("(//input[@id='password'])[1]").fill("secret_sauce");
    await page.click("(//input[@id='login-button'])[1]");

    await page.waitForTimeout(2000);

    //second page of swag lab

    let product=await page.click("(//div[normalize-space()='Sauce Labs Bolt T-Shirt'])[1]");
    await page.click("(//button[normalize-space()='ADD TO CART'])[1]");
    await page.waitForTimeout(2000);
    await page.click("(//*[name()='path'][@fill='currentColor'])[1]");
    await page.waitForTimeout(2000);

    //third page your cart

    let yourcart=await page.click("//a[normalize-space()='CHECKOUT']");
    await page.waitForTimeout(3000)
    await page.close




})