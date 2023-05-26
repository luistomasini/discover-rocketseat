# Stateless

- Não guarda estado
- A função só conhece dados entregues a ela
- A resposta não poderá variar

```js
let number = 2;

// stateful function

function square() {
    return number * number
}

number = square()

// stateless function

const square = n => n * n
```
