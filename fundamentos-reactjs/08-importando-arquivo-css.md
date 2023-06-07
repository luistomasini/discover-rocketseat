# Importando arquivos no CSS

**Criaremos a pasta "styles" e também um arquivo css chamado `global.css`:**

**`global.css`**

```css
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
```
**A importação de um arquivo global deverá ser realizada no arquivo main.jsx,** 

**`main.jsx`**

```jsx
    import React from "react";
    import ReactDOM from "react-dom";
    import Home from "./pages/Home";

    // Arquivo de estilização global
    import "./styles/global.css";

    ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    document.getElementById("root")
    );
```

**Obs.: Na importação de um arquivo css, precisamos colocar a extensão junto do arquivo.**