import { Link } from "react-router-dom";

const PostList = ({ posts, title }: any) => {
  //   const posts = props.posts;
  //   const title = props.title;

  return (
    <>
      <h2 className="px-4 text-2xl font-bold text-black">{title}</h2>
      {posts.map((post: any) => (
        <div
          className=" my-5 cursor-pointer border-b px-4 py-3 hover:rounded-sm hover:shadow"
          key={post.id}
        >
          <Link to={`/posts/${post.id}`}>
            <h2 className="text-xl font-bold text-blue-800">{post.title}</h2>
            <p className="text-gray-400">
              Written by: <span className="font-bold ">{post.author}</span>{" "}
            </p>
          </Link>

          {/* <button
            className="button-delete"
            onClick={() => handleDelete(post.id)}
          >
            <i className="fa-solid fa-trash me-1"></i>
            Delete
          </button> */}
        </div>
      ))}
    </>
  );
};

export default PostList;
