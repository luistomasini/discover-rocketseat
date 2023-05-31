# DELETE

## Descrição

Nesta aula falaremos sobre o método DELETE, que serve para remover um recurso.

Pode ser respondido com:

- código 202, que não foi processado mas já foi aceito
- 204, que significa que o recurso não existe
- 200, que significa que o conteúdo foi deletado.

Ele não é um método seguro, mas é idempotente, tem a possibilidade de receber Body tanto na requisição quanto na resposta, não é usado em formulários e não é cacheable.

### Características

- Seguro: NÃO
- Idempotente: SIM
- BODY
  - REQUEST: POSSIBILIDADE
  - RESPONSE: POSSIBILIDADE
- Uso em formulários HTML: NÃ0
- Cacheable: NÃO
