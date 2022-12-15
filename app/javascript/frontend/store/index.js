import { configureStore } from '@reduxjs/toolkit';
import data from "./noteReducer";

const store = configureStore({
  reducer: {
    data,
  },
});

export default store;
