/**
 * @description 两位数字
 * @param {number} number
 * @returns {string}
 */
export declare const preFixInt: (number: number) => string;
/**
 * @description 四舍五入保留fixed位小数
 * @param {number} number
 * @param {number} fixed
 * @returns {number}
 */
export declare const numberFixed: (number: number, fixed?: number) => number;
/**
 * @description 16进制转2进制
 * @param str
 * @returns
 */
export declare const hexToBin: (str: string) => string;
/**
 * @description 2进制转16进制
 * @param str
 * @returns
 */
export declare const binToHex: (str: string) => string;
