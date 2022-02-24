// 1. // ---
var tab1 = [];
// 2. // ---
var tab2 = ["un", "deux", "trois", "quatre", "cinq"];
// 3. // ---
var taille_tab = tab2.length;
// 4. // ---
console.log(typeof taille_tab);
console.log("Taille du tableau:", tab2.length);
console.log("Premier Elmt du tbl:", tab2[0]);
console.log("Element du milieu:", tab2[2]);
// 5. // ---
var mixedDataTypes = [
  "Michel",
  36,
  "Celibataire",
  "Lyon",
  "voiture",
  "peche",
  true,
];
var taille_mixed = mixedDataTypes.length;
console.log("Mixed taille tab:", taille_mixed);

// 6. // ---
var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. // ---
console.log("IT Companies:", itCompanies);

// 8. // ---
var taille_tab_IT = itCompanies.length;
console.log("Nbre d'element:", taille_tab_IT);
let ent_milieu = taille_tab_IT / 2;
//console.log(ent_milieu);
var moitie_tabIT = Math.round(ent_milieu);
//console.log(moitie_tabIT);

// 9. // ---
console.log("Premiere Entreprise", itCompanies[0]);
console.log("Entreprise du milieu", itCompanies[moitie_tabIT]);
console.log("Derniere entreprise", itCompanies[taille_tab_IT - 1]);
var majIT = "";

// 11. // ---
for (let i = 0; i < taille_tab_IT; i++) {
  console.log(itCompanies[i].toUpperCase());
}

// 12. // ---
//for (let i = 0; i < taille_tab_IT; i++) {
//}
console.log(
  itCompanies[0] +
    ", " +
    itCompanies[1] +
    ", " +
    itCompanies[2] +
    ", " +
    itCompanies[3] +
    ", " +
    itCompanies[4] +
    ", " +
    itCompanies[5] +
    " et " +
    itCompanies[6] +
    " sont de grandes entreprises d'IT"
);

// 13. // ---
// Saisie du nom de la l'entreprise
let text1 = prompt("Saisie du nom de l'entreprise");
let text_vide = "";
let j = 0;
if (text1 != text_vide) {
  for (i = 0; i < taille_tab_IT; i++) {
    if (itCompanies[i] == text1) {
      j++;
      console.log(itCompanies[i]);
    }
  }
  if (j == 0) {
    console.log("une société introuvable");
  }
}

// 14. // ---

// 15. // ---
console.log("LE trie du tab itCompanies:", itCompanies.sort());

// 16. // ---
console.log(itCompanies.reverse());

//17. // ---
console.log("slice 3 premiers:", itCompanies.slice(0, 3));

// 18. // ---
console.log("slice 3 deniers:", itCompanies.slice(-3));

// 19. // ---
itCompanies = itCompanies_init;
console.log(
  "Recuperer le milieu du tableau avec slice",
  itCompanies.slice(3, -3)
); // Reponse "Apple"

// 20. // ---
console.log(itCompanies);
console.log(itCompanies.splice(1, taille_tab_IT));

// 21. // ---
itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log("Element du milieu", itCompanies.splice(3, 1));
console.log("Liste sans l'élement du milieu", itCompanies);

// 22. // ---
itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
var tailleTab = itCompanies.length;
taille_tab = taille_tab * 1; // typeof Number
console.log("Dernier element supprimé:", itCompanies.splice(taille_tab + 1, 1));
console.log("itCompanies sans le dernier elements:", itCompanies);
console.log(itCompanies);

// 23
itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(
  "Les elements supprimé par splice",
  itCompanies.splice(0, taille_tab + 2)
);
console.log("Le contenu de itCompanies", itCompanies);
