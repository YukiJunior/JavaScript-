// jeito moderno

class celular{

    constructor(){

        this.cor = "prata";
    }

    ligar(){
        console.log("Uma Ligação");
        return "Ligação";
    }
    
}

let objeto = new celular();
console.log(objeto.ligar);