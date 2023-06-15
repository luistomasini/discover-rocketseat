// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = 'Olá Devs'

// append (depois de todos os elementos) prepend (antes de qualquer elemento)
const body = document.querySelector('body')

body.append(div)