// maintenant que l'on sait 
// créer une class avec des attributs et de méthodes
// créer une instance de class => objet 
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var a = new A();
// pour donner une valeur à l'attribut prop de a 
/*
let a = new A();

équivalent à écrire un objet littéral

let a = {
    prop
}
*/
a.prop = "Bonjour"; // à partir de l'instance que je vais donner une valeur à l'attribut prop 
// utiliser une fonction constructrice 
var B = /** @class */ (function () {
    function B(prop) {
        if (prop === void 0) { prop = "default"; }
        this.prop = prop;
    }
    return B;
}());
var b = new B("ma voiture");
console.log(b.prop);
// tsc 02-constructor.ts && node 02-constructor.js
// 1 instruction créer l'objet b et donner une valeur à la propriété prop dans b 
// portée des variables = scope 
// class encapsuler les attributs dans class 
var C = /** @class */ (function () {
    // scope / portée locale => uniquement utilisable dans les accolades de la class 
    // autre convention 
    // créé un attribut privé => mettre en 1ère lettre le symbole _ 
    function C(prop) {
        this._prop = prop;
    }
    return C;
}());
var c = new C("jasmin");
// la valeur de _prop = "jasmin"
// console.log(c._prop); erreur si je veux lire le contenu de la variable
// c._prop = "rose" ; erreur si je veux modifier / attribuer une valeur à cette variable 
// ascesseurs getter // setter 
var D = /** @class */ (function () {
    function D(nom) {
        this.nom = nom; // en train d'appeler la méthode set nom(nom)
        // this.nom(nom)
    }
    Object.defineProperty(D.prototype, "nom", {
        // getter => permet de récupérer la valeur de _nom depuis l'extérieur de la class 
        get: function () {
            return this._nom;
        },
        // setter => permet de donner une valeur à _nom depuis l'extérieur ou l'intérieur de la class 
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: false,
        configurable: true
    });
    return D;
}());
var d = new D("Paris");
// je veux récupérer la contenu dans l'attribut nom 
// je peux pas utiliser la syntaxe suivante d._nom
console.log(d.nom); // en train d'exécuter la méthode getter 
// console.log(d.nom()) // Paris
d.nom = "Lyon"; // en train d'utiliser le setter 
console.log(d.nom); // Lyon 
// tsc 02-constructor.ts && node 02-constructor.js
