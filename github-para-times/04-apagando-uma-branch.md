# Apagando uma branch

## Apagando localmente
1. Abra o terminal ou prompt de comando.
2. Navegue até o diretório do seu repositório local usando o comando `cd`.
3. Certifique-se que não está na branch que deve ser apagada com `git branch`
4. Execute o comando `git branch -D nome-da-branch`

## Apagando no repositório remoto
1. No própio Github, em "branches", clicar na lixeira da branch desejada. Podemos também restaurá-la após a exclusão.

Ou

1. Execute o comando `git push origin --delete nome-da-branch`
