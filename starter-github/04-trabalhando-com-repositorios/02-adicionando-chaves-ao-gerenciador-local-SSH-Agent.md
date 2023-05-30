# Adicionando chaves ao gerenciador local SSH Agent

## Descrição

Para este passo, vamos abrir o navegador, entrando neste link:

<https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key>

Você será direcionado a uma página no GitHub que irá nos ajudar, lembrando que para que executemos este processo, precisamos saber que o windows funciona de uma forma diferente do que macOS e o linux, então por isso para cada processo há uma página diferente, para todos esses sistemas operacionais.

Para o windows é bem simples, abriremos o terminal, iniciaremos ssh agent no background digitando ou apenas copiando do link, depois colaremos a linha já no terminal diferente que já tem o Git, `eval "$(ssh-agent -s)"`, então mostrará para você o processo que está sendo executado e depois apenas rodar esta linha no terminal, `ssh-add ~/.ssh/id_rsa.`

No mac há alguns processos a mais do que o windows, iremos começar com a mesma linha `eval "$(ssh-agent -s)"`, irá mostrar novamente o processo executado, então daremos um `.ssh/config`, veremos que não tem, então precisaremos dar um vim para criar, `vim ~/.ssh/config`, assim criamos o config, agora tudo que precisamos é copiar:

`Host *`
  `AddKeysToAgent yes`
  `UseKeychain yes`
  `IdentityFile ~/.ssh/id_rsa`
Por fim copiaremos `ssh-add -K ~/.ssh/id_rsa.`

Pronto assim sua máquina está funcionando junto com a do GitHub.