// gerekli methodu ekliyoruz.
var http = require('http');

//http üzerinden 200 status kodunda çalışan bir html sayfasını localhosta açıyoruz,8080 portu üzerinden dinliyoruz
http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end('Hello Node');
}).listen(8080); 