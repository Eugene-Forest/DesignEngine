import {BaseItem} from "../BaseItem";
import {BasePoint} from "./BasePoint";

/**
 * @author Eugene-Forest
 * @date 2023/8/9
 * @description 画图基础线
 **/
export class BaseLine extends BaseItem {

    private _startPoint: BasePoint;
    private _endPoint: BasePoint;


    get startPoint(): BasePoint {
        return this._startPoint;
    }

    set startPoint(value: BasePoint) {
        this._startPoint = value;
    }

    get endPoint(): BasePoint {
        return this._endPoint;
    }

    set endPoint(value: BasePoint) {
        this._endPoint = value;
    }
}