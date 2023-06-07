# GET

1. Importe a biblioteca Axios no seu código JavaScript:

    `<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`

2. Defina a URL da API que você deseja acessar:

    `const url = "http://localhost:5500/api";`;

3. Crie a função `getUsers()` para obter os usuários da API:

    ```js
    function getUsers() {
        axios.get(url)
            .then(response => {
                apiResult.textContent = JSON.stringify(response.data);
            })
            .catch(error => console.error(error));
    }
    ```

4. Chame a função `getUsers()` para executar a requisição GET:

Esse código utilizará o Axios para enviar uma requisição GET para a URL especificada. A resposta da API será tratada no callback da função `.then()`, onde o resultado será exibido no elemento HTML com o id apiResult. Em caso de erro, o callback da função `.catch()` será executado e o erro será exibido no console.

Certifique-se de incluir a biblioteca Axios no seu código HTML para que o Axios seja carregado corretamente antes de utilizar suas funções.
