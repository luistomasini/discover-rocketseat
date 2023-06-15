# POST

1.Defina uma rota para a URL localhost:3000 usando o método POST e vamos exibir o que está sendo enviado no terminal:

```js

// A barra é a URL base
app.route('/').post((req,res) => console.log(req.body))

```

2.Execute o arquivo index.js no Node.js usando o comando:

`node .` ou `node index.js`

3.O navegador só exibe o método GET, portanto usaremos o ***Insomnia***

4.No Insomnia criamos uma nova coleção, e criamos uma requisição HTTP, ela por padrão vem com o protocolo GET, portanto mudaremos para ***POST***

5.Digitamos o 'localhost:3000' na barra de endereços e clicamos em ***SEND***

6.O Terminal retornará *undefined*, pois enviamos um body sem conteúdo.

7.Em "Body"no Insomnia, clicamos em body, e vamos em JSON, para criar um corpo em JSON para a requisição. Porém o terminal ainda retornará *undefined*

8.Precisamos fazer com que nosso servidor entenda que o que está recebendo é um JSON, para isso utilizamos um ***middleware***, que é a ponte entre as requisições.

9.Para fazermos o middlewar utilizamos o seguinte comando:

```js
//middleware
app.use(express.json())
```

Nesse comando utilizamos a função use do Express e passamos como parâmetros o express não inicializado para puxarmos a função .json dele.

10.Pare o servidor e dê SEND no Insomnia novamente. A resposta aparecerá no terminal.

11.Para a resposta aparecer na API (no Insomnia) modificamos o seguinte código para:

``` js
app.route('/').post((req,res) => res.send(req.body))
```
