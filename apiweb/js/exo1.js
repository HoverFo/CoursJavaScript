    /* Déclarations */    
    const diaporama = document.querySelector("section");    // balise section
    const ul = diaporama.querySelector("ul");           // balise ul de diaporama
    const listeLi = ul.querySelectorAll("li");      // liste des li de diaporama
    const listeImages = ul.querySelectorAll("img");  // liste des images de ul
    const figure = diaporama.querySelector("figure");       // balise figure de diaporama
    const image = figure.querySelector("img");;        // balise img de figure
    const figcaption = figure.querySelector("figcaption");;   // balise figcaption de figure
    

    // section {
    //     width: 800px;
    //     margin: auto;
    //   }
    diaporama.style.width = "800px";
    diaporama.style.margin = "auto";
    //   section ul {
    //     margin: auto;
    //     padding: 0;
    //     display: flex;
    //     flex-wrap: wrap;
    //     justify-content: center;
    //     list-style: none;
    //   }

    const css = {
        margin: "auto",
        padding: 0,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        listStyle: "none",
    }

    for(let prop in css){
        ul.style[prop] = css[prop];
    }
      
    //   section li {
    //     width: 150px;
    //     padding: 5px;
    //   }

    listeLi.forEach(li => {
        li.style.width = "150px";
        li.style.padding = "5px";
    });
      
    //   section li:nth-child(n+5) {
    //     display: none;
    //   }

    [...listeLi].slice(4).forEach(li => {
        li.style.display = "none";
    });
      
    //   section li img {
    //     border-radius: 10px;
    //     box-shadow: 0px 0px 10px #000000;
    //     background-color: #fff;
    //     width: 100%;
    //   }
    
    listeImages.forEach(img => {
        img.style.width = "100%";
    });

    //   section figure {
    //     text-align: center;
    //     margin: auto;
    //     width: 600px;
    //   }
      
    //   section img {
    //     border-radius: 10px;
    //     box-shadow: 0px 0px 10px #000000;
    //     background-color: #fff;
    //     width: 100%;
    //   }

    // réalisez les css par programmation