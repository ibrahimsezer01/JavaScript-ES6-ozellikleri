// Primitive veri tipleri
// let a = "İbrahim";
// let b = "İbrahim";

// if(a === b) {
//     // Primitive veri tipleri için değerler kıyaslanmaktadır
//     console.log("eşit");
// }


// // Referans veri tipleri
// let array1 = [1,2,3,4,5];
// let array2 = [1,2,3,4,5];

// if(array1 === array2) {
//     // Eşitlik değerlerine bakmaksızın bu referansların bellekte aynı değeri kapladığına bakılır, bir nevi aynı adreste olup olmadığını kontrol ederiz
//     console.log("eşit değil");
// }



// const person1 = {
//     name: "İbrahim",
//     age: 21
// };

// const person2 = {
//     name: "İbrahim",
//     age: 21
// };

// if(person1 === person2) {
//     // Bu da bir referans veri tipi olduğu aşit sonucu alamıyoruz
//     console.log("eşit değil");
// }


const cities = new Map();
const key = [1,2,3];

cities.set("Adana",1);
cities.set([1,2,3],"Array");
cities.set(key,"Array");

// console.log(cities.get("Adana"));   // Map'in içinde arama yapar eğer Adana key'i varsa bize döndürür ve pritimitve veri tipi olduğu için çalışır
// console.log(cities.get([1,2,3]));   // Bize undefined olarak döner nedeni ise bunları eşitlikle kıyasladığı için bulamıyor
console.log(cities.get(key));       // Oluşturduğumuz key bellekte bir yeri gösteriyor

// Referans veri tipleri ile primitive veri tipleri arasında ki farkı bilmek bazı alanlarda hayat kurtarır...  :)