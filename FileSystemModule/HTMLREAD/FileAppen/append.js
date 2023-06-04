// fs modülünü dahil ediyoruz.
var fs = require('fs');

/*İlk olarak, fs modülü require fonksiyonuyla projeye dahil edilir. Bu modül, dosya işlemleri yapmak için kullanılır.
fs.appendFile fonksiyonu, bir dosyaya içerik eklemek için kullanılır. İlk parametre olarak hedef dosyanın adını veya yolunu alır. 
Eğer dosya mevcut değilse, yeni bir dosya oluşturur. Eğer dosya zaten varsa, mevcut içeriğe yeni içeriği ekler.
İkinci parametre olarak eklenmek istenen içeriği alır. Bu örnekte, "Hello content!" metni eklenmek isteniyor.
Üçüncü parametre olarak bir geriçağırım işlevi alır. Bu işlev, dosya işlemi tamamlandığında çalıştırılır.
Eğer bir hata oluşursa, err parametresi dolu olur; aksi takdirde herhangi bir hata olmadığında err değeri null olur.
Eğer bir hata oluşursa, throw err ifadesi hata durumunu fırlatır ve programın çalışmasını durdurur. 
Hata oluşmadığında, "Saved!" metni console.log fonksiyonuyla konsola yazdırılır.*/
fs.appendFile('yenitxtoluştur.txt', 'İçerik Yazım', function(err) {
    if (err) throw err;
    console.log('Dosya Oluştu!');
});