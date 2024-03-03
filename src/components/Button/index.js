import { useNavigate } from 'react-router-dom'
import './style.css'

export default function Button(props) {
  const navigate = useNavigate()

  const before = () => {
    navigate('/home')
  }

  const after = () => {
    navigate('/createChar/selectChar')
  }

  return (
    <div className="createchar-button">
      <div
        className="div"
        onClick={() => {
          before()
        }}
      >
        <label>Voltar</label>
      </div>
      <div
        className="div"
        onClick={() => {
          after()
        }}
      >
        <label>Selecionar</label>
      </div>
    </div>
  )
}
