import { useNavigate } from 'react-router-dom'
import './style.css'
import Title from '../../components/Title'

export default function PreHome() {
  const navigate = useNavigate()

  return (
    <div className="main-div main-title">
      <Title />
      <div className="pre-home">
        <label onClick={() => navigate('/home')}>Click to start</label>
      </div>
    </div>
  )
}
