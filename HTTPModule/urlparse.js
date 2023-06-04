var http = require('http');

//url modülünü dahil ediyoruz.
var url = require('url');

/*var q = url.parse(req.url, true).query;: 
İstek URL'sini ayrıştırır ve query nesnesini döndürür. 
url.parse fonksiyonu, URL'yi ayrıştırmak için kullanılır. 
req.url ile sunucuya gelen isteğin URL'sini alırız. 
true argümanı, ayrıştırılan parametreleri bir nesne olarak almayı sağlar.
*/
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    var q = url.parse(req.url, true).query;
    var txt = q.year + ' ' + q.month;
    res.end(txt);
}).listen(8080);