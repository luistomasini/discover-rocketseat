// setTimeout roda uma função de X milissegundos

const timeOut = 3000
const finished = () => console.log('done')

//função callback
setTimeout(finished, timeOut)
console.log('Mostrar')