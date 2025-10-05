const mes = parseInt(prompt("Digite o mês da sua escolha: "))

const diasPorMes = {
    "janeiro": 31,
    "fevereiro": 28,
    "março": 31,
    "abril": 30,
    "maio": 31,
    "junho": 30,
    "julho": 31,
    "agosto": 31,
    "setembro": 30,
    "outubro": 31,
    "novembro": 30,
    "dezembro": 31,
};
if (diasPorMes){
   alert("A quantidade de dias são: ()" + diasPorMes)
}else {
    alert("Mês inválido. tente novamnete.")
}
