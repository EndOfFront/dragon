import React, { Component } from "react";
import MyIcon from "../icon/icon";
import { Tooltip } from "antd";
export default class FullScreen extends Component<any> {
  state = {
    fullScreen: false
  };
  handleFullScreen = async () => {
    let { fullScreen } = this.state;
    if (!fullScreen) {
      await this.setState({
        fullScreen: true
      });
      let main: any = document.body;
      if (main.requestFullscreen) {
        main.requestFullscreen();
      } else if (main.mozRequestFullScreen) {
        main.mozRequestFullScreen();
      } else if (main.webkitRequestFullScreen) {
        main.webkitRequestFullScreen();
      } else if (main.msRequestFullscreen) {
        main.msRequestFullscreen();
      }
    }else{
      await this.setState({
        fullScreen: false
      });
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document['mozCancelFullScreen']) {
        document['mozCancelFullScreen']()
      } else if (document['webkitCancelFullScreen']) {
        document['webkitCancelFullScreen']()
      } else if (document['msExitFullscreen']) {
        document['msExitFullscreen']()
      }
    }
  };
  render() {
    let { fullScreen } = this.state;
    return (
      <Tooltip placement="bottom" title={!fullScreen ? "全屏" : "退出全屏"}>
        <MyIcon
          type="iconfullscreen"
          {...this.props}
          className={"myicon"}
          onClick={this.handleFullScreen}
        />
      </Tooltip>
    );
  }
}
