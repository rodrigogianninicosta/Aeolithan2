import './style.css'

export default function PutArrows(props) {
  const arrowLeft = () => {}

  const arrowRight = () => {}

  return [
    <div className="arrow">
      <img
        className="icon"
        src={`/images/icons/arrow_left.svg`}
        alt={'before'}
        onClick={() => {
          arrowLeft()
        }}
      />
    </div>,
    props.Core(),
    <div className="arrow">
      <img
        className="icon"
        src={`/images/icons/arrow_right.svg`}
        alt={'after'}
        onClick={() => {
          arrowRight()
        }}
      />
    </div>,
  ]
}
