// dışarıya açtığımız modülümüzü projemize require dosya yolu ile dahil ediyoruz.
var http = require('http');
var dateTime = require('./module-one');

//modülümüzü tanımladığımız değişkenin ismi.fonksiyonismi şeklinde yazarak modülümüzü kullanıyoruz.
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write("The datetime are currently : " + dateTime.MyDateTime());
    res.end()
}).listen(8080)