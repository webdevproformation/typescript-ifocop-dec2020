let informations = [ 
    [ 1, 2 ],
    [ 3, 4 ]
];
// tableau que j'applatis et dans lequel je recherche
let rr = informations.flat().find( function( item ){
    return item === 3 ;
})
console.log(rr);

// tableau d'origine (avec de la profondeur) dans lequel je recherche
let rrr = informations.find( function( item ){
    return item === 3 ;
}) ;
console.log(rrr);

// arrête le mode watch de l'ancien fichier ts
// Ctrl + C 
// tsc 10-tableau-es9.ts --target es2019 && node 10-tableau-es9.js

// créer un nouveau fichier 11-genericite.ts