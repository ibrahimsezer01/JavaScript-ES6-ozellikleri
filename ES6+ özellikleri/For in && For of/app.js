// For in ile array'a benzeyen veya nodeList'e benzeyen veriler üzerinde gezinebiliriz

const person = {
    name: "İbrahim Sezer",
    age: 21,
    salary: 10
};

const langs = ["Phyton","Java","C++","Php"];
const name = "İbrahim";


// For in obje üzeridnde kullanımı

// For in döngüsü objeler üzerinde gezinme sağlar
// for(let prop in person) {
//     console.log(prop,person[prop]);     // her prop için karşılık gelen değeri almak için person[prop] yazabiliriz
// }



// For in dizi üzerinde kullanımı

// for(let index in langs) {
//     console.log(index,langs[index]);    // Dizide bulunan değerlerin index numarasını, karşılık gelen değerleri de langs[index] ile alabiliriz
// }



// For in string üzerinde kullanımı

// for(let index in name) {
//     console.log(index,name[index]);     // String içerisindeki her bir elemanın index numarasını ve index numarasına karşılık gelen değeri bu şekilde alabiliriz
// }




// For of obje üzerinde kullanımı (çalışmaz)

// for(let value of person) {  // bu bize typeError hatası döndürür
//     console.log(value);     // obje üzerinde for of ile gezinme sağlayamayız
// }


// For of dizi üzerinde kullanımı

// for(let value of langs) {                // yine bize aynı şekilde elemanları yazdırır
//     console.log(value);    
// }


// For of string üzerinde kullanımı 

// for(let character of name) {                // her bir karakteri bize yazdırır
//     console.log(character);
// }