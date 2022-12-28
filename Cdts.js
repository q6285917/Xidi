[rewrite_local]
^http[s]?:\/\/xidi.sutanapp.com\/mobile\/user\/userIndex.+$ url script-response-body https://raw.githubusercontent.com/q6285917/Xidi/main/Cdts.js
*/
[mitm] 
hostname = *.sutanapp.*
var obj = JSON.parse($response.body);
    obj.data.= 1,;
obj.data.1= 1;
obj.data.vip= 1;
obj.data.subVip= 1;
    $done({body: JSON.stringify(obj)});
