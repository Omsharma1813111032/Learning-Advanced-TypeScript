import { useState } from 'react'
import './App.css'
import AddNote from './components/AddNote/AddNote'
import Notes from './components/note/Note'
import { Data } from './components/note/data'
import { NoteProps } from './models/notesType'

function App() {

  const [notes,setNotes] = useState(Data)

  const addNotes = (note:NoteProps) =>{
    setNotes([note,...notes])
  } 

  return (
    <>
      <h1>Notes App</h1>
      <AddNote addNotes={addNotes} />
      <div>
        {
          notes.map((dt)=>(
            <Notes text={dt.text} priority={dt.priority} key={dt.id} />
          ))
        }
      </div>
    </>
  )
}

export default App
