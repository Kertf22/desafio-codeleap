import { Dispatch } from "@reduxjs/toolkit";
import { api } from "../../config";
import { addPost } from "../../redux/posts";
import { Form } from "../../components/Modal/ModalEdit";
import { setLoading } from "../../redux/createStore";

export const create =
  (form: Form, username: string) =>
  async (dispatch: Dispatch): Promise<void> => {

    dispatch(setLoading(true))
    const res = await api.post(`/`, {
      ...form,
      username,
    });
    dispatch(addPost(res.data));
    dispatch(setLoading(false))
  };
