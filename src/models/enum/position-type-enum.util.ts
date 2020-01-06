import {PositionTypeEnum} from './enum';
export default class PositionTypeEnumUtil{
    positionTypeList:Array<iPositionType>;
    constructor(){
        this.init();
    }
    init(){
        this.positionTypeList=[{
            key:PositionTypeEnum.CENTER,
            name:"常规"
        },
        {
            key:PositionTypeEnum.LEFT,
            name:"左侧"  
        },
        {
            key:PositionTypeEnum.RIGHT,
            name:"右侧"  
        },
        {
            key:PositionTypeEnum.TOP,
            name:"顶端"  
        },
        {
            key:PositionTypeEnum.BOTTOM,
            name:"底端"  
        }]
    }
    getNameByKey(key:string){
        let positionType = this.positionTypeList.find(item=>{
            return item.key === key;
        })
        return positionType?positionType.name:'';
    }
}


interface iPositionType{
    key:PositionTypeEnum,
    name:string,
}