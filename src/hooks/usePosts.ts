import { useEffect } from "react";
import { useAppDispatch, useAppSelectior } from "../redux/createStore";
import { getAll } from "../actions/post/getAll";

export const usePosts = () => {
  const { user, posts } = useAppSelectior((state) => state);
  const dispatch = useAppDispatch();

  const fetch = async () => {
    if (user.username) {
      dispatch(getAll(user.username));
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { posts };
};
