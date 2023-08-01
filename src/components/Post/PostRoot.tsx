interface PostRootProps {
    children: React.ReactNode;
  }
  
  export const PostRoot = (props: PostRootProps) => {
    return <div >{props.children}</div>;
  };
  