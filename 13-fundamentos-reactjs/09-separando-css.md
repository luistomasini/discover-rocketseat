# Separando CSS
 
Nesta aula criamos uma pasta chamada Home, contendo os arquivos index.jsx e styles.css

Dessa forma, a estrutura fica bem mais organizada e separamos as responsabilidades de cada arquivo.

A estrutura do projeto ficou assim:

![organizando-css](https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/separando-css.png)

**Obs.: Na importação, por padrão, se não colocarmos o nome do arquivo após a última barra '/', ele entende que esse arquivo é um `index.jsx`.**

**Obs.2: Dá para substituir o `export default Home;` para economizar linhas jogando o `export` no ínicio da `function Home()`. Após isso, na importação em "main.jsx", envolvemos o "Home" em "{}".**