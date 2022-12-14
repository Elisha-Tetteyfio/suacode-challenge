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
    navigate('/');
  };


  return(
    <>
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
            placeholder="Write your note here ..."
            onChange={handle}
            name="body"
            value={state.body}
            className="bodyForm"
          />
        </label>
        <br/>

        <button type="button" onClick={handleSubmit} className="formButton">Add note</button>
      </form>
    </>
  )
} 

export default Form;