# Animation-name | Animation-duration

A propriedade `animation-name` no CSS é usada para especificar o nome da animação que será aplicada a um elemento. Esse nome é definido utilizando a regra `@keyframes`, que descreve os diferentes estágios da animação.

A propriedade `animation-duration` é utilizada para definir a duração da animação, ou seja, quanto tempo ela levará para ser executada. Ela pode ser especificada em segundos (s) ou milissegundos (ms).

Exemplo de código:

```css
@keyframes minhaAnimacao {
  /* também pode ser chamado de 0%  */
  from {
    opacity: 0;
  }
  /* também pode ser chamado de 100% */
  to {
    opacity: 1;
  }
}

.elemento {
  animation-name: minhaAnimacao;
  animation-duration: 2s;
}
```

Nesse exemplo, criamos uma animação chamada minhaAnimacao utilizando a regra `@keyframes`. Essa animação faz com que o elemento tenha uma transição de opacidade, começando com 0% de opacidade no início (from) e aumentando para 100% de opacidade no final (to).

Em seguida, aplicamos a animação à classe `.elemento` utilizando as propriedades animation-name e animation-duration. Definimos o nome da animação como `minhaAnimacao` e a duração como 2 segundos.

Com essas propriedades, é possível personalizar a animação do elemento, definindo seu nome e duração de acordo com as necessidades do projeto.