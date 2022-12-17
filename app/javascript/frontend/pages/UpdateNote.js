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
    dispatch(updateNote(state));
  };

  const handleSubmit = () => {
    dispatch(updateNote(state));
    console.log(state)
    navigate('/');
    window.location.reload();
  }

  return(
    <div className="newForm">
      <h1>Edit note</h1>
      <p>Changes made are automatically saved</p>
      <form>
        <label>
          Title
          <br/>
          <input
            type="text"
            placeholder="Title"
            onChange={handle}
            name="title"
            value={state.title}
            className="titleForm"
          />
        </label>
        <br/>

        <label>
          Note
          <br/>
          <textarea
            type="text"
            onChange={handle}
            name="body"
            value={state.body}
            className="bodyForm"
          />
        </label>
        <br/>

        <button type="button" onClick={handleSubmit} className="formButton">Update note</button>
      </form>
      <a href="/">Back to notes</a>
    </div>
    
  )
} 

export default UpdateNote;