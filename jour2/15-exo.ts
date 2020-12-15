function Init(target){
    let a = new target();
    a.description();
}

@Init
class Sidebar{
    description(){
        console.log("je suis une méthode");
    }
}

// tsc 15-exo.ts --target es6 --experimentalDecorators true && node 15-exo.js

// rdv 9h00 => Angular grosse librairie qui est écrite en ts 
// découvrir comment ça fonctionne !! 
// excellente soirée 

// oui new Promise()