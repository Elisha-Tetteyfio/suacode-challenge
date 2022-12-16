import React from "react";

const Note = (note) => {
  const {title, body, id} = note;
  return(
    <>
      <a href={`/notes/${id}/edit`}>Edit</a>
      <div>{title}</div>
      <div>{body}</div>
    </>
  )
} 

export default Note