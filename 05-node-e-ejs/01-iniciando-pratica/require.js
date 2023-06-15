// Adicionar módulos nativo do Node dentro de nossos arquivos JS

const { checkPrimeSync } = require('crypto')
const path = require('path')

console.log(path.basename(__filename))

// meus módulos
const myModule = require('./exports.js')
console.log(myModule)