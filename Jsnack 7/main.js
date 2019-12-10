// Chiediamo all'utente una stringa:
var stringa = prompt("Inserisci una stringa:");
console.log(stringa);
var nuova = "";
// Prendiamo il primo elemento della stringa e pushiamolo nella stringa vuota. Dovremo partire dalla fine!
for (var i = (stringa.length - 1); i >= 0; i--) {
    nuova += stringa[i];
}
console.log(nuova);
alert("La parola "+stringa+" invertita è: "+nuova+".")
