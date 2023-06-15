# LEFT OUTER JOIN

O `LEFT OUTER JOIN` é uma operação de junção utilizada em consultas SQL para combinar registros de duas ou mais tabelas com base em uma condição de correspondência especificada. Ele retorna todos os registros da tabela à esquerda da junção (tabela à esquerda no `JOIN`) e os registros correspondentes da tabela à direita (tabela à direita no `JOIN`). Se não houver correspondência, os valores NULL serão retornados para as colunas da tabela à direita.

A sintaxe básica do `LEFT OUTER JOIN` é a seguinte:

```sql
Copy code
SELECT colunas
FROM tabela_esquerda
LEFT OUTER JOIN tabela_direita 
ON condição_de_correspondência;
```

Certifique-se de substituir "colunas" pelas colunas desejadas a serem selecionadas, "tabela_esquerda" pela tabela principal da junção e "tabela_direita" pela tabela que será combinada. A "condição_de_correspondência" é usada para definir os critérios de junção entre as tabelas.

O `LEFT OUTER JOIN` é útil quando você deseja retornar todos os registros da tabela à esquerda, independentemente de haver correspondências na tabela à direita. Isso permite obter um conjunto de resultados mais abrangente, incluindo valores nulos para as colunas da tabela à direita quando não há correspondência.

Em resumo, o `LEFT OUTER JOIN` é uma operação de junção que combina registros de duas tabelas com base em uma condição de correspondência, retornando todos os registros da tabela à esquerda e os registros correspondentes da tabela à direita, com valores nulos onde não há correspondência.