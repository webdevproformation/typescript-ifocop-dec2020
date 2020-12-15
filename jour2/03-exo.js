var Menu = /** @class */ (function () {
    function Menu(logo, contenu) {
        this.logo = logo;
        this.contenu = contenu;
    }
    Object.defineProperty(Menu.prototype, "logo", {
        get: function () {
            return this._logo;
        },
        set: function (logo) {
            if (logo !== "") {
                this._logo = logo;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Menu.prototype, "contenu", {
        get: function () {
            return this._contenu;
        },
        set: function (contenu) {
            this._contenu = contenu;
        },
        enumerable: false,
        configurable: true
    });
    Menu.prototype.getHtml = function () {
        return this.generateHtml();
    };
    Menu.prototype.generateHtml = function () {
        var html = "<nav>\n            <img src=\"" + this.logo + "\" alt=\"\">\n            <ul>\n                " + this.contenu.map(function (item) {
            return "<li>" + item + "</li>";
        }).join("") + "\n            </ul>\n        </nav>";
        return html;
    };
    return Menu;
}());
// private => quelquechose qui est important que dans la class
// tu n'en pas besoin à l'extérieur de la class 
var m = new Menu("logo.jpg", ["Accueil", "Blog"]);
console.log(m.contenu);
console.log(m.getHtml());
// cls
// tsc 03-exo.ts --target es5 && node 03-exo.js
