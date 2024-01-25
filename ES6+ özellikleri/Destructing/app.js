// Destructing bizim arraylarimizin içinden veya objelerimizin içinden değerleri aldığımız kısa bir yol

// bu eski yöntemdir pek kullanılmıyor
/* let number1,number2;

let arr = [100,200,300,400];

number1 = arr[0];
number2 = arr[1];

console.log(number1,number2); */




// Destruction ile kullanımı 

// let number1,number2;

/* let arr = [100,200,300,400];

// birinci değere dizide ki ilk değer atanır sırasıyla değişken sayısı kadar devam eder
let [number1,number2] = arr;    // böyle de yapılabilir

console.log(number1,number2); */




// Obje Destruction

/* let numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

let {number1,number2,number3} = numbers;    // 3 değerde undefined olarak karşımıza gelir değerleri alamazlar bu şekilde
// sebebi biz bunların isimlerini farklı yaptık {number1,number2,number3}, burada objelerin anahtar değerine bakıyor

console.log(number1,number2,number3); */

// doğru şekilde kullanımı 

/* let numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

// let {a,c,e} = numbers; // burada değişkenleri a,c,e şeklinde kullanmamıza gerek yok değiştirme şansımız var aşşada yazdığım gibi
let {a:number1,c:number2,e:number3} = numbers;  // burada değişken isimlerimiz {number1,number2,number3} şeklinde oldu
console.log(number1,number2,number3);   
 */



/* const getLangs = () => ["Phyton","Java","C++"];

const [lang1,lang2,lang3] = getLangs();
console.log(lang1,lang2,lang3); */


const person = {
    name:"ibrahim sezer",
    year:2002,
    salary:"10TL",
    showInfos : () => console.log("Bilgisayar gösteriliyor...")

}

const {name:isim, year:yil, salary:maas, showInfos:BilgieleriGoster} = person;
console.log(isim, yil, maas);
BilgieleriGoster();