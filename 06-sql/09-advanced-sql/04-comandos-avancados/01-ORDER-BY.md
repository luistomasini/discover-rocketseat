# ORDER BY

O `ORDER BY` é uma cláusula usada em consultas SQL para ordenar os resultados de uma consulta em uma ordem específica. Ele permite que você especifique uma ou mais colunas nas quais os resultados devem ser classificados, seja em ordem crescente (`ASC`) ou decrescente (`DESC`).

A sintaxe básica do ORDER BY é a seguinte:

```sql
SELECT colunas
FROM tabela
ORDER BY coluna1 [ASC|DESC], coluna2 [ASC|DESC], ...;
```

Certifique-se de substituir "colunas" pelas colunas desejadas a serem selecionadas e "tabela" pela tabela da qual você deseja recuperar os dados. Em seguida, especifique as colunas nas quais deseja ordenar os resultados, seguidas pela palavra-chave `ASC` (para ordem crescente) ou `DESC` (para ordem decrescente). Você pode fornecer várias colunas de ordenação separadas por vírgulas.

O `ORDER BY` é útil quando você deseja que os resultados da consulta sejam apresentados em uma ordem específica, com base nos valores de uma ou mais colunas. Por exemplo, você pode ordenar os resultados de uma consulta de produtos por preço, data de criação ou qualquer outro critério relevante.

Em resumo, o `ORDER BY` é uma cláusula SQL que permite ordenar os resultados de uma consulta com base em uma ou mais colunas, em ordem crescente ou decrescente.
