// nous venons de voir le typage est son rôle 
// moyen pour développeur de vérifier / relire son code js AVANT son exécution (nodejs soit dans navigateur web)


// je veux créer une fonction permet d'ajouter un élement à un tableau 

function add ( tableau : Array<string> , item : string ) : Array<string>   { 
    tableau.push( item );
    return tableau ;
}

// utilise la fonction 
add( ["a", "b"] , "c" );

// KO car dans ma définition de ma fonction add => préciser de manière stricte que 
// tableau obligatoirement contenu des string  

function addNumber ( tableau : Array<number> , item : number ) : Array<number>   { 
    tableau.push( item );
    return tableau ;
}
addNumber([1 , 2] , 3);

// add([{id : 1} , {id : 2} ] , {id: 3});

// typage => excellente chose mais ça peut devenir un peu contraignant 

// Généricité => permet aux fonctions / class / interface d'être un peu plus flexible 
// Type T 
// T en majuscule => 
// Element

function ajouter<T> ( tableau : Array<T> , item : T) : Array<T> {
    tableau.push(item);
    return tableau ;
}

ajouter([1,2,3], 2);
ajouter([{id :1}] , {id: 2});

// généricité permet d'introduire de la flexibilité lorsque l'on définit une fonction / interface et les class 
// au moment où on exécuter la fonction que l'on définit la valeur de T
// <T> => <number> 
// <T> => <{id : number}>

// objet litteral complexe 
let data = {
    id : 2,
    nom : "Alain",
    prenom : "Pierre",
    description : function( param : string) : void{ },
    liste : [ "js" , "jquery"]
}
// ctrl + Espace
ajouter([data] , 
        {id : 2 , 
        nom : "CHarles", 
        liste : ["s"] ,
        description : function( "a" ) { 
            console.log("rien") 
        } , 
        prenom :"Henri" }
        )

// cas pratique ?? 

// créer un nouveau fichier 12-exo.ts 
// ce fichier contient une fonction aggregate( )
// deux paramètres 
// tableau1 
// tableau2

// la fonction va concatener le tableau 1 et le tableau 2 
// retourner le résultat de la concaténation des deux tableaux 

// essayer cette fonction avec les valeurs suivantes 

//["a","b"] , ["c","d"]
//[1,2] , [3,4,5]



