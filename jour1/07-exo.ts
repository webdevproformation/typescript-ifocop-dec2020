export let salution = (formation : string , matieres : Array<string> ) :string =>{

    let resultat = `je suis une formation ${formation} dans laquelle je vais suivre les matières suivantes ${matieres.join(", ")}` ;
    return resultat ;
}

let result = salution ( "DWWM" , ["js", "angular","Typescript"] ) ;

console.log(result);
// tsc 07-exo.ts 
// node 07-exo.js

// tsc 07-exo.ts && node 07-exo.js 
// tsc 07-exo.ts --removeComments true && node 07-exo.js 

// Erreur au moment de l'exécution
// salution ( "DIW" , [ { nom : "js" } , {"nom" : "Angular"}]) ;

// 08-rappels-tableau.ts
