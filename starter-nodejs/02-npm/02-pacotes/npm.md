- [X] Instalar pacote
    npm i * -g
    npm root -g (para saber onde foi instalado)
- [X] Desinstalar pacote
    npm uninstall
- [X] Mudar versão de pacotes
    - "^2.29.1
    - major.minor.patch
    - * = atualiza tudo
    - ^ = sempre que atualizar, atualiza minor e patch
    - ~ = atualiza só o patch
    - sem nada = não atualiza
    - 2 = major(versão do projeto)
    - 29 = minor(alterações, mas não quebra)
    - 1 = patch(bug)

    - npm outdated (mostra todas as informações de versões do pacote)
    - npm upgrade (atualiza pra wanted, não aparece no package.json, mas é mapeada no package-lock.josn)
    - npm i *@latest