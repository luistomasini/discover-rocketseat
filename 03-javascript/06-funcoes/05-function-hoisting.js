//function hoisting

//acontece o hoisting, ou seja, ele executa a função mesmo vindo depois - função do tipo declaration
sayMyName()

function sayMyName(){
    console.log('Luis')
}

// aqui não acontece hoisting pois está em formato de expressão

sayMyName()

const sayMyName = function(){
    console.log('Luis')
}