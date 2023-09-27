import { Link } from "react-router-dom";

const Navbar = () => {
  const title = "Zydane Blog";
  return (
    <nav className="navbar mx-auto my-0 flex max-w-xl items-center justify-between border-b-2 p-5 ">
      <h1 className="text-base font-bold text-blue-800 md:text-2xl">{title}</h1>
      <div className="links space-x-2 md:space-x-5 ">
        <Link className="navbar-menu " to="/">
          Home
        </Link>
        <Link className="navbar-menu " to="/create">
          Create Post
        </Link>
        <Link className="navbar-menu " to="/training">
          Training
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
