# useEffect

O useEffect é um hook do ReactJS que permite executar efeitos colaterais em componentes funcionais. Efeitos colaterais são ações que ocorrem além da renderização normal do componente, como buscar dados de uma API, atualizar o título da página, adicionar ou remover eventos, entre outros. O useEffect é usado para lidar com esses efeitos colaterais e é executado após cada renderização do componente.

O `useEffect` é executado automaticamente sempre que o componente é renderizado.

A estrutura do `useEffect` é da seguinte forma:

```jsx
useEffect(() => {
 // Dentro do objeto devemos colocar todas. ações que serão executadas.
    

// Os arrays definem quais os estados que o useEffect depende.
  }, []);
```