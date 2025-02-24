import { useState } from 'react'
import './style.css'
import './char.css'
import CharDescription from './CharDescription'

export default function CharCard(props) {
  const [evolution, setEvolution] = useState(1)
  const clickFunction = () => {
    localStorage.setItem('char', props.character)
  }
  return (
    <button
      className="wrapper"
      onClick={() => {
        clickFunction()
      }}
    >
      <div className={`char-card ${props.character + evolution}`}>
        <div className="background">
          <img
            src={`/images/background/${props.character + evolution}.jpg`}
            alt="background"
          />
        </div>
        <div className="frame">
          <img src={`/images/frame/darkCard3.png`} alt="frame" />
        </div>
        <div className="char">
          <img
            src={`/images/character/${props.character + evolution}.png`}
            alt="char"
          />
        </div>
        <CharDescription setEvolution={setEvolution} name={props.name} />
      </div>
    </button>
  )
}
