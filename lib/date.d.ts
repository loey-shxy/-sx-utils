/**
 * @description 交换日期/时间
 * @param startDateTime 开始时间
 * @param endDateTime 结束时间
 * @returns {Array} [startDateTime, endDateTime]
 */
type DateType = number | string | Date;
export declare const exchangeDateTime: (startDateTime: DateType, endDateTime: DateType) => [DateType, DateType];
/**
 * @description 获取当前日期是当月的第几周
 * @param date
 * @returns
 */
export declare const getMonthWeek: (date: string) => number;
export {};
