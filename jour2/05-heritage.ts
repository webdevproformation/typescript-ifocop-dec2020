// 05-heritage.ts
export class A {
    private _nom : string = "valeur par défaut";
    private _unite : string = "euros";
    private _valeur : number ;
    protected status : boolean ;
    description : string ; // si vous mettez rien avant la création de l'attribut donc description est public par défaut 

    constructor(valeur : number){
        this.valeur = valeur;
    }
    set valeur (valeur){
        this._valeur = valeur;
    }
    get unite(){
        return this._unite;
    }
    get valeur(){
        return this._valeur;
    }
}
class B extends A {
    modifStatus(){
        this.status = false
    }
    afficherUnite (){
        return this.valeur + " "+ this.unite 
    }
 }
// la class B hérite de la class A 
// Dans la class B copie de toutes les méthodes / attributs public et protected 
// on n'accède pas aux  méthodes / attributs private 

let b = new A ( 2020 );
b.valeur = 2021 ;
b.description = "une description";

// pause déjeuner => rdv dans 1 heure 13h33


// créer le fichir 06-heritage-suite.ts 