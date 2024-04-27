
let About=document.querySelector('#About');
let Services=document.querySelector('#Services');
let Projects=document.querySelector('#Projects');
let Contact=document.querySelector('#Contact');


const elementos= document.querySelectorAll('.nav__link');


//Inicio

About.classList.add('nav__link--cta')


//About
About.addEventListener('click', ()=>{

    elementos.forEach(elemento => {
        elemento.classList.remove('nav__link--cta')
    })

    About.classList.toggle('nav__link--cta')
})
//Services
Services.addEventListener('click', ()=>{

    elementos.forEach(elemento => {
        elemento.classList.remove('nav__link--cta')
    })

    Services.classList.toggle('nav__link--cta')
})
//Projects
Projects.addEventListener('click', ()=>{

    elementos.forEach(elemento => {
        elemento.classList.remove('nav__link--cta')
    })

    Projects.classList.toggle('nav__link--cta')
})
//Contact
Contact.addEventListener('click', ()=>{

    elementos.forEach(elemento => {
        elemento.classList.remove('nav__link--cta')
    })

    Contact.classList.toggle('nav__link--cta')
})