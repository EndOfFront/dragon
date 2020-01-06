import React, { Component } from "react";
import "./splash.less";
import { version } from "../../../package.json";
const { ipcRenderer = { send: (msg: string, result: boolean) => {} } } =
  window.electron || {};
export default class Splash extends Component {
  componentDidMount() {
    this.init();
  }
  timeout(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  closeWindow() {
    ipcRenderer.send("loaded", true);
  }
  async init() {
    const txt = document.querySelector(".txt") as Element;
    txt.innerHTML = "正在加载模型数据";
    await this.timeout(1000);
    txt.innerHTML = "正在加载品类数据";
    await this.timeout(1000);
    txt.innerHTML = "正在启动绘制引擎";
    await this.timeout(1000);
    this.closeWindow();
  }
  render() {
    return (
      <div className={"splash"}>
        <div className={"spinner"}>
          <div className={"rect1"}></div>&nbsp;
          <div className={"rect2"}></div>&nbsp;
          <div className={"rect3"}></div>&nbsp;
          <div className={"rect4"}></div>&nbsp;
          <div className={"rect5"}></div>&nbsp;
        </div>
        <div className={"txt"}>正在加载XX数据</div>
        <div className={"title"}>XXXXXXX系统</div>
        <ul>
          <li>简单易用</li>
          <li>一键下发XXX</li>
          <li>低成本、高性能、高效率</li>
        </ul>
        <div className={"version"}>V{version}</div>
        <div className={"autuor"}>
          X.X, X.X, XXX, XXXXXX, XXXXX, XXXX, XXXX, XXXXXXX
        </div>
        <div className={"copy-right"}>
          © 2004 - 2019 XX Inc all right reserved
        </div>
      </div>
    );
  }
}
