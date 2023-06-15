# useEffect Async

Nessa aula verificamos como lidar com requisições assíncronas utilizando o Hook useEffect

```jsx
useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/birobirobiro");
      const data = await response.json();
      console.log("DADOS =>", data);

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);
```
