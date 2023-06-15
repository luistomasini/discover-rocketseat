# Alias

O `alias` em banco de dados é uma técnica que permite atribuir um nome alternativo a uma tabela ou a uma coluna em uma consulta SQL. Esses nomes alternativos, conhecidos como "aliases", podem ser usados para melhorar a legibilidade da consulta ou para lidar com ambiguidades quando duas ou mais tabelas têm colunas com o mesmo nome.

O uso de "aliases" é especialmente útil ao trabalhar com consultas complexas envolvendo várias tabelas ou quando é necessário renomear temporariamente uma tabela ou coluna para facilitar a compreensão da consulta.

A sintaxe básica para atribuir um `alias` a uma tabela ou coluna em uma consulta SQL é a seguinte:

`Alias` para uma tabela:

```sql
SELECT alias_tabela.coluna 
FROM tabela as alias_tabela;
```

Alias para uma coluna:

```sql
SELECT coluna as alias_coluna 
FROM tabela;
```

Certifique-se de substituir "alias_tabela" pelo nome de alias desejado para a tabela e "alias_coluna" pelo nome de alias desejado para a coluna.

Ao usar "aliases", você pode simplificar a escrita da consulta e torná-la mais compreensível, especialmente quando há nomes de tabela ou coluna longos ou complexos.

Em resumo, o `alias` em banco de dados permite atribuir nomes alternativos a tabelas ou colunas em consultas SQL, melhorando a legibilidade e a clareza da consulta.