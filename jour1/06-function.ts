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
    liste : [ "angular" , "jquery" , "react" ],
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

// bon appétit => rdv 13h32 

// cas pratique => créer le fichier 07-exo.ts 

/*
 ce fichier contient le code suivant :

 function qui s'appelle salutation 

 cette fonction dispose de deux paramètres 
    formation string
    matieres tableau de chaine de caractères

cette fonction contient les instructions suivantes :

    concaténer le contenu du paramètre formation et des items dans le parmètre matieres dans la phrase suivante 


    je suis une formation "variable" dans la quelle je vais suivre les matières suivantes item1, item2 , item3s

    la fonction retourne une variable de type string 

    utiliser la fonction salutation avec les paramètres suivants :

    "DWWM" , ["js", "angular","Typescript"]

    "DIW" , [ { nom : "js" } , {"nom" : "Angular"}]



*/