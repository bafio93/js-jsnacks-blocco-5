// Sperimentiamo con funzioni ed array.
function somma_array_tre([a,b,c],[d,e,f]) {
    // Questa funzione lavora soltanto con array della stessa lunghezza -> troppo "statica"
    var sum = [(a+d),(b+e),(c+f)];
    return sum;
}
var esempio_primo = somma_array_tre([0,1,2],["aglio","bietola","cardamomo"]);
// console.log(esempio_primo);
// Raffiniamo l'esempio aggiungendo la possibilità di introdurre array di lunghezze diverse.
function doppio_array(a) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = a[i]*2;
    }
    return b;
}
// In questo caso posso modificare la dimensione del vettore in ingresso a mio piacimento.
var esempio_secondo = doppio_array([1,2,3,4,5]);
// console.log(esempio_secondo);

// EFFETIVA ESECUZIONE DELLA CONSEGNA

// Introduciamo una funzione che confronti due array e li concateni.
function concatena_array(a,b){
    var lunghezza_a = a.length;
    console.log(lunghezza_a);
    var lunghezza_b = b.length;
    console.log(lunghezza_b);
    var array = [];
    if (lunghezza_a > lunghezza_b) {
        for (var i = 0; i < b.length; i++) {
            array[i] = a[i]+b[i];
        }
        for (var j = b.length; j < a.length; j++) {
            array[j] = a[j];
        }
    }
    else {
        for (var i = 0; i < a.length; i++) {
            array[i] = a[i]+b[i];
        }
        for (var j = a.length; j < b.length; j++) {
            array[j] = b[j];
        }
    }
    return array;
}
// Soluzione non elegante, ma funzionale!
var esempio_terzo = concatena_array([10,20,30,40,50,60,70,80,90],[1,2,3,4,5]);
console.log(esempio_terzo);
