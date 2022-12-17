import React from "react";
import { Link } from "react-router-dom";
import Notes from "../components/Notes";

const Home = () => {
  return(
    <div className="home">
      <h1>All notes</h1>
      <Notes/>
      <Link to="/new" className="newLink">Add a note</Link>
    </div>
  )
} 

export default Home;