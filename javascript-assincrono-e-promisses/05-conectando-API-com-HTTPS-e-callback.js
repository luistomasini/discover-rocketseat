const https = require('http')
const API = 'http://jsonplaceholder.typicode.com/users?_limit=2'

https.get(API, res => {
	console.log(res.statusCode)
})

console.log('conectando API')