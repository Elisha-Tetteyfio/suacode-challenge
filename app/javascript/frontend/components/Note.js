import React from "react";

const Note = (note) => {
  const {title, body, id, created_at, updated_at} = note;
  return(
    <div className="content">
    <div className="titleDiv">
      <div className="title">{title}</div>
      <a href={`/notes/${id}/edit`}>Edit</a>
    </div>
      {/* <hr/> */}
      <div className="body">{body}</div>
      <div className="times">
        <div>Created at: <div>{created_at} </div></div>
        <div>
          Updated at: <div>{new Date(updated_at).toLocaleDateString()}</div>
          <div> {new Date(updated_at).toLocaleTimeString()} </div>
        </div>
      </div>
    </div>
  )
} 

export default Note