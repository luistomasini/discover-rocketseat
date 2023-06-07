# Estrutura React

Quando criamos um projeto ReactJS utilizando o Vite. Essa será a visualização da nossa estrutura inicial de pastas do nosso projeto.

![estrutura-react](https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/estrutura-de-um-projeto.png)

**O arquivo index.html é o principal arquivo do nosso projeto, ele importará o arquivo main.jsx e fará com que o conteúdo seja exibido em nosso navegador.**

**`index.html`**

    ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vite App</title>
        </head>
        <body>
            <div id="root"></div>
            <script type="module" src="/src/main.jsx"></script>
        </body>
        </html>
    ```

**O arquivo main.jsx terá a função de renderizar o componente `<App />` e inserir através da DOM do nosso HTML pelo id root.**

**`main.jsx`**

    ```jsx
        import React from 'react'
        import ReactDOM from 'react-dom'
        import App from './App'
        import './index.css'

        ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        (document.getElementById('root'))
        )
    ```
