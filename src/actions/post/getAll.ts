import { Dispatch } from "@reduxjs/toolkit";
import { api } from "../../config";
import { setPosts } from "../../redux/posts";
import { setLoading } from "../../redux/createStore";

export const getAll =
  (username: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(setLoading(true))
    const { data } = await api.get(`?username=${username}`);
    dispatch(setPosts(data.results));
    dispatch(setLoading(false))
  };
