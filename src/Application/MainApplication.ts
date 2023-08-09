import {BaseDesign} from "../Base/BaseDesign";

/**
 * @author Eugene-Forest
 * @date 2023/8/9
 * @description 入口文件
 **/
export class MainApplication {

    public createCanvas() {
        let design = new BaseDesign();
        design.getPainter(false).paintSomething();
    }
}