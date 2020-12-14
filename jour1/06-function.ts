// 06-function.ts 

// en javascript, plusieurs manières de créer des fonctions 

// classique 

function a () { }

// créer une variable qui va contenu une fonction anonyme 

let b = function(){ }

// ES6 depuis 2015 => arrow function 

let c = () => { }

// typescript 
// typer deux choses dans les fonctions 
// typer les paramètres de la fonction ainsi que le retour de la fonction 


let d = function ( param : Array<string> , item : string ) : string {
    // dans les accolades nous allons réaliser des traitements 
    // ajouter à la fin de notre tableau l'item 

    param.push(item); // index à ajouté  ["a","b","bonjour"]
    return param.join("") // "abbonjour"
   // return param ;
}

let resultat = d( ["a","b"] , "bonjour" ); // ["a","b","bonjour"] // 2 

let e = (prix : number , devise : string ) :void => {
    // n'utilise pas le mot clé return 
    console.log(`le prix est de ${prix} ${devise} `);
}

// :void => vide 
// la fonction n'utilise pas le mot clé return => retourne rien

let information = e( 20 , "euros")

// information.toUpperCase() ; // erreur lors de l'exécution
// gros projet en javascript => Angular // React 
// plein de librairies // plein de code => éviter se s'arracher les cheveux 

// dans les objets littéraux => méthodes 
// 3 manières de créer des méthodes = fonctions dans un objet 


export let f = {
    nom : "Javascript",
    duree : 5 ,
    unite : "jours",
    description : function( param : string) :number  {
        return param.length ; 
    },
    description2( param : Array<any>) :void { 
        console.log(param)
    },
    description3 : ( param : boolean ) : Object|null => { 
        if(param){
            return {}
        }else {
            return ;
        }
     }
}

console.log(f.description("bonjour")) // chiffre => nombre de caractères du mot bonjour 

f.description2([2, "bonjour"]); // pas besoin de faire un console.log => retourne rien 

console.log(f.description3(true)) ; 

// tsc 06-function.ts
// executer mon javascript node 06-function.js