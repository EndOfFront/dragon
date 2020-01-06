import { app, ipcMain, dialog, shell } from "electron";
import createWindow from "./createWindow";
import updateHandle from "./update/update";
import exportPdf from './exportPdf'
const log = require("electron-log")

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== "development") {
  global.__static = require("path")
    .join(__dirname, "/static")
    .replace(/\\/g, "\\\\");
}
let fileSavePath = "";
let urlPrefix = "http://localhost:8888";
const isDev = process.env.NODE_ENV === "development";

const mainURL = isDev
  ? `${urlPrefix}/#/main/home`
  : `file://${__dirname}/index.html#/main/home`;
const splashURL = isDev
  ? `${urlPrefix}/#/splash`
  : `file://${__dirname}/index.html#/splash`;
let mainWindow, splashWindow;
let width, height;
let createMainWindow = () => {
  
  mainWindow = createWindow({
    width,
    height
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
    app.quit();
  });
  mainWindow.webContents.session.on(
    "will-download",
    (event, item, webContents) => {
      //设置文件存放位置
      fileSavePath = fileSavePath || app.getPath("userData");
      item.setSavePath(`${fileSavePath}/${item.getFilename()}`);
      item.on("updated", (event, state) => {
        if (state === "progressing") {
          if (item.isPaused()) {
            console.log("Download is paused");
          } else {
            console.log(`Received bytes: ${item.getReceivedBytes()}`);
          }
        }
      });
      item.once("done", (event, state) => {
        if (state === "completed") {
          // dialog.showMessageBox({
          //   type:"info",
          //   message:"导出成功！"
          // },()=>{
          //   shell.showItemInFolder(`${fileSavePath}/${item.getFilename()}`)
          // });
          shell.showItemInFolder(`${fileSavePath}/${item.getFilename()}`);
          console.log("Download successfully");
        } else {
          dialog.showMessageBox({
            type: "warning",
            message: "导出失败！"
          });
        }
      });
    }
  );
};

let createSplashWindow = () => {
  splashWindow = createWindow({
    width: 700,
    height: 400,
    frame: false
  });
  splashWindow.on("closed", () => {
    splashWindow = null;
  });
  splashWindow.loadURL(splashURL);
  splashWindow.show();
};

app.on("ready", () => {
  const { screen } = require("electron");
  width = screen.getPrimaryDisplay().workAreaSize.width;
  height = screen.getPrimaryDisplay().workAreaSize.height;
  createSplashWindow();
  createMainWindow();
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
ipcMain.on("open-directory-dialog", (event, properties) => {
  dialog.showOpenDialog(
    {
      title: "导出文件",
      buttonLabel: "保存",
      properties
    },
    function(files) {
      if (files) {
        // 如果有选中
        // 发送选择的对象给子进程
        fileSavePath = files[0];
        event.sender.send("selectedItem", files[0]);
      }
    }
  );
});

ipcMain.on("loaded", async (event, arg) => {
  // eslint-disable-next-line no-unused-expressions
  splashWindow ? splashWindow.close() : null;
  mainWindow.loadURL(mainURL);
  mainWindow.show();
  updateHandle([mainWindow]);
});
