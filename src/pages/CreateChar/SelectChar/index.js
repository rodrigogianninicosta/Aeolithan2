import './style.css'
import '../style.css'
import CharCard from '../../../components/CharCard'
import Button from '../../../components/Button'
import PutArrows from '../../../components/PutArrows'
import Subtitle from '../../../components/Subtitle'

export default function SelectChar() {
  const Core = () => [
    <CharCard character={'guerreiro3'} name={'guerreiro'} />,
    <CharCard character={'guerreiro3'} name={'guerreiro'} />,
    <CharCard character={'guerreiro3'} name={'guerreiro'} />,
    <CharCard character={'guerreiro3'} name={'guerreiro'} />,
  ]

  return (
    <div className="main-div">
      <Subtitle message={'Selecione o seu personagem'} />
      <div className="select-char">
        <PutArrows Core={Core} />
      </div>
      <Button 
        before={'/home'}
        after={'/createChar/writeName'}
      />
    </div>
  )
}
