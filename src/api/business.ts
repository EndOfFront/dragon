import axios from "../lib/api.request";

export const getIsLogin = chartId => {
  // /getChartInfo
  return axios.request({
    url: "login/islogin",
    method: "get"
  });
};
export const getLayout = chartId => {
  // /getChartInfo
  return axios.request({
    url: "getChartInfo",
    method: "get",
    params: {
      chartId
    }
  });
};

export const fuzzyFindLocationsByShelfCode = ({ storeId, shelfCode }) => {
  return axios.request({
    url: "fuzzyFindLocationsByShelfCode",
    method: "get",
    noLoading: true,
    params: {
      storeId,
      shelfCode
    }
  });
};
export const pushChartInfo = layoutObject => {
  let { id, effectiveDate } = layoutObject;
  let data = {
    chartIds: [id],
    effectiveDate
  };
  return axios.request({
    url: "pushChartInfo",
    method: "post",
    data: data
  });
};
export const saveLayout = (chartInfoVo) => {
  let { chartBaseVo, sourceJson, isPush } = chartInfoVo
  let data = {
    chartInfoDto:chartBaseVo,
    sourceJson:sourceJson,
    isPush:isPush
  }
  return axios.request({
    url: "saveChartInfo",
    method: "post",
    data: data
  });
};

export const getLayoutList = ({
  storeId="",
  shelfCategory1Id = "",
  shelfCategory2Id = "",
  chartName="",
  ownerPin="",
  chartStatus=null,
  page=1,
  pageSize=10,
  sortField="modified",
  sortRule="DESC"
}) => {
  return axios.request({
    url: "pageSearchCharts",
    method: "get",
    params: {
      storeId,
      shelfCategory1Id,
      shelfCategory2Id, 
      chartName,
      ownerPin,
      chartStatus,
      page,
      pageSize,
      sortField,
      sortRule
    }
  });
};
export const deleteLayout = chartId => {
  return axios.request({
    url: "deleteChart",
    noLoading: true,
    method: "get",
    params: {
      chartId
    }
  });
};
export const getStoreList = (noLoading = false) => {
  return axios.request({
    url: "store/list",
    noLoading,
    method: "get"
  });
};

export const getDeviceList = () => {
  return axios.request({
    url: "device/list",
    method: "get"
  });
};
export const getSubDeviceList = deviceType => {
  return axios.request({
    url: "device/listByType",
    method: "get",
    params: {
      deviceType
    }
  });
};
export const getSkuList = (shelfCategory2,storeIds) => {
  return axios.request({
    url: "listItems",
    method: "post",
    data: {
      shelfCategory2: shelfCategory2,
      storeIds
    }
  });
};
export const getItemSaleInfo = (layoutObject, id) => {
  let { storeIds } = layoutObject;
  let itemId = id;
  return axios.request({
    url: "getItemSaleInfo",
    method: "post",
    data: {
      itemId,
      storeIds
    }
  });
};
export const getCategoryGeneral = layoutObject => {
  let { storeIds, shelfCategoryId } = layoutObject;
  return axios.request({
    url: "getCategoryGeneral",
    method: "post",
    data: {
      shelfCategory2Id: shelfCategoryId,
      storeIds
    }
  });
};

export const getSGType = (noLoading = false) => {
  // return JSON.parse('{"code":"200","data":[{"name":"类目类型0","type":1000},{"name":"类目类型1","type":1001},{"name":"类目类型2","type":1002},{"name":"类目类型3","type":1003},{"name":"类目类型4","type":1004}],"message":"成功","success":true,"timestamp":"1572601779820"}');
  return axios.request({
    url: "getSGType",
    noLoading,
    method: "get"
  });
};

export const getCategoryList = (shelfCategoryType) => {
  return axios.request({
    url: "getSGTree",
    noLoading:false,
    method: "get",
    params:{
      shelfCategoryType:shelfCategoryType
    }
  });
};
export const createLayout = layoutObject => {
  let {shelfCategory1Id,shelfCategory2Id,shelfCategoryType,chartName,locationType,chartStoreDtos} = layoutObject;
  return axios.request({
    url: "createChartInfo",
    method: "post",
    data: {
      shelfCategoryType,
      shelfCategory1Id,
      shelfCategory2Id,
      chartName,
      locationType,
      chartStoreDtos
    }
  });
};

export const getStockOutRate = (layoutObject, itemIds) => {
  let { storeIds } = layoutObject;
  return axios.request({
    url: "getStockOutRate",
    method: "post",
    data: {
      storeIds,
      itemIds
    }
  });
};
