// créer deux fichiers 11-module.ts et 11-lib.ts 

// le concept de module 
// répartir son code typescript sur plusieurs fichiers .ts 

// au lieu d'avoir 1 seule fichier ts qui contient tout le code 
// on va plutôt le répartir en plusieurs petits fichiers

// éditer le fichier 11-lib.ts

import { b , A , DataInterface } from "./11-lib"; // fichier sans extension 
// attention a n'étant pas exporté => je ne peux pas la lister dans les éléments à importer dans le fichier 

console.log(b([1,2,3,4]));

let a = new A();
a.methode1();

let donnee : DataInterface = {
    id : 12 ,
    nom : "nouvelle donnée"
}

// système de module 
// créer deux fichiers 12-module.ts 12-lib.ts


