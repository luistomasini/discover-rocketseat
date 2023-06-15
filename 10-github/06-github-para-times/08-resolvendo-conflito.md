# Resolvendo conflito

1. Ao tentar mesclar um pull request, se houver conflitos entre as alterações propostas e a branch de destino, ocorrerá um conflito de merge.
2. O conflito de merge ocorre quando as alterações em ambas as branches afetam as mesmas partes do código.
3. Os conflitos de merge são sinalizados tanto na linha de comando (CLI) quanto no VSCode.
4. Para resolver os conflitos, abra o arquivo com conflitos no VSCode.

Como resolver conflitos no VSCode:

1. No arquivo com conflitos, você verá as seções com conflitos marcadas com `<<<<<<<`, `=======` e `>>>>>>>`.
2. As alterações propostas pela branch de destino estão entre `<<<<<<<` e `=======`, e as alterações da sua branch estão entre `=======` e `>>>>>>>`.
3. Analise as alterações e decida como deseja mesclar as diferenças.
4. Edite o arquivo para resolver os conflitos manualmente, mantendo apenas as alterações relevantes.
5. Após resolver todos os conflitos, salve o arquivo.
6. Adicione o arquivo modificado à área de preparação usando `git add` na CLI ou pelo controle de versão no VSCode.
7. Continue o processo de merge executando `git commit` na CLI ou clicando em "Commit" no VSCode.
8. O commit de merge conclui o processo de resolução de conflitos e incorpora as alterações mescladas.
