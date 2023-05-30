# Modificando arquivos local e enviando para repositório remoto

## Descrição

Agora faremos uma alteração, no terminal

- Acessamos o nosso arquivo README que fizemos na aula passada escrevendo vim[README.md](http://readme.md)
- Damos um enter e modificamos o que queremos,
- Saindo dando um `git status` podemos ver que ele não foi colocado no stage area,
- Precisamos colocar, mas como o arquivo já está sendo rastreado pelo git, não precisaremos fazer o `git add .`
- faremos o `git commit -am ":sparkles: changing readme"`,
- `m` sendo a mensagem e o `a` ele vai adicionar a modificação que não está na stage area automaticamente junto ao commit tudo em uma linha só, isso somente funcionaria caso você já tenha posto na stage area alguma vez.
- não vamos precisar fazer o `git remote`, pois a nuvem já existe
- dando o `git push` não vamos precisar fazer o `-u origin`, porque estamos na branch main já que a branch já existe aqui para o git.
