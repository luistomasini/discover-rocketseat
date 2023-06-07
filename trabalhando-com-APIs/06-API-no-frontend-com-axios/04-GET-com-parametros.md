# GET como parâmetros

1. Criar a função `getUser(id)` para obter um usuário específico:
    - Utilizar `axios.get()` passando a URL com o ID do usuário como parâmetro.
    - Manipular a resposta usando `.then(response => {})`.
    - Atribuir o resultado à variável desejada, por exemplo, `response.data`.
    - Lidar com erros usando `.catch(error => {})`.
    - Realizar as ações desejadas com os dados obtidos.

    Exemplo de código:

    ```js
    function getUser(id) {
        axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data
            userName.textContent = data.name
            userCity.textContent = data.city
            userID.textContent = data.id
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
    }
    ```

2. Chamar as funções desejadas para executar as ações correspondentes:
    - Chamar getUsers() para obter todos os usuários.
    - Chamar getUser(id) com o ID do usuário desejado para obter informações específicas.
    - Chamar addNewUser(newUser) para adicionar um novo usuário.

    ```js
    getUsers()
    getUser(2)

    const newUser = {
        name: "Luis Tomasini",
        avatar: "https://avatars.githubusercontent.com/u/100858288?v=4",
        city: "Batatais"
    }
    ```
