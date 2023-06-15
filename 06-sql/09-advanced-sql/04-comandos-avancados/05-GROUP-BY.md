# GROUP BY

A cláusula `GROUP BY` é usada em consultas SQL para agrupar registros com base em valores semelhantes em uma ou mais colunas. Ela permite que você agregue dados e execute cálculos em grupos de registros, em vez de em todos os registros da tabela.

A sintaxe básica do `GROUP BY` é a seguinte:

```sql
SELECT coluna1, coluna2, ..., função_agregação(coluna)
FROM tabela
GROUP BY coluna1, coluna2, ...;
```

Substitua "coluna1, coluna2, ..." pelas colunas pelas quais você deseja agrupar os registros. Em seguida, especifique as colunas que deseja selecionar e, se desejar, aplique funções de agregação, como `SUM`, `COUNT`, `AVG`, entre outras, à(s) coluna(s) desejada(s).

Por exemplo, suponha que você tenha uma tabela de vendas com colunas como "produto", "categoria" e "valor". Para obter o total de vendas por categoria, você pode usar o `GROUP BY` da seguinte maneira:

```sql
SELECT categoria, SUM(valor) AS total_vendas
FROM vendas
GROUP BY categoria;
```

Isso retornará uma tabela com duas colunas: "categoria" e "total_vendas", onde cada linha representará uma categoria e o valor correspondente ao total de vendas nessa categoria.

A cláusula `GROUP BY` é útil quando você precisa resumir dados em grupos com base em determinadas colunas e executar operações de agregação nesses grupos. Ela permite que você obtenha insights estatísticos ou faça análises específicas sobre conjuntos de dados segmentados.

Em resumo, a cláusula `GROUP BY` é usada para agrupar registros com base em valores semelhantes em uma ou mais colunas e aplicar funções de agregação a esses grupos.
