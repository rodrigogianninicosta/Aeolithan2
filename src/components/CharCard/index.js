import { useState, useEffect } from 'react'
import './style.css'
import './char.css'
import './enemy.css'
import './description.css'
import './ultimate.css'
import IconBar from './IconBar'
import EvolutionBar from './EvolutionBar'
import DeleteBar from './DeleteBar'
import IconContent from './IconContent'

export default function CharCard(props) {
  const [evolution, setEvolution] = useState(props.currentEvolution || 1)
  const [loaded, setLoaded] = useState(false)
  const [selectedIcon, setSelectedIcon] = useState('')
  const [ultimateForm, setUltimateForm] = useState('')

  useEffect(() => {
    const evolutions = [1, 2]
    evolutions.forEach((evo) => {
      const bgImage = new Image()
      bgImage.src = `/images/background/${props.character + evo}.jpg`
      const charImage = new Image()
      charImage.src = `/images/character/${props.character + evo}.png`
    })
  }, [props.character])

  useEffect(() => {
    setLoaded(false)
  }, [evolution])

  const clickFunction = () => {
    localStorage.setItem('charInfo', JSON.stringify({ ...props }))
  }

  return (
    <button className={`wrapper ${ultimateForm}`} onClick={clickFunction}>
      <div className={`char-card ${props.imageName + evolution}`}>
        <div className={`background`}>
          <img
            src={`/images/background/${props.imageName + evolution}.jpg`}
            alt="background"
            onLoad={() => setLoaded(true)}
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0s ease-in-out',
            }}
          />
        </div>
        <div className="char">
          <img
            src={`/images/character/${props.imageName + evolution}.png`}
            alt="char"
            onLoad={() => setLoaded(true)}
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0s ease-in-out',
            }}
          />
        </div>
        <div className="description">
          <div className="name">
            <label>{props.classType}</label>
          </div>
          <IconBar
            selectedIcon={selectedIcon}
            setSelectedIcon={setSelectedIcon}
            setDamage={props.setDamage}
            battleMode={props.battleMode}
          />
          {props.bar === 'evolution' ? (
            <EvolutionBar
              setEvolution={setEvolution}
              setUltimateForm={setUltimateForm}
              currentEvolution={props.currentEvolution}
            />
          ) : props.bar === 'delete' ? (
            <DeleteBar {...props} />
          ) : null}
          <IconContent selectedIcon={selectedIcon} {...props} />
        </div>
      </div>
    </button>
  )
}
