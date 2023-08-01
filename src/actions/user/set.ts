import { Dispatch } from "@reduxjs/toolkit";
import { addUser } from "../../redux/user";

export const set = (username: string) => (dispatch: Dispatch) => {
  localStorage.setItem("username", username);
  dispatch(addUser(username));
};
