import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { set } from "../actions/user/set";
import { useAppDispatch } from "../redux/createStore";

function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleConfirm = (e: any) => {
    e.preventDefault();
    dispatch(set(username));
    navigate("/main");
  };

  return (
    <div className="w-full max-w-[500px] rounded-lg bg-white p-6 flex flex-col gap-2">
      <h1 className="font-bold text-xl">Welcome to CodeLeap network!</h1>

      <Input
        label="Please enter you username"
        placeholder="John doe"
        onChange={(e) => setUsername(e.target.value)}
      />

      <div className="flex justify-end">
        <Button onClick={handleConfirm} disabled={!username}>
          ENTER
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
