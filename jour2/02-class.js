// PHP => procédural // POO // mixer les deux 
// Angular => OBLIGE de voir la POO 
// Angular n'utilise QUE de la POO 
// concepts strictement identiques Typescript & PHP 
// comprendre comment fonctionne une class 
// quand on veut class => mot clé class 
// convention => la première lettre du nom de la class
// est en majuscule 
// Formation est variable un peu spéciale 
// sans votre code utiliser une variable qui a une majuscule 
// en 1ère lettre => manipuler une class 
// une class peut contenir 
// contenir variables / fonctions
// membres de la class // attributs de la class 
var Formation = /** @class */ (function () {
    function Formation() {
        // attention lorsque l'on veut créer une variable
        // dans une class, il ne faut pas mettre le mot clé  let 
        this.nom = "Angular";
        this.duree = 5;
        this.matieres = ["POO", "Composant", "Routing"];
        this.isStart = false;
        // les class peuvent aussi stocker des fonctions => méthodes de la class 
        // quand vous créer une fonction dans une class => ne pas utiliser la mot clé fonction pour la créer 
        //1ère manière de créer une méthode 
        this.description = function () {
            console.log("je suis une formation sur Angular");
        };
        // 3ème manière de créer des méthodes (arrow function)
        this.objectif = function () {
            console.log("etre capable de réaliser une app avec Angular");
        };
    }
    // 2ème manière de créer une méthode (fonction dans une class)
    Formation.prototype.detail = function () {
        console.log("la formation dure 5 jours");
    };
    return Formation;
}());
// attention maintenant que l'on a créé un class => Définition un concept 
// pour utiliser ce concept la Formation 
// transformer la class en un objet => instancier une class 
// objet une instance de class 
// copier automone d'une class => new 
var f = new Formation();
// f est un objet === f est une instance de la class Formation
console.log(f);
