const nome = prompt("Digite o nome do aluno:");
const nota = parseFloat(prompt("Digite a nota do aluno:"));

if (nota >= 7) {
    alert("Está APROVADO!");
} else {
    alert("Está em RECUPERAÇÃO!");
}