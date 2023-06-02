# PUT

1.Crie uma nova requisicção no Insomnia com o nome PUT e o mude o método também para PUT.

2.O PUT serve para editar informações. Criaremos uma nova variável:

```js
let auhtor = "Luis"
```

3.Criaremos a rota para a mudança da informação:

```js
app.route('/').put((req,res) => {
    author = req.body
    res.send(author)
})

```

4.Execute o arquivo index.js no Node.js usando o comando:

`node .` ou `node index.js`

5.No Insomnia inserimos "localhost:3000" na barra de endereços.

6.Criamos um "Body" em JSON.

7.Como utilizamos *author*, modificaremos essa informação em JSON:

```json
{
    "author": "Luis Tomasini"
}
```

8.É necessário o middleware para a tradução no server:

```js
app.use(express.json())
```

9.Para verificar o valor anterior da variável com GET adicione após ela:

```js
app.route('/').get((req,res) => res.send(author))
```

10.Até esse momento, o valor JSON está sendo passado com as chaves para a variável e não é isso que queremos. Para mudar isso adicione .author após req:

```js
app.route('/').put((req,res) => {
    author = req.body.author
    res.send(author)
})

```

Assim a variável guarda apenas o conteúdo que a gente está enviando, isto é, agora a mudança é vista no Front-End.
