## padding

Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left
- values: `<length>` | `<percentage>` | auto
```css

div {
    /* shorthand */
    padding: 12px 16px 10px 4px; /* TOP = 12px | RIGHT = 16px | BOTTOM = 10px | LEFT = 4px */
    padding: 12px 16px 0; /* TOP = 12px | RIGHT = 16px | BOTTOM = 0px | LEFT = 16px */
    padding: 8px 16px; /* TOP = 8px | RIGHT = 16px | BOTTOM = 8px | LEFT = 16px */
    padding: 8px; /* TOP = 8px | RIGHT = 8px | BOTTOM = 8px | LEFT = 8px */
}

```
O padding pode ter valores (values) de comprimento (px, em, rem) ou de porcentagem (%)

* Padding poderá causar diferença na largura de um elemento.
obs.: Na aula sobre box-sizing aprendemos como resolver essa diferença na largura do elemento


https://developer.mozilla.org/pt-BR/docs/Web/CSS/padding
