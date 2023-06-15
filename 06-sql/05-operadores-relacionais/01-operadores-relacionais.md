## Igual

- Utilizado para buscar uma informação específica baseada no que digitamos após o sinal

```sql

SELECT * FROM aluno WHERE cpf = 45678945645

```
* busca os campos referentes a esse cpf
* igual só funciona em campos number

## Like

- Utilizado para buscar uma informação específica baseada no que digitamos após o sinal

```sql

SELECT * FROM aluno WHERE nome like 'jakeliny gracielly'
SELECT * FROM aluno WHERE nome like 'j%'

```
* aspas simples
* busca os campos referentes a esse cpf
* igual só funciona em campos text
* segundo caso procura tudo com j no início

## >, Maior que

- Busca os campos que forem maiores do que forem especificados

```sql

SELECT * FROM aluno WHERE matricula > 2

```

* busca todos os campos que possuem matricula maior que 2

## <, Menor que

- Busca os campos que forem menores do que forem especificados

```sql

SELECT * FROM aluno WHERE matricula < 2

```

* busca todos os campos que possuem matricula menor que 2

## >=, Maior ou igual que

- Busca os campos que forem maiores ou iguais a 2

```sql

SELECT * FROM aluno WHERE matricula >= 2

```

* busca todos os campos que possuem matricula maior ou igual a 2

## <=, Menor ou igual que

- Busca os campos que forem menores ou iguais do que forem especificados

```sql

SELECT * FROM aluno WHERE matricula <= 2

```

* busca todos os campos que possuem matricula menor ou igual a 2

## <>, Não igual a

- Busca os campos que não forem iguais a ao item especificado

```sql

SELECT * FROM aluno WHERE matricula <> 2

```

* busca todos os campos que possuem matricula não iguais a 2

## !=, diferente de

- mesma coisa de não igual a


