import { useState } from 'react'
import './style.css'
import Button from '../../../components/Button'
import PutArrows from '../../../components/PutArrows'
import Title from '../../../components/Title'
import Subtitle from '../../../components/Subtitle'

export default function SelectChar() {
  const characters = [
    { character: 'guerreiro', name: 'guerreiro' },
    { character: 'mago', name: 'mago' },
    { character: 'ladino', name: 'ladino' },
    { character: 'piromante', name: 'piromante' },
    { character: 'amaldicoado', name: 'amaldicoado' },
    { character: 'infectado', name: 'infectado' },
  ]

  const [startIndex, setStartIndex] = useState(0)
  const visibleCharacters = characters.slice(startIndex, startIndex + 4)

  const next = () => {
    if (startIndex + 4 < characters.length) {
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
