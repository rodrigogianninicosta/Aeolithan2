import { useState, useEffect } from 'react'
import './style.css'
import './char.css'
import './description.css'
import IconBar from './IconBar'
import EvolutionBar from './EvolutionBar'
import DeleteBar from './DeleteBar'
import IconContent from './IconContent'

export default function CharCard(props) {
  const [evolution, setEvolution] = useState(props.currentEvolution)
  const [loaded, setLoaded] = useState(false)
  const [selectedIcon, setSelectedIcon] = useState('')

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
    if (props.clickFunction === 1) {
      localStorage.setItem('charInfo', JSON.stringify({ ...props }))
    } else if (props.clickFunction === 2) {
      if (localStorage.getItem('party1') && !localStorage.getItem('party2')) {
        localStorage.setItem('party2', JSON.stringify({ ...props }))
      } else if (localStorage.getItem('party2')) {
        localStorage.setItem('party3', JSON.stringify({ ...props }))
      } else {
        localStorage.setItem('party1', JSON.stringify({ ...props }))
      }
    }
  }

  return (
    <button className="wrapper" onClick={clickFunction}>
      <div className={`char-card ${props.imageName + evolution}`}>
        <div className="background">
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
          />
          {props.evolution ? (
            <EvolutionBar
              setEvolution={setEvolution}
              currentEvolution={props.currentEvolution}
            />
          ) : (
            <DeleteBar id={props.id} />
          )}
          <IconContent selectedIcon={selectedIcon} {...props} />
        </div>
      </div>
    </button>
  )
}
