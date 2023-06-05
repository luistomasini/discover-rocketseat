# Conhecendo o fetch

O `fetch` é uma função nativa do JavaScript utilizada para fazer requisições HTTP. Ele permite enviar requisições para servidores e receber as respostas correspondentes. É uma forma moderna e mais flexível de fazer requisições AJAX, substituindo o antigo `XMLHttpRequest`.

Para utilizar o `fetch`, basta chamar a função passando como argumento a URL para a qual você deseja enviar a requisição. Em seguida, você pode encadear chamadas de métodos para tratar a resposta, como `then()` para lidar com a resposta de sucesso e `catch()` para tratar erros.

Exemplo de uso do `fetch` para fazer uma requisição GET:

```javascript
fetch('https://api.exemplo.com/dados')
  .then(response => response.json())
  .then(data => {
    // Aqui você pode fazer algo com os dados retornados
  })
  .catch(error => {
    // Aqui você trata os erros da requisição
  });
```

O `fetch` retorna uma Promessa (Promise), o que permite lidar com a resposta assincronamente. Você pode usar os métodos then() e catch() para manipular o resultado da requisição.

Lembre-se de que o `fetch` tem suporte em navegadores modernos, mas pode não ser suportado em navegadores mais antigos. Nesses casos, pode ser necessário usar um polifill ou uma biblioteca como o Axios para garantir a compatibilidade.

## Copiando o repositório do Github

Entrar no link: <https://github.com/jakeliny/node-api-discover>

Baixar o repositório

Com o terminal, dentro do repositório: `npm i`

Para rodar o servidor `npm start`
