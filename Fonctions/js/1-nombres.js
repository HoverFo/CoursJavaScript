// retourne la plus grande valeur : 
// plusGrand(3, 7) => 7
// plusGrand(12, 2) => 2
const plusGrand = function(a,b) {
    // if(a>b){
    //     return a;
    // }
    // else{
    //     return b;
    // }
    return a > b ? a : b;
};

// retourne une chaine de caractères avec la table du parametre :
// table(8) => 1 * 8 = 8 ...
// table(5) => 1 * 5 = 5 ...
const table = function(a) {
    for(let i = 1; i<=10; i++){
        let texte="";
        resultat= i*a;
        texte += `${i}*${a}=${resultat} \n`;
       return texte; 
    }
    return "";
};

// retourne la somme d'un tableau de nombres :
// somme([1,2,3]) => 6
// somme([4,3,2]) => 9
const somme = function(){
    return "";
};

// retourne la somme de trois nombres :
// somme3(1, 3, 5) => 9
// somme3(...[4, 6, 2, 8]) => 12
const somme3 = function(){
    return "";
};

/**
 *  Lancement des fonctions
 */

const exercice = () => {
    const liste = document.querySelector('#tableau');
    let tableau = liste.value.split(',').map((v) => +v);
    let nombre1 = +document.querySelector('#nombre1').value;
    let nombre2 = +document.querySelector('#nombre2').value;
    let nombre3 = +document.querySelector('#nombre3').value;

    // PlusGrand
    document.querySelector('#plusGrand').value = plusGrand(nombre1, nombre2);

    // Table
    document.querySelector('#table').value = table(nombre1);

    // Somme
    document.querySelector('#somme').value = somme(tableau);

    // Somme3
    document.querySelector('#somme3').value = somme3(nombre1, nombre2, nombre3);
    document.querySelector('#somme3bis').value = somme3(...tableau);

}

