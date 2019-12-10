// Creiamo un oggetto contenente i dati del problema:
var dati = {
        "base":3,
        "altezza":4
    };
console.log(dati);
// Otteniamo perimetro e area del triangolo rettangolo:
var area = dati.base * dati.altezza / 2;
console.log("area = " +area);
var ipotenusa = Math.sqrt(Math.pow(dati.base,2)+Math.pow(dati.altezza,2));
console.log("ipotenusa = " +ipotenusa);
var perimetro = dati.base + dati.altezza + ipotenusa;
console.log("perimetro = " +perimetro);
