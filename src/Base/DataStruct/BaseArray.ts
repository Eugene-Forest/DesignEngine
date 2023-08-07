import {BaseItem} from "../BaseItem";

/**
 * Base操作数组
 */
export class BaseArray extends Array<BaseItem>{
    private readonly _root: BaseItem;

    constructor(refItem:BaseItem) {
        super();
        this._root = refItem;
    }

    public get Root(){
        return this._root;
    }

    public push(...elements:BaseItem[]):number{
        let index = 0;
        elements.forEach(ele=>{
            if(ele){
                if(ele instanceof BaseItem){
                    ele.parentItem = this._root;
                    index = super.push(ele);
                }
            }
        })
        return index;
    }



}