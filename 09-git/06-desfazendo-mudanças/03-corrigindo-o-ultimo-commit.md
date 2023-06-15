# Corrigindo o último commit

## Descrição

Caso queiramos alterar algo de importante no nosso mais recente commit, como a mensagem, vamos usar uma opção do comando commit, que é a --amend, dessa forma:

`git commit --amend -m "nova mensagem"`

O git commit --amend também serve para modificar o conteúdo do commit, podendo servir para remover arquivos ou adicionar novos arquivos mas apenas válidos para o último commit, não tente modificar outros commits, pois isso é algo muito avançado e vai ser uma grande dor de cabeça.
