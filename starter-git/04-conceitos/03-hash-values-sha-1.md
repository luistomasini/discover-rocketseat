# Hash SHA-1

## Descrição

Nessa aula, falaremos sobre o nome dado à cada commit, que é dado através de uma hash chamada SHA-1.

A cada commit que criamos, o git vai gerar um checksum, que converte os dados da nossa operação em um número, o que garante a integridade dos nossos dados. Essa hash é uma linha de 40 caracteres hexadecimais.

Dentro dessa string existe uma snapshot, que mostra o autor, o pai e a mensagem do nosso commit.

O pai do commit é o commit do qual ele foi criado, então o nosso primeiro commit sempre terá um valor nulo, enquanto os próximos terão o valor do commit anterior a ele.
