//---1
let defi = "Pratiquer les algorythmes en JavaScript";

//---2
console.log(defi);

//---3
console.log(defi.length);

//---4
let upper = defi.toUpperCase();
console.log(upper);

//---5
let low = defi.toLowerCase();
console.log(low);

//----6
console.log(defi.substring(-1, 9));

//---7

//---8
console.log(defi.includes("Script"));

//----9
let string = "string";
console.log(string.split(""));

//---10
let phrase = "10 jour en JavaScript";
console.log(phrase.split(" "));

//---11
let site = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(site.split(","));

//----12
console.log(phrase.replace("JavaScript", "PHP"));

//----13
console.log(phrase.charAt(15));

//----14
console.log(phrase.charCodeAt("J"));

//-----15
console.log(phrase.indexOf("a"));

//-----16
console.log(phrase.lastIndexOf("a"));
let conj =
  "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";

//---17
console.log(conj.indexOf("parceque"));

//---18
console.log(conj.lastIndexOf("parceque"));

//---19
console.log(conj.search("parceque"));

//----20
console.log(conj.trim());

//----21
console.log(conj.startsWith("Vous"));

//----22
console.log(conj.endsWith("tion"));

//----23
console.log(conj.match(/a/));

//----24
let java1 = "10 jour en";
let java2 = "JavaScript";
let java3 = java1.concat(" ", java2);
console.log(java3);

//----25
console.log(phrase.repeat(2));
