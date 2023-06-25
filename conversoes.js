// Tipo de Dados



//boolean

// Conversão Explicitica

const numero = 456;
const numeroString = Number ("456");

/* Para Fazer as conversões vc precisa usar 
String e Number segue exemplo:
Fazendo a conversão: Number
comando abaixo convertendo no console.
console.log(numero + Number(numeroString));
Por semantica e para evitar bug o melhor é 
fazemos direto na variável 
*/
console.log(numero + numeroString); 

// vamos calcular a aarea de um retangulo
let largura = 10;
let altura =  5;

console.log(Number(largura) * Number(altura))
console.log( Number(largura) * Number(altura)); 
console.log("#######################################")

//String

let lar = "10";
let alt = "5";
console.log(+ lar * + alt)
console.log("#######################################")

let telefone =  12341234;
console.log("O telefone é "+ String(telefone)); 
console.log("O telefone é "+ telefone.toString());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let usuarioConectado = false;
//let usuarioConectado = true;
console.log(String(usuarioConectado));
console.log(Number(usuarioConectado));

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
let nome = "Yuki";
console.log(Number(nome));
console.log(nome);







