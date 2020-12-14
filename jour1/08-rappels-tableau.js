// les tableaux => central et très pratique en javascript => typescript 
// tableau permet de stocker plusieurs valeurs dans une seule variable 
var a = ["a", "b", "c"];
// lorsque je crée ma variable a , il se passe 2 choses 
// stocker dans la variable les valeurs [ "a", "b", "c" ]
// en + javascript va ajouter des propriétés et des méthodes à la variable a (via son prototype)
// propriété des tableaux => 
console.log(a.length); // le nombre d'élements dans une tableau // 3
// méthodes
// .map()
// .find()
// .forEach()
// .filter()
// .indexOf()
// .push() / .pop() / shift() / .unshift() / .splice()
// .slice()
// .join()
// join()
console.log(a.join()); // paramètre qui est facultatif 
// retourner le tableau mais sous forme de string 
//"a,b,c"
console.log(a.join(" ")); // retourner une chaine de caractère mais c'est un espace entre les items du tableau
// "a b c"
console.log(a.join(", ")); //"a, b, c"
// tsc 08-rappels-tableau.ts --watch && node 08-rappels-tableau.js
// typescript va écouter lorsque vous modifiez le fichier 08-rappels-tableau.ts
var b = [1, 2, 3];
// modifier le tableau .push() / .pop() / shift() / .unshift() / .splice()
// ajouter / supprimer ou modifier un élément du tableau 
// ajouter à la fin du tableau b la valeur 12 
b.push(12);
console.log(b);
// ajouter un chiffre 45 au début du tableau 
b.unshift(45);
console.log(b);
// je veux supprimer le dernier élément du tableau => le chiffre 12 
b.pop(); // pop() sans paramètres
console.log(b);
// je veux supprimer le premier élement du tableau => 
b.shift(); // shift() sans paramètres 
console.log(b);
// je veux ajouter un chiffre entre la valeur 1 et la valeur 2 => 110 
b.splice(1, 0, 110);
// 1 = index où dans le tableau 
// 0 un chiffre la quantité d'élément que l'on veut supprimer 
// 110 => la valeur que l'on veut ajouter
console.log(b);
// supprimer le chiffre 2 
b.splice(2, 1);
console.log(b);
// modifier / remplacer le chiffre 1 par le chiffre 12 dans le tableau b 
b.splice(0, 1, 12);
console.log(b);
// .slice() => découper 
// couper dans le tableau 
var c = ["js", "angular", "jquery"];
// prendre une partie d'une tableau 
var resultat = c.slice(1, 3);
// 1 : index de départ inclusif 
// 3 : indice de fin non inclusif 
console.log(resultat);
console.log(c.slice(0, 1)); // ["js"]
console.log(c.slice(0, 2)); // ["js" , "angular"]
console.log((c.slice(0, c.length))); // [ "js" , "angular" , "jquery" ]
// .indexOf()
// fonction qui retourne la position d'un élement dans un tableau 
var d = ["a", "b", 2, 55];
// ?? est ce que le tableau d contient la valeur 55 ???
// si le tableau contient cette valeur alors => retourner son index dans le tableau 
console.log(d.indexOf(55)); // 3
console.log(d.indexOf("b")); // 1
console.log(d.indexOf("A")); // -1 (si il ne trouve pas dans le tableau -1 )
d.push("a", 23);
console.log(d);
console.log(d.indexOf("a")); // cherche "a" à partir du début tableau 
console.log(d.lastIndexOf("a")); // cherche "a" à partir de la fin // 4
/**
 * .map()
// .find()
// .forEach()
// .filter()
callback ???
 */
// javascript les fonctions sont utilisables de plein de manière différentes
function e() { }
var h = function () { };
function g(event, callback) {
    callback();
}
g("click", function () { }); // exécuter une fonction g et comme paramètre tu lui donnes une définition une fonction => callback 
// callback =>
function action1() { }
document.getElementById("intro").addEventListener("click", action1);
var action2 = function (a, b) { };
document.getElementById("intro").addEventListener("click", function () {
    action2(2, 3);
});
document.getElementById("intro").addEventListener("click", function () { });
// créer un nouveau fichier 09-tableau-suite.ts 
// créer un nouveau fichier 09-index.html 
