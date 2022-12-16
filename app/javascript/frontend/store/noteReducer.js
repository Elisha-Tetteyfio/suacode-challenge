import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://localhost:3002/api/notes';
const GET_DATA = 'GET_DATA';
const POST_DATA = 'POST_DATA';
const PUT_DATA = 'PUT_DATA';
const DELETE_DATA = 'DELETE_DATA';

export const fetchData = createAsyncThunk(GET_DATA, async () => {
  const result = await fetch(url);
  const resultJson = await result.json();
  return resultJson;
});

export const postNote = createAsyncThunk(POST_DATA, async ({title, body}) => {
  const data = {title, body};
  await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });
  console.log(url)
});

export const updateNote = createAsyncThunk(PUT_DATA, async ({title, body, id}) => {
  const data = {title, body, id};
  await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });
});

export const deleteNote = createAsyncThunk(DELETE_DATA, async (id) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
});

const dataSlice = createSlice({
  name: 'notes',
  initialState: [],
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => action.payload,
    [postNote.fulfilled]: (state, action) => action.payload,
    [updateNote.fulfilled]: (state, action) => action.payload,
    [deleteNote.fulfilled]: (state, action) => action.payload,
  },
});

export default dataSlice.reducer;
