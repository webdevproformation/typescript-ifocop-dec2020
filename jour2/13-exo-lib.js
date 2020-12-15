"use strict";
exports.__esModule = true;
var Saluation = /** @class */ (function () {
    function Saluation() {
        this.data = ["Bonjour", "Hello", "Hola", "صباح الخير"];
    }
    Saluation.prototype.random = function () {
        var nbIndexes = this.data.length - 1;
        var hasard = Math.random(); // 0 et 1 de manière aléatoire  0.1279849
        // 3 * 0.9 = 2.7 => 3
        // 3 * 0.8 = 2.4 => 2
        var indexe = Math.round(hasard * nbIndexes);
        return this.data[indexe];
    };
    return Saluation;
}());
exports["default"] = Saluation;
