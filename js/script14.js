const peso = parseFloat(prompt("Digite seu peso em kg:"));
const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));

const imc = peso / (altura * altura);


let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc < 25) {
    classificacao = "Peso normal";
} else if (imc < 30) {
    classificacao = "Sobrepeso";
} else if (imc < 35) {
    classificacao = "Obesidade grau I";
} else if (imc < 40) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}


alert(`Seu IMC é ${imc.toFixed(2)}\nClassificação: ${classificacao}`);

