# PUT

## Descrição

Nessa aula falaremos sobre o método PUT, que serve para criar ou atualizar um recurso

No entanto, diferentemente do POST, é idempotente e normalmente usado para atualizar recursos.

O status code de criação do PUT é 201, e o de atualização é o 204 ou 200.

O verbo PUT não é seguro, pois altera dados no servidor, mas é idempotente, tem Body na requisição mas não na resposta e não é usado em formulários nem é cacheable.

### Características

- Seguro: NÃO
- Idempotente: SIM
- BODY
  - REQUEST: SIM
  - RESPONSE: NÃO
- Uso em formulários HTML: NÃ0
- Cacheable: NÃO
