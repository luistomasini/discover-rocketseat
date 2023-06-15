## margin

Espaço entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentage>` | auto (calcula o centro da pagina, não mexe no top e bottom)

```css

div {
    /* shorthand */
    margin: 12px 16px 10px 4px; /* TOP = 12px | RIGHT = 16px | BOTTOM = 10px | LEFT = 4px */
    margin: 12px 16px 0; /* TOP = 12px | RIGHT = 16px | BOTTOM = 0px | LEFT = 16px */
    margin: 8px 16px; /* TOP = 8px | RIGHT = 16px | BOTTOM = 8px | LEFT = 16px */
    margin: 8px; /* TOP = 8px | RIGHT = 8px | BOTTOM = 8px | LEFT = 8px */
}

```

O margin é aplicado em elementos com display block

* Cuidado com margin collapsing (top se ajunta ao bottom)
- Margin collapsing é a característica do margin-top e margin-bottom não somarem-se; Isso só acontece om as margins laterais.

https://developer.mozilla.org/pt-BR/docs/Web/CSS/margin