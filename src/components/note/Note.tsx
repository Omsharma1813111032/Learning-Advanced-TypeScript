import "./Note.css"
import {NoteType} from "../../models/notesType"



const Notes = (props:NoteType) => {
  return (
    <div className={`note ${props.priority}`} >
        {props.text}
    </div>
  )
}

export default Notes