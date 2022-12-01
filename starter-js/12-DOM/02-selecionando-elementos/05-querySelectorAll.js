// querySelectorAll()

const elements = document.querySelectorAll('.one')


elements.forEach(el => console.log(el))

// quando se utiliza alguma busca sem ser o querySelectorAll, é retornado um HTMLCollection, portanto não da pra se utilizar o forEach

// no querySelectorAll, é retornado um NODEList, que permite o forEach