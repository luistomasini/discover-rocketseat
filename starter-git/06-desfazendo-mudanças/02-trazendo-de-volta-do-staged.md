# Trazendo de volta do staged

## Descrição

Nesta aula veremos como desfazer alguma alteração que foi ao nosso stage area, e na verdade é bem simples, usamos o comando a seguir:

`git restore --staged nomedoarquivo`

**Comando antigo:**

`git reset HEAD nome do arquivo`

Há também outra forma, que é no caso de termos múltiplos arquivos, e é usado da seguinte forma:

`git restore --staged .`

Podemos rodar o comando git status para conferir a remoção do(s) arquivo(s) do stage area.

**Comando antigo:**

`git reset HEAD .`
