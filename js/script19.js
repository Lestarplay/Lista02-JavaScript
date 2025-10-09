const idade = parseInt(prompt("Digite sua idade:"));

  if (idade >= 18 && idade <= 70) {
    alert("O voto é OBRIGATÓRIO.");
  } else if ((idade >= 16 && idade < 18) || idade > 70) {
    alert("O voto é FACULTATIVO.");
  } else {
    alert("Você AINDA NÃO PODE votar.");
  }


