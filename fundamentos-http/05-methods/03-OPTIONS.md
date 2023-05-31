# OPTIONS

## Descrição

Nesta aula falaremos sobre o método OPTIONS, que é um verbo HTTP que irá nos dar informações sobre a disponibilidade de métodos da requisição.

Ele é um método seguro, pois não faz alteração alguma, e é idempotente, pois sempre retornará a mesma coisa para a mesma requisição.

O OPTIONS não manda nem recebe um Body, não é usado em formulários e nem é cacheable.

### Características

- Seguro: SIM
- Idempotente: SIM
- BODY
  - REQUEST: NÃO
  - RESPONSE: NÃO
- Uso em formulários HTML: NÃO
- Cacheable: NÃO
