
import test from '@playwright/test'

test("Locators Test", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("//input[@id='username']").fill("demosalesmanager")
    await page.locator("//input[@id='password']").fill("crmsfa")
    await page.locator("//input[@class='decorativeSubmit']").click()
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()

    await page.locator("//a[contains(text(),'Leads')][1]").click()
    await page.locator("//a[contains(text(),'Create Lead')]").click()

    await page.locator("//input[@id='createLeadForm_companyName']").fill("Company1")

    await page.locator("//input[@id='createLeadForm_firstName']").fill("Test First")

    await page.locator("//input[@id='createLeadForm_lastName']").fill("Test Last")

    //  await page.locator("//a[contains(text(),'Salutation')]").fill("Mrs")
    await page.locator("//input[@id='createLeadForm_personalTitle']").fill("Tester")

    await page.locator("//input[@id='createLeadForm_annualRevenue']").fill("100Cr")

    await page.locator("//input[@id='createLeadForm_departmentName']").fill("Software")

    await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill("12345")
    await page.locator("//input[@class='smallSubmit']").click()

    await page.waitForTimeout(2000)

})