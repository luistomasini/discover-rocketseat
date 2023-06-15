# HAVING

A cláusula `HAVING` é usada em consultas SQL juntamente com a cláusula `GROUP BY` para filtrar registros com base em condições aplicadas às colunas agregadas. Ela permite que você especifique uma condição de filtragem para os grupos resultantes da cláusula `GROUP BY`.

A sintaxe básica do `HAVING` é a seguinte:

```sql
SELECT coluna1, coluna2, ..., função_agregação(coluna)
FROM tabela
GROUP BY coluna1, coluna2, ...
HAVING condição;
```

Após a cláusula `GROUP BY`, você pode usar o `HAVING` para especificar uma condição que será aplicada aos grupos resultantes. Essa condição pode conter operadores de comparação, operadores lógicos e funções de agregação.

Por exemplo, suponha que você tenha uma tabela de vendas com colunas como "produto", "categoria" e "valor". Para obter apenas as categorias com um total de vendas superior a 1000, você pode usar o `HAVING` da seguinte maneira:

```sql
SELECT categoria, SUM(valor) AS total_vendas
FROM vendas
GROUP BY categoria
HAVING total_vendas > 1000;
```

Isso retornará apenas as categorias que atendem à condição especificada, ou seja, aquelas com um total de vendas superior a 1000.

A cláusula `HAVING` é útil quando você precisa filtrar grupos com base em condições aplicadas às colunas agregadas, permitindo que você selecione apenas os grupos que atendem a essas condições.

Em resumo, a cláusula `HAVING` é usada para filtrar registros com base em condições aplicadas às colunas agregadas resultantes da cláusula `GROUP BY`.