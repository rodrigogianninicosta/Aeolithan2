import './style.css'
import CharCard from '../../../components/CharCard'
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import Subtitle from '../../../components/Subtitle'

export default function ConfirmChar() {
  return (
    <div className="main-div">
      <Title />
      <Subtitle message={'Confirme o seu personagem'} />
      <div className="confirm-char">
        <CharCard character={'guerreiro3'} name={document.getElementById('name').value} />
      </div>
      <Button 
        before={'/createChar/writeName'}
        after={'/createChar/writeName'}
      />
    </div>
  )
}
