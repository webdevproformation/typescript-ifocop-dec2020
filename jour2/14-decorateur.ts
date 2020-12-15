// Dans Augular vous allez voir le concept suivant 
function Component( target ){
    let a = new target();
    console.log(a);
}
@Component // ; Décorateur 
class Menu{
}
// juste avant la définition de la class  @Component 
// Décorateur 
// fonction qui va permettre de modifier le comportement d'une class 
// compiler notre fichier 
// tsc 14-decorateur.ts --target es6 --experimentalDecorators true && node 14-decorateur.js


// créer un fichier 15-exo.ts

// contient une fonction Init avec un paramètre target
// target faite référence à une class que l'on décore

// class Sidebar
// contient une méthode description qui fait console log "je suis une méthode"

// exécuter la méthode description directement depuis le décorateur Init
