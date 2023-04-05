// // Usando var. (opção que causa mais bug)

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;

// Usando let 
/*
Sempre usar let por semântica.
Lembrando que let dá menos bug.*/

// let forma = "retangulo";
// let altura = 5;
// let comprimento = 7;

// let area;

// if (forma === "retangulo"){
//     area = altura * comprimento;
// }
// else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area);

// Usando const (variável fica com o valor constante)

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
let area; 

if (forma === "quadrado"){
    area = altura * comprimento;
}
else {
    area = (altura * comprimento) / 2;
}
console.log(area);
