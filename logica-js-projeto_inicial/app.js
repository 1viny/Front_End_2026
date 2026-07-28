alert("Bem vindo ao jogo do Número Secreto");
let numeroSecreto =6;
console.log(numeroSecreto)

let chute = prompt("Chute um número entre 0 e 30");
 if (chute == numeroSecreto){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`)
 }else{
    alert("Você errou :(")
 }