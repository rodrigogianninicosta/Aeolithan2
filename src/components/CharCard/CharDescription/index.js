import './style.css'

export default function CharDescription(props) {
  return (
    <div className="description">
      <div className="name">
        <label>{props.name}</label>
      </div>
      <div className="evolution">
        <label
          onClick={() => {
            props.setEvolution(1)
          }}
        >
          1º
        </label>
        <label
          onClick={() => {
            props.setEvolution(2)
          }}
        >
          2º
        </label>
        <label
          onClick={() => {
            props.setEvolution(3)
          }}
        >
          3º
        </label>
      </div>
    </div>
  )
}
