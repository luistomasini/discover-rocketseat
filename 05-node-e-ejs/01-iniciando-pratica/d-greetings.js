const getFlagValue = require('./d-flags')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greetings')}`)