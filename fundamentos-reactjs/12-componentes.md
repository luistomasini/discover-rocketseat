# Componentes

Componente nada mais é do que um bloco de código reutilizável e independente. Nessa aula, criamos o nosso primeiro componente Card

Estrutura de um componente:

📁 Components 

📁 Card

**`index.jsx`**

```jsx
import "./styles.css";

export function Card() {
  return (
    <div className="card">
      <strong>João Inácio</strong>
      <small>10:15:24</small>
    </div>
  );
}
```

**`styles.css`**

```css
.card {
  height: 100%;
  width: 50%;

  background: #735bf2;
  color: #fff;

  border-radius: 10px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
}

.card strong {
  font-size: 18px;
}
```

Resultado:
![result](https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/componentes.png)