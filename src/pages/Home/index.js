import { useNavigate } from 'react-router-dom'
import './style.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="start-menu">
      <div className="start">
        <div className="div">
          <label>Iniciar Aventura</label>
        </div>
        <div className="div" onClick={() => navigate('/createChar/selectChar')}>
          <label>Criar Personagem</label>
        </div>
        <div className="div">
          <label>Meus Personagens</label>
        </div>
        <div className="div">
          <label>Alterar Mundo</label>
        </div>
      </div>
    </div>
  )
}
