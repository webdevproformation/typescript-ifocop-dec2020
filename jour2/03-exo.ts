class Menu{
    private _logo : string ;
    private _contenu : Array<string>;
    constructor( logo: string  , contenu : Array<string>){
        this.logo = logo;
        this.contenu = contenu;
    }
    set logo(logo){
        if(logo !== ""){
            this._logo = logo;
        }
    }  
    set contenu(contenu){
        this._contenu = contenu;
    } 
    get logo():string{
        return this._logo;
    }
    get contenu():Array<string>{
        return this._contenu;
    }
     getHtml(){
         return this.generateHtml();
     }
    private generateHtml(){
        let html = `<nav>
            <img src="${this.logo}" alt="">
            <ul>
                ${this.contenu.map(function(item){ 
                    return "<li>" + item + "</li>";
                }).join("")}
            </ul>
        </nav>`
        return html ;
    }
}
// private => quelquechose qui est important que dans la class
// tu n'en pas besoin à l'extérieur de la class 
let m = new Menu("logo.jpg", ["Accueil","Blog"])
console.log(m.contenu)
console.log(m.getHtml());
// cls
// tsc 03-exo.ts --target es5 && node 03-exo.js