import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { deleteNote, fetchData } from "../store/noteReducer";
import Note from "./Note";

const Notes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const notes = useSelector(data => data.data)

  const del = (id) => {
    dispatch(deleteNote(id));
    window.location.reload();
  }

  return(
    <div>
      {notes.map((note) => (
        <div>
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
            />
            <button type="button" onClick={()=>del(note.id)}>Delete note</button>
            {console.log(note.id)}
            </div>
          ))}
    </div>
  )
} 

export default Notes;