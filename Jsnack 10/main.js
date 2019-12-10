// Creo una funzione che mi prenda elementi dall'array compresi tra i due indici inseriti.
function array_cropper(array,min,max){
    var array_croppato = [];
    for (var i = min; i <= max; i++) {
        array_croppato.push(array[i]);
    }
    return array_croppato
}
// Generiamo un array tramite prompt. Utilizziamo un flag per uscire dal ciclo di crezione dell'array.
var array_inserito = [];
var flag_array = 0;
while (flag_array == 0) {
    var corrente = prompt("Inserisci un nuovo elemento dell'array, oppure scrivi ESC per terminare la costruzione dell'array. (Finora hai inserito: "+array_inserito+" )");
    if (corrente == "ESC") {
        flag_array = 1;
    } else {
        array_inserito.push(corrente);
    }
}
console.log(array_inserito);
// Ora chiediamo all'utente di inserire due numeri compresi tra 0 e il massimo della lunghezza dell'array inserito:
var max_consentito = array_inserito.length - 1;
// Facciamo due cicli di controllo per l'input dell'utente:
var min = parseInt(prompt("Inserisci l'indice più basso. (Deve andare da 0 a: "+max_consentito+".)"));
while ((isNaN(min))||(min>=max_consentito)) {
    var min = parseInt(prompt("Inserisci l'indice più basso. (Deve andare da 0 a: "+max_consentito+".)"));
}
var max = parseInt(prompt("Inserisci l'indice più alto. (Deve andare da "+min+" a: "+max_consentito+".)"));
while ((isNaN(max))||(min>=max)) {
    var max = parseInt(prompt("Inserisci l'indice più alto. (Deve andare da "+min+" a: "+max_consentito+".)"));
}
// Diamo il tutto in pasto alla funzione:
var risultato = array_cropper(array_inserito,min,max);
// Stampiamo a schermo:
alert("Vettore inserito: "+array_inserito+". Ecco il nuovo vettore: "+risultato+".");
// Si poteva fare con la funzione di JS slice()?
function slice_test(array,min,max){
    var array_new = array.slice(min,(max+1));
    return array_new;
}
var risultato_due = slice_test(array_inserito,min,max);
alert("Vettore inserito: "+array_inserito+". Ecco il nuovo vettore (secondo metodo!): "+risultato_due+".");
