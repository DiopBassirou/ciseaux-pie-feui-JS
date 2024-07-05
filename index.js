let monchoix = document.getElementById('monchoix');
let choixordi = document.getElementById('choixord');
let pierre = document.getElementById('Pierre')
let papier = document.getElementById('Papier')
let ciseaux = document.getElementById('Ciseaux');
let h1=document.querySelector('h1')
let idDeMonChoix;
let valAleatoir;
papier.addEventListener('click', (e) => {
    monchoix.innerHTML = `<img src="/image/papier.jpg" alt="" class="contenu">`;
    idDeMonChoix= e.target.id
    choix()
})
ciseaux.addEventListener('click', (e) => {
    monchoix.innerHTML = `<img src="/image/ciseaux.png" alt="" class="contenu">`;
    idDeMonChoix= e.target.id
    choix()
})
pierre.addEventListener('click', (e) => {
    monchoix.innerHTML = `<img src="/image/pierre.jpg" alt="" class="contenu">`;
    idDeMonChoix= e.target.id
    choix()
})
function choix() {
    valAleatoir = Math.round(Math.random() * 2);
    if ( valAleatoir == 0) { choixordi.innerHTML = `<img src="/image/papier.jpg" alt="" class="contenu">`; }
    if ( valAleatoir == 1) { choixordi.innerHTML = `<img src="/image/ciseaux.png" alt="" class="contenu">`; }
    if ( valAleatoir == 2) { choixordi.innerHTML = `<img src="/image/pierre.jpg" alt="" class="contenu">`; }
    win()
    lose() 
    equal() 
}
function win(){
    if(idDeMonChoix=="Ciseaux" &&  valAleatoir==0 /*papier=0*/){h1.innerHTML="gagner" }
    if(idDeMonChoix=="Pierre" &&  valAleatoir==1 /*ciseaux=1*/ ){h1.innerHTML="gagner" }
    if(idDeMonChoix=="Papier" &&  valAleatoir==2 /*pierre=2*/ ){h1.innerHTML="gagner" }
}
function lose(){
    if(idDeMonChoix=="Pierre" &&  valAleatoir==0 /*papier=0*/){h1.innerHTML="perdu"}
    if(idDeMonChoix=="Papier" &&  valAleatoir==1 /*ciseaux=1*/ ){h1.innerHTML="perdu"}
    if(idDeMonChoix=="Ciseaux" &&  valAleatoir==2 /*pierre=2*/ ){h1.innerHTML="perdu"}
}
function equal(){
    if(idDeMonChoix=="Papier" &&  valAleatoir==0 /*papier=0*/){h1.innerHTML="nul"}
    if(idDeMonChoix=="Ciseaux" &&  valAleatoir==1 /*ciseaux=1*/ ){h1.innerHTML="nul"}
    if(idDeMonChoix=="Pierre" &&  valAleatoir==2 /*pierre=2*/ ){h1.innerHTML="nul"}
}