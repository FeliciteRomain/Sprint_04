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
