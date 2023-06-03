# Route params

**Route Params (Parâmetros de Rota)** são partes variáveis de uma URL que são utilizadas para identificar e recuperar recursos específicos em uma API. Eles são definidos na própria rota e podem ser acessados pelo servidor durante o processamento da requisição.

```js
const express = require('express')

const app = express()

app.listen('3000')

app.use(express.json())

app.route('/').get((req,res) => res.send("oi"))
app.route('/:nome').get((req,res) => res.send(req.params.nome))
app.route('/identidade/:nome').get((req,res) => res.send(req.params.nome))

```

O parâmetro que vem após a barra se torna uma variável. Portanto não haverá apenas a rota '/', mas também  '/:nome'. Se buscarmos "localhost:3000" a rota retornará "oi", enquanto, se buscarmos "localhost:3000/luis", a rota retornará a variável "luis".

Por fim, a última rota criada só "pega" as informações se depois da '/' vier "identidade" e depois a variável. Qualquer valor que não seja "identidade" gera erro.
