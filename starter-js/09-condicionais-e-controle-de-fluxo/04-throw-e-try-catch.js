// throw

function sayMyName(name = '') {
    if (name === '') {
        throw "Nome é obrigatório"
    }

    console.log('depois do erro')
}

// try...catch

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após a função de erro')

// ** Se apenas o throw é utilizado, sem o try catch, ele para a aplicação toda
// ** Se utilizado junto do try catch, o erro é mostrado, porém a aplicação não é interrompida
