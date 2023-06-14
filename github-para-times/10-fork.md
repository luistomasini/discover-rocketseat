# Fork e colaboração

1. Faça um Fork do repositório original no Github, clicando no botão "Fork" na página do repositório.
2. Clone o seu Fork para o seu computador utilizando o comando `git clone <URL-do-seu-Fork>`.
3. Navegue até o diretório clonado utilizando o comando `cd <diretório-do-Fork>`.
4. Adicione o repositório original como um repositório remoto com o comando `git remote add upstream <URL-do-repositório-original>`.
5. Atualize o seu Fork com as últimas alterações do repositório original utilizando o comando `git fetch upstream`.
6. Crie uma nova branch para trabalhar utilizando o comando `git checkout -b <nome-da-branch>`.
7. Faça as alterações desejadas nos arquivos do projeto.
8. Adicione as alterações utilizando o comando `git add .`.
9. Faça um commit das alterações utilizando o comando `git commit -m "<mensagem-do-commit>"`.
10. Envie as alterações para o seu Fork no Github utilizando o comando `git push origin <nome-da-branch>`.
11. No Github, vá para a página do seu Fork e clique no botão "Compare & pull request".
12. Preencha os detalhes do pull request, descrevendo as alterações realizadas.
13. Clique em "Create pull request" para enviar o pull request para o repositório original.
14. Aguarde a revisão e aprovação do pull request pelos mantenedores do repositório original.
15. Se necessário, faça as alterações solicitadas pelos mantenedores no seu Fork e envie novos commits para atualizar o pull request.
