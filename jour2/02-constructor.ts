// maintenant que l'on sait 
// créer une class avec des attributs et de méthodes
// créer une instance de class => objet 

class A{
    prop :string ;
}

let a = new A();
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

class B{
    prop : string ;
    constructor( prop : string = "default" ){ // bien respecter le nom de la méthode 
        this.prop = prop ;
    }
    // __construct(){} attention c'est la syntaxe en PHP pas en js ou typescript 
    // $this
}

let b = new B( "ma voiture" );
console.log(b.prop);
// tsc 02-constructor.ts && node 02-constructor.js

// 1 instruction créer l'objet b et donner une valeur à la propriété prop dans b 

// portée des variables = scope 
// class encapsuler les attributs dans class 

class C{
    private _prop : string ;
    // scope / portée locale => uniquement utilisable dans les accolades de la class 
    // autre convention 
    // créé un attribut privé => mettre en 1ère lettre le symbole _ 

    constructor( prop : string ){
        this._prop = prop;
    }
}

let c = new C ( "jasmin" );

// la valeur de _prop = "jasmin"

// console.log(c._prop); erreur si je veux lire le contenu de la variable
// c._prop = "rose" ; erreur si je veux modifier / attribuer une valeur à cette variable 

// ascesseurs getter // setter 

class D{
    private _nom : string ;

    constructor( nom :string ){
        this.nom = nom ; // en train d'appeler la méthode set nom(nom)
        // this.nom(nom)
    }

    // setter => permet de donner une valeur à _nom depuis l'extérieur ou l'intérieur de la class 
    public set nom(nom) {
        this._nom = nom
    }

    // getter => permet de récupérer la valeur de _nom depuis l'extérieur de la class 
    public get nom() :string{
        return this._nom ;
    }
}

let d = new D( "Paris" )

// je veux récupérer la contenu dans l'attribut nom 
// je peux pas utiliser la syntaxe suivante d._nom
console.log( d.nom ) // en train d'exécuter la méthode getter 
// console.log(d.nom()) // Paris

d.nom = "Lyon" ; // en train d'utiliser le setter 

console.log( d.nom ) // Lyon 

// tsc 02-constructor.ts && node 02-constructor.js
// tsc 02-constructor.ts --target es5 && node 02-constructor.js
