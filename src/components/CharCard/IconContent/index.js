import './style.css'

export default function CharDescription(props) {
  const infoData = [
    { label: 'id', value: props.id },
    { label: 'position', value: props.position },
    { label: 'name', value: props.name },
    { label: 'class', value: props.classType },
    { label: 'race', value: props.race },
    { label: 'level', value: props.level },
    { label: 'exp', value: `${props.currentExp}/${props.nextLevelExp}` },
  ]

  const statusData = [
    { label: 'health', value: props.health },
    { label: 'attack', value: props.attack },
    { label: 'magic', value: props.magic },
    { label: 'defense', value: props.defense },
    { label: 'speed', value: props.speed },
  ]

  return (
    <>
      {props.selectedIcon === 'world' && <div className="world-div"></div>}

      {props.selectedIcon === 'book' && (
        <div className="book-div">
          {infoData.map((item, index) => (
            <div key={index} className="info-item">
              <label>{item.label}:</label>
              <label>{item.value}</label>
            </div>
          ))}
        </div>
      )}

      {props.selectedIcon === 'search' && (
        <div className="search-div">
          {statusData.map((item, index) => (
            <div key={index} className="status-item">
              <img src={`/images/icons/${item.label}.png`} alt={item.label} />
              <label>{item.value}</label>
            </div>
          ))}
        </div>
      )}

      {props.selectedIcon === 'power' && <div className="power-div"></div>}
    </>
  )
}
