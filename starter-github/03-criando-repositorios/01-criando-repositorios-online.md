# Criando repositório online

## Descrição

Nessa aula estamos vendo como criar um repositório no GitHub

Existem várias opções de como criar, indo no dashboard, no + ou indo no perfil e na parte de repositórios e clicar em new.

Na parte de criação de um novo repositório, nele conterá todos os arquivos de projetos, colocaremos um nome, se for o seu próprio nome teremos um segredo, um repositório com o nome igual ao seu é especial, usado para fazer um README.md no GitHub, ou seja, fazer um profile no mesmo.

Descrição é opcional, podemos colocar como privado ou público, no caso adicionaremos um arquivo README. E criaremos o repositório.

Isso no terminal seria feito da seguinte forma:

1. Primeiro precisamos estar em um diretório, caso não haja, mkdir***nome***
2. Entrar nele é o comando cd***nome*** , .
3. Se não há nada nele, então damos um `git` init
4. No processo de adicionar o README, usamos o comando `touch README.md` ,
5. No `ls` temos o README.md, damos um `git add README.md`
6. `git commit -m "README.md"`, com isso fizemos nosso primeiro commit.

Isso seria como fazer o repositório local, sendo diferente do GitHub que é na nuvem, por enquanto sem nenhuma ligação, mas no curso veremos ainda como ligar.
