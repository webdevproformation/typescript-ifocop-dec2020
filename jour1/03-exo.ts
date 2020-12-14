let prenom = "Victor";

let nom = "Hugo";

let descriptionComplete =  ( prenom , nom  ) => {
    // les templates string utilisent les backquotes 
    // accent grâve 
    console.log( `${prenom} ${nom} est un auteur du 18ème siècle qui a écrit Notre Dame de Paris` )
}
// appeler la fonction
descriptionComplete( prenom ,  nom );

// traduire en js version 3 
// dans mon terminal (vérifier cmd / et dans le dossier jour1)
// tsc 03-exo.ts --removeComments true
// node 03-exo.js

// rdv dans 15 min => 10h51 bon café ! 