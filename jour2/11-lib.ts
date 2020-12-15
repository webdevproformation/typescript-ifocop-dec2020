// créer deux fichiers 11-module.ts et 11-lib.ts 

// le concept de module 
// répartir son code typescript sur plusieurs fichiers .ts 

// au lieu d'avoir 1 seule fichier ts qui contient tout le code 
// on va plutôt le répartir en plusieurs petits fichiers

// éditer le fichier 11-lib.ts
export interface DataInterface{
    id : number ;
    nom : string ;
}

let a : string = "Boonjour" ;

export let b = function(param : Array<number>) : number  {
    return param.length;
}

export class A{
    prop1 : string = "valeur par défaut";
    methode1() : void{
        console.log("je suis la méthode 1");
    }
}
// je veux utiliser ces différentes variables dans le fichier 11-module.ts 
// dans un autre fichier => exporter du fichier ET 
// dans le fichier dans le quel je vais recevoir ces différentes variables
// import 

// si je ne mets pas le mot clé export devant une variable => cette variable ne peut être utilisée qua dans le fichier en cours 