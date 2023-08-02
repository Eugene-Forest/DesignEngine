import {SerializedObject} from "./SerializedObject";

/**
 * 序列化对象信息记录器
 */
export class SerializedWriter{

    // @ts-ignore
    private _rootNode = null;

    // @ts-ignore
    private _currentNode = null;


    public get rootNode(): any {
        return this._rootNode;
    }

    public get currentNode(): any {
        return this._currentNode;
    }

    public Load(jsonString:string){
        let jsonObject : object = JSON.parse(jsonString);
        this.LoadSerializedItem(jsonObject,null);
    }

    public LoadSerializedItem(obj:object,node:SerializedObject){

    }
}