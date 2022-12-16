import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { fetchData } from "../store/noteReducer";
import Note from "./Note";

const Notes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const notes = useSelector(data => data.data)


  return(
    <div>
      {notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
            />
          ))}
    </div>
  )
} 

export default Notes;