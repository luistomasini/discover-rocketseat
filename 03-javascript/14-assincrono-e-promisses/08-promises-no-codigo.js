/** 
* Promise
*
* A promessa de que algo irá acontecer
* Poderá dar certo ou errado
* mas irá acontecer
**/
let aceitar = false


console.log('pedir uber')
const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('pedido aceito!')
    }

    return reject('pedido negado!')
})

console.log('aguardando')

promessa
 // Promessa retorna com sucesso
 .then(result => console.log(result))
 // Promessa é rejeitada e usamos o catch() para capturar o erro
 .catch(erro => console.log(erro))
 .finally(() => console.log('finalizada'))