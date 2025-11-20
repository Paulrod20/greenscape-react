import test, { before, describe } from 'node:test';
import { Browser, Builder, By, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { isExportDeclaration } from 'typescript';

describe('GreenScape Navigation Tests', () => {
    let driver; WebDriver;
    const baseURL = 'http://localhost:5173';

    beforeAll(async () => {
        const options = new chrome.Options();
        options.addArguments('--headless');
        options.addArguments('--disable-gpu');
        options.addArguments('--no-sandbox');

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Should navigate to Homepage', async () =>{
        await driver.get(baseURL);
        const title = await driver.findElement(By.css(h1)).getText();
        expect(title).toBe('Transform Your Outdoor Space');
    });

    test('Should navigate to Services page', async () => {
        // Step 1: Go to the home page
        await driver.get(baseURL);
        // Step 2: Find the "Services" link and click it
        await driver.findElement(By.linkText('Services')).click();
        // Step 3: Wait for URL to change to /services (max 5 seconds)
        await driver.wait(until.urlIs(`${baseURL}/services`), 5000);
        // Step 4: Find the h1 element and get its text
        const heading = await driver.findElement(By.css('h1')).getText();
        // Step 5: Check if the text equals "Our Services"
        expect(heading).toBe('Our Services');
    });

    test('Should navigate to Gallery page', async () => {
        await driver.get(baseURL);
        await driver.findElement(By.linkText('Gallery')).click();
        await driver.wait(until.urlIs(`${baseURL}/gallery`), 5000);
        const heading = await driver.findElement(By.css('h1')).getText();
        expect(heading).toBe('Our Gallery');
    });

    test('Should navigate to Contact Page', async () =>{
        await driver.get(baseURL);
        await driver.findElement(By.linkText('Contact')).click();
        await driver.wait(until.urlIs(`${baseURL}/contact`), 5000);
        const heading = await driver.findElement(By.css('h1')).getText();
        expect(heading).toBe('Contact Us');
    });
})