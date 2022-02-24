// 1 // ---
let a = 4;
let b = 3;
if (a > b) {
  console.log("a est superieur à b");
} else {
  console.log("a est inférieur à b");
}

// 2 // ---
let nombres = prompt("Enter un nombre:");
var string_vide2 = "";
if (nombres != string_vide2) {
  Number(nombres);
  if (nombres % 2 === 0) {
    console.log(nombres + " est un nombre pair");
    document.getElementById("demo").innerHTML = nombres + " est un nombre pair";
  } else {
    console.log(nombres + " est un nombre impair");
    document.getElementById("demo").innerHTML =
      nombres + " est un nombre impair";
  }
}
