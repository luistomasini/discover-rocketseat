# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos

* Element selector
    - Todos os elementos HTML
* ID Selector
    - Um elemento que tenha um atributo `id`
    - Cada id deverá ser único.
* Class Selector
    - Os elementos que contenha um atributo `class`
    - Podemos ter uma ou mais classes.
* Attribute selector
    - Um elemento que tenha um atributo específico
* Pseudo-class selector
    - Elementos em um estado específico.

## Múltiplos

* Poderão ser selecionados múltiplos elementos a aplicar alguma regra css para todos eles.

Usamos uma separação por vírgulas para isso.

```css
h1, p, a {
    color: red;
}

```