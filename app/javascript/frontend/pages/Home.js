import React from "react";
import Notes from "../components/Notes";

const Home = () => {
  return(
    <>
      <h1>All notes</h1>
      <Notes/>
      <a href="/new">Add a note</a>
    </>
  )
} 

export default Home;