var fs = require('fs');

//"mynewfile1.txt" dosyasını "myrenamedfile.txt" olarak yeniden adlandırın:
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});