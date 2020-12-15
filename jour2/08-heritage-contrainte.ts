// 08-heritage-contrainte.ts 

// class peut hériter d'une class (classique PageAccueil Hérite Page) 

// class peut hériter  d'une class abstraite
// class peut implementer une interface 

abstract class A{

}
// si j'ajoute le mot clé abstract avant class 
// class abstraite 
// elles ne peuvent pas être instanciées 

//let a = new A()

// il n'est possible que de hériter de cette class 

class B extends A{ }
// et la class B peut être instanciée 
let b = new B();

// l'intérêt des class abstraite (par rapport aux class de base)
// on peut stocker dans une class abstraite méthodes et attributs mais aussi des méthodes et attributs abstrait 

abstract class BDD{
    prop1 : string ;
    abstract prop2 : string;

    methode1(){}
    abstract getData() :void; // il ne faut définir que la signature de la méthode abstraite 
    // vous ne pouvez pas créer de méthode abstrait privée
}

class PDO extends BDD{
    // il faut que la class qui hérite de la class abstraite implémente les méthodes et les attributs abstraits du parent
    prop2 : string;
    getData(){ 
        return "hello" ;
    }
}
class SQLIte extends BDD{
    // il faut que la class qui hérite de la class abstraite implémente les méthodes et les attributs abstraits du parent
    prop2 : string;
    getData(){ 
        return "hello" ;
    }
}

// contrat entre la class parent et la class enfant 
// la class parent donnent des directive OBLIGATOIRES pour l'enfant

// PDO => mySQL avec PDO
// SQlite => fichier .sqlite 

// projet qui a besoin de base de données 

// fonction lire tout le contenu d'une table

//getData($table){
    // PDO => 
    // $connexion = new PDO("local...")
    // $stdt = $connexion->prepare("SELECT * FROM table")
    // retour []
//}


//getData($table){
    // SQLIte => 
    // $connexion = new SQLITE("local...")
    // $stdt = $connexion->query("SELECT * FROM table")
    // retour []
// }