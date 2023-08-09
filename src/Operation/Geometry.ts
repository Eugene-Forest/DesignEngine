/**
 * @author Eugene-Forest
 * @date 2023/8/9
 * @description 二维数学计算
 **/
export let Geometry = {
    getDefaultPoint,
    getDefaultLine,
}

/**
 * 二维点
 */
export type Point2d = {
    X: number,
    Y: number
}


export type Line2d = {
    StartPoint: Point2d,
    EndPoint: Point2d
}

export type Arc2d = {
    Center: Point2d,
    Radius: number,
    Direct: 0 | 1 | 2,
    StartAngle: number,
    EndAngle: number
}

/**
 * 获取默认2d点对象
 */
function getDefaultPoint(): Point2d {
    return {X: 0, Y: 0}
}

/**
 * 获取默认2d线对象
 */
function getDefaultLine(): Line2d {
    return {StartPoint: getDefaultPoint(), EndPoint: getDefaultPoint()}
}
