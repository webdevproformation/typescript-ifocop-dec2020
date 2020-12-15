// notes de cours :
// https://github.com/webdevproformation/typescript-ifocop-dec2020


// support de cours : 
// url : https://formation.webdevpro.net/typescript
// login : typescript
// mdp : typescript

/*
Avez vous des questions ?? 
rappel sur la généricité 
*/ 

// Typescript langage ressemble beaucoup au js
// sur ensemble => tous les mots connus dans js => connus dans ts 
// si vous écrivez du js valide => ts 

// ts introduit concept (présent dans d'autres langages => JAVA) le typage
// le fait de déclarer au moment de la création d'une variable son type
// par défaut dans js le typage est défait de manière dynamique / implicite 

let a = "jour2"; // a devient un string 

// en typescript 

let b : string = "jour2" ; // dit EXPLICITEMENT que la variable doit être un chaine de caractère 

// intéressant => lecture de vote code AVANT son exécution (nodejs ou dans navigateur web => firefox / Chrome)

// éviter d'avoir des erreurs de logique 
// je peux utiliser .toLocaleLowerCase() car b est un string 
b.toLocaleLowerCase()

let c :any = ["a"]; // comportement par défaut de javascript
/*  function c(){} */

c.toLocaleLowerCase() // => erreur au moment de l'exécution
c[0].toLocaleLowerCase()

// généricité => UNIQUEMENT lorsque l'on crée / définit une fonction / class / interface
// Attention PAS lors de la création de variable 
// on ne peut utiliser la généricité lors de la création de variable 

// le typage peut être limitant 
// supprimer le dernier élément d'un tableau 
function d ( tableau : Array<any> , index : number ) : Array<any>{
    // traitement 
    // joindre des données dans deux tableaux
    // ajouter une information dans un tableau 
    // tableau et de ce que ça contient 

    // pour supprimer un élement dans un tableau .pop() .shift() .splice()

    return tableau.splice( index , 1  );
}

// utiliser la fonction 

d( ["a","b", "c", "d"] , 1  ); // erreur de compilation 
export let rr = d( [ 1, 2, 3 , 4 ] , 2  ); 

// rr[0]

// signature de la fonction 
function dd <T> (tableau : Array<T> , index : number) {
    return tableau.splice( index , 1  );
}
// <T> => transformer la fonction en une fonction générique 

dd( ["a","b", "c", "d"] , 1  );
dd( [ 1, 2, 3 , 4 ] , 2  ); 
let r = dd( [ {nom :"Alain"} , {nom : "Pierre"} ] , 1 )

r[0].nom

// généricité => éviter d'utiliser any
// dans la mesure du possible => essayer de ne pas utiliser le typage any 

// cas pratique 
/*
créer le dossier jour2 
dans ce dossier créer un nouveau fichier 01-exo.ts 

ce fichier contient une fonction majuscule 

un paramètre tableau qui contient de chaine de caractères Obligatoirement 

prendre chaque item du tableau 
les modifier mettre la première lettre de l'item en majuscule 

retourner le tableau modifié 

------------------

utiliser la fonction Majuscule( ["alain","pierre","charles"] )

le résultat de la fonction est le suivant 

["Alain","Pierre","Charles"]

*/ 