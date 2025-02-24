import './style.css'

export default function Subtitle(props) {
  return (
    <div className="subtitle">
      <div>
        <label>{props.message}</label>
      </div>
    </div>
  )
}
