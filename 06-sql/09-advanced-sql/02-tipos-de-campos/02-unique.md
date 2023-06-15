# Unique

A restrição UNIQUE é usada em bancos de dados para garantir que os valores em uma coluna (ou em um conjunto de colunas) sejam únicos em uma tabela. Isso significa que não pode haver duplicatas ou valores repetidos na coluna especificada.

Ao aplicar a restrição UNIQUE a uma coluna, o banco de dados verifica automaticamente se cada valor inserido nessa coluna é exclusivo em relação aos valores existentes. Se um valor duplicado for detectado, o banco de dados rejeita a operação de inserção ou atualização, mantendo assim a integridade dos dados.

A restrição UNIQUE pode ser aplicada a uma única coluna ou a várias colunas combinadas. Quando aplicada a várias colunas, a combinação dessas colunas deve ser única, ou seja, nenhum conjunto de valores repetidos deve existir para as colunas combinadas.

Essa restrição é útil em várias situações, como garantir que não haja duplicatas em campos de identificação exclusivos (por exemplo, um número de CPF em uma tabela de clientes) ou em campos que não devem ter valores repetidos (por exemplo, um nome de usuário em uma tabela de usuários).

Em resumo, a restrição UNIQUE é usada para garantir a unicidade de valores em uma coluna ou conjunto de colunas em uma tabela, evitando a presença de duplicatas e mantendo a integridade dos dados.