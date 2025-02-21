import './style.css'
import CharCard from '../../../components/CharCard'
import Button from '../../../components/Button'
import PutArrows from '../../../components/PutArrows'
import Title from '../../../components/Title'
import Subtitle from '../../../components/Subtitle'

export default function SelectChar() {
  const Core = () => [
    <CharCard character={'guerreiro'} name={'guerreiro'} />,
    <CharCard character={'mago'} name={'mago'} />,
    <CharCard character={'ladino'} name={'ladino'} />,
    <CharCard character={'mago'} name={'mago'} />,
  ]

  return (
    <div className="main-div">
      <Title />
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
