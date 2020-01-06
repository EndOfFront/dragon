import React, { Component } from "react";
import Paper from "../paper/paper";

export default class Designer extends Component<any> {
  shouldComponentUpdate(){
    return false;
  }
  render() {
    return (
      <Paper></Paper>
    );
  }
  
}
