import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        height: "80vh",
      }}
    >
      <h2 className="text-header">We're Sorry Page not found</h2>
      <Link to="/" className="cursor-pointer hover:font-bold ">
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
