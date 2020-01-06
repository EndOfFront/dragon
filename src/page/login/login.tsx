import React, { Component } from "react";
// import './splash.less'
const { ipcRenderer={} } = window.electron||{};
export default class Login extends Component {
  componentDidMount() {
    let loginWebview = document.querySelector("#login") as Element;
    loginWebview.addEventListener("close", () => {
      ipcRenderer.send("already-login", true);
    });
  }

  render() {
    return (
      <div style={{display:'flex',width:'100%',height:'100%'}}>
        <webview
          style={{display:'flex', width:'100%', height:'100%'}}
          id={"login"}
          src={"http://shelfgateway.7fresh.com/view/redirectagent/"}
        ></webview>
      </div>
    );
  }
}
