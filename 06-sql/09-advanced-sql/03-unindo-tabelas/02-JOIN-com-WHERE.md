# JOIN com WHERE

O `JOIN` com `WHERE` em SQLite é uma forma de combinar dados de várias tabelas com base em uma condição específica, usando a cláusula `WHERE` juntamente com o comando `JOIN`.

Ao usar o `JOIN` com `WHERE`, você especifica uma condição adicional para filtrar os resultados combinados com base em critérios específicos. Essa condição é definida na cláusula `WHERE` e pode envolver colunas das tabelas que estão sendo combinadas.

Essa abordagem permite que você refine ainda mais os resultados da combinação, selecionando apenas as linhas que atendem a determinada condição. Por exemplo, você pode combinar uma tabela "Clientes" com uma tabela "Pedidos" usando `JOIN` e, em seguida, adicionar uma condição na cláusula WHERE para filtrar apenas os pedidos feitos por clientes de uma determinada cidade.

A sintaxe básica do `JOIN` com `WHERE` em SQLite é a seguinte:

```sql
SELECT colunas
FROM tabela1
JOIN tabela2 
ON condição_de_junção
WHERE condição_adicional;
```

Certifique-se de substituir "colunas", "tabela1", "tabela2", "condição_de_junção" e "condição_adicional" pelos nomes apropriados para o seu caso específico.

Em resumo, o `JOIN` com `WHERE` em SQLite é usado para combinar dados de várias tabelas com base em uma condição específica, permitindo filtrar os resultados combinados de acordo com critérios adicionais.