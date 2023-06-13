# Tipando Componente

Definindo tipagens para o componente Card:

import './styles.css';

```TS
type CardProps = {
  name: string;
  time: string;
}

export function Card(props: CardProps) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}
```

Instalando o `@types` do react

`npm i --save-dev @types/react`
