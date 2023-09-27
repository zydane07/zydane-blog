import PostList from "./PostList";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFecth from "../useFecth";

const Home = () => {
  const title = "Homepage";
  const url = "http://localhost:8000";
  const { data: posts, isPending, error }: any = useFecth(`${url}/posts`);

  return (
    <div
      className="home container-content"
      style={{
        height: "80vh",
      }}
    >
      <h1 className="text-header">{title}</h1>
      {error && <Error />}
      {isPending && <Loading />}
      {posts && <PostList posts={posts} title="All Posts" />}
    </div>
  );
};

export default Home;
