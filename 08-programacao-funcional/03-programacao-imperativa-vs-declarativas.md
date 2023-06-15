# Programação imperativa

- O código é **é pensado e gerado em sequência**
- O código é pénsado como um passo-a-passo, como uma **receita de bolo**
- Uma coisa depende da outra
- Uma coisa depende da outra
- O estado de um dado é **alterado constantemente** causando mutações nas variávies
- **Orientação a Objetos** é um tipo de paradigma imperativo

## Programação declarativa

- O código é gerado para **fazer algo**, não importa **como**
- **O que fazer** e não **como fazer**
- Não há necessidade de um **passo a passo** no código
- **Programação funcional** é um tipo de paradigma declarativo

```js
// Função que eleva o número ao quadrado

//  Imperativo: Faça da seguinte forma

let number = 2

function square() {
    return number * number
}

number = square()

// Declarativo: O que fazer e não como fazer.

const square = n => n * n
```
