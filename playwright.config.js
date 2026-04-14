// @ts-check
import { defineConfig, devices } from '@playwright/test';


//  * @see https://playwright.dev/docs/test-configuration
const config=defineConfig({
  testDir:"./tests",
  timeout:10*1000,
  expect:{
    timeout:10*1000
  },
  use:{
    browserName:"chromium",
    screenshot:"only-on-failure",
    video:"retain-on-failure",
    headless:false
  }
});

module.exports=config