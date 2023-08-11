/*
 * Copyright (c) 2023. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

/**
 * @author Eugene-Forest
 * @date 2023/8/11
 * @description
 **/

import axios from "axios";
// @ts-ignore
import refText from '../asset/RefText.xml';
// @ts-ignore
import refImg from '../asset/RefText_0.png';
import {BitmapFont, Texture} from "pixi.js-legacy";

/**
 * 安装 BitMap 字体
 */
axios.get(refText).then(success => {
    let texture = Texture.from(refImg);
    BitmapFont.install(success.data, texture, true);
})