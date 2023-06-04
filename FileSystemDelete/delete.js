var fs = require('fs');

//Dosya Sistemi modülüyle bir dosyayı silmek için fs.unlink() yöntemini kullanın.
//fs.unlink() yöntemi belirtilen dosyayı siler:
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});