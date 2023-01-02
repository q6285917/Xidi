
[rewrite_local]
^http[s]?:\/\/xidi.sutanapp.com\/\/mobile\/user\/userIndex.+$ url script-response-body https://github.com/q6285917/Xidi/edit/main/Cdts.js
[mitm] 
hostname = *.sutanapp.*
*******************************
Surge

[Script]
^http[s]?:\/\/xidi.sutanapp.com\/\/mobile\/user\/userIndex.+$ requires-body=1,max-size=0,script-path=sutanapp.js

[MITM]
hostname = *.sutanapp.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.subVip= 1;
obj.data.= 1,;
    $done({body: JSON.stringify(obj)});


