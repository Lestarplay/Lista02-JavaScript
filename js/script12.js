const precos = {
    1: 4.00,
    2: 4.50,
    3: 5.00,
    4: 2.00,
    5: 1.50
};

function calcularTotal() {
    const codigo = parseInt(prompt("Digite o código do produto (1 a 5):"));
    const quantidade = parseInt(prompt("Digite a quantidade comprada:"));


    if (precos[codigo] !== undefined) {
        const total = precos[codigo] * quantidade;
        alert(`Valor total a pagar: R$ ${total.toFixed(2)}`);
    } else {
        alert("Código de produto inválido!");
    }
}


calcularTotal();
