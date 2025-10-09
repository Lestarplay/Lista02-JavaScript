const quantidade = parseInt(prompt("Digite o número de maçãs compradas:"));

let precoPorMaca;
if (quantidade < 12) {
    precoPorMaca = 0.50;
} else {
    precoPorMaca = 0.40;
}

const total = quantidade * precoPorMaca;

alert("Total a pagar: " + total);