# Animation-fill-mode

A propriedade `animation-fill-mode` no CSS é utilizada para controlar o estado inicial e final de uma animação. Ela determina como as propriedades CSS serão aplicadas antes e depois da execução da animação.

Exemplo de código:

```css
.elemento {
  animation-name: fade;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

Nesse exemplo, aplicamos uma animação chamada fade ao elemento com a classe `.elemento`. Definimos a duração da animação como 3 segundos utilizando a propriedade `animation-duration`. A propriedade `animation-fill-mode` com o valor `forwards` faz com que as propriedades CSS do elemento sejam mantidas no estado final da animação após a sua conclusão.

Existem diferentes valores que podem ser usados com a propriedade `animation-fill-mode`, como:

- `none` (não altera as propriedades), 
- `forwards` (mantém as propriedades no estado final), 
- `backwards` (aplica as propriedades no estado inicial antes da execução da animação) e 
- `both` (combina forwards e backwards).

A propriedade `animation-fill-mode` é útil para garantir que os elementos animados mantenham o estado final desejado após a conclusão da animação, permitindo a continuidade de efeitos visuais ou estilos aplicados durante a animação.