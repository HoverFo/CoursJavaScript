/* Déclarations */
const diaporama = document.querySelector("section");    // balise section
const ul = diaporama.querySelector("ul");           // balise ul de diaporama
const listeLi = ul.querySelectorAll("li");      // liste des li de diaporama
const listeImages = ul.querySelectorAll("img");  // liste des images de ul
const figure = diaporama.querySelector("figure");       // balise figure de diaporama
const image = figure.querySelector("img");;        // balise img de figure
const figcaption = figure.querySelector("figcaption");;   // balise figcaption de figure
let indice = 0;
const nb = listeLi.length;

// <section class="diaporama">

diaporama.classList.add("diaporama");

for (let img of listeImages) {
    img.addEventListener("click", (event) => {
        event.preventDefault();
        image.src = img.parentElement.href;
        figcaption.textContent = img.alt;
    })
}

image.addEventListener("click", () => {
    listeLi[indice].style.display = "none";
    listeLi[4 + indice].style.display = "block";
    if (indice < nb - 5) indice++;
})