import {rePainterType} from "../Helper/GraphInterfacType";

/**
 * @author Eugene-Forest
 * @date 2023/8/9
 * @description 画笔抽象类
 **/
export abstract class Brush {

    /**
     * 画笔类型
     * @returns {rePainterType}
     */
    public abstract get PainterType(): rePainterType;

    public abstract paintSomething(): void ;
}