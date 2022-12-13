const { EventEmitter } = require('events')
const ev = new EventEmitter()

// ev.on('saySomething', (message) => {
//     console.log('Eu ouvi você:', message)
// })

ev.once('saySomething', (message) => {
    console.log('Eu ouvi você:', message)
})

ev.emit('saySomething', "Lita")
ev.emit('saySomething', "Amanda")
ev.emit('saySomething', "Tião")
