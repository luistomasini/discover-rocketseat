# LIMIT

A cláusula `LIMIT` é usada em consultas SQL para restringir o número de registros retornados em uma consulta. Ela permite especificar o número máximo de linhas que você deseja recuperar dos resultados da consulta.

A sintaxe básica do `LIMIT` é a seguinte:

```sql
SELECT colunas
FROM tabela
LIMIT quantidade;
```

Substitua "colunas" pelas colunas desejadas a serem selecionadas e "tabela" pela tabela da qual você deseja recuperar os dados. Em seguida, especifique a quantidade de registros que você deseja retornar após a cláusula `LIMIT`.

Por exemplo, se você quiser retornar apenas os 10 primeiros registros de uma consulta, você usaria:

```sql
SELECT *
FROM tabela
LIMIT 10;
```
O uso do `LIMIT` é útil quando você deseja recuperar apenas um subconjunto dos resultados da consulta, especialmente quando a tabela contém um grande número de registros. Ele pode ser combinado com outras cláusulas, como ORDER BY, para controlar a ordem e a quantidade de registros retornados.

Em resumo, a cláusula `LIMIT` é usada para limitar o número de registros retornados em uma consulta SQL, permitindo que você especifique a quantidade máxima de linhas desejada.
