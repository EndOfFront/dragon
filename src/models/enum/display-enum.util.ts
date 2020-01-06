import { TagDisplayEnum, TopTagDisplayEnum, OutDisplayEnum } from "./enum";
export default class DisplayEnumUtil {
  displayList: Array<iprops>;
  constructor() {
    this.init();
  }
  init() {
    this.displayList = [
      {
        key: TagDisplayEnum.ITEM_IMG,
        name: "图片"
      },
      {
        key: TagDisplayEnum.BRAND,
        name: "品牌"
      },
      {
        key: TagDisplayEnum.GP_RATIO_30_DAY,
        name: "销售毛利（30天门店均值）"
      },
      {
        key: TagDisplayEnum.SALE_QTTY_30_DAY,
        name: "销售数量（30天门店均值）"
      },
      {
        key: TagDisplayEnum.PRICE,
        name: "价格"
      },
      {
        key: TagDisplayEnum.SKU_ID,
        name: "SKUID"
      },
      {
        key: TagDisplayEnum.SKU_SORT_NAME,
        name: "商品简称"
      },
      {
        key: TagDisplayEnum.TOTAL_NUM,
        name: "排面量"
      },
      {
        key: TopTagDisplayEnum.BRAND,
        name: "品牌"
      },
      {
        key: TopTagDisplayEnum.GP_RATIO_30_DAY,
        name: "销售毛利（30天门店均值）"
      },
      {
        key: TopTagDisplayEnum.SALE_QTTY_30_DAY,
        name: "销售数量（30天门店均值）"
      },
      {
        key: TopTagDisplayEnum.PRICE,
        name: "价格"
      },
      {
        key: TopTagDisplayEnum.SKU_ID,
        name: "SKUID"
      },
      {
        key: TopTagDisplayEnum.SKU_SORT_NAME,
        name: "商品简称"
      },
      {
        key: TopTagDisplayEnum.TOTAL_NUM,
        name: "排面量"
      },
      {
        key: OutDisplayEnum.ZERO_STOCK,
        name: "0库存"
      },
      {
        key: OutDisplayEnum.BRAND,
        name: "品牌"
      },
      {
        key: OutDisplayEnum.ITEM_STATUS,
        name: "商品状态"
      },
      {
        key: OutDisplayEnum.CATEGORY_4_ID,
        name: "商品类目（四级）"
      }
    ];
  }
  getNameByKey(key: string) {
    let display = this.displayList.find(item => {
      return item.key === key;
    });
    return display ? display.name : "";
  }
}

interface iprops {
  key: string;
  name: string;
}
