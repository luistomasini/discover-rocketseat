# Branches

1. Abra o terminal ou prompt de comando.
2. Navegue até o diretório do seu repositório local usando o comando `cd`.
3. Verifique em qual branch você está atualmente usando o comando `git branch`.
4. Crie um novo branch usando o comando `git branch nome-do-branch` ou `git checkout -b nome-do-branch`.
5. Mude para o novo branch usando o comando `git checkout nome-do-branch`.
6. Realize as alterações desejadas nos arquivos do repositório.
7. Adicione as alterações ao stage usando o comando `git add .` para adicionar todos os arquivos ou `git add nome-do-arquivo` para adicionar um arquivo específico.
8. Faça um commit das suas alterações usando o comando `git commit -m "Mensagem do commit"`.
9. Envie o branch para o repositório remoto usando o comando `git push -u origin nome-do-branch`.
10. Para mesclar (merge) as alterações do branch atual com outro branch existente, mude para o branch de destino usando o comando `git checkout branch-de-destino` e então use o comando `git merge nome-do-branch` para mesclar as alterações.
11. Para excluir um branch após a mesclagem, use o comando `git branch -d nome-do-branch`.
