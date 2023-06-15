// Manipulando arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("node js")

// adicionar no começo
techs.unshift('sql')

// remover do fim
// techs.pop()

// remover do começo
// techs.shift()

// pegar somente alguns elementos do array (não modifica o array)
// console.log(techs.slice(1, 3))

// remover 1 ou mais itens em qualquer posição do array
techs.splice(2, 1)

// encontrar a posição de um elemento nao array
// let index = techs.indexOf('node js', 'css')
// techs.splice(index, 2)

console.log(techs)
