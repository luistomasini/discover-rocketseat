# DELETE

O método DELETE é uma das principais formas de REMOVER dados em um servidor. Em JavaScript, podemos utilizar o Fetch API para realizar o DELETE.

## Prática

1. Criar a função `deleteUser(id)` para excluir um usuário existente:

2. Utilizar `fetch()` com o método DELETE e a URL da API concatenada com o ID do usuário

3. Definir o cabeçalho da requisição com `"Content-Type: application/json; charset=UTF-8"`

4. Lidar com a resposta usando `response.json()`

5. Exibir uma mensagem de sucesso ou erro na página
  
    Exemplo de código:

    ```js
    function deleteUser(id) {
        fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => {
            // Manipular a resposta da API
            alertApi.textContent = data;
        })
        .catch(error => console.error(error));
    }
    ```

6. Chamar a função `deleteUser(id)`
