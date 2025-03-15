import './style.css'
import { deleteCharacters } from '../../../api/delete'

export default function DeleteBar(props) {
  const clickFunction = () => {
    const parties = ['party1', 'party2', 'party3']
    for (const party of parties) {
      const storedItem = localStorage.getItem(party)
      if (storedItem) {
        try {
          const item = JSON.parse(storedItem)
          if (item.id === props.id) {
            localStorage.removeItem(party)
            return
          }
        } catch (error) {
          console.error(`Error parsing localStorage item for ${party}`, error)
        }
      }
    }
    const emptySlot = parties.find((party) => !localStorage.getItem(party))
    if (emptySlot) {
      localStorage.setItem(emptySlot, JSON.stringify(props))
    }
  }
  return (
    <div className="smaller-bar">
      <img
        className="icon"
        onClick={() => {
          clickFunction()
        }}
        src={`/images/icons/party.svg`}
        alt={'teamup'}
      />
      <img
        className="icon"
        onClick={() => {
          deleteCharacters(props.id)
        }}
        src={`/images/icons/kill.svg`}
        alt={'delete'}
      />
    </div>
  )
}
