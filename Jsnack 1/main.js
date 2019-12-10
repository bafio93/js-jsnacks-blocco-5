var chili = parseInt(prompt("inserire peso della palla:"));
while (isNaN(chili) == true) {
    chili = parseInt(prompt("Inserisci nuovamente il peso della palla:"));
}
var oggetto = {
    "nome": "palla",
    "peso": chili,
}
console.log(oggetto);
