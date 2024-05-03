import {useState} from 'react'

export default function Player({initialName, symbol , isActive}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick(){
        setIsEditing((editing)=> {
            return !editing}
        );
    }

    function handleChange(event){

        setPlayerName(event.target.value)
    }

    let editableplayerName = <span className="player-name"> {playerName} </span>

    if(isEditing){
        editableplayerName = <input type="text"  value = {playerName} required  onChange = {handleChange}/>
    }
    return (
        <li className = {isActive ? 'active' : undefined}>
            <span>
          <span className="player-name">{editableplayerName}</span> 
          <span className="player-symbol">{symbol}</span>
            </span>
           <button onClick = {handleEditClick}>{ isEditing ? 'Save':'Edit' }</button>
          </li>
    )
}
