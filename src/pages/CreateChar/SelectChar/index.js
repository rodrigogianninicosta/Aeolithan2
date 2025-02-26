import { useState, useEffect, useMemo } from 'react'
import './style.css'
import Button from '../../../components/Button'
import PutArrows from '../../../components/PutArrows'
import Title from '../../../components/Title'
import Subtitle from '../../../components/Subtitle'

export default function SelectChar() {
  const characters = useMemo(
    () => [
      { character: 'guerreiro', name: 'guerreiro', race: 'humano' },
      { character: 'mago', name: 'mago', race: 'humano' },
      { character: 'ladino', name: 'ladino', race: 'humano' },
      { character: 'piromante', name: 'piromante', race: 'humano' },
      { character: 'amaldicoado', name: 'amaldicoado', race: 'elfo' },
      { character: 'batedor', name: 'batedor', race: 'goblin' },
      { character: 'infectado', name: 'infectado', race: 'humano' },
    ],
    [],
  )

  const [startIndex, setStartIndex] = useState(0)
  const visibleCharacters = characters.slice(startIndex, startIndex + 3)

  useEffect(() => {
    if (startIndex + 3 < characters.length) {
      const nextChar = characters[startIndex + 3]
      const preloadImg = new Image()
      preloadImg.src = `/images/character/${nextChar.character}.png`
      const preloadBg = new Image()
      preloadBg.src = `/images/background/${nextChar.character}.jpg`
    }

    if (startIndex > 0) {
      const prevChar = characters[startIndex - 1]
      const preloadImgPrev = new Image()
      preloadImgPrev.src = `/images/character/${prevChar.character}.png`
      const preloadBgPrev = new Image()
      preloadBgPrev.src = `/images/background/${prevChar.character}.jpg`
    }
  }, [characters, startIndex])

  const next = () => {
    if (startIndex + 3 < characters.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
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
