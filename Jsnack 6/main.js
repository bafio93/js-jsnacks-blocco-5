// Creiamo un array di varietà di zucchine:
var zucchine = [
    {
        "varietà":"varietà_1",
        "peso":5,
        "lunghezza":10
    },
    {
        "varietà":"varietà_2",
        "peso":7,
        "lunghezza":12
    },
    {
        "varietà":"varietà_3",
        "peso":3,
        "lunghezza":8
    },
    {
        "varietà":"varietà_4",
        "peso":4,
        "lunghezza":9
    },
    {
        "varietà":"varietà_5",
        "peso":5,
        "lunghezza":10
    },
    {
        "varietà":"varietà_6",
        "peso":8,
        "lunghezza":11
    },
    {
        "varietà":"varietà_7",
        "peso":1,
        "lunghezza":12
    },
    {
        "varietà":"varietà_8",
        "peso":2,
        "lunghezza":13
    },
    {
        "varietà":"varietà_9",
        "peso":6,
        "lunghezza":18
    },
    {
        "varietà":"varietà_10",
        "peso":8,
        "lunghezza":8
    }
];
// NOTA: POTEVO INSERIRE DEI NUMERI CASUALI NELLE VARIABILI TRAMITE IL CICLO FOR SOTTO ESEGUITO
// Ciclo l'array e calcolo il peso totale:
var peso_complessivo = 0;
for (var i = 0; i < zucchine.length; i++) {
    peso_complessivo += zucchine[i].peso;
    console.log("Il peso della zucchina analizzata ora è: "+zucchine[i].peso+ ". Il peso totale è diventato: "+peso_complessivo+".");
}
