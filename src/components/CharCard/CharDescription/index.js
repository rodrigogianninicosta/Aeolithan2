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
    { label: 'nome', value: props.classType },
    { label: 'classe', value: props.classType },
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
        <label>{props.classType}</label>
      </div>
      <div className="icon-bar">
        <div className="icon" onClick={() => handleIconClick('world')}>
          <img src={`/images/icons/world.svg`} alt={'world'} />
        </div>
        <div className="icon" onClick={() => handleIconClick('book')}>
          <img src={`/images/icons/book.svg`} alt={'book'} />
        </div>
        <div className="icon" onClick={() => handleIconClick('search')}>
          <img src={`/images/icons/search.svg`} alt={'search'} />
        </div>
        <div className="icon" onClick={() => handleIconClick('power')}>
          <img src={`/images/icons/power.svg`} alt={'power'} />
        </div>
      </div>
      <div className="evolution">
        <div
          onClick={() => {
            props.setEvolution(1)
          }}
        >
          <img src={`/images/icons/rookie.svg`} alt={'rookie'} />
        </div>
        <div
          onClick={() => {
            props.setEvolution(2)
          }}
        >
          <img src={`/images/icons/champion.svg`} alt={'champion'} />
        </div>
      </div>
      <div className="evolution">
        <div
          onClick={() => {
            props.setEvolution(1)
          }}
        >
          <img src={`/images/icons/delete.svg`} alt={'delete'} />
        </div>
      </div>
      {selectedIcon === 'world' && <div className="world-div"></div>}
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
      {selectedIcon === 'power' && <div className="power-div"></div>}
    </div>
  )
}
