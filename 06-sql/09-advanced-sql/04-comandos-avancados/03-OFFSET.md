# OFFSET

A cláusula `OFFSET` é usada em consultas SQL para pular um determinado número de registros na consulta e começar a retornar os resultados a partir desse ponto. Ela permite paginar os resultados da consulta, permitindo que você especifique quantos registros deseja pular.

A sintaxe básica do `OFFSET` é a seguinte:

```sql
SELECT colunas
FROM tabela
LIMIT quantidade OFFSET quantidade;
```

Substitua "colunas" pelas colunas desejadas a serem selecionadas e "tabela" pela tabela da qual você deseja recuperar os dados. Em seguida, especifique a quantidade de registros que você deseja pular antes de começar a retornar os resultados da consulta após a cláusula `OFFSET`.

Por exemplo, se você quiser pular os primeiros 5 registros e começar a retornar os resultados a partir do sexto registro de uma consulta, você usaria:

```sql
SELECT *
FROM tabela
LIMIT 4 OFFSET 5;
```

O uso do `OFFSET` é comumente combinado com a cláusula LIMIT para realizar paginação nos resultados da consulta. Isso permite recuperar um número específico de registros por página e navegar pelos resultados em partes.

Em resumo, a cláusula `OFFSET` é usada para pular um número específico de registros em uma consulta SQL, permitindo que você comece a retornar os resultados a partir desse ponto.
