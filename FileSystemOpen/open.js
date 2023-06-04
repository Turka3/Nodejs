var fs = require('fs');

/*İlk olarak, fs modülü require fonksiyonuyla projeye dahil edilir. 
Bu modül, dosya işlemleri yapmak için kullanılır.
fs.open fonksiyonu, bir dosyayı açmak veya oluşturmak için kullanılır.
İlk parametre olarak hedef dosyanın adını veya yolunu alır. İkinci parametre olarak dosya modunu belirtir. Bu örnekte, 'w' modu kullanılıyor, yani dosya yazma modunda açılacak veya oluşturulacak.
Üçüncü parametre olarak bir geriçağırım işlevi alır. 
Bu işlev, dosya işlemi tamamlandığında çalıştırılır. Eğer bir hata oluşursa, err parametresi dolu olur; aksi takdirde herhangi bir hata olmadığında err değeri null olur.
Eğer bir hata oluşursa, throw err ifadesi hata durumunu fırlatır ve programın çalışmasını durdurur. Hata oluşmadığında, "Saved!" metnini console.log fonksiyonuyla konsola yazdırır.
Sonuç olarak, bu kod, "mynewfile2.txt" adlı bir dosyayı yazma modunda açar veya oluşturur ve işlem başarılı olduğunda "Saved!" mesajını konsola yazdırır. Bu kod, dosyanın içeriğini yazmak için herhangi bir işlem yapmaz, sadece dosyayı açar veya oluşturur. İçeriği yazmak için başka işlemler yapmanız gerekebilir.*/
fs.open('mynewfile2.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log("Dosya Oluştu Kaydedildi")
});