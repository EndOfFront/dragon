
// {title:'首页',closable:false,active:true}
export default class Tab {
    public id: string;
    public title: string;
    public url: string;
    public type: string;
    public closable: boolean;
    public icon: string;
    constructor({
        id,
        title='',  
        url,
        type='home',
        icon='',
        closable=true
    }: any) {
        this.id=id
        this.title = title 
        this.url = url 
        this.type = type 
        this.closable = closable;
        this.icon = icon 
    }
}
