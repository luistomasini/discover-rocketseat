# POST

O método POST é uma das principais formas de incluir dados em um servidor. Em JavaScript, podemos utilizar o Fetch API para realizar o POST.

## Prática

1. Criamos uma nova função chamada "addUser"

2. Criamos um objeto em um constante chamado "newUser". Colocamos name, avatar (Ex.: <http://lorempixel.com/400/200> ) e city. O id é gerado automaticamente.

3. O objetivo é passar esses novos dados para a nossa função.

4. Iremos executar a função dessa forma: `addUser(newUser)`

5. Faremos a requisição:

    ```js
        fetch(url,{
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
         }
        })
     ```

6. Criamos uma nova <div#alertApi> para inserirmos o novo conteúdo.

7. A Api retorna a mensagem "User saved", porém não queremos que ela fique em qualquer lugar, deixaremos ela no conteúdo da nova **div**

8. Terminamos a requisição com a adição da promise. A função então fica assim:

    ```js
        function addUser(newUser) {
            fetch(url,{
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => alertApi.textContent = data)
            .catch(error => console.error(error))
        }
    ```
