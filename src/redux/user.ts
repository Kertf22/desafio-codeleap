import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  username: string;
}
const initialState: UserState = { username: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.username = action.payload;
    },
    removeUser: (state) => {
        state.username = "";
    }
  },

});
export const { addUser,removeUser } = userSlice.actions;
export default userSlice.reducer;