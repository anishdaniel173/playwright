// const{test,expect}=require('@playwright/test');
// test('xpath',async({page})=>{
//     await page.goto("https://www.facebook.com/");
//     await page.locator("//input[@type='text']").fill('anish');
    


// })


// const{test,expect}=require('@playwright/test');
// test('login bag swag',async({page})=>{
//     await page.goto('https://swag.com/');

//     // search name
//     let search= await page.locator('//input[@id="searchField"]'). fill("sport bag")
     
//     await page.click('//div[text()="Flex Sport Duffel Bag"]');
//     await page.waitForTimeout(2000);
//     await page.click('//span[text()="More images"]');
//     await page.click('//div[@class="arrow__icon___Rwfzo arrow__right___XGyIS"]');
//     await page.waitForTimeout(2000);
    

//     await page.waitForTimeout(2000);

//     await page.close();


// })


//swag lab
// login page

const{test,expect}=require('@playwright/test');
test('login swag lab',async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(2000);
    await page.locator('//input[@type="text"]').fill("standard_user");
    await page.locator('//input[@type="password"]').fill('secret_sauce');
    await page.waitForTimeout(2000)
    await page.click('//input[@type="submit"]');
    await page.waitForTimeout(2000)


   // next page swag lab
   await page.click('//div[text()="Sauce Labs Bolt T-Shirt"]'); 
   await page.waitForTimeout(2000)
   await page.click('//button[@class="btn_primary btn_inventory"]');



    
}) 