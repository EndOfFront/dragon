import React, { Component } from "react";
import MyIcon from "../../components/icon/icon";
import { Tooltip } from "antd";

interface iProps {
  onClick?: () => void;
}

export default class EffectiveTime extends Component<iProps> {
  render() {
    return (
      <Tooltip placement="bottom" title={"设置生效时间"}>
        <MyIcon
          type="icontime"
          onClick={this.props.onClick}
          className={"myicon"}
        />
      </Tooltip>
    );
  }
}
