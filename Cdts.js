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
^http[s]?:\/\/xidi.sutanapp.com\/mobile\/user\/userIndex.+$ url script-response-body https://github.com/q6285917/Xidi/blob/main/Cdts.js
[mitm] 
hostname = *.sutanapp.*
*******************************
Surge

[Script]
^http[s]?:\/\/xidi.sutanapp.com\/mobile\/user\/userIndex.+$ requires-body=1,max-size=0,script-path=sutanapp.js

[MITM]
hostname = *.sutanapp.*

*******************************/

var body=$response.body;
body = body.replace(/\":0,'":1,');
$done(body);

