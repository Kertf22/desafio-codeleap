import { Dispatch } from "@reduxjs/toolkit";
import { api } from "../../config";
import {  updatePost } from "../../redux/posts";
import { Form } from "../../components/Modal/ModalEdit";
import { setLoading } from "../../redux/createStore";

export const update =
  (id: number, form: Form) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(setLoading(true))
    const res = await api.patch(`/${id}/`, {
      ...form,
    });
    dispatch(updatePost(res.data));
    dispatch(setLoading(false))
  };
