import { Navigate } from "react-router-dom";
import Post from "../components/Post";
import { useAppSelectior } from "../redux/createStore";
import { usePosts } from "../hooks/usePosts";
import { UserInfo } from "../components/User";
import Loading from "../components/Loading";
function Main() {
  const user = useAppSelectior((state) => state.user);

  if (!user.username) return <Navigate to="/" />;

  const { posts } = usePosts();
  const loading = useAppSelectior((state) => state.loading);

  return (
    <div className="w-full h-full max-w-[800px]  bg-white flex flex-col gap-2">
        {loading && <Loading />}
      <div className="bg-blue_1 px-9 py-7 flex flex-row justify-between w-full">
        <h1 className="font-semibold text-xl text-white">CodeLeap Network</h1>

        <UserInfo username={user.username} />
      </div>
      <div className="flex flex-col gap-6 p-6 h-full overflow-auto">
        <Post.Root>
          <Post.Create />
        </Post.Root>
        {posts.map((post) => (
          <Post.Root key={post.id}>
            <Post.Header
              id={post.id}
              title={post.title}
              content={post.content}
            />
            <Post.Content
              content={post.content}
              date={post.created_datetime}
              username={post.username}
            />
          </Post.Root>
        ))}
      </div>
    </div>
  );
}

export default Main;
