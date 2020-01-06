// import Cookies from 'js-cookie'
// cookie保存的天数
let _ = require("lodash");

export const isArrayEqual = (x, y) => {
  return _(x)
    .xorWith(y, _.isEqual)
    .isEmpty();
};

// 每英寸点数
export const getDPI = (): number[] => {
  let arrDPI: number[] = [];
  let tmpNode = document.createElement("DIV");
  tmpNode.style.cssText =
    "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
  document.body.appendChild(tmpNode);
  arrDPI[0] = tmpNode.offsetWidth;
  arrDPI[1] = tmpNode.offsetHeight;
  tmpNode.parentNode.removeChild(tmpNode);
  return arrDPI;
};

let dpi = [];

export const setDpi = (d:Array<number>) => {
  dpi = d;
}

// 1英寸= 2.54厘米
export const cm2px = (cm: number): number => {
  let pixel = (cm / 25.4) * dpi[0]; //只计算x轴的dPI
  return round(pixel);
};

// 1英寸= 2.54厘米
export const px2cm = (px: number): number => {
  let cm = (px * 25.4) / dpi[0]; //只计算x轴的dPI
  return round(cm);
};
//四舍五入后保留小数点4位
export const round = (num: number, precision = 4): number => {
  return _.round(num, precision);
};
//向下取整后保留小数点零位
export const floor = (num: number, precision = 0): number => {
  return _.floor(num, precision);
};
//向下取整后保留小数点俩位
export const floorPrecision2 = (num: number, precision = 2): number => {
  return _.floor(num, precision);
};

export const stringToColor = (str) =>{
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var color = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}
