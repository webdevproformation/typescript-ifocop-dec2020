function Majuscule(tableau) {
    // parcourir le tableau 
    // pour chaque élément (string) 
    // le premier caractère => majuscule 
    // le reste le laisser tel quel
    // for()
    // .forEach()
    // .map() => permet de prendre un tableau et de l'enrichir 
    // while()
    // 1ère solution possible .map()
    //return tableau.map( function( item ){ 
    //    return item[0].toLocaleUpperCase() + item.slice( 1 , item.length ) ;
    // } );
    // 2eme solution possible .forEach() 
    var resultat = [];
    tableau.forEach(function (item) {
        resultat.push(item[0].toLocaleUpperCase() + item.slice(1, item.length));
    });
    return resultat;
}
var r = Majuscule(["alain", "pierre", "charles"]);
console.log(r);
// cd ..
// cd jour2
// cls / clear
// tsc 01-exo.ts && node 01-exo.js
