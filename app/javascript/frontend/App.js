import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Notes from "./components/Notes";
import { fetchData } from "./store/noteReducer";
import Form from "./components/Form"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NewNote from "./pages/NewNote";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/notes/new" element={<NewNote/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
