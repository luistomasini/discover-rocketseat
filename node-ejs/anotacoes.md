# Antoações

* npm i ejs
* npm i express
* node server (para rodar o servidor)

* EJS apenas - entre % é o comando que estou dando ao EJS.
  
```ejs

<%- include('#'); %>

```

* Mudanças feitas em arquivos EJS não necessitam que o servidor seja parado
* Mudanças feitas em arquivos JS sim

* Quando um objeto é utilizado após o include em uma página, ele tem que ser utilizado em todas as outras
* Quando eu quero passar um objeto definido dinamicamente:

```ejs

<%= typeof pagina != 'undefined'? pagina: 'Home' %>

```