import React from "react";
import Notes from "../components/Notes";

const Home = () => {
  return(
    <div className="home">
      <h1>All notes</h1>
      <Notes/>
      <a href="/new">Add a note</a>
    </div>
  )
} 

export default Home;