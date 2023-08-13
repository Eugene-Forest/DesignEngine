import {BaseDesign} from "../Base/BaseDesign";
import {PixiBrush} from "../Canvas/PixiBrush";
import {SvgBrush} from "../Canvas/SvgBrush";

/**
 * @author Eugene-Forest
 * @date 2023/8/9
 * @description 入口文件
 **/
export class MainApplication {

    private _design:BaseDesign<PixiBrush, SvgBrush>;

    public createCanvas(width?:number,height?:number,parentEelId?:string){
        this._design = new BaseDesign(parentEelId, width, height);
    }

}