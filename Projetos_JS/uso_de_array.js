// ARRAY

let carros = ["Palio 98", "Toro", "Uno", 
10, true, new Date(), Function()];

// mostra a lista completa do array
console.log(carros);
// mostra quantidade total do array
console.log(carros.length);
// mostra o indice do array(posição)
console.log(carros[0]);
// mostra o ano do array
console.log(carros[5].getFullYear());

// Usando forEach

carros.forEach(function(value, index){

    console.log(index, value);

});


