# GET

1.Defina uma rota para a URL localhost:3000 usando o método GET:

```js
// A barra é a URL base
app.route('/').get((req, res) => res.send("Hello!"))

```

2.Se quisermos criar outra rota

```js
app.route('/sobre').get((req, res) => res.send("Hello! Sobre"))
```

3.Execute o arquivo index.js no Node.js usando o comando:

`node .` ou `node index.js`

Obs.: A cada vez que fizermos uma alteração é necessário que se reinicialize o servido. Para parar o servidor no terminal, utilizamos "Ctrl+C" e rodamos o código acima novamente.

Agora você pode acessar a URL localhost:3000 em seu navegador para visualizar a resposta "Olá, mundo!"
