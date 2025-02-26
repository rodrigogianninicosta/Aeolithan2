import './style.css'
import CharCard from '../CharCard'

export default function PutArrows(props) {
  return [
    <div key="left-arrow" className="arrow" onClick={props.prev}>
      <img className="icon" src="/images/icons/arrow_left.svg" alt="before" />
    </div>,
    props.Core.map((char, index) => (
      <CharCard
        key={char.character}
        character={char.character}
        name={char.name}
        race={char.race}
        id={'?'}
        position={index + 1}
        level={'1'}
        exp={'0'}
      />
    )),
    <div key="right-arrow" className="arrow" onClick={props.next}>
      <img className="icon" src="/images/icons/arrow_right.svg" alt="after" />
    </div>,
  ]
}
