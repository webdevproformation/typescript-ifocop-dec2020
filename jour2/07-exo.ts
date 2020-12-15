class Page{
    private _nom : string;
    private _auteur : string;
    protected dt_creation : string ;
    hello : string ;
    constructor(nom  : string , auteur : string ){
        this.nom = nom;
        this.auteur = auteur;
    }
    set nom(nom){
        this._nom = nom;
    }
    set auteur(auteur){
        this._auteur = auteur;
    }
    setDtCreation(dt_creation : Date){
        // date  => JJ/MM/AAAA
        this.dt_creation = `${dt_creation.getDate()}/${dt_creation.getMonth() + 1}/${dt_creation.getUTCFullYear()}`;
    }
    /*
    setDtCreation = function(dt_creation : Date){}
    */ 
    get nom() :string{
        return this._nom ;
    }
    get auteur() :string{
        return this._auteur ;
    }
    getDtCreation() :string{
        return this.dt_creation ;
    }
}
class PageAccueil extends Page{
    show(){
        console.log(`je suis la page ${this.nom} réalisée par ${this.auteur} créée le ${this.getDtCreation()}`);
        // ${this.nom} => appeler la méthode get nom() 
        // ${this.auteur} => appeler la méthode get auteur() 
        // pour la date de dt_creation  this.dt_creation && this.getDtCreation()
    }
}
let p = new PageAccueil("Mon Super Site" , "Moi");
p.setDtCreation(new Date()) ;
p.show(); 

p.hello

// tsc 07-exo.ts --target es5 && node 07-exo.js
// à partir de es5


export class A {
    private _a : string ;

    /* private a = function(){

    } */

    a(){

    }
}  

let b : number = 20 ;

function b(){

}

console.log(b)

$b = "eofhezpohzeo"

function b(){}