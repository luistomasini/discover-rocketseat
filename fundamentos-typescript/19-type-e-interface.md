# Type e Interface

O objetivo de ambos serve para definir tipagens no TypeScript. O type é mais recomendado por ser mais simples, fácil de lidar com tipos primitivos, por ser mais flexível. Já as interfaces são utilizadas normalmente em criação de libs, para aqueles que gostam da programação orientada a objetos.

O exemplo abaixo mostra a diferença na sintaxe e união entre type e inteface:

```ts
type TUser = {
    id: number;
    name: string;
}

type TPayment = {
    method: string;
}

// Fazendo união com Type
type TAccount = TUser & TPayment

interface IUser {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}

// Fazendo união com interfaces
interface IAccount extends IUser, IPayment {}
```
