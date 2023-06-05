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

Nesse exemplo, substitua a variável url pela URL da API que você deseja fazer a requisição GET. O método fetch retorna uma Promise que representa a resposta da requisição. Podemos encadear chamadas .then para lidar com a resposta e acessar os dados retornados. Utilizamos o método .json() para transformar a resposta em um objeto JSON.

Caso ocorra algum erro na requisição, podemos utilizar o método .catch para tratá-lo.

Essa é uma maneira básica de utilizar o método GET com Fetch em JavaScript para obter dados de uma API. É importante lembrar que o Fetch é compatível com a maioria dos navegadores modernos.
