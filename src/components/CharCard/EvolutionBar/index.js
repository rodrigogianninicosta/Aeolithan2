import './style.css'

export default function EvolutionBar(props) {
  return (
    <div className="smaller-bar">
      <img
        className="icon"
        onClick={() => {
          props.setEvolution(props.currentEvolution)
          props.setUltimateForm('')
        }}
        src={`/images/icons/rookie.svg`}
        alt={'rookie'}
      />
      <img
        className="icon"
        onClick={() => {
          props.setEvolution(2)
          props.setUltimateForm('')
        }}
        src={`/images/icons/champion.svg`}
        alt={'champion'}
      />
      <img
        className="icon"
        onClick={() => {
          props.setEvolution(2)
          props.setUltimateForm('ultimate')
        }}
        src={`/images/icons/king.svg`}
        alt={'king'}
      />
    </div>
  )
}
