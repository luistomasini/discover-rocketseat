# Methods

## Descrição

Nessa aula vamos estudar os Métodos, ou verbos do HTTP, que apesar de poder serem chamados assim, não necessáriamente tem formato de verbos.

Eles servem para indicar o intuito da operação que o cliente está realizando e cada um possui seu significado, que vamos estudar nas próximas aulas.

Os métodos podem ter 2 características, seguro e idempotente.

### Métodos seguros

- Não alteram o servidor
- Somente leitura
- Cliente não solicita alterações
- Não apresentam carga extra para o servidor
- São mantidos seguros pelo servidor.

Métodos considerados seguros são: GET, HEAD e OPTIONS.

### Métodos idempotentes

- Ao executar o método, a resposta deverá sempre ser a mesma.
- Status code poderá ser diferente
- O servidor tem a responsabilidade de retornar dados da mesma maneira
- Essa especificação não é garantia de que todos os servidores irão aplicar o conceito corretamente.

Os métodos idempotentes são todos métodos seguros e eles são: PUT e DELETE.

![tabela de idempotentes](https://nordicapis.com/wp-content/uploads/Understanding-Idempotency-and-Safety-in-API-Design.png)
