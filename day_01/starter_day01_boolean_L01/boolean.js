//1----
let firstName = "Romain";
let lastName = "Devine";
let country = "France";
let city = "Saint-Denis";
let isMarried = false; 
let year = 27;

//2---
console.log(typeof 10);
console.log("10" === 10);

//3--- 
console.log(parseInt(9.8));
console.log("10" === 10);

//4--- 
let cas1 = 15 > 10;
let cas2 = 4 < 10;
let cas3 = 6 < 10;
console.log(cas1);
console.log(cas2);
console.log(cas3);

let cas4 = 2 > 6;
let cas5 = 3 > 5;
let cas6 = 1 > 4;
console.log(cas4);
console.log(cas5);
console.log(cas6);

//5--- 
console.log(4 > 3); /*true*/
console.log(4 >= 3); /*true*/
console.log(4 < 3); /*false*/
console.log(4 <= 3); /*false*/
console.log(4 == 4); /*true*/
console.log(4 === 4); /*true*/
console.log(4 != 4); /*false*/
console.log(4 !== 4); /*false*/
console.log(4 != "4"); /*true*/
console.log(4 == "4"); /*true*/
console.log(4 === "4"); /*false*/

let pyth = "python";
console.log((pyth.length = 10));
let jar = "jargon";
console.log(jar.length);

let falseDeclaration = pyth > jar;
console.log(falseDeclaration);

//6--- 
console.log(4 > 3 && 10 < 12); /*true*/
console.log(4 > 3 && 10 > 12); /*true*/
console.log(4 > 3 || 10 < 12); /*true*/
console.log(4 > 3 || 10 > 12); /*true*/
console.log(!(4 > 3)); /*true*/
console.log(!(4 < 3)); /*true*/
console.log(!false); /*true*/
console.log(!(4 > 3 && 10 < 12)); /*true*/
console.log(!(4 > 3 && 10 > 12)); /*true*/
console.log(!(4 === "4")); /*true*/

//7--- 
const d = new Date(); 
let year = d.getFullYear(); 
console.log(year)
let mois = d.getMonth() + 1;
console.log(mois)
let date = d.getDate();
console.log(date)
let jour = d.getDay();
console.log(jour)
let heure = d.getHours();
console.log(heure)
let minute = d.getMinutes();
console.log(minute)

maDate = new Date("January 1, 1970 00:00:00");
  nSec = maDate.getSeconds();

  alert("maDate = "+maDate+"\ngetSeconds = "+nSec)
console.log(maDate)
//---