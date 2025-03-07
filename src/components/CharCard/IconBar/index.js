import './style.css'

export default function IconBar(props) {
  const handleIconClick = (icon) => {
    props.setSelectedIcon(props.selectedIcon === icon ? '' : icon)
  }

  return (
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
  )
}
