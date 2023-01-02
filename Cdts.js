
[rewrite_local]
^http[s]?:\/\/xidi.sutanapp.com\/\/mobile\/user\/userIndex.+$ url script-response-body https://github.com/q6285917/Xidi/edit/main/Cdts.js
[mitm] 
hostname = *.sutanapp.*
obj.data.= 1,;
    $done({body: JSON.stringify(obj)});


