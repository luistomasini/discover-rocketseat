# Foreign Key

As chaves estrangeiras são elementos-chave usados para estabelecer relações entre tabelas em um banco de dados. Uma chave estrangeira é um campo (ou um conjunto de campos) em uma tabela que faz referência à chave primária de outra tabela.

A principal função das chaves estrangeiras é garantir a integridade referencial, ou seja, manter a consistência dos dados entre as tabelas relacionadas. Quando uma chave estrangeira é definida em uma tabela, ela estabelece uma conexão com a tabela referenciada, criando um vínculo entre os registros das duas tabelas.

Por exemplo, suponha que tenhamos duas tabelas: "Pedidos" e "Clientes". A tabela "Pedidos" pode ter uma coluna chamada "ID do Cliente" que é uma chave estrangeira referenciando a chave primária "ID do Cliente" da tabela "Clientes". Isso permite que cada registro na tabela "Pedidos" esteja associado a um cliente específico na tabela "Clientes".

Ao utilizar chaves estrangeiras, é possível realizar operações como junções (joins) para combinar dados de várias tabelas com base em suas relações. Além disso, as chaves estrangeiras também podem ser usadas para impor restrições de integridade referencial, garantindo que não haja referências inválidas ou inconsistentes entre as tabelas.

Em resumo, as chaves estrangeiras são elementos cruciais em bancos de dados para estabelecer relações entre tabelas, garantir integridade referencial e permitir consultas e manipulações eficientes de dados relacionados.