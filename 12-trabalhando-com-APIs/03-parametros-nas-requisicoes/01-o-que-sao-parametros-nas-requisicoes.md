# O que são parâmetros nas requisições

Paramâtros são formas de passarmos pra dentro do nosso código informações que não estavam lá antes.

```js
const express = require('express')

const app = express()

app.listen('3000')

app.use(express.json())

app.route('/').get((req, res) => res.send(req.query.name))

app.route('/').put((req, res) => res.send(req.body.author))

app.route('/:parametro').get((req, res) => res.send(req.params.parametro))

```
