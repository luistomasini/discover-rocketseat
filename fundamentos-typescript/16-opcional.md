# Opcional

Para informamos que uma propriedade é opcional inserimos o sinal de ?

Veja o exemplo:

```ts
type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean; // isAdmin não será obrigatória na sua declaração
}

let newUser: User = {
    name: 'João',
    email: 'joao@email.com',
    age: 18
}
```
