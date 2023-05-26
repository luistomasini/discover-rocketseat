# Imutabilidade

- Uma variável não variar
- Sew você precisar mudar uma cariável, você não muda, você cria um **nova**

```js
// Exemplo em JS

const cart = {
    quantity: 2,
    total: 200
}

// bad 👎
cart.quantity = 3

// good 👍
const newCart = {...cart, quantity: 3}

// Exemplo em ReactJS
const [amount, setAmount] = useState(0)

// bad 👎
amount = 2

// good 👍
setAmount(2)
```
