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
^http[s]?:\/\/xidi.sutanapp.com\/mobile\/user\/userIndex.+$ url script-response-body https://raw.githubusercontent.com/q6285917/Xidi/main/Cdts.js
[mitm] 
hostname = *.sutanapp.*
*******************************
Surge

[Script]
^http[s]?:\/\/xidi.sutanapp.com\/mobile\/user\/userIndex.+$ requires-body=1,max-size=0,script-path=sutanapp.js

[MITM]
hostname = *.sutanapp.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.= 1,;
obj.data.1= 1;
obj.data.vip= 1;
obj.data.subVip= 1;
    $done({body: JSON. /*******************************
⚠️🛝此捷径仅适用于本地重写⚠️🛝
  🧚🏻‍♂️作者：🍡魔法师🍡
  🎈交流群：993539991
🫧脚本名称:滴滴
🫧建议配合working copy一起食用
✈️下载地址https://apps.apple.com/app/id896694807✈️
*******************************/
var body=$response.body;
body = body.replace(/subVip\":0/g,'subVip":1');
body = body.replace(/\":0,'":1,');
$done(body);
