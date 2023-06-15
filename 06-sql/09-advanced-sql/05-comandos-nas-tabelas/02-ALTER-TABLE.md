# ALTER TABLE

O comando `ALTER TABLE` é usado em SQL para modificar a estrutura de uma tabela existente em um banco de dados. Ele permite adicionar, modificar ou excluir colunas, alterar o tipo de dados de uma coluna, adicionar ou remover restrições e muito mais.

Sintaxe:

```sql
Copy code
ALTER TABLE nome_tabela
   ação;
```

Exemplos de ações:

- Adicionar uma coluna:

    ```sql
    Copy code
    ALTER TABLE nome_tabela
    ADD nome_coluna tipo_dados;
    ```

- Modificar uma coluna:

    ```sql
    Copy code
    ALTER TABLE nome_tabela
    ALTER COLUMN nome_coluna tipo_dados;
    ```

- Excluir uma coluna:

    ```sql
    Copy code
    ALTER TABLE nome_tabela
    DROP COLUMN nome_coluna;
    ```

- Modificar o nome de uma tabela:

    ```sql
    Copy code
    ALTER TABLE nome_tabela
    RENAME TO novo_nome_tabela;
    ```

O comando `ALTER TABLE` é uma ferramenta poderosa que permite ajustar a estrutura de uma tabela de acordo com as necessidades do banco de dados. Ele oferece flexibilidade para realizar alterações sem precisar excluir e recriar a tabela, preservando assim os dados existentes.