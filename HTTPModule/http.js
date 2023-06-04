var http = require('http');

//http objesini oluşturuyoruz.
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"}); // sayfanın html sayfası olduğunu belirtme
    res.write("Hello World") // sunucuya hello world yazdırıyoruz
    res.end(); //response'u sonlandırıyoruz.
}).listen(8080); //8080 portunda bir req bekliyoruzi dinlemeye alıyoruz.