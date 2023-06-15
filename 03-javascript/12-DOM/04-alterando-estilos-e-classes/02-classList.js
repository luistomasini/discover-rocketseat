// Alterando estilos

const element = document.querySelector('body')

element.classList.add('active', 'green')

console.log(element.classList)

// element.classList.remove('active')
// toggle = pesquisa se a classe existe, se existe, ele tira, se não, ele adiciona
element.classList.toggle('active')

