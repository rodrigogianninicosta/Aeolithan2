import { useState, useEffect } from 'react'
import { getCharacters } from '../../api/get'
import { postCharacters } from '../../api/post'
import './style.css'
import Button from '../../components/Button'
import PutArrows from '../../components/PutArrows'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'

export default function SelectChar() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    localStorage.removeItem('charInfo')
    const getCustomers = async () => {
      const data = await getCharacters('')
      if (data) {
        setCharacters(data)
      }
    }
    getCustomers()
  }, [])

  const cardsQuantity = 3
  const [startIndex, setStartIndex] = useState(0)
  const visibleCharacters = characters.slice(
    startIndex,
    startIndex + cardsQuantity,
  )

  useEffect(() => {
    if (characters.length > 0) {
      if (startIndex + cardsQuantity < characters.length) {
        const nextChar = characters[startIndex + cardsQuantity]
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
    setStartIndex((prev) =>
      prev + cardsQuantity < characters.length ? prev + 1 : prev,
    )
  }

  const prev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  return (
    <div className="main-div">
      <Title />
      <Subtitle message="Selecione o seu personagem" />
      <div className="select-char">
        <PutArrows
          Core={visibleCharacters}
          next={next}
          prev={prev}
          startIndex={startIndex}
          evolution={true}
        />
      </div>
      <Button
        before="/home"
        after="/home"
        text={'criar'}
        afterAction={() => postCharacters('123')}
      />
    </div>
  )
}
