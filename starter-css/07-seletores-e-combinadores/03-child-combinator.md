# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização.

## Child combinator

* Identificado pelo sinal `>` entre dois seletores.
* Seleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

```css

body > ul > li

```