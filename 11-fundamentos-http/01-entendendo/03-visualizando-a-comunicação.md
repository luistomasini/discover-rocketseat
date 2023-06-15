# Visualizando a comunicação

## Descrição

No protocolo HTTP tudo funciona com pedidos e respostas, que são chamados, em inglês, de ***Request*** e ***Response***. Nos dois casos, ele envia mensagens.

No caso das mensagens de pedidos **(requests)**, você precisa de um verbo **HTTP**, que chamamos de ***método***, que vai definir o tipo de pedido que está sendo feito.
Por exemplo o método **GET**, vindo do inglês ***"pegar"*** que pega um recurso, como um URL para algum local da internet, ou o método **POST**, que serve para criar um recurso.

Depois do pedido, a resposta **(response)** traz um Status Code do servidor, que é um código sobre o estado do seu pedido. Entre esses códigos, estão:

- 200: onde tudo deu certo e sua página foi enviada
- 301: que é um redirecionamento para outro local
- 404: onde o servidor não conseguiu encontrar o pedido
- 500: erro interno de servidor

Além do ***Status Code***, o servidor pode mandar um *header* e um *body*. Existem coisas que podem estar tanto na ***Request*** quanto na ***Response***, que são o *header* e o *body*.

Os *Headers* são campos informativos, e o *body* contém conteúdo, podendo ser em forma de HTML ou JSON.
