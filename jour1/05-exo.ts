// seule solution 
let liste1 : string = "pêche poire ananas";

// 2 solutions possibles 
let liste2 : Array<string> = ["pêche" , "poire", "ananas"];
let liste2Prim : string[] = ["pêche" , "poire", "ananas"];

// 2 solutions possibles 
let liste3 : Array<string| number> = ["pêche", 4, "poire", 3, "ananas" , 2];
let liste3Prim : (string|number)[] = ["pêche", 4, "poire", 3, "ananas" , 2];

// plusieurs solutions
let liste4 : Object = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros",
    date : "12/01/2020"
};

let liste4Prim : {} = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};

let liste4Ter : { items : Array<string|number> , budget : number , unite : string } = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};

interface CoursesInterface {
    items : Array<string|number> ,
    budget : number ,
    unite : string
}

let liste4Quar : CoursesInterface = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};

// plusieurs solutions possible 

interface ProduitInterface{
    id : number ;
    nom : string ;
    quantite : number ;
}

let liste5 : Array<ProduitInterface> = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];

export let liste5Prim : ProduitInterface[] = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];

// transtyper en js de base 
// cls (windows) clear (macOS)
// tsc 05-exo.ts 
// lorsque vous écrivez en type script => vous n'êtes pas amené à écrire vous même le fichier js => obtenez le fichier .js 
// il ne faut pas modifier le fichier .js à la main 

// 06-function.ts