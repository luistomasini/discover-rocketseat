# Query Params

**Query Params (Parâmetros de Consulta)** são utilizados para enviar informações adicionais em uma URL. Eles são inseridos após o ponto de interrogação (?) na URL e são compostos por pares chave-valor. Os query params permitem que os clientes filtrem, classifiquem e pesquisem recursos com base em critérios específicos.

Por exemplo, na URL `https://api.example.com/products?category=eletronics&price_max=100`, temos dois query params: category e price_max. O valor eletronics para a chave category indica que estamos solicitando apenas produtos da categoria eletrônicos, e o valor 100 para a chave price_max indica que queremos produtos com preço máximo de 100.

Os query params são opcionais e podem ser usados para ajustar os resultados retornados pela API com base nas necessidades do cliente.

```js
const express = require('express')

const app = express()

app.listen('3000')

app.use(express.json())

app.route('/').get((req,res) => res.send(req.query))
app.route('/about').get((req,res) => res.send(req.query))
app.route('/about/user').get((req,res) => res.send(req.query.id))
```

1. A variável é criada na própria requisição e não por parâmetros. Diversas variáveis podem ser criadas com o "&" separando as mesmas.
2. A segunda rota segue a mesma lógica dos route params.
3. Aqui utilizamos o ".id" para buscarmos exatamente pela query "?id=valor". Caso seja buscado algo diferente, a rota não é encontrada gerando erro. Se a busca for por "?id=valor" mais alguma query, só teremos como retorno o id.
