var http = require('http');

//filesystem modülümüzü ekliyoruz
var fs = require('fs');

//port'u önceden belirtiyoruz.
var port = 8080

/*İsteğin işlenmesi için, fs.readFile fonksiyonu kullanılır. 
Bu fonksiyon, belirtilen dosyayı asenkron olarak okur. 
İlk parametre olarak 'demofile1.html' dosyasının adını alır
ve ikinci parametre olarak bir geriçağırım işlevi alır.
fs.readFile işlevi, dosya okuma işlemi tamamlandığında geriçağırım işlevini çağırır.
Eğer bir hata oluşursa, err parametresi dolu olur;
aksi takdirde data parametresi okunan dosyanın içeriğini içerir
Hata oluşmazsa, res.writeHead fonksiyonu kullanılarak yanıt başlıkları ayarlanır.
Bu durumda, yanıt durum kodu 200 (başarılı) ve içerik türü 'text/html' olarak ayarlanır.
res.write fonksiyonu, yanıt gövdesine data değişkenindeki dosya içeriğini yazar.
Son olarak, res.end fonksiyonu çağrılarak yanıt tamamlanır ve istemciye gönderilir*/
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) { 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(port);

console.log("Server is activate: " + "http://localhost:" + port)