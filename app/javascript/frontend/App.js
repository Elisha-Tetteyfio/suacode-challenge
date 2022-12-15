import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Notes from "./components/Notes";
import { fetchData } from "./store/noteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <Notes />
    </div>
  );
}

export default App;
