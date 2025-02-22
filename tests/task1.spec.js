// const{test,expect}=require('@playwright/test')
// test('login vision',async({page})=>{
//     await page.goto('https://ui.vision/demo/webtest/frames/');
//     await page.locator("//input[@type='text']").fill("anish");
// }) 

//multitab

const{test,expect}=require('@playwright/test');
test ('upload file',async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.locator('//input[@type="file"]')

    await page.waitForTimeout(3000);
})