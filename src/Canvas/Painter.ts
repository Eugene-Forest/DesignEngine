import {Brush} from './Brush';

/**
 * @author Eugene-Forest
 * @date 2023/8/9
 * @description 用来定义画图基础功能
 **/
export interface Painter {

    /**
     * 画图方法
     * @param {Brush} painter
     */
    paint(painter: Brush): void;
}
