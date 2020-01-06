const puppeteer = require('puppeteer');
const log = require("electron-log")
const path = require("path")
const isDev = process.env.NODE_ENV === "development";
// import puppeteer from 'puppeteer'
const exportPdf = async (downloadMessage) => {
  let ChromiumPath = path.join(__dirname, "..", "..","app.asar.unpacked","node_modules","puppeteer",".local-chromium", "win64-706915", "chrome-win","chrome.exe");
  let browser = null;
  try {
    browser = isDev?await puppeteer.launch({
      defaultViewport: {
        width: 1920,
        height: 1200
      }
    }) : await puppeteer.launch({
      defaultViewport: {
        width: 1920,
        height: 1200
      },
      executablePath: ChromiumPath
    })
    const page = await browser.newPage();
    await page.setContent(downloadMessage.pageContent);
    for (let item of downloadMessage.shelfLocationList) {
      await shot(page, item, downloadMessage.path);
    }
    return true;
  } catch (e) {
    log.error("open puppeteer error",e);
    return true;
  } finally {
    log.info("browser closed");
    await browser.close();
  }
};

const shot = async (page, shelfDownloadMessage, path) => {
  let form = await page.$(`[id="${shelfDownloadMessage.id}"]`);
  await form.screenshot({
    path: `${path}/${shelfDownloadMessage.fileName}`,
    // clip: {
    //   x:0,
    //   y:0,
    //   width:1920,
    //   height:1200
    // }
  });
}
export default exportPdf;
