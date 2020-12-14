
let aggregate  = function <T> ( tableau1 : Array<T> , tableau2 : Array<T> ) : Array<T> {

    // plusieurs manières de addition deux tableaux 

    // 1ère manière possible 
    // tableau1.concat( tableau2 )

    // 2ème manière possible => ...variable => spread opérator 
    let resultat = [...tableau1 , ...tableau2] ;

    return resultat ;
}

// au moment de l'exécution de la fonction que T => string ou number 

aggregate(["a","b"] , ["c","d"]);
aggregate([1,2] , [3,4,5]);

