import React, { Component } from "react";
import UIDownload from "../../components/download/download";

const {
  ipcRenderer = {
    send: (msg: string, result: boolean) => {},
    once: (msg: string, fn: () => Promise<void>) => {}
  },
  shell = {
    showItemInFolder: (msg: string) => {}
  }
} = window.electron || {};

export default class Download extends Component<any> {


  render() {
    return (
      <UIDownload
      ></UIDownload>
    );
  }
}
