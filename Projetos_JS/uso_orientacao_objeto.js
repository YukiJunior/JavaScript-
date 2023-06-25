// forma antiga
let celular = function(){

     this.cor = "Prata";

     this.ligar = function(){

        console.log("Uma Ligação");
        return "Ligando"

     }
}

let objeto = new celular();

console.log(objeto.ligar());