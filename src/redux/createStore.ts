import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import posts from "./posts";
import user from "./user";

const initialState = false

const loadingSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
   setLoading: (state, action) => { return action.payload }
  },
});
export const { setLoading } = loadingSlice.actions;

export const store = configureStore({
  reducer: {
    user,
    posts,
    loading: loadingSlice.reducer
  },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelectior: TypedUseSelectorHook<RootState> = useSelector;
