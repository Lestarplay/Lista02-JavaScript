const idade = parseInt(prompt("Digite a sua idade: "))
const sexo = prompt("Informe o seu Gênero: ")


if (sexo === "M" && idade >= 65) {
    alert("Você pode se aposentar (Homem com 65 anos ou mais).");
  } else if (sexo === "F" && idade >= 60) {
    alert("Você pode se aposentar (Mulher com 60 anos ou mais).");
  } else {
    alert("Você ainda não pode se aposentar.");
  }


