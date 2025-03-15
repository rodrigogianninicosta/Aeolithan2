import './style.css'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import CharCard from '../../components/CharCard'

export default function StartAdventure() {
  return (
    <div className="main-div">
      <Title />
      <Subtitle message="Your party" />
      <div className="start-adventure">
        <CharCard
          key={`1`}
          {...JSON.parse(localStorage.getItem('party1'))}
          bar={null}
          battleMode={true}
        />
        <CharCard
          key={`2`}
          {...JSON.parse(localStorage.getItem('party2'))}
          bar={null}
          battleMode={true}
        />
        <CharCard
          key={`3`}
          {...JSON.parse(localStorage.getItem('party3'))}
          bar={null}
          battleMode={true}
        />
      </div>
      <Button
        before="/home"
        after="/battle"
        text={'start'}
        afterButton={true}
      />
    </div>
  )
}
