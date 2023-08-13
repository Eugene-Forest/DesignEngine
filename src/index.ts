import {MainApplication} from "./Application/MainApplication";
import "./Config/DevConfig";
import {TestApplication} from "./Application/TestApplication";

let app: TestApplication;

window.onload = () => {
    app = new TestApplication();
    // @ts-ignore
    window['app'] = app;
    // 创建画布
    app.createCanvas(800,800, "renderFor2d");
}