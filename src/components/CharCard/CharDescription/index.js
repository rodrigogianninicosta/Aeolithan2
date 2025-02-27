import React, { useState } from 'react'
import './style.css'

export default function CharDescription(props) {
  const [selectedIcon, setSelectedIcon] = useState('')

  const handleIconClick = (icon) => {
    setSelectedIcon(selectedIcon === icon ? '' : icon)
  }

  const infoData = [
    { label: 'id', value: props.id },
    { label: 'posição', value: props.position },
    { label: 'nome', value: props.name },
    { label: 'classe', value: props.character },
    { label: 'raça', value: props.race },
    { label: 'level', value: props.level },
    { label: 'exp', value: `${props.exp}/10` },
  ]

  const statusData = [
    { label: 'health', value: props.health },
    { label: 'attack', value: props.attack },
    { label: 'magic', value: props.magic },
    { label: 'defense', value: props.defense },
    { label: 'speed', value: props.speed },
  ]

  return (
    <div className="description">
      <div className="name">
        <label>{props.name}</label>
      </div>
      <div className="icon-bar">
        <label className="icon" onClick={() => handleIconClick('world')}>
          <img src={`/images/icons/world.svg`} alt={'world'} />
        </label>
        <label className="icon" onClick={() => handleIconClick('book')}>
          <img src={`/images/icons/book.svg`} alt={'book'} />
        </label>
        <label className="icon" onClick={() => handleIconClick('search')}>
          <img src={`/images/icons/search.svg`} alt={'search'} />
        </label>
        <label className="icon" onClick={() => handleIconClick('power')}>
          <img src={`/images/icons/power.svg`} alt={'power'} />
        </label>
      </div>
      <div className="evolution">
        <label
          onClick={() => {
            props.setEvolution(1)
          }}
        >
          <img src={`/images/icons/rookie.svg`} alt={'rookie'} />
        </label>
        <label
          onClick={() => {
            props.setEvolution(2)
          }}
        >
          <img src={`/images/icons/champion.svg`} alt={'champion'} />
        </label>
      </div>
      {selectedIcon === 'world' && (
        <div className="world-div">
          <p>This is the World Div</p>
        </div>
      )}
      {selectedIcon === 'book' && (
        <div className="book-div">
          {infoData.map((item, index) => (
            <div key={index}>
              <label>{item.label + ':'}</label>
              <label>{item.value}</label>
            </div>
          ))}
        </div>
      )}
      {selectedIcon === 'search' && (
        <div className="book-div">
          {statusData.map((item, index) => (
            <div key={index}>
              <img src={`/images/icons/${item.label}.png`} alt={item.label} />
              <label>{item.value}</label>
            </div>
          ))}
        </div>
      )}
      {selectedIcon === 'power' && (
        <div className="power-div">
          <p>This is the power Div</p>
        </div>
      )}
    </div>
  )
}
