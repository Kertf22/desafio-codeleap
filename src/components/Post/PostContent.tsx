import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
interface PostContentProps {
  username: string;
  content: string;
  date: string;
}

export const PostContent = (props: PostContentProps) => {
  const timeAgo = new TimeAgo("en-US");

  const handleTime = () => {
    const date = new Date(props.date);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    return timeAgo.format(now.getTime() - diff);
  };
  return (
    <div className="flex flex-col p-6 border border-gray_2 rounded-b-lg">
      <div className="flex flex-row py-1 gap-4 justify-between">
        <p className="text-gray text-md font">@{props.username}</p>
        <p className="text-gray text-md font">{handleTime()}</p>
      </div>
      <p className="text-lg">{props.content}</p>
    </div>
  );
};
