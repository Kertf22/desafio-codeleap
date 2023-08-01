import Button from "../Button";
import { useState } from "react";
import TextArea from "../TextArea";
import Input from "../Input";
import { update } from "../../actions/post/update";
import { useAppDispatch } from "../../redux/createStore";

export interface Form {
  title: string;
  content: string;
}

interface ModalEditProps {
  id: number;
  title: string;
  content: string;
  closeModal: () => void;
}

export const ModalEdit = (props: ModalEditProps) => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<Form>({
    title: props.title,
    content: props.content,
  });

  const handleForm = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleEdit() {
    await dispatch(update(props.id, form));
    props.closeModal();
  }

  const handleValidate = () => {
    if (form.title === "" || form.content === "") return true;
    return false;
  };

  return (
    <div className="flex flex-col gap-4 justify-startt">
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
        // onChange={(e) => setUsername(e.target.value)}
      />

      <div className="flex gap-4 justify-end">
        <Button variant="outline" onClick={props.closeModal} disabled={false}>
          Cancel
        </Button>
        <Button
          variant="success"
          onClick={handleEdit}
          disabled={handleValidate()}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};
