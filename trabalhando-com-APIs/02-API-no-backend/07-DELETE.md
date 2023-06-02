# DELETE

1.Criaremos a rota para deletar a informação:

```js
app.route('/').delete((req,res) => res.send("apagado!"))

```

2.O DELETE pede geralmente um indentificador. Esse indentificador é passado na rota, qunado isso acontece, chamamos de ***params***. Os dois pontos siginificam "variável".

```js
app.route('/:identificador').delete((req,res) => {
    res.send(req.params.identificador)
})
```

3.Agora criamos uma requisição DELETE no Insomnia e passamos a URL "localhost:3000".

4.Dessa forma ele retornará o resultado "Cannot DELETE /". No entanto se passarmos algum valor após a *barra*, que é o ":identificador" em nossa rota, teremos o retorno desejado.
