const exercice = () => {
    const liste = document.querySelector('#tableau');
    let tableau = liste.value.split(',').map((v) => +v);
    let nombre1 = +document.querySelector('#nombre1').value;
    let nombre2 = +document.querySelector('#nombre2').value;

    // Exo1 //
    let s = 0;
    for(let val of tableau){

        s += val;
    }
    exo1Afficher.value = s;
    // Exo2 //


    // Exo3 //
    let cpt = 0;
    for(let val of tableau){
        //if(val % 2 == 0){
        //    cpt++;
        //}
        val % 2 == 0 ? cpt++ : null;
    }
    exo3Afficher.value = cpt;
    // Exo4 //


    // Exo5 //
    
    // Exo6 //
    let app = false;
    for(let val of tableau){
         if(nombre1 == val){

            app = true;
         }   

    }
    exo6Afficher.value = app;


}


