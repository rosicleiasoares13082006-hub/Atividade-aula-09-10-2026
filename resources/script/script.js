let logico = num1 == num2

console.log(logico)
// tipo lógico


let maiorDeIdade = true

if(maiorDEidade){
    console.log("Voce é maior de idade");
}
else{
    console.log("Voce é menor de idade");
}


let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}


let idadeUsuario = Number(prompt("Digite a sua idade"))
if(idadeUsuario >= 18) {
    console.log("Voce é maior de idade");
}
else{
    console.log("Voce é menor de idade");
}


let saldo = Number(prompt("Digite o seu saldo"));

if(saldo > 0){
    console.log("Saldo positivo");
}
else if(saldo === 0){
     console.log("saldozerado");
}
else{
    console.log("saldo negativo")
}



let idade = Number(prompt("Digite sua idade:"));

if (idade <= 0) {
    console.log("Erro: idade inválida");
} 
else if (idade < 12) {
    console.log("Criança");
}
else if (idade >= 12 && idade < 18) {
    console.log("Adolescente");
} 
else if (idade >= 18 && idade < 60) {
    console.log("Adulto");
}
else if (idade >= 60) {
    console.log("Idoso");
}

   ggit