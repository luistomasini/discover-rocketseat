# POST

## Descrição

Nesta aula falaremos sobre o método POST, que vem do inglês *to post*, que serve para publicar ou cadastrar um recurso.

Ele não é seguro nem idempotente, pois muda informações no servidor e não receberá a mesma resposta de uma mesma requisição.

O verbo POST tem Body tanto na requisição quanto na resposta, pode ser usado em formulários e é cacheable.

### Características

- Seguro: NÃO
- Idempotente: NÃO
- BODY
  - REQUEST: SIM
  - RESPONSE: POSSIBILIDADE
- Uso em formulários HTML: NÃ0
- Cacheable: SIM
