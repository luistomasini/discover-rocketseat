# Transition Delay

A propriedade `transition-delay` no CSS é usada para adicionar um atraso antes de iniciar uma transição em um elemento. Ela controla o tempo que leva para a transição começar após uma mudança nas propriedades.

Você pode definir um valor em segundos ou em milissegundos para especificar o tempo de atraso. Um valor positivo indica o tempo a ser aguardado antes de iniciar a transição, enquanto um valor negativo faz com que a transição comece imediatamente, mas com o estado inicial já alterado.

Exemplo de código:

```css
.elemento {
  transition-delay: valor;
}
```

- `valor`: especifica o tempo de atraso desejado. Pode ser um valor em segundos (por exemplo, 1s) ou em milissegundos (por exemplo, 500ms).
- 
Lembrando que você deve substituir "elemento" pela classe ou seletor do elemento ao qual deseja aplicar o atraso de transição, e "valor" pelo tempo de atraso desejado.

Essa propriedade é útil quando você deseja controlar o momento exato em que uma transição começa a ocorrer em um elemento, adicionando um atraso personalizado.