const diaporama = document.querySelector("section");    // balise section
const ul = diaporama.querySelector("ul");           // balise ul de diaporama
const listeLi = ul.querySelectorAll("li");      // liste des li de diaporama
const listeImages = ul.querySelectorAll("img");  // liste des images de ul
let indice = 0;
const nb = listeLi.length;


// <section class="diaporama">
//     <div>
//         <div></div>
//         <ul>
//             ...
//         </ul>
//         <div></div>
//     <div>
const cadre = document.createElement('div');
const gauche = document.createElement('div');
const droite = document.createElement('div');
diaporama.insertBefore(cadre, ul);
cadre.append(gauche, ul, droite);


//     <figure>
//         <img src="images/image1.jpg" alt="image1">
//     <figcaption>Image1</figcaption>
// </figure>
// </section>


diaporama.classList.add("diaporama");
const figure = document.createElement('figure');
const image = document.createElement('img');
image.src = listeImages[0].src;
const figcaption = document.createElement('figcaption');
figcaption.textContent = listeImages[0].alt;
figure.append(image, figcaption);
diaporama.appendChild(figure);
const color1=[
    {
        color: "transparent"
    }
]
const couleur = window.getComputedStyle(figcaption).color;
const color2=[
    {
        color: couleur
    }
]
const hide=[
    {
        opacity: 0
    }
]
const show=[
    {
        opacity: 1
    }
]
const zoomPlus=[
    {
        zIndex: 2
    },
    {
        transform : "scale(2)",
        zIndex: 2

    }
]
const zoomMoins=[
    {
        zIndex: 1
    },
    {
        transform : "scale(1)",
        zIndex: 1
    }
]

const options = {
duration : 1000,
fill : "forwards"
}

for (let img of listeImages) {
    img.addEventListener("click", (event) => {
        event.preventDefault();
        image.animate(hide, options).finished.then(()=>{
            image.src = img.parentElement.href;
            image.animate(show, options);
        });
        figcaption.animate(color1, options).finished.then(()=>{
            figcaption.textContent = img.alt;
            figcaption.animate(color2, options);
        });

        
        
    })
   
}

listeLi.forEach(li=>{
    li.addEventListener('mouseenter', ()=>{
        li.animate(zoomPlus, options);
    })
    li.addEventListener('mouseleave', ()=>{
        li.animate(zoomMoins, options);
    })
})

droite.addEventListener("click", () => {
    listeLi[indice].style.display = "none";
    listeLi[4 + indice].style.display = "block";
    if (indice < nb - 5) indice++;
})

gauche.addEventListener("click", () => {
    listeLi[indice].style.display = "block";
    listeLi[4 + indice].style.display = "none";
    if (indice > 0) indice--;
})