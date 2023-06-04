// http modülü
var http = require('http');

http.createServer(function (req,res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(req.url); //gelen url yi yazdırırıyoruz // ! Gelen tüm urlleri kabul eder ve ekrana yazar
    res.end(); 
}).listen(8080);   