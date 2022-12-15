import React from "react";

const Note = (note) => {
  const {title, body} = note;
  return(
    <>
      <>Edit</>
      <div>{title}</div>
      <div>{body}</div>
    </>
  )
} 

export default Note