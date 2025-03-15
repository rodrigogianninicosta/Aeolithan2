import './style.css'

export default function IconBar(props) {
  const handleIconClick = (icon) => {
    props.setSelectedIcon(props.selectedIcon === icon ? '' : icon)
    if (icon === 'power') {
      props.setDamage(10)
    }
  }

  return (
    <div className="icon-bar">
      {props.battleMode === false ? (
        <>
          <div className="icon" onClick={() => handleIconClick('world')}>
            <img src={`/images/icons/world.svg`} alt="world" />
          </div>
          <div className="icon" onClick={() => handleIconClick('book')}>
            <img src={`/images/icons/book.svg`} alt="book" />
          </div>
        </>
      ) : null}
      <div className="icon" onClick={() => handleIconClick('search')}>
        <img src={`/images/icons/lens.svg`} alt={'search'} />
      </div>
      <div className="icon" onClick={() => handleIconClick('power')}>
        <img src={`/images/icons/power.svg`} alt={'power'} />
      </div>
    </div>
  )
}
