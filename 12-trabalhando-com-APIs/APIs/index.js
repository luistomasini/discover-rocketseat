const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

app.use(express.json())

app.route('/').get((req,res) => {
    
    axios.get('https://api.github.com/users/luistomasini')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.log(error))
})
