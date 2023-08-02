import {CanvasApplication} from "./CanvasApplication";
import {BaseDesign} from "../Base/BaseDesign";


export class MainApplication{

    public createCanvas(){
        let design = new BaseDesign();
        design.getPainter(false).paintSomething();
    }
}