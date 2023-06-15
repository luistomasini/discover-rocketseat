# Body Params

**Body Params (Parâmetros de Corpo)** são dados enviados no corpo de uma requisição HTTP, geralmente em um formato estruturado como JSON ou XML. Eles são usados para transmitir informações mais complexas, como objetos ou arrays, para o servidor.

**Exemplo de uso de Body Params em uma requisição POST com o Express**:

```javascript
const express = require('express')

const app = express()

app.listen('3000')

app.use(express.json())

app.route('/'). post((req, res) => {
    const {nome, cidade} = req.body
    res.send(`Meu nome é ${nome} e minha cidade é ${cidade}`)
})
```

Neste exemplo, estamos usando o framework Express para criar um servidor Node.js. Usamos o middleware express.json() para que o Express consiga entender os dados enviados no corpo da requisição, que estão no formato JSON. A rota POST / é onde recebemos as requisições POST.

Dentro da função que lida com a rota, usamos req.body para acessar os dados enviados no corpo da requisição.
E com a função `res.send` podemos acessar qualquer elemento do body. No exemplo, estamos pegando dois elementos do body em JSON apenas.

Ao iniciar o servidor com app.listen, ele estará ouvindo na porta 3000 e enviará essas informações.

**Obs.:** Podemos receber o o body pelos verbos **POST**, **PUT** e **PATH**
