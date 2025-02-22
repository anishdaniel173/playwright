// const{test,expect}=require('@playwright/test')
// test('login fb',async({page})=>{
// await page.goto('https://www.facebook.com/');
// await page.fill("//input[@name='email]", "anish");
// await page.waitForTimeout(3000);
// })


//frame

// const{test,expext}=require('@playwright/test');
// test("easetrip", async({page})=>{
//     await page.goto("https://hikeup.com/in/");
    
//     await page.waitForTimeout(3000);
    
// })

const {test,expect}=require("@playwright/test");
test('bagswag',async({page})=>{
    await page.goto("https://swag.com/");

    let bag= await page.locator('//input[@id="searchField"]').fill("sport bag");
    await page.waitForTimeout(3000);

    await page.locator('//div[@class="product-card__name___HkHV5"]').click[3];
    await page.waitForTimeout(3000)

})