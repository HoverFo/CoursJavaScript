const pelemele = document.querySelector('section');    // balise section
const ul = pelemele.querySelector('ul');           // balise ul de diaporama
const listeLi = ul.querySelectorAll('li');      // liste des li de diaporama
const listeImages = ul.querySelectorAll('img');  // liste des images de diaporama
let nb1 = 0, nb2 =0;
const nb = listeLi.length;

pelemele.classList.add('pelemele');

[...listeLi].slice(9).forEach(li=>{
    li.style.display = "none";
})
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
const options = {
    duration : 1000,
    fill : "forwards"
    }
const anim = () =>{
nb1 = Math.floor(Math.random()*9);
 nb2 = Math.floor(Math.random()*3)+9;

 listeLi[nb1].animate(hide, options).finished.then(()=>{
    const img1 =listeImages[nb1];
    const img2 =listeImages[nb2]; 
    [img1.src, img2.src] = [img2.src, img1.src];
    listeLi[nb1].animate(show, options).finished.then(()=>{
        anim();
    });
 })

}
anim();
 