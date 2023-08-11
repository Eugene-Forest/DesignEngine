import {MainApplication} from "./Application/MainApplication";
import "./Config/DevConfig";

window.onload = () => {
    // @ts-ignore
    window['app'] = new MainApplication();

}