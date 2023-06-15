# Importando fonte

Para utilizar fontes personalizadas em nosso projeto, podemos prover do serviço que a Google nos oferece, o Google Fonts.

Após a escolha das fontes, devemos aplicá-las em nosso projeto em dois arquivos:

**`index.html`**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Importação das fontes. -->

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

  <title>App Lista de Presença</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
```

**`global.css`**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// Aplicando fontes personalizada.

body,
input,
button {
  font-size: 16px;
  font-family: "Roboto", sans-serif;

  --webkit-font-smoothing: antialiased;
}
```

Resultado:
![resultado](https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/importando-fonte.png)