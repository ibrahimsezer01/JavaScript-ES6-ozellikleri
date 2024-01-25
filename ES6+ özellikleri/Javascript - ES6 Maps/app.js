// Mapler => Key(Anahtar) => Value(Değer)
// Her key'in karşılığında bir value (değer) vardır
// Map'in en iyi özelliği içinde belirlenen key'lerin herhangi bir veri tipi özelliğinde olabiliyor olması
// Örneğin objelerimizin tanımlarken içinde ki key'ler bir number, function vs olamıyor du fakat Map özelliği ile bunu yapabiliyor olacaz

// let myMap = new Map();  // Oluşturma

// console.log(myMap);

// const key1 = "İbrahim";
// const key2 = {a:20,b:10};
// const key3 = () => 2;

// // Set Metodu
// myMap.set(key1,"String Değer");     // Değer ataması
// myMap.set(key2,"Object Değer");     // Değer ataması
// myMap.set(key3,"Funtion Değer");    // Değer ataması

// // Get Metodu
// console.log(myMap.get(key1));       // myMap içinde key1'e karşılık j-gelen değeri alabiliyoruz
// console.log(myMap.get(key2));       // myMap içinde key2'e karşılık j-gelen değeri alabiliyoruz
// console.log(myMap.get(key3));       // myMap içinde key3'e karşılık j-gelen değeri alabiliyoruz

// console.log(myMap);                 // Her birini getirir
// console.log(myMap.size);            // İçerisinde kaç tane key olduğunu bize belirtir


// const cities = new Map();

// cities.set("Ankara",6);
// cities.set("Nevşehir",50);
// cities.set("Adana",1);

// ForEach 

// cities.forEach(function(value,key) {
//     console.log(key,value);
// });

// // For of

// for(let value of cities) {
//     console.log(value);                 // Burada görüldüğü gibi her bir value karşılığında array döndüğünü görüyoruz
// }

// for(let [value,key] of cities) {        // Burada Destructing yapısı oluşturduk
//     console.log(key,value);             // bu şekilde bize verileri dizi halinde olmadan getirir
// }


// Map Keys

// for(let key of cities.keys()) {         // Bize array'e benzer bir obje döndürecek ve tek tek keyler üzerinde gezinebiliriz 
//     console.log(key);
// }

// for(let value of cities.values()) {     // Bize array'e benzer bir obje döndürecek ve tek tek value üzerinde gezinebiliriz 
//     console.log(value);
// }



// // Arrayler ile map oluşturma
// const array = [["key1","value1"],["key2","value2"]];    // iç içe bir dizi
// const newMap = new Map(array);                          // her bir dizi elemanını içerisine ekler

// console.log(newMap);
// // key1'e karşılık gelen değer value1 && key2'e karşılık gelen değer value2 şeklinde karşımıza çıkar



const cities = new Map();

cities.set("Ankara",6);
cities.set("Nevşehir",50);
cities.set("Adana",1);

const array = Array.from(cities);   // cities üzerinden array değişkeni için bir dizi oluşturduk
console.log(array);                 // bize bir dizi içerisinde 3 adet dizi gelir "[ [ 'Ankara', 6 ], [ 'Nevşehir', 50 ], [ 'Adana', 1 ] ]" 