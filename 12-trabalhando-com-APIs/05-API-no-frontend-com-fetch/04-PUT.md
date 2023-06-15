# PUT

O método PUT é uma das principais formas de ALTERAR dados em um servidor. Em JavaScript, podemos utilizar o Fetch API para realizar o PUT.

## Prática

1. Criar a função `updateUser(updatedUser, id)` para atualizar um usuário existente:
    - Utilizar `fetch()` com o método PUT e a URL da API concatenada com o ID do usuário
    - Configurar o corpo da requisição com `JSON.stringify(updatedUser)`
    - Definir o cabeçalho da requisição com `"Content-Type: application/json; charset=UTF-8"`
    - Lidar com a resposta usando `response.json()`
    - Exibir uma mensagem de sucesso ou erro na página

    Exemplo de código:

    ```javascript
    function updateUser(updatedUser, id) {
        fetch(`${url}/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedUser),
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

2. Criar um novo usuário usando a função `addUser(newUser)` com os dados do novo usuário:
    - Chamar a função `addUser(newUser)` com um objeto contendo os dados do novo usuário.

    Exemplo de código:

    ```javascript
    const newUser = {
        name: "Luis Tomasini",
        avatar: "https://avatars.githubusercontent.com/u/100858288?v=4",
        city: "Batatais"
    };
    addUser(newUser);
    ```

3. Atualizar um usuário existente usando a função `updateUser(updatedUser, id)` com os dados do usuário atualizados e o ID do usuário:
    - Chamar a função `updateUser(updatedUser, id)` com um objeto contendo os dados atualizados do usuário e o ID do usuário.

    Exemplo de código:

    ```javascript
    const updatedUser = {
        name: "Litão",
        avatar: "https://picsum.photos/200/300",
        city: "Bauru"
    };
    const userId = 9; // ID do usuário que será atualizado
    updateUser(updatedUser, userId);
    ```

4. Obter um usuário específico usando a função `getUser(id)` com o ID do usuário desejado:
    - Chamar a função `getUser(id)` com o ID do usuário desejado para recuperar as informações desse usuário.

    Exemplo de código:

    ```javascript
    const userId = 9; // ID do usuário desejado
    getUser(userId);
    ```

5. Obter todos os usuários usando a função `getUsers()`:
    - Chamar a função `getUsers()` para obter todos os usuários da API.

    Exemplo de código:

    ```javascript
    getUsers();
    ```
