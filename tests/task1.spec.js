// const{test,expect}=require('@playwright/test')
// test('login vision',async({page})=>{
//     await page.goto('https://ui.vision/demo/webtest/frames/');
//     await page.locator("//input[@type='text']").fill("anish");
// }) 

//multitab

// const{test,expect}=require('@playwright/test');
// test ('upload file',async({page})=>{
//     await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

//     await page.locator('//input[@type="file"]')

//     await page.waitForTimeout(3000);
// })


//facebook login first page

// const{test,expect}=require("@playwright/test");
// const { log } = require("console");
// test('login fb',async({page})=>{
    
//    await page.goto("https://m.facebook.com/");
//    let email= await page.locator("//input[@id='email']").fill("anishdaniel");
//    await page.waitForTimeout(3000);
//    let password= await page.locator("(//input[@id='pass'])[1]").fill("daniel");
//    await page.waitForTimeout(3000);

//    await page.click("//button[@id='u_0_5_3Q']");
//    await page.waitForTimeout(3000);
   
// })
//


const{test,expect}=require('@playwright/test');
test ('login myntra',async({page})=>{
    await page.goto("https://www.myntra.com/");
    await page.locator("//input[@placeholder='Search for products, brands and more']").fill("men shoe");
    await page.click ("//span[@class='myntraweb-sprite desktop-iconSearch sprites-search']");

    await page.waitForTimeout(2000)
})

