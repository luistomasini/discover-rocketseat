# Recuperando arquivos

## Descrição

Podemos recuperar nossos commits antigos usando o comando git checkout.

Primeiramente usamos o git log para encontrar o commit que precisamos, e copiamos os primeiros caracteres da hash, após isso, podemos rodar o comando, da seguinte forma:

`git checkout HASH -- nomedoarquivo`

(Cuidado, caso haja um arquivo de mesmo nome e formato, será inteiramente substituído, fazendo com que você precise pegar a versão mais recente num último commit)
