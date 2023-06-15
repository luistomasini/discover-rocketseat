# Consumindo a API do GitHub com Axios

Certifique-se de ter o pacote `axios` instalado em seu projeto JavaScript. Caso ainda não tenha, você pode instalá-lo utilizando o seguinte comando:
  
```bash
npm install axios
```

Importe o módulo axios em seu arquivo JavaScript:

```js
const axios = require('axios');
```

Realize uma requisição GET para a API do GitHub usando o Axios. Por exemplo, para obter informações sobre um usuário, utilize o seguinte código:

```js
    axios.get('https://api.github.com/users/{username}')
    .then(result => res.send(result.data))
    .catch(error => console.log(error))
```

Certifique-se de substituir {username} pelo nome de usuário desejado.

Após fazer a requisição, você pode utilizar os dados retornados pela API para realizar as operações desejadas no seu aplicativo.

Se quisermos buscar somente nossa foto por exemplo, faremos assim:

```js
.then(result => res.send(result.data.avatar_url))
```

No entanto, com o parâmetro "avatar_url", só teremos como retorno a URL. Devemos fazer assim:

```js
.then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
```
