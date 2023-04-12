// Arrow Funções

function apresetar(nome){
    return `meu nome é: ${nome}`
}

// ARROW Function
const apresentaArrow = nome => `Meu nome é: ${nome}`;
const soma = (num1, num2) => num1 + num2;


// Arrow function com + de 1 linha de instrução
const somaNumerosPequenos = (num3, num4) =>{
    if (num3 || num4 > 10){
        return "Somente números de 1 a 9"
    }
    else{
        return num3 + num4;
    }
}
