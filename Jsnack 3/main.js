// Creiamo un array di oggetti:
var collezione = [
    {
        "nome":"diplodoco",
        "peso":30
    },
    {
        "nome":"stegosandro",
        "peso":18
    },
    {
        "nome":"velociraptor",
        "peso":15
    },
    {
        "nome":"tirannosauro",
        "peso":25
    }
]
console.log(collezione);
// Selezioniamo la bici con minor peso:
var peso_corrente = collezione[0].peso;
var nome_corrente = "";
for (var i = 0; i < collezione.length; i++) {
    if (collezione[i].peso < peso_corrente) {
        peso_corrente = collezione[i].peso;
        nome_corrente = collezione[i].nome;
    }
}
alert("ho trovato peso: "+ peso_corrente + " della bici " + nome_corrente + ".");
