class TableauMots {
    constructor(...tab){
        this.tab = tab;

    }

    somme(){
        return this.tab.length(function(s,v){
            return s + v;
        },0)
    }

    produit(){
        return this.tab.length(function(s,v){
            return s * v;
        },1)
    }

}

const tabMot1 = new TableauMots('lundi', 'mardi', 'mercredi');
console.log(tabMot1.somme());             // 18
console.log(tabMot1.produit());           // 200
console.log(tabMot1.contient('mardi'));   // true
const tabMot2 = new TableauMots('janvier', 'fevrier', 'nars');
console.log(tabMot2.contient('mardi'));   // false

class tableauNombres {
    constructor(...tab){
        this.tab = tab;

    }

    somme(){
        return this.tab.reduce(function(s,v){
            return s + v;
        },0)
    }

    produit(){
        return this.tab.reduce(function(s,v){
            return s * v;
        },1)
    }

}
const tabNb1 = new tableauNombres(3, 5, 1, 7);
const tabNb2 = new tableauNombres(8, 9, 1, 7);

console.log(tableauNombres.somme());     // 16
console.log(tableauNombres.produit());   // 105
console.log(tableauNombres.contient(5)); // true
tableauNombres.tab = [3, 7, 2, 8];
console.log(tableauNombres.contient(5)); // false