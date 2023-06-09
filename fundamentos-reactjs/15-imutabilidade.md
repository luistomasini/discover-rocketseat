# Imutabilidade

Imutabilidade em ReactJS significa que, uma vez que você define um valor para um objeto ou um estado, ele não pode ser alterado diretamente. Em vez disso, você cria uma nova cópia do objeto com as modificações desejadas. Isso ajuda a garantir a consistência dos dados e a facilitar o controle das mudanças em um aplicativo React.

O conteúdo da variável não deve ser modificado e sim substituído.

**`index.jsx`**

```jsx
import React, { useState } from "react";

import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");

  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card name={student.name} time={student.time} />
      ))}
    </div>
  );
}
```

Resultado:
![result](https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/imutabilidade.gif)