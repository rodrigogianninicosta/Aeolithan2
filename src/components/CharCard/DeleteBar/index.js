import './style.css'
import { deleteCharacters } from '../../../api/delete'

export default function DeleteBar(props) {
  return (
    <div className="smaller-bar">
      <div
        onClick={() => {
          deleteCharacters(props.id)
        }}
      >
        <img className="icon" src={`/images/icons/delete.svg`} alt={'delete'} />
      </div>
    </div>
  )
}
