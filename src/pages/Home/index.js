import { useNavigate } from 'react-router-dom'
import './style.css'
import Title from '../../components/Title'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="main-div main-title">
      <Title />
      <div className="start">
        <div className="div" onClick={() => navigate('/startAdventure')}>
          <label>Start adventure</label>
        </div>
        <div className="div" onClick={() => navigate('/buildParty')}>
          <label>Build your party</label>
        </div>
        <div className="div" onClick={() => navigate('/createChar')}>
          <label>Create character</label>
        </div>
        <div className="div" onClick={() => localStorage.clear()}>
          <label>Change world</label>
        </div>
        <div className="div" onClick={() => navigate('/')}>
          <label>Return</label>
        </div>
      </div>
    </div>
  )
}
