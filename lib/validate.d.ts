/**
 * @description 判断是数字
 * @param str
 * @return {boolean}
 */
export declare const isNumber: (str: string | number) => boolean;
/**
 * @description 判断对象
 * @param value
 * @returns {boolean}
 */
export declare const isObject: (value: any) => boolean;
/**
 * @description 判断数组
 * @param value
 * @returns {boolean}
 */
export declare const isArray: (value: any) => boolean;
/**
 * @description 验证字母中文数字
 * @param value
 * @returns {boolean}
 */
export declare const letterNumberChinese: (value: any) => boolean;
/**
 * @description 验证英文数字
 * @param value
 * @returns {boolean}
 */
export declare const letterNumber: (value: any) => boolean;
/**
 * @description 验证正整数
 * @param value
 * @returns {boolean}
 */
export declare const validateInteger: (value: any) => boolean;
/**
 * @description 验证经度
 * @param value
 * @returns {boolean}
 */
export declare const validateLng: (value: any) => boolean;
/**
 * @description 验证纬度
 * @param value
 * @returns {boolean}
 */
export declare const validateLat: (value: any) => boolean;
/**
 * @description 验证车牌号
 * @param value
 * @returns
 */
export declare const validatePlateNum: (value: string) => boolean;
/**
 * @description 验证身份证号
 * @param value
 * @returns
 */
export declare const validateIdCard: (value: string) => boolean;
/**
 * @description 验证邮箱
 * @param value
 * @returns
 */
export declare const validateEmail: (value: string) => boolean;
/**
 * @description 验证只能输入-、字母、数字、中文
 * @param value
 * @returns
 */
export declare const validateCenterlineLetterNumberChinese: (value: string) => boolean;
/**
 * @description 验证只能输入_、字母、数字、中文
 * @param value
 * @returns
 */
export declare const validateUnderlineLetterNumberChinese: (value: string) => boolean;
/**
 * @description 验证必须有一位数字和字母
 * @param value
 * @returns
 */
export declare const validateLetterAndNumber: (value: string) => boolean;
/**
 * @description 验证ip地址
 * @param value
 * @returns
 */
export declare const validateIp: (value: string) => boolean;
/**
 * @description 验证手机号码
 * @param value
 * @returns
 */
export declare const validatePhone: (value: string) => boolean;
/**
 * @description 验证前后空格
 * @param value
 * @returns
 */
export declare const validatePreAndAfterSpace: (value: string) => boolean;
