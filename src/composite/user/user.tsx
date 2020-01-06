import React, { Component } from "react";
import { Modal } from "antd";
import UIUser from "../../components/user/user";
const { confirm } = Modal;
const { ipcRenderer = { send: (msg: string, result: boolean) => {} } } =
  window.electron || {};

const {
  remote = {
    session: {
      defaultSession: {
        clearStorageData: ({ storages = "" }) => {},
        cookies: { get: (a, b) => {} }
      }
    }
  }
} = window.electron || {};
const { session } = remote;
export default class User extends Component<any> {
  state = {
    username: ""
  };
  logout = () => {
    confirm({
      title: "确认退出系统？",
      onOk() {},
      onCancel() {}
    });
  };

  componentDidMount() {}
  render() {
    let { username } = this.state;
    return <UIUser onClick={this.logout} username={username} />;
  }
}
