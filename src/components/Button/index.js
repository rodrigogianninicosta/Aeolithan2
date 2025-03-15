import { useNavigate } from 'react-router-dom'
import './style.css'

export default function Button(props) {
  const navigate = useNavigate()

  const before = () => {
    navigate(props.before)
  }

  const after = () => {
    if (props.afterAction) {
      props.afterAction()
    }
    navigate(props.after)
  }

  return (
    <div className="createchar-button">
      <div
        className="div"
        onClick={() => {
          before()
        }}
      >
        <label>Return</label>
      </div>
      {props.afterButton === true ? (
        <div
          className="div"
          onClick={() => {
            after()
          }}
        >
          <label>{props.text}</label>
        </div>
      ) : null}
    </div>
  )
}
