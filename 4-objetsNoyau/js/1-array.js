/**
 *  Fonctions
 */

// retourne la somme des nombres d'un tableau
// sommeNombres([5, 7, 8, 4]) => 24
// const sommeNombres = function(tab){
//    return tab.reduce(function(s,val){
//         return s+val;
//     }, 0)
// };


const sommeNombres = (tab) => tab.reduce((s,val) =>s+val,0);

// retourne la tranche d'un tableau entre nb1 et nb2 exclu
// tableauSlice([5, 7, 8, 4], 1, 3) => [7, 8]
const tableauSlice = (tab,a,b) => {

    return tab.filter(function(val,i){
        return (i>=a && i<b) ? true : false;
    })
};

// retourne un tableau pair = 0 impair = 1
// tableau01([5, 7, 8, 4]) => [1, 1, 0, 0]
const tableau01 = (tab) => {

   return tab.map(function(val){
        return val % 2;
    })
};

// Retourne un tableau contenant que les valeurs impaires
// tableauImpairs([5, 7, 8, 4]) => [5, 7]
const tableauImpairs = () => {};

// Retourne si toutes les valeurs sont inférieures à nb
// toutesInferieures([5, 7, 8, 4], 7) => false
// toutesInferieures([5, 7, 8, 4], 10) => true
const toutesInferieures = () => {};

// Retourne si une valeur est inférieure à nb
// uneInferieure([5, 7, 8, 4], 7) => true
// uneInferieure([5, 7, 8, 4], 4) => false
const uneInferieure = () => {};

// Retourne la somme des longueurs du tableau de mots
// sommeLongueurs(["exemples", "avec", "plusieurs", "mots"]) => 25
const sommeLongueurs = () => {};

// Retourne le tableau des mots dans l'ordre des longueurs des mots
// sortMots(["exemples", "avec", "plusieurs", "mots"]) => ["avec", "mots", "exemples", "plusieurs"]
const sortMots = () => {};

// Retourne un tableau contenant les mots de longueur nb
// longueurMots(["exemples", "avec", "plusieurs", "mots"], 4) => ["avec", "mots"]
const longueurMots = () => {};

//

/**
 *  Lancement des fonctions
 */

const exercice = () => {
  const listeNombres = document.querySelector("#tableauNombres");
  let tableauNombres = listeNombres.value.split(",").map((v) => +v); // decoupe la liste en tableau et convertit en nombre
  const listeMots = document.querySelector("#tableauMots");
  let tableauMots = listeMots.value.split(",");
  let nombre1 = +document.querySelector("#nombre1").value;
  let nombre2 = +document.querySelector("#nombre2").value;

  // somme
  document.querySelector("#sommeNombres").value = sommeNombres(tableauNombres);

  // slice
  document.querySelector("#tableauSlice").value = tableauSlice(tableauNombres, nombre1, nombre2);

  // tableau 0 1
  document.querySelector("#tableau01").value = tableau01(tableauNombres);

  // tableau impairs
  document.querySelector("#tableauImpairs").value = tableauImpairs(tableauNombres);

  // Toutes Inferieures
  document.querySelector("#toutesInferieures").value = toutesInferieures(tableauNombres, nombre1);

  // Une inferieure
  document.querySelector("#uneInferieure").value = uneInferieure(tableauNombres, nombre1);

  // somme longueurs
  document.querySelector("#sommeLongueurs").value = sommeLongueurs(tableauMots);

  // sort mots
  document.querySelector("#sortMots").value = sortMots(tableauMots);

  // longueur Mots
  document.querySelector("#longueurMots").value = longueurMots(tableauMots, nombre1);
};