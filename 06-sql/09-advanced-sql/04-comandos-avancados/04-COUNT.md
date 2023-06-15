# COUNT

A função `COUNT` é usada em consultas SQL para retornar o número de registros existentes em uma tabela ou o número de registros que correspondem a determinada condição especificada na consulta.

A sintaxe básica do `COUNT` é a seguinte:

```sql
SELECT COUNT(coluna)
FROM tabela
WHERE condição;
```

Substitua "coluna" pela coluna desejada para contagem ou use o asterisco (*) para contar todos os registros da tabela. Em seguida, especifique a "tabela" da qual você deseja contar os registros. Você também pode opcionalmente adicionar uma "condição" para filtrar os registros a serem contados.

Por exemplo, se você quiser contar o número total de registros em uma tabela chamada "clientes", você usaria:

```sql
SELECT COUNT(*)
FROM clientes;
```

Se você quiser contar o número de registros que atendem a uma determinada condição, você pode adicionar a cláusula `WHERE`. Por exemplo, para contar o número de clientes com idade superior a 30 anos, você usaria:

```sql
SELECT COUNT(*)
FROM clientes
WHERE idade > 30;
```

O `COUNT` retorna um único valor que representa o número de registros contados na tabela ou que correspondem à condição especificada. Esse valor pode ser usado em outras partes da consulta ou ser retornado como resultado da consulta.

Em resumo, a função `COUNT` é usada para contar o número de registros em uma tabela ou o número de registros que correspondem a uma condição específica em uma consulta SQL.
