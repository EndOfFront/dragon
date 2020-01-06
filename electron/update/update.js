import { autoUpdater } from "electron-updater";
import { build,version } from "../../package.json";
import { ipcMain } from "electron";

const message = {
  error: "检查更新出错",
  checking: "正在检查更新……",
  updateAva: "检测到新版本，正在下载……",
  updateNotAva: "现在使用的就是最新版本，不用更新"
};
const updateHandle = wins => {
  // 通过main进程发送事件给renderer进程，提示更新信息
  const sendUpdateMessage = key => {
    for (let w of wins) {
      w.webContents.send("message", { key, message });
    }
  };
  autoUpdater.channel = version.split("-")[1]
  autoUpdater.setFeedURL(build.publish[0].url);
  autoUpdater.on("error", (event, error) => {
    console.log(event, error);
    sendUpdateMessage("error");
  });
  autoUpdater.on("checking-for-update", () => {
    sendUpdateMessage("checking");
  });
  autoUpdater.on("update-available", info => {
    sendUpdateMessage("updateAva");
  });
  autoUpdater.on("update-not-available", info => {
    sendUpdateMessage("updateNotAva");
  });

  // 更新下载进度事件
  autoUpdater.on("download-progress", progressObj => {
    for (let w of wins) {
      w.webContents.send("downloadProgress", progressObj);
    }
  });
  autoUpdater.on(
    "update-downloaded",
    (
      event,
      releaseNotes,
      releaseName,
      releaseDate,
      updateUrl,
      quitAndUpdate
    ) => {
      console.log("开始更新");
      ipcMain.on("isUpdateNow", (e, arg) => {
        //   console.log("开始更新");
        //   //some code here to handle event
        autoUpdater.quitAndInstall();
      });
      for (let w of wins) {
        w.webContents.send("isUpdateNow");
      }
    }
  );
  for (let w of wins) {
    w.webContents.send("isUpdateNow");
  }
  ipcMain.on("checkForUpdate", () => {
    //执行自动更新检查
    autoUpdater.checkForUpdates();
  });
  autoUpdater.autoInstallOnAppQuit=false;
  autoUpdater.checkForUpdates();
  setTimeout(()=>{
    autoUpdater.checkForUpdates();
  },1000*600);
};

export default updateHandle;
