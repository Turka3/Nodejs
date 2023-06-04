var fs = require('fs');

//fs.writeFile() yöntemi, varsa belirtilen dosya ve içeriği değiştirir. Dosya yoksa, belirtilen içeriği içeren yeni bir dosya oluşturulur:
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});