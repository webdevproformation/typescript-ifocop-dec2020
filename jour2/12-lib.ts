// fichier qui ne va contenir qu'un seul export

function perimetre( largeur : number , hauteur : number ) :string{
    return `le périmètre d'un rectangle de largeur ${largeur} et hauteur ${hauteur} est égal à ${(largeur + hauteur) * 2}`;
}

function surface( largeur : number , hauteur : number ) :string{
    return `la surface d'un rectangle de largeur ${largeur} et hauteur ${hauteur} est égale à ${largeur * hauteur }`;
}

export default function informationRectangle ( largeur : number , hauteur : number ) :Array<string>{
    return [
        surface( largeur, hauteur  ) ,
        perimetre( largeur  , hauteur )
    ]
}

