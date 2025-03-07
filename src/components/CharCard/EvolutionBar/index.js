import './style.css'

export default function EvolutionBar(props) {
  return (
    <div className="smaller-bar">
      <div
        onClick={() => {
          props.setEvolution(props.currentEvolution)
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
  )
}
