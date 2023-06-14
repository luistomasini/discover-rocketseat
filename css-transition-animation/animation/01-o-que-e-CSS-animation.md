# O que é CSS animation?

A regra `@keyframes` no CSS é usada para definir animações personalizadas, especificando os diferentes estágios da animação e os estilos que devem ser aplicados em cada estágio. Em seguida, a propriedade animation é utilizada para aplicar a animação a um elemento, especificando o nome da animação, duração, atraso, direção e outros parâmetros.

Exemplo de código:

```css
@keyframes minhaAnimacao {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.elemento {
  animation: minhaAnimacao 2s ease-in-out infinite;
}
```

Nesse exemplo, criamos uma animação chamada minhaAnimacao usando a regra `@keyframes`. A animação começa com uma opacidade de 0% no início (0%) e, em seguida, aumenta para uma opacidade de 1% no meio (50%) e, finalmente, volta para uma opacidade de 0% no final (100%).

Em seguida, aplicamos a animação à classe .elemento usando a propriedade animation. Definimos uma duração de 2 segundos, um efeito de suavização (ease-in-out) e fazemos a animação repetir infinitamente.

As animações no CSS permitem adicionar movimento e interatividade aos elementos da página. Elas podem ser usadas para criar efeitos visuais, transições suaves e interações atraentes. É possível controlar a velocidade, o tempo, a direção e outros aspectos da animação usando diferentes propriedades.