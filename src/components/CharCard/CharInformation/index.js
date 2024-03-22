import './style.css'

export default function CharInformation(props) {
  return <div className={`black-div ${props.showDiv ? 'show' : ''}`} />
}
