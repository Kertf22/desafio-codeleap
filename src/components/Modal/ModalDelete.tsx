import { deleteP } from "../../actions/post/delete";
import { useAppDispatch } from "../../redux/createStore";
import Button from "../Button";

interface ModalDeleteProps {
  id: number;
  closeModal: () => void;
}
export const ModalDelete = (props: ModalDeleteProps) => {
  const dispatch = useAppDispatch();

  async function handleDelete() {
    dispatch(deleteP(props.id));
    props.closeModal();
  }

  return (
    <div className="flex flex-col gap-4 justify-startt">
      <h1 className="font-semibold text-lg text-start">
        Are you sure you want to delete this item?
      </h1>
      <div className="flex justify-end">
        <Button variant="danger" onClick={handleDelete} disabled={false}>
          Delete
        </Button>
      </div>
    </div>
  );
};
