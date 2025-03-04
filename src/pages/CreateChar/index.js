import { useState, useEffect } from 'react'
import { getCharacters } from '../../api'
import './style.css'
import Button from '../../components/Button'
import PutArrows from '../../components/PutArrows'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'

export default function SelectChar() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCustomers = async () => {
      const data = await getCharacters('')
      if (data) {
        setCharacters(data)
      }
    }
    getCustomers()
  }, [])

  const [startIndex, setStartIndex] = useState(0)
  const visibleCharacters = characters.slice(startIndex, startIndex + 3)

  useEffect(() => {
    if (characters.length > 0) {
      if (startIndex + 3 < characters.length) {
        const nextChar = characters[startIndex + 3]
        if (nextChar) {
          const preloadImg = new Image()
          preloadImg.src = `/images/character/${nextChar.character}.png`
          const preloadBg = new Image()
          preloadBg.src = `/images/background/${nextChar.character}.jpg`
        }
      }

      if (startIndex > 0) {
        const prevChar = characters[startIndex - 1]
        if (prevChar) {
          const preloadImgPrev = new Image()
          preloadImgPrev.src = `/images/character/${prevChar.character}.png`
          const preloadBgPrev = new Image()
          preloadBgPrev.src = `/images/background/${prevChar.character}.jpg`
        }
      }
    }
  }, [characters, startIndex])

  const next = () => {
    setStartIndex((prev) => (prev + 3 < characters.length ? prev + 1 : prev))
  }

  const prev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  return (
    <div className="main-div">
      <Title />
      <Subtitle message="Selecione o seu personagem" />
      <div className="select-char">
        <PutArrows Core={visibleCharacters} next={next} prev={prev} />
      </div>
      <Button before="/home" after="/createChar/writeName" />
    </div>
  )
}
