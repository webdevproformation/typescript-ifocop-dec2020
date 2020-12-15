// 06-heritage-suite.ts

// héritage permet de copier l'intégralité d'une class dans une autre 

// class qui hérite = class enfant 

// possède l'ensemble des attributs public et protected de la class parent 

// les attributs private sont disponibles en lecture et ecriture directe dans la class parent uniquement 
// par contre il est possible de créer des setter et getter public (modifier les attributs private ) via ces méthodes que l'on pourra accéder aux attributs private 

// cas pratique créer le fichier 07-exo.ts 
/**
 * 1 ce fichier contient une class Page 
 * possède 2 propriétés privates : nom / auteur
 * possède 1 propriété protected : dt_creation
 * possède un constructeur qui va initialiser la valeur nom et auteur
 * possède un setter et un getter pour initialiser nom / auteur et dt_creation
 * 
 * 2 autre class PageAccueil hérite de la class Page 
 * 
 * contient une méthode show(){}
 *  retourner la chaine de caractère suivante 
 * je suis la page "nom" réalisée par "auteur" créée le "dt-creation"
 * 
 * 3 initialiser la variable p grâce à la class PageAccueil avec la 
 * "Mon Super Site" "Moi" 
 * 
 * 4 initialiser la valeur dt_creation à aujourd'hui 
 * 
 * 5 utiliser la méthode show()
 * 
 */
