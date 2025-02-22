// const {test,expect}=require('@playwright/test');
// test ("facebook login",async({page})=>{
//     await page.goto("https://www.facebook.com/");
//     await page.waitForTimeout(5000);
// })

const{test,expext}=require('@playwright/test');
test("easetrip", async({page})=>{
    await page.goto("https://tripease.in/");
    await page.locator("//div[@class='vc-hoverbox-block vc-hoverbox-front']").click[1];
    await page.waitForTimeout(3000);
    
})