# Configuração inicial

## Descrição

Será feita apenas uma vez por computador e o efeito se manterá mesmo após atualizações
Você também vai poder alterá-las em qualquer momento rodando esses comando novamente.

Primeiramente, abra o seu terminal e digite:

`git config --global user.name "Seu nome completo entre aspas"`

`git config --global user.email seuemailaqui@dominio.com`

💡 Isso é importante porque em cada commit essa informação será utilizada, e é carimbada de forma imutável nos commits que você começa a criar.

Caso você queira substituir essa informação para um projeto específico, apenas rode o comando sem a opção `--global` dentro daquele projeto.

Caso queira trocar o editor padrão, que é o vim, pelo VS Code, rode o comando abaixo:

`git config --global core.editor "code -w"`

Por fim, caso queira verificar as suas configurações, apenas rode o comando abaixo:

`git config --list`

## `git config`

- Permite ver e atribuir variáveis de configuração como nome e email
- Estas variáveis podem ser armazenadas em três lugares diferentes:
  1. `/etc/gitconfig`: válido para todos os usuários no sistema e todos os seus repositórios. Se você passar a opção `--system` para `git config`, ele lê e escreve neste arquivo.
  2. `~/.gitconfig` ou `~/.config/git/config`: Somente para o usuário. Você pode fazer o Git ler e escrever neste arquivo passando a opção `--global`
  3. `config` no diretório Git (ou seja, `.git/config`) de qualquer repositório que você esteja usando: específico para este repositório.

Cada nível sobrescreve os valores no nível anterior, ou seja, valores em `.git/config` prevalecem sobre `/etc/gitconfig`

### No Windows, o arquivo .gitconfig estará no diretório $HOME que é C:\User\$USER
