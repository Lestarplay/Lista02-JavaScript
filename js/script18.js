const nome = prompt("Digite o nome do aluno:");
const turno = prompt("Digite o turno (M para Matutino ou V para Vespertino):")

if (turno === "M") {
    alert("Bom dia, " + nome);
} else if (turno === "V") {
    alert("Boa tarde, " + nome);
}

