class Bouton{
#val;
constructor(selector){
    
    this.elt = document.querySelector(selector)
    this.nb=0;
    this.elt.addEventListener('click', ()=>{
        this.plus();
    })
}

    plus(){
        this.nb++;
    }

    set nb(nb){
        this.#val = nb;
        this.elt.textContent = nb;
    }

    get nb(){
        return this.#val;
    }
}








btn1 = new Bouton('button')