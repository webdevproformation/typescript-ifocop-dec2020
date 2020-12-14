// stop le mode watch pour le fichier 08 
// via la commande Ctrl + C 
// O Enter 
// tsc 09-tableau-suite.ts -w
// tsc 09-tableau-suite.ts --watch
// nous venons de voir les méthodes de bases des tableaux en js 
// join()
// pop() , push() , unshift(), shift() , splice()
// slice(0, 1)
// indexOf() lastIndexOf()
// dans tous ces méthodes 
// on leur donne soit chiffres / string comme paramètres 
// pour toutes les méthodes suivantes 
/**
 * map( )
 * forEach( )
 * filter( )
 * find( )
 * il faut obligatoirement leur donner comme paramètre un callback => une définition de fonction
 */
var a = ["a", "b", "c"];
// rechercher dans un tableau => indexOf()
// aussi la méthode find()
// 1ère manière écrire 
a.find(function (item) { });
// 2ème manière écrire 
a.find(function (item) { });
// 3ème manière d'écrire
var recherche = function (item) { };
a.find(recherche);
// rechercher dans le tableau a est qu'il ya la valeur "Z"
var resultat = a.find(function (item) {
    return item === "Z"; // boolean
});
console.log(resultat); // retourner la valeur recherchée
var data = [
    { id: 1, nom: "JS", niveau: 3 },
    { id: 2, nom: "jQuery", niveau: 4 },
    { id: 3, nom: "Angular", niveau: 1 }
];
// est ce qu'il y a dans le tableau data un item qui contient l'id = 4 ?? 
data.find(function (item) {
    return item.id === 4;
});
// est ce qu'il y a dans le tableau data la matière Angular ?? 
data.find(function (item) {
    return item.nom === "Angular";
});
for (var i = 0; i < data.length; i++) {
    if (data[i].nom === "Angular") {
    }
}
// forEach()
data.forEach(function (item) {
    if (item.nom === "Angular") {
    }
});
// .map()
// prendre un tableau => l'enrichir 
var dataPrim = ["a", "b", "bonjour"];
//["a","b", "bonjour"] => ["<li>a</li>","<li>b</li>", "<li>bonjour</li>"]
var r = dataPrim.map(function (item) {
    return "<li>" + item + "</li>";
});
console.log(r);
// pause café  !! 15h50 
var finalTableau = [2, 3, 10, 120, 4];
// parcourir ce tableau => récupérer uniquement les élements qui sont > 4 
// filter manuellement 
var rrr = [];
for (var i = 0; i < finalTableau.length; i++) {
    if (finalTableau[i] > 4) {
        rrr.push(finalTableau[i]);
    }
}
console.log(rrr);
// méthode avec filter 
var rrrr = finalTableau.filter(function (item) {
    return item > 4;
});
console.log(rrrr);
// Kelig => ES 5 
// ajoutée dans la version version ES9 de javascript 
// changer manière de compiler le ts => js 
// tsc 09-tableau-suite.ts --target es9
// ?? pourquoi utiliser cette méthode ???
// a.flat( )
// tableau qui contient des tableaux 
var informations = [
    [1, 2],
    [3, 4]
];
// est ce que dans le tableau information est ce qu'il y a un le chiffre 3 ??? 
// 3 fonctions qui permettent de rechercher dans un tableau 
// indexOf()
// find()
// lastIndexOf() 
// la limite de ces trois fonctions ne sont pas récursives 
// le premier élément => [1, 2] === 3 faux 
// le dexuième élément => [ 3, 4 ] === 3 faux 
// d'applatir un tableau 
var informationsTransforme = [
    1, 2,
    3, 4
]; // transformer les tableaux en item + concaténer 
/* informations.flat().find( function(item ){
    return item === 3 ;
})
 */
// 10-tableau-es9.ts 
