const { chromium } = require("playwright-core");
const EXE = "C:/Program Files/Google/Chrome/Application/chrome.exe";

(async () => {
  const browser = await chromium.launch({ executablePath: EXE, headless: true });
  const page = await browser.newPage();
  const failed = [];
  const errors = [];
  page.on("requestfailed", (r) => failed.push(r.url() + " -> " + (r.failure()?.errorText || "fail")));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));

  await page.goto("http://localhost:4599/Website-Template/", { waitUntil: "networkidle" });

  const imgs = await page.evaluate(() =>
    Array.from(document.images).map((i) => ({
      src: i.getAttribute("src"),
      loaded: i.complete && i.naturalWidth > 0,
    }))
  );

  const pageTitle = await page.title();
  console.log(JSON.stringify({ pageTitle, imgs, failed, errors }, null, 2));
  await browser.close();
})();