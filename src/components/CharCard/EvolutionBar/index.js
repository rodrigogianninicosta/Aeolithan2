import './style.css'

export default function EvolutionBar(props) {
  return (
    <div className="smaller-bar">
      <img
        onClick={() => {
          props.setEvolution(props.currentEvolution)
        }}
        src={`/images/icons/rookie.svg`}
        alt={'rookie'}
      />
      <img
        onClick={() => {
          props.setEvolution(2)
        }}
        src={`/images/icons/champion.svg`}
        alt={'champion'}
      />
    </div>
  )
}
