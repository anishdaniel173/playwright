const{test,expect}= require('@playwright/test')
test('asseration',async({page})=>{
 await page.goto("https://www.facebook.com/");
 let currenturl =await page.url();
 console.log(currenturl);

 await page.goto("https://in.bookmyshow.com/explore/movies-chennai");

 let dan = await page.url();
 let currentitle =await page.title();
 console.log(currentitle);
 
 
 
})