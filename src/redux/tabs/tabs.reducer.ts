import Tab from '../../models/tabs/tab.model'
let _ = require("lodash");
export const ACTION_TYPES = {
  ADD: 'tab/ADD',
  REMOVE: 'tab/REMOVE',
  ACTIVECHANGE: 'tab/ACTIVECHANGE',
  RESET: 'tab/RESET'
};
let homeTabId=`tab_${new Date().getTime()}`;
let tab = new Tab({ title: "首页", id: homeTabId, closable: false,type:"home" })
const initialState = {
  activeId:homeTabId,
  tabList: [tab] as Array<Tab>
};

export type TabState = Readonly<typeof initialState>;

// Reducer
export default (state: TabState = initialState, { type, payload}): TabState => {
  let { tabList,activeId } = state;
  tabList=_.cloneDeep(tabList);
  switch (type) {
    case ACTION_TYPES.ADD:
      tabList.push(payload);
      return {...state,tabList,activeId:payload.id}
    case ACTION_TYPES.REMOVE:
      let index=tabList.findIndex(tab => tab.id === payload.id)
       if(index===tabList.length-1){
        activeId=tabList[index-1].id
      }else{
        activeId=tabList[index+1].id
      }
      tabList.splice(index, 1);
      return { ...state, tabList,activeId };
    case ACTION_TYPES.ACTIVECHANGE:
      return { ...state, activeId:payload.id };
    default:
      return state;
  }
};

// Actions
export const addTab = (tab: Tab) => {
  return {
    type: ACTION_TYPES.ADD,
    payload: tab
  }
};
export const activeChange = (id: string) => {
  return {
    type: ACTION_TYPES.ACTIVECHANGE,
    payload: {id}
  }
};
export const removeTab = (id: string) => {
  return {
    type: ACTION_TYPES.REMOVE,
    payload: { id }
  }
};
