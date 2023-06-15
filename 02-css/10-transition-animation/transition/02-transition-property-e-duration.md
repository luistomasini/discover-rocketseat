# Transition Property e Duration

A propriedade transition no CSS é usada para criar efeitos de transição suaves entre diferentes estados de um elemento. Ela permite especificar a transição de propriedades como cor, tamanho, posição e outros, ao longo de um determinado período de tempo.

A propriedade transition pode ser usada em conjunto com a propriedade duration para controlar a duração da transição. A propriedade duration define o tempo que a transição leva para ser concluída.

Exemplo de código:

```css
.elemento {
  transition-property: propriedade;
  transition-duration: duração;
}
```

- propriedade: especifica qual propriedade CSS será animada durante a transição.
- duração: define a duração da transição em segundos (s) ou milissegundos (ms).

Você pode especificar várias propriedades separando-as por vírgulas na propriedade transition-property. Da mesma forma, é possível definir diferentes durações para cada propriedade listada.

Lembrando que você deve substituir "elemento" pela classe ou seletor do elemento que deseja aplicar a transição, "propriedade" pela propriedade CSS desejada e "duração" pelo tempo desejado (por exemplo, 0.5s para meio segundo).