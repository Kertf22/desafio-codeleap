import { Dispatch } from "@reduxjs/toolkit";
import { api } from "../../config";
import { removePost } from "../../redux/posts";
import { setLoading } from "../../redux/createStore";


export const deleteP = (id: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(setLoading(true))
    await api.delete(`/${id}/`);
    dispatch(removePost(id))
    dispatch(setLoading(false))
  };
