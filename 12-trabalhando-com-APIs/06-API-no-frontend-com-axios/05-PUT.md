# PUT

1. Criar a função `updateUser(id)` para atualizar um usuário existente:
    - Utilizar `axios.put()` com a URL da API concatenada com o ID do usuário.
    - Configurar o corpo da requisição com o objeto `userUpdated`, contendo os dados atualizados do usuário.
    - Lidar com a resposta usando `.then()` e exibir a resposta no console.
    - Lidar com erros usando `.catch()` e exibir o erro no console.

    Exemplo de código:

    ```js
    function updateUser(id) {
        axios.put(`${url}/${id}`, userUpdated)
        .then(response => console.log(response))
        .catch(error => console.error(error))
    }
    ```

2. Definir o objeto `userUpdated` com os dados atualizados do usuário:

    ```js
    const userUpdated = {
        name: "Zé do Caneco",
        avatar: "https://picsum.photos/200/300",
        city: "Muzambinho"
    };
    ```
