import React, { Component } from "react";

export default class Toolbar extends Component<any> {
  render() {
    let { direction = "left", childrenList } = this.props;
    return (
      <div className={`header-${direction}-menu`}>
        {childrenList.map((item, index) => (
          <div className={"trigger-a"} key={index}>
            {item}
          </div>
        ))}
      </div>
    );
  }
}
