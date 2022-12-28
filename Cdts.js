[rewrite_local]
^http[s]?:\/\/xidi.sutanapp.com\/mobile\/user\/userIndex.+$ url script-response-body sutanapp.js
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
    $done({body: JSON.stringify(obj)});
