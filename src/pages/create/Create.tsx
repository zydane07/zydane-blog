import CreatePost from "./CreatePost";

const Create = () => {
  const header = "Create New Post";

  return (
    <div className="create ">
      <h1 className="text-header">{header}</h1>
      <CreatePost />
    </div>
  );
};

export default Create;
