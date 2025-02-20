import { useNavigate } from 'react-router-dom'
import './style.css'

export default function Button(props) {
  const navigate = useNavigate()

  const before = () => {
    navigate(props.before)
  }

  const after = () => {
    navigate(props.after)
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
