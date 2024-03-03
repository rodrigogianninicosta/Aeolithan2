import { useNavigate } from 'react-router-dom'
import './style.css'

export default function PreHome() {
  const navigate = useNavigate()

  return (
    <div className="main-div pre-home">
      <label onClick={() => navigate('/home')}>Clique para iniciar</label>
    </div>
  )
}
