// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = 'Olá Devs'

// insertBefore 
// const body = document.querySelector('body')
// const script = document.querySelector('script')

// body.insertBefore(div, script)

// "insertAfter" (não existe)
const body = document.querySelector('body')
const header = document.querySelector('header')
body.insertBefore(div, header.nextElementSibling)
