
// javascript est un langage à typage
// faible et dynamique 

//let a = "bonjour"; // a est un string 
// javascript qui le déduit suite à l'affectation
// a = 2 ;
// a est devenu un number 

// le fait de pouvoir changer rapidement de type
// peut entrianer des problèmes par la suite 
// effectuer une opération "bonjour".length
//        (2).length => erreur au moment de l'exécution

// type script introduit le concept de typage

let b : string = "bonjour" ; // vous venez de créer une variable et de la typer

// b = 2 ; // vérification des variables AVANT l'exécution soit dans node ou soit dans un navigateur web 

let c : number = 10 ; 

let d : boolean = 10 > 2 ;

let e : null ; // rien => définir la valeur par défaut d'une variable 

// e = 10

let f ; // créer une variable en javascript => undefined 

let g : any ; // n'importe quoi et peut changer dynamiquement en fonction de la valeur qu'on lui affecte 

g = 10 ;
g = "bonjour" ;

// type de base = types primitifs 

// type scalaire (tableaux et objets)
// variable qui contient plusieurs valeurs simultanément

let h : Array<number>   = [1 , 2 , 3];
// h est un tableau qui ne peut contenir que des chiffres 

let i :Array<string|number> = ["a" ,"b" , 1 , 2];
// suite au typage des variables => automatiquement une autocomplétion plus fine 
i.push(2, "a")
// lecture de votre code AVANT son exécution 

let j : number[] = [3,4,5] ; // équivalent Array<number> 

let k : (boolean|number)[] = [2, 3 , true , 5] ; // équivalent Array<boolean|number>


// spécialité de javascript => il est possible de créer directement à la main un objet littéral
// 1ère manière
let l :Object = {  // attention à la majuscule sur le O
    nom : "Alain",
    age : 23 ,
    isInformaticien : true
}
// 2ème manière 
let m : {} = {  // mettre des accolades 
    nom : "Alain",
    age : 23 ,
    isInformaticien : true
}

// 3ème manière 
let n : { nom : string , age : number ,isInformaticien : boolean  } = { 
    // mettre les accolades 
    // dans les accolades => liste les propriétés de objet litteral
    nom : "Alain",
    age : 23 ,
    isInformaticien : true
}

// 4ème manière pour définir des objets littéraux => interface
// la première lettre en Majuscule  et terminer le nom de l'interface avec le mot Interface 
// sinon il y a de forte chance de se tromper avec une class 

interface PersonInterface {
    nom : string ;
    age : number ;
    isInformaticien : boolean ;
}

let o : PersonInterface  = { 
    // mettre les accolades 
    // dans les accolades => liste les propriétés de objet litteral
    nom : "Alain",
    age : 23 ,
    isInformaticien : true
}

// tableau qui contiennent des objets => collection 
// JSON Javascript Object Notation 

let p : Array<{}> = [  // 1ère possibilité 
    { id : 1 , nom : "Alain"  },
    { id : 2 , nom : "Béatrice "}
];

let q : Array<Object> = [  // 2ème possibilité 
    { id : 1 , nom : "Alain"  },
    { id : 2 , nom : "Béatrice "}
];

let r : Array<{id : number , nom : string }>= [  // 3ème possibilité 
    { id : 1 , nom : "Alain"  },
    { id : 2 , nom : "Béatrice "}
];

// via un interface 

interface EtudiantInterface{
    id : number ;
    nom : string ;
}

let s : Array< EtudiantInterface > = [  // 4ème possibilité 
    { id : 1 , nom : "Alain"  },
    { id : 2 , nom : "Béatrice "}
];

// cas pratique : créer un nouveau fichier 05-exo.ts 
/*
ce fichier contient les variables suivantes :

/ veuillez les typer les variables suivantes correctement :

// liste1 = "pêche poire ananas";
// liste2 = ["pêche" , "poire", "ananas"];
// liste3 = ["pêche", 4, "poire", 3, "ananas" , 2];
/* liste4 = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};*/
/* liste5 = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];*/
*/
