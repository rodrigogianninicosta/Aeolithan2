import './style.css'
import { deleteCharacters } from '../../../api/delete'

export default function DeleteBar(props) {
  const clickFunction = () => {
    const parties = ['party1', 'party2', 'party3']
    for (const party of parties) {
      const storedItem = localStorage.getItem(party)
      console.log(localStorage.getItem(party))
      if (storedItem) {
        localStorage.removeItem(party)
        return
      }
    }
    for (const party of parties) {
      if (!localStorage.getItem(party)) {
        localStorage.setItem(party, JSON.stringify(props))
        break
      }
    }
  }
  return (
    <div className="smaller-bar">
      <img
        className="icon"
        onClick={() => {
          clickFunction()
        }}
        src={`/images/icons/music_off.svg`}
        alt={'teamup'}
      />
      <img
        className="icon"
        onClick={() => {
          deleteCharacters(props.id)
        }}
        src={`/images/icons/delete.svg`}
        alt={'delete'}
      />
    </div>
  )
}
