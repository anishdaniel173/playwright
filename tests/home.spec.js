const{test,expect}=require('@playwright/test');
test('mouse action',async ({page})=>{
    await page.goto('https://www.myntra.com/');

    let home = await page.locator("//input[@placeholder='search for product']". fill("bag"));
    
    await page.waitForTimeout(3000);

})