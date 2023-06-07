# DELETE

1. Criar a função `deleteUser(id)` para excluir um usuário existente:
    -Utilizar `axios.delete()` com a URL da API concatenada com o ID do usuário.
    -Lidar com a resposta usando `.then()` e exibir a resposta no console.
    -Lidar com erros usando `.catch()` e exibir o erro no console.

    Exemplo de código:

    ```js
    function deleteUser(id) {
        axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.error(error))
    }
    ```

2. Chamar a função `deleteUser(id)` com o ID do usuário que será excluído:
