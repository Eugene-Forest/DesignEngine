import {Brush} from "./Brush";
import {rePainterType} from "../Helper/GraphInterfacType";

/**
 * @author Eugene-Forest
 * @date 2023/8/9
 * @description 封装 svg.js 画笔
 **/
export class SvgBrush extends Brush {
    public get PainterType(): rePainterType {
        return rePainterType.Svg;
    }

    public paintSomething(): void {
    }

}