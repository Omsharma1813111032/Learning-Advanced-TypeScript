import { useState } from "react"
import "./AddNote.css"
import {NoteProps, Priority} from "../../models/notesType"
import { v4 as uuidv4 } from 'uuid';

interface AddNotesProps{
    addNotes:(note: NoteProps) => void
}

const AddNote = (props:AddNotesProps) => {

    const [text,setText] = useState('')
    const [priority,setPriority] = useState<Priority>('low')

    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault()
        props.addNotes({
            text,
            priority:priority,
            id:uuidv4()
        })

        setText("")
        setPriority('low')

    }

    return (
        <div>
            <form className="add-note">
                <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
                <select onChange={(e)=>{setPriority(e.target.value as Priority )}} value={priority} >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <button onClick={handleClick} >Add Note</button>
            </form>
        </div>
    )
}

export default AddNote