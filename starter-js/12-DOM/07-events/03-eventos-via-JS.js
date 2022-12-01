// Eventos

const h1 = document.querySelector('h1')

// no chamamento da função, não há paretenses, pois se colocados, ele executa a função automaticamente
h1.addEventListener('mouseover', print)


function print() {
    console.log('print')
}