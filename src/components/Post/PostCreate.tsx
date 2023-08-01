import { useAppDispatch, useAppSelectior } from "../../redux/createStore";
import Button from "../Button";
import Input from "../Input";
import { useState } from "react";
import TextArea from "../TextArea";
import { create } from "../../actions/post/create";

export const PostCreate = () => {
  const dispatch = useAppDispatch();
  const { username } = useAppSelectior((state) => state.user);

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleForm = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = async () => {
    dispatch(create(form, username));
    setForm({ title: "", content: "" });
  };

  const handleValidate = () => {
    if (form.title === "" || form.content === "") return true;
    return false;
  };

  return (
    <>
      <div className="flex flex-col gap-2 p-6 rounded-lg border border-gray_2">
        <h1 className="font-semibold text-xl">What’s on your mind?</h1>
        <Input
          label="Title"
          placeholder="Hello world"
          name="title"
          value={form.title}
          onChange={handleForm}
        />
        <TextArea
          label="Content"
          placeholder="Content here"
          name="content"
          value={form.content}
          onChange={handleForm}
        />
        <div className="flex justify-end">
          <Button onClick={handleConfirm} disabled={handleValidate()}>
            Create
          </Button>
        </div>
      </div>
    </>
  );
};
