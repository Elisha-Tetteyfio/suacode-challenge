import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/home";
import NewNote from "./pages/NewNote";
import UpdateNote from "./pages/UpdateNote";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<NewNote/>} />
        <Route path="/notes/:id/edit" element={<UpdateNote/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
