# Axios

Biblioteca HTTP client baseada em promessas para o browser e para o node.js

No CodeSandbox

- Vá em "dependencies"
- Digite axios
- Clique nele

Adicione este código

```js
import axios from "axios";
axios.get('/users')
  .then(res => {
    console.log(res.data);
  });
```
