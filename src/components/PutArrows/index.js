import './style.css'
import CharCard from '../CharCard'

export default function PutArrows(props) {
  return [
    <div className="arrow" onClick={props.prev}>
      <img className="icon" src="/images/icons/arrow_left.svg" alt="before" />
    </div>,
    props.Core.map((char, index) => (
      <CharCard key={index} character={char.character} name={char.name} />
    )),
    <div className="arrow" onClick={props.next}>
      <img className="icon" src="/images/icons/arrow_right.svg" alt="after" />
    </div>,
  ]
}
