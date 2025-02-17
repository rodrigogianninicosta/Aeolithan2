import React, { useState } from 'react'
import './style.css'
import './char.css'
import CharIcon from './CharIcon'

/*function CharCardOld(props) {
  const [showDiv, setShowDiv] = useState(false)
  return (
    <div className="wrapper">
      <div className={`char-card ${props.character}`}>
        <div className="background">
          <img
            src={`/images/background/${props.character}.gif`}
            alt="background"
          />
        </div>
        <div className="frame">
          <img src={`/images/frame/darkCard3.png`} alt="frame" />
        </div>
        <CharIcon />,
        <div className="char">
          <img src={`/images/character/${props.character}.gif`} alt="char" />
        </div>
        <CharInformation showDiv={showDiv} />,
      </div>
      <SideBar onButtonClick={() => setShowDiv(!showDiv)} />
    </div>
  )
}*/

export default function CharCard(props) {
  return (
    <div className="wrapper">
      <div className={`char-card ${props.character}`}>
        <div className="background">
          <img
            src={`/images/background/${props.character}.gif`}
            alt="background"
          />
        </div>
        <div className="frame">
          <img src={`/images/frame/darkCard3.png`} alt="frame" />
        </div>
        <CharIcon />,
        <div className="char">
          <img src={`/images/character/${props.character}.gif`} alt="char" />
        </div>
      </div>
    </div>
  )
}
