# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização.

## Adjacent sibling combinator

* Identificado pelo sinal `^` entre dois seletores.
* Seleciona somente o elemento do lado direito que é irmão direto na hierarquia

```css

h1 + p

```

## General sibling combinator

* Identificado pelo sinal `~` entre dois seletores.
* Seleciona todos os elementos irmãos

```css

h1 ~ p

```