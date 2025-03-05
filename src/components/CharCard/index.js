import { useState, useEffect } from 'react'
import './style.css'
import './char.css'
import CharDescription from './CharDescription'

export default function CharCard(props) {
  const [evolution, setEvolution] = useState(1)
  const [loaded, setLoaded] = useState(false)

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
    <button className="wrapper" onClick={clickFunction}>
      <div className={`char-card ${props.classType + evolution}`}>
        <div className="background">
          <img
            src={`/images/background/${props.classType + evolution}.jpg`}
            alt="background"
            onLoad={() => setLoaded(true)}
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0s ease-in-out',
            }}
          />
        </div>
        <div className="frame">
          <img src={`/images/frame/darkCard3.png`} alt="frame" />
        </div>
        <div className="char">
          <img
            src={`/images/character/${props.classType + evolution}.png`}
            alt="char"
            onLoad={() => setLoaded(true)}
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0s ease-in-out',
            }}
          />
        </div>
        <CharDescription setEvolution={setEvolution} {...props} />
      </div>
    </button>
  )
}
