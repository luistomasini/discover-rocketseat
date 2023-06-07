# POST

1. Criar uma função `addNewUser(newUser)` para adicionar um novo usuário:

2. Utilizar `axios.post()` com a URL da API e o objeto newUser contendo os dados do novo usuário.

3. Lidar com a resposta usando `response.then()` e `response.catch()`.

4. Exibir a resposta no console ou realizar outras ações necessárias.

    Exemplo de código:

    ```js
    function addNewUser(newUser) {
        axios.post(url, newUser)
        .then(response => {
            console.log(response);
        }) 
        .catch(error => console.error(error));
    }
    ```

5. Chamar a função `addNewUser()` com um objeto contendo os dados do novo usuário:

6. Criar um objeto `newUser` com as propriedades name, avatar e city preenchidas.

7. Chamar a função `addNewUser(newUser)` para adicionar o novo usuário.

    Exemplo de código:

    ```js
    const newUser = {
        name: "Luis Tomasini",
        avatar: "https://avatars.githubusercontent.com/u/100858288?v=4",
        city: "Batatais"
    };
    addNewUser(newUser);
    ```
