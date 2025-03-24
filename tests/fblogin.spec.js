// const{test,expect}= require('@playwright/test')
// test('asseration',async({page})=>{
//  await page.goto("https://www.facebook.com/");
//  let currenturl =await page.url();
//  console.log(currenturl);

//  await page.goto("https://in.bookmyshow.com/explore/movies-chennai");

//  let dan = await page.url();
//  let currentitle =await page.title();
// //  console.log(currentitle);
// })
 
 
// --------
// // if else login page
// const {test,expect}=require("@playwright/test");
// test('login fb',async({page})=>{


// browser = p.chromium.launch(headless=False)
// page = browser.new_page();

// page.goto("https://www.facebook.com/");


// if page.locator("input[name='anishdaniel']").is_visible();
//     print("Login form found, proceeding with login.")
    
//     // Perform login
//     page.fill("input[name='anishdaniel']", "your_username")
//     page.fill("input[name='daniel']", "your_password")
//     page.click("(//a[normalize-space()='Create new account'])[1]");

//     // Check for successful login
//     if page.locator("text=Logout").is_visible();
//         print("Login successful")
//     else
//         print("Login failed");

// else
//     print("Login form not found, checking if already logged in.");
    
//     if page.locator("text=Logout").is_visible();
//         print("Already logged in");
//     else
//         print("Unexpected page state");
// })
//''''''''''''

// const { chromium } = require('playwright');

// (async () => {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
    
//     await page.goto('https://www.facebook.com/');

//     // Check if the login form is visible
//     if (await page.locator('input[name="email"]').isVisible()) {
//         console.log("Login form found, proceeding with login.");

//         // Perform login
//         await page.fill('input[name="email"]', 'your_email@example.com');
//         await page.fill('input[name="pass"]', 'your_password');
//         await page.click('button[name="login"]');

//         // Wait for navigation and check if login is successful
//         await page.waitForTimeout(3000);
        
//         if (await page.locator('text=Log out').isVisible()) {
//             console.log("Login successful!");
//         } else {
//             console.log("Login failed. Please check credentials.");
//         }

//     } else {
//         console.log("Login form not found, checking if already logged in.");

//         if (await page.locator('text=Log out').isVisible()) {
//             console.log("Already logged in!");
//         } else {
//             console.log("Unexpected page state.");
//         }
//     }

//     await browser.close();
// })();


//fb login 
const{test,expect}=require('@playwright/test');
test ("login facebook",async({page})=>{
    await page.goto("https://www.facebook.com/");

   // second page of login
   
   await page.locator("//input[@id='email']").fill("anishdaniel");
   await page .locator("//input[@id='pass']").fill("danielanish");
   await page.click("(//button[normalize-space()='Log in'])[1]");

   await page.waitForTimeout(3000);
   await page.close();

})