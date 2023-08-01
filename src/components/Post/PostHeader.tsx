import { Trash2, FileSignature } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";

interface PostHeaderProps {
  id: number;
  title: string;
  content: string;
}

export const PostHeader = (props: PostHeaderProps) => {
  const [modalOpen, setModalOpen] = useState({
    type: "",
  });

  return (
    <>
      <div className="bg-blue_1 p-4 flex flex-row justify-between rounded-t-lg">
        <h1 className="font-semibold text-xl text-white">{props.title}</h1>

        <div className="flex flex-row gap-4 text-white">
          <Trash2
            className="cursor-pointer"
            onClick={() => setModalOpen({ type: "delete" })}
          />
          <FileSignature
            className="cursor-pointer"
            onClick={() => setModalOpen({ type: "edit" })}
          />
        </div>
      </div>

      <Modal.Root
        isOpen={modalOpen.type === "delete"}
        setModalOpen={() => setModalOpen({ type: "" })}
      >
        <Modal.Delete
          id={props.id}
          closeModal={() => setModalOpen({ type: "" })}
        />
      </Modal.Root>

      <Modal.Root
        isOpen={modalOpen.type === "edit"}
        setModalOpen={() => setModalOpen({ type: "" })}
      >
        <Modal.Edit
          closeModal={() => setModalOpen({ type: "" })}
          id={props.id}
          title={props.title}
          content={props.content}
        />
      </Modal.Root>
    </>
  );
};
