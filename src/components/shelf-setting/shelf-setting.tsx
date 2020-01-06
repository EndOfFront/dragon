import React, { Component } from "react";
import { Tooltip } from "antd";
import MyIcon from "../../components/icon/icon";
interface iProps {
  onClick?: () => void;
}

export default class ShelfSetting extends Component<iProps> {
  render() {
    return (
      <Tooltip placement="bottom" title={"货架设置"}>
        <MyIcon
          type="iconsetting"
          onClick={this.props.onClick}
          className={"myicon"}
        />
      </Tooltip>
    );
  }
}
