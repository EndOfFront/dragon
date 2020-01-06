import React from "react";
import Toolbar from "../../components/toolbar/toolbar";
import { Tooltip } from "antd";
import Save from "../save/save";
import ShelfSetting from "../shelf-setting/shelf-setting";
import EffectiveTime from "../effective-time/effective-time";
import Publish from "../publish/publish";
import FullScreen from "../../components/full-screen/full-screen";
import User from "../user/user";
import Download from "../download/download";
export default function HeaderToolbar({ paperid=null, left = false, right = false }) {
  return (
    <div>
      {left && (
        <>
          <Toolbar
            direction={"left"}
            childrenList={[
              <Save paperId={paperid}></Save>,
              <ShelfSetting paperId={paperid}></ShelfSetting>,
              <EffectiveTime paperId={paperid}></EffectiveTime>,
              <Download paperId={paperid}></Download>,
              <Publish paperId={paperid}></Publish>
            ]}
          />
        </>
      )}
      {right && (
        <>
          <Toolbar
            direction={"right"}
            childrenList={[
              <FullScreen />,
              <User />
            ]}
          />
        </>
      )}
    </div>
  );
}
