import './style.css'

export default function CharDescription(props) {
  return (
    <div className="description">
      <div className="name">
        <label>{props.name}</label>
      </div>
      <div className="icon-bar">
        <label className="icon">
          <img src={`/images/icons/world.svg`} alt={'rookie'} />
        </label>
        <label className="icon">
          <img src={`/images/icons/book.svg`} alt={'champion'} />
        </label>
        <label className="icon">
          <img src={`/images/icons/search.svg`} alt={'champion'} />
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
    </div>
  )
}
