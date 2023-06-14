# Keyframe com porcentagens

As keyframes com porcentagens no CSS são utilizadas para definir os diferentes estágios de uma animação ao longo do tempo. Elas são usadas em conjunto com a regra `@keyframes`, que permite especificar os diferentes momentos da animação utilizando porcentagens.

Por exemplo, podemos definir uma animação de fade-in que começa com 0% de opacidade e chega a 100% de opacidade. Podemos utilizar keyframes com as porcentagens de 0% e 100% para especificar esses estágios.

Exemplo de código:

```css
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.elemento {
  animation-name: fade-in;
  animation-duration: 2s;
}
```

Nesse exemplo, criamos a animação fade-in utilizando a regra `@keyframes`. Definimos o estágio inicial da animação com 0% de opacidade e o estágio final com 100% de opacidade.

Em seguida, aplicamos a animação à classe .elemento utilizando a propriedade animation-name, onde definimos o nome da animação como fade-in, e a propriedade animation-duration, onde definimos a duração da animação como 2 segundos.

Com o uso de keyframes e porcentagens, é possível criar animações mais complexas e controlar os diferentes estágios da animação ao longo do tempo.
