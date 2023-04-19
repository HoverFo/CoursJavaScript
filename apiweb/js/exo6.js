const pelemele = document.querySelector('section');    // balise section
const ul = pelemele.querySelector('ul');           // balise ul de diaporama
const listeLi = ul.querySelectorAll('li');      // liste des li de diaporama
const listeImages = ul.querySelector('img');  // liste des images de diaporama
let nb1 = 0, nb2 =0;
const nb = listeLi.length;

pelemele.classList.add('pelemele')
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
listeLi.forEach(li=>{
    li.addEventListener('mouseenter', ()=>{
        li.animate(zoomPlus, options);
    })
    li.addEventListener('mouseleave', ()=>{
        li.animate(zoomMoins, options);
    })
})