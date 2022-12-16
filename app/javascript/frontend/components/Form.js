import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { postNote } from "../store/noteReducer";

const Form = (params) => {
  const {noteTitle, noteBody} = params;
  const dispatch = useDispatch();

  const [state, setState] = useState({
    title: noteTitle,
    body: noteBody,
  });

  const handle = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(postNote(state));
    // e.preventDefault()
    navigate('/');
  };


  return(
    <>
      <form>
        <input
          type="text"
          placeholder="Title"
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

        <button type="button" onClick={handleSubmit}>Add note</button>
      </form>
    </>
  )
} 

export default Form;