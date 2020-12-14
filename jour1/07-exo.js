"use strict";
exports.__esModule = true;
exports.salution = void 0;
var salution = function (formation, matieres) {
    var resultat = "je suis une formation " + formation + " dans laquelle je vais suivre les mati\u00E8res suivantes " + matieres.join(", ");
    return resultat;
};
exports.salution = salution;
var result = exports.salution("DWWM", ["js", "angular", "Typescript"]);
console.log(result);
