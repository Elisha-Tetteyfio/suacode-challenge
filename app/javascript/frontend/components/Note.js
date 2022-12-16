import React from "react";

const Note = (note) => {
  const {title, body, id, created_at, updated_at} = note;
  return(
    <>
      <a href={`/notes/${id}/edit`}>Edit</a>
      <div>{title}</div>
      <div>{body}</div>
      <div>
        <>Created at: {created_at}</>
        <>Updated at: {updated_at}</>
      </div>
    </>
  )
} 

export default Note