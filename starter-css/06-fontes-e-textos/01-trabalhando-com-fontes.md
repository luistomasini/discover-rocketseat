# Trabalhando com fontes

Tipografia transmite mensagem

    - negrito
    - tamanho
    - estilo
-------------------------------------------------
## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size
-------------------------------------------------
## Font Family

* Tipo de fonte de um elemento
* Lista de fontes em ordem de prioridade
* inclui *fallback* (escape) font

```css

p {
    font-family: "Times New Roman", Times, serif;
}

```
    - serif
    - sans
-------------------------------------------------
## Font Weight

* Peso da fonte
* Valores: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
* Dependendo da família da fonte não conseguimos utilizar todos os pesos de fonte

```css

p {
    font-weight: bold;
}

```
-------------------------------------------------
## Font Style

* É o estilo da fonte
* Valores: normal | italic | oblique
* Os valores que podem ser aplicados dependem da fonte usada

```css

span {
	font-style: italic;
}

```
-------------------------------------------------
## Font Size

* Tamanho da fonte

```css

p {
    font-size: 18px;
}

```
-------------------------------------------------
## Web Fonts

* Fontes do sistema x Fontes da web

Fontes do sistema são as fontes que estão instaladas na máquina do usuário e nem sempre o cliente vai ter instalado as fontes usadas no projeto e isso pode fazer com que os estilos dos textos não sejam aplicados corretamente, mas para resolver esses casos podemos preparar nossas fonts para web ou usar fontes da web.

Como usar fontes para web?
@font-face
@import
link (fica no html no <head>)
-------------------------------------------------
Referências
https://fonts.google.com/ 
https://css-tricks.com/snippets/css/using-font-face-in-css/
https://www.w3.org/TR/css-fonts-3/