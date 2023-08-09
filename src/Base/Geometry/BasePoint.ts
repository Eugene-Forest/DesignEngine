import {BaseItem} from "../BaseItem";

/**
 * @author Eugene-Forest
 * @date 2023/8/9
 * @description 画图基础点
 **/
export class BasePoint extends BaseItem {
    private _x: number;
    private _y: number;


    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }


}