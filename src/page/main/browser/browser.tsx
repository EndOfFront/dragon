import React, { Component } from "react";

export default class Browser extends Component<any, any> {
  render() {
    let {url}=this.props
    return (
      <div style={{ height: "calc(100vh - 42px)" }}>
          <iframe
            title={"test"}
            src={url}
            style={{ display: "flex", width: "100%", height: "100%" }}
            frameBorder={"0"}
          ></iframe>
      </div>
    );
  }
}
