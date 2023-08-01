import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelectior } from "../redux/createStore";
import logo from "../assets/codeleap_logo_black 1.png";
import { verify } from "../actions/user/verify";
import { useEffect } from "react";
import Button from "../components/Button";

function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const username = await dispatch(verify());
      if (username) {
        navigate("/main");
      }
    };

    fetch();

  }, []);

  return (
    <div className="w-full max-w-[500px] rounded-lg  p-6 flex flex-col gap-2">
      <img src={logo} alt="logo" />
      <Button disabled={false} onClick={() => navigate("/signIn")}>
        SIGN IN
      </Button>
    </div>
  );
}

export default Home;
