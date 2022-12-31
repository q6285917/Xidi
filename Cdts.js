
[rewrite_local]
^http[s]?:\/\/xidi.sutanapp.com\/mobile\/user\/userIndex.+$ url script-response-body https://github.com/q6285917/Xidi/blob/main/Cdts.js
[mitm] 
hostname = *.sutanapp.*




var body=$response.body;
body = body.replace(/\":0,/g,'":1,');
$done(body);

