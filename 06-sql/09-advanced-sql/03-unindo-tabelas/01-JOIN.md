# JOIN

O comando `JOIN` em SQLite é usado para combinar dados de duas ou mais tabelas com base em uma condição específica. Ele permite que você relacione as linhas de diferentes tabelas, criando um conjunto de resultados combinados.

Existem diferentes tipos de `JOIN` disponíveis no SQLite:

- `INNER JOIN`: Retorna apenas as linhas que têm correspondências nas duas tabelas envolvidas no `JOIN`.

- `LEFT JOIN`: Retorna todas as linhas da tabela da esquerda e as correspondentes da tabela da direita. Se não houver correspondência, os valores da tabela da direita serão `NULL`.

- `RIGHT JOIN`: Retorna todas as linhas da tabela da direita e as correspondentes da tabela da esquerda. Se não houver correspondência, os valores da tabela da esquerda serão `NULL`.

- `FULL JOIN`: Retorna todas as linhas de ambas as tabelas, combinando as correspondentes e preenchendo com `NULL` onde não houver correspondência.

O `JOIN` é usado para buscar dados relacionados em diferentes tabelas com base em uma coluna comum entre elas. Geralmente, é especificada uma condição de junção usando cláusulas como `ON` ou `USING` para determinar como as tabelas devem ser combinadas.

Por exemplo, um `JOIN` pode ser usado para combinar uma tabela "Clientes" com uma tabela "Pedidos" com base no ID do cliente, obtendo assim os pedidos correspondentes a cada cliente.

Em resumo, o `JOIN` em SQLite permite combinar dados de várias tabelas com base em uma condição específica, permitindo consultas mais complexas e relacionadas entre os dados armazenados em diferentes tabelas.