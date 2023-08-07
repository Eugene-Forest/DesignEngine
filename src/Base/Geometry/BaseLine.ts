import {BaseItem} from "../BaseItem";
import {BasePoint} from "./BasePoint";


export class BaseLine extends BaseItem{

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