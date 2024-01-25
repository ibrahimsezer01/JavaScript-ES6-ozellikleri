// Let ve Const javaScript'e ES6 ile eklenen değişken tanımlama anahtarlarıdır

// Let ile tanımlanan değişken, blok kapsamında (if, for, while gibi) bulunur ve değişkenin tanımlandığı blok dışına çıkmaz.

// if(true) {
//     let x = 0;          // let anahtarı ile sadece if içinde kullanılmak üzere değişken tanımlanmıştır
//     console.log(x);
// }

// console.log(x);      // burada x değişkenini çağırmaya çalıştığımız da değişken bulunamadı diye bir hata alırız


// Const ile let değişkeni birbirlerine benzerler, ancak sadece bir kez değer atama şansımız var. Yani değer bir kez atanmışsa, sonradan değiştirilemez.

// const x = 10;   // oluşturulduğu gibi değer atamamız gerek, daha sonradan bunu yapamayız ve beraberinde hata alırız

// x = 20;         // bu şekilde çalıştırdığımızda karşımıza hata gelir, tekrardan bir değer ataması yapamayız


// Bu kod satırında ki hata nedir
// for(const i = 0; i < 10; i++) {
//     console.log(i);
// }





// Peki 'var' nedir, hangi alanlarda kullanılır

// 'var' javascript'in değişken tanımlama anahtarıdır (ES6 özellikleri ile bağlantısı yoktur)

// var ile tanımlanan değişkenler let ve const gibi block kapsamına girmez

var z = 11;

if(true){
    console.log(z);     // burada z değişkeninin yazıldığını görürüz
}

