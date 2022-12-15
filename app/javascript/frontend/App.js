import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "./store/noteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const greet = useSelector(data => data.data)
  console.log(greet)
  return (
    <div>
      <>hello</>
    </div>
  );
}

export default App;
