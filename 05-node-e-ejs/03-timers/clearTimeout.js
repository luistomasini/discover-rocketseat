// clearTimeout cancela um timeOut

const timeOut = 3000
const finished = () => console.log('done')

//função callback
let timer = setTimeout(finished, timeOut)
clearTimeout(timer)
