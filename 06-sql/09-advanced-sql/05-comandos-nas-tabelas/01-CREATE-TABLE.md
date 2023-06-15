# CREATE TABLE

O comando `CREATE TABLE` é usado para criar uma nova tabela em um banco de dados. Ele define a estrutura da tabela, especificando os nomes das colunas e os tipos de dados que cada coluna pode armazenar.

A sintaxe básica do comando `CREATE TABLE` é a seguinte:

```sql
CREATE TABLE nome_tabela (
    coluna1 tipo_dado1,
    coluna2 tipo_dado2,
    ...
);
```

Você precisa fornecer um nome para a tabela e, em seguida, listar as colunas que deseja criar, juntamente com seus respectivos tipos de dados. Os tipos de dados definem o tipo de valor que cada coluna pode armazenar, como texto, número inteiro, data, etc.

Por exemplo, vamos criar uma tabela de clientes com colunas como "id", "nome" e "idade":

```sql
CREATE TABLE clientes (
    id INT,
    nome VARCHAR(50),
    idade INT
);
```

Isso cria uma tabela chamada "clientes" com três colunas: "id" do tipo `INT` (número inteiro), "nome" do tipo `VARCHAR(50)` (texto com até 50 caracteres) e "idade" do tipo `INT`.

Além dos tipos de dados, você também pode definir outras propriedades para as colunas, como restrições de chave primária, restrições de chave estrangeira, restrições de `not null`, entre outras.

O comando `CREATE TABLE` é fundamental para a criação da estrutura de uma tabela em um banco de dados, permitindo que você defina a organização e os tipos de dados das colunas que irão armazenar os dados.

## Tipos de Dados SQL

- VARCHAR: é usado para armazenar strings de caracteres variáveis, como texto. É especificado com um tamanho máximo, como VARCHAR(255), que define o número máximo de caracteres que a coluna pode armazenar.

- INT: é usado para armazenar números inteiros. Pode representar números positivos e negativos.

- FLOAT: é usado para armazenar números de ponto flutuante, que representam números reais. Pode armazenar valores decimais.

- DATE: é usado para armazenar valores de data. Geralmente, no formato "AAAA-MM-DD".

- TIME: é usado para armazenar valores de tempo. Geralmente, no formato "HH:MM:SS".

- DATETIME: é usado para armazenar valores de data e hora combinados. Geralmente, no formato "AAAA-MM-DD HH:MM:SS".

- BOOLEAN: é usado para armazenar valores booleanos, ou seja, verdadeiro (true) ou falso (false).

- BLOB: é usado para armazenar dados binários, como imagens, arquivos compactados, entre outros.

Esses são apenas alguns exemplos dos tipos de dados mais comuns em bancos de dados SQL. Existem outros tipos de dados específicos de cada sistema de gerenciamento de banco de dados (SGBD), além de recursos adicionais, como tipos de dados geométricos, tipos de dados JSON, entre outros.

É importante observar que a sintaxe e os tipos de dados podem variar ligeiramente entre os diferentes SGBDs, como MySQL, PostgreSQL, SQL Server, Oracle, entre outros. Sempre consulte a documentação específica do SGBD que você está usando para obter informações mais detalhadas sobre os tipos de dados suportados.

## PROPRIEDADES SQL

- UNIQUE: é uma propriedade que impõe a restrição de valores únicos em uma coluna. Isso significa que cada valor nessa coluna deve ser único em relação aos demais valores da mesma coluna.

- PRIMARY KEY: é uma propriedade que define uma coluna (ou um conjunto de colunas) como identificador único para cada registro em uma tabela. Ele impõe a restrição de valores únicos e também é usado como referência em relacionamentos com outras tabelas.

- FOREIGN KEY: é uma propriedade que estabelece uma relação entre duas tabelas. Ela define uma coluna (ou um conjunto de colunas) em uma tabela como uma referência para a chave primária em outra tabela. Essa propriedade mantém a integridade referencial entre as tabelas.

- NOT NULL: é uma propriedade que impõe a restrição de não permitir valores nulos em uma coluna. Isso significa que a coluna deve sempre ter um valor válido.

- DEFAULT: é uma propriedade que especifica um valor padrão para uma coluna. Quando nenhum valor é fornecido para essa coluna durante a inserção de um novo registro, o valor padrão é usado.

- AUTO_INCREMENT: é uma propriedade que permite que uma coluna numérica, geralmente uma chave primária, seja automaticamente incrementada para cada novo registro inserido na tabela. Isso evita a necessidade de fornecer um valor manualmente e garante a unicidade dos valores.

- INDEX: é uma propriedade que cria um índice em uma ou mais colunas de uma tabela. Isso melhora o desempenho das consultas ao permitir a busca rápida e eficiente de registros com base nos valores nessas colunas.

- CHECK: é uma propriedade que define uma condição para os valores permitidos em uma coluna. Essa propriedade impõe restrições específicas aos valores, garantindo que eles atendam aos critérios definidos.

Essas são apenas algumas das propriedades mais comuns em SQL. Cada sistema de gerenciamento de banco de dados (SGBD) pode ter suas próprias propriedades específicas e extensões da linguagem SQL. É sempre importante consultar a documentação do SGBD que você está utilizando para obter informações mais detalhadas sobre as propriedades disponíveis.