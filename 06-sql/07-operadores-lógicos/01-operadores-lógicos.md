## AND

```sql

SELECT * FROM aluno WHERE nome like 'j%' AND matricula < 2


```
* junta duas condições

## OR

```sql

SELECT * FROM aluno WHERE matricula > 1 OR nome like 'j%'

```

* traz uma proposição, ou outra, ou todas se todas as condições forem verdadeiras

# BETWEEN

```sql
-- busca id_funcionario entre 4 e 7
SELECT * FROM funcionarios WHERE id_funcionario BETWEEN 4 and 7
-- busca todos os id_funcionario que não estão entre 4 e 7
SELECT * FROM funcionarios WHERE id_funcionario NOT BETWEEN 4 and 7

```

# IN e NOT IN

```sql
-- busca os campos que contenham apenas, 1, 2 e 5
SELECT * FROM funcionarios WHERE id_departamento IN (1, 2, 5)
-- busca os campos que não contenham 1, 2 e 5
SELECT * FROM funcionarios WHERE id_departamento NOT IN (1, 2, 5)

```

# IS NULL e IS NOT NULL

```sql
-- busca na tabela funcionarios no campo id_departamento o que é NULL
SELECT * FROM funcionarios WHERE id_departamento IS NULL
-- busca na tabela funcionarios no campo id_departamento o que não é NULL
SELECT * FROM funcionarios WHERE id_departamento IS NOT NULL

```