import {MainApplication} from "./Application/MainApplication";


window.onload = ()=>{
    // @ts-ignore
    window['app'] = new MainApplication();

}