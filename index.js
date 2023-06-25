// Variáveis,comparação e condições: 
 
// var declarão de variável( descontinuado)
var olaMundo = "Olá Mundo!!!"

console.log(olaMundo);
console.log("Clique OK para fazer o Update");
console.log("Fazendo Update do JavaScript");
alert("JavaScript, fazendo Upadate")

// let declarão de uma variável substitui o var

let a = 10;

// const declarão de uma constante
const b = -20;
const c = "20";
const d = 20;

// =  atribuição famoso (recebe)
// = comum usado em variáveis e const (ex: const b = -20)

console.log("Exemplos de comparação abaixo");

// == usado para comparação de Valor
console.log(a == b);
console.log(b == c);
console.log(c == d);

// === usado para comparação de Valor e Tipo
console.log(c === d);

// Para fazer uma comparação diferente usa !
// Exemplo abaixo comparação diferente de Valor e Tipo
console.log(c !== d);

console.log("Comparadores Lógicos")
// Exemplo abaixo comparação diferemte de Valor.
console.log(c != d);

//Comparadores && (and) sempre verdadeiro
console.log (d == c && typeof c == 'string');

// Comparadores || (ou) (or) uma condição precisa ser verdadeiro
console.log(d == c || typeof c == 'string');

// condições if e else

console.log("condições if/else")
let cor = "amarelo";

if( cor === "" ){
    console.log("siga em frente!!!");

}else {
    console.log("PARE");
}
// Exemplos else if
if(cor === "verde"){
    console.log("siga em frente");
} else if(cor === "amarelo"){
    console.log("atenção");
}else if(cor === "vermelho"){
    console.log("pare");
}






