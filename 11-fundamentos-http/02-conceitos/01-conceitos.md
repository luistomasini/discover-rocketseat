# Conceitos

## Descrição

Nessa aula vamos esclarecer alguns conceitos relacionados ao HTTP, que foi feito pra ser um protocolo simples e fácil de entender pra qualquer pessoa.

Ele foi baseado na estrutura de cliente/servidor, ou seja, sempre haverá uma requisição e uma resposta acontecendo.

Imagine a seguinte situação:
Você pode pensar na forma de comprar um lanche. Você faz um *pedido*, especificando a comida que você quer e o estabelecimento te *"responde"* com a comida.

O HTTP foi criado para também ser *stateless*, isto é, não guardar estado, ou seja, ele não vai guardar nenhuma informação e não existe nenhuma relação entre as conexões.

Existem maneiras de guardar as sessões. Isto geralmente é feito através de *cookies* e *local storages*

Outra característica do protocolo é ser extensível, podendo fazer diversas trocas de informação entre o cliente e o servidor, conforme a necessidade.

**Body** é o corpo do pedido ou da resposta e **Header** são os cabeçalhos das requisições.
