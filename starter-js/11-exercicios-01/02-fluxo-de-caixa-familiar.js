/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let saldo = {
    receitas: [],
    despesas: [],
}

function calcularSaldo([receitas], [despesas]){
    saldo.receitas = [receitas]
    saldo.despesas = [despesas]

    total = [receitas] - [despesas]
    
    if(total > 0) {
        console.log("Saldo Positivo")
    } else if (total == 0){
        console.log("Saldo Zerado")
    } else {
        console.log("Saldo Negativo")
    }

    return total
}

console.log(calcularSaldo([5000 + 4000], [8000 + 2000]))