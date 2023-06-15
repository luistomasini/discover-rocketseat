# Criando um server

1. Cria-se um arquivo index.js
2. Precisamos agora criar o endereço localhost:3000
3. Primeiramente precisamos "chamar" o módulo express no arquivo, utilizamos esse código:
   - `const express = require('express')`
4. Após isso, nós criamos uma constante chamada app com o valor de express() para ativar o módulo. Ficando assim:
   - `const app = express()`
5. Agora utilizaremos a função `listen()` do express para "ouvir o navegador" e passamos como parâmetro a porta que queremos, no caso a 3000:
   - `app.listen('3000')`
6. No terminal, rode o comando `node index.js` ou `node .`(se no package.json em main o valor ser o mesmo do arquivo criado)

Isso tudo pode ser também codado em um arquivo chamado ***server***. Porém pra fins dessa aula utilizaremos o index.js.
