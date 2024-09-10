import puppeteer from "puppeteer";
import * as path from "node:path";

export async function test_pdf(htmlPath, outputPath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Get the full path to the HTML file
    const fullHtmlPath = path.resolve(htmlPath);

    // Load the local HTML file
    await page.goto(`file://${fullHtmlPath}`, { waitUntil: 'networkidle0' });

    // Optional: Adjust page size and margins
    await page.pdf({
        path: outputPath,
        format: 'A4',
        landscape: true,
        printBackground: true,
        margin: {
            top: '0mm',
            right: '0mm',
            bottom: '0mm',
            left: '0mm'
        }
    });

    await browser.close();
}