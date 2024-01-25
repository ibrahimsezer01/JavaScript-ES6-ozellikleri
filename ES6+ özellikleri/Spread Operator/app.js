// Spread Operator

const langs = ["Phyton","C++","Java","Php"];

// console.log(langs); // dizileri alt alta sıralar 
// console.log(langs[0],langs[1],langs[2],langs[3]); // bu şekilde aralarında bir boşluk olacak şekilde yan yana hizalar


// console.log(...langs); // bu şekilde spread operatoru ile ksıa bi halde yazabilriz

/* 
const langs2 = ["Javascript","C#",langs[0],langs[1],langs[2],langs[3]];
const langs3 = ["Javascript","C#",...langs];
console.log(langs2); 
*/


/* 
const number = [1,2,3,4,5,6,7,8,9];
// const [a,b] = number; // sonuc 1 ve 2
const [a,b,...c] = number;

console.log(a,b);
console.log(c); 
*/


// ornek kullanımı

const addNumber = (a,b,c) => console.log(a + b + c);
const number = [100,200,300];
// addNumber(number[0],number[1],number[2]);
addNumber(...number);