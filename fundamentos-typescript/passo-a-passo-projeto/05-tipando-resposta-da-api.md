# Tipando resposta da API

Para a tipagem de resposta da API precisamos criar dois types

```tsx
type ProfileResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}
```

Importar as propriedades do nosso type no `useEffect()`:

```tsx
useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/rodrigorgtic');
      const data = await response.json() as ProfileResponse;

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);
```

E modificar o nosso estado:

```tsx
const [user, setUser] = useState<User>({} as User);
```
