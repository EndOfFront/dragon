import React, { Component } from "react";
import "./paper.less";

export default class Paper extends Component<any> {
  render() {
    return (
      <div className="designer">
        <div style={{ width: 3000, height: 3000 }} className="grids"></div>
      </div>
    );
  }
}
