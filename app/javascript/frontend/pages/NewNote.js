import React from "react";
import Form from "../components/Form";

const NewNote = () => {
  return(
    <div className="newForm">
      <h1>New note</h1>
      <Form noteTitle="" noteBody=""/>
      <a href="/">Back to notes</a>
    </div>
  )
} 

export default NewNote;