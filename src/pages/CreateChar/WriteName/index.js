import './style.css';
import Subtitle from '../../../components/Subtitle'
import Button from '../../../components/Button'

export default function WriteName() {
    return(
        <div className="main-div">
            <Subtitle message={'Insira o nome do personagem'} />
            <div className="write-name">
                <input id="name" autoComplete="off" type={'text'} maxLength="30"/>
            </div>
            <Button 
                before={'/createChar/selectChar'}
                after={'/createChar/confirmChar'}
            />
        </div>
    )
}