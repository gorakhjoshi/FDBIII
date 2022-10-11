import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 5 },
  reducers: {
    increment(state, action) {
      console.log(action);
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false, isAdmin: false },
  reducers: {
    login(state) {
      console.log("Logging in");
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = falses;
    },
  },
});

export const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const AuthActions = authSlice.actions;
