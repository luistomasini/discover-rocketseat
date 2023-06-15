# SELECT

- Comandos SQL sempre em maiuscúlas
- buscar e mostra informações
- selecionar o comando com o mouse no beekeeper > run selection

```sql

 SELECT * FROM aluno

```
* vai buscar todas as informações do campo

# SELECT para campos específicos

```sql

SELECT nome, responsavel FROM aluno

```

* seleciona os campos [nome] e [responsável] da tabela [aluno]
* as colunas vão ser montadas de acordo com a ordem colocada no comando

# SELECT com WHERE

```sql

SELECT * FROM aluno WHERE matricula = 1
SELECT * FROM aluno WHERE nome like 'j%'
SELECT matricula, cpf FROM aluno WHERE nome like '%G%'

```
* seleciona de toda a tabela aluno apenas os dados do campo matricula 1
* seleciona de toda a tabela aluno apenas os dados que começam com j e a %, quer dizer qualquer coisa que vem depois ou antes.
* mostra nos campos especificados da tabela aluno, resultados que contenham g em algum lugar da palavra