// 10-interface.ts

// créer des objets littéraux , interface pour typer les objets 

let a : {id : number , nom : string , methode() : void } = {
    id : 1 ,
    nom : "JS",
    methode : function() :void{
        console.log("je suis une méthode");
    }
}

interface InformationInterface {
    id : number , 
    nom : string , 
    methode() : void 
}

let b : InformationInterface = {
    id : 1 ,
    nom : "JS",
    methode : function() :void{
        console.log("je suis une méthode");
    }
}

// on peut aussi utiliser les interfaces lorsque l'on veut définir une class 
// interface => class à 100% abstraite 
class C implements InformationInterface{
    id : number ;
    nom : string ;
    methode() :void{}
}
// une class qui implémente une interface DOIT obligatoirement implémenter toutes les méthodes / propriétés de l'interface au minimum 

/**
 * 
 * interface InformationInterface {
    id : number , 
    nom : string , 
    methode() : void 
}
 * équivalent d'écrire 
abstract class InformationInterface{
    abstract id : number ;
    abstract nom : string ;
    abstract methode() : void ;
}
// interface === class à 100% abstraite !
// contrat entre l'interface et la class qui l'implémente
// class Menu implements OnInit{
    ngOnInit(){
        
    }
}
// Pause rdv dans 15 min => 15h47 
// module import / export / defaut 
// décorateur 

 */