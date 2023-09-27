import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("select");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const post = { title, body, author };
    const url = "http://localhost:8000";

    setIsPending(true);

    fetch(`${url}/posts/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      console.log("post added");
      setIsPending(false);
      navigate("/");
    });
  };
  return (
    <>
      <form
        action="#"
        onSubmit={handleSubmit}
        className="mx-auto my-0 max-w-sm "
      >
        <label className="block " htmlFor="title">
          Post Title:
        </label>
        <input
          className="input"
          id="title"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="block " htmlFor="body">
          Post Body:
        </label>
        <textarea
          className="input"
          required
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label className="block " htmlFor="author">
          Post author:
        </label>
        <select
          className="my-2 box-border block w-full rounded-md border px-2 py-2"
          name="select-author"
          id="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="select" disabled>
            Select one
          </option>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && (
          <button className="button mt-5 block w-full">Submit</button>
        )}
        {isPending && (
          <button className="button mt-5 block w-full" disabled>
            adding post...
          </button>
        )}
      </form>
    </>
  );
};

export default CreatePost;
