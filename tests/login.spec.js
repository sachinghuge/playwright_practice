const {test,expect}=require("@playwright/test")

test("login test",async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://practice.qabrains.com/ecommerce/login");
    await page.locator('[id="email"]').fill("test@qabrains.com");
    await page.locator('[id="password"]').fill("Password123");
    await page.locator('[type="submit"]').click();
    await expect(page.locator("text=Products")).toHaveText("Products");


})