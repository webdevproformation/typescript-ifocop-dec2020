// 02-hello.ts

export let a = "20";

let b = ["a", "b", "c" ]; 

// avec la nouvelle manière de faire des fonctions en ES6 
// fonction fléchée (arrow function)
// fonction qui permet d'ajouter un élément à la fin d'un tableau 
let c = ( tableau , item  ) => {
    tableau.push( item ); // méthode pour ajouter un nouvel élément à un tableau
    console.log( tableau ) ;
} ;

c( b , a );  // ["a", "b","c" , "20"] 

c( b , "hello" ); //  ["a", "b","c" , "20" , "hello"] 

// transformer mon fichier ts => js 
// cd jour1 => Enter => permet de placer le terminal dans le dossier jour1
// tsc 02-hello.ts
// cls // clear

// executer le fichier js généré 

// traduire un fichier ts écrit en js ES6 => js ES3 

// tsc 02-hello.ts --removeComments true
//                  drapeau (flag) option de la commande 


// créer un fichier 03-exo.ts 

/**
 * dans ce fichier créer une variable prenom = "Victor" 
 * dans ce fichier créer une variable nom = "Hugo" 
 * 
 * créer une fonction qui s'appelle descriptionComplete 
 *  deux paramètres prenom et le nom 
 * 
 * réaliser une concaténation écrire la phrase suivante dans la console 
 * "prenom nom est un auteur du 18 eme siècle qui a écrit Notre Dame de Paris"
 * (essayer de créer la fonction en utilisant la syntaxe arrow function
 * essayer d'utiliser les template string pour la concaténation)
 * 
 * transformer le fichier 03-exo.ts en un fichier 03-exo.js sans les commentaires 
 */