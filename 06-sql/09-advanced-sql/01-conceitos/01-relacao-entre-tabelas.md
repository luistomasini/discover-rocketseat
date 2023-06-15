# Relação entre tabelas

A relação de tabelas em SQL refere-se à maneira como as tabelas se conectam e interagem entre si. É uma forma de representar a estrutura e os relacionamentos dos dados em um banco de dados relacional.

As relações de tabelas são estabelecidas por meio do uso de chaves primárias e chaves estrangeiras. A chave primária é um campo único em uma tabela que identifica exclusivamente cada registro. A chave estrangeira, por sua vez, é um campo em uma tabela que faz referência à chave primária de outra tabela.

Essas chaves são usadas para criar vínculos entre as tabelas, permitindo a consulta e manipulação de dados relacionados. Por exemplo, suponha que tenhamos uma tabela de "Clientes" e uma tabela de "Pedidos". Podemos criar uma relação entre elas usando a chave primária "ID do Cliente" da tabela "Clientes" como chave estrangeira na tabela "Pedidos". Isso permite que cada pedido seja associado a um cliente específico.

Ao consultar os dados, é possível realizar operações como junções (joins) para combinar informações de várias tabelas com base em suas relações. Isso permite extrair dados relacionados de maneira eficiente e significativa.

Em resumo, as relações de tabelas em SQL são a base para organizar e conectar dados em um banco de dados relacional, permitindo consultas complexas e manipulação de informações relacionadas.