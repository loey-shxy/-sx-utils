export interface MapCoordinates {
    lng: number;
    lat: number;
}
/**
 * @description 84坐标系转百度坐标系
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @returns {Array<number, number>} 经度/纬度
 */
export declare const wgs84tobd09: (lng: number, lat: number) => number[];
/**
 * @description 84坐标系转高德坐标系
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @returns {Array<number, number>} 经度/纬度
 */
export declare const wgs84togcj02: (lng: number, lat: number) => number[];
/**
 * @description 高德坐标系转84坐标系
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @returns {Array<number, number>} 经度/纬度
 */
export declare const gcj02towgs84: (lng: number, lat: number) => number[];
/**
 * @description 将经纬度格式转换为度分秒格式
 * @param value 经/纬度
 * @returns
 */
export declare const formatDegree: (value: number) => string;
/**
 * @description 获取两点之间的中间点
 * @param point1
 * @param point2
 * @returns
 */
export declare const getIntermediatePoint: (point1: MapCoordinates, point2: MapCoordinates) => {
    lng: number;
    lat: number;
};
/**
 * @description 在字符串指定位置插入新字符串
 * @param source 源字符串
 * @param start 插入位置
 * @param newStr 规定要插入的新字符
 * @returns
 */
export declare const insertStr: (source: string, start: number, newStr: string) => string;
/**
 * @description 在经纬度数值最后7位前添加小数点
 * @param lng
 * @param lat
 * @returns
 */
export declare const handleLatLngValue: (lng: number, lat: number) => {
    lng: number;
    lat: number;
};
