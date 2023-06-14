# O que é um Pull Request:

- Um pull request é uma solicitação feita por um colaborador de um repositório para mesclar suas alterações em uma branch para outra branch (geralmente de uma branch de recurso para a branch principal, como a "main").
- O pull request permite que os colaboradores revisem, discutam e forneçam feedback sobre as alterações propostas antes de serem mescladas na branch de destino.
- É uma forma de colaboração e revisão de código que ajuda a garantir a qualidade e integridade das alterações no repositório.

Como usar o Pull Request com a CLI:
1. Crie uma nova branch para trabalhar nas suas alterações usando o comando `git checkout -b nome-da-branch`.
2. Faça commits das suas alterações usando o comando `git commit -m "mensagem do commit"`.
3. Envie sua branch local para o repositório remoto usando o comando `git push origin nome-da-branch`.
4. No repositório remoto, use a CLI para criar um pull request para mesclar sua branch com a branch de destino. O comando pode variar dependendo da CLI que você está usando, mas geralmente é algo como `gh pr create` ou `hub pull-request`.
5. Forneça informações sobre as alterações propostas, como título e descri

