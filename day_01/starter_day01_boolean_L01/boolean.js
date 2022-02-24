//======= Booleans & Dates lev 01 ========
//1---
let firstName = "Romain";
let lastName = "Felicite";
let country = "France";
let city = "Saint-Denis";
let age = "27";

//2---
console.log(typeof 10);
console.log("10" === 10);
//3---
console.log(parseInt(9.8));
console.log("10" === 10);
//4---
let true1 = 4 > 3;
let true2 = 4 > 1;
let true3 = 4 > 2;
console.log(true1);
console.log(true2);
console.log(true3);

let faux1 = 4 > 5;
let faux2 = 3 > 5;
let faux3 = 2 > 5;
console.log(faux1);
console.log(faux2);
console.log(faux3);

//5---
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // true
console.log(4 == "4"); // false
console.log(4 === "4"); // false
let python = "python";
console.log((python.length = 10));
let jargon = "jargon";
console.log(jargon.length);

let pj = python != jargon;
console.log(pj);
//6---
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //false
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); //false
//7---
const d = new Date();
let year = d.getFullYear();
console.log(year);
let mois = d.getMonth() + 1;
console.log(mois);
let date = d.getDate();
console.log(date);
let jour = d.getDay();
console.log(jour);
let heure = d.getHours();
console.log(heure);
let minutes = d.getMinutes();
console.log(minutes);
