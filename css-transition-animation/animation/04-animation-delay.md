# Animation-delay

A propriedade `animation-delay` no CSS é utilizada para definir um intervalo de tempo entre o início de uma animação e o momento em que ela é realmente executada. Essa propriedade permite criar atrasos antes que uma animação comece a ser reproduzida.

Exemplo de código:

```css
.elemento {
  animation-name: fade-in;
  animation-duration: 2s;
  animation-delay: 1s;
}
```

Nesse exemplo, aplicamos uma animação chamada fade-in ao elemento com a classe `.elemento`. Definimos a duração da animação como 2 segundos utilizando a propriedade animation-duration. Em seguida, utilizamos a propriedade animation-delay para definir um atraso de 1 segundo antes que a animação comece.

Dessa forma, a animação fade-in só será executada após um atraso de 1 segundo a partir do momento em que o elemento é carregado ou ativado por algum evento.

O uso da propriedade animation-delay é útil para criar sequências de animação sincronizadas ou adicionar atrasos estratégicos entre diferentes elementos animados em uma página.