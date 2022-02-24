// 1. // ---
console.log(countries);
console.log(webTechs);

// 2. // ---
var words1 = [];
var words2 = [];
var words = [];
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, VueJs, Laravel.";
//console.log(text);
words1 = text.split(" ");
//console.log(words1);
let result;
let result2;
//Supprimer les ","
for (let i = 0; i < words1.length; i++) {
  result = words1[i].replace(",", "");
  words2[i] = result;
}
//Supprimer les "."
for (let j = 0; j < words1.length; j++) {
  result2 = words2[j].replace(".", "");
  words[j] = result2;
}
console.log(words);
console.log(words.length);

// 3. // ---
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
let verif = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i] == "Meat") {
    verif++;
  }
}
if (verif == 0) {
  shoppingCart.push("Meat");
}
console.log(shoppingCart);

//
let verif1 = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i] == "Sugar") {
    verif1++;
  }
}
if (verif1 == 0) {
  shoppingCart.unshift("Sugar");
}
console.log(shoppingCart);

//
var miel = "Honey";
for (var k = shoppingCart.length - 1; k >= 0; k--) {
  if (shoppingCart[k] === miel) {
    shoppingCart.splice(k, 1);
    break;
  }
}
console.log("Liste sans Honey", shoppingCart);

//
var ancien_the = "Tea";
var nv_the = "Green Tea";
for (let l = 0; l < shoppingCart.length; l++) {
  if (shoppingCart[l] == ancien_the) {
    console.log(shoppingCart[l]);
    shoppingCart[l] = shoppingCart[l].replace("Tea", "Green Tea");
  }
}
console.log(shoppingCart);

// 4. // ---
var maroc = "Morocco";
let test_maroc = 0;
for (let m = 0; m < countries.length; m++) {
  if (countries[m] == maroc) {
    countries[m] = countries[m].toUpperCase();
    break;
  } else {
    test_maroc++;
  }
}
if (countries.length == test_maroc) {
  countries.push(maroc);
}
console.log(countries);

// 5. // ---
var saas_verif = "Saas";
let saas_cpt = 0;
for (let n = 0; n < webTechs.length; n++) {
  if (webTechs[n] == saas_verif) {
    console.log(webTechs[i] + "est un prépocesseur CSS");
  } else {
    saas_cpt++;
  }
}
if (webTechs.length == saas_cpt) {
  webTechs.push(saas_verif);
}
console.log(webTechs);

//6. // ---
const frontEnd = ["HTML", "CSS", "JS", "VueJs", "VueX"];
const backEnd = ["Node", "Express", "MongoDB"];
var fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
