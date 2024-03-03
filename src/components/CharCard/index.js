import React, { useState } from 'react'
import './style.css'
import './char.css'
import CharIcon from './CharIcon'
import SideBar from './SideBar'

export default function CharCard(props) {
  const [showDiv, setShowDiv] = useState(false)
  return (
    <div className="wrapper">
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
        <CharIcon />,
        <div className="char">
          <img src={`/images/character/${props.character}.png`} alt="char" />
        </div>
        <div className={`black-div ${showDiv ? 'show' : ''}`} />
      </div>
      <SideBar onButtonClick={() => setShowDiv(!showDiv)} />
    </div>
  )
}
