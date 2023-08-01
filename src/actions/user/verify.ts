import { Dispatch } from "@reduxjs/toolkit";
import { addUser } from "../../redux/user";

export const verify = () => async (dispatch: Dispatch) => {
  const username = localStorage.getItem("username");
  if (username) {
    dispatch(addUser(username));
  }
  return username;
};
