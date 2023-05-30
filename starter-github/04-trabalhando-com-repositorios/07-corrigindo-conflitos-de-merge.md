# Corrigindo conflitos de merge

## Descrição

Nesta aula faremos uma configuração, e corrigirremos conflitos e erros por causa de um processo.

Entrando no diretório `cd demo/` como exemplo, quando dermos um `git pull` ele vai avisar que está havendo um conflito, para corrigir, apenas faremos o padrão pedido pelo git que é `git config --global pull.rebase false` que é o ***padrão merge***, usando o `git pull` novamente, estará tudo certo.

Agora forçaremos um erro para criarmos uma situação. Vamos supor que nós tenhamos feito uma alteração no repositório e demos commit apenas na nuvem e esquecemos de dar `git pull`.

Quando chegamos em casa, nós fazemos uma alteração no local. Ao usar `git pull`, um erro vai ser mostrado. Se abrirmos pelo `vim README.md`, poderemos ver que é possível escolher entre a alteração local e a remota. Para fazermos isso, apenas apagamos a cabeça, os ====== e os >>>>>> e dizemos qual alteração queremos.

No entanto, existe outro modo usando o VSCode. Abrindo-o, no terminal, damos um `open .` e colocamos ele no VSCode. Ele automaticamente irá perceber o conflito e irá lhe dar certas opções, como a de aceitar as alterações locais ou as da nuvem. Aceitando qualquer uma automaticamente, o VSCode vai alterar de acordo com a escolha, então damos um `git commit -am "mensagem`" , agora o `git pull` e, por fim, o `git push`. Atualizando, veremos as alterações no GitHub.
