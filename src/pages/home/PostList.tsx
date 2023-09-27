import { Link } from "react-router-dom";
import axios from "axios";

const PostList = ({ posts, title }: any) => {
  const handleDelete = async (postId: number) => {
    const url = "http://localhost:8000";

    try {
      // Make a DELETE request to your API to delete the post by ID
      await axios.delete(`${url}/posts/${postId}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <h2 className="px-4 text-2xl font-bold text-black">{title}</h2>
      {posts.map((post: any) => (
        <div
          className=" my-5 flex cursor-pointer  justify-between border-b px-4 py-3 hover:rounded-sm hover:shadow"
          key={post.id}
        >
          <Link to={`/posts/${post.id}`}>
            <h2 className="text-xl font-bold text-blue-800">{post.title}</h2>
            <p className="text-gray-400">
              Written by: <span className="font-bold ">{post.author}</span>{" "}
            </p>
          </Link>
          <button
            className="button-delete "
            onClick={() => handleDelete(post.id)}
          >
            <i className="fa-solid fa-trash me-2"></i>Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default PostList;
