// 1 // ---
var date = new Date();
var annee = date.getFullYear();
var mois = addZero(date.getMonth() + 1);
var jour = addZero(date.getDay());
var heure = addZero(date.getHours());
var minutes = addZero(date.getMinutes());

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// YYYY-MM-DD HH:mm
var date_entiere1 =
  annee + "-" + mois + "-" + jour + " " + heure + ":" + minutes;
console.log(date_entiere1);

// 2 // ---
let text1 = prompt("Saisir un mois de l'année");
var string_vide = "";
let expr_mois = text1.toLowerCase();
if (expr_mois != string_vide) {
  switch (expr_mois) {
    case "janvier":
    case " mars":
    case "mai":
    case " juilet":
    case "aout":
    case " septembre":
    case "décembre":
      console.log(expr_mois + " a 31 jours.");
      break;
    case "avril":
    case "juin":
    case "septembre":
    case "novembre":
      console.log(expr_mois + " a 30 jours.");
      break;
    case "fevrier":
      console.log(expr_mois + " a 28 jours.");
      break;
    default:
      console.log("Désolé ce mois n'existe pas !!!" + expr_mois + ".");
  }
}
