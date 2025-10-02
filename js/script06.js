var nota01 = parseInt(prompt("Digite a primeira nota: "))
var nota02 = parseInt(prompt("Digite a segunda nota: "))
var nota03 = parseInt(prompt("Digite a terceira nota: "))

var media = (nota01 + nota02 + nota03) / 3;

if(media >= 7){
   alert("Aprovado! Sua média foi: " + media)
}else{
    alert("Reprovado! Sua média foi: " + media)
}