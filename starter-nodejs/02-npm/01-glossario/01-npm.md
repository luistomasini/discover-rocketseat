# NPM

Node Package Manager

__Glossary: Dependencies, Packages, Modules__

- [X] Verficar se temos o npm instalado `npm -v`
- [X] Criar nosso próprio pacote
     - npm init
     - npm init -y
- [X] O que é o arquivo package.json
- [X] Utilizar módulos de terceiros
    - npm install
    - npm i
    - npm i cfonts -D (dependencia de desenvolvimento) *Quando alguém for usar pra desenvolver, não precisa instalar na máquina dele.
    - npm update (remapear o package.json depois de alterações)
- [X] O que é o diretório node_modules
    - Uma dependência vai chamando outra e assim por diante, a não ser as devDependencies. 
    - Não é enviada para o repositório
    - npm install para instalar as dependencias pq ele puxa do package.json
    - .gitignore
- [X] O que é o arquivo packag-lock.json
    - Não mexemos
    - Não deletamos
    - Manutenção de módulos
    - Mapea os módulos
- [X] Criar scripts para rodar com o npm
    - package.json > scripts
    - posso mudar "test" para "start"
    - npm run start ou somente npm start