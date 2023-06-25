// Função comum:

function calc(x1,x2, operator) {

    return eval(`${x1} ${operator} ${x2}`);
// eval função nativa avisa que não é uma String
}
let resultado = calc(1, 2,"+");

console.log("Resultado da função Comum");
console.log(resultado);

/*função anonima precisa ser coloca dentro de () e
fechada com ; quando for invocar a função anomima
é necessário abrir () com os argumentos.
Nesse caso a variável precisou ser declara antes
da função anonima: "Segue o Exemplo abaixo".*/ 

resultado = calc(1, 2, "-");

(function(x1, x2, operator) {
    
    return eval(`${x1} ${operator} ${x2}`);

})(1, 2, "-"); 
/* No ultimo () com ; está invocando a função 
é necessário colocar os parametros dentro dos (), 
ex:(parametros); e fechar com ; 
Exemplo (1, 2, "-"); para função anonima funcionar
é necessário invocar ela dessa forma */

console.log("Resultado da função Anonima");
console.log(resultado);

// arrow Function  usa => representa uma flecha

let calq=(x1, x2, operator)=> {
    
    return eval(`${x1} ${operator} ${x2}`);
}
resultado = calc(1,2,"/");

console.log("Resultado da Arrow Function");
console.log(resultado);


