import React from "react";
import MyIcon from "../../components/icon/icon";
import { Tooltip } from 'antd';
interface iPops{
  onClick?: () => void;
}
export default function Save(props:iPops) {
  return (
      <Tooltip placement="bottom" title="保存">
        <MyIcon type="iconsave" onClick={props.onClick} className={"myicon"} />
      </Tooltip>
  );
}
