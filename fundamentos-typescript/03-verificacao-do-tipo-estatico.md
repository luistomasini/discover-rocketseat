# Verificação tipo estatico

Já sabemos que o TypeScript verifica erros antes da execução, mas vamos ver isso na prática:

```ts
const userName = "João Inácio"

userName()
```

Ao tentar como uma função o TypeScript nos avisará que o que estamos querendo executar é uma variável do tipo String.

![result](https://storage.googleapis.com/golden-wind/discover/especializar/typescript/verificacao-tipo-estatico.png)