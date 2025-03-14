import './style.css'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import CharCard from '../../components/CharCard'

export default function StartAdventure() {
  return (
    <div className="main-div">
      <Title />
      <Subtitle message="Confirme seu time" />
      <div className="start-adventure">
        <CharCard
          key={`1`}
          evolution={true}
          {...JSON.parse(localStorage.getItem('party1'))}
        />
        <CharCard
          key={`2`}
          evolution={true}
          {...JSON.parse(localStorage.getItem('party2'))}
        />
        <CharCard
          key={`3`}
          evolution={true}
          {...JSON.parse(localStorage.getItem('party3'))}
        />
      </div>
      <Button before="/home" after="/battle" text={'iniciar'} />
    </div>
  )
}
