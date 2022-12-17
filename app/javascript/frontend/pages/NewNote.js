import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

const NewNote = () => {
  return(
    <div className="newForm">
      <h1>New note</h1>
      <Form noteTitle="" noteBody=""/>
      <Link to="/">Back to notes</Link>
    </div>
  )
} 

export default NewNote;