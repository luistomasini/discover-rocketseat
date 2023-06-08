import './style.css';

import { Card } from '../../components/Card';

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..."/>
      <button type="button">Adicionar</button>

      <Card name="Luis" time="10:55:25" />
      <Card name="João" time="11:00:10" />
      <Card name="Ana" time="12:10:33" />
    </div>    
  )
}
