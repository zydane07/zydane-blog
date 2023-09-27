import { useParams } from "react-router-dom";
import useFecth from "../useFecth";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useNavigate } from "react-router-dom";

const PostDetail = () => {
  const { id }: any = useParams();
  const url = "http://localhost:8000";
  const { data: post, error, isPending } = useFecth(`${url}/posts/` + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("delete");
    fetch(`${url}/posts/` + post.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      {error && <Error />}
      {isPending && <Loading />}
      {post && (
        <>
          <h1 className="text-header">Post Detail - {id}</h1>
          <article className="container-content text-justify">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <h4 className="text-gray-400">
              Written by: <span className="font-bold"> {post.author}</span>
            </h4>
            <p className="mt-2">{post.body}</p>
          </article>
          <div className="container-content mt-4 text-end">
            <button className="button-delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PostDetail;
