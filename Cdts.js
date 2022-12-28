/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
滴滴
脚本名称:滴滴
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/xidi.sutanapp.com\/\/mobile\/common\/checkNewChartPowerXiDiV14.+$ url script-response-body https://github.com/q6285917/Xidi/blob/main/Cdts.js
[mitm] 
hostname = *.sutanapp.*
*******************************
Surge

[Script]
^http[s]?:\/\/xidi.sutanapp.com\/\/mobile\/common\/checkNewChartPowerXiDiV14.+$ requires-body=1,max-size=0,script-path=sutanapp.js

[MITM]
hostname = *.sutanapp.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.= 1,;
obj.data.1= 1;
obj.data.vip= 1;
obj.data.subVip= 1;
    $done({body: JSON.stringify(obj)});
