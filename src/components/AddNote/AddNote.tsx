import { useState } from "react"
import "./AddNote.css"
import {NoteProps} from "../../models/notesType"

interface AddNotesProps{
    addNote:(note: NoteProps) => void
}

const AddNote = (props:AddNotesProps) => {


    const [text,setText] = useState('')

    const handleClick = () =>{
        props.addNote({
            text,
            priority:'low',
            id:0
        })
    }

    return (
        <div>
            <form className="add-note">
                <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
                <button type="submit" onClick={handleClick} >Add Note</button>
            </form>
        </div>
    )
}

export default AddNote