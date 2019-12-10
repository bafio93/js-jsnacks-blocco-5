// Creiamo un array di squadre di calcio (che sono oggetti):
// Inizializziamo punti fatti e falli subiti a 0.
var squadre = [
    {
        "nome":"atalanta",
        "punti":0,
        "falli":0
    },
    {
        "nome":"napoli",
        "punti":0,
        "falli":0
    },
    {
        "nome":"fiorentina",
        "punti":0,
        "falli":0
    },
    {
        "nome":"palermo",
        "punti":0,
        "falli":0
    },
];
console.log(squadre);
// Settiamo i falli e i punti ad un valore randomico.
// Genero funzione randomica: genera numeri casuali da 0 a 9 (per falli)
function rand_falli() {
    var numero = Math.floor(Math.random()*10);
    return numero;
}
// Genero funzione randomica: genera numeri casuali: 0, 1 oppure 3 (per punti)
function rand_punti() {
    var numero = Math.floor(Math.random()*3);
    if (numero == 2) {
        numero = 3;
    }
    return numero;
}
// Ciclo l'array e popolo il tutto:
for (var i = 0; i < squadre.length; i++) {
    squadre[i].punti = rand_punti();
    squadre[i].falli = rand_falli();
    console.log(squadre[i].nome + " ha totalizzato " + squadre[i].punti + " punti e ha subito " + squadre[i].falli + " falli. ");
}
