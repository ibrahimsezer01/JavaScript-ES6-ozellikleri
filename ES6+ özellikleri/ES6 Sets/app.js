// Sets - Kümeler

const key = [1,2,3];
const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Mustafa");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:2,b:1});
myset.add(key);

// İçerisinde birbiriyle aynı olan değeri bulundurmaz, değerleri tekrarlamaz


// const myset2 = new Set([100,100,3.14,"İbrahim",true,[1,3,3],{a:2,b:1},[1,3,3]]);
// Değeri birbiriyle aynı olan diziler tanımlanabilir fakat dizilerin barındığı adres birbirlerinden farklı olduğu için burada eşitlik sağlanamıyors

// console.log(myset);
// console.log(myset2);


// Set işlenleri
myset.delete("İbrahim");    // Veri silme için kullanılır, İbrahim verisini silme

// console.log(myset);


// Has (true-false) Metodu

// has metodu içerisine yazılan değeri set içinde arar eğer o değer varsa true yoksa false olarak döner
// console.log(myset.has("İbrahim"));
// console.log(myset.has([1,2,3]));        // False değeri verir, detaylı bilgi için Referans Tipleri dersine bakabilirsiniz
// console.log(myset.has({a:2,b:1}));      // False değeri verir, detaylı bilgi için Referans Tipleri dersine bakabilirsinizw
// console.log(myset.has(100));
// console.log(myset.has(key));



// ForEach ile değerleri getirmek

// myset.forEach(function(value){       // istersek burda for of kullanabiliriz
//     console.log(value);
// })



// Array oluşturma

const array = Array.from(myset);    // my set içinde ki değerleri array değişkeninin içine alıp dizi oluşturma

console.log(array);