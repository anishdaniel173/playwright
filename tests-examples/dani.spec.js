const {test,expect}=require('@playwright/test');
test("user registraction",async({page})=>{
    
    await page.goto("https://registration.telangana.gov.in/");
    await page.waitForTimeout(3000);

    let usertype= await page.locator('//select[@id="user_type"]').click[2];


    await waitForTimeout(3000)


})
