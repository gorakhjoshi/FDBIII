import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getPhotos = createAsyncThunk("gallery/getPhotos", async () => {
  const repsponse = await fetch(
    "https://picsum.photos/v2/list?page=3&limit=10"
  );
  const data = await Response.json();
  return data;
});

export const galleryState = createSlice({
  name: "gallery",
  initialState: { photos: [], isLoading: false },
  extraReducers: {
    [getPhotos.pending]: () => {},
    [getPhotos.fulfilled]: () => {},
    [getPhotos.rejected]: () => {},
  },
});

export default galleryState.reducer;
