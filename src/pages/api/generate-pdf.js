// pages/api/generate-pdf.js
import puppeteer from "puppeteer";
const chromium = require("@sparticuz/chromium");

chromium.setHeadlessMode = true;

chromium.setGraphicsMode = false;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { html } = req.body;

    try {
      const path = await chromium.executablePath();
      console.log("await chromium.executablePath()", path);

      const browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        //executablePath: await chromium.executablePath(),
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
      });
      const page = await browser.newPage();

      await page.setContent(html, { waitUntil: "networkidle2" });

      await page.addStyleTag({
        path: "src/styles/preview.css",
      });
      await page.addStyleTag({
        path: "src/styles/globals.css",
      });
      await page.addStyleTag({
        path: "src/styles/builder.css",
      });

      const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
      });

      await browser.close();

      res.setHeader("Content-Type", "application/pdf");
      res.send(pdf);
    } catch (error) {
      console.log("error while generating PDF", error);
      res.status(500).json({ error: "Failed to generate PDF" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
