import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateNote } from "../store/noteReducer";


const UpdateNote = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();

  const [state, setState] = useState({
    title: '',
    body: '',
    id: id,
  });

  useEffect(async() => {
    let data = await fetch("/api/notes/"+id)
    let dataJson = await data.json();
    setState({
      title: dataJson.title,
      body: dataJson.body,
      id: id,
    })
  }, [dispatch]);
  
  const handle = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(updateNote(state));
    console.log(state)
    navigate('/');
    window.location.reload();
  }

  return(
    <>
      <h1>Edit note</h1>
      <p>Changes made are automatically saved</p>
      <form>
        <input
          type="text"
          onChange={handle}
          name="title"
          value={state.title}
        />

        <input
          type="text"
          placeholder="Note"
          onChange={handle}
          name="body"
          value={state.body}
        />

        <button type="button" onClick={handleSubmit} >Update note</button>
      </form>
    </>
  )
} 

export default UpdateNote;