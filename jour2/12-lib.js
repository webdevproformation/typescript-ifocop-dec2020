"use strict";
// fichier qui ne va contenir qu'un seul export
exports.__esModule = true;
function perimetre(largeur, hauteur) {
    return "le p\u00E9rim\u00E8tre d'un rectangle de largeur " + largeur + " et hauteur " + hauteur + " est \u00E9gal \u00E0 " + (largeur + hauteur) * 2;
}
function surface(largeur, hauteur) {
    return "la surface d'un rectangle de largeur " + largeur + " et hauteur " + hauteur + " est \u00E9gale \u00E0 " + largeur * hauteur;
}
function informationRectangle(largeur, hauteur) {
    return [
        surface(largeur, hauteur),
        perimetre(largeur, hauteur)
    ];
}
exports["default"] = informationRectangle;
