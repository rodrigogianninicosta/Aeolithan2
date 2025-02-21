import './style.css';
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import Subtitle from '../../../components/Subtitle'

export default function WriteName() {
    return(
        <div className="main-div">
            <Title />
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