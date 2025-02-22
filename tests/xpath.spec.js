const{test,expect}=require('@playwright/test');
test('xpath',async({page})=>{
    await page.goto("https://www.facebook.com/");
    await page.locator("//input[@type='text']").fill('anish');
    


})