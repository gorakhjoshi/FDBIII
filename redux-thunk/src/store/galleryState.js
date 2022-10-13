import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk("gallery/getPhotos", async () => {
  const response = await fetch("https://picsum.photos/v2/list?page=3&limit=10");
  const data = await response.json();
  return data;
});

export const galleryState = createSlice({
  name: "gallery",
  initialState: { photos: [], isLoading: false, error: {} },
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.isLoading = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.photos = action.payload;
    },
    [getPhotos.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

// export const { getPhotos } = galleryState.action;

export default galleryState.reducer;
