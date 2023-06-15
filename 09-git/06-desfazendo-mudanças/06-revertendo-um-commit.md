# Revertendo um commit

## Descrição

Agora veremos como reverter um commit, como pegar um ponto antigo da história, revertê-lo e adicionar um novo ponto.

O primeiro passo é ter um diretório limpo, sem nenhum arquivo não rastreado, sem nada na stage area.

Usaremos então o comando `git log`, e onde nossa HEAD estiver, a cada commit subtrairemos 1, então, considere o commit atual como 0, o abaixo desse -1, o abaixo desse -2 e por aí vai.

Use o comando git revert, mas ao invés de um sinal de menos(-), use um til (~), da seguinte maneira:

`git revert HEAD~5`

Também há outra forma de fazer isso, que é usando a hash de onde exatamente você deseja reverter, hash que pode ser obtida facilmente através do comando `git log --oneline`, ficaria parecido com:

`git revert 7f121d7`
