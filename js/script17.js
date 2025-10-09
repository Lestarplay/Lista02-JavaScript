const salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo (R$):"));
const salarioFuncionario = parseFloat(prompt("Digite o salário do funcionário (R$):"));

const quantidade = salarioFuncionario / salarioMinimo;

  
alert("O funcionário recebe: " + quantidade);

