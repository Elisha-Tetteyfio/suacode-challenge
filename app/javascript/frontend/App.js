import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NewNote from "./pages/NewNote";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<NewNote/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
