// 04-static.ts 

class A{
    static prop : string = "Bonjour"; 
    static methode(){
        console.log("je suis une méthode ")
    }
}
// devant un attribut ou un méthode vous pouvez ajouter le mot clé static
// permet de récupérer ce qui est stocké dans la class SANS avoir à créer une instance de class  // de créer un objet 
console.log(A.prop) ;
// erreur pour récupérer la valeur Bonjour il ne faut pas écrire 
/* let a = new A();
a.prop */ 

A.methode(); // NomClass.methodeStatic();

// en javascript l'objet Math 
// PI : 3.1415 .... 
console.log(Math.PI) ; // en PHP Math::Constant // PDO::FETCH_OBJ 
console.log(Math.E) ;
// avoir une chiffre tiré au hasard entre 0 et 1
console.log(Math.random())

// 05-heritage.ts