import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (params) => {
  const {noteTitle, noteBody} = params;

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
    // dispatch(addReservation(state));
    
    // e.preventDefault();

    navigate('/new');
  };


  return(
    <>
      <form>
        <input
          type="text"
          placeholder="Title"
        />

        <input
          type="text"
          placeholder="Note"
        />

        <button type="button" onClick={handleSubmit()}>Add note</button>
      </form>
    </>
  )
} 

export default Form;