const proposition = document.querySelector('#proposition');
const resultat = document.querySelector('#resultat');
const nb1 = document.querySelector('#nb1');
const nb2 = document.querySelector('#nb2');
let nb, depart, cpt=0;

const init = () => {
    nb1.value = Math.ceil(Math.random() * 10);
    nb2.value = Math.ceil(Math.random() * 10);
};

const jeu = () => {
    nb = 0;
    cpt = 0;
    init();
    depart= new Date();
}
jeu();
 
const verifier = () => {
   if(proposition.value == nb1.value * nb2.value){
    resultat.value = "Bravo";cpt++;
   }else{
    resultat.value = `non c'était ${nb1.value*nb2.value}`;
   }
   nb++;
   if(nb<5){
    init();
    proposition.value ="";
   }else{
    const fin = new Date();
    const duree = Math.ceil((fin.getTime() - depart.getTime())/1000)
    resultat.value = `${cpt} bonne(s) réponse(s) en ${duree} seconde(s)`;
   }
   
};