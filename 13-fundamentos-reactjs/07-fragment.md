# Fragment
Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos (`<>filhos</>`) permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM.

Exemplo:

```jsx
function Home() {
  return (
    <>
      <h1>Lista de Presença.</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
    </>
  );
}

export default Home;
```
No exemplo acima, poderia ser utilizado uma <div> para agrupar esses três elementos.