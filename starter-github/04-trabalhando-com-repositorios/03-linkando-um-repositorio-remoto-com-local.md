# Linkando um repositório remoto com local

## Descrição

Fizemos nosso primeiro repositório apenas online, mas agora criaremos seguindo um outro caminho.

Vamos em *new* para criar um novo repositório, colocamos o nome, descrição, mesmo opcional é bem importante, escolhemos se é privado ou público para as outras pessoas, pularemos essa etapa de adicionar coisas pela nuvem, pois faremos ele todo manualmente, criado, estaremos vendo os passos que deveremos seguir.

Estaremos criando um repositório escrevendo no terminal

1. `mkdir nome do diretório`
2. `cd nome do diretório`
3. `git init` para iniciarmos o nosso git
4. `vim` [README.md](http://readme.md). Nesse caso, estaremos escrevendo algumas coisas como nome e descrição
5. Saímos e damos um `git status` para apenas darmos uma olhada, o arquivo não está sendo rastreado
6. Então vamos dar `um git add .`
7. `git commit -m ":tada: first commit"` o nosso primeiro commit o :tada: é apenas um ícone
8. Agora precisaremos adicionar nosso repositório remoto, usando a parte de ssh que é muito mais seguro do que HTTPS, estaremos escrevendo `add origin git@github.com:maykrbrito/demo.git`. Este é somente um exemplo, já que o de cada um será diferente apenas copie ao lado do SSH,
9. Agora que adicionamos, podemos dar um `git remote -v` para vermos os repositórios que estão na nuvem, mas por enquanto apenas estamos focando somente 1, que é no GitHub
10. Damos um `git branch -M main`, pois ainda não temos a branch main. Da forma com que estamos a trabalhar, por padrão, a branch vem master, então mudamos o padrão para main.
11. Agora damos um `git push -u origin main` para enviarmos nossos repositórios para nuvem, damos um *yes* para liberar a conexão, as chaves foram adicionadas.

Voltando para parte code vemos que foi criado e linkado, olha que legal.
