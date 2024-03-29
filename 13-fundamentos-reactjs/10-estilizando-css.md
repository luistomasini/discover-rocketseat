# Estilizando página

Nesta aula, estilizamos toda a nossa página utilizando os conceitos do CSS.

Na sintaxe do REACT, declaramos a class dessa forma: `className`

**`styles.css`**

```css
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.container h1 {
  margin: 84px 0 24px;
}

.container input {
  width: 50%;
  padding: 24px;

  background: #e6e6e6;
  border-radius: 5px;
  border: none;

  font-size: 16px;
}

.container button {
  width: 50%;
  padding: 24px;

  font-weight: 700;

  background: #ea4c89;
  color: #fff;

  border-radius: 5px;
  margin: 12px 0 84px;
  border: none;

  cursor: pointer;
  transition: filter 0.2s;

  font-size: 16px;
}

.container button:hover {
  filter: brightness(0.9);
}
```

Resultado:
![result-css](https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/estilizando-pagina-css.png)