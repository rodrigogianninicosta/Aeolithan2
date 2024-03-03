import './style.css'

export default function SideBar({ onButtonClick }) {
  return (
    <div className="side-bar">
      <button onClick={onButtonClick}>
        <img
          className="icon"
          src={`/images/icons/scroll.svg`}
          alt={'information'}
        />
      </button>
    </div>
  )
}
