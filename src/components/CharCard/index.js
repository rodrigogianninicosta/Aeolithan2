import { useState } from 'react'
import './style.css'
import './char.css'

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
        <div className="description">
          <div className="name">
            <label>{props.name}</label>
          </div>
          <div className="evolution">
            <label
              onClick={() => {
                setEvolution(1)
              }}
            >
              1º
            </label>
            <label
              onClick={() => {
                setEvolution(2)
              }}
            >
              2º
            </label>
            <label
              onClick={() => {
                setEvolution(3)
              }}
            >
              3º
            </label>
          </div>
        </div>
      </div>
    </button>
  )
}
