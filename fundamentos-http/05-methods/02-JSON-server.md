# JSON Server

## Descrição

Nesta aula iremos ensinar como instalar a ferramenta JSON Server, que nos permite pegar respostas em formato JSON.

Antes de tudo temos que já ter o **Node.js** instalado na máquina. Depois disso podemos executar o comando:

`npm install -g json-server`

depois do comando terminar, crie um diretório chamado http-course e entre nele, crie um `db.json` e copie as linhas de código:

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Agora pra iniciar o servidor, podemos usar o comando:

`json-server --watch db.json`

Assim podemos acessar esses conteúdos.
