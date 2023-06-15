# Animation-iteration-count

A propriedade `animation-iteration-count` no CSS é utilizada para definir o número de vezes que uma animação deve ser repetida. Ela permite controlar a quantidade de ciclos de reprodução de uma animação.

Exemplo de código:

```css
.elemento {
  animation-name: spin;
  animation-duration: 3s;
  animation-iteration-count: 2;
}
```

Nesse exemplo, aplicamos uma animação chamada spin ao elemento com a classe `.elemento`. Definimos a duração da animação como 3 segundos utilizando a propriedade animation-duration. Em seguida, utilizamos a propriedade `animation-iteration-count` para definir que a animação será repetida 2 vezes.

Dessa forma, a animação spin será reproduzida duas vezes, totalizando duas voltas completas, antes de ser encerrada.

Você também pode utilizar valores especiais nessa propriedade, como **`infinite`**, que indica que a animação deve ser repetida infinitamente, sem parar.

O uso da propriedade animation-iteration-count permite controlar o número de vezes que uma animação é reproduzida, oferecendo flexibilidade e controle sobre a aparência e comportamento das animações em seu projeto.