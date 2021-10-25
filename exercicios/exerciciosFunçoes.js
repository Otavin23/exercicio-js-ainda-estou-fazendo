
// Exercicio 1 
//function variavel(a,b){
    //console.log("A soma e : ",a + b)
    //console.log("A divisão e :",a / b)
    //console.log("A multiplicação e : ",a * b)
//}

// Exercicio 3 
//function sumb(base,expoente){
    //let variavel = (base,expoente)
    //console.log(variavel *= variavel)
//}

// Exercicio 4
//function divisao (a,b){
    //let dividir = a / b 
    //let resto = a % b 
  //  return console.log("A divisão e :",dividir,"O resto e :",resto)
//}
//divisao(4,10)

//Exercicio 5
//function valor(a,b){
    //let variavel = a + b
    //let resultado = variavel.toFixed(2)
    //console.log("R$"+resultado)
//}
//valor(0.1,0.2)

// Esse aqui esta errado
/*
function capital (capitalInicial,taxaDeJuros,duracaoDias){
    let taxa = taxaDeJuros % capitalInicial
    console.log(taxa * capitalInicial)
}
capital(3000,3,145)
*/

/*
function divisivel(number) {
    if (number % 3){
        return console.log(true)
    }else{
        return console.log(false)
    }

}
divisivel(3)
*/

/*
function dia(passdia){ 
    switch (passdia) {
        case 1:
            console.log("Domingo e fim de semana")
            break;
        case 2:
            console.log("Segunda e um dia util")
            break
        case 3:
            console.log("Terça Feira e um dia util")
            break 
        case 4:
            console.log("Quarta feira e um dia util")
            break 
        case 5:
            console.log("Quinta feira e um dia util")
            break 
        case 6:
            console.log("Sexta feira e um dia util")
            break     
        case 7:
            console.log("Sabado e fim de semana")
            break 
        default:
            console.log("Semana ou dia invalido")
            break;
    }
}
dia(7)
*/

/*
function fruta(namefrut){
    switch (namefrut) {
        case "maçã":
            console.log("Não vendemos esta fruta aqui")
            break;
        case "kiwi":
            console.log("Estamos com escassez de kiwis")
            break 
        case "melancia":
            console.log("Aqui esta,sao 3 reais o quilo")
            break 
        default:
            console.log("Erro no console")
            break;
    }
}
fruta("melancia")
*/
let digitar = prompt("Digite o carro: ")
function carro(namecar){
    switch (namecar){
        case prompt("hatch"):
            console.log("Compra efetuada com sucesso")
            break 
        case "sedans":
            console.log("Tem certeza que nao prefere este modelo")
            break 
        case "motocicletas" :
            console.log("Tem certeza que nao prefere este modelo")
            break
        case "caminhonetes":
            console.log("Tem certeza que nao prefere este modelo")
            break 
        default:
            console.log("Nao trabalhamos com este tipo de automovel aqui")
        }
}
carro(digitar)