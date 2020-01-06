import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTab, activeChange,addTab } from "../../redux/tabs/tabs.reducer";
import { Tabs, Icon,  } from "antd";
import Home from "./home/home";
import Workbench from "./workbench/workbench";
import Browser from "./browser/browser";
import "./main.less";
import { IRootState } from "../../redux";
import Tab from "../../models/tabs/tab.model";
import Mousetrap from "mousetrap";
import { hotKeys } from "../../config/config";
import EventEmitter from "../main/workbench/public/EventEmitter";
import * as Bowser from "bowser";
import { EventTopicEnum } from "../../models/enum/enum";
const { TabPane } = Tabs;
let uuidv1=require("uuid/v1");
const initHotKey = activeId => {
  const browser = Bowser.parse(window.navigator.userAgent);
  const getKeyForSystem = keys => {
    if (typeof keys === "object") {
      return keys[browser.os.name];
    } else {
      return keys;
    }
  };
  const responseForHotKey = (e, combo) => {
    switch (true) {
      case combo === hotKeys.moveUp:
        EventEmitter.emit(`${activeId}${EventTopicEnum.ON_MOVE}`, "up", 1);
        break;
      case combo === hotKeys.moveDown:
        EventEmitter.emit(`${activeId}${EventTopicEnum.ON_MOVE}`, "down", 1);
        break;
      case combo === hotKeys.tenfoldMoveUp:
        EventEmitter.emit(`${activeId}${EventTopicEnum.ON_MOVE}`, "up", 10);
        break;
      case combo === hotKeys.tenfoldMoveDown:
        EventEmitter.emit(`${activeId}${EventTopicEnum.ON_MOVE}`, "down", 10);
        break;
      case combo === getKeyForSystem(hotKeys.copy):
        EventEmitter.emit(`${activeId}${EventTopicEnum.ON_COPY}`);
        break;
      case combo === getKeyForSystem(hotKeys.paste):
        EventEmitter.emit(`${activeId}${EventTopicEnum.ON_PASTE}`);
        break;
      case combo === getKeyForSystem(hotKeys.next):
        EventEmitter.emit(`${activeId}${EventTopicEnum.ON_NEXT}`);
        break;
      case combo === getKeyForSystem(hotKeys.pre):
        EventEmitter.emit(`${activeId}${EventTopicEnum.ON_PRE}`);
        break;
      case combo === getKeyForSystem(hotKeys.collect):
        EventEmitter.emit(`${activeId}${EventTopicEnum.ON_COLLECT}`);
        break;
      case combo === hotKeys.delete:
        EventEmitter.emit(`${activeId}${EventTopicEnum.ON_DELETE}`);
        break;
      case Number.isFinite(combo * 1):
        let faceX = combo * 1;
        EventEmitter.emit(
          `${activeId}${EventTopicEnum.ON_CHANGE_FACE_X_NUM}`,
          faceX
        );
        break;
      default:
        break;
    }
  };
  let keyList = [];
  for (let key in hotKeys) {
    keyList.push(getKeyForSystem(hotKeys[key]));
  }
  Mousetrap.bind(keyList, (e, combo) => {
    responseForHotKey(e, combo);
  });
};

const Main = () => {
  const dispatch = useDispatch();
  let { tabList, activeId } = useSelector((store: IRootState) => store.tab);
  if (activeId.startsWith("papper_")) {
    initHotKey(activeId);
  }

  let onChange = (id: string) => {
    dispatch(activeChange(id));
  };
  let onTabRemove = (id: string) => {
    dispatch(removeTab(id));
  };
  let onEdit=(targetKey, action)=>{
    if(action==='add'){
      dispatch(addTab(
        new Tab({
          id: `papper_${uuidv1()}`,
          title: `test_${uuidv1()}`,
          type:"workbench",
        })
      ));
    }else if(action==='remove'){
      onTabRemove(targetKey);
    }
  }
  let renderComponent = (tab: Tab): React.ReactNode => {
    let { id } = tab;
    switch (tab.type) {
      case "home":
        return <Home />;
      case "browser":
        return <Browser url={tab.url} />;
      case "workbench":
        return <Workbench paperId={id} />;
      default:
        break;
    }
  };

  return (
    <div className={"main"}>
      <Tabs
        onChange={onChange}
        activeKey={activeId}
        type="editable-card"
        onEdit={onEdit}
      >
        {tabList.map(tab => (
          <TabPane
            tab={
              <span>
                <Icon type="android" />
                {tab.title}
              </span>
            }
            key={tab.id}
            closable={tab.closable}
          >
            {renderComponent(tab)}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};
export default Main;
