import { Icon, Tooltip} from "antd";
import React, { Component } from "react";

interface iProps{
  onClick?: () => void;
}
export default class Publish extends Component<iProps> {
  render() {
    return (
      <div>
        <Tooltip placement="bottom" title={"发布"}>
          <Icon type="cloud-upload" onClick={this.props.onClick} className={"myicon"} />
        </Tooltip>
      </div>
    );
  }
}
