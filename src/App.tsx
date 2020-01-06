import React, { Component } from "react";

import { hot } from "react-hot-loader/root";
import Splash from "./page/splash/splash";
import Login from "./page/login/login";
import Main from "./page/main/main";
import { Switch, Route } from "react-router";
import { Modal,Progress,message } from "antd";
import "./App.css";
import { round } from "./lib/util";
import  'offline-js'
import 'offline-js/themes/offline-theme-default.css'
import 'offline-js/themes/offline-language-chinese-simplified.css'
import {setDpi} from './lib/util'
const {
  ipcRenderer = {
    on:(msg: string, result: {key:string;msg:string}) => {},
    send: (msg: string) => {},
  },
  remote = {
    app: {
      exit:() => {},
    }
  }
} = window.electron || {};

class App extends Component {
  state = {
    updateConfirmModal: false,
    updateModal: false,
    downloadPercent:0
  };
  componentWillMount(){
    setDpi(this.getDPI());
  }
  componentDidMount() {
    this.initUpdate();
  }

  getDPI = (): number[] => {
    let arrDPI: number[] = [];
    let tmpNode = document.createElement("DIV");
    tmpNode.style.cssText =
      "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
    document.body.appendChild(tmpNode);
    arrDPI[0] = tmpNode.offsetWidth;
    arrDPI[1] = tmpNode.offsetHeight;
    tmpNode.parentNode.removeChild(tmpNode);
    return arrDPI;
  }

  initUpdate = () => {
    ipcRenderer.on("message", (event, { key, msg }) => {
      if (key === "error") {
        // this.updateModal = false;
        this.setState({
          updateModal : false
        })
        // this.$Message.warning("更新失败,请稍后重新打开软件");
        message.warning('更新失败,请稍后再试');
      }
      if (key === "updateAva") {
        this.setState({
          updateModal : true
        })
      }
      if (key === "updateNotAva") {
        this.setState({
          updateModal : false
        })
      }
    });
    ipcRenderer.on("downloadProgress", (event, progressObj) => {
      let downloadPercent = progressObj.percent || 0;
      this.setState({
        downloadPercent:round(downloadPercent,1)
      });
    });
    ipcRenderer.on("isUpdateNow", () => {
      this.setState({
        updateConfirmModal : true
      })
    });
  };
  startUpdate = () => {
    ipcRenderer.send("isUpdateNow");
  };
  closeWin = () => {
    // remote.app.exit()
    this.setState({
      updateModal : false,
      updateConfirmModal : false
    })
  };
  render() {
    let { updateConfirmModal, updateModal,downloadPercent } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route path="/splash" component={Splash} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
        </Switch>
        <Modal
          title="发现新版本啦"
          keyboard={false}
          closable={false}
          visible={updateConfirmModal}
          onOk={this.startUpdate}
          onCancel={this.closeWin}
          maskClosable={false}
        >
          请升级新版本，升级前请确认图纸已保存!
        </Modal>
        <Modal
          closable={false}
          visible={updateModal}
          maskClosable={false}
          footer={null}
          keyboard={false}
          title="正在更新"
        >
          <Progress percent={downloadPercent} status="active" />
        </Modal>
      </div>
    );
  }
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
