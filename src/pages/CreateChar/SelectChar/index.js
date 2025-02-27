import { useState, useEffect, useMemo } from 'react'
import './style.css'
import Button from '../../../components/Button'
import PutArrows from '../../../components/PutArrows'
import Title from '../../../components/Title'
import Subtitle from '../../../components/Subtitle'

export default function SelectChar() {
  const characters = useMemo(
    () => [
      {
        character: 'guerreiro',
        name: 'guerreiro',
        race: 'humano',
        position: 1,
        health: 100,
        attack: 15,
        magic: 5,
        defense: 20,
        speed: 10,
      },
      {
        character: 'mago',
        name: 'mago',
        race: 'humano',
        position: 2,
        health: 80,
        attack: 10,
        magic: 25,
        defense: 5,
        speed: 12,
      },
      {
        character: 'ladino',
        name: 'ladino',
        race: 'humano',
        position: 3,
        health: 90,
        attack: 12,
        magic: 8,
        defense: 10,
        speed: 18,
      },
      {
        character: 'sacerdote',
        name: 'sacerdote',
        race: 'humano',
        position: 4,
        health: 85,
        attack: 8,
        magic: 20,
        defense: 15,
        speed: 10,
      },
      {
        character: 'piromante',
        name: 'piromante',
        race: 'humano',
        position: 5,
        health: 75,
        attack: 12,
        magic: 22,
        defense: 8,
        speed: 14,
      },
      {
        character: 'lobisomem',
        name: 'lobisomem',
        race: 'elfo',
        position: 6,
        health: 110,
        attack: 20,
        magic: 0,
        defense: 15,
        speed: 20,
      },
      {
        character: 'batedor',
        name: 'batedor',
        race: 'goblin',
        position: 7,
        health: 70,
        attack: 14,
        magic: 5,
        defense: 12,
        speed: 22,
      },
      {
        character: 'infectado',
        name: 'infectado',
        race: 'humano',
        position: 8,
        health: 95,
        attack: 18,
        magic: 10,
        defense: 10,
        speed: 15,
      },
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
