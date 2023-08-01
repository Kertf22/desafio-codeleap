import { createSlice } from "@reduxjs/toolkit";

interface Post {
  id: number;
  title: string;
  content: string;
  username: string;
  created_datetime: string;
}

interface AddPostAction {
  type: string;
  payload: Post;
}

const initialState: Post[] = [];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
    addPost: (state, action: AddPostAction) => {
      state.push(action.payload);
    },
    updatePost: (state, action) => {
      const post = state.find((post) => post.id === action.payload.id);
      if (post) {
        post.title = action.payload.title;
        post.content = action.payload.content;
      }
      return state;
    },
    removePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { setPosts, addPost,updatePost, removePost } = postSlice.actions;
export default postSlice.reducer;
