// Arrow function özelliği fonksiyonları daha kolay yazmamızı ile beraber back-end alanında aynı işlevde kalmasını sağlar (fonskiyonlar arka planda oluşuyor)


// js ile bu şekilde fonksiyon tanımlayabiliyoruz

/* const merhaba = function() {
    console.log("merhaba");
}

merhaba(); */



// Arrow function ile yazılımı
// arka planda bu fonksiyonu dönüşür ve bu şekilde fonksiyonlarda bize kolaylık sağlar
/* const merhaba = () => {
    console.log("merhaba");
}

merhaba(); */

// parametre ile beraber kullanımı 
/* const merhaba = (firstName,lastName) => {
    console.log("merhaba",firstName,lastName);
}

merhaba("ahmet","camiş"); */

// tek satırda şu şekilde de kullanılabilir eğer tek parametre varsa parametreyi parantez içine almamıza gerek yok
/* const merhaba = firstName => console.log(firstName);
merhaba("muro"); */


// normal yazılımı
/* const cube = function(x) {
    return x * x * x;
}
console.log(cube(5)); */


// Arrow function yazılımı
const cube = x => x * x * x;    // tek bi işlem olduğundan return yazmaya gerek yok
console.log(cube(4));