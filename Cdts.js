
[rewrite_local]
^http[s]?:\/\/xidi.sutanapp.com\/\/mobile\/user\/userIndex.+$ url script-response-body https://github.com/q6285917/Xidi/edit/main/Cdts.js
[mitm] 
hostname = *.sutanapp.*


var body=$response.body;
body = body.replace(/subVip\":0/g,'subVip":1');
body = body.replace(/\":0,'":1,');
$done(body);

 

