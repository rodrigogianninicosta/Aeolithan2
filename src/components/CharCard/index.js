import React from 'react'
import './style.css'
import './char.css'

export default function CharCard(props) {
  const clickFunction = () => {
    localStorage.setItem('char', props.character)
}
  return (
    <button className="wrapper" onClick={()=>{clickFunction()}}>
      <div className={`char-card ${props.character}`}>
        <div className="background">
          <img
            src={`/images/background/${props.character}.jpg`}
            alt="background"
          />
        </div>
        <div className="frame">
          <img src={`/images/frame/darkCard3.png`} alt="frame" />
        </div>
        <div className="char">
          <img src={`/images/character/${props.character}.png`} alt="char" />
        </div>
        <div className="description">
          <div className="name">
            <label>{props.name}</label>
          </div>
        </div>
      </div>
    </button>
  )
}
