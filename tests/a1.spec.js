const{test,expect}=require('@playwright/test');
test('assertion',async({page}) =>{
      await page.goto("https://www.facebook.com/");

      let currenturl = await page.url();
      console.log(currenturl);
      
      
})