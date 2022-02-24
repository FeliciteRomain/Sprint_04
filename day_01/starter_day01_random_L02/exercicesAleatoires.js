// 1 // ---
let myAge = 250;
let yourAge = 25;
console.log("J'ai " + (myAge - yourAge) + " ans de plus que toi.");

// 2 // ---
let age_person = prompt("Année de naissance");
var date = new Date();
var m = date.getFullYear();
var majorite = m - 18;
console.log("Majorite", majorite);

var string_vide1 = "";
if (age_person != string_vide1) {
  if (age_person <= majorite) {
    var calk_age = m - age_person;
    console.log(
      "vous avez " + calk_age + " ans. Vous êtes autorisé de conduire."
    );
    document.getElementById("demo").innerHTML = "En voiture !!!";
  } else {
    document.getElementById("demo").innerHTML =
      "Attendez encore quelques années avant de conduire";

    var calk_age2 = m - age_person;
    var diff = age_person - majorite;

    console.log(
      "Vous avez " +
        calk_age2 +
        " ans. Vous serez autorisé à conduire après " +
        diff +
        " ans."
    );
    console.log("Encore trop jeune");
  }
}

// 3 // ---
let age_now = prompt("Nombre d'année- Age");
var days_1 = 365;
var hourByDay = 24;
var secbyhour = 3600;
var secInOnYear = days_1 * hourByDay * secbyhour;
var string_vide = "";

if (age_now != string_vide) {
  var nbSecInLife = age_now * secInOnYear;
  document.getElementById("demo1").innerHTML =
    "Vous avez vécu " + nbSecInLife + " secs";
  console.log("Vous avez vécu " + nbSecInLife + " secs");
}

// 4 // ---
var annee = date.getFullYear();
console.log(annee);
var mois = addZero(date.getMonth() + 1);
var jour = addZero(date.getDay());
var heure = addZero(date.getHours());
var minutes = addZero(date.getMinutes());
var secondes = addZero(date.getSeconds());

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// YYYY-MM-DD HH:mm
var date_entiere1 =
  annee + "-" + mois + "-" + jour + " " + heure + ":" + minutes;
// DD-MM-YYYY HH:mm
var date_entiere2 =
  jour + "-" + mois + "-" + annee + " " + heure + ":" + minutes;
// DD/MM/YYYY HH:mm
var date_entiere3 =
  jour + "/" + mois + "/" + annee + " " + heure + ":" + minutes;

console.log(date_entiere1);
console.log(date_entiere2);
console.log(date_entiere3);
