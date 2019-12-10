// Genero degli array contenenti zucchine.
// Definisco una funzione per generare misure casuali tra "min" e "max".
function genera_zucchine(min,max) {
    var casuale = Math.round(Math.random()*(max - min) + min);
    return casuale;
}
// Inizializzo due array vuoti, uno per zucchine sotto 15 cm, l'altro da lì in poi.
var array_zucchine_piccole = [];
var array_zucchine_grosse = [];
// Inizializzo anche il peso degli array, così ciclo una volta sola!
var peso_piccole = 0;
var peso_grosse = 0;
// Devo generare 10 oggetti -> Ciclo for per 10 volte. Creo un oggetto di riferimento.
var zucchina_corrente = {
    "peso":0,
    "lunghezza":0
};
for (var i = 0; i < 10; i++) {
    // Per ogni oggetto genero un peso e una misura casuale.
    // Supponiamo che il peso vari tra 1 e 3 chili.
    zucchina_corrente.peso = genera_zucchine(1,3);
    // Supponiamo che la lunghezza vari tra 10 e 20 chili.
    zucchina_corrente.lunghezza = genera_zucchine(10,20);
    // IF per valutare la lunghezza della zucchina
    if (zucchina_corrente.lunghezza >= 15) {
        peso_grosse += zucchina_corrente.peso;
        array_zucchine_grosse.push(zucchina_corrente);
        console.log("Inserito tra le zucchine GROSSE un elemento di peso: "+zucchina_corrente.peso+". Misurava: "+zucchina_corrente.lunghezza+" cm.");
    } else {
        peso_piccole += zucchina_corrente.peso;
        array_zucchine_piccole.push(zucchina_corrente);
        console.log("Inserito tra le zucchine piccole un elemento di peso: "+zucchina_corrente.peso+". Misurava: "+zucchina_corrente.lunghezza+" cm.");
    }
}
// Per verificare il peso delle zucchine:
console.log("Peso di tutte le zucchine GROSSE: "+peso_grosse);
console.log("Peso di tutte le zucchine piccole: "+peso_piccole);
// Già che sono nel ciclo for, genero subito due array diversi (così ciclo una volta sola).
