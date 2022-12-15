import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

const Notes = () => {
  const notes = useSelector(data => data.data)

  return(
    <div>
      {notes.map((note) => (
            <Note
              key={note.id}
              title={note.title}
              body={note.body}
            />
          ))}
    </div>
  )
} 

export default Notes;