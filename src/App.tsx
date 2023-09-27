import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Training from "./pages/Training";
import Create from "./pages/create/Create";
import PostDetail from "./pages/home/PostDetail";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";

const NavbarConditional = () => {
  const location = useLocation();

  // Check if the current route is '/login' and exclude Navbar rendering
  const excludeNavbar = location.pathname === "/login";

  return !excludeNavbar ? <Navbar /> : null;
};

const App = () => {
  return (
    <Router>
      <>
        <NavbarConditional />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/training" element={<Training />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    </Router>
  );
};
export default App;
