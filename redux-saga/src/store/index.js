import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import catsReducer from "./catState";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: catsReducer,
  middleware: [saga],
});
