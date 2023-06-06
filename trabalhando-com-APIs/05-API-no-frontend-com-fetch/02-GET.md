# GET

O método GET é uma das principais formas de fazer requisições HTTP para obter dados de um servidor. Em JavaScript, podemos utilizar o Fetch API para realizar requisições GET de forma assíncrona.

## Exemplo de uso

```javascript
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Manipule os dados recebidos aqui
    console.log(data);
  })
  .catch(error => {
    // Trate erros aqui
    console.error('Ocorreu um erro:', error);
  });
```

## Prática

1. Criaremos um arquivo HTML "index.html", criaremos uma div com o `id="renderApiResult"`.

2. Utilizaremos o **LiveServer** no *VSCode* para visualizarmos as mudanças em tempo real

3. Criaremos um arquivo "main.js"

4. Dentro do arquivo js, criaremos uma constante para a URL da API porque utilizaremos em diversos lugares: ```const url = "http://localhost:5500/api"``` que é a URL do nosso API.

5. Nesse momento criaremos a seguinte função `function getUsers() { fetch(url) }`. Com essa função, o fetch já está buscando o conteúdo na API.
  
6. Para pegar o conteúdo no código:
   - `.then(response => console.log(response.json()))`
   - `.catch(error => console.error(error))` Só mostrará erro se o erro acontecer no fetch.

7. Chamamos o script no HTML com `<script src="main.js"></script>`

8. Verificamos no console do DevTools que realmente ele está trazendo a promessa, agora precisamos mostrar o conteúdo no front-end.

9. Criamos um novo *then* logo em seguida do primeiro *then*:
   - `then(data => renderApiResult.textContent = JSON.stringfy(data)`
**Aqui ele traz o objeto inteiro**

10. Executamos a função `getUsers()`

### Trazendo dados únicos

1. No html criamos mais essas tags:
   - `<hr>`
   - `<p id="userName"></p>`
   - `<p id="userCity"></p>`
   - `<img src="" id="userAvatar">`

2. Criaremos e executaremos a função:

```js
   function getUser() {
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}
```
