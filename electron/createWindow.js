import { BrowserWindow } from "electron";
let createWin = ({
  frame = true,
  height,
  width,
  show = false,
  useContentSize = true,
  webSecurity = false,
  nodeIntegration = true,
  nodeIntegrationInWorker = true
}) => {
  let window = new BrowserWindow({
    height,
    show,
    frame,
    useContentSize,
    webPreferences: {
      webSecurity,
      nodeIntegration,
      nodeIntegrationInWorker
    },
    width: width
  });
  return window;
};
export default createWin;
