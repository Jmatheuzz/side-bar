import { conhecendoFormasHTML, aplicandoPraticaHTML, extraHTML } from "./conteudos.js";

const conteudo = document.querySelector('.conteudo');
const proximo = document.querySelector('.proximo');
const voltar = document.querySelector('.voltar');
const sections = document.querySelectorAll('.section');
const conhecendoFormas = document.querySelector('.conhecendo-formas');
const aplicandoPratica = document.querySelector('.aplicando-pratica');
const extra= document.querySelector('.extra');


conhecendoFormas.addEventListener('click', ()=>{
    conteudo.innerHTML = conhecendoFormasHTML;
})
aplicandoPratica.addEventListener('click', ()=>{
    conteudo.innerHTML = aplicandoPraticaHTML;
})
extra.addEventListener('click', ()=>{
    conteudo.innerHTML = extraHTML;
})

sections.forEach(section => {
    section.addEventListener('click', ()=>{
        if(section.children[1].classList.contains('sub-section-on')){
            section.children[1].classList.add('sub-section');
            section.children[1].classList.remove('sub-section-on');

        }else{
            section.children[1].classList.remove('sub-section');
            section.children[1].classList.add('sub-section-on');
        }

    })
});


proximo.addEventListener('click', () => {
    const title = document.querySelector('.title');
    switch (title.innerHTML) {
        case 'Conhecendo as formas':
            conteudo.innerHTML = aplicandoPraticaHTML;
            break;
        case 'Aplicando na prática':
            conteudo.innerHTML  = extraHTML;
            break;
        default:
            
            break;
    }
});

voltar.addEventListener('click', () => {
    const title = document.querySelector('.title');
    switch (title.innerHTML) {
        case 'Conhecendo as formas':
            break;
        case 'Aplicando na prática':
            conteudo.innerHTML  = conhecendoFormasHTML;
            break;
        case 'Extra':
            conteudo.innerHTML = aplicandoPraticaHTML;
            break;
        default:

            break;
    }
});