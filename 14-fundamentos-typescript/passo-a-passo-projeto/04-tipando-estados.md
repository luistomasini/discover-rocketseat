# Tipando Estados

Para tipar os estados precisamos exportar o type do nosso componente Card.

```tsx
export type CardProps = {
  name: string;
  time: string;
}
```

Após a exportação, precisamos importar em nosso arquivo Home.tsx

```tsx
import { Card, CardProps } from '../../components/Card';
```

E em seguida, passar as propriedades para o nosso estado:

```tsx
const [students, setStudents] = useState<CardProps[]>([]);
```
