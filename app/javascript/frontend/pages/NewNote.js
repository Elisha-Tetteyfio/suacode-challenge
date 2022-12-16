import React from "react";
import Form from "../components/Form";

const NewNote = () => {
  return(
    <>
      <h1>New note</h1>
      <Form noteTitle="" noteBody=""/>
      <a href="/">Back to notes</a>
    </>
  )
} 

export default NewNote;