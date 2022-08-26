# box-sizing

Como será calculado o tamanho total da caixa?

-content-box|border-box

```css

div { 
    box-sizing: border-box;
}

```

Ex.: 

* Quando é colocado um width e um height de 100px e um padding 0 20px, o CSS interpreta como "content-box", ou seja, os 100px está aplicado ao conteúdo da caixa, então o padding será adicionado ao conteúdo, fazendo com que o tamanho passe a ser 140px (100px de width e height + 20 de padding right e left.)

* Quando uso o "box-sizing: border-box" o CSS faz um cálculo para ajustar o conteúdo dentro dos 100px originais. 

Normalmente usa-se o código abaixo como forma de "resetar" o box-sizing que vem por padrão nos navegadores.

```css

* {

   box-sizing: border-box;

}

```

O seletor * seleciona todos os elementos da página.

