"use strict";
// 06-function.ts 
exports.__esModule = true;
exports.f = void 0;
// en javascript, plusieurs manières de créer des fonctions 
// classique 
function a() { }
// créer une variable qui va contenu une fonction anonyme 
var b = function () { };
// ES6 depuis 2015 => arrow function 
var c = function () { };
// typescript 
// typer deux choses dans les fonctions 
// typer les paramètres de la fonction ainsi que le retour de la fonction 
var d = function (param, item) {
    // dans les accolades nous allons réaliser des traitements 
    // ajouter à la fin de notre tableau l'item 
    param.push(item); // index à ajouté  ["a","b","bonjour"]
    return param.join(""); // "abbonjour"
    // return param ;
};
var resultat = d(["a", "b"], "bonjour"); // ["a","b","bonjour"] // 2 
var e = function (prix, devise) {
    // n'utilise pas le mot clé return 
    console.log("le prix est de " + prix + " " + devise + " ");
};
// :void => vide 
// la fonction n'utilise pas le mot clé return => retourne rien
var information = e(20, "euros");
// information.toUpperCase() ; // erreur lors de l'exécution
// gros projet en javascript => Angular // React 
// plein de librairies // plein de code => éviter se s'arracher les cheveux 
// dans les objets littéraux => méthodes 
// 3 manières de créer des méthodes = fonctions dans un objet 
exports.f = {
    nom: "Javascript",
    duree: 5,
    unite: "jours",
    description: function (param) {
        return param.length;
    },
    description2: function (param) {
        console.log(param);
    },
    description3: function (param) {
        if (param) {
            return {};
        }
        else {
            return;
        }
    }
};
console.log(exports.f.description("bonjour")); // chiffre => nombre de caractères du mot bonjour 
exports.f.description2([2, "bonjour"]); // pas besoin de faire un console.log => retourne rien 
console.log(exports.f.description3(true));
// tsc 06-function.ts
