// pages/api/generate-pdf.js
import puppeteer from "puppeteer";
var path = require("path");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { html } = req.body;

    try {
      const browser = await puppeteer.launch({
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--window-size=1920,1080",
        ],
        headless: true,
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
