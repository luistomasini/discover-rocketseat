# Funções

Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo void

Dessa maneira, tipamos dessa forma no TypeScript:

```typescript
function showMessages(message: string):void {
    console.log(message)
}
Já quando a função tem um retorno, a tipagem é inferida automaticamente na função.

function showMessages(message: string) {
   return message;
}

console.log(showMessages("Oi, João"))
```

![result](https://storage.googleapis.com/golden-wind/discover/especializar/typescript/funcoes.png)