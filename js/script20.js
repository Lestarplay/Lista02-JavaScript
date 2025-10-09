  const num1 = parseInt(prompt("Digite o primeiro número:"));
  const num2 = parseInt(prompt("Digite o segundo número:"));
  const num3 = parseInt(prompt("Digite o terceiro número:"));

  const media = (num1 + num2 + num3) / 3;

  if (media >= 7) {
    alert("Situação: Aprovado" + media);
  } else {
    alert("nSituação: Reprovado" + media);
  }
