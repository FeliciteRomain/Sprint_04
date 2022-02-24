// 1.
let note_score = prompt("Donnez une note entre 1 et 100");
var string_vide = "";
if (note_score != string_vide) {
  note_score = note_score * 1;

  switch (true) {
    case note_score >= 80 && note_score <= 100:
      console.log("Note de A");
      break;
    case note_score >= 70 && note_score <= 89:
      console.log("Note de B");
      break;
    case note_score >= 60 && note_score <= 69:
      console.log("Note de C");
      break;
    case note_score >= 50 && note_score <= 59:
      console.log("Note de D");
      break;
    case note_score >= 0 && note_score <= 49:
      console.log("Note de D");
      break;
    default:
      console.log("Ce numero ne fait pas parti du range");
  }
}

// 2.
let expr_saison = prompt("Saisir un mois de l'année");
if (expr_saison != string_vide) {
  switch (expr_saison) {
    case "septembre":
    case " octobre":
    case "novembre":
      console.log("Automne");
      break;
    case "décembre":
    case "janvier":
    case "février":
      console.log("Hiver");
      break;
    case "mars":
    case "avril":
    case "mai":
      console.log("Printemps");
      break;
    case "juin":
    case "juillet":
    case "août":
      console.log("Eté");
      break;

    default:
      console.log("Désolé ce mois n'existe pas !!!" + expr_saison + ".");
  }
}
