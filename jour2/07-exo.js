var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Page = /** @class */ (function () {
    function Page(nom, auteur) {
        this.nom = nom;
        this.auteur = auteur;
    }
    Object.defineProperty(Page.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "auteur", {
        get: function () {
            return this._auteur;
        },
        set: function (auteur) {
            this._auteur = auteur;
        },
        enumerable: false,
        configurable: true
    });
    Page.prototype.setDtCreation = function (dt_creation) {
        // date  => JJ/MM/AAAA
        this.dt_creation = dt_creation.getDate() + "/" + (dt_creation.getMonth() + 1) + "/" + dt_creation.getUTCFullYear();
    };
    Page.prototype.getDtCreation = function () {
        return this.dt_creation;
    };
    return Page;
}());
var PageAccueil = /** @class */ (function (_super) {
    __extends(PageAccueil, _super);
    function PageAccueil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageAccueil.prototype.show = function () {
        console.log("je suis la page " + this.nom + " r\u00E9alis\u00E9e par " + this.auteur + " cr\u00E9\u00E9e le " + this.getDtCreation());
        // ${this.nom} => appeler la méthode get nom() 
        // ${this.auteur} => appeler la méthode get auteur() 
        // pour la date de dt_creation  this.dt_creation && this.getDtCreation()
    };
    return PageAccueil;
}(Page));
var p = new PageAccueil("Mon Super Site", "Moi");
p.setDtCreation(new Date());
p.show();
// tsc 07-exo.ts --target es5 && node 07-exo.js
// à partir de es5
