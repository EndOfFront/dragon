enum NodeTypeEnum{

    GRAPH="Graph",
    BOX="Box",
    HOOK_BOX="HookBox",
    LAYER_BOX="LayerBox",
    POSITION_BOX="PositionBox",
    TRAY_BOX="TrayBox",
    SHELF_BOX="ShelfBox",
    ITEM="Item",
    LAYOUT="Layout"
}
enum LayoutTypeEnum{
    POSITION_LAYOUT="POSITION_LAYOUT",
    FLOW_LAYOUT="FLOW_LAYOUT",
    SHELF_LAYOUT="SHELF_LAYOUT",
    LAYER_LAYOUT="LAYER_LAYOUT",
}

enum PositionTypeEnum{

    CENTER="CENTER",
    LEFT='LEFT',
    RIGHT='RIGHT',
    BOTTOM='BOTTOM',
    TOP='TOP'
}

enum DirectionTypeEnum{
    X="X",
    Y="Y",
    Z='Z',
}

enum ChartSortRuleEnum{
    ASC = "ASC",
    DESC = "DESC",
}

enum GraphChangeTypeEnum{
    MOVE="MOVE",
    DELETE="DELETE",
    ADD="ADD",
}

enum ItemStatusEnum{
    IS_ON_GRAPH="已上架",
    NOT_ON_GRAPH="未上架",
}

enum EventTopicEnum{
    ON_MOVE="-on-move",
    ON_EXPORT_PNG="on-export-png",
    ON_INFO="-on-info",
    ON_COPY="-on-copy",
    ON_PASTE="-on-paste",
    ON_DELETE="-on-delete",
    ON_CHANGE_FACE_X_NUM="-on-change-faceX-num",
    ON_ADD_SHELF="-on-add-shelf",
    ON_CHANGE_BOX="-on-change-box",
    ON_CHANGE_TAG_DISPLAY="-on-change-tag-display",
    ON_CHANGE_TOP_TAG_DISPLAY="-on-change-top-tag-display",
    ON_CHANGE_OUT_DISPLAY="-on-change-out-display",
    ON_LOCATION="-on-location",
    ON_NEXT="-on-next",
    ON_PRE="-on-pre",
    ON_COLLECT="-on-collect"
}

enum TagDisplayEnum{
    ITEM_IMG="itemImg",
    SKU_ID="itemId",
    SKU_SORT_NAME="itemName",
    TOTAL_NUM="totalNum",
    PRICE="price",
    SALE_QTTY_30_DAY="saleQtty30Day",
    GP_RATIO_30_DAY="gpRatio30Day",
    BRAND="brand"
}
enum TopTagDisplayEnum{
    SKU_ID="itemId",
    SKU_SORT_NAME="itemName",
    TOTAL_NUM="totalNum",
    PRICE="price",
    SALE_QTTY_30_DAY="saleQtty30Day",
    GP_RATIO_30_DAY="gpRatio30Day",
    BRAND="brand"
}
enum OutDisplayEnum{
    ZERO_STOCK="hasStockZero",
    BRAND="brand",
    ITEM_STATUS="itemStatus",
    CATEGORY_4_ID="category4Id"
}

export {NodeTypeEnum,LayoutTypeEnum,PositionTypeEnum,DirectionTypeEnum,ChartSortRuleEnum,GraphChangeTypeEnum,ItemStatusEnum,EventTopicEnum,TagDisplayEnum,TopTagDisplayEnum,OutDisplayEnum}