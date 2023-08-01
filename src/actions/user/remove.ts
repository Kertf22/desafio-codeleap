import { Dispatch } from "@reduxjs/toolkit";
import { removeUser } from "../../redux/user";

export const remove = () => (dispatch: Dispatch) => {
  localStorage.removeItem("username");
  dispatch(removeUser());
};
