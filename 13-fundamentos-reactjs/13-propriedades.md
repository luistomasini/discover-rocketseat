# Propriedades

As propriedades dentro de um componente faz com que você possa passar valores diferentes para cada um deles.

Componente `Card`:

```jsx
import "./styles.css";

export function Card(props) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
```

Renderização do componente Card:

```jsx
<Card name="Rodrigo" time="10:55:25" />
<Card name="João" time="11:00:10" />
<Card name="Ana" time="12:10:33" />
```

Obs.: Podemos desestruturar os props com chaves. Ficaria assim:

```jsx
import "./styles.css";

export function Card({name, time}) {
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
}
```

Resultado:
![result](https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/propriedades.png)