// Eventos

window.addEventListener('focus', event => {

    console.log("Focus")

});

document.addEventListener('click', event => {

    console.log("click");

});

let agora = new Date();
console.log(agora.getDate());

// funciona como array esse comando abaixo
console.log(agora.getMonth()); 

console.log(agora.getFullYear());

// comando como usar com a geolocalização:
console.log(agora.toLocaleDateString("pt-BR"))