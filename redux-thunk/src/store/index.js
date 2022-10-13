import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./galleryState";

export const store = configureStore({ reducer: { gallery: galleryReducer } });
