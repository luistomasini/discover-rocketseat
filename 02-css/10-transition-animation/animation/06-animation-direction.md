# Animation-direction

A propriedade `animation-direction` no CSS é utilizada para definir a direção de reprodução de uma animação. Ela permite controlar se a animação será reproduzida no sentido normal, reverso ou alternando entre eles.

Exemplo de código:

```css
.elemento {
  animation-name: slide;
  animation-duration: 2s;
  animation-direction: alternate;
}
```

Nesse exemplo, aplicamos uma animação chamada slide ao elemento com a classe `.elemento`. Definimos a duração da animação como 2 segundos utilizando a propriedade `animation-duration`. Em seguida, utilizamos a propriedade `animation-direction` com o valor `alternate` para indicar que a animação será reproduzida alternando entre o sentido normal e o sentido reverso.

Dessa forma, a animação slide irá se mover para a direita no sentido normal e depois voltar para a esquerda no sentido reverso, repetindo esse padrão alternadamente.

Outros valores possíveis para a propriedade `animation-direction` são:

- `normal` (reprodução no sentido normal), 
- `reverse` (reprodução no sentido reverso) e 
- `alternate-reverse`(reprodução alternando entre o sentido reverso e o sentido normal).

O uso da propriedade `animation-direction` permite controlar a direção de reprodução das animações, adicionando variedade e fluidez aos efeitos visuais em seu projeto.