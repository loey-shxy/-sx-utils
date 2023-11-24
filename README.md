## 安装
```
npm install -S loey-utils
```

## 工具函数
```
// 验证邮箱
validateEmail(value),
// 验证身份证
validateIdCard(value), 
// 验证只能输入-、字母、数字、中文
validateCenterlineLetterNumberChinese(value), 
// 验证正整数
validateInteger(value), 
// 验证ip地址
validateIp(value), 
// 验证纬度
validateLat(value), 
// 验证必须有一位数字和字母
validateLetterAndNumber(value), 
// 验证经度
validateLng(value), 
// 验证手机号码
validatePhone(value), 
// 验证车牌号
validatePlateNum(value), 
// 验证前后空格
validatePreAndAfterSpace(value), 
// 验证只能输入_、字母、数字、中文
validateUnderlineLetterNumberChinese(value), 
// 判断数组
isArray(value),
// 判断数字
isNumber(value),
// 判断对象
isObject, 
// 验证英文数字
letterNumber(value), 
// 验证字母中文数字
letterNumberChinese(value), 
// 交换日期/时间
exchangeDateTime(startDate, endDate), 
// 获取当前日期是当月的第几周
getMonthWeek(date), 
sleep, 
sleepSync, 
// 前缀补0
preFixInt(number), 
// 16进制转2进制
hexToBin(),
// 2进制转16进制
binToHex, 
// 四舍五入保留fixed位小数
numberFixed(number, fixed), 
// 84坐标系转百度坐标系
wgs84tobd09(lng, lat), 
// 84坐标系转高德坐标系
wgs84togcj02(lng, lat),
// 高德坐标系转84坐标系
gcj02towgs84(lng, lat), 
// 将经纬度格式转换为度分秒格式
formatDegree(value), 
// 获取两点之间的中间点
getIntermediatePoint(point1: {lng, lat}, point2: {lng, lat}), 
// 在字符串指定位置插入新字符串
insertStr(source, start, newStr), 
// 在经纬度数值最后7位前添加小数点
handleLatLngValue(lng, lat)
```